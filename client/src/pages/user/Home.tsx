import Stats from '@/components/user/home/Stats'
import { Hero } from '@/components/user/home/Hero'
import Services from '@/components/user/home/Services'
import Tools from '@/components/user/home/Tools'
import { Features } from '@/components/user/home/Features'
import Process from '@/components/user/home/Process'
import Pricing from '@/components/user/home/Pricing'
import WhyChooseUs from '@/components/user/home/WhyChooseUs'
import Testimonials from '@/components/user/home/Testimonials'
import { Contact } from '@/components/user/home/Contact'
import SEO from '@/components/user/common/SEO'
import { heroData } from '@/constants/hero'
import { homeSEO } from '@/constants/seo'
import ParticleCanvas from '@/components/workui/ParticleCanvas'

export default function Home() {
    return (
        <div>
            <ParticleCanvas />
            {/* SEO */}
            <SEO
                title={homeSEO.title}
                description={homeSEO.description}
                keywords={homeSEO.keywords}
                url={homeSEO.url}
                canonical={homeSEO.canonical}
                image={homeSEO.image}
                type={homeSEO.type}
            />

            {/* Components */}
            <Hero
                title={heroData.title}
                subtitle={heroData.subtitle}
                eyebrow={heroData.eyebrow}
                ctaLabel={heroData.ctaLabel}
            />
            <Tools />
            <Stats />
            <Services />
            <Features />
            <Process />
            <Pricing />
            <Testimonials />
            <WhyChooseUs />
            <Contact />
        </div>
    )
}
