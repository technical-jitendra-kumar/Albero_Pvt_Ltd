'use client'

import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { pricingData } from '@/constants/pricing'
import type { PricingService } from '@/constants/pricing'
import { Check, ChevronRight } from 'lucide-react'
import { NavLink } from '../common/NavLink'

// ─── Types ────────────────────────────────────────────────────────────────────

type Currency = 'USD' | 'EUR' | 'INR'
type Category = 'All' | 'Development' | 'Design' | 'Marketing' | 'Infrastructure' | 'Support'

// ─── Conversion ───────────────────────────────────────────────────────────────

const RATES: Record<Currency, number> = { USD: 1, EUR: 0.92, INR: 83.5 }
const SYMBOLS: Record<Currency, string> = { USD: '$', EUR: '€', INR: '₹' }

function formatPrice(usd: number, currency: Currency): string {
    const val = Math.round(usd * RATES[currency])
    return SYMBOLS[currency] + val.toLocaleString()
}

// ─── Category accent colours (palette-only) ───────────────────────────────────

const CAT_STYLE: Record<string, { accent: string; accentBg: string; border: string }> = {
    Development: { accent: 'var(--blue-vivid)', accentBg: 'oklch(from var(--blue-vivid) l c h / 0.10)', border: 'var(--border-blu)' },
    Design: { accent: 'var(--amber)', accentBg: 'oklch(from var(--amber) l c h / 0.10)', border: 'oklch(from var(--amber) l c h / 0.28)' },
    Marketing: { accent: 'var(--amber-lt)', accentBg: 'oklch(from var(--amber) l c h / 0.08)', border: 'oklch(from var(--amber) l c h / 0.22)' },
    Infrastructure: { accent: 'var(--blue-soft)', accentBg: 'oklch(from var(--blue-vivid) l c h / 0.08)', border: 'var(--border-blu)' },
    Support: { accent: 'var(--grey-light)', accentBg: 'oklch(0.87 0 0 / 0.06)', border: 'oklch(0.87 0 0 / 0.15)' }
}

// ─── Decorations ──────────────────────────────────────────────────────────────

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

const CATEGORIES: Category[] = ['All', 'Development', 'Design', 'Marketing', 'Infrastructure', 'Support']

// ─── Component ────────────────────────────────────────────────────────────────

export default function Pricing() {
    const [currency, setCurrency] = useState<Currency>('USD')
    const [activeTab, setActiveTab] = useState<'plans' | 'services'>('plans')
    const [activeCat, setActiveCat] = useState<Category>('All')

    const { badgeTitle, heading, description, plans, allServices } = pricingData

    const filtered: PricingService[] = activeCat === 'All' ? allServices : allServices.filter((s) => s.category === activeCat)

    return (
        <section
            id="pricing"
            style={{ background: 'var(--black)', color: 'var(--white)', padding: '80px 20px', position: 'relative', overflow: 'hidden' }}>
            <style>{`
                /* ── Currency / tab switchers ── */
                .prc-track {
                    display: inline-flex;
                    gap: 3px; padding: 4px;
                    border-radius: 12px;
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                }
                .prc-btn {
                    padding: 7px 18px;
                    border-radius: 8px;
                    border: 1px solid transparent;
                    background: transparent;
                    font-family: var(--font-barlow-condensed);
                    font-size: 12px; font-weight: 700;
                    letter-spacing: .1em; text-transform: uppercase;
                    color: var(--grey-mid); cursor: pointer;
                    transition: background .18s, color .18s, border-color .18s;
                    white-space: nowrap;
                }
                .prc-btn:hover { color: var(--grey-light); }
                .prc-btn-active {
                    background: oklch(from var(--blue-vivid) l c h / 0.12) !important;
                    border-color: var(--border-blu) !important;
                    color: var(--white) !important;
                }

                /* ── Plans grid ── */
                .prc-plans-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 16px;
                    max-width: 1152px;
                    margin: 0 auto;
                }
                @media (max-width: 1100px) { .prc-plans-grid { grid-template-columns: repeat(2,1fr); } }
                @media (max-width: 580px)  { .prc-plans-grid { grid-template-columns: 1fr; } }

                /* ── Plan card ── */
                .prc-card {
                    background: var(--bg-2);
                    border: 1px solid var(--border);
                    border-radius: 20px;
                    padding: 28px 22px;
                    position: relative; overflow: hidden;
                    display: flex; flex-direction: column;
                    transition: border-color .22s, transform .22s;
                }
                .prc-card:hover { border-color: var(--border-blu); transform: translateY(-3px); }
                .prc-card-hot {
                    border-color: var(--border-blu) !important;
                    background: oklch(from var(--blue-vivid) l c h / 0.05) !important;
                }
                .prc-tag {
                    display: inline-block;
                    padding: 3px 10px; border-radius: 20px;
                    font-family: var(--font-barlow-condensed);
                    font-size: 10px; font-weight: 700;
                    letter-spacing: .1em; text-transform: uppercase;
                    color: var(--grey-mid);
                    background: var(--bg-mid); border: 1px solid var(--border);
                }
                .prc-tag-hot {
                    color: var(--blue-soft) !important;
                    background: oklch(from var(--blue-vivid) l c h / 0.10) !important;
                    border-color: var(--border-blu) !important;
                }
                .prc-plan-name {
                    font-family: var(--font-bebas);
                    font-size: 26px; letter-spacing: .04em;
                    color: var(--white); line-height: 1; margin-bottom: 6px;
                }
                .prc-plan-info {
                    font-family: var(--font-barlow);
                    font-size: 12px; color: var(--grey-mid);
                    line-height: 1.55; margin-bottom: 18px;
                }
                .prc-price-row {
                    display: flex; align-items: flex-end; gap: 3px; margin-bottom: 3px;
                }
                .prc-price-sym {
                    font-family: var(--font-barlow-condensed);
                    font-size: 16px; font-weight: 700;
                    color: var(--grey-mid); padding-bottom: 5px;
                }
                .prc-price-val {
                    font-family: var(--font-bebas);
                    font-size: 48px; letter-spacing: -.01em;
                    color: var(--white); line-height: 1;
                }
                .prc-price-note {
                    font-family: var(--font-barlow-condensed);
                    font-size: 10px; font-weight: 600;
                    letter-spacing: .08em; text-transform: uppercase;
                    color: var(--grey-dim); margin-bottom: 18px;
                }
                .prc-divider { height: 1px; background: var(--border); margin-bottom: 18px; }
                .prc-feat-list {
                    list-style: none; padding: 0; margin: 0 0 22px;
                    display: flex; flex-direction: column; gap: 9px; flex: 1;
                }
                .prc-feat-item {
                    display: flex; align-items: flex-start; gap: 9px;
                    font-family: var(--font-barlow); font-size: 12.5px;
                    color: var(--grey-light); line-height: 1.5;
                }
                .prc-feat-chk {
                    width: 17px; height: 17px; border-radius: 50%; flex-shrink: 0; margin-top: 1px;
                    background: rgba(34,197,94,0.1);
                    border: 1px solid rgba(34,197,94,0.25);
                    display: flex; align-items: center; justify-content: center;
                }

                /* plan cta */
                .prc-plan-btn {
                    display: flex; align-items: center; justify-content: center; gap: 7px;
                    width: 100%; padding: 12px 16px; border-radius: 10px;
                    font-family: var(--font-barlow-condensed);
                    font-size: 12px; font-weight: 700;
                    letter-spacing: .09em; text-transform: uppercase;
                    cursor: pointer; text-decoration: none;
                    transition: background .2s, transform .2s, box-shadow .2s;
                    white-space: nowrap;
                }
                .prc-plan-btn:hover { transform: translateY(-1px); }
                .prc-btn-outline   { background:transparent; border:1px solid var(--border); color:var(--grey-light); }
                .prc-btn-outline:hover { border-color:var(--border-blu); color:var(--white); }
                .prc-btn-default   { background:var(--white); border:1px solid var(--white); color:var(--black); }
                .prc-btn-default:hover { background:var(--grey-light); box-shadow:0 8px 24px oklch(from var(--blue-vivid) l c h / 0.25); }
                .prc-btn-secondary { background:oklch(from var(--blue-vivid) l c h / 0.12); border:1px solid var(--border-blu); color:var(--blue-soft); }
                .prc-btn-secondary:hover { background:oklch(from var(--blue-vivid) l c h / 0.2); }
                .prc-btn-destructive { background:oklch(from var(--amber) l c h / 0.12); border:1px solid oklch(from var(--amber) l c h / 0.3); color:var(--amber); }
                .prc-btn-destructive:hover { background:oklch(from var(--amber) l c h / 0.2); }

                /* ── Services section ── */
                .prc-cat-bar {
                    display: flex; flex-wrap: wrap; gap: 6px;
                    justify-content: center; margin-bottom: 32px;
                }
                .prc-cat-pill {
                    padding: 6px 16px; border-radius: 20px;
                    background: var(--bg-card); border: 1px solid var(--border);
                    font-family: var(--font-barlow-condensed);
                    font-size: 11px; font-weight: 700;
                    letter-spacing: .1em; text-transform: uppercase;
                    color: var(--grey-mid); cursor: pointer;
                    transition: background .18s, border-color .18s, color .18s;
                }
                .prc-cat-pill:hover { color: var(--grey-light); border-color: rgba(255,255,255,0.15); }
                .prc-cat-active {
                    background: oklch(from var(--blue-vivid) l c h / 0.12) !important;
                    border-color: var(--border-blu) !important;
                    color: var(--white) !important;
                }

                /* service card grid */
                .prc-svc-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 14px;
                    max-width: 1152px;
                    margin: 0 auto;
                }
                @media (max-width: 900px) { .prc-svc-grid { grid-template-columns: repeat(2,1fr); } }
                @media (max-width: 540px) { .prc-svc-grid { grid-template-columns: 1fr; } }

                /* service card */
                .prc-svc-card {
                    background: var(--bg-2);
                    border: 1px solid var(--border);
                    border-radius: 16px;
                    padding: 22px 20px;
                    position: relative; overflow: hidden;
                    display: flex; flex-direction: column; gap: 0;
                    transition: border-color .2s, transform .2s, background .2s;
                }
                .prc-svc-card:hover { transform: translateY(-2px); }

                .prc-svc-icon {
                    width: 42px; height: 42px; border-radius: 11px; flex-shrink: 0;
                    display: flex; align-items: center; justify-content: center;
                    margin-bottom: 14px;
                }
                .prc-svc-cat-badge {
                    position: absolute; top: 14px; right: 14px;
                    padding: 2px 9px; border-radius: 20px;
                    font-family: var(--font-barlow-condensed);
                    font-size: 9px; font-weight: 700;
                    letter-spacing: .09em; text-transform: uppercase;
                }
                .prc-svc-name {
                    font-family: var(--font-bebas);
                    font-size: 20px; letter-spacing: .03em;
                    color: var(--white); line-height: 1.1; margin-bottom: 7px;
                }
                .prc-svc-desc {
                    font-family: var(--font-barlow);
                    font-size: 12.5px; color: var(--grey-mid);
                    line-height: 1.6; margin-bottom: 18px; flex: 1;
                }
                .prc-svc-divider { height: 1px; background: var(--border); margin-bottom: 14px; }
                .prc-svc-price {
                    font-family: var(--font-bebas);
                    font-size: 18px; letter-spacing: .03em;
                }
                .prc-svc-freq {
                    font-family: var(--font-barlow-condensed);
                    font-size: 10px; font-weight: 600;
                    letter-spacing: .08em; text-transform: uppercase;
                    color: var(--grey-mid); margin-left: 5px;
                }

                /* ── Content fade ── */
                .prc-fade { transition: opacity .25s, transform .25s; }
                .prc-fading { opacity: 0; transform: translateY(8px); }
            `}</style>

            {/* ── BG decorations ── */}
            <div
                aria-hidden="true"
                style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
                <DotGrid
                    id="prc-tl"
                    color="var(--blue-vivid)"
                    opacity={0.12}
                />
            </div>
            <div
                aria-hidden="true"
                style={{ position: 'absolute', bottom: 0, right: 0, pointerEvents: 'none' }}>
                <DotGrid
                    id="prc-br"
                    color="var(--amber)"
                    opacity={0.11}
                />
            </div>
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    top: -160,
                    left: '30%',
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
            <div style={{ textAlign: 'center', marginBottom: 44, position: 'relative', zIndex: 1 }}>
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
                        color: 'var(--white)',
                        lineHeight: 1,
                        marginBottom: 14,
                        marginTop: 16
                    }}>
                    {heading}
                </h2>
                <p
                    style={{
                        fontFamily: 'var(--font-barlow)',
                        fontSize: 16,
                        color: 'var(--grey-mid)',
                        maxWidth: 540,
                        margin: '0 auto 28px',
                        lineHeight: 1.75
                    }}>
                    {description}
                </p>

                {/* Main tab switcher */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
                    <div className="prc-track">
                        {(['plans', 'services'] as const).map((t) => (
                            <button
                                key={t}
                                onClick={() => setActiveTab(t)}
                                onMouseEnter={() => setActiveTab(t)}
                                className={`prc-btn ${activeTab === t ? 'prc-btn-active' : ''}`}>
                                {t === 'plans' ? '📋  Project Plans' : '⚙️  All Services'}
                            </button>
                        ))}
                    </div>

                    {/* Currency switcher */}
                    <div className="prc-track">
                        {(['USD', 'EUR', 'INR'] as Currency[]).map((c) => (
                            <button
                                key={c}
                                onClick={() => setCurrency(c)}
                                className={`prc-btn ${currency === c ? 'prc-btn-active' : ''}`}>
                                {c}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* ══ TAB: Plans ══════════════════════════════════════════════ */}
            {activeTab === 'plans' && (
                <div
                    className="prc-plans-grid prc-fade"
                    style={{ position: 'relative', zIndex: 1 }}>
                    {plans.map((plan, i) => {
                        const isHot = !!plan.highlighted
                        const formatted = formatPrice(plan.price, currency)
                        const sym = formatted.replace(/[\d,]/g, '')
                        const val = formatted.replace(/[^0-9,]/g, '')
                        return (
                            <div
                                key={i}
                                className={`prc-card ${isHot ? 'prc-card-hot' : ''}`}>
                                {isHot && (
                                    <>
                                        <div
                                            aria-hidden="true"
                                            style={{
                                                position: 'absolute',
                                                top: -60,
                                                right: -40,
                                                width: 200,
                                                height: 200,
                                                borderRadius: '50%',
                                                background: 'var(--blue-vivid)',
                                                filter: 'blur(70px)',
                                                opacity: 0.12,
                                                pointerEvents: 'none'
                                            }}
                                        />
                                        <div
                                            aria-hidden="true"
                                            style={{ position: 'absolute', bottom: 0, right: 0, pointerEvents: 'none' }}>
                                            <DotGrid
                                                id={`prc-cd-${i}`}
                                                color="var(--blue-vivid)"
                                                opacity={0.09}
                                            />
                                        </div>
                                        <div
                                            aria-hidden="true"
                                            style={{ position: 'absolute', top: 12, left: 12, pointerEvents: 'none' }}>
                                            <Bracket color="var(--blue-vivid)" />
                                        </div>
                                        <div
                                            aria-hidden="true"
                                            style={{ position: 'absolute', bottom: 12, right: 12, pointerEvents: 'none' }}>
                                            <Bracket
                                                color="var(--blue-vivid)"
                                                rotate={180}
                                            />
                                        </div>
                                    </>
                                )}
                                <div style={{ position: 'relative' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                                        <span className={`prc-tag ${isHot ? 'prc-tag-hot' : ''}`}>{plan.tag}</span>
                                        {isHot && (
                                            <span
                                                style={{
                                                    width: 6,
                                                    height: 6,
                                                    borderRadius: '50%',
                                                    background: 'var(--blue-vivid)',
                                                    boxShadow: '0 0 6px var(--blue-vivid)',
                                                    display: 'inline-block'
                                                }}
                                            />
                                        )}
                                    </div>
                                    <div className="prc-plan-name">{plan.name}</div>
                                    <div className="prc-plan-info">{plan.info}</div>
                                    <div className="prc-price-row">
                                        <span className="prc-price-sym">{sym}</span>
                                        <span
                                            className="prc-price-val"
                                            style={{ color: isHot ? 'var(--blue-soft)' : 'var(--white)' }}>
                                            {val}
                                        </span>
                                    </div>
                                    <div className="prc-price-note">One-time project fee</div>
                                    <div className="prc-divider" />
                                    <ul className="prc-feat-list">
                                        {plan.features.map((f, j) => (
                                            <li
                                                key={j}
                                                className="prc-feat-item">
                                                <div className="prc-feat-chk">
                                                    <Check
                                                        size={9}
                                                        color="#4ade80"
                                                    />
                                                </div>
                                                {f.text}
                                            </li>
                                        ))}
                                    </ul>
                                    <NavLink href="#contact">
                                        <button className={`prc-plan-btn prc-btn-${plan.btn.variant}`}>
                                            {plan.btn.text}
                                            <ChevronRight size={13} />
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}

            {/* ══ TAB: All Services ════════════════════════════════════════ */}
            {activeTab === 'services' && (
                <div
                    className="prc-fade"
                    style={{ position: 'relative', zIndex: 1 }}>
                    {/* Category filter pills */}
                    <div className="prc-cat-bar">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCat(cat)}
                                className={`prc-cat-pill ${activeCat === cat ? 'prc-cat-active' : ''}`}>
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Count label */}
                    <p
                        style={{
                            fontFamily: 'var(--font-barlow-condensed)',
                            fontSize: 11,
                            fontWeight: 600,
                            letterSpacing: '.1em',
                            textTransform: 'uppercase',
                            color: 'var(--grey-dim)',
                            textAlign: 'center',
                            marginBottom: 24
                        }}>
                        {filtered.length} service{filtered.length !== 1 ? 's' : ''} — prices in {currency}
                    </p>

                    {/* Service cards */}
                    <div className="prc-svc-grid">
                        {filtered.map((svc, i) => {
                            const c = CAT_STYLE[svc.category] ?? CAT_STYLE.Support
                            const priceStr = currency === 'INR' ? svc.priceRange.inr : currency === 'EUR' ? svc.priceRange.eur : svc.priceRange.usd
                            const SvcIcon = svc.icon
                            return (
                                <div
                                    key={i}
                                    className="prc-svc-card"
                                    style={{ '--hover-border': c.border } as React.CSSProperties}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = c.border
                                        e.currentTarget.style.background = c.accentBg
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--border)'
                                        e.currentTarget.style.background = 'var(--bg-2)'
                                    }}>
                                    {/* Ghost category watermark */}
                                    <span
                                        aria-hidden="true"
                                        style={{
                                            position: 'absolute',
                                            bottom: -8,
                                            right: 12,
                                            fontFamily: 'var(--font-bebas)',
                                            fontSize: 64,
                                            lineHeight: 1,
                                            letterSpacing: '-.02em',
                                            color: c.accent,
                                            opacity: 0.05,
                                            pointerEvents: 'none',
                                            userSelect: 'none'
                                        }}>
                                        {svc.category}
                                    </span>

                                    {/* Category badge */}
                                    <span
                                        className="prc-svc-cat-badge"
                                        style={{ color: c.accent, background: c.accentBg, border: `1px solid ${c.border}` }}>
                                        {svc.category}
                                    </span>

                                    {/* Icon */}
                                    <div
                                        className="prc-svc-icon"
                                        style={{ background: c.accentBg, border: `1px solid ${c.border}`, color: c.accent }}>
                                        <SvcIcon size={20} />
                                    </div>

                                    {/* Name + desc */}
                                    <div className="prc-svc-name">{svc.name}</div>
                                    <div className="prc-svc-desc">{svc.description}</div>

                                    {/* Divider */}
                                    <div className="prc-svc-divider" />

                                    {/* Price */}
                                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                                        <span
                                            className="prc-svc-price"
                                            style={{ color: c.accent }}>
                                            {priceStr}
                                        </span>
                                        {svc.frequency && <span className="prc-svc-freq">{svc.frequency}</span>}
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Footer CTA */}
                    <div style={{ textAlign: 'center', marginTop: 48 }}>
                        <p style={{ fontFamily: 'var(--font-barlow)', fontSize: 15, color: 'var(--grey-mid)', marginBottom: 20 }}>
                            Need a custom quote for your specific requirements?
                        </p>
                        <NavLink href="#contact">
                            <button
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 9,
                                    padding: '13px 30px',
                                    borderRadius: 10,
                                    background: 'var(--white)',
                                    border: '1px solid var(--white)',
                                    fontFamily: 'var(--font-barlow-condensed)',
                                    fontSize: 13,
                                    fontWeight: 700,
                                    letterSpacing: '.09em',
                                    textTransform: 'uppercase',
                                    color: 'var(--black)',
                                    cursor: 'pointer',
                                    transition: 'background .2s, transform .2s, box-shadow .2s'
                                }}
                                onMouseEnter={(e) => {
                                    ;(e.currentTarget as HTMLButtonElement).style.background = 'var(--grey-light)'
                                    ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'
                                }}
                                onMouseLeave={(e) => {
                                    ;(e.currentTarget as HTMLButtonElement).style.background = 'var(--white)'
                                    ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'
                                }}>
                                Get a Custom Quote <ChevronRight size={14} />
                            </button>
                        </NavLink>
                    </div>
                </div>
            )}
        </section>
    )
}
