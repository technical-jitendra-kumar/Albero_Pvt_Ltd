'use client'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { pricingData } from '@/constants/pricing'
import type { PricingService, ProductTier } from '@/constants/pricing'
import { Check, ChevronRight } from 'lucide-react'
import { NavLink } from '../common/NavLink'

// ─── Types ────────────────────────────────────────────────────────────────────

type MainTab = 'products' | 'services'
type Category = 'All' | 'Development' | 'Design' | 'Marketing' | 'Infrastructure' | 'Support'

// ── Uncomment when ready to show pricing ──
// type Currency = 'USD' | 'EUR' | 'INR'
// type Billing  = 'monthly' | 'yearly'
// const RATES:   Record<Currency, number> = { USD: 1, EUR: 0.92, INR: 83.5 }
// const SYMBOLS: Record<Currency, string> = { USD: '$', EUR: '€', INR: '₹' }
// function fmtPrice(usd: number, cur: Currency): string {
//     if (usd === 0)  return 'Free'
//     if (usd === -1) return 'Custom'
//     return SYMBOLS[cur] + Math.round(usd * RATES[cur]).toLocaleString()
// }

const CATEGORIES: Category[] = ['All', 'Development', 'Design', 'Marketing', 'Infrastructure', 'Support']

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

// ─── Products Tab ─────────────────────────────────────────────────────────────

function ProductsTab(/* { currency, billing }: { currency: Currency; billing: Billing } */) {
    const { productSubscriptions } = pricingData
    const [activeId, setActiveId] = useState(productSubscriptions[0].id)
    const product = productSubscriptions.find((p) => p.id === activeId)!

    return (
        <div style={{ maxWidth: 1152, margin: '0 auto' }}>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                {/* ── Sidebar ── */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: 220, flexShrink: 0 }}>
                    <div
                        style={{
                            fontFamily: 'var(--font-barlow-condensed)',
                            fontSize: 10,
                            fontWeight: 700,
                            letterSpacing: '.12em',
                            textTransform: 'uppercase',
                            color: 'var(--grey-mid)',
                            marginBottom: 6,
                            padding: '0 4px'
                        }}>
                        Our Products
                    </div>
                    {productSubscriptions.map((p) => {
                        const isAct = p.id === activeId
                        const PIcon = p.icon
                        return (
                            <button
                                key={p.id}
                                onClick={() => setActiveId(p.id)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 10,
                                    padding: '11px 12px',
                                    borderRadius: 12,
                                    border: `1px solid ${isAct ? 'var(--border-blu)' : 'transparent'}`,
                                    background: isAct ? 'oklch(from var(--blue-vivid) l c h / 0.10)' : 'transparent',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    transition: 'background .18s, border-color .18s'
                                }}
                                onMouseEnter={(e) => {
                                    if (!isAct) {
                                        e.currentTarget.style.background = 'var(--bg-card)'
                                        e.currentTarget.style.borderColor = 'var(--border)'
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isAct) {
                                        e.currentTarget.style.background = 'transparent'
                                        e.currentTarget.style.borderColor = 'transparent'
                                    }
                                }}>
                                <div
                                    style={{
                                        width: 34,
                                        height: 34,
                                        borderRadius: 9,
                                        flexShrink: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background: isAct ? p.accentBg : 'var(--bg-mid)',
                                        color: isAct ? p.accent : 'var(--grey-mid)',
                                        transition: 'background .18s, color .18s'
                                    }}>
                                    <PIcon size={17} />
                                </div>
                                <div>
                                    <div
                                        style={{
                                            fontFamily: 'var(--font-barlow)',
                                            fontSize: 13,
                                            fontWeight: 700,
                                            color: isAct ? 'var(--white)' : 'var(--grey-light)',
                                            whiteSpace: 'nowrap'
                                        }}>
                                        {p.name}
                                    </div>
                                    <div
                                        style={{
                                            fontFamily: 'var(--font-barlow)',
                                            fontSize: 10,
                                            color: 'var(--grey-mid)',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            maxWidth: 140
                                        }}>
                                        {p.tagline}
                                    </div>
                                </div>
                            </button>
                        )
                    })}
                </div>

                {/* ── Tiers ── */}
                <div style={{ flex: 1, minWidth: 0 }}>
                    {/* Product header */}
                    <div style={{ marginBottom: 28, paddingBottom: 20, borderBottom: '1px solid var(--border)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8 }}>
                            <div
                                style={{
                                    width: 46,
                                    height: 46,
                                    borderRadius: 12,
                                    background: product.accentBg,
                                    border: '1px solid var(--border-blu)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: product.accent,
                                    flexShrink: 0
                                }}>
                                <product.icon size={22} />
                            </div>
                            <div>
                                <div
                                    style={{
                                        fontFamily: 'var(--font-bebas)',
                                        fontSize: 28,
                                        letterSpacing: '.03em',
                                        color: 'var(--white)',
                                        lineHeight: 1
                                    }}>
                                    {product.name}
                                </div>
                                <div
                                    style={{
                                        fontFamily: 'var(--font-barlow-condensed)',
                                        fontSize: 11,
                                        fontWeight: 600,
                                        letterSpacing: '.08em',
                                        textTransform: 'uppercase',
                                        color: product.accent
                                    }}>
                                    {product.tagline}
                                </div>
                            </div>
                        </div>
                        <p style={{ fontFamily: 'var(--font-barlow)', fontSize: 14, color: 'var(--grey-mid)', lineHeight: 1.65 }}>
                            {product.description}
                        </p>
                    </div>

                    {/* Tier cards */}
                    <div className="prc-tiers-grid">
                        {product.tiers.map((tier: ProductTier, i: number) => {
                            const isHot = !!tier.highlighted

                            // ── Uncomment when ready to show pricing ──
                            // const rawPrice     = billing === 'yearly' ? tier.yearlyUSD : tier.monthlyUSD
                            // const priceDisplay = fmtPrice(rawPrice, currency)
                            // const isFree       = rawPrice === 0
                            // const isCustom     = rawPrice === -1

                            return (
                                <div
                                    key={i}
                                    className={`prc-tier-card ${isHot ? 'prc-tier-hot' : ''}`}>
                                    {isHot && (
                                        <>
                                            <div
                                                aria-hidden="true"
                                                style={{
                                                    position: 'absolute',
                                                    top: -50,
                                                    right: -40,
                                                    width: 180,
                                                    height: 180,
                                                    borderRadius: '50%',
                                                    background: 'var(--blue-vivid)',
                                                    filter: 'blur(60px)',
                                                    opacity: 0.1,
                                                    pointerEvents: 'none'
                                                }}
                                            />
                                            <div
                                                aria-hidden="true"
                                                style={{ position: 'absolute', top: 10, left: 10, pointerEvents: 'none' }}>
                                                <Bracket color="var(--blue-vivid)" />
                                            </div>
                                            <div
                                                aria-hidden="true"
                                                style={{ position: 'absolute', bottom: 10, right: 10, pointerEvents: 'none' }}>
                                                <Bracket
                                                    color="var(--blue-vivid)"
                                                    rotate={180}
                                                />
                                            </div>
                                        </>
                                    )}

                                    <div style={{ position: 'relative' }}>
                                        {/* Label row */}
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                                            <span
                                                style={{
                                                    display: 'inline-block',
                                                    padding: '3px 10px',
                                                    borderRadius: 20,
                                                    fontFamily: 'var(--font-barlow-condensed)',
                                                    fontSize: 10,
                                                    fontWeight: 700,
                                                    letterSpacing: '.1em',
                                                    textTransform: 'uppercase',
                                                    color: isHot ? 'var(--blue-soft)' : 'var(--grey-mid)',
                                                    background: isHot ? 'oklch(from var(--blue-vivid) l c h / 0.12)' : 'var(--bg-mid)',
                                                    border: `1px solid ${isHot ? 'var(--border-blu)' : 'var(--border)'}`
                                                }}>
                                                {tier.label}
                                            </span>
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

                                        {/* ── Uncomment  to show pricing ──
                                        <div style={{ marginBottom: 4 }}>
                                            <span style={{ fontFamily: 'var(--font-bebas)', fontSize: isCustom ? 32 : 44, letterSpacing: '-.01em', color: isHot ? 'var(--blue-soft)' : 'var(--white)', lineHeight: 1 }}>
                                                {priceDisplay}
                                            </span>
                                            {!isFree && !isCustom && (
                                                <span style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 11, color: 'var(--grey-mid)', marginLeft: 4 }}>
                                                    / {billing === 'yearly' ? 'mo · billed yearly' : 'month'}
                                                </span>
                                            )}
                                        </div>
                                        {billing === 'yearly' && !isFree && !isCustom && tier.monthlyUSD > 0 && (
                                            <div style={{ display: 'inline-block', marginBottom: 8, padding: '2px 9px', borderRadius: 20, background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', fontFamily: 'var(--font-barlow-condensed)', fontSize: 9, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase', color: '#4ade80' }}>
                                                Save {Math.round((1 - tier.yearlyUSD / tier.monthlyUSD) * 100)}%
                                            </div>
                                        )}
                                        */}

                                        {/* User limit */}
                                        <div
                                            style={{
                                                fontFamily: 'var(--font-barlow-condensed)',
                                                fontSize: 11,
                                                fontWeight: 600,
                                                letterSpacing: '.08em',
                                                textTransform: 'uppercase',
                                                color: 'var(--grey-mid)',
                                                marginBottom: 16
                                            }}>
                                            {tier.limit}
                                        </div>

                                        <div style={{ height: 1, background: 'var(--border)', marginBottom: 16 }} />

                                        {/* Features */}
                                        <ul
                                            style={{
                                                listStyle: 'none',
                                                padding: 0,
                                                margin: '0 0 20px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 8
                                            }}>
                                            {tier.features.map((f, j) => (
                                                <li
                                                    key={j}
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'flex-start',
                                                        gap: 8,
                                                        fontFamily: 'var(--font-barlow)',
                                                        fontSize: 12,
                                                        color: 'var(--grey-light)',
                                                        lineHeight: 1.5
                                                    }}>
                                                    <div
                                                        style={{
                                                            width: 16,
                                                            height: 16,
                                                            borderRadius: '50%',
                                                            background: 'rgba(34,197,94,0.1)',
                                                            border: '1px solid rgba(34,197,94,0.25)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            flexShrink: 0,
                                                            marginTop: 1
                                                        }}>
                                                        <Check
                                                            size={8}
                                                            color="#4ade80"
                                                        />
                                                    </div>
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA */}
                                        <NavLink href="#contact">
                                            <button
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: 7,
                                                    width: '100%',
                                                    padding: '11px 14px',
                                                    borderRadius: 10,
                                                    fontFamily: 'var(--font-barlow-condensed)',
                                                    fontSize: 12,
                                                    fontWeight: 700,
                                                    letterSpacing: '.09em',
                                                    textTransform: 'uppercase',
                                                    cursor: 'pointer',
                                                    background: isHot ? 'var(--white)' : 'transparent',
                                                    border: isHot ? '1px solid var(--white)' : '1px solid var(--border)',
                                                    color: isHot ? 'var(--black)' : 'var(--grey-light)',
                                                    transition: 'background .2s, transform .2s, border-color .2s, color .2s'
                                                }}
                                                onMouseEnter={(e) => {
                                                    const b = e.currentTarget
                                                    if (isHot) {
                                                        b.style.background = 'var(--grey-light)'
                                                    } else {
                                                        b.style.borderColor = 'var(--border-blu)'
                                                        b.style.color = 'var(--white)'
                                                    }
                                                    b.style.transform = 'translateY(-1px)'
                                                }}
                                                onMouseLeave={(e) => {
                                                    const b = e.currentTarget
                                                    if (isHot) {
                                                        b.style.background = 'var(--white)'
                                                    } else {
                                                        b.style.borderColor = 'var(--border)'
                                                        b.style.color = 'var(--grey-light)'
                                                    }
                                                    b.style.transform = 'translateY(0)'
                                                }}>
                                                {tier.cta} <ChevronRight size={13} />
                                            </button>
                                        </NavLink>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Pricing() {
    const [mainTab, setMainTab] = useState<MainTab>('products')
    const [activeCat, setActiveCat] = useState<Category>('All')

    // ── Uncomment when ready to show pricing ──
    // const [currency, setCurrency] = useState<Currency>('USD')
    // const [billing,  setBilling]  = useState<Billing>('monthly')

    const { badgeTitle, heading, description, allServices } = pricingData

    const filtered: PricingService[] = activeCat === 'All' ? allServices : allServices.filter((s) => s.category === activeCat)

    return (
        <section
            id="pricing"
            style={{ background: 'var(--black)', color: 'var(--white)', padding: '80px 20px', position: 'relative', overflow: 'hidden' }}>
            <style>{`
                /* ── Switcher track ── */
                .prc-track {
                    display: inline-flex; gap: 3px; padding: 4px;
                    border-radius: 12px; background: var(--bg-card); border: 1px solid var(--border);
                }
                .prc-btn {
                    padding: 7px 16px; border-radius: 8px; border: 1px solid transparent;
                    background: transparent; font-family: var(--font-barlow-condensed);
                    font-size: 12px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
                    color: var(--grey-mid); cursor: pointer;
                    transition: background .18s, color .18s, border-color .18s; white-space: nowrap;
                }
                .prc-btn:hover { color: var(--grey-light); }
                .prc-btn-active {
                    background: oklch(from var(--blue-vivid) l c h / 0.12) !important;
                    border-color: var(--border-blu) !important; color: var(--white) !important;
                }
                /* ── Tier grid ── */
                .prc-tiers-grid {
                    display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;
                }
                @media (max-width: 900px) { .prc-tiers-grid { grid-template-columns: repeat(2, 1fr); } }
                @media (max-width: 500px) { .prc-tiers-grid { grid-template-columns: 1fr; } }
                /* ── Tier card ── */
                .prc-tier-card {
                    background: var(--bg-2); border-radius: 16px; border: 1px solid var(--border);
                    padding: 22px 18px; position: relative; overflow: hidden;
                    transition: border-color .22s, transform .2s;
                }
                .prc-tier-card:hover { transform: translateY(-2px); }
                .prc-tier-hot { background: oklch(from var(--blue-vivid) l c h / 0.05) !important; border-color: var(--border-blu) !important; }
                /* ── Category pills ── */
                .prc-cat-pill {
                    padding: 6px 14px; border-radius: 20px; background: var(--bg-card); border: 1px solid var(--border);
                    font-family: var(--font-barlow-condensed); font-size: 11px; font-weight: 700;
                    letter-spacing: .1em; text-transform: uppercase; color: var(--grey-mid); cursor: pointer;
                    transition: background .18s, border-color .18s, color .18s;
                }
                .prc-cat-pill:hover { color: var(--grey-light); border-color: rgba(255,255,255,0.15); }
                .prc-cat-active { background: oklch(from var(--blue-vivid) l c h / 0.12) !important; border-color: var(--border-blu) !important; color: var(--white) !important; }
                /* ── Services grid ── */
                .prc-svc-grid {
                    display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px;
                    max-width: 1152px; margin: 0 auto;
                }
                @media (max-width: 900px) { .prc-svc-grid { grid-template-columns: repeat(2, 1fr); } }
                @media (max-width: 540px) { .prc-svc-grid { grid-template-columns: 1fr; } }
                /* ── Products tab responsive ── */
                @media (max-width: 780px) {
                    .prc-prod-row { flex-direction: column !important; }
                }
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

                {/* Controls row */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                    {/* Main tab switcher */}
                    <div className="prc-track">
                        {(
                            [
                                { key: 'products', label: '📦  Products' },
                                { key: 'services', label: '⚙️  All Services' }
                            ] as { key: MainTab; label: string }[]
                        ).map((t) => (
                            <button
                                key={t.key}
                                onClick={() => setMainTab(t.key)}
                                className={`prc-btn ${mainTab === t.key ? 'prc-btn-active' : ''}`}>
                                {t.label}
                            </button>
                        ))}
                    </div>

                    {/* ── Uncomment when ready to show pricing ──
                    {mainTab === 'products' && (
                        <div className="prc-track">
                            {(['monthly', 'yearly'] as Billing[]).map(b => (
                                <button key={b} onClick={() => setBilling(b)}
                                    className={`prc-btn ${billing === b ? 'prc-btn-active' : ''}`}>
                                    {b === 'monthly' ? 'Monthly' : 'Yearly 🎁'}
                                </button>
                            ))}
                        </div>
                    )}
                    <div className="prc-track">
                        {(['USD', 'EUR', 'INR'] as Currency[]).map(c => (
                            <button key={c} onClick={() => setCurrency(c)}
                                className={`prc-btn ${currency === c ? 'prc-btn-active' : ''}`}>
                                {c}
                            </button>
                        ))}
                    </div>
                    */}
                </div>

                {/* ── Uncomment when ready to show pricing ──
                {mainTab === 'products' && billing === 'yearly' && (
                    <p style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 11, fontWeight: 600, letterSpacing: '.09em', textTransform: 'uppercase', color: '#4ade80', marginTop: 12 }}>
                        🎁 Save up to 20% with yearly billing
                    </p>
                )}
                */}
            </div>

            {/* ══ TAB: Products ═══════════════════════════════════════════ */}
            {mainTab === 'products' && (
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <ProductsTab /* currency={currency} billing={billing} */ />
                </div>
            )}

            {/* ══ TAB: All Services ════════════════════════════════════════ */}
            {mainTab === 'services' && (
                <div style={{ position: 'relative', zIndex: 1 }}>
                    {/* Category filter */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center', marginBottom: 28 }}>
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCat(cat)}
                                className={`prc-cat-pill ${activeCat === cat ? 'prc-cat-active' : ''}`}>
                                {cat}
                            </button>
                        ))}
                    </div>

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
                        {filtered.length} service{filtered.length !== 1 ? 's' : ''}
                    </p>

                    {/* Service cards */}
                    <div className="prc-svc-grid">
                        {filtered.map((svc, i) => {
                            const c = CAT_STYLE[svc.category] ?? CAT_STYLE.Support
                            const SvcIcon = svc.icon
                            return (
                                <div
                                    key={i}
                                    style={{
                                        background: 'var(--bg-2)',
                                        border: '1px solid var(--border)',
                                        borderRadius: 16,
                                        padding: '22px 20px',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        transition: 'border-color .2s, transform .2s, background .2s'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = c.border
                                        e.currentTarget.style.background = c.accentBg
                                        e.currentTarget.style.transform = 'translateY(-2px)'
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--border)'
                                        e.currentTarget.style.background = 'var(--bg-2)'
                                        e.currentTarget.style.transform = 'translateY(0)'
                                    }}>
                                    {/* Ghost watermark */}
                                    <span
                                        aria-hidden="true"
                                        style={{
                                            position: 'absolute',
                                            bottom: -8,
                                            right: 12,
                                            fontFamily: 'var(--font-bebas)',
                                            fontSize: 64,
                                            lineHeight: 1,
                                            color: c.accent,
                                            opacity: 0.05,
                                            pointerEvents: 'none',
                                            userSelect: 'none'
                                        }}>
                                        {svc.category}
                                    </span>

                                    {/* Category badge */}
                                    <span
                                        style={{
                                            position: 'absolute',
                                            top: 14,
                                            right: 14,
                                            padding: '2px 9px',
                                            borderRadius: 20,
                                            fontFamily: 'var(--font-barlow-condensed)',
                                            fontSize: 9,
                                            fontWeight: 700,
                                            letterSpacing: '.09em',
                                            textTransform: 'uppercase',
                                            color: c.accent,
                                            background: c.accentBg,
                                            border: `1px solid ${c.border}`
                                        }}>
                                        {svc.category}
                                    </span>

                                    {/* Icon */}
                                    <div
                                        style={{
                                            width: 42,
                                            height: 42,
                                            borderRadius: 11,
                                            background: c.accentBg,
                                            border: `1px solid ${c.border}`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: c.accent,
                                            marginBottom: 14
                                        }}>
                                        <SvcIcon size={20} />
                                    </div>

                                    {/* Name + desc */}
                                    <div
                                        style={{
                                            fontFamily: 'var(--font-bebas)',
                                            fontSize: 20,
                                            letterSpacing: '.03em',
                                            color: 'var(--white)',
                                            lineHeight: 1.1,
                                            marginBottom: 8
                                        }}>
                                        {svc.name}
                                    </div>
                                    <div
                                        style={{
                                            fontFamily: 'var(--font-barlow)',
                                            fontSize: 13,
                                            color: 'var(--grey-mid)',
                                            lineHeight: 1.65,
                                            flex: 1
                                        }}>
                                        {svc.description}
                                    </div>

                                    {/* ── Uncomment when ready to show pricing ──
                                    <div style={{ height: 1, background: 'var(--border)', margin: '14px 0' }} />
                                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                                        <span style={{ fontFamily: 'var(--font-bebas)', fontSize: 17, letterSpacing: '.03em', color: c.accent }}>
                                            {currency === 'INR' ? svc.priceRange.inr : currency === 'EUR' ? svc.priceRange.eur : svc.priceRange.usd}
                                        </span>
                                        {svc.frequency && (
                                            <span style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 10, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--grey-mid)', marginLeft: 5 }}>
                                                {svc.frequency}
                                            </span>
                                        )}
                                    </div>
                                    */}
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
                                    transition: 'background .2s, transform .2s'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'var(--grey-light)'
                                    e.currentTarget.style.transform = 'translateY(-2px)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'var(--white)'
                                    e.currentTarget.style.transform = 'translateY(0)'
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
