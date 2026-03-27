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
                className="relative flex flex-col justify-center mx-auto w-full pt-40 px-5 text-center md:px-8 lg:min-h-[calc(100vh)] overflow-hidden rounded-b-xl"
                style={{ background: 'linear-gradient(to bottom, #000 0%, transparent 30%, #0d1b3e 78%, #000 99%)' }}>
                <style>{`
                    @keyframes hero-twinkle {
                        0%, 100% { opacity: 0.15; transform: scale(1); }
                        50%       { opacity: 0.9;  transform: scale(1.6); }
                    }
                    @keyframes hero-fade-in {
                        from { opacity: 0; transform: translateY(24px); }
                        to   { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes hero-fade-up {
                        from { opacity: 0; transform: translateY(20px); }
                        to   { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes hero-scan {
                        0%   { top: 0%; opacity: 0; }
                        10%  { opacity: 0.35; }
                        90%  { opacity: 0.35; }
                        100% { top: 100%; opacity: 0; }
                    }
                    @keyframes hero-globe-breathe {
                        0%, 100% { box-shadow: 0 -16px 120px rgba(96,165,250,0.22), 0 -4px 60px rgba(96,165,250,0.14); }
                        50%      { box-shadow: 0 -24px 160px rgba(96,165,250,0.34), 0 -6px 80px rgba(96,165,250,0.22); }
                    }

                    .hero-star { animation: hero-twinkle var(--dur, 3s) ease-in-out infinite; animation-delay: var(--delay, 0s); }
                    .hero-eyebrow  { animation: hero-fade-in 0.7s cubic-bezier(0.4,0,0.2,1) both; animation-delay: 0.1s; }
                    .hero-title    { animation: hero-fade-in 0.8s cubic-bezier(0.4,0,0.2,1) both; animation-delay: 0.25s; }
                    .hero-subtitle { animation: hero-fade-in 0.8s cubic-bezier(0.4,0,0.2,1) both; animation-delay: 0.4s; }
                    .hero-cta      { animation: hero-fade-in 0.8s cubic-bezier(0.4,0,0.2,1) both; animation-delay: 0.55s; }

                    .hero-scan-line {
                        position: absolute; left: 0; right: 0; height: 1px;
                        background: linear-gradient(90deg, transparent, rgba(96,165,250,0.16) 40%, rgba(96,165,250,0.16) 60%, transparent);
                        animation: hero-scan 7s ease-in-out infinite;
                        pointer-events: none; z-index: 2;
                    }

                    .hero-globe-wrap {
                        animation: hero-fade-up 1.2s cubic-bezier(0.4,0,0.2,1) both, hero-globe-breathe 5s ease-in-out 1.4s infinite;
                        animation-delay: 0.3s, 1.4s;
                    }

                    /* Prevent NavLink anchor from ever showing a white background */
                    .hero-cta a, .hero-eyebrow a {
                        background: transparent !important;
                        display: inline-block;
                    }

                    /* Eyebrow pill */
                    .hero-pill {
                        display: inline-flex; align-items: center; gap: 8px;
                        padding: 6px 18px; border-radius: 999px;
                        background: rgba(255,255,255,0.04);
                        border: 1px solid rgba(255,255,255,0.1);
                        backdrop-filter: blur(12px);
                        box-shadow: 0 1px 0 rgba(255,255,255,0.06) inset;
                        transition: border-color 0.2s, background 0.2s; cursor: pointer;
                    }
                    .hero-pill:hover { border-color: rgba(96,165,250,0.35); background: rgba(96,165,250,0.07); }

                    /* ── CTA button — professional spacing ── */
                    .hero-btn {
                        position: relative;
                        display: inline-flex;
                        align-items: center;
                        gap: 16px;
                        padding: 13px 32px;
                        border-radius: 999px;
                        background: #000;
                        border: 1px solid rgba(255,255,255,0.15);
                        color: #fff;
                        font-weight: 600;
                        font-size: 14px;
                        cursor: pointer;
                        overflow: hidden;
                        isolation: isolate;
                        outline: none;
                        transition: border-color 0.25s, box-shadow 0.25s;
                        -webkit-tap-highlight-color: transparent;
                        white-space: nowrap;
                    }
                    .hero-btn:focus-visible { outline: 2px solid rgba(96,165,250,0.6); outline-offset: 3px; }
                    
                    /* Blue overlay on hover */
                    .hero-btn::before {
                        content: '';
                        position: absolute;
                        inset: 0;
                        background: linear-gradient(135deg, rgba(96,165,250,0.15), rgba(96,165,250,0.04));
                        opacity: 0;
                        transition: opacity 0.25s;
                        pointer-events: none;
                        border-radius: inherit;
                    }
                    .hero-btn:hover { border-color: rgba(96,165,250,0.5); box-shadow: 0 0 24px rgba(96,165,250,0.2); }
                    .hero-btn:hover::before { opacity: 1; }
                    
                    .hero-btn-icon {
                        width: 24px;
                        height: 24px;
                        border-radius: 50%;
                        background: #fff;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        transition: transform 0.2s;
                        flex-shrink: 0;
                        position: relative;
                        z-index: 1;
                    }
                    .hero-btn:hover .hero-btn-icon { transform: rotate(45deg); }
                    
                    .hero-btn-label {
                        position: relative;
                        display: inline-flex;
                        align-items: center;
                        white-space: nowrap;
                        z-index: 1;
                        overflow: hidden;
                        flex-shrink: 0;
                        letter-spacing: 0.02em;
                    }
                    .hero-btn-label span {
                        display: inline-block;
                        transition: transform 0.28s cubic-bezier(0.4,0,0.2,1);
                    }
                    .hero-btn-label span:last-child {
                        position: absolute;
                        top: 0;
                        left: 0;
                        transform: translateY(100%);
                        color: #fff;
                    }
                    .hero-btn:hover .hero-btn-label span:first-child { transform: translateY(-100%); }
                    .hero-btn:hover .hero-btn-label span:last-child  { transform: translateY(0); }

                    /* ── Mobile optimisations ── */
                    @media (max-width: 640px) {
                        /* Reduce top padding so content isn't hidden behind navbar */
                        #home { padding-top: 120px !important; min-height: 100svh; }

                        /* Smaller eyebrow pill on mobile */
                        .hero-pill { padding: 5px 14px; gap: 6px; }

                        /* Title — no overflow on narrow screens */
                        .hero-title { word-break: break-word; padding: 16px 0 !important; }

                        /* Subtitle readable on mobile */
                        .hero-subtitle { font-size: 15px !important; margin-bottom: 32px !important; }

                        /* CTA button with adjusted spacing for mobile */
                        .hero-btn { 
                            padding: 12px 28px; 
                            font-size: 13px; 
                            gap: 14px;
                        }
                        .hero-btn-icon { width: 22px; height: 22px; }

                        /* Globe — smaller on mobile so it doesn't bleed too much */
                        .hero-globe-wrap {
                            top: calc(100% - 60px) !important;
                            height: 280px !important;
                            width: 120vw !important;
                        }

                        /* Fewer star jitters on low-power mobile */
                        .hero-star { animation-duration: 4s !important; }

                        /* Bottom fade spacing */
                        .hero-fade-bottom { margin-top: 48px !important; }
                    }

                    @media (max-width: 400px) {
                        #home { padding-top: 100px !important; }
                        .hero-globe-wrap {
                            height: 220px !important;
                            top: calc(100% - 50px) !important;
                        }
                    }
                `}</style>

                {/* ── Scan line ── */}
                <div className="hero-scan-line" />

                {/* ── Grid BG ── */}
                <div
                    className="absolute -z-10 inset-0 opacity-80 h-[600px] w-full bg-black"
                    style={{
                        backgroundImage:
                            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
                        backgroundSize: '6rem 5rem',
                        maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%)'
                    }}
                />

                {/* ── Stars ── */}
                {[
                    { top: '7%', left: '9%', size: 2, dur: '2.8s', delay: '0s' },
                    { top: '14%', left: '76%', size: 1.5, dur: '3.5s', delay: '0.4s' },
                    { top: '21%', left: '53%', size: 2.5, dur: '2.2s', delay: '0.9s' },
                    { top: '5%', left: '38%', size: 1, dur: '4s', delay: '1.2s' },
                    { top: '29%', left: '87%', size: 2, dur: '3.1s', delay: '0.6s' },
                    { top: '11%', left: '23%', size: 1.5, dur: '2.6s', delay: '1.5s' },
                    { top: '17%', left: '91%', size: 1, dur: '3.8s', delay: '0.2s' },
                    { top: '33%', left: '4%', size: 2, dur: '2.9s', delay: '0.8s' },
                    { top: '4%', left: '63%', size: 1.5, dur: '3.3s', delay: '1.1s' },
                    { top: '26%', left: '44%', size: 1, dur: '4.2s', delay: '0.3s' },
                    { top: '19%', left: '16%', size: 1, dur: '3.6s', delay: '0.7s' },
                    { top: '9%', left: '82%', size: 2, dur: '2.4s', delay: '1.3s' }
                ].map((s, i) => (
                    <div
                        key={i}
                        className="hero-star absolute rounded-full bg-white pointer-events-none"
                        style={{ top: s.top, left: s.left, width: s.size, height: s.size, '--dur': s.dur, '--delay': s.delay } as React.CSSProperties}
                    />
                ))}

                {/* ══ EARTH GLOBE ══ */}
                <div
                    className="hero-globe-wrap absolute left-1/2 top-[calc(100%-90px)] lg:top-[calc(100%-150px)] h-[500px] w-[700px] md:h-[500px] md:w-[1100px] lg:h-[750px] lg:w-[140%] -translate-x-1/2 rounded-[100%]"
                    style={{
                        isolation: 'isolate',
                        overflow: 'hidden',
                        backgroundImage: 'url(/earth.png)',
                        backgroundSize: '100% auto',
                        backgroundPosition: 'center 72%',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            borderRadius: 'inherit',
                            background: 'radial-gradient(ellipse 90% 90% at 50% 50%, transparent 55%, rgba(0,0,0,0.6) 100%)',
                            pointerEvents: 'none'
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '28%',
                            background: 'linear-gradient(to top, #000 0%, transparent 100%)',
                            pointerEvents: 'none'
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '25%',
                            background: 'linear-gradient(to bottom, rgba(0,5,20,0.9) 0%, transparent 100%)',
                            pointerEvents: 'none'
                        }}
                    />
                </div>

                {/* ── Upward light bloom ── */}
                <div
                    className="absolute left-1/2 pointer-events-none"
                    style={{
                        bottom: '5%',
                        transform: 'translateX(-50%)',
                        width: 1000,
                        height: 320,
                        background: 'radial-gradient(ellipse, rgba(96,165,250,0.12) 0%, rgba(37,99,235,0.05) 45%, transparent 70%)',
                        filter: 'blur(32px)',
                        zIndex: 0
                    }}
                />

                {/* ── Title glow ── */}
                <div
                    className="absolute left-1/2 pointer-events-none"
                    style={{
                        top: '38%',
                        transform: 'translateX(-50%)',
                        width: 600,
                        height: 200,
                        borderRadius: '50%',
                        background: 'radial-gradient(ellipse, rgba(96,165,250,0.09) 0%, transparent 70%)',
                        filter: 'blur(30px)',
                        zIndex: 0
                    }}
                />

                {/* ── Content ── */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                    {eyebrow && (
                        <NavLink href="#contact">
                            <div className="hero-eyebrow flex justify-center mb-8">
                                <div className="group hero-pill">
                                    <span
                                        style={{
                                            width: 6,
                                            height: 6,
                                            borderRadius: '50%',
                                            background: '#60a5fa',
                                            boxShadow: '0 0 6px #60a5fa',
                                            display: 'inline-block',
                                            flexShrink: 0
                                        }}
                                    />
                                    <span
                                        style={{
                                            fontSize: 11,
                                            fontWeight: 700,
                                            letterSpacing: '0.14em',
                                            textTransform: 'uppercase',
                                            color: 'rgba(255,255,255,0.55)',
                                            fontFamily: 'var(--font-barlow-condensed, sans-serif)'
                                        }}>
                                        <FlipLink>{eyebrow}</FlipLink>
                                    </span>
                                    <ChevronRight
                                        size={14}
                                        style={{ color: 'rgba(255,255,255,0.35)' }}
                                        className="group-hover:translate-x-0.5"
                                    />
                                </div>
                            </div>
                        </NavLink>
                    )}

                    <h1
                        className="hero-title text-balance py-6 text-5xl font-bold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl"
                        style={{
                            background: 'linear-gradient(160deg, #ffffff 0%, #ffffff 35%, #93c5fd 65%, #60a5fa 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            filter: 'drop-shadow(0 0 32px rgba(96,165,250,0.18))'
                        }}>
                        {title}
                    </h1>

                    <p
                        className="hero-subtitle mb-10 text-balance text-lg tracking-tight md:text-xl"
                        style={{ color: 'rgba(255,255,255,0.38)', fontFamily: 'var(--font-barlow, sans-serif)' }}>
                        {subtitle}
                    </p>

                    {ctaLabel && (
                        <div className="hero-cta flex justify-center">
                            <a href="#contact" className="hero-btn">
                                <span className="hero-btn-label">
                                    <span>{ctaLabel}</span>
                                    <span>Right Now</span>
                                </span>
                                <div className="hero-btn-icon">
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2.5"
                                            stroke="black"
                                            d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5"
                                        />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    )}
                </div>

                {/* ── Bottom Fade ── */}
                <div
                    className="hero-fade-bottom relative mt-32 opacity-0"
                    style={{ perspective: 2000, animation: 'hero-fade-up 0.8s ease both', animationDelay: '0.7s' }}>
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            zIndex: 50,
                            background: 'linear-gradient(to top, hsl(var(--background)) 10%, transparent)'
                        }}
                    />
                </div>
            </section>
        </div>
    )
}