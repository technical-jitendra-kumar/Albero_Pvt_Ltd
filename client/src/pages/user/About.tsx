import '../../styles/work.css'
import '../../styles/about.css'
import ScrollReveal from '@/components/workui/ScrollReveal'

export default function AboutPage() {
    return (
        <div className="about-page">
            <ScrollReveal />

            {/* ── HERO ── */}
            <section className="about-hero">
                <div className="hero-bg"></div>
                <div className="hero-grid"></div>
                <div className="hero-arc"></div>
                <div className="hero-arc-inner"></div>
                <div className="hero-corner tl"></div>
                <div className="hero-corner tr"></div>

                <div className="about-hero-inner">
                    <div className="hero-badge reveal">
                        <span className="hero-badge-dot"></span>
                        WHO WE ARE
                    </div>

                    <h1 className="about-hero-title reveal">
                        WE BUILD
                        <span className="stroke-word"> DIGITAL</span>
                        <br />
                        <em>Experiences</em>
                    </h1>

                    <div className="hero-divline"></div>

                    <p className="about-hero-sub reveal">
                        Albero Technologies is a full-stack web development studio crafting high-performance, visually stunning digital products for
                        startups and enterprises worldwide.
                    </p>

                    <div className="about-hero-chips stagger">
                        <div className="about-chip">
                            <span className="about-chip-num">3+</span>
                            <span className="about-chip-lbl">Years Building</span>
                        </div>
                        <div className="about-chip">
                            <span className="about-chip-num">113+</span>
                            <span className="about-chip-lbl">Projects Shipped</span>
                        </div>
                        <div className="about-chip">
                            <span className="about-chip-num">67+</span>
                            <span className="about-chip-lbl">Happy Clients</span>
                        </div>
                        <div className="about-chip">
                            <span className="about-chip-num">95%</span>
                            <span className="about-chip-lbl">Satisfaction Rate</span>
                        </div>
                    </div>
                </div>

                <div className="hero-scroll">
                    <span>SCROLL</span>
                    <div className="scroll-line"></div>
                </div>
            </section>

            {/* ── MISSION ── */}
            <section className="section">
                <div className="about-mission-grid">
                    <div className="about-mission-left reveal-left">
                        <span className="s-label">OUR MISSION</span>
                        <h2 className="about-section-title">
                            Empowering Businesses
                            <em> Through Technology</em>
                        </h2>
                        <p className="about-body-text">
                            We believe every business deserves world-class digital infrastructure. Our mission is to bridge the gap between ambition
                            and execution — delivering software that doesn't just work, but <strong>wins</strong>.
                        </p>
                        <p className="about-body-text">
                            From early-stage startups to established enterprises, we bring the same level of craft, care, and commitment to every
                            project we take on.
                        </p>
                        <div className="about-mission-tags tags">
                            <span className="tag">Innovation First</span>
                            <span className="tag">Client Focused</span>
                            <span className="tag">Scalable Solutions</span>
                            <span className="tag">Quality Driven</span>
                        </div>
                    </div>

                    <div className="about-mission-right reveal-right">
                        <div className="about-value-cards stagger">
                            <div className="about-value-card">
                                <div className="about-value-icon">⚡</div>
                                <div className="about-value-title">Speed Without Compromise</div>
                                <div className="about-value-desc">We ship fast without cutting corners — every line of code is intentional.</div>
                            </div>
                            <div className="about-value-card">
                                <div className="about-value-icon">🎯</div>
                                <div className="about-value-title">Precision Engineering</div>
                                <div className="about-value-desc">Pixel-perfect interfaces backed by robust, maintainable architecture.</div>
                            </div>
                            <div className="about-value-card">
                                <div className="about-value-icon">🤝</div>
                                <div className="about-value-title">True Partnership</div>
                                <div className="about-value-desc">We embed with your team, not just deliver a product and disappear.</div>
                            </div>
                            <div className="about-value-card">
                                <div className="about-value-icon">🔮</div>
                                <div className="about-value-title">Future-Ready Builds</div>
                                <div className="about-value-desc">Architectures designed to scale with your ambitions, not against them.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="divider" />

            {/* ── STORY ── */}
            <section className="section">
                <div className="about-story reveal">
                    <span className="s-label">OUR STORY</span>
                    <h2 className="about-section-title about-center">
                        From a Small Team to
                        <em> A Global Studio</em>
                    </h2>
                </div>

                <div className="about-timeline">
                    <div className="about-timeline-line"></div>

                    {[
                        {
                            year: '2021',
                            title: 'The Beginning',
                            desc: 'Albero was founded with a single mission — build software that makes a real difference. Started with two developers and a laptop.',
                            side: 'left'
                        },
                        {
                            year: '2022',
                            title: 'First 20 Clients',
                            desc: 'Word spread fast. We onboarded our first 20 clients across industries from education to e-commerce, learning what truly great products look like.',
                            side: 'right'
                        },
                        {
                            year: '2023',
                            title: 'Expanding Services',
                            desc: 'We expanded into digital marketing, UI/UX design, and enterprise solutions — becoming a true end-to-end technology partner.',
                            side: 'left'
                        },
                        {
                            year: '2024',
                            title: 'Going Global',
                            desc: 'Crossed 100 projects, entered international markets, and built a team of specialists across development, design, and strategy.',
                            side: 'right'
                        },
                        {
                            year: '2025',
                            title: 'Today & Beyond',
                            desc: 'Now a full-stack studio with 67+ active clients, we continue to push the boundaries of what digital products can achieve.',
                            side: 'left'
                        }
                    ].map((item, i) => (
                        <div
                            key={i}
                            className={`about-timeline-item ${item.side} reveal`}>
                            <div className="about-timeline-card">
                                <div className="about-timeline-year">{item.year}</div>
                                <div className="about-timeline-title">{item.title}</div>
                                <div className="about-timeline-desc">{item.desc}</div>
                            </div>
                            <div className="about-timeline-dot"></div>
                        </div>
                    ))}
                </div>
            </section>

            <hr className="divider" />

            {/* ── TEAM ── */}
            <section className="section">
                <div className="reveal">
                    <span className="s-label">THE TEAM</span>
                    <h2 className="about-section-title">
                        People Behind
                        <em> The Magic</em>
                    </h2>
                    <p
                        className="about-body-text"
                        style={{ maxWidth: '520px', marginBottom: '48px' }}>
                        A small but mighty team of engineers, designers, and strategists obsessed with building things people love to use.
                    </p>
                </div>

                <div className="about-team-grid stagger">
                    {[
                        { name: 'Taher Maksee', role: 'Founder & Lead Developer', emoji: '👨‍💻', tags: ['React', 'Node.js', 'Architecture'] },
                        { name: 'Design Lead', role: 'UI/UX & Brand Design', emoji: '🎨', tags: ['Figma', 'Motion', 'Branding'] },
                        { name: 'Backend Engineer', role: 'Systems & Infrastructure', emoji: '⚙️', tags: ['AWS', 'PostgreSQL', 'APIs'] },
                        { name: 'Growth Lead', role: 'Marketing & Strategy', emoji: '📈', tags: ['SEO', 'Analytics', 'Growth'] }
                    ].map((member, i) => (
                        <div
                            key={i}
                            className="about-team-card">
                            <div className="about-team-avatar">{member.emoji}</div>
                            <div className="about-team-name">{member.name}</div>
                            <div className="about-team-role">{member.role}</div>
                            <div className="about-team-tags tags">
                                {member.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="tag">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <hr className="divider" />

            {/* ── STATS ── */}
            <section className="section">
                <div className="reveal">
                    <span className="s-label">BY THE NUMBERS</span>
                    <h2 className="about-section-title">
                        Results That
                        <em> Speak Louder</em>
                    </h2>
                </div>

                <div className="stats-row stagger">
                    {[
                        { num: '113', suffix: '+', label: 'Projects Completed' },
                        { num: '67', suffix: '+', label: 'Happy Clients' },
                        { num: '3', suffix: '+', label: 'Years Experience' },
                        { num: '95', suffix: '%', label: 'Client Satisfaction' }
                    ].map((s, i) => (
                        <div
                            key={i}
                            className="stat-card">
                            <div
                                className="stat-num"
                                data-target={s.num}>
                                {s.num}
                                <span className="stat-accent">{s.suffix}</span>
                            </div>
                            <div className="stat-label">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            <hr className="divider" />

            {/* ── WHY US ── */}
            <section className="section">
                <div className="reveal">
                    <span className="s-label">WHY ALBERO</span>
                    <h2 className="about-section-title">
                        What Sets Us
                        <em> Apart</em>
                    </h2>
                </div>

                <div className="about-why-grid stagger">
                    {[
                        {
                            icon: '🏗️',
                            title: 'End-to-End Ownership',
                            desc: 'From wireframe to deployment to maintenance — we own the full lifecycle so nothing falls through the cracks.'
                        },
                        {
                            icon: '💬',
                            title: 'Radical Transparency',
                            desc: 'Weekly updates, open timelines, and direct access to your dev team. No middlemen, no surprises.'
                        },
                        {
                            icon: '📐',
                            title: 'Design-First Thinking',
                            desc: "Every product starts with design. We believe great UX is not a luxury — it's the foundation of good software."
                        },
                        {
                            icon: '🔒',
                            title: 'Security by Default',
                            desc: 'Enterprise-grade security practices baked into every project from day one.'
                        },
                        {
                            icon: '🚀',
                            title: 'Fast Turnaround',
                            desc: 'We move with urgency. Most MVPs shipped in 4–6 weeks without sacrificing quality.'
                        },
                        { icon: '📞', title: '24/7 Support', desc: 'Post-launch support, monitoring, and rapid response whenever you need us.' }
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="about-why-card">
                            <div className="about-why-icon">{item.icon}</div>
                            <div className="about-why-title">{item.title}</div>
                            <div className="about-why-desc">{item.desc}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="cta-section reveal">
                <h2>
                    Ready to Build
                    <br />
                    <em>Something Great?</em>
                </h2>
                <p>Let's talk about your project. No commitments, just a conversation.</p>
                <div className="cta-btns">
                    <a
                        href="#contact"
                        className="btn-w">
                        Start a Project
                    </a>
                    <a
                        href="/work"
                        className="btn-o">
                        View Our Work →
                    </a>
                </div>
            </section>
        </div>
    )
}
