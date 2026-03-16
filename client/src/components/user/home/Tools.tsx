import { animate, motion, useMotionValue } from 'motion/react'
import React, { useEffect, useState, type CSSProperties } from 'react'
import useMeasure from 'react-use-measure'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { toolsData } from '@/constants/tools'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// ─── InfiniteSlider (unchanged) ───────────────────────────────────────────────

type InfiniteSliderProps = {
    children: React.ReactNode
    gap?: number
    speed?: number
    speedOnHover?: number
    direction?: 'horizontal' | 'vertical'
    reverse?: boolean
    className?: string
}

function InfiniteSlider({
    children,
    gap = 16,
    speed = 100,
    speedOnHover,
    direction = 'horizontal',
    reverse = false,
    className
}: InfiniteSliderProps) {
    const [currentSpeed, setCurrentSpeed] = useState(speed)
    const [ref, { width, height }] = useMeasure()
    const translation = useMotionValue(0)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [key, setKey] = useState(0)

    useEffect(() => {
        let controls
        const size = direction === 'horizontal' ? width : height
        if (size === 0) return
        const contentSize = size + gap
        const from = reverse ? -contentSize / 2 : 0
        const to = reverse ? 0 : -contentSize / 2
        const duration = Math.abs(to - from) / currentSpeed
        if (isTransitioning) {
            controls = animate(translation, [translation.get(), to], {
                ease: 'linear',
                duration: Math.abs(translation.get() - to) / currentSpeed,
                onComplete: () => {
                    setIsTransitioning(false)
                    setKey((k) => k + 1)
                }
            })
        } else {
            controls = animate(translation, [from, to], {
                ease: 'linear',
                duration,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0,
                onRepeat: () => {
                    translation.set(from)
                }
            })
        }
        return () => controls?.stop()
    }, [key, translation, currentSpeed, width, height, gap, isTransitioning, direction, reverse])

    const hoverProps = speedOnHover
        ? {
              onHoverStart: () => {
                  setIsTransitioning(true)
                  setCurrentSpeed(speedOnHover)
              },
              onHoverEnd: () => {
                  setIsTransitioning(true)
                  setCurrentSpeed(speed)
              }
          }
        : {}

    return (
        <div className={cn('overflow-x-hidden overflow-y-visible', className)}>
            <motion.div
                className="flex w-max"
                style={{
                    ...(direction === 'horizontal' ? { x: translation } : { y: translation }),
                    gap: `${gap}px`,
                    flexDirection: direction === 'horizontal' ? 'row' : 'column'
                }}
                ref={ref}
                {...hoverProps}>
                {children}
                {children}
            </motion.div>
        </div>
    )
}

export type BlurredInfiniteSliderProps = InfiniteSliderProps & {
    fadeWidth?: number
    containerClassName?: string
}

export function BlurredInfiniteSlider({ children, fadeWidth = 80, containerClassName, ...sliderProps }: BlurredInfiniteSliderProps) {
    const maskStyle: CSSProperties = {
        maskImage: `linear-gradient(to right, transparent, black ${fadeWidth}px, black calc(100% - ${fadeWidth}px), transparent)`,
        WebkitMaskImage: `linear-gradient(to right, transparent, black ${fadeWidth}px, black calc(100% - ${fadeWidth}px), transparent)`
    }
    return (
        <div
            className={cn('relative w-full', containerClassName)}
            style={maskStyle}>
            <InfiniteSlider {...sliderProps}>{children}</InfiniteSlider>
        </div>
    )
}

// ─── Row config ───────────────────────────────────────────────────────────────

const rows = [
    { data: toolsData.row1, label: toolsData.rowLabels.row1, sub: '10 technologies', reverse: false, speed: 36 },
    { data: toolsData.row2, label: toolsData.rowLabels.row2, sub: '10 technologies', reverse: true, speed: 42 },
    { data: toolsData.row3, label: toolsData.rowLabels.row3, sub: '15 technologies', reverse: false, speed: 34 }
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function LogoCloudDemoPage() {
    return (
        <section className="w-full bg-black overflow-x-hidden py-20">
            <style>{`
                /* ── Icon ── */
                .tl-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    color: white;
                    opacity: 0.38;
                    filter: grayscale(1) brightness(0.9);
                    transition: opacity 0.3s ease, filter 0.3s ease;
                    cursor: default;
                }
                .tl-icon:hover {
                    opacity: 1;
                    filter: grayscale(0) brightness(1.2);
                }

                /* ── Row wrapper ── */
                .tl-row {
                    display: flex;
                    align-items: center;
                    gap: 0;
                }

                /* ── Left label block ── */
                .tl-left {
                    flex-shrink: 0;
                    width: 180px;
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    padding-right: 20px;
                }

                /* Vertical accent bar */
                .tl-bar {
                    width: 2px;
                    height: 44px;
                    border-radius: 1px;
                    background: linear-gradient(
                        to bottom,
                        transparent,
                        oklch(0.623 0.214 259.815 / 0.7) 40%,
                        oklch(0.623 0.214 259.815 / 0.7) 60%,
                        transparent
                    );
                    flex-shrink: 0;
                }

                .tl-label-text {
                    display: flex;
                    flex-direction: column;
                    gap: 3px;
                }
                .tl-label-title {
                    font-family: var(--font-barlow-condensed);
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.5);
                    line-height: 1.2;
                }
                .tl-label-sub {
                    font-family: var(--font-barlow);
                    font-size: 10px;
                    color: rgba(255,255,255,0.2);
                    letter-spacing: 0.04em;
                }

                /* ── Horizontal rule between rows ── */
                .tl-divider {
                    height: 1px;
                    background: linear-gradient(
                        90deg,
                        transparent 0%,
                        rgba(255,255,255,0.06) 20%,
                        rgba(255,255,255,0.06) 80%,
                        transparent 100%
                    );
                    margin: 0 0;
                }
            `}</style>

            {/* ── Section header ── */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 16,
                    marginBottom: 40
                }}>
                <div style={{ height: 1, width: 60, background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.15))' }} />
                <p
                    style={{
                        fontFamily: 'var(--font-barlow-condensed)',
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.25)',
                        whiteSpace: 'nowrap'
                    }}>
                    {toolsData.heading}
                </p>
                <div style={{ height: 1, width: 60, background: 'linear-gradient(to left, transparent, rgba(255,255,255,0.15))' }} />
            </div>

            {/* ── Rows ── */}
            <div style={{ maxWidth: 1400, margin: '0 auto' }}>
                {rows.map((row, ri) => (
                    <React.Fragment key={ri}>
                        <div className="tl-row">
                            {/* Left: vertical bar + label */}
                            <div className="tl-left">
                                <div className="tl-bar" />
                                <div className="tl-label-text">
                                    <span className="tl-label-title">{row.label}</span>
                                    <span className="tl-label-sub">{row.sub}</span>
                                </div>
                            </div>

                            {/* Slider */}
                            <div
                                style={{
                                    flex: 1,
                                    minWidth: 0,
                                    /* overflow must be visible vertically so hover lift isn't clipped */
                                    overflowX: 'hidden',
                                    overflowY: 'visible',
                                    maskImage: 'linear-gradient(to right, transparent 0%, black 80px, black calc(100% - 80px), transparent 100%)',
                                    WebkitMaskImage:
                                        'linear-gradient(to right, transparent 0%, black 80px, black calc(100% - 80px), transparent 100%)',
                                    paddingTop: 12,
                                    paddingBottom: 12
                                }}>
                                <InfiniteSlider
                                    speedOnHover={10}
                                    speed={row.speed}
                                    gap={52}
                                    reverse={row.reverse}>
                                    {row.data.map((logo) => (
                                        <div
                                            key={logo.id}
                                            className="tl-icon"
                                            title={logo.iconName}>
                                            <logo.icon size={36} />
                                        </div>
                                    ))}
                                </InfiniteSlider>
                            </div>
                        </div>

                        {/* Divider between rows */}
                        {ri < rows.length - 1 && (
                            <div
                                className="tl-divider"
                                style={{ margin: '20px 0 20px 180px' }}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}
