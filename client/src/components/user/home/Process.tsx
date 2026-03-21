'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { processData } from '@/constants/process'
import { IconArrowRight, IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

// ─── Graphic helpers ──────────────────────────────────────────────────────────

function DotGrid({ color = 'var(--blue-vivid)', opacity = 0.16 }: { color?: string; opacity?: number }) {
    return (
        <svg
            width="180"
            height="180"
            viewBox="0 0 180 180"
            fill="none"
            style={{ position: 'absolute', pointerEvents: 'none' }}>
            <defs>
                <pattern
                    id="proc-dots"
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
                width="180"
                height="180"
                fill="url(#proc-dots)"
            />
        </svg>
    )
}

function CornerBracket({ color = 'var(--blue-vivid)', size = 28 }: { color?: string; size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 28 28"
            fill="none"
            style={{ pointerEvents: 'none', flexShrink: 0 }}>
            <path
                d="M4 24 L4 4 L24 4"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.45"
            />
        </svg>
    )
}

// ─── Step image map ───────────────────────────────────────────────────────────

type StepId = '1' | '2' | '3' | '4' | '5'

const stepImages: Record<StepId, string[]> = {
    '1': [processData.images.step1img1, processData.images.step1img2],
    '2': [processData.images.step2img1, processData.images.step2img2],
    '3': [processData.images.step3img],
    '4': [processData.images.step4img],
    '5': [processData.images.step5img]
}

const stepAccent: Record<StepId, { accent: string; accentBg: string; isBlue: boolean }> = {
    '1': { accent: 'var(--blue-vivid)', accentBg: 'oklch(0.623 0.214 259.815 / 0.10)', isBlue: true },
    '2': { accent: 'var(--amber)', accentBg: 'oklch(0.795 0.184 86.047 / 0.10)', isBlue: false },
    '3': { accent: 'var(--blue-vivid)', accentBg: 'oklch(0.623 0.214 259.815 / 0.10)', isBlue: true },
    '4': { accent: 'var(--amber)', accentBg: 'oklch(0.795 0.184 86.047 / 0.10)', isBlue: false },
    '5': { accent: 'var(--blue-vivid)', accentBg: 'oklch(0.623 0.214 259.815 / 0.10)', isBlue: true }
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Process() {
    const { steps, badgeTitle, heading, description } = processData
    const [active, setActive] = useState(0)

    const step = steps[active]
    const id = step.id as StepId
    const imgs = stepImages[id]
    const col = stepAccent[id]
    const total = steps.length

    const prev = () => setActive((i) => (i - 1 + total) % total)
    const next = () => setActive((i) => (i + 1) % total)

    return (
        <section style={{ background: 'transparent', color: 'var(--white)', padding: '80px 20px', position: 'relative', overflow: 'hidden' }}>
            <style>{`
                /* ══ GLASS SYSTEM ══════════════════════════════════════════ */
                .pr-main {
                    flex: 1 1 340px;
                    /* glass layers */
                    background: linear-gradient(
                        135deg,
                        rgba(255,255,255,0.055) 0%,
                        rgba(255,255,255,0.018) 50%,
                        rgba(99,102,241,0.04) 100%
                    );
                    backdrop-filter: blur(24px) saturate(1.4);
                    -webkit-backdrop-filter: blur(24px) saturate(1.4);
                    border: 1px solid rgba(255,255,255,0.09);
                    box-shadow:
                        0 0 0 1px rgba(255,255,255,0.04) inset,
                        0 1px 0 rgba(255,255,255,0.12) inset,
                        0 24px 64px rgba(0,0,0,0.45),
                        0 4px 16px rgba(0,0,0,0.3);
                    border-radius: 20px;
                    padding: 36px 32px;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    min-height: 520px;
                    transition: border-color 0.3s, box-shadow 0.3s;
                    isolation: isolate;
                }
                /* top shimmer */
                .pr-main::before {
                    content: '';
                    position: absolute; top: 0; left: 10%; right: 10%; height: 1px;
                    background: linear-gradient(90deg,transparent,rgba(255,255,255,0.18) 40%,rgba(255,255,255,0.18) 60%,transparent);
                    pointer-events: none; z-index: 10;
                }
                /* noise grain */
                .pr-main::after {
                    content: '';
                    position: absolute; inset: 0; border-radius: inherit;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
                    background-size: 200px 200px; pointer-events: none; opacity: 0.55; z-index: 1;
                }
                .pr-main:hover {
                    box-shadow:
                        0 0 0 1px rgba(255,255,255,0.06) inset,
                        0 1px 0 rgba(255,255,255,0.16) inset,
                        0 32px 80px rgba(0,0,0,0.52),
                        0 0 36px rgba(99,102,241,0.1),
                        0 8px 24px rgba(0,0,0,0.35);
                }

                /* ── Layout ── */
                .pr-row {
                    display: flex; flex-direction: row; gap: 24px;
                    align-items: stretch; flex-wrap: wrap;
                    max-width: 1152px; margin: 0 auto;
                }

                /* ── Sidebar ── */
                .pr-sidebar { display: flex; flex-direction: column; gap: 6px; width: 268px; flex-shrink: 0; }
                @media (max-width: 860px) {
                    .pr-row { flex-direction: column; }
                    .pr-sidebar { width: 100%; flex-direction: row; flex-wrap: wrap; }
                    .pr-sidebar-btn { flex: 0 0 auto; }
                }

                /* sidebar button — glass */
                .pr-sidebar-btn {
                    display: flex; align-items: center; gap: 12px;
                    padding: 12px 14px; border-radius: 12px;
                    border: 1px solid rgba(255,255,255,0.06);
                    background: rgba(255,255,255,0.03);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    box-shadow: 0 1px 0 rgba(255,255,255,0.05) inset;
                    cursor: pointer; text-align: left;
                    transition: background 0.18s, border-color 0.18s, box-shadow 0.18s;
                    width: 100%;
                }
                .pr-sidebar-btn:hover {
                    background: rgba(255,255,255,0.07);
                    border-color: rgba(255,255,255,0.12);
                }
                /* active glass states */
                .pr-active-blue {
                    background: linear-gradient(135deg,rgba(99,102,241,0.18),rgba(99,102,241,0.08)) !important;
                    border-color: rgba(99,102,241,0.38) !important;
                    box-shadow: 0 1px 0 rgba(255,255,255,0.1) inset, 0 0 16px rgba(99,102,241,0.1) !important;
                }
                .pr-active-amber {
                    background: linear-gradient(135deg,rgba(213,145,0,0.18),rgba(213,145,0,0.07)) !important;
                    border-color: rgba(213,145,0,0.35) !important;
                    box-shadow: 0 1px 0 rgba(255,255,255,0.08) inset !important;
                }

                /* sidebar icon — glass */
                .pr-s-icon {
                    width: 36px; height: 36px; border-radius: 10px; flex-shrink: 0;
                    background: rgba(255,255,255,0.06);
                    border: 1px solid rgba(255,255,255,0.08);
                    backdrop-filter: blur(8px);
                    box-shadow: 0 1px 0 rgba(255,255,255,0.07) inset;
                    display: flex; align-items: center; justify-content: center;
                    font-family: var(--font-bebas); font-size: 15px; letter-spacing: 0.06em;
                    color: rgba(255,255,255,0.3);
                    transition: background 0.18s, color 0.18s, border-color 0.18s;
                }
                .pr-s-icon-blue  { background: rgba(99,102,241,0.18) !important; border-color: rgba(99,102,241,0.35) !important; color: oklch(0.707 0.165 254.624) !important; }
                .pr-s-icon-amber { background: rgba(213,145,0,0.18) !important;  border-color: rgba(213,145,0,0.32) !important;  color: var(--amber) !important; }

                .pr-s-title { font-family: var(--font-barlow); font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.5); transition: color 0.18s; }
                .pr-active-blue  .pr-s-title,
                .pr-active-amber .pr-s-title { color: rgba(255,255,255,0.92); }
                .pr-s-sub { font-family: var(--font-barlow); font-size: 11px; color: rgba(255,255,255,0.25); }

                /* CTA — glass */
                .pr-cta {
                    display: inline-flex; align-items: center; gap: 8px;
                    padding: 11px 24px; border-radius: 10px;
                    font-family: var(--font-barlow-condensed);
                    font-size: 14px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
                    cursor: pointer;
                    backdrop-filter: blur(8px);
                    box-shadow: 0 1px 0 rgba(255,255,255,0.1) inset;
                    transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
                }
                .pr-cta:hover { opacity: 0.88; transform: translateX(3px); }
                .pr-cta-blue  {
                    background: linear-gradient(135deg, rgba(99,102,241,0.22), rgba(99,102,241,0.1));
                    border: 1px solid rgba(99,102,241,0.38);
                    color: oklch(0.707 0.165 254.624);
                    box-shadow: 0 1px 0 rgba(255,255,255,0.1) inset, 0 0 20px rgba(99,102,241,0.12);
                }
                .pr-cta-amber {
                    background: linear-gradient(135deg, rgba(213,145,0,0.22), rgba(213,145,0,0.1));
                    border: 1px solid rgba(213,145,0,0.35);
                    color: var(--amber);
                    box-shadow: 0 1px 0 rgba(255,255,255,0.08) inset;
                }

                /* slider ctrl — glass */
                .pr-ctrl {
                    width: 36px; height: 36px; border-radius: 50%;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.09);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    box-shadow: 0 1px 0 rgba(255,255,255,0.08) inset;
                    color: rgba(255,255,255,0.35);
                    display: flex; align-items: center; justify-content: center; cursor: pointer;
                    transition: border-color 0.2s, color 0.2s, background 0.2s;
                }
                .pr-ctrl:hover {
                    border-color: rgba(99,102,241,0.4);
                    color: rgba(255,255,255,0.85);
                    background: rgba(99,102,241,0.12);
                }

                /* image grid — glass frame */
                .pr-img-grid {
                    position: relative; width: 100%; height: 220px;
                    border-radius: 14px; overflow: hidden;
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.08);
                    box-shadow: 0 1px 0 rgba(255,255,255,0.07) inset, 0 12px 32px rgba(0,0,0,0.4);
                }
                .pr-img-grid img { width: 100%; height: 100%; object-fit: cover; border-radius: 14px; transition: opacity 0.4s; }
                .pr-img-secondary {
                    position: absolute; bottom: -10px; right: -10px; width: 52%;
                    aspect-ratio: 4/3; border-radius: 10px; overflow: hidden;
                    border: 2px solid rgba(255,255,255,0.1);
                    box-shadow: 0 8px 32px rgba(0,0,0,0.55), 0 1px 0 rgba(255,255,255,0.08) inset;
                    backdrop-filter: blur(4px);
                }
                .pr-img-secondary img { width: 100%; height: 100%; object-fit: cover; }
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
                    bottom: -120,
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
                    top: '50%',
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

            {/* ── Header ── */}
            <div style={{ textAlign: 'center', marginBottom: 52, position: 'relative', zIndex: 1 }}>
                <Badge
                    variant="outline"
                    className="mb-5 text-white text-xl">
                    {badgeTitle}
                </Badge>
                <h2
                    style={{
                        fontFamily: 'var(--font-bebas)',
                        fontSize: 'clamp(36px, 5vw, 60px)',
                        letterSpacing: '0.04em',
                        color: 'rgba(255,255,255,0.95)',
                        marginBottom: 14,
                        marginTop: 16,
                        lineHeight: 1
                    }}>
                    {heading}
                </h2>
                <p
                    style={{
                        fontFamily: 'var(--font-barlow)',
                        fontSize: 16,
                        color: 'rgba(255,255,255,0.35)',
                        maxWidth: 540,
                        margin: '0 auto',
                        lineHeight: 1.75
                    }}>
                    {description}
                </p>
            </div>

            {/* ── Main row ── */}
            <div
                className="pr-row"
                style={{ position: 'relative', zIndex: 1 }}>
                {/* ── Main card (glass) ── */}
                <div
                    className="pr-main"
                    style={{ borderColor: col.isBlue ? 'rgba(99,102,241,0.28)' : 'rgba(213,145,0,0.25)' }}>
                    {/* Ghost step number watermark */}
                    <span
                        style={{
                            position: 'absolute',
                            bottom: -10,
                            right: 20,
                            fontFamily: 'var(--font-bebas)',
                            fontSize: 200,
                            lineHeight: 1,
                            letterSpacing: '-0.04em',
                            color: col.accent,
                            opacity: 0.04,
                            pointerEvents: 'none',
                            userSelect: 'none'
                        }}>
                        {String(active + 1).padStart(2, '0')}
                    </span>

                    {/* Dot grid — top right */}
                    <div style={{ position: 'absolute', top: 0, right: 0, pointerEvents: 'none' }}>
                        <DotGrid
                            color={col.accent}
                            opacity={0.12}
                        />
                    </div>

                    {/* Glow orb */}
                    <div
                        style={{
                            position: 'absolute',
                            top: -80,
                            left: -60,
                            width: 300,
                            height: 300,
                            borderRadius: '50%',
                            background: col.accent,
                            filter: 'blur(100px)',
                            opacity: 0.12,
                            pointerEvents: 'none'
                        }}
                    />

                    {/* Corner brackets */}
                    <div style={{ position: 'absolute', top: 20, left: 20 }}>
                        <CornerBracket color={col.isBlue ? 'rgba(99,102,241,0.5)' : 'rgba(213,145,0,0.45)'} />
                    </div>
                    <div style={{ position: 'absolute', bottom: 20, right: 20, transform: 'rotate(180deg)' }}>
                        <CornerBracket color={col.isBlue ? 'rgba(99,102,241,0.5)' : 'rgba(213,145,0,0.45)'} />
                    </div>

                    {/* ── Content ── */}
                    <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', gap: 0, zIndex: 2 }}>
                        {/* Top meta row */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
                            {/* Step pill — glass */}
                            <span
                                style={{
                                    padding: '4px 13px',
                                    borderRadius: 20,
                                    fontFamily: 'var(--font-barlow-condensed)',
                                    fontSize: 11,
                                    fontWeight: 700,
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    color: col.accent,
                                    background: col.isBlue ? 'rgba(99,102,241,0.14)' : 'rgba(213,145,0,0.14)',
                                    border: `1px solid ${col.isBlue ? 'rgba(99,102,241,0.32)' : 'rgba(213,145,0,0.3)'}`,
                                    backdropFilter: 'blur(8px)',
                                    boxShadow: '0 1px 0 rgba(255,255,255,0.08) inset'
                                }}>
                                {step.name}
                            </span>
                            {/* Index */}
                            <span style={{ fontFamily: 'var(--font-bebas)', fontSize: 15, letterSpacing: '0.12em', color: col.accent, opacity: 0.6 }}>
                                {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                            </span>
                        </div>

                        {/* Title */}
                        <h3
                            style={{
                                fontFamily: 'var(--font-bebas)',
                                fontSize: 'clamp(26px, 3.2vw, 38px)',
                                letterSpacing: '0.02em',
                                color: 'rgba(255,255,255,0.95)',
                                lineHeight: 1.05,
                                marginBottom: 14
                            }}>
                            {step.title}
                        </h3>

                        {/* Description */}
                        <p
                            style={{
                                fontFamily: 'var(--font-barlow)',
                                fontSize: 15,
                                color: 'rgba(255,255,255,0.38)',
                                lineHeight: 1.75,
                                marginBottom: 28
                            }}>
                            {step.description}
                        </p>

                        {/* ── Image(s) ── */}
                        <div
                            className="pr-img-grid"
                            style={{ marginBottom: 28 }}>
                            <img
                                src={imgs[0]}
                                alt={processData.images.alt}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                            {/* Overlay gradient */}
                            <div
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: `linear-gradient(to top, ${col.isBlue ? 'rgba(99,102,241,0.25)' : 'rgba(180,120,0,0.2)'} 0%, transparent 60%)`,
                                    pointerEvents: 'none'
                                }}
                            />
                            {/* Accent border glow on image */}
                            <div
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    borderRadius: 14,
                                    boxShadow: `inset 0 0 0 1px ${col.isBlue ? 'rgba(99,102,241,0.28)' : 'rgba(213,145,0,0.25)'}`,
                                    pointerEvents: 'none'
                                }}
                            />
                            {imgs[1] && (
                                <div className="pr-img-secondary">
                                    <img
                                        src={imgs[1]}
                                        alt={processData.images.alt}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                    />
                                </div>
                            )}
                        </div>

                        {/* Divider */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                            <div style={{ height: 1, flex: 1, background: 'rgba(255,255,255,0.07)' }} />
                            <span style={{ width: 6, height: 6, borderRadius: '50%', background: col.accent, opacity: 0.5 }} />
                            <div style={{ height: 1, width: 32, background: col.accent, opacity: 0.3 }} />
                        </div>

                        {/* Inline stats */}
                        <div style={{ display: 'flex', gap: 28, marginBottom: 28 }}>
                            {[
                                { label: 'Phase', value: step.name },
                                {
                                    label: 'Duration',
                                    value:
                                        active === 0
                                            ? '1–2 Days'
                                            : active === 1
                                              ? '3–5 Days'
                                              : active === 2
                                                ? '1–3 Weeks'
                                                : active === 3
                                                  ? '3–5 Days'
                                                  : 'Ongoing'
                                },
                                { label: 'Milestone', value: active === 4 ? 'Go-Live' : 'Approval' }
                            ].map((s, i) => (
                                <div key={i}>
                                    <div
                                        style={{
                                            fontFamily: 'var(--font-barlow-condensed)',
                                            fontSize: 10,
                                            color: 'rgba(255,255,255,0.28)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em',
                                            marginBottom: 4
                                        }}>
                                        {s.label}
                                    </div>
                                    <div
                                        style={{
                                            fontFamily: 'var(--font-bebas)',
                                            fontSize: 18,
                                            color: 'rgba(255,255,255,0.92)',
                                            letterSpacing: '0.04em'
                                        }}>
                                        {s.value}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <button
                            className={`pr-cta ${col.isBlue ? 'pr-cta-blue' : 'pr-cta-amber'}`}
                            style={{ alignSelf: 'flex-start' }}>
                            {active === total - 1 ? 'Start Your Project' : 'Next Step'}
                            <IconArrowRight size={15} />
                        </button>
                    </div>
                </div>

                {/* ── Sidebar ── */}
                <div className="pr-sidebar">
                    <div
                        style={{
                            fontFamily: 'var(--font-barlow-condensed)',
                            fontSize: 11,
                            fontWeight: 600,
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            color: 'rgba(255,255,255,0.25)',
                            padding: '0 4px',
                            marginBottom: 8
                        }}>
                        All Steps
                    </div>

                    {steps.map((s, i) => {
                        const isActive = active === i
                        const c = stepAccent[s.id as StepId]
                        return (
                            <button
                                key={s.id}
                                onClick={() => setActive(i)}
                                onMouseEnter={() => setActive(i)}
                                className={`pr-sidebar-btn ${isActive ? (c.isBlue ? 'pr-active-blue' : 'pr-active-amber') : ''}`}>
                                <div className={`pr-s-icon ${isActive ? (c.isBlue ? 'pr-s-icon-blue' : 'pr-s-icon-amber') : ''}`}>
                                    {String(i + 1).padStart(2, '0')}
                                </div>
                                <div style={{ overflow: 'hidden', flex: 1 }}>
                                    <div
                                        className="pr-s-title"
                                        style={{ marginBottom: 2 }}>
                                        {s.name}
                                    </div>
                                    <div
                                        className="pr-s-sub"
                                        style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        {s.title}
                                    </div>
                                </div>
                                {isActive && (
                                    <div
                                        style={{
                                            width: 5,
                                            height: 5,
                                            borderRadius: '50%',
                                            background: c.accent,
                                            flexShrink: 0,
                                            boxShadow: `0 0 6px ${c.accent}`
                                        }}
                                    />
                                )}
                            </button>
                        )
                    })}

                    {/* Progress bar */}
                    <div style={{ marginTop: 16, padding: '0 4px' }}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                fontFamily: 'var(--font-barlow-condensed)',
                                fontSize: 10,
                                color: 'rgba(255,255,255,0.25)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                marginBottom: 8
                            }}>
                            <span>Progress</span>
                            <span style={{ color: col.accent }}>{Math.round(((active + 1) / total) * 100)}%</span>
                        </div>
                        {/* Track — glass */}
                        <div
                            style={{
                                height: 4,
                                background: 'rgba(255,255,255,0.07)',
                                borderRadius: 4,
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.06)',
                                boxShadow: '0 1px 0 rgba(255,255,255,0.04) inset'
                            }}>
                            <div
                                style={{
                                    height: '100%',
                                    width: `${((active + 1) / total) * 100}%`,
                                    background: col.isBlue
                                        ? 'linear-gradient(90deg, oklch(0.546 0.245 262.881), oklch(0.707 0.165 254.624))'
                                        : 'linear-gradient(90deg, var(--amber), var(--amber-lt))',
                                    borderRadius: 4,
                                    boxShadow: col.isBlue ? '0 0 8px rgba(99,102,241,0.5)' : '0 0 8px rgba(213,145,0,0.4)',
                                    transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1)'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Slider controls ── */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginTop: 36, position: 'relative', zIndex: 1 }}>
                <button
                    className="pr-ctrl"
                    onClick={prev}>
                    <IconChevronLeft size={16} />
                </button>
                <div style={{ display: 'flex', gap: 6 }}>
                    {steps.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            style={{
                                height: 6,
                                width: active === i ? 28 : 6,
                                borderRadius: 3,
                                border: 'none',
                                padding: 0,
                                cursor: 'pointer',
                                background: active === i ? col.accent : 'rgba(255,255,255,0.12)',
                                boxShadow: active === i ? `0 0 8px ${col.accent}` : 'none',
                                transition: 'width 0.3s, background 0.3s, box-shadow 0.3s'
                            }}
                        />
                    ))}
                </div>
                <button
                    className="pr-ctrl"
                    onClick={next}>
                    <IconChevronRight size={16} />
                </button>
            </div>
        </section>
    )
}
