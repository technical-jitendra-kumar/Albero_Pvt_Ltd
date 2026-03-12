'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { servicesData, productsData } from '@/constants/services'
import type { Product, ServiceFeature } from '@/constants/services'
import { IconArrowRight, IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

// ─── Types ────────────────────────────────────────────────────────────────────

type Tab = 'services' | 'products'

const TABS: { key: Tab; label: string }[] = [
    { key: 'services', label: '⚙️  Development Services' },
    { key: 'products', label: '📦  Our Products' }
]

// ─── Dot-grid SVG graphic (shared decoration) ─────────────────────────────────

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
                opacity="0.6"
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
                            background: active === i ? accentColor : 'var(--border)',
                            cursor: 'pointer',
                            transition: 'width 0.3s, background 0.3s'
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
                    {/* Background: large ghost number */}
                    <span
                        style={{
                            position: 'absolute',
                            bottom: -20,
                            right: 16,
                            fontFamily: 'var(--font-bebas)',
                            fontSize: 180,
                            lineHeight: 1,
                            letterSpacing: '-0.04em',
                            color: 'var(--blue-vivid)',
                            opacity: 0.04,
                            pointerEvents: 'none',
                            userSelect: 'none'
                        }}>
                        {String(active + 1).padStart(2, '0')}
                    </span>

                    {/* Background: dot grid — top right */}
                    <div style={{ position: 'absolute', top: 0, right: 0, pointerEvents: 'none' }}>
                        <DotGrid
                            color="var(--blue-vivid)"
                            opacity={0.14}
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
                            background: 'var(--blue-vivid)',
                            filter: 'blur(90px)',
                            opacity: 0.08,
                            pointerEvents: 'none'
                        }}
                    />

                    {/* Top-right corner bracket */}
                    <div style={{ position: 'absolute', top: 20, right: 20, transform: 'rotate(90deg)' }}>
                        <CornerBracket color="var(--blue-vivid)" />
                    </div>
                    {/* Bottom-left corner bracket */}
                    <div style={{ position: 'absolute', bottom: 20, left: 20, transform: 'rotate(270deg)' }}>
                        <CornerBracket color="var(--blue-vivid)" />
                    </div>

                    {/* Content */}
                    <div style={{ position: 'relative', flex: 1 }}>
                        {/* Index + Icon row */}
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
                            <div
                                style={{
                                    width: 56,
                                    height: 56,
                                    borderRadius: 14,
                                    background: 'oklch(0.623 0.214 259.815 / 0.12)',
                                    border: '1px solid var(--border-blu)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--blue-vivid)'
                                }}>
                                <ServiceIcon size={26} />
                            </div>
                            <span
                                style={{
                                    fontFamily: 'var(--font-bebas)',
                                    fontSize: 15,
                                    letterSpacing: '0.12em',
                                    color: 'var(--blue-vivid)',
                                    opacity: 0.7
                                }}>
                                {idxLabel}
                            </span>
                        </div>

                        {/* Category chip */}
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
                                color: 'var(--blue-soft)',
                                background: 'oklch(0.623 0.214 259.815 / 0.08)',
                                border: '1px solid oklch(0.623 0.214 259.815 / 0.18)'
                            }}>
                            Development Service
                        </span>

                        <h3
                            style={{
                                fontFamily: 'var(--font-bebas)',
                                fontSize: 'clamp(28px, 3.5vw, 40px)',
                                letterSpacing: '0.02em',
                                color: 'var(--white)',
                                marginBottom: 14,
                                lineHeight: 1.05
                            }}>
                            {service.title}
                        </h3>

                        <p
                            style={{
                                fontFamily: 'var(--font-barlow)',
                                fontSize: 15,
                                color: 'var(--grey-mid)',
                                lineHeight: 1.75,
                                marginBottom: 32
                            }}>
                            {service.description}
                        </p>

                        {/* Decorative divider */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                            <div style={{ height: 1, flex: 1, background: 'var(--border)' }} />
                            <span
                                style={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: '50%',
                                    background: 'var(--blue-vivid)',
                                    opacity: 0.5
                                }}
                            />
                            <div style={{ height: 1, width: 32, background: 'var(--blue-vivid)', opacity: 0.3 }} />
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
                                            color: 'var(--grey-mid)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em',
                                            marginBottom: 4
                                        }}>
                                        {s.label}
                                    </div>
                                    <div style={{ fontFamily: 'var(--font-bebas)', fontSize: 20, color: 'var(--white)', letterSpacing: '0.04em' }}>
                                        {s.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div style={{ position: 'relative', marginTop: 36 }}>
                        <button className="sv-cta-btn sv-cta-blue">
                            Get Started <IconArrowRight size={15} />
                        </button>
                    </div>
                </div>

                {/* ── Sidebar ── */}
                <div className="sv-sidebar">
                    {/* Sidebar header */}
                    <div
                        style={{
                            fontFamily: 'var(--font-barlow-condensed)',
                            fontSize: 11,
                            fontWeight: 600,
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            color: 'var(--grey-mid)',
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
                                            background: 'var(--blue-vivid)',
                                            flexShrink: 0
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
                accentColor="var(--blue-vivid)"
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
                    style={{ borderColor: isBlue ? 'oklch(0.623 0.214 259.815 / 0.2)' : 'oklch(0.795 0.184 86.047 / 0.2)' }}>
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
                            color: isBlue ? 'var(--blue-vivid)' : 'var(--amber)',
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
                            color={isBlue ? 'var(--blue-vivid)' : 'var(--amber)'}
                            opacity={0.16}
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
                            background: isBlue ? 'var(--blue-vivid)' : 'var(--amber)',
                            filter: 'blur(100px)',
                            opacity: 0.12,
                            pointerEvents: 'none'
                        }}
                    />

                    {/* Corner bracket — top left */}
                    <div style={{ position: 'absolute', top: 20, left: 20 }}>
                        <CornerBracket color={isBlue ? 'var(--blue-vivid)' : 'var(--amber)'} />
                    </div>
                    {/* Corner bracket — bottom right */}
                    <div style={{ position: 'absolute', bottom: 20, right: 20, transform: 'rotate(180deg)' }}>
                        <CornerBracket color={isBlue ? 'var(--blue-vivid)' : 'var(--amber)'} />
                    </div>

                    {/* Content */}
                    <div style={{ position: 'relative', flex: 1 }}>
                        {/* Badge + Icon row */}
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 24 }}>
                            <div
                                style={{
                                    width: 56,
                                    height: 56,
                                    borderRadius: 14,
                                    background: product.accentBg,
                                    border: `1px solid ${isBlue ? 'var(--border-blu)' : 'oklch(0.795 0.184 86.047 / 0.25)'}`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: product.accent
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
                                    color: isBlue ? 'var(--blue-vivid)' : 'var(--amber)',
                                    background: product.accentBg,
                                    border: `1px solid ${isBlue ? 'oklch(0.623 0.214 259.815 / 0.2)' : 'oklch(0.795 0.184 86.047 / 0.2)'}`
                                }}>
                                {product.badge}
                            </span>
                        </div>

                        <h3
                            style={{
                                fontFamily: 'var(--font-bebas)',
                                fontSize: 'clamp(30px, 3.8vw, 44px)',
                                letterSpacing: '0.02em',
                                color: 'var(--white)',
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
                                color: isBlue ? 'var(--blue-soft)' : 'var(--amber)',
                                marginBottom: 16
                            }}>
                            {product.tagline}
                        </p>
                        <p
                            style={{
                                fontFamily: 'var(--font-barlow)',
                                fontSize: 15,
                                color: 'var(--grey-mid)',
                                lineHeight: 1.75,
                                marginBottom: 22
                            }}>
                            {product.description}
                        </p>

                        {/* Feature chips */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 8 }}>
                            {product.features.map((f, i) => (
                                <span
                                    key={i}
                                    style={{
                                        padding: '4px 11px',
                                        borderRadius: 20,
                                        fontFamily: 'var(--font-barlow)',
                                        fontSize: 12,
                                        color: 'var(--grey-mid)',
                                        background: 'var(--bg-mid)',
                                        border: '1px solid var(--border)'
                                    }}>
                                    {f}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Stats + CTA */}
                    <div style={{ position: 'relative', marginTop: 28 }}>
                        <div
                            style={{
                                display: 'flex',
                                gap: 28,
                                padding: '16px 0',
                                marginBottom: 20,
                                borderTop: '1px solid var(--border)',
                                borderBottom: '1px solid var(--border)'
                            }}>
                            {product.stats.map((s, i) => (
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
                                    <div style={{ fontFamily: 'var(--font-bebas)', fontSize: 22, color: 'var(--white)', letterSpacing: '0.04em' }}>
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
                            color: 'var(--grey-mid)',
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
                                            color: 'var(--grey-mid)',
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
                                            background: isBlueProd ? 'var(--blue-vivid)' : 'var(--amber)',
                                            flexShrink: 0
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
                accentColor={isBlue ? 'var(--blue-vivid)' : 'var(--amber)'}
            />
        </div>
    )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Services() {
    const [activeTab, setActiveTab] = useState<Tab>('services')
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
            style={{ background: 'var(--black)', color: 'var(--white)', padding: '80px 20px' }}>
            {/* Scoped styles */}
            <style>{`
                /* ── Layout ── */
                .sv-row {
                    display: flex;
                    flex-direction: row;
                    gap: 24px;
                    align-items: stretch;
                    flex-wrap: wrap;
                }
                .sv-main-card {
                    flex: 1 1 340px;
                    background: var(--bg-2);
                    border: 1px solid var(--border);
                    border-radius: 20px;
                    padding: 36px 32px;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    min-height: 480px;
                    transition: border-color 0.3s;
                }
                .sv-sidebar {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    width: 268px;
                    flex-shrink: 0;
                    max-height: 520px;
                    overflow-y: auto;
                    scrollbar-width: thin;
                    scrollbar-color: var(--border) transparent;
                }
                @media (max-width: 860px) {
                    .sv-row { flex-direction: column; }
                    .sv-sidebar { width: 100%; flex-direction: row; flex-wrap: wrap; max-height: none; overflow: visible; }
                    .sv-sidebar-btn { flex: 0 0 auto; }
                }

                /* ── Sidebar buttons ── */
                .sv-sidebar-btn {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 10px 12px;
                    border-radius: 10px;
                    border: 1px solid transparent;
                    background: transparent;
                    cursor: pointer;
                    text-align: left;
                    transition: background 0.18s, border-color 0.18s;
                    width: 100%;
                }
                .sv-sidebar-btn:hover {
                    background: var(--bg-card);
                    border-color: var(--border);
                }
                .sv-sidebar-active-blue {
                    background: oklch(0.623 0.214 259.815 / 0.10) !important;
                    border-color: var(--border-blu) !important;
                }
                .sv-sidebar-active-amber {
                    background: oklch(0.795 0.184 86.047 / 0.10) !important;
                    border-color: oklch(0.795 0.184 86.047 / 0.25) !important;
                }
                .sv-sidebar-icon {
                    width: 32px; height: 32px; border-radius: 8px; flex-shrink: 0;
                    background: var(--bg-mid);
                    display: flex; align-items: center; justify-content: center;
                    color: var(--grey-mid);
                    transition: background 0.18s, color 0.18s;
                }
                .sv-sidebar-icon-active-blue {
                    background: oklch(0.623 0.214 259.815 / 0.15) !important;
                    color: var(--blue-vivid) !important;
                }
                .sv-sidebar-icon-active-amber {
                    background: oklch(0.795 0.184 86.047 / 0.15) !important;
                    color: var(--amber) !important;
                }
                .sv-sidebar-label {
                    font-family: var(--font-barlow);
                    font-size: 13px;
                    font-weight: 600;
                    color: var(--grey-light);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    transition: color 0.18s;
                }
                .sv-sidebar-active-blue .sv-sidebar-label,
                .sv-sidebar-active-amber .sv-sidebar-label {
                    color: var(--white);
                }

                /* ── CTA buttons ── */
                .sv-cta-btn {
                    display: inline-flex; align-items: center; gap: 8px;
                    padding: 11px 24px; border-radius: 10px;
                    font-family: var(--font-barlow-condensed);
                    font-size: 14px; font-weight: 700; letter-spacing: 0.06em;
                    text-transform: uppercase; cursor: pointer;
                    transition: opacity 0.2s, transform 0.2s;
                }
                .sv-cta-btn:hover { opacity: 0.82; transform: translateX(3px); }
                .sv-cta-blue {
                    background: oklch(0.623 0.214 259.815 / 0.14);
                    border: 1px solid var(--border-blu);
                    color: var(--blue-vivid);
                }
                .sv-cta-amber {
                    background: oklch(0.795 0.184 86.047 / 0.14);
                    border: 1px solid oklch(0.795 0.184 86.047 / 0.3);
                    color: var(--amber);
                }

                /* ── Slider control buttons ── */
                .sv-ctrl-btn {
                    width: 36px; height: 36px; border-radius: 50%;
                    border: 1px solid var(--border);
                    background: var(--bg-2);
                    color: var(--grey-mid);
                    display: flex; align-items: center; justify-content: center;
                    cursor: pointer;
                    transition: border-color 0.2s, color 0.2s, background 0.2s;
                }
                .sv-ctrl-btn:hover {
                    border-color: rgba(255,255,255,0.18);
                    color: var(--white);
                    background: var(--bg-mid);
                }

                /* ── Tab switcher ── */
                .sv-tab-track {
                    display: flex; gap: 4px; padding: 4px;
                    border-radius: 14px;
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                }
                .sv-tab-btn {
                    position: relative; overflow: hidden;
                    padding: 10px 26px; border-radius: 10px;
                    border: 1px solid transparent;
                    background: transparent;
                    font-family: var(--font-barlow-condensed);
                    font-size: 14px; font-weight: 700;
                    letter-spacing: 0.06em; text-transform: uppercase;
                    color: var(--grey-mid); cursor: pointer;
                    transition: color 0.2s, background 0.2s, border-color 0.2s;
                    white-space: nowrap;
                }
                .sv-tab-btn:hover:not(.sv-tab-active) {
                    color: var(--grey-light);
                    background: var(--bg-2);
                }
                .sv-tab-active {
                    background: oklch(0.623 0.214 259.815 / 0.12) !important;
                    border-color: var(--border-blu) !important;
                    color: var(--white) !important;
                }
            `}</style>

            {/* ── Header ── */}
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
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
                        color: 'var(--white)',
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
                        color: 'var(--grey-mid)',
                        maxWidth: 540,
                        margin: '0 auto',
                        lineHeight: 1.75
                    }}>
                    {servicesData.description}
                </p>
            </div>

            {/* ── Tab switcher ── */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 48 }}>
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
                    transition: 'opacity 0.24s ease, transform 0.24s ease'
                }}>
                {activeTab === 'services' && <ServicesPanel />}
                {activeTab === 'products' && <ProductsPanel />}
            </div>

            {/* ── Tab-level nav dots ── */}
            <SliderControls
                total={TABS.length}
                active={TABS.findIndex((t) => t.key === activeTab)}
                onPrev={() => switchTo('services')}
                onNext={() => switchTo('products')}
                onDot={(i) => switchTo(TABS[i].key)}
                accentColor="var(--blue-vivid)"
            />
        </section>
    )
}
