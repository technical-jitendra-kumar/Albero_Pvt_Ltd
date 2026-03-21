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
                            color: 'rgba(255,255,255,0.35)',
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
                                    border: `1px solid ${isAct ? 'rgba(99,102,241,0.35)' : 'rgba(255,255,255,0.06)'}`,
                                    background: isAct
                                        ? 'linear-gradient(135deg,rgba(99,102,241,0.15),rgba(99,102,241,0.06))'
                                        : 'rgba(255,255,255,0.03)',
                                    backdropFilter: 'blur(12px)',
                                    WebkitBackdropFilter: 'blur(12px)',
                                    boxShadow: isAct ? '0 1px 0 rgba(255,255,255,0.08) inset' : 'none',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    transition: 'background .18s, border-color .18s, box-shadow .18s'
                                }}
                                onMouseEnter={(e) => {
                                    if (!isAct) {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isAct) {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
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
                                        background: isAct ? p.accentBg : 'rgba(255,255,255,0.06)',
                                        border: `1px solid ${isAct ? 'rgba(99,102,241,0.3)' : 'rgba(255,255,255,0.06)'}`,
                                        color: isAct ? p.accent : 'rgba(255,255,255,0.35)',
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
                                            color: isAct ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.55)',
                                            whiteSpace: 'nowrap'
                                        }}>
                                        {p.name}
                                    </div>
                                    <div
                                        style={{
                                            fontFamily: 'var(--font-barlow)',
                                            fontSize: 10,
                                            color: 'rgba(255,255,255,0.25)',
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
                    <div style={{ marginBottom: 28, paddingBottom: 20, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8 }}>
                            <div
                                style={{
                                    width: 46,
                                    height: 46,
                                    borderRadius: 12,
                                    background: product.accentBg,
                                    border: '1px solid rgba(99,102,241,0.28)',
                                    backdropFilter: 'blur(8px)',
                                    boxShadow: '0 1px 0 rgba(255,255,255,0.1) inset',
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
                                        color: 'rgba(255,255,255,0.95)',
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
                        <p style={{ fontFamily: 'var(--font-barlow)', fontSize: 14, color: 'rgba(255,255,255,0.38)', lineHeight: 1.65 }}>
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
                                        <div
                                            aria-hidden="true"
                                            style={{
                                                position: 'absolute',
                                                top: -50,
                                                right: -40,
                                                width: 180,
                                                height: 180,
                                                borderRadius: '50%',
                                                background: 'oklch(0.623 0.214 259.815)',
                                                filter: 'blur(60px)',
                                                opacity: 0.18,
                                                pointerEvents: 'none'
                                            }}
                                        />
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
                                                    color: isHot ? 'oklch(0.707 0.165 254.624)' : 'rgba(255,255,255,0.38)',
                                                    background: isHot ? 'rgba(99,102,241,0.15)' : 'rgba(255,255,255,0.05)',
                                                    border: `1px solid ${isHot ? 'rgba(99,102,241,0.35)' : 'rgba(255,255,255,0.08)'}`,
                                                    backdropFilter: 'blur(8px)'
                                                }}>
                                                {tier.label}
                                            </span>
                                            {isHot && (
                                                <span
                                                    style={{
                                                        width: 6,
                                                        height: 6,
                                                        borderRadius: '50%',
                                                        background: 'oklch(0.623 0.214 259.815)',
                                                        boxShadow: '0 0 8px oklch(0.623 0.214 259.815)',
                                                        display: 'inline-block'
                                                    }}
                                                />
                                            )}
                                        </div>

                                        {/* ── Uncomment when ready to show pricing ──
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
                                                color: 'rgba(255,255,255,0.28)',
                                                marginBottom: 16
                                            }}>
                                            {tier.limit}
                                        </div>

                                        <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', marginBottom: 16 }} />

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
                                                        color: 'rgba(255,255,255,0.6)',
                                                        lineHeight: 1.5
                                                    }}>
                                                    <div
                                                        style={{
                                                            width: 16,
                                                            height: 16,
                                                            borderRadius: '50%',
                                                            background: 'rgba(34,197,94,0.12)',
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
                                                    background: isHot ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.05)',
                                                    border: isHot ? '1px solid rgba(255,255,255,0.9)' : '1px solid rgba(255,255,255,0.1)',
                                                    color: isHot ? '#000' : 'rgba(255,255,255,0.55)',
                                                    backdropFilter: 'blur(8px)',
                                                    boxShadow: isHot
                                                        ? '0 1px 0 rgba(255,255,255,0.3) inset, 0 8px 24px rgba(99,102,241,0.2)'
                                                        : '0 1px 0 rgba(255,255,255,0.06) inset',
                                                    transition: 'background .2s, transform .2s, border-color .2s, color .2s, box-shadow .2s'
                                                }}
                                                onMouseEnter={(e) => {
                                                    const b = e.currentTarget
                                                    if (isHot) {
                                                        b.style.background = 'rgba(255,255,255,1)'
                                                    } else {
                                                        b.style.borderColor = 'rgba(99,102,241,0.4)'
                                                        b.style.color = 'rgba(255,255,255,0.9)'
                                                        b.style.background = 'rgba(99,102,241,0.12)'
                                                    }
                                                    b.style.transform = 'translateY(-1px)'
                                                }}
                                                onMouseLeave={(e) => {
                                                    const b = e.currentTarget
                                                    if (isHot) {
                                                        b.style.background = 'rgba(255,255,255,0.95)'
                                                    } else {
                                                        b.style.borderColor = 'rgba(255,255,255,0.1)'
                                                        b.style.color = 'rgba(255,255,255,0.55)'
                                                        b.style.background = 'rgba(255,255,255,0.05)'
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
            style={{ background: 'transparent', color: 'var(--white)', padding: '80px 20px', position: 'relative', overflow: 'hidden' }}>
            <style>{`
                /* ══ GLASS SYSTEM ══════════════════════════════════════════ */

                /* Shared glass card */
                .gl {
                    background: linear-gradient(135deg,
                        rgba(255,255,255,0.055) 0%,
                        rgba(255,255,255,0.018) 50%,
                        rgba(99,102,241,0.04) 100%);
                    backdrop-filter: blur(20px) saturate(1.4);
                    -webkit-backdrop-filter: blur(20px) saturate(1.4);
                    border: 1px solid rgba(255,255,255,0.09);
                    box-shadow:
                        0 0 0 1px rgba(255,255,255,0.03) inset,
                        0 1px 0 rgba(255,255,255,0.1) inset,
                        0 20px 48px rgba(0,0,0,0.4),
                        0 4px 12px rgba(0,0,0,0.25);
                    transition: transform 0.3s cubic-bezier(.22,1,.36,1), border-color 0.3s, box-shadow 0.3s;
                }
                .gl::before {
                    content: '';
                    position: absolute; top: 0; left: 10%; right: 10%; height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18) 40%, rgba(255,255,255,0.18) 60%, transparent);
                    pointer-events: none; z-index: 10; border-radius: inherit;
                }
                .gl::after {
                    content: '';
                    position: absolute; inset: 0; border-radius: inherit;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
                    background-size: 200px 200px; pointer-events: none; opacity: 0.5; z-index: 1;
                }
                .gl:hover {
                    transform: translateY(-3px) scale(1.006);
                    border-color: rgba(99,102,241,0.28);
                    box-shadow:
                        0 0 0 1px rgba(255,255,255,0.05) inset,
                        0 1px 0 rgba(255,255,255,0.14) inset,
                        0 28px 64px rgba(0,0,0,0.5),
                        0 0 32px rgba(99,102,241,0.1),
                        0 6px 20px rgba(0,0,0,0.3);
                }

                /* Hot tier glass — brighter */
                .gl-hot {
                    background: linear-gradient(135deg,
                        rgba(99,102,241,0.18) 0%,
                        rgba(99,102,241,0.08) 50%,
                        rgba(99,102,241,0.04) 100%) !important;
                    border-color: rgba(99,102,241,0.35) !important;
                    box-shadow:
                        0 0 0 1px rgba(99,102,241,0.15) inset,
                        0 1px 0 rgba(255,255,255,0.14) inset,
                        0 20px 48px rgba(0,0,0,0.45),
                        0 0 40px rgba(99,102,241,0.15) !important;
                }

                /* ── Tab switcher ── */
                .prc-track {
                    display: inline-flex; gap: 3px; padding: 4px;
                    border-radius: 12px;
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.08);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    box-shadow: 0 1px 0 rgba(255,255,255,0.07) inset;
                }
                .prc-btn {
                    padding: 7px 16px; border-radius: 8px; border: 1px solid transparent;
                    background: transparent; font-family: var(--font-barlow-condensed);
                    font-size: 12px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
                    color: rgba(255,255,255,0.35); cursor: pointer;
                    transition: background .18s, color .18s, border-color .18s; white-space: nowrap;
                }
                .prc-btn:hover { color: rgba(255,255,255,0.7); }
                .prc-btn-active {
                    background: linear-gradient(135deg,rgba(99,102,241,0.22),rgba(99,102,241,0.1)) !important;
                    border-color: rgba(99,102,241,0.4) !important;
                    color: rgba(255,255,255,0.95) !important;
                    box-shadow: 0 1px 0 rgba(255,255,255,0.1) inset !important;
                }

                /* ── Tier grid ── */
                .prc-tiers-grid {
                    display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;
                }
                @media (max-width: 900px) { .prc-tiers-grid { grid-template-columns: repeat(2, 1fr); } }
                @media (max-width: 500px)  { .prc-tiers-grid { grid-template-columns: 1fr; } }

                /* ── Tier card = glass ── */
                .prc-tier-card {
                    border-radius: 16px; padding: 22px 18px;
                    position: relative; overflow: hidden;
                    /* glass */
                    background: linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018) 50%,rgba(99,102,241,0.04));
                    backdrop-filter: blur(20px) saturate(1.4);
                    -webkit-backdrop-filter: blur(20px) saturate(1.4);
                    border: 1px solid rgba(255,255,255,0.09);
                    box-shadow: 0 1px 0 rgba(255,255,255,0.1) inset, 0 16px 40px rgba(0,0,0,0.35);
                    transition: transform .25s cubic-bezier(.22,1,.36,1), border-color .25s, box-shadow .25s;
                }
                .prc-tier-card::before {
                    content: ''; position: absolute; top: 0; left: 10%; right: 10%; height: 1px;
                    background: linear-gradient(90deg,transparent,rgba(255,255,255,0.16) 40%,rgba(255,255,255,0.16) 60%,transparent);
                    pointer-events: none; z-index: 10;
                }
                .prc-tier-card:hover {
                    transform: translateY(-3px);
                    border-color: rgba(99,102,241,0.25);
                    box-shadow: 0 1px 0 rgba(255,255,255,0.12) inset, 0 24px 56px rgba(0,0,0,0.45), 0 0 24px rgba(99,102,241,0.09);
                }
                .prc-tier-hot {
                    background: linear-gradient(135deg,rgba(99,102,241,0.18),rgba(99,102,241,0.08) 50%,rgba(99,102,241,0.04)) !important;
                    border-color: rgba(99,102,241,0.35) !important;
                    box-shadow: 0 0 0 1px rgba(99,102,241,0.12) inset, 0 1px 0 rgba(255,255,255,0.14) inset, 0 20px 48px rgba(0,0,0,0.45), 0 0 36px rgba(99,102,241,0.14) !important;
                }

                /* ── Category pills ── */
                .prc-cat-pill {
                    padding: 6px 14px; border-radius: 20px;
                    background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
                    backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
                    box-shadow: 0 1px 0 rgba(255,255,255,0.06) inset;
                    font-family: var(--font-barlow-condensed); font-size: 11px; font-weight: 700;
                    letter-spacing: .1em; text-transform: uppercase; color: rgba(255,255,255,0.38); cursor: pointer;
                    transition: background .18s, border-color .18s, color .18s;
                }
                .prc-cat-pill:hover { color: rgba(255,255,255,0.75); border-color: rgba(255,255,255,0.15); background: rgba(255,255,255,0.07); }
                .prc-cat-active {
                    background: linear-gradient(135deg,rgba(99,102,241,0.2),rgba(99,102,241,0.09)) !important;
                    border-color: rgba(99,102,241,0.4) !important;
                    color: rgba(255,255,255,0.95) !important;
                    box-shadow: 0 1px 0 rgba(255,255,255,0.1) inset !important;
                }

                /* ── Service cards (glass) ── */
                .prc-svc-grid {
                    display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px;
                    max-width: 1152px; margin: 0 auto;
                }
                @media (max-width: 900px) { .prc-svc-grid { grid-template-columns: repeat(2, 1fr); } }
                @media (max-width: 540px)  { .prc-svc-grid { grid-template-columns: 1fr; } }

                /* ── Products tab responsive ── */
                @media (max-width: 780px) { .prc-prod-row { flex-direction: column !important; } }
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
                    top: '45%',
                    left: '-5%',
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle,oklch(0.511 0.262 276.966) 0%,transparent 70%)',
                    opacity: 0.08,
                    pointerEvents: 'none',
                    filter: 'blur(10px)'
                }}
            />

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
                        color: 'rgba(255,255,255,0.95)',
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
                        color: 'rgba(255,255,255,0.35)',
                        maxWidth: 540,
                        margin: '0 auto 28px',
                        lineHeight: 1.75
                    }}>
                    {description}
                </p>

                {/* Controls row */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
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
                            color: 'rgba(255,255,255,0.2)',
                            textAlign: 'center',
                            marginBottom: 24
                        }}>
                        {filtered.length} service{filtered.length !== 1 ? 's' : ''}
                    </p>

                    {/* Service cards — glass */}
                    <div className="prc-svc-grid">
                        {filtered.map((svc, i) => {
                            const c = CAT_STYLE[svc.category] ?? CAT_STYLE.Support
                            const SvcIcon = svc.icon
                            return (
                                <div
                                    key={i}
                                    className="gl"
                                    style={{ borderRadius: 16, padding: '22px 20px', display: 'flex', flexDirection: 'column', cursor: 'default' }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = c.border
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'
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
                                            opacity: 0.06,
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
                                            border: `1px solid ${c.border}`,
                                            backdropFilter: 'blur(8px)'
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
                                            backdropFilter: 'blur(8px)',
                                            boxShadow: '0 1px 0 rgba(255,255,255,0.08) inset',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: c.accent,
                                            marginBottom: 14,
                                            flexShrink: 0
                                        }}>
                                        <SvcIcon size={20} />
                                    </div>

                                    <div
                                        style={{
                                            fontFamily: 'var(--font-bebas)',
                                            fontSize: 20,
                                            letterSpacing: '.03em',
                                            color: 'rgba(255,255,255,0.92)',
                                            lineHeight: 1.1,
                                            marginBottom: 8
                                        }}>
                                        {svc.name}
                                    </div>
                                    <div
                                        style={{
                                            fontFamily: 'var(--font-barlow)',
                                            fontSize: 13,
                                            color: 'rgba(255,255,255,0.36)',
                                            lineHeight: 1.65,
                                            flex: 1
                                        }}>
                                        {svc.description}
                                    </div>

                                    {/* ── Uncomment when ready to show pricing ──
                                    <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', margin: '14px 0' }} />
                                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                                        <span style={{ fontFamily: 'var(--font-bebas)', fontSize: 17, letterSpacing: '.03em', color: c.accent }}>
                                            {currency === 'INR' ? svc.priceRange.inr : currency === 'EUR' ? svc.priceRange.eur : svc.priceRange.usd}
                                        </span>
                                        {svc.frequency && (
                                            <span style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 10, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginLeft: 5 }}>
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
                        <p style={{ fontFamily: 'var(--font-barlow)', fontSize: 15, color: 'rgba(255,255,255,0.32)', marginBottom: 20 }}>
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
                                    background: 'rgba(255,255,255,0.92)',
                                    border: '1px solid rgba(255,255,255,0.9)',
                                    fontFamily: 'var(--font-barlow-condensed)',
                                    fontSize: 13,
                                    fontWeight: 700,
                                    letterSpacing: '.09em',
                                    textTransform: 'uppercase',
                                    color: '#000',
                                    cursor: 'pointer',
                                    backdropFilter: 'blur(8px)',
                                    boxShadow: '0 1px 0 rgba(255,255,255,0.5) inset, 0 8px 24px rgba(99,102,241,0.2)',
                                    transition: 'background .2s, transform .2s, box-shadow .2s'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,1)'
                                    e.currentTarget.style.transform = 'translateY(-2px)'
                                    e.currentTarget.style.boxShadow = '0 1px 0 rgba(255,255,255,0.5) inset,0 12px 32px rgba(99,102,241,0.28)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.92)'
                                    e.currentTarget.style.transform = 'translateY(0)'
                                    e.currentTarget.style.boxShadow = '0 1px 0 rgba(255,255,255,0.5) inset,0 8px 24px rgba(99,102,241,0.2)'
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
