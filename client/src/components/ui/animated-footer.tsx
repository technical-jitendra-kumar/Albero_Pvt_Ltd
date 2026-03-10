import React, { useEffect, useRef } from "react"
import { NavLink } from "../user/common/NavLink"
import { CopyrightIcon } from "lucide-react"

interface LinkItem {
  href: string
  label: string
}

interface FooterProps {
  leftLinks: LinkItem[]
  rightLinks: LinkItem[]
  copyrightText: string
}

const Footer: React.FC<FooterProps> = ({
  leftLinks,
  rightLinks,
  copyrightText
}) => {

  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")!

    let width = canvas.offsetWidth
    const height = 240

    canvas.width = width
    canvas.height = height

    let time = 0

    const waves = [
      { amp: 35, freq: 0.012, speed: 0.02, opacity: 0.45 },
      { amp: 25, freq: 0.018, speed: 0.015, opacity: 0.35 },
      { amp: 18, freq: 0.024, speed: 0.01, opacity: 0.25 }
    ]

    const particles: any[] = []

    class Particle {

      x: number
      waveIndex: number
      offset: number

      constructor() {

        this.x = Math.random() * width
        this.waveIndex = Math.floor(Math.random() * waves.length)
        this.offset = Math.random() * 1000

      }

      update() {

        this.x += 1.2

        if (this.x > width) {
          this.x = 0
        }

      }

      draw() {

        const wave = waves[this.waveIndex]

        const y =
          height * 0.55 +
          Math.sin(this.x * wave.freq + time * wave.speed) *
            wave.amp

        const gradient = ctx.createRadialGradient(
          this.x,
          y,
          0,
          this.x,
          y,
          8
        )

        gradient.addColorStop(0, "rgba(43,127,255,1)")
        gradient.addColorStop(1, "rgba(43,127,255,0)")

        ctx.beginPath()
        ctx.arc(this.x, y, 2.2, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

      }

    }

    for (let i = 0; i < 40; i++) {
      particles.push(new Particle())
    }

    function drawWave(wave: any) {

      ctx.beginPath()

      for (let x = 0; x <= width; x++) {

        const y =
          height * 0.55 +
          Math.sin(x * wave.freq + time * wave.speed) *
            wave.amp

        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)

      }

      ctx.lineTo(width, height)
      ctx.lineTo(0, height)
      ctx.closePath()

      const gradient = ctx.createLinearGradient(
        0,
        height * 0.5,
        0,
        height
      )

      gradient.addColorStop(0, `rgba(43,127,255,${wave.opacity})`)
      gradient.addColorStop(1, "rgba(43,127,255,0)")

      ctx.fillStyle = gradient
      ctx.fill()

    }

    function drawBackgroundGlow() {

      const gradient = ctx.createRadialGradient(
        width / 2,
        height * 0.6,
        0,
        width / 2,
        height * 0.6,
        height
      )

      gradient.addColorStop(0, "rgba(43,127,255,0.15)")
      gradient.addColorStop(1, "rgba(0,0,0,0)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

    }

    function animate() {

      ctx.clearRect(0, 0, width, height)

      drawBackgroundGlow()

      waves.forEach(drawWave)

      particles.forEach(p => {
        p.update()
        p.draw()
      })

      time += 1

      requestAnimationFrame(animate)

    }

    animate()

    const handleResize = () => {

      width = canvas.offsetWidth
      canvas.width = width
      canvas.height = height

    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)

  }, [])

  return (

    <footer className="bg-black text-white flex flex-col justify-between w-full">

      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-4 pt-8 pb-24 px-4">

        <div className="space-y-2">

          <ul className="flex flex-wrap gap-4">
            {leftLinks.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="text-sm hover:text-[#2B7FFF]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="text-sm mt-4 flex items-center gap-x-1">
            <CopyrightIcon className="h-4 w-4" />
            {copyrightText}
          </p>

        </div>

        <div className="space-y-4">

          <ul className="flex flex-wrap gap-4">
            {rightLinks.map((link, i) => (
              <li key={i}>
                <NavLink href={link.href}>
                  <span className="text-sm hover:text-[#2B7FFF]">
                    {link.label}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="text-center md:text-right mt-4">

            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="text-sm hover:underline"
            >
              Back to top
            </button>

          </div>

        </div>

      </div>

      {/* Premium Wave Animation */}

      <canvas
        ref={canvasRef}
        className="w-full"
        style={{ height: "240px" }}
      />

    </footer>

  )
}

export default Footer
