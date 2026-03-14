'use client'

import { Badge } from '@/components/ui/badge'
import { Check, X, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { whyChooseUsData } from '@/constants/whychooseus'
import { NavLink } from '../common/NavLink'

// ─── Shared decorations (same as Services / Process) ─────────────────────────

function DotGrid({ id, color, opacity }: { id: string; color: string; opacity: number }) {
    return (
        <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            aria-hidden="true"
            style={{ display: 'block' }}>
            <defs>
                <pattern
                    id={id}
                    x="0"
                    y="0"
                    width="18"
                    height="18"
                    patternUnits="userSpaceOnUse">
                    <circle
                        cx="1.5"
                        cy="1.5"
                        r="1.5"
                        fill={color}
                        fillOpacity={opacity}
                    />
                </pattern>
            </defs>
            <rect
                width="200"
                height="200"
                fill={`url(#${id})`}
            />
        </svg>
    )
}

function Bracket({ color, rotate = 0 }: { color: string; rotate?: number }) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            style={{ transform: `rotate(${rotate}deg)`, display: 'block' }}>
            <path
                d="M3 21 L3 3 L21 3"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.4"
            />
        </svg>
    )
}

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function WhyChooseUs() {
    const { badgeTitle, title, subtitle, col1Name, col2Name, col3Name, mobileTitleText, features, cardTitle, cardSubtitle, ctaLabel } =
        whyChooseUsData

    return (
        <section style={{ background: 'var(--black)', color: 'var(--white)', padding: '80px 20px', position: 'relative', overflow: 'hidden' }}>
            {/* ── Scoped styles ── */}
            <style>{`
                /* ── table card ── */
                .wcu-card {
                    background: var(--bg-2);
                    border: 1px solid var(--border);
                    border-radius: 20px;
                    overflow: hidden;
                    max-width: 900px;
                    margin: 0 auto;
                }

                /* ── table header ── */
                .wcu-thead {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    background: var(--bg-card);
                    border-bottom: 1px solid var(--border);
                }
                .wcu-th {
                    padding: 18px 20px;
                    font-family: var(--font-barlow-condensed);
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: .1em;
                    text-transform: uppercase;
                    color: var(--grey-mid);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .wcu-th-us {
                    background: oklch(from var(--blue-vivid) l c h / 0.08);
                    border-left: 1px solid var(--border);
                    border-right: 1px solid var(--border);
                    color: var(--blue-soft);
                    justify-content: center;
                    position: relative;
                }
                .wcu-th-others { justify-content: center; }

                /* ── table rows ── */
                .wcu-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    border-bottom: 1px solid var(--border);
                    transition: background .18s;
                }
                .wcu-row:last-child { border-bottom: none; }
                .wcu-row:hover { background: oklch(from var(--blue-vivid) l c h / 0.04); }

                .wcu-cell {
                    padding: 16px 20px;
                    display: flex;
                    align-items: center;
                }
                .wcu-cell-us {
                    justify-content: center;
                    background: oklch(from var(--blue-vivid) l c h / 0.04);
                    border-left: 1px solid var(--border);
                    border-right: 1px solid var(--border);
                }
                .wcu-cell-others { justify-content: center; }

                /* ── feature name ── */
                .wcu-feat-name {
                    font-family: var(--font-barlow);
                    font-size: 14px;
                    font-weight: 600;
                    color: var(--grey-light);
                }

                /* ── feature icon box ── */
                .wcu-feat-icon {
                    width: 34px; height: 34px;
                    border-radius: 9px;
                    background: var(--bg-mid);
                    border: 1px solid var(--border);
                    display: flex; align-items: center; justify-content: center;
                    color: var(--grey-mid);
                    flex-shrink: 0;
                    margin-right: 12px;
                }

                /* ── check / x badges ── */
                .wcu-check {
                    width: 30px; height: 30px; border-radius: 50%;
                    background: rgba(34,197,94,0.1);
                    border: 1px solid rgba(34,197,94,0.25);
                    display: flex; align-items: center; justify-content: center;
                }
                .wcu-cross {
                    width: 30px; height: 30px; border-radius: 50%;
                    background: rgba(239,68,68,0.08);
                    border: 1px solid rgba(239,68,68,0.2);
                    display: flex; align-items: center; justify-content: center;
                }

                /* ── CTA card ── */
                .wcu-cta-card {
                    max-width: 600px;
                    margin: 48px auto 0;
                    background: var(--bg-2);
                    border: 1px solid var(--border);
                    border-radius: 20px;
                    padding: 40px 36px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                /* ── CTA button ── */
                .wcu-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 9px;
                    padding: 13px 28px;
                    border-radius: 10px;
                    background: var(--white);
                    border: 1px solid var(--white);
                    font-family: var(--font-barlow-condensed);
                    font-size: 13px;
                    font-weight: 700;
                    letter-spacing: .09em;
                    text-transform: uppercase;
                    color: var(--black);
                    cursor: pointer;
                    transition: background .2s, transform .2s, box-shadow .2s;
                    white-space: nowrap;
                    text-decoration: none;
                }
                .wcu-btn:hover {
                    background: var(--grey-light);
                    transform: translateY(-2px);
                    box-shadow: 0 8px 28px oklch(from var(--blue-vivid) l c h / 0.2);
                }

                /* ── mobile cards ── */
                .wcu-mob-card {
                    background: var(--bg-2);
                    border: 1px solid var(--border);
                    border-radius: 16px;
                    overflow: hidden;
                    margin-bottom: 10px;
                }
                .wcu-mob-head {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 14px 16px;
                    background: var(--bg-card);
                    border-bottom: 1px solid var(--border);
                }
                .wcu-mob-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 13px 16px;
                    border-top: 1px solid var(--border);
                }
                .wcu-mob-label {
                    font-family: var(--font-barlow-condensed);
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: .09em;
                    text-transform: uppercase;
                    color: var(--grey-mid);
                }
                .wcu-mob-label-us { color: var(--blue-soft); }

                /* ── responsive hide/show ── */
                @media (max-width: 640px) {
                    .wcu-desktop { display: none !important; }
                    .wcu-mobile  { display: block !important; }
                    .wcu-cta-card { padding: 28px 20px; }
                }
                @media (min-width: 641px) {
                    .wcu-desktop { display: block; }
                    .wcu-mobile  { display: none; }
                }
            `}</style>

            {/* ── BG decorations ── */}
            <div
                aria-hidden="true"
                style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
                <DotGrid
                    id="wcu-dg-tl"
                    color="var(--blue-vivid)"
                    opacity={0.12}
                />
            </div>
            <div
                aria-hidden="true"
                style={{ position: 'absolute', bottom: 0, right: 0, pointerEvents: 'none' }}>
                <DotGrid
                    id="wcu-dg-br"
                    color="var(--amber)"
                    opacity={0.11}
                />
            </div>

            {/* Glow orbs */}
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    top: -160,
                    left: '25%',
                    width: 500,
                    height: 500,
                    borderRadius: '50%',
                    background: 'var(--blue-deep)',
                    filter: 'blur(140px)',
                    opacity: 0.06,
                    pointerEvents: 'none'
                }}
            />
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    bottom: -120,
                    right: '20%',
                    width: 400,
                    height: 400,
                    borderRadius: '50%',
                    background: 'var(--amber)',
                    filter: 'blur(140px)',
                    opacity: 0.05,
                    pointerEvents: 'none'
                }}
            />

            {/* Corner brackets */}
            <div
                aria-hidden="true"
                style={{ position: 'absolute', top: 28, left: 20, pointerEvents: 'none' }}>
                <Bracket color="var(--blue-vivid)" />
            </div>
            <div
                aria-hidden="true"
                style={{ position: 'absolute', top: 28, right: 20, pointerEvents: 'none' }}>
                <Bracket
                    color="var(--blue-vivid)"
                    rotate={90}
                />
            </div>
            <div
                aria-hidden="true"
                style={{ position: 'absolute', bottom: 28, left: 20, pointerEvents: 'none' }}>
                <Bracket
                    color="var(--amber)"
                    rotate={270}
                />
            </div>
            <div
                aria-hidden="true"
                style={{ position: 'absolute', bottom: 28, right: 20, pointerEvents: 'none' }}>
                <Bracket
                    color="var(--amber)"
                    rotate={180}
                />
            </div>

            {/* ── Header ── */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.55 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: 52, position: 'relative', zIndex: 1 }}>
                <Badge
                    variant="outline"
                    className="mb-5 text-white text-xl">
                    {badgeTitle}
                </Badge>
                <h2
                    style={{
                        fontFamily: 'var(--font-bebas)',
                        fontSize: 'clamp(36px, 5vw, 60px)',
                        letterSpacing: '.04em',
                        color: 'var(--white)',
                        lineHeight: 1,
                        marginBottom: 14,
                        marginTop: 16
                    }}>
                    {title}
                </h2>
                <p
                    style={{
                        fontFamily: 'var(--font-barlow)',
                        fontSize: 16,
                        color: 'var(--grey-mid)',
                        maxWidth: 520,
                        margin: '0 auto',
                        lineHeight: 1.75
                    }}>
                    {subtitle}
                </p>
            </motion.div>

            {/* ── Content ── */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.65, delay: 0.15 }}
                viewport={{ once: true }}
                style={{ position: 'relative', zIndex: 1 }}>
                {/* ══ DESKTOP table ══ */}
                <div className="wcu-card wcu-desktop">
                    {/* Table header */}
                    <div className="wcu-thead">
                        <div
                            className="wcu-th"
                            style={{ paddingLeft: 24 }}>
                            {col1Name}
                        </div>
                        <div className="wcu-th wcu-th-us">
                            {/* Live indicator dot */}
                            <span
                                style={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: '50%',
                                    background: 'var(--blue-vivid)',
                                    boxShadow: '0 0 6px var(--blue-vivid)',
                                    display: 'inline-block',
                                    flexShrink: 0
                                }}
                            />
                            {col2Name}
                        </div>
                        <div className="wcu-th wcu-th-others">{col3Name}</div>
                    </div>

                    {/* Table rows */}
                    <div>
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                className="wcu-row"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                transition={{ duration: 0.4, delay: i * 0.06 }}
                                viewport={{ once: true }}>
                                {/* Feature name */}
                                <div
                                    className="wcu-cell"
                                    style={{ paddingLeft: 24 }}>
                                    <div className="wcu-feat-icon">{feature.icon && <feature.icon size={16} />}</div>
                                    <span className="wcu-feat-name">{feature.name}</span>
                                </div>

                                {/* Us */}
                                <div className="wcu-cell wcu-cell-us">
                                    {feature.us ? (
                                        <div className="wcu-check">
                                            <Check
                                                size={14}
                                                color="#4ade80"
                                            />
                                        </div>
                                    ) : (
                                        <div className="wcu-cross">
                                            <X
                                                size={14}
                                                color="rgba(239,68,68,0.8)"
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Others */}
                                <div className="wcu-cell wcu-cell-others">
                                    {feature.others ? (
                                        <div className="wcu-check">
                                            <Check
                                                size={14}
                                                color="#4ade80"
                                            />
                                        </div>
                                    ) : (
                                        <div className="wcu-cross">
                                            <X
                                                size={14}
                                                color="rgba(239,68,68,0.8)"
                                            />
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ══ MOBILE cards ══ */}
                <div
                    className="wcu-mobile"
                    style={{ maxWidth: 520, margin: '0 auto' }}>
                    {/* comparison label */}
                    <div style={{ textAlign: 'center', marginBottom: 20 }}>
                        <span
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 8,
                                padding: '7px 18px',
                                borderRadius: 999,
                                background: 'oklch(from var(--blue-vivid) l c h / 0.10)',
                                border: '1px solid var(--border-blu)',
                                fontFamily: 'var(--font-barlow-condensed)',
                                fontSize: 11,
                                fontWeight: 700,
                                letterSpacing: '.1em',
                                textTransform: 'uppercase',
                                color: 'var(--blue-soft)'
                            }}>
                            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--blue-vivid)', display: 'inline-block' }} />
                            {mobileTitleText}
                        </span>
                    </div>

                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            className="wcu-mob-card"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            transition={{ duration: 0.4, delay: i * 0.07 }}
                            viewport={{ once: true }}>
                            <div className="wcu-mob-head">
                                <div
                                    className="wcu-feat-icon"
                                    style={{ margin: 0 }}>
                                    {feature.icon && <feature.icon size={16} />}
                                </div>
                                <span className="wcu-feat-name">{feature.name}</span>
                            </div>
                            {/* us row */}
                            <div
                                className="wcu-mob-row"
                                style={{ background: 'oklch(from var(--blue-vivid) l c h / 0.04)' }}>
                                <span className="wcu-mob-label wcu-mob-label-us">{col2Name}</span>
                                {feature.us ? (
                                    <div className="wcu-check">
                                        <Check
                                            size={13}
                                            color="#4ade80"
                                        />
                                    </div>
                                ) : (
                                    <div className="wcu-cross">
                                        <X
                                            size={13}
                                            color="rgba(239,68,68,0.8)"
                                        />
                                    </div>
                                )}
                            </div>
                            {/* others row */}
                            <div className="wcu-mob-row">
                                <span className="wcu-mob-label">{col3Name}</span>
                                {feature.others ? (
                                    <div className="wcu-check">
                                        <Check
                                            size={13}
                                            color="#4ade80"
                                        />
                                    </div>
                                ) : (
                                    <div className="wcu-cross">
                                        <X
                                            size={13}
                                            color="rgba(239,68,68,0.8)"
                                        />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ══ CTA card ══ */}
                <motion.div
                    className="wcu-cta-card"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}>
                    {/* card glow */}
                    <div
                        aria-hidden="true"
                        style={{
                            position: 'absolute',
                            top: -60,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: 300,
                            height: 200,
                            borderRadius: '50%',
                            background: 'var(--blue-deep)',
                            filter: 'blur(80px)',
                            opacity: 0.1,
                            pointerEvents: 'none'
                        }}
                    />
                    {/* card dot grid corner */}
                    <div
                        aria-hidden="true"
                        style={{ position: 'absolute', bottom: 0, right: 0, pointerEvents: 'none', opacity: 0.6 }}>
                        <DotGrid
                            id="wcu-cta-dots"
                            color="var(--blue-vivid)"
                            opacity={0.15}
                        />
                    </div>
                    {/* card corner brackets */}
                    <div
                        aria-hidden="true"
                        style={{ position: 'absolute', top: 14, left: 14, pointerEvents: 'none' }}>
                        <Bracket color="var(--blue-vivid)" />
                    </div>
                    <div
                        aria-hidden="true"
                        style={{ position: 'absolute', bottom: 14, right: 14, pointerEvents: 'none' }}>
                        <Bracket
                            color="var(--amber)"
                            rotate={180}
                        />
                    </div>

                    <div style={{ position: 'relative' }}>
                        <h3
                            style={{
                                fontFamily: 'var(--font-bebas)',
                                fontSize: 'clamp(24px, 3.5vw, 34px)',
                                letterSpacing: '.04em',
                                color: 'var(--white)',
                                marginBottom: 12,
                                lineHeight: 1.1
                            }}>
                            {cardTitle}
                        </h3>
                        <p
                            style={{
                                fontFamily: 'var(--font-barlow)',
                                fontSize: 15,
                                color: 'var(--grey-mid)',
                                lineHeight: 1.7,
                                marginBottom: 28,
                                maxWidth: 440,
                                margin: '0 auto 28px'
                            }}>
                            {cardSubtitle}
                        </p>
                        <NavLink href="#contact">
                            <button className="wcu-btn">
                                {ctaLabel}
                                <ChevronRight size={15} />
                            </button>
                        </NavLink>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}
