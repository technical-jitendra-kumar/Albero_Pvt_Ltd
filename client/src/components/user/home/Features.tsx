import { Shield, Users } from 'lucide-react'
import { featuresData } from '@/constants/features'

// ─── Shared decorations (same system as all other sections) ───────────────────

function DotGrid({ id, color, opacity }: { id: string; color: string; opacity: number }) {
    return (
        <svg
            width="160"
            height="160"
            viewBox="0 0 160 160"
            fill="none"
            aria-hidden="true"
            style={{ display: 'block' }}>
            <defs>
                <pattern
                    id={id}
                    x="0"
                    y="0"
                    width="16"
                    height="16"
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
                width="160"
                height="160"
                fill={`url(#${id})`}
            />
        </svg>
    )
}

function Bracket({ color, rotate = 0 }: { color: string; rotate?: number }) {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            aria-hidden="true"
            style={{ transform: `rotate(${rotate}deg)`, display: 'block', flexShrink: 0 }}>
            <path
                d="M3 19 L3 3 L19 3"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.45"
            />
        </svg>
    )
}

// ─── Component ────────────────────────────────────────────────────────────────

export function Features() {
    const c1 = featuresData[0]?.card1
    const c2 = featuresData[1]?.card2
    const c3 = featuresData[2]?.card3
    const c4 = featuresData[3]?.card4
    const c5 = featuresData[4]?.card5

    return (
        <section style={{ background: 'var(--black)', padding: '80px 20px', position: 'relative', overflow: 'hidden' }}>
            <style>{`
                /* ── Bento grid ── */
                .ft-grid {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    gap: 14px;
                    max-width: 1100px;
                    margin: 0 auto;
                }

                /* ── Base card ── */
                .ft-card {
                    background: var(--bg-2);
                    border: 1px solid var(--border);
                    border-radius: 20px;
                    position: relative;
                    overflow: hidden;
                    transition: border-color .22s, transform .22s;
                }
                .ft-card:hover {
                    border-color: var(--border-blu);
                    transform: translateY(-2px);
                }

                /* ── Column spans ── */
                .ft-c2 { grid-column: span 2; }
                .ft-c3 { grid-column: span 3; }
                .ft-c6 { grid-column: span 6; }

                @media (max-width: 900px) {
                    .ft-c2, .ft-c3 { grid-column: span 3; }
                }
                @media (max-width: 600px) {
                    .ft-grid { grid-template-columns: 1fr; }
                    .ft-c2, .ft-c3, .ft-c6 { grid-column: span 1; }
                }

                /* ── Card inner padding ── */
                .ft-body { padding: 28px 26px; position: relative; z-index: 1; }
                .ft-body-sm { padding: 22px 20px; position: relative; z-index: 1; }

                /* ── Label chip ── */
                .ft-chip {
                    display: inline-block;
                    padding: 3px 11px; border-radius: 20px;
                    font-family: var(--font-barlow-condensed);
                    font-size: 10px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
                    color: var(--blue-soft);
                    background: oklch(from var(--blue-vivid) l c h / 0.10);
                    border: 1px solid var(--border-blu);
                    margin-bottom: 14px;
                }
                .ft-chip-amber {
                    color: var(--amber);
                    background: oklch(from var(--amber) l c h / 0.10) !important;
                    border-color: oklch(from var(--amber) l c h / 0.28) !important;
                }

                /* ── Card title / subtitle ── */
                .ft-title {
                    font-family: var(--font-bebas);
                    font-size: clamp(18px, 2.4vw, 24px);
                    letter-spacing: .03em;
                    color: var(--white);
                    line-height: 1.1;
                    margin-bottom: 8px;
                }
                .ft-sub {
                    font-family: var(--font-barlow);
                    font-size: 13px;
                    color: var(--grey-mid);
                    line-height: 1.65;
                }

                /* ── Icon circle ── */
                .ft-icon-ring {
                    width: 48px; height: 48px; border-radius: 50%;
                    border: 1px solid rgba(255,255,255,0.12);
                    display: flex; align-items: center; justify-content: center;
                    position: relative; flex-shrink: 0;
                    margin-bottom: 20px;
                }
                .ft-icon-ring::before {
                    content: '';
                    position: absolute; inset: -8px;
                    border-radius: 50%; border: 1px solid rgba(255,255,255,0.06);
                    pointer-events: none;
                }

                /* ── Avatar list ── */
                .ft-avatar-line {
                    position: absolute; top: 0; bottom: 0;
                    left: 50%; width: 1px;
                    background: rgba(255,255,255,0.08);
                }
                .ft-avatar-row {
                    display: flex; align-items: center; gap: 10px;
                }
                .ft-avatar-row.right { justify-content: flex-end; padding-right: 0; }
                .ft-avatar-img {
                    width: 32px; height: 32px; border-radius: 50%;
                    border: 2px solid var(--bg-2);
                    object-fit: cover; flex-shrink: 0;
                }
                .ft-avatar-tag {
                    padding: 3px 10px; border-radius: 6px;
                    font-family: var(--font-barlow-condensed);
                    font-size: 11px; font-weight: 600; letter-spacing: .06em;
                    color: var(--grey-light);
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    white-space: nowrap;
                }

                /* ── Code panel (card 4 right side) ── */
                .ft-code-panel {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: 12px;
                    padding: 14px 16px;
                    font-family: 'Fira Code', 'Courier New', monospace;
                    font-size: 11px;
                    line-height: 1.7;
                    color: var(--grey-mid);
                    overflow: hidden;
                }
                .ft-code-dot-row { display: flex; gap: 5px; margin-bottom: 10px; }
                .ft-code-dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.12); }
                .ft-code-kw  { color: var(--blue-soft); }
                .ft-code-fn  { color: var(--amber); }
                .ft-code-str { color: oklch(0.87 0 0 / 0.6); }
                .ft-code-cm  { color: oklch(0.371 0 0); }
            `}</style>

            {/* ── BG ambient ── */}
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    top: -120,
                    left: '20%',
                    width: 500,
                    height: 500,
                    borderRadius: '50%',
                    background: 'var(--blue-deep)',
                    filter: 'blur(150px)',
                    opacity: 0.05,
                    pointerEvents: 'none'
                }}
            />
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    bottom: -80,
                    right: '10%',
                    width: 380,
                    height: 380,
                    borderRadius: '50%',
                    background: 'var(--amber)',
                    filter: 'blur(140px)',
                    opacity: 0.05,
                    pointerEvents: 'none'
                }}
            />

            {/* ── Grid ── */}
            <div className="ft-grid">
                {/* ── Card 1 — 100% Customizable ──────────────────────── */}
                <div className="ft-card ft-c2">
                    {/* Dot grid decoration */}
                    <div
                        aria-hidden="true"
                        style={{ position: 'absolute', bottom: 0, right: 0, pointerEvents: 'none' }}>
                        <DotGrid
                            id="ft-dg-1"
                            color="var(--blue-vivid)"
                            opacity={0.14}
                        />
                    </div>
                    {/* Corner brackets */}
                    <div
                        aria-hidden="true"
                        style={{ position: 'absolute', top: 14, left: 14, pointerEvents: 'none' }}>
                        <Bracket color="var(--blue-vivid)" />
                    </div>
                    <div
                        aria-hidden="true"
                        style={{ position: 'absolute', bottom: 14, right: 14, pointerEvents: 'none' }}>
                        <Bracket
                            color="var(--blue-vivid)"
                            rotate={180}
                        />
                    </div>

                    <div
                        className="ft-body"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: 200,
                            textAlign: 'center'
                        }}>
                        {/* Ghost ellipse SVG — original preserved */}
                        <div style={{ position: 'relative', width: '100%', maxWidth: 200, height: 80, margin: '0 auto 12px' }}>
                            <svg
                                viewBox="0 0 254 104"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', color: 'var(--bg-card)' }}>
                                <path
                                    d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <span
                                style={{
                                    position: 'relative',
                                    zIndex: 1,
                                    display: 'block',
                                    textAlign: 'center',
                                    fontFamily: 'var(--font-bebas)',
                                    fontSize: 'clamp(44px, 8vw, 64px)',
                                    letterSpacing: '.02em',
                                    color: 'var(--white)',
                                    lineHeight: 1,
                                    paddingTop: 14
                                }}>
                                {c1?.title}
                            </span>
                        </div>
                        <span className="ft-chip">{c1?.subtitle}</span>
                    </div>
                </div>

                {/* ── Card 2 — Secure by Default ───────────────────────── */}
                <div className="ft-card ft-c2">
                    <div
                        aria-hidden="true"
                        style={{ position: 'absolute', top: 0, right: 0, pointerEvents: 'none' }}>
                        <DotGrid
                            id="ft-dg-2"
                            color="var(--amber)"
                            opacity={0.12}
                        />
                    </div>
                    {/* Glow orb */}
                    <div
                        aria-hidden="true"
                        style={{
                            position: 'absolute',
                            top: -40,
                            left: -40,
                            width: 180,
                            height: 180,
                            borderRadius: '50%',
                            background: 'var(--blue-vivid)',
                            filter: 'blur(70px)',
                            opacity: 0.08,
                            pointerEvents: 'none'
                        }}
                    />

                    <div
                        className="ft-body"
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        {/* Original fingerprint SVG preserved, recolored */}
                        <div style={{ width: 80, height: 80, marginBottom: 16, color: 'var(--blue-soft)' }}>
                            <svg
                                viewBox="0 0 212 143"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ width: '100%', height: '100%' }}>
                                <path
                                    className="text-zinc-600"
                                    d="M44.0209 55.3542C43.1945 54.7639 42.6916 54.0272 42.5121 53.1442C42.3327 52.2611 42.5995 51.345 43.3125 50.3958C50.632 40.3611 59.812 32.5694 70.8525 27.0208C81.8931 21.4722 93.668 18.6979 106.177 18.6979C118.691 18.6979 130.497 21.3849 141.594 26.7587C152.691 32.1326 161.958 39.8936 169.396 50.0417C170.222 51.1042 170.489 52.0486 170.196 52.875C169.904 53.7014 169.401 54.4097 168.688 55C167.979 55.5903 167.153 55.8571 166.208 55.8004C165.264 55.7437 164.438 55.2408 163.729 54.2917C157.236 45.0833 148.885 38.0307 138.675 33.1337C128.466 28.2368 117.633 25.786 106.177 25.7812C94.7257 25.7812 83.9827 28.2321 73.948 33.1337C63.9132 38.0354 55.5903 45.0881 48.9792 54.2917C48.2709 55.3542 47.4445 55.9444 46.5 56.0625C45.5556 56.1806 44.7292 55.9444 44.0209 55.3542Z"
                                    fill="oklch(0.371 0 0)"
                                />
                                <path
                                    d="M3 72H209"
                                    stroke="oklch(0.623 0.214 259.815)"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                />
                                <g clipPath="url(#clip-ft2)">
                                    <path
                                        d="M44.0209 55.3542C43.1945 54.7639 42.6916 54.0272 42.5121 53.1442C42.3327 52.2611 42.5995 51.345 43.3125 50.3958C50.632 40.3611 59.812 32.5694 70.8525 27.0208C81.8931 21.4722 93.668 18.6979 106.177 18.6979C118.691 18.6979 130.497 21.3849 141.594 26.7587C152.691 32.1326 161.958 39.8936 169.396 50.0417C170.222 51.1042 170.489 52.0486 170.196 52.875C169.904 53.7014 169.401 54.4097 168.688 55C167.979 55.5903 167.153 55.8571 166.208 55.8004C165.264 55.7437 164.438 55.2408 163.729 54.2917C157.236 45.0833 148.885 38.0307 138.675 33.1337C128.466 28.2368 117.633 25.786 106.177 25.7812C94.7257 25.7812 83.9827 28.2321 73.948 33.1337C63.9132 38.0354 55.5903 45.0881 48.9792 54.2917C48.2709 55.3542 47.4445 55.9444 46.5 56.0625C45.5556 56.1806 44.7292 55.9444 44.0209 55.3542Z"
                                        fill="url(#grad-ft2)"
                                    />
                                </g>
                                <defs>
                                    <linearGradient
                                        id="grad-ft2"
                                        x1="106"
                                        y1="1"
                                        x2="106"
                                        y2="72"
                                        gradientUnits="userSpaceOnUse">
                                        <stop
                                            stopColor="oklch(0.623 0.214 259.815)"
                                            stopOpacity="0"
                                        />
                                        <stop
                                            offset="1"
                                            stopColor="oklch(0.623 0.214 259.815)"
                                        />
                                    </linearGradient>
                                    <clipPath id="clip-ft2">
                                        <rect
                                            width="129"
                                            height="72"
                                            fill="white"
                                            transform="translate(41)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="ft-title">{c2?.title}</div>
                        <div className="ft-sub">{c2?.subtitle}</div>
                    </div>
                </div>

                {/* ── Card 3 — Reliable Performance (chart) ────────────── */}
                <div className="ft-card ft-c2">
                    <div
                        aria-hidden="true"
                        style={{ position: 'absolute', bottom: 0, left: 0, pointerEvents: 'none' }}>
                        <DotGrid
                            id="ft-dg-3"
                            color="var(--amber)"
                            opacity={0.13}
                        />
                    </div>
                    <div
                        className="ft-body"
                        style={{ display: 'flex', flexDirection: 'column' }}>
                        {/* Chart SVG from original, recolored with palette */}
                        <div style={{ width: '100%', marginBottom: 16 }}>
                            <svg
                                viewBox="0 0 386 123"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ width: '100%' }}>
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3 123C3 123 14.3298 94.153 35.1282 88.0957C55.9266 82.0384 65.9333 80.5508 65.9333 80.5508C65.9333 80.5508 80.699 80.5508 92.1777 80.5508C103.656 80.5508 100.887 63.5348 109.06 63.5348C117.233 63.5348 117.217 91.9728 124.78 91.9728C132.343 91.9728 142.264 78.03 153.831 80.5508C165.398 83.0716 186.825 91.9728 193.761 91.9728C200.697 91.9728 206.296 63.5348 214.07 63.5348C221.844 63.5348 238.653 93.7771 244.234 91.9728C249.814 90.1684 258.8 60 266.19 60C272.075 60 284.1 88.057 286.678 88.0957C294.762 88.2171 300.192 72.9284 305.423 72.9284C312.323 72.9284 323.377 65.2437 335.553 63.5348C347.729 61.8259 348.218 82.07 363.639 80.5508C367.875 80.1335 372.949 82.2017 376.437 87.1008C379.446 91.3274 381.054 97.4325 382.521 104.647C383.479 109.364 382.521 123 382.521 123"
                                    fill="url(#grad-ft3-fill)"
                                />
                                <path
                                    d="M3 121.077C3 121.077 15.3041 93.6691 36.0195 87.756C56.7349 81.8429 66.6632 80.9723 66.6632 80.9723C66.6632 80.9723 80.0327 80.9723 91.4656 80.9723C102.898 80.9723 100.415 64.2824 108.556 64.2824C116.696 64.2824 117.693 92.1332 125.226 92.1332C132.759 92.1332 142.07 78.5115 153.591 80.9723C165.113 83.433 186.092 92.1332 193 92.1332C199.908 92.1332 205.274 64.2824 213.017 64.2824C220.76 64.2824 237.832 93.8946 243.39 92.1332C248.948 90.3718 257.923 60.5 265.284 60.5C271.145 60.5 283.204 87.7182 285.772 87.756C293.823 87.8746 299.2 73.0802 304.411 73.0802C311.283 73.0802 321.425 65.9506 333.552 64.2824C345.68 62.6141 346.91 82.4553 362.27 80.9723C377.629 79.4892 383 106.605 383 106.605"
                                    stroke="var(--amber)"
                                    strokeWidth="2.5"
                                />
                                <defs>
                                    <linearGradient
                                        id="grad-ft3-fill"
                                        x1="3"
                                        y1="60"
                                        x2="3"
                                        y2="123"
                                        gradientUnits="userSpaceOnUse">
                                        <stop
                                            stopColor="oklch(0.795 0.184 86.047)"
                                            stopOpacity="0.3"
                                        />
                                        <stop
                                            offset="1"
                                            stopColor="oklch(0.795 0.184 86.047)"
                                            stopOpacity="0"
                                        />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <span
                            className="ft-chip ft-chip-amber"
                            style={{ alignSelf: 'flex-start', marginBottom: 10 }}>
                            Performance
                        </span>
                        <div className="ft-title">{c3?.title}</div>
                        <div className="ft-sub">{c3?.subtitle}</div>
                    </div>
                </div>

                {/* ── Card 4 — Built for Developers ─────────────────────── */}
                <div className="ft-card ft-c3">
                    {/* Glow */}
                    <div
                        aria-hidden="true"
                        style={{
                            position: 'absolute',
                            top: -60,
                            right: -60,
                            width: 220,
                            height: 220,
                            borderRadius: '50%',
                            background: 'var(--blue-vivid)',
                            filter: 'blur(80px)',
                            opacity: 0.09,
                            pointerEvents: 'none'
                        }}
                    />
                    <div
                        aria-hidden="true"
                        style={{ position: 'absolute', top: 14, right: 14, pointerEvents: 'none' }}>
                        <Bracket
                            color="var(--blue-vivid)"
                            rotate={90}
                        />
                    </div>

                    <div
                        className="ft-body"
                        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, height: '100%', alignItems: 'center' }}>
                        {/* Left: icon + text */}
                        <div>
                            <div
                                className="ft-icon-ring"
                                style={{ background: 'oklch(from var(--blue-vivid) l c h / 0.08)', borderColor: 'var(--border-blu)' }}>
                                <Shield
                                    size={20}
                                    color="var(--blue-soft)"
                                    strokeWidth={1.5}
                                />
                            </div>
                            <div className="ft-title">{c4?.title}</div>
                            <div className="ft-sub">{c4?.subtitle}</div>
                        </div>

                        {/* Right: code panel */}
                        <div className="ft-code-panel">
                            <div className="ft-code-dot-row">
                                <div className="ft-code-dot" />
                                <div className="ft-code-dot" />
                                <div className="ft-code-dot" />
                            </div>
                            <div>
                                <span className="ft-code-kw">const</span> <span className="ft-code-fn">api</span> ={' '}
                                <span className="ft-code-fn">createAPI</span>(&#123;
                            </div>
                            <div>
                                &nbsp;&nbsp;<span className="ft-code-str">baseURL</span>: <span className="ft-code-str">'/v1'</span>,
                            </div>
                            <div>
                                &nbsp;&nbsp;<span className="ft-code-str">auth</span>: <span className="ft-code-str">'bearer'</span>,
                            </div>
                            <div>&#125;)</div>
                            <div style={{ marginTop: 6 }}>
                                <span className="ft-code-cm">// Fast. Secure. Modular.</span>
                            </div>
                            <div>
                                <span className="ft-code-fn">api</span>.<span className="ft-code-fn">get</span>(
                                <span className="ft-code-str">'/users'</span>)
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Card 5 — Trusted by Teams ─────────────────────────── */}
                <div className="ft-card ft-c3">
                    <div
                        aria-hidden="true"
                        style={{ position: 'absolute', bottom: 0, right: 0, pointerEvents: 'none' }}>
                        <DotGrid
                            id="ft-dg-5"
                            color="var(--blue-vivid)"
                            opacity={0.11}
                        />
                    </div>
                    <div
                        aria-hidden="true"
                        style={{ position: 'absolute', bottom: 14, left: 14, pointerEvents: 'none' }}>
                        <Bracket
                            color="var(--amber)"
                            rotate={270}
                        />
                    </div>

                    <div
                        className="ft-body"
                        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, height: '100%', alignItems: 'center' }}>
                        {/* Left: icon + text */}
                        <div>
                            <div
                                className="ft-icon-ring"
                                style={{ background: 'oklch(from var(--amber) l c h / 0.08)', borderColor: 'oklch(from var(--amber) l c h / 0.25)' }}>
                                <Users
                                    size={20}
                                    color="var(--amber)"
                                    strokeWidth={1.5}
                                />
                            </div>
                            <div className="ft-title">{c5?.title}</div>
                            <div className="ft-sub">{c5?.subtitle}</div>
                        </div>

                        {/* Right: avatar connector */}
                        <div
                            style={{
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                gap: 18,
                                padding: '12px 0',
                                height: '100%'
                            }}>
                            {/* Center line */}
                            <div className="ft-avatar-line" />

                            {/* Row 1 — right aligned */}
                            <div className="ft-avatar-row right">
                                <span className="ft-avatar-tag">{c5?.avatarName1}</span>
                                <img
                                    className="ft-avatar-img"
                                    src={c5?.avatar1}
                                    alt={c5?.avatarName1}
                                />
                            </div>

                            {/* Row 2 — left aligned */}
                            <div
                                className="ft-avatar-row"
                                style={{ paddingLeft: '50%' }}>
                                <img
                                    className="ft-avatar-img"
                                    src={c5?.avatar2}
                                    alt={c5?.avatarName2}
                                />
                                <span className="ft-avatar-tag">{c5?.avatarName2}</span>
                            </div>

                            {/* Row 3 — right aligned */}
                            <div className="ft-avatar-row right">
                                <span className="ft-avatar-tag">{c5?.avatarName3}</span>
                                <img
                                    className="ft-avatar-img"
                                    src={c5?.avatar3}
                                    alt={c5?.avatarName3}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
