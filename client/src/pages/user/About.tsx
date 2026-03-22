import '../../styles/work.css'
import '../../styles/about.css'

import ParticleCanvas from '@/components/workui/ParticleCanvas'
import CursorGlow from '@/components/workui/CursorGlow'
import ScrollReveal from '@/components/workui/ScrollReveal'
import { aboutData } from '@/constants/about'

export default function AboutPage() {
    const { hero, mission, story, team, stats, whyUs, cta } = aboutData

    return (
        <div className="about-page">
            <ParticleCanvas />
            <CursorGlow />
            <ScrollReveal />

            {/* ── HERO ── */}
            <section className="about-hero">
                <div className="hero-bg"></div>
                <div className="hero-grid"></div>
                <div className="hero-arc"></div>
                <div className="hero-arc-inner"></div>
                <div className="hero-corner tl"></div>
                <div className="hero-corner tr"></div>
                <div className="hero-corner bl"></div>
                <div className="hero-corner br"></div>

                <div className="about-hero-inner">
                    <div className="hero-badge reveal">
                        <span className="hero-badge-dot"></span>
                        {hero.badge}
                    </div>

                    <h1 className="about-hero-title reveal">
                        {hero.titleLine1}
                        <span className="stroke-word">{hero.titleStroke}</span>
                        <br />
                        <em>{hero.titleEm}</em>
                    </h1>

                    <div className="hero-divline"></div>

                    <p className="about-hero-sub reveal">{hero.body}</p>

                    <div className="about-hero-chips stagger">
                        {hero.chips.map((chip, i) => (
                            <div
                                key={i}
                                className="about-chip">
                                <span className="about-chip-num">{chip.num}</span>
                                <span className="about-chip-lbl">{chip.label}</span>
                            </div>
                        ))}
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
                        <span className="s-label">{mission.label}</span>
                        <h2 className="about-section-title">
                            {mission.title}
                            <em>{mission.titleEm}</em>
                        </h2>
                        <p className="about-body-text">
                            {mission.body1Parts.before}
                            <strong>{mission.body1Parts.bold}</strong>
                            {mission.body1Parts.after}
                        </p>
                        <p className="about-body-text">{mission.body2}</p>
                        <div className="about-mission-tags tags">
                            {mission.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="about-mission-right reveal-right">
                        <div className="about-value-cards stagger">
                            {mission.values.map((v, i) => (
                                <div
                                    key={i}
                                    className="about-value-card">
                                    <div className="about-value-icon">{v.icon}</div>
                                    <div className="about-value-title">{v.title}</div>
                                    <div className="about-value-desc">{v.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <hr className="divider" />

            {/* ── STORY ── */}
            <section className="section">
                <div className="about-story reveal">
                    <span className="s-label">{story.label}</span>
                    <h2 className="about-section-title about-center">
                        {story.title}
                        <em>{story.titleEm}</em>
                    </h2>
                </div>

                <div className="about-timeline">
                    <div className="about-timeline-line"></div>

                    {story.timeline.map((item, i) => (
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
                    <span className="s-label">{team.label}</span>
                    <h2 className="about-section-title">
                        {team.title}
                        <em>{team.titleEm}</em>
                    </h2>
                    <p
                        className="about-body-text"
                        style={{ maxWidth: '520px', marginBottom: '48px' }}>
                        {team.body}
                    </p>
                </div>

                <div className="about-team-grid stagger">
                    {team.members.map((member, i) => (
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
                    <span className="s-label">{stats.label}</span>
                    <h2 className="about-section-title">
                        {stats.title}
                        <em>{stats.titleEm}</em>
                    </h2>
                </div>

                <div className="stats-row stagger">
                    {stats.items.map((s, i) => (
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
                    <span className="s-label">{whyUs.label}</span>
                    <h2 className="about-section-title">
                        {whyUs.title}
                        <em>{whyUs.titleEm}</em>
                    </h2>
                </div>

                <div className="about-why-grid stagger">
                    {whyUs.cards.map((item, i) => (
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
                    {cta.title}
                    <br />
                    <em>{cta.titleEm}</em>
                </h2>
                <p>{cta.body}</p>
                <div className="cta-btns">
                    <a
                        href={cta.primaryHref}
                        className="btn-w">
                        {cta.primaryLabel}
                    </a>
                    <a
                        href={cta.secondaryHref}
                        className="btn-o">
                        {cta.secondaryLabel}
                    </a>
                </div>
            </section>
        </div>
    )
}
