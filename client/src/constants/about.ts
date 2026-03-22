// ─── About Page Constants ─────────────────────────────────────────────────────

export const aboutData = {
    // ── Hero ──────────────────────────────────────────────────────────────────
    hero: {
        badge: 'WHO WE ARE',
        titleLine1: 'WE BUILD',
        titleStroke: ' DIGITAL',
        titleEm: 'Experiences',
        body: 'Albero Technologies is a full-stack web development studio crafting high-performance, visually stunning digital products for startups and enterprises worldwide.',
        chips: [
            { num: '3+', label: 'Years Building' },
            { num: '113+', label: 'Projects Shipped' },
            { num: '67+', label: 'Happy Clients' },
            { num: '95%', label: 'Satisfaction Rate' }
        ]
    },

    // ── Mission ───────────────────────────────────────────────────────────────
    mission: {
        label: 'OUR MISSION',
        title: 'Empowering Businesses',
        titleEm: ' Through Technology',
        body1Parts: {
            before: "We believe every business deserves world-class digital infrastructure. Our mission is to bridge the gap between ambition and execution — delivering software that doesn't just work, but ",
            bold: 'wins',
            after: '.'
        },
        body2: 'From early-stage startups to established enterprises, we bring the same level of craft, care, and commitment to every project we take on.',
        tags: ['Innovation First', 'Client Focused', 'Scalable Solutions', 'Quality Driven'],
        values: [
            {
                icon: '⚡',
                title: 'Speed Without Compromise',
                desc: 'We ship fast without cutting corners — every line of code is intentional.'
            },
            {
                icon: '🎯',
                title: 'Precision Engineering',
                desc: 'Pixel-perfect interfaces backed by robust, maintainable architecture.'
            },
            {
                icon: '🤝',
                title: 'True Partnership',
                desc: 'We embed with your team, not just deliver a product and disappear.'
            },
            {
                icon: '🔮',
                title: 'Future-Ready Builds',
                desc: 'Architectures designed to scale with your ambitions, not against them.'
            }
        ]
    },

    // ── Story / Timeline ──────────────────────────────────────────────────────
    story: {
        label: 'OUR STORY',
        title: 'From a Small Team to',
        titleEm: ' A Global Studio',
        timeline: [
            {
                year: '2021',
                title: 'The Beginning',
                desc: 'Albero was founded with a single mission — build software that makes a real difference. Started with two developers and a laptop.',
                side: 'left'
            },
            {
                year: '2022',
                title: 'First 20 Clients',
                desc: 'Word spread fast. We onboarded our first 20 clients across industries from education to e-commerce, learning what truly great products look like.',
                side: 'right'
            },
            {
                year: '2023',
                title: 'Expanding Services',
                desc: 'We expanded into digital marketing, UI/UX design, and enterprise solutions — becoming a true end-to-end technology partner.',
                side: 'left'
            },
            {
                year: '2024',
                title: 'Going Global',
                desc: 'Crossed 100 projects, entered international markets, and built a team of specialists across development, design, and strategy.',
                side: 'right'
            },
            {
                year: '2025',
                title: 'Today & Beyond',
                desc: 'Now a full-stack studio with 67+ active clients, we continue to push the boundaries of what digital products can achieve.',
                side: 'left'
            }
        ]
    },

    // ── Team ──────────────────────────────────────────────────────────────────
    team: {
        label: 'THE TEAM',
        title: 'People Behind',
        titleEm: ' The Magic',
        body: 'A small but mighty team of engineers, designers, and strategists obsessed with building things people love to use.',
        members: [
            { name: 'Taher Maksee', role: 'Founder & Lead Developer', emoji: '👨‍💻', tags: ['React', 'Node.js', 'Architecture'] },
            { name: 'Design Lead', role: 'UI/UX & Brand Design', emoji: '🎨', tags: ['Figma', 'Motion', 'Branding'] },
            { name: 'Backend Engineer', role: 'Systems & Infrastructure', emoji: '⚙️', tags: ['AWS', 'PostgreSQL', 'APIs'] },
            { name: 'Growth Lead', role: 'Marketing & Strategy', emoji: '📈', tags: ['SEO', 'Analytics', 'Growth'] }
        ]
    },

    // ── Stats ─────────────────────────────────────────────────────────────────
    stats: {
        label: 'BY THE NUMBERS',
        title: 'Results That',
        titleEm: ' Speak Louder',
        items: [
            { num: '113', suffix: '+', label: 'Projects Completed' },
            { num: '67', suffix: '+', label: 'Happy Clients' },
            { num: '3', suffix: '+', label: 'Years Experience' },
            { num: '95', suffix: '%', label: 'Client Satisfaction' }
        ]
    },

    // ── Why Us ────────────────────────────────────────────────────────────────
    whyUs: {
        label: 'WHY ALBERO',
        title: 'What Sets Us',
        titleEm: ' Apart',
        cards: [
            {
                icon: '🏗️',
                title: 'End-to-End Ownership',
                desc: 'From wireframe to deployment to maintenance — we own the full lifecycle so nothing falls through the cracks.'
            },
            {
                icon: '💬',
                title: 'Radical Transparency',
                desc: 'Weekly updates, open timelines, and direct access to your dev team. No middlemen, no surprises.'
            },
            {
                icon: '📐',
                title: 'Design-First Thinking',
                desc: "Every product starts with design. We believe great UX is not a luxury — it's the foundation of good software."
            },
            {
                icon: '🔒',
                title: 'Security by Default',
                desc: 'Enterprise-grade security practices baked into every project from day one.'
            },
            {
                icon: '🚀',
                title: 'Fast Turnaround',
                desc: 'We move with urgency. Most MVPs shipped in 4–6 weeks without sacrificing quality.'
            },
            {
                icon: '📞',
                title: '24/7 Support',
                desc: 'Post-launch support, monitoring, and rapid response whenever you need us.'
            }
        ]
    },

    // ── CTA ───────────────────────────────────────────────────────────────────
    cta: {
        title: 'Ready to Build',
        titleEm: 'Something Great?',
        body: "Let's talk about your project. No commitments, just a conversation.",
        primaryLabel: 'Start a Project',
        primaryHref: '#contact',
        secondaryLabel: 'View Our Work →',
        secondaryHref: '/work'
    }
}
