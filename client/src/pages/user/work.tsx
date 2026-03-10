import '../../styles/work.css'

import ParticleCanvas from '@/components/workui/ParticleCanvas'
import CursorGlow from '@/components/workui/CursorGlow'
import ScrollReveal from '@/components/workui/ScrollReveal'

export default function WorkPage() {
    return (
        <div className="work-page">
            <ParticleCanvas />
            <CursorGlow />
            <ScrollReveal />

            {/* HERO */}
            <section
                className="hero"
                id="work">
                <div className="hero-bg"></div>
                <div className="hero-grid"></div>
                <div className="hero-arc"></div>
                <div className="hero-arc-inner"></div>
                <div className="hero-corner tl"></div>
                <div className="hero-corner tr"></div>
                <div className="hero-corner bl"></div>
                <div className="hero-corner br"></div>

                <div className="hero-stat-chip c1">
                    <div className="chip-float">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div className="chip-icon">🚀</div>
                            <div>
                                <div className="chip-val">50+</div>
                                <div className="chip-lbl">Projects</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-stat-chip c2">
                    <div
                        className="chip-float"
                        style={{ animationDelay: '.8s' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div className="chip-icon">🏫</div>
                            <div>
                                <div className="chip-val">20+</div>
                                <div className="chip-lbl">Schools</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-stat-chip c3">
                    <div className="chip-float-r">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div className="chip-icon amber">⭐</div>
                            <div>
                                <div className="chip-val">95%</div>
                                <div className="chip-lbl">Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-stat-chip c4">
                    <div
                        className="chip-float-r"
                        style={{ animationDelay: '.6s' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div className="chip-icon amber">📍</div>
                            <div>
                                <div className="chip-val">10+</div>
                                <div className="chip-lbl">Cities</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero-badge">
                    <span className="hero-badge-dot"></span>
                    Portfolio &amp; Case Studies — 2025
                </div>

                <h1>
                    <span className="stroke-word">WORK</span>
                    <br />
                    COLLECTION
                    <br />
                    <em>&amp; Impact</em>
                </h1>

                <div className="hero-divline"></div>

                <p className="hero-sub">
                    From enterprise software to AI-powered STEAM labs for schools —<br />
                    everything we&apos;ve built, shipped, and launched.
                </p>

                <div className="hero-ctas">
                    <a
                        href="#collection"
                        className="hero-cta">
                        Explore Our Work
                        <svg
                            width="15"
                            height="15"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </a>
                    <a
                        href="#cta"
                        className="hero-cta-outline">
                        Start a Project
                        <svg
                            width="14"
                            height="14"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 19.5l15-15M19.5 4.5H8.25M19.5 4.5v11.25"
                            />
                        </svg>
                    </a>
                </div>

                <div className="hero-scroll">
                    <span>Scroll</span>
                    <div className="scroll-line"></div>
                </div>

                <div className="hero-ticker">
                    <div className="ticker-track">
                        <span className="ticker-item hi">
                            Web Development<span className="ticker-dot"></span>
                        </span>
                        <span className="ticker-item">
                            Mobile Apps<span className="ticker-dot"></span>
                        </span>
                        <span className="ticker-item am">
                            AI Integration<span className="ticker-dot"></span>
                        </span>
                        <span className="ticker-item">
                            E-Commerce<span className="ticker-dot"></span>
                        </span>
                        <span className="ticker-item hi">
                            STEAM Labs<span className="ticker-dot"></span>
                        </span>
                        <span className="ticker-item">
                            ERP Systems<span className="ticker-dot"></span>
                        </span>
                        <span className="ticker-item am">
                            LLM Chatbots<span className="ticker-dot"></span>
                        </span>
                        <span className="ticker-item">
                            Branding<span className="ticker-dot"></span>
                        </span>
                        <span className="ticker-item hi">
                            Computer Vision<span className="ticker-dot"></span>
                        </span>
                        <span className="ticker-item">
                            Cloud &amp; DevOps<span className="ticker-dot"></span>
                        </span>
                        <span className="ticker-item am">
                            Robotics<span className="ticker-dot"></span>
                        </span>
                        <span className="ticker-item">
                            UI / UX Design<span className="ticker-dot"></span>
                        </span>
                        <span className="ticker-item hi">
                            Web Development<span className="ticker-dot"></span>
                        </span>
                        <span className="ticker-item">
                            Mobile Apps<span className="ticker-dot"></span>
                        </span>
                        <span className="ticker-item am">
                            AI Integration<span className="ticker-dot"></span>
                        </span>
                        <span className="ticker-item">
                            E-Commerce<span className="ticker-dot"></span>
                        </span>
                        <span className="ticker-item hi">
                            STEAM Labs<span className="ticker-dot"></span>
                        </span>
                        <span className="ticker-item">
                            ERP Systems<span className="ticker-dot"></span>
                        </span>
                        <span className="ticker-item am">
                            LLM Chatbots<span className="ticker-dot"></span>
                        </span>
                        <span className="ticker-item">
                            Branding<span className="ticker-dot"></span>
                        </span>
                        <span className="ticker-item hi">
                            Computer Vision<span className="ticker-dot"></span>
                        </span>
                        <span className="ticker-item">
                            Cloud &amp; DevOps<span className="ticker-dot"></span>
                        </span>
                        <span className="ticker-item am">
                            Robotics<span className="ticker-dot"></span>
                        </span>
                        <span className="ticker-item">
                            UI / UX Design<span className="ticker-dot"></span>
                        </span>
                    </div>
                </div>
            </section>

            {/* COLLECTION INDEX */}
            <div
                className="section reveal"
                id="collection">
                <span className="s-label">Portfolio Index</span>
                <h2
                    style={{
                        fontFamily: "'Bebas Neue',sans-serif",
                        fontSize: 'clamp(40px,6vw,72px)',
                        lineHeight: '.95',
                        letterSpacing: '1px',
                        color: 'var(--white)',
                        marginTop: '8px'
                    }}>
                    WHAT WE <span style={{ color: 'var(--blue-vivid)' }}>BUILD</span>
                </h2>
                <p style={{ color: 'var(--grey-mid)', fontSize: '15px', marginTop: '14px', maxWidth: '480px', lineHeight: '1.7' }}>
                    Five categories. Fifty+ projects. One mission — technology that creates real impact.
                </p>
                <div
                    className="collection-wrap stagger"
                    id="collectionList">
                    <a
                        href="#it-web"
                        className="collection-item">
                        <div className="item-left">
                            <span className="item-num">01</span>
                            <span className="item-title">
                                Web &amp; Software <em>Development</em>
                            </span>
                        </div>
                        <div className="item-right">
                            &quot;See full projects&quot; <span>☞</span>
                        </div>
                    </a>
                    <a
                        href="#it-ecom"
                        className="collection-item">
                        <div className="item-left">
                            <span className="item-num">02</span>
                            <span className="item-title">
                                E-Commerce &amp; <em>SaaS Platforms</em>
                            </span>
                        </div>
                        <div className="item-right">
                            &quot;View collection&quot; <span>☞</span>
                        </div>
                    </a>
                    <a
                        href="#steam-schools"
                        className="collection-item">
                        <div className="item-left">
                            <span className="item-num">03</span>
                            <span className="item-title">
                                STEAM Labs <em>for Schools</em>
                            </span>
                        </div>
                        <div className="item-right">
                            &quot;Explore labs&quot; <span>☞</span>
                        </div>
                    </a>
                    <a
                        href="#digital"
                        className="collection-item">
                        <div className="item-left">
                            <span className="item-num">04</span>
                            <span className="item-title">
                                Branding &amp; <em>Digital Marketing</em>
                            </span>
                        </div>
                        <div className="item-right">
                            &quot;See campaigns&quot; <span>☞</span>
                        </div>
                    </a>
                    <a
                        href="#erp"
                        className="collection-item">
                        <div className="item-left">
                            <span className="item-num">05</span>
                            <span className="item-title">
                                ERP &amp; Enterprise <em>Solutions</em>
                            </span>
                        </div>
                        <div className="item-right">
                            &quot;View case study&quot; <span>☞</span>
                        </div>
                    </a>
                </div>
                <div
                    className="stats-row stagger"
                    id="statsRow">
                    <div className="stat-card">
                        <div
                            className="stat-num"
                            data-target="50">
                            0<span className="stat-accent">+</span>
                        </div>
                        <div className="stat-label">Projects Delivered</div>
                    </div>
                    <div className="stat-card">
                        <div
                            className="stat-num"
                            data-target="20">
                            0<span className="stat-accent">+</span>
                        </div>
                        <div className="stat-label">Schools Equipped</div>
                    </div>
                    <div className="stat-card">
                        <div
                            className="stat-num"
                            data-target="10">
                            0<span className="stat-accent">+</span>
                        </div>
                        <div className="stat-label">Cities Served</div>
                    </div>
                    <div className="stat-card">
                        <div
                            className="stat-num"
                            data-target="95">
                            0<span className="stat-accent">%</span>
                        </div>
                        <div className="stat-label">Client Satisfaction</div>
                    </div>
                </div>
            </div>

            <hr className="divider" />

            {/* 01 WEB & SOFTWARE */}
            <div
                className="section"
                id="it-web">
                <div className="reveal">
                    <span className="cat-heading">WEB &amp; SOFTWARE DEVELOPMENT</span>
                </div>
                <div
                    className="project-slider"
                    data-slider="web">
                    <div className="slider-nav reveal">
                        <div
                            className="slider-dots"
                            id="dots-web"></div>
                        <div className="slider-controls">
                            <span className="slider-counter">
                                <span id="cur-web">1</span> / <span id="tot-web">2</span>
                            </span>
                            <button
                                className="slider-btn"
                                id="prev-web"
                                aria-label="Previous"
                                disabled>
                                &#8592;
                            </button>
                            <button
                                className="slider-btn"
                                id="next-web"
                                aria-label="Next">
                                &#8594;
                            </button>
                        </div>
                    </div>
                    <div
                        className="project-slides"
                        id="slides-web">
                        <div className="project-slide">
                            <div className="project-block">
                                <div className="project-meta reveal-left">
                                    <div className="meta-client">Digidonar Agency</div>
                                    <div className="meta-tools">NEXT.JS &nbsp;·&nbsp; TAILWIND &nbsp;·&nbsp; SANITY CMS</div>
                                    <div className="project-desc">
                                        Rebuilt the agency&apos;s digital presence end-to-end. Organic traffic rose 120% and bounce rate dropped 40%
                                        within 3 months. Performance score: 98/100 on Lighthouse.
                                    </div>
                                    <div className="tags">
                                        <span className="tag">Next.js</span>
                                        <span className="tag">SEO</span>
                                        <span className="tag">CMS</span>
                                        <span className="tag">Performance</span>
                                    </div>
                                </div>
                                <div className="reveal-right">
                                    <div
                                        className="mock-grid c3"
                                        style={{ marginBottom: '10px' }}>
                                        <div className="mock-img">
                                            <div className="icon">🖥</div>
                                            <span>Homepage</span>
                                        </div>
                                        <div className="mock-img">
                                            <div className="icon">📄</div>
                                            <span>About</span>
                                        </div>
                                        <div className="mock-img">
                                            <div className="icon">📬</div>
                                            <span>Contact</span>
                                        </div>
                                    </div>
                                    <div className="phone-wrap">
                                        <div className="phone">Mobile</div>
                                        <div
                                            className="mock-grid c2"
                                            style={{ flex: '1' }}>
                                            <div className="mock-img square">
                                                <div className="icon">🎨</div>
                                                <span>Services</span>
                                            </div>
                                            <div className="mock-img square">
                                                <div className="icon">📊</div>
                                                <span>Case Study</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-slide">
                            <div className="project-block reverse">
                                <div className="project-meta reveal-right">
                                    <div className="meta-client">Shine Healthcare</div>
                                    <div className="meta-tools">REACT &nbsp;·&nbsp; GRAPHQL &nbsp;·&nbsp; POSTGRESQL</div>
                                    <div className="project-desc">
                                        ABDM-compliant patient portal connecting 200+ doctors across 3 states. Real-time appointment booking, EMR
                                        integration, and a companion Flutter mobile app.
                                    </div>
                                    <div className="tags">
                                        <span className="tag">Healthcare</span>
                                        <span className="tag">ABDM</span>
                                        <span className="tag">EMR</span>
                                        <span className="tag">Flutter</span>
                                    </div>
                                </div>
                                <div className="mock-grid c2 reveal-left">
                                    <div className="mock-img">
                                        <div className="icon">🏥</div>
                                        <span>Dashboard</span>
                                    </div>
                                    <div className="mock-img">
                                        <div className="icon">📋</div>
                                        <span>Records</span>
                                    </div>
                                    <div className="mock-img">
                                        <div className="icon">📅</div>
                                        <span>Booking</span>
                                    </div>
                                    <div className="mock-img">
                                        <div className="icon">👨‍⚕️</div>
                                        <span>Doctor View</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="divider" />

            {/* 02 E-COMMERCE & SAAS */}
            <div
                className="section"
                id="it-ecom">
                <div className="reveal">
                    <span className="cat-heading">E-COMMERCE &amp; SAAS PLATFORMS</span>
                    <p style={{ color: 'var(--grey-mid)', fontSize: '15px', marginBottom: '48px' }}>
                        High-conversion storefronts and data-driven dashboards built for scale.
                    </p>
                </div>
                <div
                    className="project-slider"
                    data-slider="ecom">
                    <div className="slider-nav reveal">
                        <div
                            className="slider-dots"
                            id="dots-ecom"></div>
                        <div className="slider-controls">
                            <span className="slider-counter">
                                <span id="cur-ecom">1</span> / <span id="tot-ecom">2</span>
                            </span>
                            <button
                                className="slider-btn"
                                id="prev-ecom"
                                aria-label="Previous"
                                disabled>
                                &#8592;
                            </button>
                            <button
                                className="slider-btn"
                                id="next-ecom"
                                aria-label="Next">
                                &#8594;
                            </button>
                        </div>
                    </div>
                    <div
                        className="project-slides"
                        id="slides-ecom">
                        <div className="project-slide">
                            <div className="project-block">
                                <div className="project-meta reveal-left">
                                    <div className="meta-client">TUC — The Urban Closet</div>
                                    <div className="meta-tools">NEXT.JS &nbsp;·&nbsp; STRIPE &nbsp;·&nbsp; MONGODB</div>
                                    <div className="project-desc">
                                        Mobile-first fashion e-commerce. Revenue grew 3× in 6 months. Features AI-powered recommendations, one-click
                                        checkout, and real-time inventory sync.
                                    </div>
                                    <div className="tags">
                                        <span className="tag">E-Commerce</span>
                                        <span className="tag">Stripe</span>
                                        <span className="tag">AI Reco</span>
                                        <span className="tag">Fashion</span>
                                    </div>
                                </div>
                                <div className="mock-grid c3 reveal-right">
                                    <div className="mock-img portrait">
                                        <div className="icon">👗</div>
                                        <span>Product</span>
                                    </div>
                                    <div className="mock-img portrait">
                                        <div className="icon">🛒</div>
                                        <span>Cart</span>
                                    </div>
                                    <div className="mock-img portrait">
                                        <div className="icon">💳</div>
                                        <span>Checkout</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-slide">
                            <div className="project-block reverse">
                                <div className="project-meta reveal-right">
                                    <div className="meta-client">EduPulse SaaS Dashboard</div>
                                    <div className="meta-tools">VUE.JS &nbsp;·&nbsp; FASTAPI &nbsp;·&nbsp; REDIS</div>
                                    <div className="project-desc">
                                        Real-time analytics enabling 500+ educators to monitor student performance across 12 institutes. Custom KPI
                                        widgets, export, and role-based access control.
                                    </div>
                                    <div className="tags">
                                        <span className="tag">SaaS</span>
                                        <span className="tag">Real-time</span>
                                        <span className="tag">EdTech</span>
                                        <span className="tag">Analytics</span>
                                    </div>
                                </div>
                                <div className="mock-grid c2 reveal-left">
                                    <div
                                        className="mock-img"
                                        style={{ gridColumn: 'span 2' }}>
                                        <div className="icon">📊</div>
                                        <span>Analytics Dashboard</span>
                                    </div>
                                    <div className="mock-img">
                                        <div className="icon">📈</div>
                                        <span>Reports</span>
                                    </div>
                                    <div className="mock-img">
                                        <div className="icon">🎓</div>
                                        <span>Student View</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="divider" />

            {/* 03 STEAM LABS */}
            <div
                className="section"
                id="steam-schools">
                <div className="reveal">
                    <span className="cat-heading">STEAM LABS FOR SCHOOLS</span>
                    <p style={{ color: 'var(--grey-mid)', fontSize: '15px', marginBottom: '48px' }}>
                        AI, robotics &amp; innovation labs designed and installed across India&apos;s top schools.
                    </p>
                </div>
                <div
                    className="project-slider"
                    data-slider="steam">
                    <div className="slider-nav reveal">
                        <div
                            className="slider-dots"
                            id="dots-steam"></div>
                        <div className="slider-controls">
                            <span className="slider-counter">
                                <span id="cur-steam">1</span> / <span id="tot-steam">3</span>
                            </span>
                            <button
                                className="slider-btn"
                                id="prev-steam"
                                aria-label="Previous"
                                disabled>
                                &#8592;
                            </button>
                            <button
                                className="slider-btn"
                                id="next-steam"
                                aria-label="Next">
                                &#8594;
                            </button>
                        </div>
                    </div>
                    <div
                        className="project-slides"
                        id="slides-steam">
                        <div className="project-slide">
                            <div className="project-block">
                                <div className="project-meta reveal-left">
                                    <div className="meta-client">Delhi Public School · Bengaluru</div>
                                    <div className="meta-tools">ARDUINO &nbsp;·&nbsp; RASPBERRY PI &nbsp;·&nbsp; TENSORFLOW LITE</div>
                                    <div className="project-desc">
                                        Full-stack STEAM lab — Robotics Arena, AI Learning Hub, IoT Sensor kits, and Maker Station. 200+ students now
                                        engage in weekly hands-on STEM sessions.
                                    </div>
                                    <div className="tags">
                                        <span className="tag">Robotics</span>
                                        <span className="tag">AI</span>
                                        <span className="tag">IoT</span>
                                        <span className="tag">Maker Space</span>
                                    </div>
                                </div>
                                <div className="mock-grid c2 reveal-right">
                                    <div className="mock-img">
                                        <div className="icon">🤖</div>
                                        <span>Robotics Arena</span>
                                    </div>
                                    <div className="mock-img">
                                        <div className="icon">🧠</div>
                                        <span>AI Hub</span>
                                    </div>
                                    <div className="mock-img">
                                        <div className="icon">📡</div>
                                        <span>IoT Station</span>
                                    </div>
                                    <div className="mock-img">
                                        <div className="icon">🔧</div>
                                        <span>Maker Space</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-slide">
                            <div className="project-block reverse">
                                <div className="project-meta reveal-right">
                                    <div className="meta-client">Ryan International · Pune</div>
                                    <div className="meta-tools">PYTHON &nbsp;·&nbsp; MBOT &nbsp;·&nbsp; MIT APP INVENTOR</div>
                                    <div className="project-desc">
                                        3D Printing Bay, Drone Flight Zone, AI Modules, and 30 coding workstations. Students built 14 functional apps
                                        within the first semester of installation.
                                    </div>
                                    <div className="tags">
                                        <span className="tag">3D Printing</span>
                                        <span className="tag">Drones</span>
                                        <span className="tag">App Dev</span>
                                        <span className="tag">Python</span>
                                    </div>
                                </div>
                                <div className="mock-grid c3 reveal-left">
                                    <div className="mock-img">
                                        <div className="icon">🖨</div>
                                        <span>3D Printing</span>
                                    </div>
                                    <div className="mock-img">
                                        <div className="icon">🚁</div>
                                        <span>Drone Zone</span>
                                    </div>
                                    <div className="mock-img">
                                        <div className="icon">💻</div>
                                        <span>Workstations</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-slide">
                            <div className="project-block">
                                <div className="project-meta reveal-left">
                                    <div className="meta-client">Amity International · Hyderabad</div>
                                    <div className="meta-tools">LEGO MINDSTORMS &nbsp;·&nbsp; NODE-RED &nbsp;·&nbsp; JUPYTER</div>
                                    <div className="project-desc">
                                        ML Lab with Jupyter Notebooks, Lego Mindstorms robotics kits, and IoT Dashboard. 3 student teams won regional
                                        innovation competitions post-installation.
                                    </div>
                                    <div className="tags">
                                        <span className="tag">Machine Learning</span>
                                        <span className="tag">Lego</span>
                                        <span className="tag">Jupyter</span>
                                        <span className="tag">IoT</span>
                                    </div>
                                </div>
                                <div className="mock-grid c2 reveal-right">
                                    <div
                                        className="mock-img"
                                        style={{ gridColumn: 'span 2' }}>
                                        <div className="icon">🏫</div>
                                        <span>Lab Overview</span>
                                    </div>
                                    <div className="mock-img">
                                        <div className="icon">🔬</div>
                                        <span>ML Station</span>
                                    </div>
                                    <div className="mock-img">
                                        <div className="icon">🧩</div>
                                        <span>Lego Kits</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="divider" />

            {/* 04 DIGITAL MARKETING */}
            <div
                className="section"
                id="digital">
                <div className="reveal">
                    <span className="cat-heading">BRANDING &amp; DIGITAL MARKETING</span>
                    <p style={{ color: 'var(--grey-mid)', fontSize: '15px', marginBottom: '48px' }}>
                        Visual identity, social creatives, and performance campaigns that drive real results.
                    </p>
                </div>
                <div
                    className="project-slider"
                    data-slider="digital">
                    <div className="slider-nav reveal">
                        <div
                            className="slider-dots"
                            id="dots-digital"></div>
                        <div className="slider-controls">
                            <span className="slider-counter">
                                <span id="cur-digital">1</span> / <span id="tot-digital">2</span>
                            </span>
                            <button
                                className="slider-btn"
                                id="prev-digital"
                                aria-label="Previous"
                                disabled>
                                &#8592;
                            </button>
                            <button
                                className="slider-btn"
                                id="next-digital"
                                aria-label="Next">
                                &#8594;
                            </button>
                        </div>
                    </div>
                    <div
                        className="project-slides"
                        id="slides-digital">
                        <div className="project-slide">
                            <div className="project-block">
                                <div className="project-meta reveal-left">
                                    <div className="meta-client">SA Enterprises</div>
                                    <div className="meta-tools">CANVA &nbsp;·&nbsp; PHOTOSHOP &nbsp;·&nbsp; AI TOOLS</div>
                                    <div className="project-desc">
                                        Full social media creative strategy — festive campaigns, product launches, and reels. Grew Instagram from 2K
                                        to 18K followers in just 4 months.
                                    </div>
                                    <div className="tags">
                                        <span className="tag">Social Media</span>
                                        <span className="tag">Reels</span>
                                        <span className="tag">Growth</span>
                                        <span className="tag">Canva</span>
                                    </div>
                                </div>
                                <div className="reveal-right">
                                    <div
                                        className="mock-grid c3"
                                        style={{ marginBottom: '10px' }}>
                                        <div className="mock-img square">
                                            <div className="icon">📸</div>
                                            <span>Post</span>
                                        </div>
                                        <div className="mock-img square">
                                            <div className="icon">🎉</div>
                                            <span>Festive</span>
                                        </div>
                                        <div className="mock-img square">
                                            <div className="icon">📣</div>
                                            <span>Offer</span>
                                        </div>
                                        <div className="mock-img square">
                                            <div className="icon">🏷</div>
                                            <span>Product</span>
                                        </div>
                                        <div className="mock-img square">
                                            <div className="icon">🌟</div>
                                            <span>Story</span>
                                        </div>
                                        <div className="mock-img square">
                                            <div className="icon">📲</div>
                                            <span>Reel Cover</span>
                                        </div>
                                    </div>
                                    <div
                                        className="phone-wrap"
                                        style={{ justifyContent: 'flex-end', marginTop: '10px' }}>
                                        <div className="phone">Instagram</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-slide">
                            <div className="project-block reverse">
                                <div className="project-meta reveal-right">
                                    <div className="meta-client">Ekana Business Center</div>
                                    <div className="meta-tools">CANVA &nbsp;·&nbsp; PHOTOSHOP &nbsp;·&nbsp; FIGMA</div>
                                    <div className="project-desc">
                                        Performance-focused Meta ad creatives for a premium real estate project. Structured visuals to highlight key
                                        USPs — location, lease value, and investment benefits.
                                    </div>
                                    <div className="tags">
                                        <span className="tag">Meta Ads</span>
                                        <span className="tag">Real Estate</span>
                                        <span className="tag">Performance</span>
                                        <span className="tag">Figma</span>
                                    </div>
                                </div>
                                <div className="mock-grid c3 reveal-left">
                                    <div
                                        className="mock-img thumb"
                                        style={{ gridColumn: 'span 3' }}>
                                        <div className="icon">🏢</div>
                                        <span>Banner — Ekana Business Center</span>
                                    </div>
                                    <div className="mock-img thumb">
                                        <div className="icon">📐</div>
                                        <span>Ad Set 01</span>
                                    </div>
                                    <div className="mock-img thumb">
                                        <div className="icon">📐</div>
                                        <span>Ad Set 02</span>
                                    </div>
                                    <div className="mock-img thumb">
                                        <div className="icon">📐</div>
                                        <span>Ad Set 03</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="divider" />

            {/* 05 ERP */}
            <div
                className="section"
                id="erp">
                <div className="reveal">
                    <span className="cat-heading">ERP &amp; ENTERPRISE SOLUTIONS</span>
                    <p style={{ color: 'var(--grey-mid)', fontSize: '15px', marginBottom: '48px' }}>
                        Custom ERPs and cloud migrations that save hours, cut costs, and modernise operations.
                    </p>
                </div>
                <div
                    className="project-slider"
                    data-slider="erp">
                    <div className="slider-nav reveal">
                        <div
                            className="slider-dots"
                            id="dots-erp"></div>
                        <div className="slider-controls">
                            <span className="slider-counter">
                                <span id="cur-erp">1</span> / <span id="tot-erp">2</span>
                            </span>
                            <button
                                className="slider-btn"
                                id="prev-erp"
                                aria-label="Previous"
                                disabled>
                                &#8592;
                            </button>
                            <button
                                className="slider-btn"
                                id="next-erp"
                                aria-label="Next">
                                &#8594;
                            </button>
                        </div>
                    </div>
                    <div
                        className="project-slides"
                        id="slides-erp">
                        <div className="project-slide">
                            <div className="project-block">
                                <div className="project-meta reveal-left">
                                    <div className="meta-client">Advance Group of Colleges</div>
                                    <div className="meta-tools">DJANGO &nbsp;·&nbsp; REACT &nbsp;·&nbsp; MYSQL &nbsp;·&nbsp; DOCKER</div>
                                    <div className="project-desc">
                                        Custom ERP covering admissions, fee management, faculty scheduling, and reporting. Eliminated 80% of manual
                                        data-entry errors, saving ₹18L/yr in operational costs.
                                    </div>
                                    <div className="tags">
                                        <span className="tag">ERP</span>
                                        <span className="tag">Django</span>
                                        <span className="tag">Admissions</span>
                                        <span className="tag">Automation</span>
                                    </div>
                                </div>
                                <div className="mock-grid c2 reveal-right">
                                    <div
                                        className="mock-img"
                                        style={{ gridColumn: 'span 2' }}>
                                        <div className="icon">🏛</div>
                                        <span>ERP Main Dashboard</span>
                                    </div>
                                    <div className="mock-img">
                                        <div className="icon">📑</div>
                                        <span>Admissions</span>
                                    </div>
                                    <div className="mock-img">
                                        <div className="icon">💰</div>
                                        <span>Fee Management</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-slide">
                            <div className="project-block reverse">
                                <div className="project-meta reveal-right">
                                    <div className="meta-client">Polycheme Logistics</div>
                                    <div className="meta-tools">AWS &nbsp;·&nbsp; LARAVEL &nbsp;·&nbsp; REACT NATIVE</div>
                                    <div className="project-desc">
                                        Migrated legacy on-prem workflows to AWS. Built companion mobile app for fleet tracking and delivery
                                        management — saving 30+ man-hours/week across 4 departments.
                                    </div>
                                    <div className="tags">
                                        <span className="tag">Cloud</span>
                                        <span className="tag">AWS</span>
                                        <span className="tag">Logistics</span>
                                        <span className="tag">Mobile</span>
                                    </div>
                                </div>
                                <div className="mock-grid c3 reveal-left">
                                    <div className="mock-img portrait">
                                        <div className="icon">📦</div>
                                        <span>Tracking</span>
                                    </div>
                                    <div className="mock-img portrait">
                                        <div className="icon">🚚</div>
                                        <span>Fleet</span>
                                    </div>
                                    <div className="mock-img portrait">
                                        <div className="icon">☁️</div>
                                        <span>Cloud</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* INDUSTRIES */}
            <div
                className="section reveal"
                id="industries">
                <span className="s-label">Industries</span>
                <h2
                    style={{
                        fontFamily: "'Bebas Neue',sans-serif",
                        fontSize: 'clamp(40px,6vw,72px)',
                        lineHeight: '.95',
                        letterSpacing: '1px',
                        color: 'var(--white)',
                        marginTop: '8px'
                    }}>
                    INDUSTRIES WE <span style={{ color: 'var(--blue-vivid)' }}>SERVE</span>
                </h2>
                <p style={{ color: 'var(--grey-mid)', fontSize: '15px', marginTop: '14px', maxWidth: '480px', lineHeight: '1.7' }}>
                    We build digital solutions across verticals — each industry demands its own precision.
                </p>
                <div className="industry-grid stagger">
                    <div className="industry-card">
                        <div className="industry-icon">🏥</div>
                        <div className="industry-name">Healthcare</div>
                        <div className="industry-desc">Compliant patient portals, EMR integrations, and telemedicine platforms.</div>
                    </div>
                    <div className="industry-card">
                        <div className="industry-icon">🎓</div>
                        <div className="industry-name">Education</div>
                        <div className="industry-desc">ERP systems, STEAM labs, and AI-powered learning infrastructure for schools.</div>
                    </div>
                    <div className="industry-card">
                        <div className="industry-icon">📱</div>
                        <div className="industry-name">EdTech</div>
                        <div className="industry-desc">SaaS dashboards, assessment engines, and real-time analytics for EdTech startups.</div>
                    </div>
                    <div className="industry-card">
                        <div className="industry-icon">🚚</div>
                        <div className="industry-name">Logistics</div>
                        <div className="industry-desc">Fleet tracking, route optimisation, and cloud-based operations platforms.</div>
                    </div>
                    <div className="industry-card">
                        <div className="industry-icon">🏢</div>
                        <div className="industry-name">Real Estate</div>
                        <div className="industry-desc">Property listings, CRM integrations, and high-conversion landing pages.</div>
                    </div>
                    <div className="industry-card">
                        <div className="industry-icon">🛍</div>
                        <div className="industry-name">Retail</div>
                        <div className="industry-desc">E-commerce platforms, inventory systems, and performance ad creatives.</div>
                    </div>
                    <div className="industry-card">
                        <div className="industry-icon">☁️</div>
                        <div className="industry-name">SaaS</div>
                        <div className="industry-desc">Full-stack SaaS product development from MVP to enterprise-grade scale.</div>
                    </div>
                </div>
            </div>

            <hr className="divider" />

            {/* TECH STACK */}
            <div
                className="section reveal"
                id="tech-stack">
                <span className="s-label">Tech Stack</span>
                <h2
                    style={{
                        fontFamily: "'Bebas Neue',sans-serif",
                        fontSize: 'clamp(40px,6vw,72px)',
                        lineHeight: '.95',
                        letterSpacing: '1px',
                        color: 'var(--white)',
                        marginTop: '8px'
                    }}>
                    TECHNOLOGY <span style={{ color: 'var(--blue-vivid)' }}>EXPERTISE</span>
                </h2>
                <p style={{ color: 'var(--grey-mid)', fontSize: '15px', marginTop: '14px', maxWidth: '560px', lineHeight: '1.7' }}>
                    Every tool, framework, and platform we deploy across web and mobile development — battle-tested in production.
                </p>
                <div className="tech-categories stagger">
                    <div className="tech-category">
                        <div className="tech-cat-label">Languages</div>
                        <div className="tech-pills">
                            <span className="tech-pill">JavaScript</span>
                            <span className="tech-pill">TypeScript</span>
                            <span className="tech-pill">Python</span>
                            <span className="tech-pill">PHP</span>
                            <span className="tech-pill">Java</span>
                            <span className="tech-pill">Dart</span>
                            <span className="tech-pill">Kotlin</span>
                            <span className="tech-pill">Swift</span>
                            <span className="tech-pill">C#</span>
                            <span className="tech-pill">Go</span>
                            <span className="tech-pill">Rust</span>
                            <span className="tech-pill">Ruby</span>
                        </div>
                    </div>
                    <div className="tech-category">
                        <div className="tech-cat-label">Frontend — Web</div>
                        <div className="tech-pills">
                            <span className="tech-pill">React.js</span>
                            <span className="tech-pill">Next.js</span>
                            <span className="tech-pill">Vue.js</span>
                            <span className="tech-pill">Nuxt.js</span>
                            <span className="tech-pill">Angular</span>
                            <span className="tech-pill">Svelte</span>
                            <span className="tech-pill">Astro</span>
                            <span className="tech-pill">Remix</span>
                            <span className="tech-pill">Gatsby</span>
                            <span className="tech-pill">HTML5</span>
                            <span className="tech-pill">CSS3</span>
                            <span className="tech-pill">SASS / SCSS</span>
                            <span className="tech-pill">Tailwind CSS</span>
                            <span className="tech-pill">Bootstrap</span>
                            <span className="tech-pill">Material UI</span>
                            <span className="tech-pill">shadcn/ui</span>
                            <span className="tech-pill">Framer Motion</span>
                            <span className="tech-pill">GSAP</span>
                            <span className="tech-pill">Three.js</span>
                            <span className="tech-pill">WebGL</span>
                        </div>
                    </div>
                    <div className="tech-category">
                        <div className="tech-cat-label">Mobile App Development</div>
                        <div className="tech-pills">
                            <span className="tech-pill">Flutter</span>
                            <span className="tech-pill">React Native</span>
                            <span className="tech-pill">Expo</span>
                            <span className="tech-pill">Android (Kotlin)</span>
                            <span className="tech-pill">iOS (Swift)</span>
                            <span className="tech-pill">Jetpack Compose</span>
                            <span className="tech-pill">SwiftUI</span>
                            <span className="tech-pill">Ionic</span>
                            <span className="tech-pill">Capacitor</span>
                            <span className="tech-pill">Xamarin</span>
                            <span className="tech-pill">.NET MAUI</span>
                        </div>
                    </div>
                    <div className="tech-category">
                        <div className="tech-cat-label">Backend &amp; APIs</div>
                        <div className="tech-pills">
                            <span className="tech-pill">Node.js</span>
                            <span className="tech-pill">Express.js</span>
                            <span className="tech-pill">NestJS</span>
                            <span className="tech-pill">Django</span>
                            <span className="tech-pill">Django REST</span>
                            <span className="tech-pill">FastAPI</span>
                            <span className="tech-pill">Flask</span>
                            <span className="tech-pill">Laravel</span>
                            <span className="tech-pill">Symfony</span>
                            <span className="tech-pill">CodeIgniter</span>
                            <span className="tech-pill">Ruby on Rails</span>
                            <span className="tech-pill">Spring Boot</span>
                            <span className="tech-pill">ASP.NET Core</span>
                            <span className="tech-pill">Go Gin</span>
                            <span className="tech-pill">GraphQL</span>
                            <span className="tech-pill">REST APIs</span>
                            <span className="tech-pill">WebSockets</span>
                            <span className="tech-pill">gRPC</span>
                            <span className="tech-pill">tRPC</span>
                        </div>
                    </div>
                    <div className="tech-category">
                        <div className="tech-cat-label">Databases &amp; Storage</div>
                        <div className="tech-pills">
                            <span className="tech-pill">PostgreSQL</span>
                            <span className="tech-pill">MySQL</span>
                            <span className="tech-pill">MariaDB</span>
                            <span className="tech-pill">SQLite</span>
                            <span className="tech-pill">MongoDB</span>
                            <span className="tech-pill">Firebase Firestore</span>
                            <span className="tech-pill">DynamoDB</span>
                            <span className="tech-pill">Redis</span>
                            <span className="tech-pill">Cassandra</span>
                            <span className="tech-pill">Elasticsearch</span>
                            <span className="tech-pill">Supabase</span>
                            <span className="tech-pill">PlanetScale</span>
                            <span className="tech-pill">Prisma ORM</span>
                            <span className="tech-pill">Sequelize</span>
                            <span className="tech-pill">TypeORM</span>
                            <span className="tech-pill">Mongoose</span>
                            <span className="tech-pill">AWS S3</span>
                            <span className="tech-pill">Cloudinary</span>
                        </div>
                    </div>
                    <div className="tech-category">
                        <div className="tech-cat-label">CMS &amp; E-Commerce</div>
                        <div className="tech-pills">
                            <span className="tech-pill">WordPress</span>
                            <span className="tech-pill">Strapi</span>
                            <span className="tech-pill">Sanity</span>
                            <span className="tech-pill">Contentful</span>
                            <span className="tech-pill">Directus</span>
                            <span className="tech-pill">Ghost</span>
                            <span className="tech-pill">Payload CMS</span>
                            <span className="tech-pill">Shopify</span>
                            <span className="tech-pill">WooCommerce</span>
                            <span className="tech-pill">Medusa.js</span>
                            <span className="tech-pill">Magento</span>
                            <span className="tech-pill">PrestaShop</span>
                        </div>
                    </div>
                    <div className="tech-category">
                        <div className="tech-cat-label">Auth &amp; Security</div>
                        <div className="tech-pills">
                            <span className="tech-pill">JWT</span>
                            <span className="tech-pill">OAuth 2.0</span>
                            <span className="tech-pill">NextAuth.js</span>
                            <span className="tech-pill">Auth0</span>
                            <span className="tech-pill">Firebase Auth</span>
                            <span className="tech-pill">Clerk</span>
                            <span className="tech-pill">Keycloak</span>
                            <span className="tech-pill">Passport.js</span>
                            <span className="tech-pill">2FA / OTP</span>
                            <span className="tech-pill">SSL / TLS</span>
                            <span className="tech-pill">OWASP Standards</span>
                        </div>
                    </div>
                    <div className="tech-category">
                        <div className="tech-cat-label">Cloud &amp; DevOps</div>
                        <div className="tech-pills">
                            <span className="tech-pill">AWS</span>
                            <span className="tech-pill">Google Cloud</span>
                            <span className="tech-pill">Microsoft Azure</span>
                            <span className="tech-pill">Firebase</span>
                            <span className="tech-pill">Vercel</span>
                            <span className="tech-pill">Netlify</span>
                            <span className="tech-pill">Railway</span>
                            <span className="tech-pill">Render</span>
                            <span className="tech-pill">Docker</span>
                            <span className="tech-pill">Kubernetes</span>
                            <span className="tech-pill">Nginx</span>
                            <span className="tech-pill">Apache</span>
                            <span className="tech-pill">GitHub Actions</span>
                            <span className="tech-pill">GitLab CI/CD</span>
                            <span className="tech-pill">Jenkins</span>
                            <span className="tech-pill">Terraform</span>
                            <span className="tech-pill">Linux / Ubuntu</span>
                        </div>
                    </div>
                    <div className="tech-category">
                        <div className="tech-cat-label">Payments &amp; Integrations</div>
                        <div className="tech-pills">
                            <span className="tech-pill">Razorpay</span>
                            <span className="tech-pill">Stripe</span>
                            <span className="tech-pill">PayU</span>
                            <span className="tech-pill">PayPal</span>
                            <span className="tech-pill">Cashfree</span>
                            <span className="tech-pill">Paytm</span>
                            <span className="tech-pill">UPI Integration</span>
                            <span className="tech-pill">Twilio</span>
                            <span className="tech-pill">SendGrid</span>
                            <span className="tech-pill">AWS SES</span>
                            <span className="tech-pill">FCM Push</span>
                            <span className="tech-pill">Google Maps API</span>
                            <span className="tech-pill">WhatsApp API</span>
                            <span className="tech-pill">Zapier</span>
                        </div>
                    </div>
                    <div className="tech-category">
                        <div className="tech-cat-label">Design &amp; Prototyping</div>
                        <div className="tech-pills">
                            <span className="tech-pill">Figma</span>
                            <span className="tech-pill">Adobe XD</span>
                            <span className="tech-pill">Sketch</span>
                            <span className="tech-pill">Photoshop</span>
                            <span className="tech-pill">Illustrator</span>
                            <span className="tech-pill">After Effects</span>
                            <span className="tech-pill">Lottie</span>
                            <span className="tech-pill">Storybook</span>
                            <span className="tech-pill">Zeplin</span>
                            <span className="tech-pill">Canva</span>
                            <span className="tech-pill">Rive</span>
                        </div>
                    </div>
                    <div className="tech-category">
                        <div className="tech-cat-label">Testing &amp; QA</div>
                        <div className="tech-pills">
                            <span className="tech-pill">Jest</span>
                            <span className="tech-pill">Vitest</span>
                            <span className="tech-pill">Playwright</span>
                            <span className="tech-pill">Cypress</span>
                            <span className="tech-pill">Selenium</span>
                            <span className="tech-pill">React Testing Library</span>
                            <span className="tech-pill">Postman</span>
                            <span className="tech-pill">Insomnia</span>
                            <span className="tech-pill">k6 Load Testing</span>
                            <span className="tech-pill">SonarQube</span>
                        </div>
                    </div>
                    <div className="tech-category">
                        <div className="tech-cat-label">AI / ML &amp; Data</div>
                        <div className="tech-pills">
                            <span className="tech-pill">OpenAI API</span>
                            <span className="tech-pill">LangChain</span>
                            <span className="tech-pill">LlamaIndex</span>
                            <span className="tech-pill">TensorFlow</span>
                            <span className="tech-pill">PyTorch</span>
                            <span className="tech-pill">Scikit-learn</span>
                            <span className="tech-pill">OpenCV</span>
                            <span className="tech-pill">Hugging Face</span>
                            <span className="tech-pill">Pandas</span>
                            <span className="tech-pill">NumPy</span>
                            <span className="tech-pill">Jupyter</span>
                            <span className="tech-pill">Pinecone</span>
                            <span className="tech-pill">Weaviate</span>
                            <span className="tech-pill">Stable Diffusion</span>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="divider" />

            {/* PROCESS */}
            <div
                className="section reveal"
                id="process">
                <span className="s-label">How We Work</span>
                <h2
                    style={{
                        fontFamily: "'Bebas Neue',sans-serif",
                        fontSize: 'clamp(40px,6vw,72px)',
                        lineHeight: '.95',
                        letterSpacing: '1px',
                        color: 'var(--white)',
                        marginTop: '8px'
                    }}>
                    DEVELOPMENT <span style={{ color: 'var(--blue-vivid)' }}>PROCESS</span>
                </h2>
                <p style={{ color: 'var(--grey-mid)', fontSize: '15px', marginTop: '14px', maxWidth: '480px', lineHeight: '1.7' }}>
                    A proven six-step workflow — brief to production, without surprises.
                </p>
                <div className="process-steps stagger">
                    <div className="process-step">
                        <div className="step-num">01</div>
                        <div className="step-title">Discovery</div>
                        <div className="step-desc">Requirement gathering and deep-dive analysis with stakeholders.</div>
                    </div>
                    <div className="process-step">
                        <div className="step-num">02</div>
                        <div className="step-title">Strategy</div>
                        <div className="step-desc">Technical architecture planning and sprint roadmap definition.</div>
                    </div>
                    <div className="process-step">
                        <div className="step-num">03</div>
                        <div className="step-title">Design</div>
                        <div className="step-desc">UI/UX prototyping with stakeholder review and design system setup.</div>
                    </div>
                    <div className="process-step">
                        <div className="step-num">04</div>
                        <div className="step-title">Development</div>
                        <div className="step-desc">Agile builds with weekly sprint demos and continuous code review.</div>
                    </div>
                    <div className="process-step">
                        <div className="step-num">05</div>
                        <div className="step-title">Deployment</div>
                        <div className="step-desc">Cloud deployment, CI/CD pipelines, and QA across environments.</div>
                    </div>
                    <div className="process-step">
                        <div className="step-num">06</div>
                        <div className="step-title">Support</div>
                        <div className="step-desc">Ongoing maintenance, monitoring, and feature scaling post-launch.</div>
                    </div>
                </div>
            </div>

            <hr className="divider" />

            {/* AI & INNOVATION */}
            <div
                className="section reveal"
                id="ai-services">
                <span className="s-label">Advanced Services</span>
                <h2
                    style={{
                        fontFamily: "'Bebas Neue',sans-serif",
                        fontSize: 'clamp(40px,6vw,72px)',
                        lineHeight: '.95',
                        letterSpacing: '1px',
                        color: 'var(--white)',
                        marginTop: '8px'
                    }}>
                    AI &amp; <span style={{ color: 'var(--blue-vivid)' }}>INNOVATION</span>
                </h2>
                <p style={{ color: 'var(--grey-mid)', fontSize: '15px', marginTop: '14px', maxWidth: '580px', lineHeight: '1.7' }}>
                    We don&apos;t just use AI — we implement it. From GPT-4o integrations to autonomous agents, every service below is
                    production-ready and built with the latest AI stack.
                </p>
                <div className="ai-grid stagger">
                    <div className="ai-card">
                        <div className="ai-icon">🤖</div>
                        <div className="ai-title">Custom AI Chatbots &amp; Assistants</div>
                        <div className="ai-desc">
                            RAG-powered chatbots built on GPT-4o, Claude 3, or Gemini Pro — trained on your own documents, FAQs, and product data.
                            Deployed via WhatsApp, website, or mobile app with memory, context, and escalation flows.
                        </div>
                        <div
                            className="tags"
                            style={{ marginTop: '10px' }}>
                            <span className="tag">GPT-4o</span>
                            <span className="tag">Claude 3</span>
                            <span className="tag">LangChain</span>
                            <span className="tag">RAG</span>
                            <span className="tag">Pinecone</span>
                        </div>
                    </div>
                    <div className="ai-card">
                        <div className="ai-icon">🧠</div>
                        <div className="ai-title">LLM-Powered Applications</div>
                        <div className="ai-desc">
                            Full-stack apps with large language model integration — document summarisation, legal/medical Q&A, AI search, and
                            multi-step reasoning. Built with LangChain, LlamaIndex, and OpenAI Assistants API with tool calling &amp; function
                            calling.
                        </div>
                        <div
                            className="tags"
                            style={{ marginTop: '10px' }}>
                            <span className="tag">LlamaIndex</span>
                            <span className="tag">Assistants API</span>
                            <span className="tag">Tool Calling</span>
                            <span className="tag">Vector DBs</span>
                        </div>
                    </div>
                    <div className="ai-card">
                        <div className="ai-icon">⚡</div>
                        <div className="ai-title">Autonomous AI Agents</div>
                        <div className="ai-desc">
                            Multi-agent systems using AutoGen, CrewAI, and LangGraph that plan, delegate, and execute complex tasks autonomously. Use
                            cases include research agents, data scraping agents, customer service bots, and sales outreach pipelines.
                        </div>
                        <div
                            className="tags"
                            style={{ marginTop: '10px' }}>
                            <span className="tag">CrewAI</span>
                            <span className="tag">AutoGen</span>
                            <span className="tag">LangGraph</span>
                            <span className="tag">Agentic AI</span>
                        </div>
                    </div>
                    <div className="ai-card">
                        <div className="ai-icon">🎨</div>
                        <div className="ai-title">Generative AI &amp; Image Intelligence</div>
                        <div className="ai-desc">
                            AI-generated marketing visuals, product mockups, and brand creatives using Stable Diffusion, DALL·E 3, and Midjourney
                            APIs. Also includes ControlNet-based image editing, background removal, and AI photo enhancement pipelines.
                        </div>
                        <div
                            className="tags"
                            style={{ marginTop: '10px' }}>
                            <span className="tag">DALL·E 3</span>
                            <span className="tag">Stable Diffusion</span>
                            <span className="tag">ControlNet</span>
                            <span className="tag">Replicate API</span>
                        </div>
                    </div>
                    <div className="ai-card">
                        <div className="ai-icon">🗣️</div>
                        <div className="ai-title">Voice AI &amp; Speech Systems</div>
                        <div className="ai-desc">
                            Real-time voice assistants, AI call bots, and transcription pipelines using Whisper, ElevenLabs, and Deepgram. Build IVR
                            replacement systems, voiceover automation, and multilingual speech-to-text for Hindi &amp; regional languages.
                        </div>
                        <div
                            className="tags"
                            style={{ marginTop: '10px' }}>
                            <span className="tag">Whisper</span>
                            <span className="tag">ElevenLabs</span>
                            <span className="tag">Deepgram</span>
                            <span className="tag">Text-to-Speech</span>
                        </div>
                    </div>
                    <div className="ai-card">
                        <div className="ai-icon">👁️</div>
                        <div className="ai-title">Computer Vision &amp; Video AI</div>
                        <div className="ai-desc">
                            Real-time object detection, face recognition, attendance systems, CCTV analytics, and defect detection for manufacturing.
                            Powered by YOLOv9, OpenCV, MediaPipe, and Google Vision API with edge deployment on Raspberry Pi and Jetson Nano.
                        </div>
                        <div
                            className="tags"
                            style={{ marginTop: '10px' }}>
                            <span className="tag">YOLOv9</span>
                            <span className="tag">MediaPipe</span>
                            <span className="tag">OpenCV</span>
                            <span className="tag">Jetson Nano</span>
                        </div>
                    </div>
                    <div className="ai-card">
                        <div className="ai-icon">📊</div>
                        <div className="ai-title">AI-Powered Analytics &amp; Forecasting</div>
                        <div className="ai-desc">
                            Predictive dashboards with ML-driven forecasting for sales, demand, and churn. Built on Prophet, XGBoost, and TensorFlow —
                            surfaced via real-time Metabase or custom React dashboards with natural language querying using text-to-SQL AI.
                        </div>
                        <div
                            className="tags"
                            style={{ marginTop: '10px' }}>
                            <span className="tag">XGBoost</span>
                            <span className="tag">Prophet</span>
                            <span className="tag">Text-to-SQL</span>
                            <span className="tag">Metabase</span>
                        </div>
                    </div>
                    <div className="ai-card">
                        <div className="ai-icon">🔄</div>
                        <div className="ai-title">AI Workflow Automation</div>
                        <div className="ai-desc">
                            End-to-end intelligent automation using n8n, Make (Integromat), and Zapier with AI nodes. Automate lead qualification,
                            invoice processing, email triaging, report generation, and social media scheduling — zero human intervention required.
                        </div>
                        <div
                            className="tags"
                            style={{ marginTop: '10px' }}>
                            <span className="tag">n8n</span>
                            <span className="tag">Make</span>
                            <span className="tag">Zapier AI</span>
                            <span className="tag">GPT Automation</span>
                        </div>
                    </div>
                    <div className="ai-card">
                        <div className="ai-icon">🎯</div>
                        <div className="ai-title">Personalisation &amp; Recommendation Engines</div>
                        <div className="ai-desc">
                            Real-time recommendation systems for e-commerce, EdTech, and media platforms using collaborative filtering, content-based
                            models, and GPT-4 embeddings. Drives AOV, retention, and time-on-site with product, content &amp; course suggestions.
                        </div>
                        <div
                            className="tags"
                            style={{ marginTop: '10px' }}>
                            <span className="tag">Embeddings</span>
                            <span className="tag">Weaviate</span>
                            <span className="tag">CF Models</span>
                            <span className="tag">A/B Testing</span>
                        </div>
                    </div>
                    <div className="ai-card">
                        <div className="ai-icon">📄</div>
                        <div className="ai-title">Document AI &amp; Intelligent OCR</div>
                        <div className="ai-desc">
                            Extract structured data from invoices, ID cards, marksheets, and medical reports using AWS Textract, Google Document AI,
                            and fine-tuned vision models. Automates data entry, KYC verification, and document classification at scale.
                        </div>
                        <div
                            className="tags"
                            style={{ marginTop: '10px' }}>
                            <span className="tag">AWS Textract</span>
                            <span className="tag">Google Doc AI</span>
                            <span className="tag">OCR</span>
                            <span className="tag">KYC Automation</span>
                        </div>
                    </div>
                    <div className="ai-card">
                        <div className="ai-icon">🔒</div>
                        <div className="ai-title">AI Security &amp; Fraud Detection</div>
                        <div className="ai-desc">
                            Real-time fraud detection systems for payments, login attempts, and content moderation. Uses anomaly detection models,
                            behavioural biometrics, and LLM-powered threat analysis to protect platforms from abuse, bots, and financial fraud.
                        </div>
                        <div
                            className="tags"
                            style={{ marginTop: '10px' }}>
                            <span className="tag">Anomaly Detection</span>
                            <span className="tag">Fraud ML</span>
                            <span className="tag">Content Moderation</span>
                            <span className="tag">Biometrics</span>
                        </div>
                    </div>
                    <div className="ai-card">
                        <div className="ai-icon">🌐</div>
                        <div className="ai-title">AI Integration &amp; API Consulting</div>
                        <div className="ai-desc">
                            Seamlessly embed AI capabilities into your existing product — CRM, ERP, website, or mobile app. We integrate OpenAI,
                            Anthropic, Google Gemini, Cohere, and Groq APIs with custom middleware, rate limiting, cost controls, and observability
                            via LangSmith.
                        </div>
                        <div
                            className="tags"
                            style={{ marginTop: '10px' }}>
                            <span className="tag">Groq</span>
                            <span className="tag">Cohere</span>
                            <span className="tag">Gemini</span>
                            <span className="tag">LangSmith</span>
                            <span className="tag">Observability</span>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="divider" />

            {/* STEAM PACKAGES */}
            <div
                className="section reveal"
                id="steam-packages">
                <span className="s-label">STEAM Labs</span>
                <h2
                    style={{
                        fontFamily: "'Bebas Neue',sans-serif",
                        fontSize: 'clamp(40px,6vw,72px)',
                        lineHeight: '.95',
                        letterSpacing: '1px',
                        color: 'var(--white)',
                        marginTop: '8px'
                    }}>
                    LAB <span style={{ color: 'var(--blue-vivid)' }}>PACKAGES</span>
                </h2>
                <p style={{ color: 'var(--grey-mid)', fontSize: '15px', marginTop: '14px', maxWidth: '580px', lineHeight: '1.7' }}>
                    Three tiers of future-ready STEAM labs — each packed with the tools, curriculum, and training your school needs to produce
                    innovators, not just students.
                </p>
                <div className="steam-packages">
                    <div className="steam-pkg reveal-left">
                        <div className="pkg-icon">🔩</div>
                        <div className="pkg-name">Starter Robotics Lab</div>
                        <div className="pkg-tagline">
                            The perfect launchpad — hands-on STEAM for schools taking their first step into coding and robotics.
                        </div>
                        <ul className="pkg-items">
                            <li>Arduino Uno &amp; Nano starter kits (×10)</li>
                            <li>mBot ranger robotics sets for drag-and-drop coding</li>
                            <li>Breadboard + sensor packs (IR, ultrasonic, DHT11)</li>
                            <li>10 student coding workstations (i5, 8GB RAM)</li>
                            <li>Scratch, MIT App Inventor &amp; Tinkercad licences</li>
                            <li>LED matrix &amp; LCD display project kits</li>
                            <li>3-day teacher training + pedagogy workshop</li>
                            <li>6-month structured STEAM curriculum (Grades 6–10)</li>
                            <li>Monthly online mentorship sessions</li>
                            <li>Lab setup, wiring &amp; safety audit included</li>
                        </ul>
                        <a
                            href="#cta"
                            className="pkg-cta">
                            Get Started
                        </a>
                    </div>
                    <div className="steam-pkg featured reveal">
                        <span className="pkg-badge">Most Popular</span>
                        <div className="pkg-icon">🧠</div>
                        <div className="pkg-name">Advanced AI Lab</div>
                        <div className="pkg-tagline">
                            The complete AI + robotics environment — where students build real projects with real technology.
                        </div>
                        <ul className="pkg-items">
                            <li>GPU-enabled ML workstations (RTX 3060, 16GB RAM ×15)</li>
                            <li>Raspberry Pi 5 dev boards with camera modules (×10)</li>
                            <li>Arduino Mega + ESP32 IoT experiment kits</li>
                            <li>Full autonomous robotics arena with line-follower &amp; obstacle bots</li>
                            <li>Python, TensorFlow Lite &amp; OpenCV pre-configured environments</li>
                            <li>Face recognition &amp; object detection project modules</li>
                            <li>Jupyter Notebook server for collaborative ML experiments</li>
                            <li>ChatGPT API integration projects for students</li>
                            <li>IoT sensor dashboard with real-time data visualisation</li>
                            <li>5-day intensive teacher training (AI + robotics)</li>
                            <li>1-year CBSE-aligned curriculum + quarterly updates</li>
                            <li>Dedicated Albero lab coordinator (remote, monthly visits)</li>
                            <li>Annual science fair &amp; hackathon participation support</li>
                        </ul>
                        <a
                            href="#cta"
                            className="pkg-cta">
                            Get Started
                        </a>
                    </div>
                    <div className="steam-pkg reveal-right">
                        <div className="pkg-icon">🚀</div>
                        <div className="pkg-name">Innovation Lab</div>
                        <div className="pkg-tagline">
                            The flagship school-of-the-future lab — AI, robotics, drones, 3D printing, and research-grade computing under one roof.
                        </div>
                        <ul className="pkg-items">
                            <li>High-performance AI workstations (RTX 4070, 32GB RAM ×20)</li>
                            <li>Competitive robotics arena (VEX V5 + custom obstacle courses)</li>
                            <li>DJI Tello EDU drone programming zone (×6 drones)</li>
                            <li>Bambu Lab A1 3D printing bay (×3 printers + filament supply)</li>
                            <li>PCB design station with soldering gear &amp; oscilloscopes</li>
                            <li>NVIDIA Jetson Nano for edge AI &amp; real-time computer vision</li>
                            <li>Lego Mindstorms EV3 + Spike Prime sets for advanced robotics</li>
                            <li>AR/VR headsets (Meta Quest 3) for immersive STEAM experiences</li>
                            <li>Full generative AI module — image, text &amp; code generation</li>
                            <li>LLM integration lab — students build their own AI assistants</li>
                            <li>Cloud computing sandbox (AWS Educate + GCP for EDU accounts)</li>
                            <li>7-day deep-dive teacher certification programme</li>
                            <li>Lifetime curriculum access with bi-annual refresh</li>
                            <li>On-site Albero engineer visits (quarterly) + 24/7 support</li>
                            <li>Branding, inauguration event &amp; PR support included</li>
                        </ul>
                        <a
                            href="#cta"
                            className="pkg-cta">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>

            <hr className="divider" />

            {/* TESTIMONIALS */}
            <div
                className="section reveal"
                id="testimonials">
                <span className="s-label">Client Voices</span>
                <h2
                    style={{
                        fontFamily: "'Bebas Neue',sans-serif",
                        fontSize: 'clamp(40px,6vw,72px)',
                        lineHeight: '.95',
                        letterSpacing: '1px',
                        color: 'var(--white)',
                        marginTop: '8px'
                    }}>
                    WHAT CLIENTS <span style={{ color: 'var(--blue-vivid)' }}>SAY</span>
                </h2>
                <div className="testimonials-grid stagger">
                    <div className="testimonial-card">
                        <div className="quote-mark">&quot;</div>
                        <div className="testimonial-text">
                            Albero built our entire ERP system that reduced manual data-entry work by 80%. The system handles admissions, fee
                            collection, and faculty management seamlessly.
                        </div>
                        <div className="testimonial-author">
                            <div className="stars">★★★★★</div>
                            <div
                                className="author-name"
                                style={{ marginTop: '8px' }}>
                                Director
                            </div>
                            <div className="author-role">Advance Group of Colleges</div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="quote-mark">&quot;</div>
                        <div className="testimonial-text">
                            The STEAM lab Albero installed has completely transformed how our students engage with technology. Three teams have
                            already won regional robotics competitions.
                        </div>
                        <div className="testimonial-author">
                            <div className="stars">★★★★★</div>
                            <div
                                className="author-name"
                                style={{ marginTop: '8px' }}>
                                Principal
                            </div>
                            <div className="author-role">Ryan International School, Pune</div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="quote-mark">&quot;</div>
                        <div className="testimonial-text">
                            Our e-commerce revenue grew 3× in six months after Albero rebuilt our platform. The mobile performance and AI
                            recommendations are best-in-class for our category.
                        </div>
                        <div className="testimonial-author">
                            <div className="stars">★★★★★</div>
                            <div
                                className="author-name"
                                style={{ marginTop: '8px' }}>
                                Founder
                            </div>
                            <div className="author-role">TUC — The Urban Closet</div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="quote-mark">&quot;</div>
                        <div className="testimonial-text">
                            Albero&apos;s Meta ad creatives were structured and conversion-focused. The campaign generated 4× more qualified leads
                            compared to our previous agency.
                        </div>
                        <div className="testimonial-author">
                            <div className="stars">★★★★★</div>
                            <div
                                className="author-name"
                                style={{ marginTop: '8px' }}>
                                Marketing Head
                            </div>
                            <div className="author-role">Ekana Business Center</div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="divider" />

            {/* CLIENTS */}
            <div
                className="section reveal"
                id="clients">
                <span className="s-label">Trusted By</span>
                <h2
                    style={{
                        fontFamily: "'Bebas Neue',sans-serif",
                        fontSize: 'clamp(40px,6vw,72px)',
                        lineHeight: '.95',
                        letterSpacing: '1px',
                        color: 'var(--white)',
                        marginTop: '8px'
                    }}>
                    OUR <span style={{ color: 'var(--blue-vivid)' }}>CLIENTS</span>
                </h2>
                <p style={{ color: 'var(--grey-mid)', fontSize: '15px', marginTop: '14px', maxWidth: '480px', lineHeight: '1.7' }}>
                    Schools, enterprises, and startups that trust Albero to build their technology.
                </p>
                <div className="logo-grid stagger">
                    <div className="logo-card">
                        <div className="logo-initials">DPS</div>
                        <div className="logo-name">Delhi Public School</div>
                    </div>
                    <div className="logo-card">
                        <div className="logo-initials">RIS</div>
                        <div className="logo-name">Ryan International School</div>
                    </div>
                    <div className="logo-card">
                        <div className="logo-initials">AI</div>
                        <div className="logo-name">Amity International</div>
                    </div>
                    <div className="logo-card">
                        <div className="logo-initials">AGC</div>
                        <div className="logo-name">Advance Group of Colleges</div>
                    </div>
                    <div className="logo-card">
                        <div className="logo-initials">EBC</div>
                        <div className="logo-name">Ekana Business Center</div>
                    </div>
                    <div className="logo-card">
                        <div className="logo-initials">TUC</div>
                        <div className="logo-name">The Urban Closet</div>
                    </div>
                    <div className="logo-card">
                        <div className="logo-initials">DDN</div>
                        <div className="logo-name">Digidonar Agency</div>
                    </div>
                </div>
            </div>

            <hr className="divider" />

            {/* INDIA PRESENCE */}
            <div
                className="section reveal"
                id="presence">
                <span className="s-label">Our Reach</span>
                <h2
                    style={{
                        fontFamily: "'Bebas Neue',sans-serif",
                        fontSize: 'clamp(40px,6vw,72px)',
                        lineHeight: '.95',
                        letterSpacing: '1px',
                        color: 'var(--white)',
                        marginTop: '8px'
                    }}>
                    SERVING INDIA <span style={{ color: 'var(--blue-vivid)' }}>NATIONWIDE</span>
                </h2>
                <p style={{ color: 'var(--grey-mid)', fontSize: '15px', marginTop: '14px', maxWidth: '480px', lineHeight: '1.7' }}>
                    From Lucknow to Bengaluru — building technology that moves India forward.
                </p>
                <div className="cities-grid stagger">
                    <div className="city-card">
                        <div className="city-dot"></div>
                        <div className="city-name">Lucknow</div>
                    </div>
                    <div className="city-card">
                        <div className="city-dot"></div>
                        <div className="city-name">Delhi</div>
                    </div>
                    <div className="city-card">
                        <div className="city-dot"></div>
                        <div className="city-name">Bengaluru</div>
                    </div>
                    <div className="city-card">
                        <div className="city-dot"></div>
                        <div className="city-name">Hyderabad</div>
                    </div>
                    <div className="city-card">
                        <div className="city-dot"></div>
                        <div className="city-name">Pune</div>
                    </div>
                    <div className="city-card">
                        <div className="city-dot"></div>
                        <div className="city-name">Mumbai</div>
                    </div>
                </div>
            </div>

            <hr className="divider" />

            {/* CTA */}
            <div
                className="cta-section reveal"
                id="cta">
                <div
                    className="float-badge"
                    style={{ marginBottom: '28px' }}>
                    <span className="dot"></span>
                    Currently Accepting Projects
                </div>
                <h2>
                    LET&apos;S BUILD <em>Something</em>
                    <br />
                    POWERFUL TOGETHER
                </h2>
                <p>Whether you need a digital product, enterprise system, or a STEAM lab for your school — we&apos;re ready.</p>
                <div className="cta-btns">
                    <a
                        href="/contact"
                        className="btn-w">
                        Start Your Project
                    </a>
                    <a
                        href="/contact?type=consultation"
                        className="btn-o">
                        Book a Consultation
                    </a>
                </div>
            </div>
        </div>
    )
}
