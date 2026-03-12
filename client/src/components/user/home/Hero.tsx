import { ChevronRight } from 'lucide-react'
import FlipLink from '../../ui/text-effect-flipper'
import { NavLink } from '../common/NavLink'

interface HeroProps {
    eyebrow?: string
    title: string
    subtitle: string
    ctaLabel?: string
}

export function Hero({ eyebrow = 'Innovate Without Limits', title, subtitle, ctaLabel }: HeroProps) {
    return (
        <div className="bg-black/80">
            <section
                id="home"
                className="relative flex flex-col justify-center mx-auto w-full pt-40 px-5 text-center md:px-8 
     lg:min-h-[calc(100vh)] overflow-hidden 
     bg-[linear-gradient(to_bottom,#000,#0000_30%,#898e8e_78%,#000000_99%_50%)] 
      rounded-b-xl">
                {/* Grid BG */}
                <div
                    className="absolute -z-10 inset-0 opacity-80 h-[600px] w-full 
                    bg-black
        bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
        bg-[size:6rem_5rem] 
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
                />

                {/* Radial Accent */}
                <div
                    className="absolute left-1/2 top-[calc(100%-90px)] lg:top-[calc(100%-150px)] 
        h-[500px] w-[700px] md:h-[500px] md:w-[1100px] lg:h-[750px] lg:w-[140%] 
        -translate-x-1/2 rounded-[100%] border-[#B48CDE] bg-black 
        bg-[radial-gradient(closest-side,#000_82%,#ffffff)] 
        animate-fade-up"
                />

                {/* Eyebrow */}
                {eyebrow && (
                    <NavLink href="#contact">
                        <div className="group">
                            <span
                                className="text-sm text-gray-400 font-geist mx-auto px-5 py-2 
                            bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  
            border-[2px] border-white/5 
            rounded-3xl w-fit tracking-tight uppercase flex items-center justify-center">
                                <FlipLink>{eyebrow}</FlipLink>
                                <ChevronRight className="inline w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </div>
                    </NavLink>
                )}

                {/* Title — only change: to-white/40 → to-[oklch(0.623_0.214_259.815)] */}
                <h1
                    className="animate-fade-in -translate-y-4 text-balance 
        bg-gradient-to-br from-30% 
        bg-clip-text py-6 text-5xl font-bold leading-none tracking-tighter 
        text-transparent sm:text-6xl md:text-7xl lg:text-8xl 
        from-white to-[oklch(0.623_0.214_259.815)]">
                    {title}
                </h1>

                {/* Subtitle */}
                <p className="animate-fade-in mb-8 -translate-y-4 text-balance text-lg tracking-tight text-gray-400 md:text-xl">{subtitle}</p>

                {/* CTA */}
                {ctaLabel && (
                    <NavLink href="#contact">
                        <button className="cursor-pointer group relative bg-black hover:bg-zinc-300 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 ease-in-out shadow hover:shadow-lg w-40 h-12 hover:border-black border">
                            <div className="relative flex items-center justify-center gap-2">
                                <span className="relative inline-block overflow-hidden">
                                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">{ctaLabel}</span>
                                    <span className="absolute inset-0 text-black transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                                        Right Now
                                    </span>
                                </span>

                                <svg
                                    className="w-4 h-4 transition-transform duration-200 group-hover:rotate-45"
                                    viewBox="0 0 24 24">
                                    <circle
                                        fill="currentColor"
                                        stroke="#000"
                                        r="11"
                                        cy="12"
                                        cx="12"></circle>
                                    <path
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2"
                                        stroke="black"
                                        d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5"></path>
                                </svg>
                            </div>
                        </button>
                    </NavLink>
                )}

                {/* Bottom Fade */}
                <div className="animate-fade-up relative mt-32 opacity-0 [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_10%,transparent)]" />
            </section>
        </div>
    )
}
