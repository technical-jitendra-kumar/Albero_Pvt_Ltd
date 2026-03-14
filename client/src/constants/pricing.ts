import {
    IconFileTypeJsx,
    IconBrandWordpress,
    IconBrandLaravel,
    IconBrandReact,
    IconPhotoSquareRounded,
    IconCloud,
    IconEyeSearch,
    IconShoppingCart,
    IconApi,
    IconSettings,
    IconBolt,
    IconShieldLock
} from '@tabler/icons-react'
import type { ComponentType } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PricingPlan {
    name: string
    tag: string
    info: string
    price: number // base USD
    features: { text: string }[]
    btn: { text: string; variant: string }
    highlighted?: boolean
}

export interface PricingService {
    name: string
    description: string
    icon: ComponentType<{ size?: number; className?: string }>
    priceRange: { inr: string; usd: string; eur: string }
    frequency: string
    category: 'Development' | 'Design' | 'Marketing' | 'Infrastructure' | 'Support'
}

// ─── Plans ────────────────────────────────────────────────────────────────────

const plans: PricingPlan[] = [
    {
        name: 'HTML/CSS',
        tag: 'Basic',
        info: 'Perfect for simple static websites',
        price: 180,
        features: [
            { text: 'Up to 5 static pages (HTML, CSS, JS)' },
            { text: 'Fully responsive design' },
            { text: 'Basic SEO setup (meta tags, sitemap)' },
            { text: 'Fast-loading lightweight site' },
            { text: 'Contact form with email integration' },
            { text: '1 round of revisions included' },
            { text: 'Email support (Mon–Fri)' }
        ],
        btn: { text: 'Contact Us', variant: 'outline' }
    },
    {
        name: 'WordPress',
        tag: 'Standard',
        info: 'Flexible CMS for blogs, business, and e-commerce',
        price: 300,
        features: [
            { text: 'Custom WordPress theme design & setup' },
            { text: 'Up to 10 pages with CMS editing' },
            { text: 'E-commerce support (WooCommerce)' },
            { text: 'SEO plugins & optimization' },
            { text: 'Blog setup with categories & tags' },
            { text: 'Plugin integration (forms, sliders, galleries)' },
            { text: '2 rounds of revisions included' },
            { text: 'Email & chat support' }
        ],
        btn: { text: 'Contact Us', variant: 'secondary' }
    },
    {
        name: 'MERN Stack',
        tag: 'Most Popular',
        info: 'Best for startups & businesses scaling fast',
        price: 1800,
        features: [
            { text: 'Full-stack app with MongoDB, Express, React, Node.js' },
            { text: 'Dynamic pages with CMS or admin panel' },
            { text: 'User authentication & roles' },
            { text: 'E-commerce functionality (shopping cart, payments)' },
            { text: 'API integrations (third-party services)' },
            { text: 'Advanced SEO + analytics setup' },
            { text: '3 rounds of revisions included' },
            { text: 'Priority email & chat support' }
        ],
        btn: { text: 'Get Premium Quote', variant: 'default' },
        highlighted: true
    },
    {
        name: 'Laravel Advanced',
        tag: 'Enterprise',
        info: 'Enterprise-grade solution with PHP & Laravel',
        price: 600,
        features: [
            { text: 'Custom Laravel backend with scalable architecture' },
            { text: 'Advanced e-commerce (multi-vendor, subscriptions)' },
            { text: 'Robust REST APIs / GraphQL support' },
            { text: 'Integration with CRM, ERP, or internal tools' },
            { text: 'Advanced security (JWT, OAuth, 2FA)' },
            { text: 'Performance optimization & caching' },
            { text: 'Dedicated project manager' },
            { text: 'Ongoing maintenance & updates' },
            { text: '24/7 premium support' }
        ],
        btn: { text: 'Contact Enterprise Team', variant: 'destructive' }
    }
]

// ─── All Services Pricing ─────────────────────────────────────────────────────

const allServices: PricingService[] = [
    // ── Development ──
    {
        name: 'Custom Website Development',
        description: 'High-performance, responsive websites built from scratch for any business need.',
        icon: IconFileTypeJsx,
        priceRange: { usd: '$180 – $800', eur: '€165 – €735', inr: '₹15,000 – ₹66,000' },
        frequency: 'per project',
        category: 'Development'
    },
    {
        name: 'Web Application Development',
        description: 'Scalable web apps using React, Next.js, Laravel, and Node.js.',
        icon: IconBrandReact,
        priceRange: { usd: '$800 – $5,000', eur: '€735 – €4,600', inr: '₹66,000 – ₹4,17,000' },
        frequency: 'per project',
        category: 'Development'
    },
    {
        name: 'WordPress & CMS Development',
        description: 'Custom themes, plugins, and full WordPress sites with CMS control.',
        icon: IconBrandWordpress,
        priceRange: { usd: '$300 – $1,200', eur: '€275 – €1,100', inr: '₹25,000 – ₹1,00,000' },
        frequency: 'per project',
        category: 'Development'
    },
    {
        name: 'Enterprise Solutions',
        description: 'Custom enterprise-grade applications built on Laravel or Node.js.',
        icon: IconBrandLaravel,
        priceRange: { usd: '$2,000 – $10,000+', eur: '€1,840 – €9,200+', inr: '₹1,67,000 – ₹8,35,000+' },
        frequency: 'per project',
        category: 'Development'
    },
    {
        name: 'E-Commerce Development',
        description: 'Full-featured online stores with payments, carts, and inventory management.',
        icon: IconShoppingCart,
        priceRange: { usd: '$500 – $3,000', eur: '€460 – €2,760', inr: '₹41,700 – ₹2,50,500' },
        frequency: 'per project',
        category: 'Development'
    },
    {
        name: 'API Development & Integration',
        description: 'Secure REST APIs and third-party integrations for seamless data flow.',
        icon: IconApi,
        priceRange: { usd: '$300 – $2,000', eur: '€275 – €1,840', inr: '₹25,000 – ₹1,67,000' },
        frequency: 'per project',
        category: 'Development'
    },
    // ── Design ──
    {
        name: 'UI/UX Product Design',
        description: 'Figma prototypes, user research, wireframes, and full design systems.',
        icon: IconPhotoSquareRounded,
        priceRange: { usd: '$120 – $600', eur: '€110 – €552', inr: '₹10,000 – ₹50,000' },
        frequency: 'per project',
        category: 'Design'
    },
    // ── Marketing ──
    {
        name: 'SEO & Digital Growth',
        description: 'On-page SEO, content strategy, backlinks, and analytics campaigns.',
        icon: IconEyeSearch,
        priceRange: { usd: '$180 – $840', eur: '€165 – €773', inr: '₹15,000 – ₹70,000' },
        frequency: '/ month',
        category: 'Marketing'
    },
    // ── Infrastructure ──
    {
        name: 'Cloud Hosting & Deployment',
        description: 'Cloud infrastructure setup, CI/CD pipelines, and DevOps management.',
        icon: IconCloud,
        priceRange: { usd: '$36 – $300', eur: '€33 – €276', inr: '₹3,000 – ₹25,000' },
        frequency: '/ month',
        category: 'Infrastructure'
    },
    // ── Support ──
    {
        name: 'Performance Optimization',
        description: 'Core Web Vitals, speed audits, caching, and load-time improvements.',
        icon: IconBolt,
        priceRange: { usd: '$100 – $500', eur: '€92 – €460', inr: '₹8,400 – ₹41,700' },
        frequency: 'per audit',
        category: 'Support'
    },
    {
        name: 'Website Maintenance',
        description: 'Regular updates, bug fixes, uptime monitoring, and tech support.',
        icon: IconSettings,
        priceRange: { usd: '$60 – $300', eur: '€55 – €276', inr: '₹5,000 – ₹25,000' },
        frequency: '/ month',
        category: 'Support'
    },
    {
        name: 'Website Security',
        description: 'Security audits, SSL setup, malware removal, and vulnerability patching.',
        icon: IconShieldLock,
        priceRange: { usd: '$80 – $400', eur: '€73 – €368', inr: '₹6,700 – ₹33,400' },
        frequency: 'per audit',
        category: 'Support'
    }
]

// ─── Export ───────────────────────────────────────────────────────────────────

export const pricingData = {
    badgeTitle: 'Pricing',
    heading: 'Transparent, Affordable Pricing',
    description: 'Choose the perfect plan for your project. All prices include design, development, and initial support.',
    plans,
    allServices,
    // legacy shape kept for backward compat
    services: [
        {
            name: 'Maintenance Plans',
            priceRange: { inr: '₹5,000 – ₹25,000', usd: '$60 – $300', eur: '€55 – €255' },
            frequency: '/ month',
            description: 'Regular updates, security patches, and technical support'
        },
        {
            name: 'Hosting & Domain',
            priceRange: { inr: '₹3,000 – ₹10,000', usd: '$36 – $120', eur: '€32 – €100' },
            frequency: '/ year',
            description: 'Reliable hosting with SSL certificates and domain management'
        },
        {
            name: 'UI/UX Design',
            priceRange: { inr: '₹10,000 – ₹50,000', usd: '$120 – $600', eur: '€110 – €510' },
            frequency: '',
            description: 'Custom design solutions and user experience optimization'
        },
        {
            name: 'SEO & Marketing',
            priceRange: { inr: '₹15,000 – ₹70,000', usd: '$180 – $840', eur: '€165 – €715' },
            frequency: '',
            description: 'Search engine optimization and digital marketing campaigns'
        }
    ]
}
