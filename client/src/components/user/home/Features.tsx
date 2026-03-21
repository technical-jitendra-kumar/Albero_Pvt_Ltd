import { Shield, Users } from 'lucide-react'
import { featuresData } from '@/constants/features'

// ─── Component ────────────────────────────────────────────────────────────────

export function Features() {
    const c1 = featuresData[0]?.card1
    const c2 = featuresData[1]?.card2
    const c3 = featuresData[2]?.card3
    const c4 = featuresData[3]?.card4
    const c5 = featuresData[4]?.card5

    return (
        <section
            style={{
                background: 'transparent',
                padding: '90px 20px',
                position: 'relative',
                overflow: 'hidden'
            }}>
            <style>{`
                /* ─────────────────────────────────────────────
                   GLASS SYSTEM
                ───────────────────────────────────────────── */

                /* Shared glass layer */
                .gl-card {
                    position: relative;
                    border-radius: 24px;
                    overflow: hidden;
                    /* Multi-layer glass */
                    background:
                        linear-gradient(
                            135deg,
                            rgba(255,255,255,0.055) 0%,
                            rgba(255,255,255,0.018) 50%,
                            rgba(99,102,241,0.04) 100%
                        );
                    backdrop-filter: blur(24px) saturate(1.4);
                    -webkit-backdrop-filter: blur(24px) saturate(1.4);
                    border: 1px solid rgba(255,255,255,0.09);
                    /* Specular edge highlight */
                    box-shadow:
                        0 0 0 1px rgba(255,255,255,0.03) inset,
                        0 1px 0 rgba(255,255,255,0.12) inset,
                        0 24px 64px rgba(0,0,0,0.45),
                        0 4px 16px rgba(0,0,0,0.3);
                    transition: transform 0.35s cubic-bezier(.22,1,.36,1),
                                border-color 0.3s,
                                box-shadow 0.35s;
                    isolation: isolate;
                }
                .gl-card::before {
                    /* top-edge shimmer */
                    content: '';
                    position: absolute;
                    top: 0; left: 10%; right: 10%;
                    height: 1px;
                    background: linear-gradient(90deg,
                        transparent,
                        rgba(255,255,255,0.22) 40%,
                        rgba(255,255,255,0.22) 60%,
                        transparent);
                    pointer-events: none;
                    z-index: 10;
                }
                .gl-card::after {
                    /* subtle inner noise texture */
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
                    background-size: 200px 200px;
                    pointer-events: none;
                    opacity: 0.6;
                    z-index: 1;
                }
                .gl-card:hover {
                    transform: translateY(-4px) scale(1.008);
                    border-color: rgba(99,102,241,0.3);
                    box-shadow:
                        0 0 0 1px rgba(255,255,255,0.06) inset,
                        0 1px 0 rgba(255,255,255,0.18) inset,
                        0 32px 80px rgba(0,0,0,0.5),
                        0 0 40px rgba(99,102,241,0.12),
                        0 8px 24px rgba(0,0,0,0.35);
                }

                /* Floating orbs behind the grid */
                .gl-orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(80px);
                    pointer-events: none;
                }

                /* ─ Grid ─ */
                .ft-grid {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    gap: 16px;
                    max-width: 1120px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 1;
                }
                .ft-c2 { grid-column: span 2; }
                .ft-c3 { grid-column: span 3; }

                @media (max-width: 960px) {
                    .ft-c2, .ft-c3 { grid-column: span 3; }
                }
                @media (max-width: 620px) {
                    .ft-grid { grid-template-columns: 1fr; }
                    .ft-c2, .ft-c3 { grid-column: span 1; }
                }

                /* ─ Card inner ─ */
                .ft-body {
                    padding: 30px 28px;
                    position: relative;
                    z-index: 2;
                }

                /* ─ Glass chip ─ */
                .ft-chip {
                    display: inline-flex; align-items: center; gap: 6px;
                    padding: 4px 13px; border-radius: 20px;
                    font-family: var(--font-barlow-condensed);
                    font-size: 10px; font-weight: 700;
                    letter-spacing: .12em; text-transform: uppercase;
                    color: oklch(0.707 0.165 254.624);
                    background: rgba(99,102,241,0.12);
                    border: 1px solid rgba(99,102,241,0.25);
                    backdrop-filter: blur(8px);
                    box-shadow: 0 1px 0 rgba(255,255,255,0.08) inset;
                }
                .ft-chip-green {
                    color: #4ade80 !important;
                    background: rgba(74,222,128,0.10) !important;
                    border-color: rgba(74,222,128,0.22) !important;
                }

                /* ─ Typography ─ */
                .ft-title {
                    font-family: var(--font-bebas);
                    font-size: clamp(19px, 2.5vw, 26px);
                    letter-spacing: .03em;
                    color: rgba(255,255,255,0.95);
                    line-height: 1.1; margin-bottom: 8px;
                }
                .ft-sub {
                    font-family: var(--font-barlow);
                    font-size: 13px;
                    color: rgba(255,255,255,0.42);
                    line-height: 1.68;
                }

                /* ─ Glass icon ring ─ */
                .ft-ring {
                    width: 50px; height: 50px; border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                    position: relative; flex-shrink: 0; margin-bottom: 22px;
                    background: rgba(99,102,241,0.12);
                    border: 1px solid rgba(99,102,241,0.28);
                    box-shadow: 0 1px 0 rgba(255,255,255,0.1) inset,
                                0 0 16px rgba(99,102,241,0.2);
                    backdrop-filter: blur(8px);
                }
                .ft-ring::before {
                    content: '';
                    position: absolute; inset: -7px;
                    border-radius: 50%;
                    border: 1px solid rgba(99,102,241,0.1);
                    pointer-events: none;
                }

                /* ─ Glass code panel ─ */
                .ft-code {
                    background: rgba(0,0,0,0.35);
                    border: 1px solid rgba(255,255,255,0.07);
                    border-radius: 14px;
                    padding: 16px 18px;
                    backdrop-filter: blur(12px);
                    box-shadow: 0 1px 0 rgba(255,255,255,0.06) inset;
                    font-family: 'Fira Code', 'Courier New', monospace;
                    font-size: 11.5px; line-height: 1.75;
                    color: rgba(255,255,255,0.32);
                    overflow: hidden;
                }
                .ft-code-dots { display: flex; gap: 5px; margin-bottom: 12px; }
                .ft-code-dot  { width: 8px; height: 8px; border-radius: 50%; }
                .kw  { color: oklch(0.707 0.165 254.624); }
                .fn  { color: rgba(255,255,255,0.75); }
                .str { color: rgba(255,255,255,0.45); }
                .cm  { color: rgba(255,255,255,0.2); }

                /* ─ Avatar connector ─ */
                .ft-av-line {
                    position: absolute; top: 0; bottom: 0; left: 50%;
                    width: 1px;
                    background: linear-gradient(to bottom,
                        transparent, rgba(255,255,255,0.12) 20%, rgba(255,255,255,0.12) 80%, transparent);
                }
                .ft-av-row { display: flex; align-items: center; gap: 10px; }
                .ft-av-row.r { justify-content: flex-end; }
                .ft-av-img {
                    width: 34px; height: 34px; border-radius: 50%;
                    border: 2px solid rgba(255,255,255,0.15);
                    object-fit: cover; flex-shrink: 0;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.4);
                }
                .ft-av-tag {
                    padding: 4px 11px; border-radius: 8px;
                    font-family: var(--font-barlow-condensed);
                    font-size: 11px; font-weight: 600; letter-spacing: .06em;
                    color: rgba(255,255,255,0.7);
                    background: rgba(255,255,255,0.06);
                    border: 1px solid rgba(255,255,255,0.1);
                    backdrop-filter: blur(8px);
                    box-shadow: 0 1px 0 rgba(255,255,255,0.08) inset;
                    white-space: nowrap;
                }

                /* ─ Big number ─ */
                .ft-bignum {
                    font-family: var(--font-bebas);
                    font-size: clamp(52px, 9vw, 78px);
                    letter-spacing: .01em; line-height: 1;
                    background: linear-gradient(160deg,
                        rgba(255,255,255,1) 0%,
                        rgba(99,102,241,0.7) 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    filter: drop-shadow(0 0 24px rgba(99,102,241,0.5));
                }

                /* ─ Chart line ─ */
                @keyframes ft-trace {
                    from { stroke-dashoffset: 1200; }
                    to   { stroke-dashoffset: 0; }
                }
                .ft-trace-path {
                    stroke-dasharray: 1200;
                    stroke-dashoffset: 1200;
                    animation: ft-trace 2.4s cubic-bezier(.4,0,.2,1) forwards;
                    animation-delay: .3s;
                }
                .gl-card:hover .ft-trace-path {
                    animation: ft-trace 1s cubic-bezier(.4,0,.2,1) forwards;
                }
            `}</style>

            {/* ── Scene: floating orbs ── */}
            <div
                className="gl-orb"
                style={{
                    top: -200,
                    left: '15%',
                    width: 700,
                    height: 700,
                    background: 'radial-gradient(circle, oklch(0.546 0.245 262.881) 0%, transparent 70%)',
                    opacity: 0.12
                }}
            />
            <div
                className="gl-orb"
                style={{
                    bottom: -150,
                    right: '10%',
                    width: 500,
                    height: 500,
                    background: 'radial-gradient(circle, oklch(0.623 0.214 259.815) 0%, transparent 70%)',
                    opacity: 0.08
                }}
            />
            <div
                className="gl-orb"
                style={{
                    top: '40%',
                    left: '-5%',
                    width: 320,
                    height: 320,
                    background: 'radial-gradient(circle, oklch(0.511 0.262 276.966) 0%, transparent 70%)',
                    opacity: 0.1
                }}
            />

            {/* ── Bento grid ── */}
            <div className="ft-grid">
                {/* ══ Card 1 — 100% Customizable ══════════════════════ */}
                <div className="gl-card ft-c2">
                    {/* Inner glow pulse */}
                    <div
                        style={{
                            position: 'absolute',
                            top: -40,
                            left: -40,
                            width: 200,
                            height: 200,
                            borderRadius: '50%',
                            background: 'oklch(0.623 0.214 259.815)',
                            filter: 'blur(60px)',
                            opacity: 0.15,
                            pointerEvents: 'none'
                        }}
                    />

                    <div
                        className="ft-body"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: 220,
                            textAlign: 'center',
                            gap: 16
                        }}>
                        {/* Glass ellipse bg */}
                        <div style={{ position: 'relative', width: '100%', maxWidth: 220, margin: '0 auto' }}>
                            <svg
                                viewBox="0 0 254 104"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.18 }}>
                                <path
                                    d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                                    fill="oklch(0.623 0.214 259.815)"
                                />
                            </svg>
                            <span
                                className="ft-bignum"
                                style={{ display: 'block', paddingTop: 20 }}>
                                {c1?.title}
                            </span>
                        </div>
                        <span className="ft-chip">{c1?.subtitle}</span>
                    </div>
                </div>

                {/* ══ Card 2 — Secure by Default ══════════════════════ */}
                <div className="gl-card ft-c2">
                    <div
                        style={{
                            position: 'absolute',
                            bottom: -30,
                            right: -30,
                            width: 160,
                            height: 160,
                            borderRadius: '50%',
                            background: 'oklch(0.623 0.214 259.815)',
                            filter: 'blur(50px)',
                            opacity: 0.1,
                            pointerEvents: 'none'
                        }}
                    />

                    <div
                        className="ft-body"
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <div style={{ width: 72, height: 72, marginBottom: 18 }}>
                            <svg
                                viewBox="0 0 212 143"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ width: '100%', height: '100%' }}>
                                <path
                                    d="M44.0209 55.3542C43.1945 54.7639 42.6916 54.0272 42.5121 53.1442C42.3327 52.2611 42.5995 51.345 43.3125 50.3958C50.632 40.3611 59.812 32.5694 70.8525 27.0208C81.8931 21.4722 93.668 18.6979 106.177 18.6979C118.691 18.6979 130.497 21.3849 141.594 26.7587C152.691 32.1326 161.958 39.8936 169.396 50.0417C170.222 51.1042 170.489 52.0486 170.196 52.875C169.904 53.7014 169.401 54.4097 168.688 55C167.979 55.5903 167.153 55.8571 166.208 55.8004C165.264 55.7437 164.438 55.2408 163.729 54.2917C157.236 45.0833 148.885 38.0307 138.675 33.1337C128.466 28.2368 117.633 25.786 106.177 25.7812C94.7257 25.7812 83.9827 28.2321 73.948 33.1337C63.9132 38.0354 55.5903 45.0881 48.9792 54.2917C48.2709 55.3542 47.4445 55.9444 46.5 56.0625C45.5556 56.1806 44.7292 55.9444 44.0209 55.3542Z"
                                    fill="rgba(99,102,241,0.15)"
                                />
                                <path
                                    d="M3 72H209"
                                    stroke="oklch(0.623 0.214 259.815)"
                                    strokeWidth="5"
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
                                            stopOpacity="0.9"
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

                {/* ══ Card 3 — Reliable Performance ════════════════════ */}
                <div className="gl-card ft-c2">
                    <div
                        className="ft-body"
                        style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ width: '100%', marginBottom: 14, overflow: 'hidden', borderRadius: 10 }}>
                            <svg
                                viewBox="0 0 386 123"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ width: '100%', display: 'block' }}>
                                <defs>
                                    <linearGradient
                                        id="grad-ft3"
                                        x1="3"
                                        y1="60"
                                        x2="3"
                                        y2="123"
                                        gradientUnits="userSpaceOnUse">
                                        <stop
                                            stopColor="oklch(0.623 0.214 259.815)"
                                            stopOpacity="0.25"
                                        />
                                        <stop
                                            offset="1"
                                            stopColor="oklch(0.623 0.214 259.815)"
                                            stopOpacity="0"
                                        />
                                    </linearGradient>
                                </defs>
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3 123C3 123 14.3298 94.153 35.1282 88.0957C55.9266 82.0384 65.9333 80.5508 65.9333 80.5508C65.9333 80.5508 80.699 80.5508 92.1777 80.5508C103.656 80.5508 100.887 63.5348 109.06 63.5348C117.233 63.5348 117.217 91.9728 124.78 91.9728C132.343 91.9728 142.264 78.03 153.831 80.5508C165.398 83.0716 186.825 91.9728 193.761 91.9728C200.697 91.9728 206.296 63.5348 214.07 63.5348C221.844 63.5348 238.653 93.7771 244.234 91.9728C249.814 90.1684 258.8 60 266.19 60C272.075 60 284.1 88.057 286.678 88.0957C294.762 88.2171 300.192 72.9284 305.423 72.9284C312.323 72.9284 323.377 65.2437 335.553 63.5348C347.729 61.8259 348.218 82.07 363.639 80.5508C367.875 80.1335 372.949 82.2017 376.437 87.1008C379.446 91.3274 381.054 97.4325 382.521 104.647C383.479 109.364 382.521 123 382.521 123"
                                    fill="url(#grad-ft3)"
                                />
                                <path
                                    className="ft-trace-path"
                                    d="M3 121.077C3 121.077 15.3041 93.6691 36.0195 87.756C56.7349 81.8429 66.6632 80.9723 66.6632 80.9723C66.6632 80.9723 80.0327 80.9723 91.4656 80.9723C102.898 80.9723 100.415 64.2824 108.556 64.2824C116.696 64.2824 117.693 92.1332 125.226 92.1332C132.759 92.1332 142.07 78.5115 153.591 80.9723C165.113 83.433 186.092 92.1332 193 92.1332C199.908 92.1332 205.274 64.2824 213.017 64.2824C220.76 64.2824 237.832 93.8946 243.39 92.1332C248.948 90.3718 257.923 60.5 265.284 60.5C271.145 60.5 283.204 87.7182 285.772 87.756C293.823 87.8746 299.2 73.0802 304.411 73.0802C311.283 73.0802 321.425 65.9506 333.552 64.2824C345.68 62.6141 346.91 82.4553 362.27 80.9723C377.629 79.4892 383 106.605 383 106.605"
                                    stroke="oklch(0.707 0.165 254.624)"
                                    strokeWidth="2.5"
                                />
                            </svg>
                        </div>
                        <span
                            className="ft-chip ft-chip-green"
                            style={{ alignSelf: 'flex-start', marginBottom: 10 }}>
                            <span
                                style={{
                                    width: 5,
                                    height: 5,
                                    borderRadius: '50%',
                                    background: '#4ade80',
                                    display: 'inline-block',
                                    boxShadow: '0 0 6px #4ade80'
                                }}
                            />
                            Live
                        </span>
                        <div className="ft-title">{c3?.title}</div>
                        <div className="ft-sub">{c3?.subtitle}</div>
                    </div>
                </div>

                {/* ══ Card 4 — Built for Developers ════════════════════ */}
                <div className="gl-card ft-c3">
                    <div
                        style={{
                            position: 'absolute',
                            top: -60,
                            right: -60,
                            width: 240,
                            height: 240,
                            borderRadius: '50%',
                            background: 'oklch(0.546 0.245 262.881)',
                            filter: 'blur(80px)',
                            opacity: 0.12,
                            pointerEvents: 'none'
                        }}
                    />

                    <div
                        className="ft-body"
                        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, height: '100%', alignItems: 'center' }}>
                        <div>
                            <div className="ft-ring">
                                <Shield
                                    size={20}
                                    color="oklch(0.707 0.165 254.624)"
                                    strokeWidth={1.5}
                                />
                            </div>
                            <div className="ft-title">{c4?.title}</div>
                            <div className="ft-sub">{c4?.subtitle}</div>
                        </div>

                        <div className="ft-code">
                            <div className="ft-code-dots">
                                <div
                                    className="ft-code-dot"
                                    style={{ background: 'rgba(255,95,86,0.5)' }}
                                />
                                <div
                                    className="ft-code-dot"
                                    style={{ background: 'rgba(255,189,46,0.5)' }}
                                />
                                <div
                                    className="ft-code-dot"
                                    style={{ background: 'rgba(39,201,63,0.5)' }}
                                />
                            </div>
                            <div>
                                <span className="kw">const</span> <span className="fn">api</span> = <span className="fn">createAPI</span>(&#123;
                            </div>
                            <div>
                                &nbsp;&nbsp;<span className="str">baseURL</span>: <span className="str">'/v1'</span>,
                            </div>
                            <div>
                                &nbsp;&nbsp;<span className="str">auth</span>: <span className="str">'bearer'</span>,
                            </div>
                            <div>&#125;)</div>
                            <div style={{ marginTop: 6 }}>
                                <span className="cm">// Fast. Secure. Modular.</span>
                            </div>
                            <div>
                                <span className="fn">api</span>.<span className="fn">get</span>(<span className="str">'/users'</span>)
                            </div>
                        </div>
                    </div>
                </div>

                {/* ══ Card 5 — Trusted by Teams ════════════════════════ */}
                <div className="gl-card ft-c3">
                    <div
                        style={{
                            position: 'absolute',
                            bottom: -40,
                            left: -40,
                            width: 200,
                            height: 200,
                            borderRadius: '50%',
                            background: 'oklch(0.623 0.214 259.815)',
                            filter: 'blur(70px)',
                            opacity: 0.1,
                            pointerEvents: 'none'
                        }}
                    />

                    <div
                        className="ft-body"
                        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, height: '100%', alignItems: 'center' }}>
                        <div>
                            <div className="ft-ring">
                                <Users
                                    size={20}
                                    color="oklch(0.707 0.165 254.624)"
                                    strokeWidth={1.5}
                                />
                            </div>
                            <div className="ft-title">{c5?.title}</div>
                            <div className="ft-sub">{c5?.subtitle}</div>
                        </div>

                        <div
                            style={{
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                gap: 20,
                                padding: '10px 0',
                                height: '100%'
                            }}>
                            <div className="ft-av-line" />

                            <div className="ft-av-row r">
                                <span className="ft-av-tag">{c5?.avatarName1}</span>
                                <img
                                    className="ft-av-img"
                                    src={c5?.avatar1}
                                    alt={c5?.avatarName1}
                                />
                            </div>
                            <div
                                className="ft-av-row"
                                style={{ paddingLeft: '50%' }}>
                                <img
                                    className="ft-av-img"
                                    src={c5?.avatar2}
                                    alt={c5?.avatarName2}
                                />
                                <span className="ft-av-tag">{c5?.avatarName2}</span>
                            </div>
                            <div className="ft-av-row r">
                                <span className="ft-av-tag">{c5?.avatarName3}</span>
                                <img
                                    className="ft-av-img"
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
