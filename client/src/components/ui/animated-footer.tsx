import React, { useEffect, useRef } from 'react'
import { CopyrightIcon } from 'lucide-react'

interface LinkItem {
    href: string
    label: string
}

interface FooterProps {
    leftLinks: LinkItem[]
    rightLinks: LinkItem[]
    copyrightText: string
}

const Footer: React.FC<FooterProps> = ({ leftLinks, rightLinks, copyrightText }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const rafRef = useRef<number>(0)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')!
        let width = 0
        const height = 220
        let time = 0

        function resize() {
            width = window.innerWidth
            canvas!.width = width
            canvas!.height = height
        }

        resize()
        window.addEventListener('resize', resize)

        // Wave config
        const waves = [
            { amp: 32, freq: 0.01, speed: 0.022, opacity: 0.55, yBase: 0.52 },
            { amp: 22, freq: 0.016, speed: 0.016, opacity: 0.4, yBase: 0.58 },
            { amp: 14, freq: 0.022, speed: 0.011, opacity: 0.28, yBase: 0.64 }
        ]

        // Particles on wave surface
        const particles: { x: number; waveIdx: number; speed: number; size: number; alpha: number }[] = []
        for (let i = 0; i < 55; i++) {
            particles.push({
                x: Math.random() * 2000,
                waveIdx: Math.floor(Math.random() * waves.length),
                speed: 0.6 + Math.random() * 1.2,
                size: 1.2 + Math.random() * 2,
                alpha: 0.4 + Math.random() * 0.6
            })
        }

        function getWaveY(x: number, wave: (typeof waves)[0]) {
            return height * wave.yBase + Math.sin(x * wave.freq + time * wave.speed * 50) * wave.amp
        }

        function drawWaves() {
            waves.forEach((wave, wi) => {
                // Draw filled wave
                ctx.beginPath()
                for (let x = 0; x <= width; x += 2) {
                    const y = getWaveY(x, wave)
                    if (x === 0) ctx.moveTo(x, y)
                    else ctx.lineTo(x, y)
                }
                ctx.lineTo(width, height)
                ctx.lineTo(0, height)
                ctx.closePath()

                const grad = ctx.createLinearGradient(0, height * wave.yBase - wave.amp, 0, height)
                grad.addColorStop(0, `rgba(43,127,255,${wave.opacity})`)
                grad.addColorStop(0.5, `rgba(30,90,220,${wave.opacity * 0.7})`)
                grad.addColorStop(1, `rgba(10,30,80,${wave.opacity * 0.4})`)
                ctx.fillStyle = grad
                ctx.fill()

                // Draw glowing wave edge line
                ctx.beginPath()
                for (let x = 0; x <= width; x += 2) {
                    const y = getWaveY(x, wave)
                    if (x === 0) ctx.moveTo(x, y)
                    else ctx.lineTo(x, y)
                }
                ctx.strokeStyle = `rgba(80,160,255,${wave.opacity * 0.9})`
                ctx.lineWidth = wi === 0 ? 1.5 : 1
                ctx.shadowBlur = wi === 0 ? 8 : 4
                ctx.shadowColor = 'rgba(43,127,255,0.8)'
                ctx.stroke()
                ctx.shadowBlur = 0
            })
        }

        function drawParticles() {
            particles.forEach((p) => {
                p.x += p.speed
                if (p.x > width + 20) p.x = -20

                const wave = waves[p.waveIdx]
                const y = getWaveY(p.x, wave)

                // Glowing dot
                const grad = ctx.createRadialGradient(p.x, y, 0, p.x, y, p.size * 3)
                grad.addColorStop(0, `rgba(150,210,255,${p.alpha})`)
                grad.addColorStop(0.4, `rgba(43,127,255,${p.alpha * 0.6})`)
                grad.addColorStop(1, `rgba(43,127,255,0)`)

                ctx.beginPath()
                ctx.arc(p.x, y, p.size, 0, Math.PI * 2)
                ctx.fillStyle = grad
                ctx.shadowBlur = 10
                ctx.shadowColor = 'rgba(43,127,255,0.9)'
                ctx.fill()
                ctx.shadowBlur = 0
            })
        }

        function drawAmbientGlow() {
            // Wide bottom glow
            const grad = ctx.createRadialGradient(width / 2, height * 0.7, 0, width / 2, height * 0.7, width * 0.55)
            grad.addColorStop(0, 'rgba(43,100,255,0.12)')
            grad.addColorStop(0.5, 'rgba(20,60,180,0.06)')
            grad.addColorStop(1, 'rgba(0,0,0,0)')
            ctx.fillStyle = grad
            ctx.fillRect(0, 0, width, height)
        }

        function animate() {
            ctx.clearRect(0, 0, width, height)
            drawAmbientGlow()
            drawWaves()
            drawParticles()
            time += 0.016
            rafRef.current = requestAnimationFrame(animate)
        }

        rafRef.current = requestAnimationFrame(animate)

        return () => {
            cancelAnimationFrame(rafRef.current)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
        <footer
            style={{
                background: '#000',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                position: 'relative',
                zIndex: 10,
                borderTop: '1px solid rgba(255,255,255,0.07)',
                textAlign: 'left'
            }}>
            {/* Top divider glow line */}
            <div
                style={{
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(43,127,255,0.4), rgba(43,127,255,0.4), transparent)'
                }}
            />

            {/* Footer content */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    padding: '36px 60px 40px',
                    flexWrap: 'wrap',
                    gap: '24px',
                    width: '100%',
                    boxSizing: 'border-box',
                    textAlign: 'left'
                }}>
                {/* Left */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {/* Logo */}
                    <div
                        style={{
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: '26px',
                            letterSpacing: '4px',
                            color: '#fff',
                            marginBottom: '4px'
                        }}>
                        ALBERO<span style={{ color: 'oklch(0.623 0.214 259.815)' }}>.</span>
                    </div>

                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        {leftLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                style={{
                                    fontFamily: "'Barlow Condensed', sans-serif",
                                    fontSize: '11px',
                                    fontWeight: 700,
                                    letterSpacing: '2px',
                                    textTransform: 'uppercase',
                                    color: '#747474',
                                    textDecoration: 'none',
                                    transition: 'color 0.2s'
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = '#747474')}>
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <p
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontSize: '11px',
                            letterSpacing: '1.5px',
                            textTransform: 'uppercase',
                            color: '#747474',
                            margin: 0
                        }}>
                        <CopyrightIcon style={{ width: '13px', height: '13px' }} />
                        {copyrightText}
                    </p>
                </div>

                {/* Right */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-end' }}>
                    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                        {rightLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                style={{
                                    fontFamily: "'Barlow Condensed', sans-serif",
                                    fontSize: '11px',
                                    fontWeight: 700,
                                    letterSpacing: '2px',
                                    textTransform: 'uppercase',
                                    color: '#747474',
                                    textDecoration: 'none',
                                    transition: 'color 0.2s'
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = '#747474')}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Wave canvas — full width, no cropping */}
            <div style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', overflow: 'hidden', lineHeight: 0 }}>
                <canvas
                    ref={canvasRef}
                    style={{
                        display: 'block',
                        width: '100%',
                        height: '220px'
                    }}
                />
            </div>
        </footer>
    )
}

export default Footer
