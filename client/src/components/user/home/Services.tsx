'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { servicesData, productsData } from '@/constants/services'
import type { Product, ServiceFeature } from '@/constants/services'
import { IconArrowRight, IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

// ─── Types ────────────────────────────────────────────────────────────────────

type Tab = 'services' | 'products'

const TABS: { key: Tab; label: string }[] = [
    { key: 'products', label: 'Our Products' },
    { key: 'services', label: 'Our Services' }
]

// ─── Dot-grid SVG graphic ─────────────────────────────────────────────────────

function DotGrid({ color = 'var(--blue-vivid)', opacity = 0.18 }: { color?: string; opacity?: number }) {
    return (
        <svg
            width="180"
            height="180"
            viewBox="0 0 180 180"
            fill="none"
            style={{ position: 'absolute', pointerEvents: 'none' }}>
            <defs>
                <pattern
                    id="dots"
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
                fill="url(#dots)"
            />
        </svg>
    )
}

// ─── Corner-bracket graphic ───────────────────────────────────────────────────

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
                opacity="0.5"
            />
        </svg>
    )
}

// ─── Shared slider controls ───────────────────────────────────────────────────

function SliderControls({
    total,
    active,
    onPrev,
    onNext,
    onDot,
    accentColor = 'var(--blue-vivid)'
}: {
    total: number
    active: number
    onPrev: () => void
    onNext: () => void
    onDot: (i: number) => void
    accentColor?: string
}) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginTop: 36 }}>
            <button
                onClick={onPrev}
                className="sv-ctrl-btn">
                <IconChevronLeft size={16} />
            </button>
            <div style={{ display: 'flex', gap: 6 }}>
                {Array.from({ length: total }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => onDot(i)}
                        style={{
                            height: 6,
                            width: active === i ? 28 : 6,
                            borderRadius: 3,
                            border: 'none',
                            padding: 0,
                            cursor: 'pointer',
                            background: active === i ? accentColor : 'rgba(255,255,255,0.12)',
                            boxShadow: active === i ? `0 0 8px ${accentColor}` : 'none',
                            transition: 'width 0.3s, background 0.3s, box-shadow 0.3s'
                        }}
                    />
                ))}
            </div>
            <button
                onClick={onNext}
                className="sv-ctrl-btn">
                <IconChevronRight size={16} />
            </button>
        </div>
    )
}

// ─── Services Panel ───────────────────────────────────────────────────────────

function ServicesPanel() {
    const items: ServiceFeature[] = servicesData.features
    const [active, setActive] = useState(0)
    const service = items[active]
    const ServiceIcon = service.icon
    const idxLabel = `${String(active + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}`

    return (
        <div style={{ width: '100%', maxWidth: 1152, margin: '0 auto' }}>
            <div className="sv-row">
                {/* ── Main card ── */}
                <div className="sv-main-card">
                    {/* Ghost number watermark */}
                    <span
                        style={{
                            position: 'absolute',
                            bottom: -20,
                            right: 16,
                            fontFamily: 'var(--font-bebas)',
                            fontSize: 180,
                            lineHeight: 1,
                            letterSpacing: '-0.04em',
                            color: 'oklch(0.623 0.214 259.815)',
                            opacity: 0.04,
                            pointerEvents: 'none',
                            userSelect: 'none'
                        }}>
                        {String(active + 1).padStart(2, '0')}
                    </span>

                    {/* Dot grid — top right */}
                    <div style={{ position: 'absolute', top: 0, right: 0, pointerEvents: 'none' }}>
                        <DotGrid
                            color="oklch(0.623 0.214 259.815)"
                            opacity={0.12}
                        />
                    </div>

                    {/* Glow orb */}
                    <div
                        style={{
                            position: 'absolute',
                            top: -80,
                            left: -60,
                            width: 280,
                            height: 280,
                            borderRadius: '50%',
                            background: 'oklch(0.623 0.214 259.815)',
                            filter: 'blur(90px)',
                            opacity: 0.12,
                            pointerEvents: 'none'
                        }}
                    />

                    {/* Corner brackets */}
                    <div style={{ position: 'absolute', top: 20, right: 20, transform: 'rotate(90deg)' }}>
                        <CornerBracket color="rgba(99,102,241,0.5)" />
                    </div>
                    <div style={{ position: 'absolute', bottom: 20, left: 20, transform: 'rotate(270deg)' }}>
                        <CornerBracket color="rgba(99,102,241,0.5)" />
                    </div>

                    {/* Content */}
                    <div style={{ position: 'relative', flex: 1, zIndex: 2 }}>
                        {/* Index + Icon row */}
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
                            <div
                                style={{
                                    width: 56,
                                    height: 56,
                                    borderRadius: 14,
                                    background: 'rgba(99,102,241,0.14)',
                                    border: '1px solid rgba(99,102,241,0.3)',
                                    backdropFilter: 'blur(8px)',
                                    boxShadow: '0 1px 0 rgba(255,255,255,0.1) inset',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'oklch(0.707 0.165 254.624)'
                                }}>
                                <ServiceIcon size={26} />
                            </div>
                            <span
                                style={{
                                    fontFamily: 'var(--font-bebas)',
                                    fontSize: 15,
                                    letterSpacing: '0.12em',
                                    color: 'oklch(0.623 0.214 259.815)',
                                    opacity: 0.7
                                }}>
                                {idxLabel}
                            </span>
                        </div>

                        {/* Category chip — glass */}
                        <span
                            style={{
                                display: 'inline-block',
                                marginBottom: 16,
                                padding: '4px 12px',
                                borderRadius: 20,
                                fontFamily: 'var(--font-barlow-condensed)',
                                fontSize: 11,
                                fontWeight: 600,
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                color: 'oklch(0.707 0.165 254.624)',
                                background: 'rgba(99,102,241,0.12)',
                                border: '1px solid rgba(99,102,241,0.28)',
                                backdropFilter: 'blur(8px)',
                                boxShadow: '0 1px 0 rgba(255,255,255,0.07) inset'
                            }}>
                            Development Service
                        </span>

                        <h3
                            style={{
                                fontFamily: 'var(--font-bebas)',
                                fontSize: 'clamp(28px, 3.5vw, 40px)',
                                letterSpacing: '0.02em',
                                color: 'rgba(255,255,255,0.95)',
                                marginBottom: 14,
                                lineHeight: 1.05
                            }}>
                            {service.title}
                        </h3>

                        <p
                            style={{
                                fontFamily: 'var(--font-barlow)',
                                fontSize: 15,
                                color: 'rgba(255,255,255,0.38)',
                                lineHeight: 1.75,
                                marginBottom: 32
                            }}>
                            {service.description}
                        </p>

                        {/* Decorative divider */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                            <div style={{ height: 1, flex: 1, background: 'rgba(255,255,255,0.07)' }} />
                            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'oklch(0.623 0.214 259.815)', opacity: 0.5 }} />
                            <div style={{ height: 1, width: 32, background: 'oklch(0.623 0.214 259.815)', opacity: 0.3 }} />
                        </div>

                        {/* Quick-stats row */}
                        <div style={{ display: 'flex', gap: 24 }}>
                            {[
                                { label: 'Delivery', value: '2–4 Weeks' },
                                { label: 'Support', value: '24 / 7' },
                                { label: 'Revisions', value: 'Unlimited' }
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
                                            fontSize: 20,
                                            color: 'rgba(255,255,255,0.92)',
                                            letterSpacing: '0.04em'
                                        }}>
                                        {s.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div style={{ position: 'relative', marginTop: 36, zIndex: 2 }}>
                        <button className="sv-cta-btn sv-cta-blue">
                            Get Started <IconArrowRight size={15} />
                        </button>
                    </div>
                </div>

                {/* ── Sidebar ── */}
                <div className="sv-sidebar">
                    <div
                        style={{
                            fontFamily: 'var(--font-barlow-condensed)',
                            fontSize: 11,
                            fontWeight: 600,
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            color: 'rgba(255,255,255,0.25)',
                            padding: '0 4px',
                            marginBottom: 10
                        }}>
                        All Services
                    </div>
                    {items.map((item, i) => {
                        const SIcon = item.icon
                        const isActive = active === i
                        return (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={`sv-sidebar-btn ${isActive ? 'sv-sidebar-active-blue' : ''}`}>
                                <div className={`sv-sidebar-icon ${isActive ? 'sv-sidebar-icon-active-blue' : ''}`}>
                                    <SIcon size={16} />
                                </div>
                                <span className="sv-sidebar-label">{item.title}</span>
                                {isActive && (
                                    <div
                                        style={{
                                            marginLeft: 'auto',
                                            width: 5,
                                            height: 5,
                                            borderRadius: '50%',
                                            background: 'oklch(0.623 0.214 259.815)',
                                            flexShrink: 0,
                                            boxShadow: '0 0 6px oklch(0.623 0.214 259.815)'
                                        }}
                                    />
                                )}
                            </button>
                        )
                    })}
                </div>
            </div>

            <SliderControls
                total={items.length}
                active={active}
                onPrev={() => setActive((i) => (i - 1 + items.length) % items.length)}
                onNext={() => setActive((i) => (i + 1) % items.length)}
                onDot={setActive}
                accentColor="oklch(0.623 0.214 259.815)"
            />
        </div>
    )
}

// ─── Products Panel ───────────────────────────────────────────────────────────

function ProductsPanel() {
    const [active, setActive] = useState(0)
    const product: Product = productsData[active]
    const ProductIcon = product.icon
    const isBlue = product.accent.includes('blue') || product.accent.includes('259')

    return (
        <div style={{ width: '100%', maxWidth: 1152, margin: '0 auto' }}>
            <div className="sv-row">
                {/* ── Main card ── */}
                <div
                    className="sv-main-card"
                    style={{ borderColor: isBlue ? 'rgba(99,102,241,0.28)' : 'rgba(213,145,0,0.25)' }}>
                    {/* Ghost product name watermark */}
                    <span
                        style={{
                            position: 'absolute',
                            bottom: -14,
                            right: 12,
                            fontFamily: 'var(--font-bebas)',
                            fontSize: 120,
                            lineHeight: 1,
                            letterSpacing: '-0.04em',
                            color: isBlue ? 'oklch(0.623 0.214 259.815)' : 'var(--amber)',
                            opacity: 0.04,
                            pointerEvents: 'none',
                            userSelect: 'none',
                            maxWidth: '90%',
                            overflow: 'hidden'
                        }}>
                        {product.name.split(' ')[0]}
                    </span>

                    {/* Dot grid — bottom right */}
                    <div style={{ position: 'absolute', bottom: 0, right: 0, pointerEvents: 'none' }}>
                        <DotGrid
                            color={isBlue ? 'oklch(0.623 0.214 259.815)' : 'var(--amber)'}
                            opacity={0.14}
                        />
                    </div>

                    {/* Glow orb */}
                    <div
                        style={{
                            position: 'absolute',
                            top: -80,
                            right: -60,
                            width: 300,
                            height: 300,
                            borderRadius: '50%',
                            background: isBlue ? 'oklch(0.623 0.214 259.815)' : 'var(--amber)',
                            filter: 'blur(100px)',
                            opacity: 0.14,
                            pointerEvents: 'none'
                        }}
                    />

                    {/* Corner brackets */}
                    <div style={{ position: 'absolute', top: 20, left: 20 }}>
                        <CornerBracket color={isBlue ? 'rgba(99,102,241,0.5)' : 'rgba(213,145,0,0.45)'} />
                    </div>
                    <div style={{ position: 'absolute', bottom: 20, right: 20, transform: 'rotate(180deg)' }}>
                        <CornerBracket color={isBlue ? 'rgba(99,102,241,0.5)' : 'rgba(213,145,0,0.45)'} />
                    </div>

                    {/* Content */}
                    <div style={{ position: 'relative', flex: 1, zIndex: 2 }}>
                        {/* Badge + Icon row */}
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 24 }}>
                            <div
                                style={{
                                    width: 56,
                                    height: 56,
                                    borderRadius: 14,
                                    background: isBlue ? 'rgba(99,102,241,0.14)' : 'rgba(213,145,0,0.14)',
                                    border: `1px solid ${isBlue ? 'rgba(99,102,241,0.32)' : 'rgba(213,145,0,0.3)'}`,
                                    backdropFilter: 'blur(8px)',
                                    boxShadow: '0 1px 0 rgba(255,255,255,0.1) inset',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: isBlue ? 'oklch(0.707 0.165 254.624)' : 'var(--amber)'
                                }}>
                                <ProductIcon size={26} />
                            </div>
                            <span
                                style={{
                                    padding: '4px 12px',
                                    borderRadius: 20,
                                    fontFamily: 'var(--font-barlow-condensed)',
                                    fontSize: 11,
                                    fontWeight: 700,
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    color: isBlue ? 'oklch(0.707 0.165 254.624)' : 'var(--amber)',
                                    background: isBlue ? 'rgba(99,102,241,0.14)' : 'rgba(213,145,0,0.14)',
                                    border: `1px solid ${isBlue ? 'rgba(99,102,241,0.3)' : 'rgba(213,145,0,0.28)'}`,
                                    backdropFilter: 'blur(8px)',
                                    boxShadow: '0 1px 0 rgba(255,255,255,0.08) inset'
                                }}>
                                {product.badge}
                            </span>
                        </div>

                        <h3
                            style={{
                                fontFamily: 'var(--font-bebas)',
                                fontSize: 'clamp(30px, 3.8vw, 44px)',
                                letterSpacing: '0.02em',
                                color: 'rgba(255,255,255,0.95)',
                                marginBottom: 4,
                                lineHeight: 1.05
                            }}>
                            {product.name}
                        </h3>
                        <p
                            style={{
                                fontFamily: 'var(--font-barlow-condensed)',
                                fontSize: 12,
                                fontWeight: 600,
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                color: isBlue ? 'oklch(0.707 0.165 254.624)' : 'var(--amber)',
                                marginBottom: 16
                            }}>
                            {product.tagline}
                        </p>
                        <p
                            style={{
                                fontFamily: 'var(--font-barlow)',
                                fontSize: 15,
                                color: 'rgba(255,255,255,0.38)',
                                lineHeight: 1.75,
                                marginBottom: 22
                            }}>
                            {product.description}
                        </p>

                        {/* Feature chips — glass */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 8 }}>
                            {product.features.map((f, i) => (
                                <span
                                    key={i}
                                    style={{
                                        padding: '4px 11px',
                                        borderRadius: 20,
                                        fontFamily: 'var(--font-barlow)',
                                        fontSize: 12,
                                        color: 'rgba(255,255,255,0.45)',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.09)',
                                        backdropFilter: 'blur(8px)',
                                        boxShadow: '0 1px 0 rgba(255,255,255,0.05) inset'
                                    }}>
                                    {f}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Stats + CTA */}
                    <div style={{ position: 'relative', marginTop: 28, zIndex: 2 }}>
                        <div
                            style={{
                                display: 'flex',
                                gap: 28,
                                padding: '16px 0',
                                marginBottom: 20,
                                borderTop: '1px solid rgba(255,255,255,0.07)',
                                borderBottom: '1px solid rgba(255,255,255,0.07)'
                            }}>
                            {product.stats.map((s, i) => (
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
                                            fontSize: 22,
                                            color: 'rgba(255,255,255,0.92)',
                                            letterSpacing: '0.04em'
                                        }}>
                                        {s.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className={`sv-cta-btn ${isBlue ? 'sv-cta-blue' : 'sv-cta-amber'}`}>
                            Learn More <IconArrowRight size={15} />
                        </button>
                    </div>
                </div>

                {/* ── Sidebar ── */}
                <div className="sv-sidebar">
                    <div
                        style={{
                            fontFamily: 'var(--font-barlow-condensed)',
                            fontSize: 11,
                            fontWeight: 600,
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            color: 'rgba(255,255,255,0.25)',
                            padding: '0 4px',
                            marginBottom: 10
                        }}>
                        All Products
                    </div>
                    {productsData.map((p, i) => {
                        const TabIcon = p.icon
                        const isActive = active === i
                        const isBlueProd = p.accent.includes('blue') || p.accent.includes('259')
                        return (
                            <button
                                key={p.id}
                                onClick={() => setActive(i)}
                                className={`sv-sidebar-btn ${isActive ? (isBlueProd ? 'sv-sidebar-active-blue' : 'sv-sidebar-active-amber') : ''}`}>
                                <div
                                    className={`sv-sidebar-icon ${isActive ? (isBlueProd ? 'sv-sidebar-icon-active-blue' : 'sv-sidebar-icon-active-amber') : ''}`}>
                                    <TabIcon size={16} />
                                </div>
                                <div style={{ overflow: 'hidden' }}>
                                    <div
                                        className="sv-sidebar-label"
                                        style={{ marginBottom: 1 }}>
                                        {p.name}
                                    </div>
                                    <div
                                        style={{
                                            fontFamily: 'var(--font-barlow)',
                                            fontSize: 11,
                                            color: 'rgba(255,255,255,0.25)',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        }}>
                                        {p.tagline}
                                    </div>
                                </div>
                                {isActive && (
                                    <div
                                        style={{
                                            marginLeft: 'auto',
                                            width: 5,
                                            height: 5,
                                            borderRadius: '50%',
                                            background: isBlueProd ? 'oklch(0.623 0.214 259.815)' : 'var(--amber)',
                                            flexShrink: 0,
                                            boxShadow: `0 0 6px ${isBlueProd ? 'oklch(0.623 0.214 259.815)' : 'var(--amber)'}`
                                        }}
                                    />
                                )}
                            </button>
                        )
                    })}
                </div>
            </div>

            <SliderControls
                total={productsData.length}
                active={active}
                onPrev={() => setActive((i) => (i - 1 + productsData.length) % productsData.length)}
                onNext={() => setActive((i) => (i + 1) % productsData.length)}
                onDot={setActive}
                accentColor={isBlue ? 'oklch(0.623 0.214 259.815)' : 'var(--amber)'}
            />
        </div>
    )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Services() {
    const [activeTab, setActiveTab] = useState<Tab>('products')
    const [fading, setFading] = useState(false)

    const switchTo = (tab: Tab) => {
        if (tab === activeTab) return
        setFading(true)
        setTimeout(() => {
            setActiveTab(tab)
            setFading(false)
        }, 240)
    }

    return (
        <section
            id="services"
            style={{ background: 'transparent', color: 'var(--white)', padding: '80px 20px', position: 'relative', overflow: 'hidden' }}>
            <style>{`
                /* ══ GLASS SYSTEM ══════════════════════════════════════════ */

                /* Main content card */
                .sv-main-card {
                    flex: 1 1 340px;
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
                    min-height: 480px;
                    transition: border-color 0.3s, box-shadow 0.3s;
                    isolation: isolate;
                }
                /* top shimmer */
                .sv-main-card::before {
                    content: '';
                    position: absolute; top: 0; left: 10%; right: 10%; height: 1px;
                    background: linear-gradient(90deg,transparent,rgba(255,255,255,0.18) 40%,rgba(255,255,255,0.18) 60%,transparent);
                    pointer-events: none; z-index: 10;
                }
                /* noise grain */
                .sv-main-card::after {
                    content: '';
                    position: absolute; inset: 0; border-radius: inherit;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
                    background-size: 200px 200px; pointer-events: none; opacity: 0.55; z-index: 1;
                }
                .sv-main-card:hover {
                    box-shadow:
                        0 0 0 1px rgba(255,255,255,0.06) inset,
                        0 1px 0 rgba(255,255,255,0.16) inset,
                        0 32px 80px rgba(0,0,0,0.52),
                        0 0 36px rgba(99,102,241,0.1),
                        0 8px 24px rgba(0,0,0,0.35);
                }

                /* ── Layout ── */
                .sv-row {
                    display: flex; flex-direction: row; gap: 24px;
                    align-items: stretch; flex-wrap: wrap;
                }
                .sv-sidebar {
                    display: flex; flex-direction: column; gap: 5px;
                    width: 268px; flex-shrink: 0;
                    max-height: 520px; overflow-y: auto;
                    scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.08) transparent;
                }
                @media (max-width: 860px) {
                    .sv-row { flex-direction: column; }
                    .sv-sidebar { width: 100%; flex-direction: row; flex-wrap: wrap; max-height: none; overflow: visible; }
                    .sv-sidebar-btn { flex: 0 0 auto; }
                }

                /* ── Sidebar buttons — glass ── */
                .sv-sidebar-btn {
                    display: flex; align-items: center; gap: 10px;
                    padding: 10px 12px; border-radius: 10px;
                    border: 1px solid rgba(255,255,255,0.06);
                    background: rgba(255,255,255,0.03);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    box-shadow: 0 1px 0 rgba(255,255,255,0.05) inset;
                    cursor: pointer; text-align: left;
                    transition: background 0.18s, border-color 0.18s;
                    width: 100%;
                }
                .sv-sidebar-btn:hover {
                    background: rgba(255,255,255,0.07);
                    border-color: rgba(255,255,255,0.12);
                }
                .sv-sidebar-active-blue {
                    background: linear-gradient(135deg,rgba(99,102,241,0.18),rgba(99,102,241,0.08)) !important;
                    border-color: rgba(99,102,241,0.38) !important;
                    box-shadow: 0 1px 0 rgba(255,255,255,0.1) inset, 0 0 14px rgba(99,102,241,0.1) !important;
                }
                .sv-sidebar-active-amber {
                    background: linear-gradient(135deg,rgba(213,145,0,0.18),rgba(213,145,0,0.07)) !important;
                    border-color: rgba(213,145,0,0.35) !important;
                    box-shadow: 0 1px 0 rgba(255,255,255,0.08) inset !important;
                }

                /* sidebar icon — glass */
                .sv-sidebar-icon {
                    width: 32px; height: 32px; border-radius: 8px; flex-shrink: 0;
                    background: rgba(255,255,255,0.06);
                    border: 1px solid rgba(255,255,255,0.08);
                    backdrop-filter: blur(8px);
                    box-shadow: 0 1px 0 rgba(255,255,255,0.06) inset;
                    display: flex; align-items: center; justify-content: center;
                    color: rgba(255,255,255,0.3);
                    transition: background 0.18s, color 0.18s, border-color 0.18s;
                }
                .sv-sidebar-icon-active-blue  { background: rgba(99,102,241,0.18) !important; border-color: rgba(99,102,241,0.35) !important; color: oklch(0.707 0.165 254.624) !important; }
                .sv-sidebar-icon-active-amber { background: rgba(213,145,0,0.18) !important;  border-color: rgba(213,145,0,0.32) !important;  color: var(--amber) !important; }

                .sv-sidebar-label {
                    font-family: var(--font-barlow); font-size: 13px; font-weight: 600;
                    color: rgba(255,255,255,0.5);
                    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
                    transition: color 0.18s;
                }
                .sv-sidebar-active-blue .sv-sidebar-label,
                .sv-sidebar-active-amber .sv-sidebar-label { color: rgba(255,255,255,0.92); }

                /* ── CTA buttons — glass ── */
                .sv-cta-btn {
                    display: inline-flex; align-items: center; gap: 8px;
                    padding: 11px 24px; border-radius: 10px;
                    font-family: var(--font-barlow-condensed);
                    font-size: 14px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
                    cursor: pointer; backdrop-filter: blur(8px);
                    box-shadow: 0 1px 0 rgba(255,255,255,0.1) inset;
                    transition: opacity 0.2s, transform 0.2s;
                }
                .sv-cta-btn:hover { opacity: 0.88; transform: translateX(3px); }
                .sv-cta-blue  {
                    background: linear-gradient(135deg,rgba(99,102,241,0.22),rgba(99,102,241,0.1));
                    border: 1px solid rgba(99,102,241,0.38); color: oklch(0.707 0.165 254.624);
                    box-shadow: 0 1px 0 rgba(255,255,255,0.1) inset, 0 0 20px rgba(99,102,241,0.12);
                }
                .sv-cta-amber {
                    background: linear-gradient(135deg,rgba(213,145,0,0.22),rgba(213,145,0,0.1));
                    border: 1px solid rgba(213,145,0,0.35); color: var(--amber);
                    box-shadow: 0 1px 0 rgba(255,255,255,0.08) inset;
                }

                /* ── Slider control buttons — glass ── */
                .sv-ctrl-btn {
                    width: 36px; height: 36px; border-radius: 50%;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.09);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    box-shadow: 0 1px 0 rgba(255,255,255,0.07) inset;
                    color: rgba(255,255,255,0.35);
                    display: flex; align-items: center; justify-content: center; cursor: pointer;
                    transition: border-color 0.2s, color 0.2s, background 0.2s;
                }
                .sv-ctrl-btn:hover {
                    border-color: rgba(99,102,241,0.4); color: rgba(255,255,255,0.85);
                    background: rgba(99,102,241,0.12);
                }

                /* ── Tab switcher — glass ── */
                .sv-tab-track {
                    display: flex; gap: 4px; padding: 4px;
                    border-radius: 14px;
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.08);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    box-shadow: 0 1px 0 rgba(255,255,255,0.07) inset;
                }
                .sv-tab-btn {
                    position: relative; overflow: hidden;
                    padding: 10px 26px; border-radius: 10px;
                    border: 1px solid transparent; background: transparent;
                    font-family: var(--font-barlow-condensed);
                    font-size: 14px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
                    color: rgba(255,255,255,0.35); cursor: pointer;
                    transition: color 0.2s, background 0.2s, border-color 0.2s; white-space: nowrap;
                }
                .sv-tab-btn:hover:not(.sv-tab-active) {
                    color: rgba(255,255,255,0.7);
                    background: rgba(255,255,255,0.06);
                }
                .sv-tab-active {
                    background: linear-gradient(135deg,rgba(99,102,241,0.22),rgba(99,102,241,0.1)) !important;
                    border-color: rgba(99,102,241,0.4) !important;
                    color: rgba(255,255,255,0.95) !important;
                    box-shadow: 0 1px 0 rgba(255,255,255,0.1) inset !important;
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
            <div style={{ textAlign: 'center', marginBottom: 52, position: 'relative', zIndex: 1 }}>
                <Badge
                    variant="outline"
                    className="mb-5 text-white text-xl">
                    {servicesData.badgeTitle}
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
                    {servicesData.heading}
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
                    {servicesData.description}
                </p>
            </div>

            {/* ── Tab switcher ── */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 48, position: 'relative', zIndex: 1 }}>
                <div className="sv-tab-track">
                    {TABS.map(({ key, label }) => (
                        <button
                            key={key}
                            onClick={() => switchTo(key)}
                            onMouseEnter={() => switchTo(key)}
                            className={`sv-tab-btn ${activeTab === key ? 'sv-tab-active' : ''}`}>
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            {/* ── Content ── */}
            <div
                style={{
                    opacity: fading ? 0 : 1,
                    transform: fading ? 'translateY(8px)' : 'translateY(0)',
                    transition: 'opacity 0.24s ease, transform 0.24s ease',
                    position: 'relative',
                    zIndex: 1
                }}>
                {activeTab === 'services' && <ServicesPanel />}
                {activeTab === 'products' && <ProductsPanel />}
            </div>

            {/* ── Tab-level nav dots ── */}
            <SliderControls
                total={TABS.length}
                active={TABS.findIndex((t) => t.key === activeTab)}
                onPrev={() => switchTo('products')}
                onNext={() => switchTo('services')}
                onDot={(i) => switchTo(TABS[i].key)}
                accentColor="oklch(0.623 0.214 259.815)"
            />
        </section>
    )
}
