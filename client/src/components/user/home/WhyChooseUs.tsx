'use client'

import { Badge } from '@/components/ui/badge'
import { Check, X, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { whyChooseUsData } from '@/constants/whychooseus'
import { NavLink } from '../common/NavLink'

// ─── Shared decorations ───────────────────────────────────────────────────────

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
        <section style={{ background: 'transparent', color: 'var(--white)', padding: '80px 20px', position: 'relative', overflow: 'hidden' }}>
            <style>{`
                /* ══ GLASS SYSTEM ══════════════════════════════════════════ */

                /* ── Table card — glass ── */
                .wcu-card {
                    border-radius: 20px;
                    overflow: hidden;
                    max-width: 900px;
                    margin: 0 auto;
                    /* glass */
                    background: linear-gradient(135deg,
                        rgba(255,255,255,0.055) 0%,
                        rgba(255,255,255,0.018) 50%,
                        rgba(99,102,241,0.04) 100%);
                    backdrop-filter: blur(24px) saturate(1.4);
                    -webkit-backdrop-filter: blur(24px) saturate(1.4);
                    border: 1px solid rgba(255,255,255,0.09);
                    box-shadow:
                        0 0 0 1px rgba(255,255,255,0.04) inset,
                        0 1px 0 rgba(255,255,255,0.12) inset,
                        0 24px 64px rgba(0,0,0,0.45),
                        0 4px 16px rgba(0,0,0,0.28);
                    position: relative;
                    isolation: isolate;
                }
                /* top shimmer */
                .wcu-card::before {
                    content: '';
                    position: absolute; top: 0; left: 10%; right: 10%; height: 1px;
                    background: linear-gradient(90deg,transparent,rgba(255,255,255,0.18) 40%,rgba(255,255,255,0.18) 60%,transparent);
                    pointer-events: none; z-index: 10;
                }
                /* noise grain */
                .wcu-card::after {
                    content: '';
                    position: absolute; inset: 0; border-radius: inherit;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
                    background-size: 200px 200px; pointer-events: none; opacity: 0.5; z-index: 1;
                }

                /* ── Table header ── */
                .wcu-thead {
                    display: grid; grid-template-columns: 1fr 1fr 1fr;
                    background: rgba(255,255,255,0.03);
                    border-bottom: 1px solid rgba(255,255,255,0.07);
                    position: relative; z-index: 2;
                }
                .wcu-th {
                    padding: 18px 20px;
                    font-family: var(--font-barlow-condensed);
                    font-size: 12px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
                    color: rgba(255,255,255,0.3);
                    display: flex; align-items: center; gap: 8px;
                }
                .wcu-th-us {
                    background: rgba(99,102,241,0.1);
                    border-left: 1px solid rgba(99,102,241,0.2);
                    border-right: 1px solid rgba(99,102,241,0.2);
                    color: oklch(0.707 0.165 254.624);
                    justify-content: center; position: relative;
                    box-shadow: 0 1px 0 rgba(99,102,241,0.08) inset;
                }
                .wcu-th-others { justify-content: center; }

                /* ── Table rows ── */
                .wcu-row {
                    display: grid; grid-template-columns: 1fr 1fr 1fr;
                    border-bottom: 1px solid rgba(255,255,255,0.06);
                    transition: background .18s;
                    position: relative; z-index: 2;
                }
                .wcu-row:last-child { border-bottom: none; }
                .wcu-row:hover { background: rgba(99,102,241,0.05); }

                .wcu-cell { padding: 16px 20px; display: flex; align-items: center; }
                .wcu-cell-us {
                    justify-content: center;
                    background: rgba(99,102,241,0.05);
                    border-left: 1px solid rgba(99,102,241,0.15);
                    border-right: 1px solid rgba(99,102,241,0.15);
                }
                .wcu-cell-others { justify-content: center; }

                /* ── Feature name ── */
                .wcu-feat-name {
                    font-family: var(--font-barlow); font-size: 14px; font-weight: 600;
                    color: rgba(255,255,255,0.65);
                }

                /* ── Feature icon box — glass ── */
                .wcu-feat-icon {
                    width: 34px; height: 34px; border-radius: 9px;
                    background: rgba(255,255,255,0.06);
                    border: 1px solid rgba(255,255,255,0.09);
                    backdrop-filter: blur(8px);
                    box-shadow: 0 1px 0 rgba(255,255,255,0.06) inset;
                    display: flex; align-items: center; justify-content: center;
                    color: rgba(255,255,255,0.3);
                    flex-shrink: 0; margin-right: 12px;
                }

                /* ── Check / X badges — glass ── */
                .wcu-check {
                    width: 30px; height: 30px; border-radius: 50%;
                    background: rgba(34,197,94,0.12);
                    border: 1px solid rgba(34,197,94,0.28);
                    backdrop-filter: blur(8px);
                    box-shadow: 0 1px 0 rgba(255,255,255,0.06) inset, 0 0 10px rgba(34,197,94,0.1);
                    display: flex; align-items: center; justify-content: center;
                }
                .wcu-cross {
                    width: 30px; height: 30px; border-radius: 50%;
                    background: rgba(239,68,68,0.08);
                    border: 1px solid rgba(239,68,68,0.18);
                    backdrop-filter: blur(8px);
                    display: flex; align-items: center; justify-content: center;
                }

                /* ── CTA card — glass ── */
                .wcu-cta-card {
                    max-width: 600px; margin: 48px auto 0;
                    text-align: center; position: relative; overflow: hidden;
                    /* glass */
                    background: linear-gradient(135deg,
                        rgba(99,102,241,0.12) 0%,
                        rgba(255,255,255,0.03) 50%,
                        rgba(99,102,241,0.04) 100%);
                    backdrop-filter: blur(24px) saturate(1.4);
                    -webkit-backdrop-filter: blur(24px) saturate(1.4);
                    border: 1px solid rgba(99,102,241,0.28);
                    border-radius: 20px; padding: 40px 36px;
                    box-shadow:
                        0 0 0 1px rgba(255,255,255,0.04) inset,
                        0 1px 0 rgba(255,255,255,0.14) inset,
                        0 24px 64px rgba(0,0,0,0.45),
                        0 0 40px rgba(99,102,241,0.12);
                    isolation: isolate;
                }
                .wcu-cta-card::before {
                    content: '';
                    position: absolute; top: 0; left: 10%; right: 10%; height: 1px;
                    background: linear-gradient(90deg,transparent,rgba(255,255,255,0.2) 40%,rgba(255,255,255,0.2) 60%,transparent);
                    pointer-events: none; z-index: 10;
                }
                .wcu-cta-card::after {
                    content: '';
                    position: absolute; inset: 0; border-radius: inherit;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='nc'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23nc)' opacity='0.04'/%3E%3C/svg%3E");
                    background-size: 200px 200px; pointer-events: none; opacity: 0.5; z-index: 1;
                }

                /* ── CTA button — glass white ── */
                .wcu-btn {
                    display: inline-flex; align-items: center; gap: 9px;
                    padding: 13px 28px; border-radius: 10px;
                    background: rgba(255,255,255,0.92);
                    border: 1px solid rgba(255,255,255,0.9);
                    font-family: var(--font-barlow-condensed);
                    font-size: 13px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase;
                    color: #000; cursor: pointer;
                    backdrop-filter: blur(8px);
                    box-shadow: 0 1px 0 rgba(255,255,255,0.5) inset, 0 8px 24px rgba(99,102,241,0.2);
                    transition: background .2s, transform .2s, box-shadow .2s;
                    white-space: nowrap; text-decoration: none;
                }
                .wcu-btn:hover {
                    background: rgba(255,255,255,1);
                    transform: translateY(-2px);
                    box-shadow: 0 1px 0 rgba(255,255,255,0.5) inset, 0 12px 32px rgba(99,102,241,0.28);
                }

                /* ── Mobile cards — glass ── */
                .wcu-mob-card {
                    border-radius: 16px; overflow: hidden; margin-bottom: 10px;
                    background: linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018) 50%,rgba(99,102,241,0.04));
                    backdrop-filter: blur(20px) saturate(1.4);
                    -webkit-backdrop-filter: blur(20px) saturate(1.4);
                    border: 1px solid rgba(255,255,255,0.09);
                    box-shadow: 0 1px 0 rgba(255,255,255,0.1) inset, 0 16px 40px rgba(0,0,0,0.35);
                }
                .wcu-mob-head {
                    display: flex; align-items: center; gap: 12px; padding: 14px 16px;
                    background: rgba(255,255,255,0.04);
                    border-bottom: 1px solid rgba(255,255,255,0.07);
                }
                .wcu-mob-row {
                    display: flex; align-items: center; justify-content: space-between;
                    padding: 13px 16px;
                    border-top: 1px solid rgba(255,255,255,0.06);
                }
                .wcu-mob-label {
                    font-family: var(--font-barlow-condensed); font-size: 11px; font-weight: 700;
                    letter-spacing: .09em; text-transform: uppercase; color: rgba(255,255,255,0.28);
                }
                .wcu-mob-label-us { color: oklch(0.707 0.165 254.624); }

                /* ── Responsive hide/show ── */
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

            {/* ── Scene orbs ── */}
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    top: -200,
                    left: '20%',
                    width: 700,
                    height: 700,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle,oklch(0.546 0.245 262.881) 0%,transparent 70%)',
                    opacity: 0.1,
                    pointerEvents: 'none',
                    filter: 'blur(10px)'
                }}
            />
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    bottom: -150,
                    right: '10%',
                    width: 500,
                    height: 500,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle,oklch(0.623 0.214 259.815) 0%,transparent 70%)',
                    opacity: 0.07,
                    pointerEvents: 'none',
                    filter: 'blur(10px)'
                }}
            />
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    top: '40%',
                    left: '-5%',
                    width: 320,
                    height: 320,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle,oklch(0.511 0.262 276.966) 0%,transparent 70%)',
                    opacity: 0.08,
                    pointerEvents: 'none',
                    filter: 'blur(10px)'
                }}
            />

            {/* ── BG dot grids ── */}
            <div
                aria-hidden="true"
                style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
                <DotGrid
                    id="wcu-dg-tl"
                    color="oklch(0.623 0.214 259.815)"
                    opacity={0.1}
                />
            </div>
            <div
                aria-hidden="true"
                style={{ position: 'absolute', bottom: 0, right: 0, pointerEvents: 'none' }}>
                <DotGrid
                    id="wcu-dg-br"
                    color="var(--amber)"
                    opacity={0.09}
                />
            </div>

            {/* Corner brackets */}
            <div
                aria-hidden="true"
                style={{ position: 'absolute', top: 28, left: 20, pointerEvents: 'none' }}>
                <Bracket color="rgba(99,102,241,0.45)" />
            </div>
            <div
                aria-hidden="true"
                style={{ position: 'absolute', top: 28, right: 20, pointerEvents: 'none' }}>
                <Bracket
                    color="rgba(99,102,241,0.45)"
                    rotate={90}
                />
            </div>
            <div
                aria-hidden="true"
                style={{ position: 'absolute', bottom: 28, left: 20, pointerEvents: 'none' }}>
                <Bracket
                    color="rgba(213,145,0,0.4)"
                    rotate={270}
                />
            </div>
            <div
                aria-hidden="true"
                style={{ position: 'absolute', bottom: 28, right: 20, pointerEvents: 'none' }}>
                <Bracket
                    color="rgba(213,145,0,0.4)"
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
                        fontSize: 'clamp(36px,5vw,60px)',
                        letterSpacing: '.04em',
                        color: 'rgba(255,255,255,0.95)',
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
                        color: 'rgba(255,255,255,0.35)',
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
                            <span
                                style={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: '50%',
                                    background: 'oklch(0.623 0.214 259.815)',
                                    boxShadow: '0 0 8px oklch(0.623 0.214 259.815)',
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
                                background: 'rgba(99,102,241,0.12)',
                                border: '1px solid rgba(99,102,241,0.3)',
                                backdropFilter: 'blur(12px)',
                                boxShadow: '0 1px 0 rgba(255,255,255,0.08) inset',
                                fontFamily: 'var(--font-barlow-condensed)',
                                fontSize: 11,
                                fontWeight: 700,
                                letterSpacing: '.1em',
                                textTransform: 'uppercase',
                                color: 'oklch(0.707 0.165 254.624)'
                            }}>
                            <span
                                style={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: '50%',
                                    background: 'oklch(0.623 0.214 259.815)',
                                    display: 'inline-block'
                                }}
                            />
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
                                style={{ background: 'rgba(99,102,241,0.06)' }}>
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
                            background: 'oklch(0.546 0.245 262.881)',
                            filter: 'blur(80px)',
                            opacity: 0.18,
                            pointerEvents: 'none'
                        }}
                    />
                    {/* card dot grid */}
                    <div
                        aria-hidden="true"
                        style={{ position: 'absolute', bottom: 0, right: 0, pointerEvents: 'none', opacity: 0.6 }}>
                        <DotGrid
                            id="wcu-cta-dots"
                            color="oklch(0.623 0.214 259.815)"
                            opacity={0.14}
                        />
                    </div>
                    {/* card corner brackets */}
                    <div
                        aria-hidden="true"
                        style={{ position: 'absolute', top: 14, left: 14, pointerEvents: 'none' }}>
                        <Bracket color="rgba(99,102,241,0.45)" />
                    </div>
                    <div
                        aria-hidden="true"
                        style={{ position: 'absolute', bottom: 14, right: 14, pointerEvents: 'none' }}>
                        <Bracket
                            color="rgba(213,145,0,0.4)"
                            rotate={180}
                        />
                    </div>

                    <div style={{ position: 'relative', zIndex: 2 }}>
                        <h3
                            style={{
                                fontFamily: 'var(--font-bebas)',
                                fontSize: 'clamp(24px,3.5vw,34px)',
                                letterSpacing: '.04em',
                                color: 'rgba(255,255,255,0.95)',
                                marginBottom: 12,
                                lineHeight: 1.1
                            }}>
                            {cardTitle}
                        </h3>
                        <p
                            style={{
                                fontFamily: 'var(--font-barlow)',
                                fontSize: 15,
                                color: 'rgba(255,255,255,0.38)',
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
