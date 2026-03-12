'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { processData } from '@/constants/process'
import { IconArrowRight, IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

// ─── Graphic helpers (same as Services) ───────────────────────────────────────

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
                opacity="0.55"
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

// accent alternates blue / amber per step
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
        <section style={{ background: 'var(--black)', color: 'var(--white)', padding: '80px 20px' }}>
            {/* ── Scoped styles ── */}
            <style>{`
                /* layout */
                .pr-row {
                    display: flex;
                    flex-direction: row;
                    gap: 24px;
                    align-items: stretch;
                    flex-wrap: wrap;
                    max-width: 1152px;
                    margin: 0 auto;
                }
                /* main card */
                .pr-main {
                    flex: 1 1 340px;
                    background: var(--bg-2);
                    border: 1px solid var(--border);
                    border-radius: 20px;
                    padding: 36px 32px;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    min-height: 520px;
                    transition: border-color 0.3s;
                }
                /* sidebar */
                .pr-sidebar {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                    width: 268px;
                    flex-shrink: 0;
                }
                @media (max-width: 860px) {
                    .pr-row { flex-direction: column; }
                    .pr-sidebar { width: 100%; flex-direction: row; flex-wrap: wrap; }
                    .pr-sidebar-btn { flex: 0 0 auto; }
                }
                /* sidebar button */
                .pr-sidebar-btn {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 12px 14px;
                    border-radius: 12px;
                    border: 1px solid transparent;
                    background: transparent;
                    cursor: pointer;
                    text-align: left;
                    transition: background 0.18s, border-color 0.18s;
                    width: 100%;
                }
                .pr-sidebar-btn:hover { background: var(--bg-card); border-color: var(--border); }
                .pr-active-blue  { background: oklch(0.623 0.214 259.815 / 0.10) !important; border-color: oklch(0.623 0.214 259.815 / 0.28) !important; }
                .pr-active-amber { background: oklch(0.795 0.184 86.047 / 0.10)  !important; border-color: oklch(0.795 0.184 86.047 / 0.28)  !important; }
                /* sidebar icon */
                .pr-s-icon {
                    width: 36px; height: 36px; border-radius: 10px; flex-shrink: 0;
                    background: var(--bg-mid);
                    display: flex; align-items: center; justify-content: center;
                    font-family: var(--font-bebas);
                    font-size: 15px; letter-spacing: 0.06em;
                    color: var(--grey-mid);
                    transition: background 0.18s, color 0.18s;
                }
                .pr-s-icon-blue  { background: oklch(0.623 0.214 259.815 / 0.15) !important; color: var(--blue-vivid) !important; }
                .pr-s-icon-amber { background: oklch(0.795 0.184 86.047 / 0.15)  !important; color: var(--amber)      !important; }
                /* sidebar text */
                .pr-s-title {
                    font-family: var(--font-barlow);
                    font-size: 13px; font-weight: 700;
                    color: var(--grey-light);
                    transition: color 0.18s;
                }
                .pr-active-blue  .pr-s-title,
                .pr-active-amber .pr-s-title { color: var(--white); }
                .pr-s-sub {
                    font-family: var(--font-barlow);
                    font-size: 11px; color: var(--grey-mid);
                }
                /* CTA */
                .pr-cta {
                    display: inline-flex; align-items: center; gap: 8px;
                    padding: 11px 24px; border-radius: 10px;
                    font-family: var(--font-barlow-condensed);
                    font-size: 14px; font-weight: 700; letter-spacing: 0.06em;
                    text-transform: uppercase; cursor: pointer;
                    transition: opacity 0.2s, transform 0.2s;
                }
                .pr-cta:hover { opacity: 0.82; transform: translateX(3px); }
                .pr-cta-blue  { background: oklch(0.623 0.214 259.815 / 0.14); border: 1px solid oklch(0.623 0.214 259.815 / 0.28); color: var(--blue-vivid); }
                .pr-cta-amber { background: oklch(0.795 0.184 86.047 / 0.14);  border: 1px solid oklch(0.795 0.184 86.047 / 0.28);  color: var(--amber); }
                /* ctrl */
                .pr-ctrl {
                    width: 36px; height: 36px; border-radius: 50%;
                    border: 1px solid var(--border); background: var(--bg-2);
                    color: var(--grey-mid); display: flex; align-items: center;
                    justify-content: center; cursor: pointer;
                    transition: border-color 0.2s, color 0.2s, background 0.2s;
                }
                .pr-ctrl:hover { border-color: rgba(255,255,255,0.18); color: var(--white); background: var(--bg-mid); }
                /* image grid */
                .pr-img-grid {
                    position: relative;
                    width: 100%;
                    height: 220px;
                    border-radius: 14px;
                    overflow: hidden;
                    background: var(--bg-mid);
                }
                .pr-img-grid img {
                    width: 100%; height: 100%; object-fit: cover;
                    border-radius: 14px;
                    transition: opacity 0.4s;
                }
                .pr-img-secondary {
                    position: absolute;
                    bottom: -10px; right: -10px;
                    width: 52%;
                    aspect-ratio: 4/3;
                    border-radius: 10px;
                    overflow: hidden;
                    border: 2px solid var(--bg-2);
                    box-shadow: 0 8px 32px rgba(0,0,0,0.5);
                }
                .pr-img-secondary img { width: 100%; height: 100%; object-fit: cover; }
            `}</style>

            {/* ── Header ── */}
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
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
                        color: 'var(--white)',
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
                        color: 'var(--grey-mid)',
                        maxWidth: 540,
                        margin: '0 auto',
                        lineHeight: 1.75
                    }}>
                    {description}
                </p>
            </div>

            {/* ── Main row ── */}
            <div className="pr-row">
                {/* ── Main card ── */}
                <div
                    className="pr-main"
                    style={{ borderColor: col.isBlue ? 'oklch(0.623 0.214 259.815 / 0.2)' : 'oklch(0.795 0.184 86.047 / 0.2)' }}>
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
                            opacity={0.14}
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
                            opacity: 0.09,
                            pointerEvents: 'none'
                        }}
                    />

                    {/* Corner brackets */}
                    <div style={{ position: 'absolute', top: 20, left: 20 }}>
                        <CornerBracket color={col.accent} />
                    </div>
                    <div style={{ position: 'absolute', bottom: 20, right: 20, transform: 'rotate(180deg)' }}>
                        <CornerBracket color={col.accent} />
                    </div>

                    {/* ── Content ── */}
                    <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', gap: 0 }}>
                        {/* Top meta row */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
                            {/* Step pill */}
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
                                    background: col.accentBg,
                                    border: `1px solid ${col.isBlue ? 'oklch(0.623 0.214 259.815 / 0.25)' : 'oklch(0.795 0.184 86.047 / 0.25)'}`
                                }}>
                                {step.name}
                            </span>
                            {/* Index */}
                            <span
                                style={{
                                    fontFamily: 'var(--font-bebas)',
                                    fontSize: 15,
                                    letterSpacing: '0.12em',
                                    color: col.accent,
                                    opacity: 0.6
                                }}>
                                {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                            </span>
                        </div>

                        {/* Title */}
                        <h3
                            style={{
                                fontFamily: 'var(--font-bebas)',
                                fontSize: 'clamp(26px, 3.2vw, 38px)',
                                letterSpacing: '0.02em',
                                color: 'var(--white)',
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
                                color: 'var(--grey-mid)',
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
                                    background: `linear-gradient(to top, ${col.isBlue ? 'oklch(0.623 0.214 259.815 / 0.18)' : 'oklch(0.795 0.184 86.047 / 0.18)'} 0%, transparent 60%)`,
                                    pointerEvents: 'none'
                                }}
                            />
                            {/* Accent border glow on image */}
                            <div
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    borderRadius: 14,
                                    boxShadow: `inset 0 0 0 1px ${col.isBlue ? 'oklch(0.623 0.214 259.815 / 0.2)' : 'oklch(0.795 0.184 86.047 / 0.2)'}`,
                                    pointerEvents: 'none'
                                }}
                            />
                            {/* Secondary image pip (only when 2 images exist) */}
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
                            <div style={{ height: 1, flex: 1, background: 'var(--border)' }} />
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
                                            color: 'var(--grey-mid)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em',
                                            marginBottom: 4
                                        }}>
                                        {s.label}
                                    </div>
                                    <div style={{ fontFamily: 'var(--font-bebas)', fontSize: 18, color: 'var(--white)', letterSpacing: '0.04em' }}>
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
                    {/* Header */}
                    <div
                        style={{
                            fontFamily: 'var(--font-barlow-condensed)',
                            fontSize: 11,
                            fontWeight: 600,
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            color: 'var(--grey-mid)',
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
                                className={`pr-sidebar-btn ${isActive ? (c.isBlue ? 'pr-active-blue' : 'pr-active-amber') : ''}`}>
                                {/* Step number badge */}
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
                                        style={{
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        }}>
                                        {s.title}
                                    </div>
                                </div>

                                {/* Active dot */}
                                {isActive && (
                                    <div
                                        style={{
                                            width: 5,
                                            height: 5,
                                            borderRadius: '50%',
                                            background: c.accent,
                                            flexShrink: 0
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
                                color: 'var(--grey-mid)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                marginBottom: 8
                            }}>
                            <span>Progress</span>
                            <span style={{ color: col.accent }}>{Math.round(((active + 1) / total) * 100)}%</span>
                        </div>
                        {/* Track */}
                        <div style={{ height: 3, background: 'var(--border)', borderRadius: 3, overflow: 'hidden' }}>
                            <div
                                style={{
                                    height: '100%',
                                    width: `${((active + 1) / total) * 100}%`,
                                    background: col.isBlue
                                        ? 'linear-gradient(90deg, var(--blue-deep), var(--blue-soft))'
                                        : 'linear-gradient(90deg, var(--amber), var(--amber-lt))',
                                    borderRadius: 3,
                                    transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1)'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Slider controls ── */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginTop: 36 }}>
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
                                background: active === i ? col.accent : 'var(--border)',
                                transition: 'width 0.3s, background 0.3s'
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
