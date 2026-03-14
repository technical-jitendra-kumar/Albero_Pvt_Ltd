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
    IconShieldLock,
    IconBuildingSkyscraper,
    IconSchool,
    IconUsers,
    IconClipboardList,
    IconChartBar,
    IconHeadset
} from '@tabler/icons-react'
import type { ComponentType } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PricingService {
    name: string
    description: string
    icon: ComponentType<{ size?: number; className?: string }>
    category: 'Development' | 'Design' | 'Marketing' | 'Infrastructure' | 'Support'
    // ── Uncomment when ready to show prices ──
    // priceRange: { usd: string; eur: string; inr: string }
    // frequency: string
}

export interface ProductTier {
    label: string
    limit: string
    cta: string
    features: string[]
    highlighted?: boolean
    // ── Uncomment when ready to show prices ──
    // monthlyUSD: number   // 0 = Free, -1 = Custom
    // yearlyUSD: number
}

export interface ProductSubscription {
    id: string
    name: string
    tagline: string
    description: string
    icon: ComponentType<{ size?: number; className?: string }>
    accent: string
    accentBg: string
    tiers: ProductTier[]
}

// ─── All Services ─────────────────────────────────────────────────────────────

const allServices: PricingService[] = [
    {
        name: 'Custom Website Development',
        description: 'High-performance, responsive websites built from scratch for any business need.',
        icon: IconFileTypeJsx,
        category: 'Development'
        // priceRange: { usd: '$180 – $800', eur: '€165 – €735', inr: '₹15,000 – ₹66,000' },
        // frequency: 'per project',
    },
    {
        name: 'Web Application Development',
        description: 'Scalable web apps using React, Next.js, Laravel, and Node.js.',
        icon: IconBrandReact,
        category: 'Development'
        // priceRange: { usd: '$800 – $5,000', eur: '€735 – €4,600', inr: '₹66,000 – ₹4,17,000' },
        // frequency: 'per project',
    },
    {
        name: 'WordPress & CMS Development',
        description: 'Custom themes, plugins, and full WordPress sites with CMS control.',
        icon: IconBrandWordpress,
        category: 'Development'
        // priceRange: { usd: '$300 – $1,200', eur: '€275 – €1,100', inr: '₹25,000 – ₹1,00,000' },
        // frequency: 'per project',
    },
    {
        name: 'Enterprise Solutions',
        description: 'Custom enterprise-grade applications built on Laravel or Node.js.',
        icon: IconBrandLaravel,
        category: 'Development'
        // priceRange: { usd: '$2,000 – $10,000+', eur: '€1,840 – €9,200+', inr: '₹1,67,000 – ₹8,35,000+' },
        // frequency: 'per project',
    },
    {
        name: 'E-Commerce Development',
        description: 'Full-featured online stores with payments, carts, and inventory management.',
        icon: IconShoppingCart,
        category: 'Development'
        // priceRange: { usd: '$500 – $3,000', eur: '€460 – €2,760', inr: '₹41,700 – ₹2,50,500' },
        // frequency: 'per project',
    },
    {
        name: 'API Development & Integration',
        description: 'Secure REST APIs and third-party integrations for seamless data flow.',
        icon: IconApi,
        category: 'Development'
        // priceRange: { usd: '$300 – $2,000', eur: '€275 – €1,840', inr: '₹25,000 – ₹1,67,000' },
        // frequency: 'per project',
    },
    {
        name: 'UI/UX Product Design',
        description: 'Figma prototypes, user research, wireframes, and full design systems.',
        icon: IconPhotoSquareRounded,
        category: 'Design'
        // priceRange: { usd: '$120 – $600', eur: '€110 – €552', inr: '₹10,000 – ₹50,000' },
        // frequency: 'per project',
    },
    {
        name: 'SEO & Digital Growth',
        description: 'On-page SEO, content strategy, backlinks, and analytics campaigns.',
        icon: IconEyeSearch,
        category: 'Marketing'
        // priceRange: { usd: '$180 – $840', eur: '€165 – €773', inr: '₹15,000 – ₹70,000' },
        // frequency: '/ month',
    },
    {
        name: 'Cloud Hosting & Deployment',
        description: 'Cloud infrastructure setup, CI/CD pipelines, and DevOps management.',
        icon: IconCloud,
        category: 'Infrastructure'
        // priceRange: { usd: '$36 – $300', eur: '€33 – €276', inr: '₹3,000 – ₹25,000' },
        // frequency: '/ month',
    },
    {
        name: 'Performance Optimization',
        description: 'Core Web Vitals, speed audits, caching, and load-time improvements.',
        icon: IconBolt,
        category: 'Support'
        // priceRange: { usd: '$100 – $500', eur: '€92 – €460', inr: '₹8,400 – ₹41,700' },
        // frequency: 'per audit',
    },
    {
        name: 'Website Maintenance',
        description: 'Regular updates, bug fixes, uptime monitoring, and tech support.',
        icon: IconSettings,
        category: 'Support'
        // priceRange: { usd: '$60 – $300', eur: '€55 – €276', inr: '₹5,000 – ₹25,000' },
        // frequency: '/ month',
    },
    {
        name: 'Website Security',
        description: 'Security audits, SSL setup, malware removal, and vulnerability patching.',
        icon: IconShieldLock,
        category: 'Support'
        // priceRange: { usd: '$80 – $400', eur: '€73 – €368', inr: '₹6,700 – ₹33,400' },
        // frequency: 'per audit',
    }
]

// ─── Product Subscriptions ────────────────────────────────────────────────────

export const productSubscriptions: ProductSubscription[] = [
    {
        id: 'crm',
        name: 'CRM Pro',
        tagline: 'Customer Relationship Management',
        description: 'Manage leads, pipelines, and deals. Scale your sales team with automation.',
        icon: IconBuildingSkyscraper,
        accent: 'var(--blue-vivid)',
        accentBg: 'oklch(from var(--blue-vivid) l c h / 0.10)',
        tiers: [
            {
                label: 'Free',
                limit: 'Up to 2 users',
                cta: 'Start Free',
                // monthlyUSD: 0, yearlyUSD: 0,
                features: ['100 contacts', 'Basic pipeline', 'Email support', '1 GB storage']
            },
            {
                label: 'Starter',
                limit: 'Up to 10 users',
                cta: 'Get Started',
                // monthlyUSD: 19, yearlyUSD: 15,
                features: ['5,000 contacts', '3 pipelines', 'Email automation', 'Reports', '10 GB storage']
            },
            {
                label: 'Pro',
                limit: 'Up to 50 users',
                cta: 'Go Pro',
                highlighted: true,
                // monthlyUSD: 49, yearlyUSD: 39,
                features: [
                    'Unlimited contacts',
                    'Unlimited pipelines',
                    'Advanced automation',
                    'Lead scoring',
                    'Analytics dashboard',
                    'Priority support',
                    '50 GB storage'
                ]
            },
            {
                label: 'Enterprise',
                limit: 'Unlimited users',
                cta: 'Contact Sales',
                // monthlyUSD: -1, yearlyUSD: -1,
                features: ['Everything in Pro', 'Custom integrations', 'Dedicated manager', 'SLA guarantee', 'On-premise option', 'Unlimited storage']
            }
        ]
    },
    {
        id: 'lms',
        name: 'LearnFlow LMS',
        tagline: 'Learning Management System',
        description: 'Create and sell courses, track learner progress, and issue certificates.',
        icon: IconSchool,
        accent: 'var(--amber)',
        accentBg: 'oklch(from var(--amber) l c h / 0.10)',
        tiers: [
            {
                label: 'Free',
                limit: '50 learners',
                cta: 'Start Free',
                // monthlyUSD: 0, yearlyUSD: 0,
                features: ['3 courses', 'Basic quizzes', 'Certificates', 'Email support']
            },
            {
                label: 'Educator',
                limit: '500 learners',
                cta: 'Get Started',
                // monthlyUSD: 29, yearlyUSD: 23,
                features: ['Unlimited courses', 'Live sessions', 'Progress tracking', 'Assignments', '20 GB storage']
            },
            {
                label: 'Academy',
                limit: '5,000 learners',
                cta: 'Launch Academy',
                highlighted: true,
                // monthlyUSD: 79, yearlyUSD: 63,
                features: ['Everything in Educator', 'Custom branding', 'SCORM support', 'Advanced analytics', 'API access', 'Priority support']
            },
            {
                label: 'Institution',
                limit: 'Unlimited learners',
                cta: 'Contact Sales',
                // monthlyUSD: -1, yearlyUSD: -1,
                features: ['Everything in Academy', 'Multi-tenant support', 'SSO / SAML', 'Dedicated infra', 'SLA guarantee', 'Custom integrations']
            }
        ]
    },
    {
        id: 'hrms',
        name: 'HRM Suite',
        tagline: 'Human Resource Management',
        description: 'Payroll, attendance, leave, and performance — all automated in one place.',
        icon: IconUsers,
        accent: 'var(--blue-soft)',
        accentBg: 'oklch(from var(--blue-vivid) l c h / 0.08)',
        tiers: [
            {
                label: 'Free',
                limit: 'Up to 10 employees',
                cta: 'Start Free',
                // monthlyUSD: 0, yearlyUSD: 0,
                features: ['Attendance tracking', 'Leave management', 'Basic payroll', 'Email support']
            },
            {
                label: 'Growth',
                limit: 'Up to 50 employees',
                cta: 'Get Started',
                // monthlyUSD: 39, yearlyUSD: 31,
                features: ['Full payroll automation', 'Performance reviews', 'Recruitment module', 'Reports', 'Chat support']
            },
            {
                label: 'Business',
                limit: 'Up to 500 employees',
                cta: 'Scale Business',
                highlighted: true,
                // monthlyUSD: 89, yearlyUSD: 71,
                features: ['Everything in Growth', 'Multi-branch support', 'Custom workflows', 'Payslip portal', 'API access', 'Priority support']
            },
            {
                label: 'Enterprise',
                limit: 'Unlimited employees',
                cta: 'Contact Sales',
                // monthlyUSD: -1, yearlyUSD: -1,
                features: [
                    'Everything in Business',
                    'ERP integration',
                    'Dedicated server',
                    'White-label option',
                    'On-premise available',
                    'SLA guarantee'
                ]
            }
        ]
    },
    {
        id: 'pms',
        name: 'ProjectFlow',
        tagline: 'Project Management System',
        description: 'Kanban, Gantt charts, time tracking, and client portals for modern teams.',
        icon: IconClipboardList,
        accent: 'var(--amber-lt)',
        accentBg: 'oklch(from var(--amber) l c h / 0.09)',
        tiers: [
            {
                label: 'Free',
                limit: '3 projects · 5 users',
                cta: 'Start Free',
                // monthlyUSD: 0, yearlyUSD: 0,
                features: ['Kanban boards', 'Task management', 'File sharing (1 GB)', 'Email support']
            },
            {
                label: 'Team',
                limit: 'Unlimited projects',
                cta: 'Get Started',
                // monthlyUSD: 12, yearlyUSD: 9,
                features: ['Gantt charts', 'Time tracking', 'Budget management', '20 GB storage', 'Guest access']
            },
            {
                label: 'Business',
                limit: 'Unlimited users',
                cta: 'Grow Business',
                highlighted: true,
                // monthlyUSD: 29, yearlyUSD: 23,
                features: ['Everything in Team', 'Client portal', 'Advanced reports', 'Workload view', 'API access', 'Priority support']
            },
            {
                label: 'Enterprise',
                limit: 'Custom',
                cta: 'Contact Sales',
                // monthlyUSD: -1, yearlyUSD: -1,
                features: ['Everything in Business', 'SSO / SAML', 'Custom integrations', 'Dedicated manager', 'SLA guarantee', 'Unlimited storage']
            }
        ]
    },
    {
        id: 'analytics',
        name: 'DataPulse',
        tagline: 'Business Analytics Platform',
        description: 'Dashboards, custom reports, AI forecasting, and 60+ data integrations.',
        icon: IconChartBar,
        accent: 'var(--blue-vivid)',
        accentBg: 'oklch(from var(--blue-vivid) l c h / 0.10)',
        tiers: [
            {
                label: 'Free',
                limit: '3 dashboards',
                cta: 'Start Free',
                // monthlyUSD: 0, yearlyUSD: 0,
                features: ['5 data sources', 'Basic charts', '7-day data history', 'Email support']
            },
            {
                label: 'Analyst',
                limit: '20 dashboards',
                cta: 'Get Started',
                // monthlyUSD: 35, yearlyUSD: 28,
                features: ['20 data sources', 'Custom reports', '90-day history', 'Data export', 'Scheduled reports']
            },
            {
                label: 'Pro',
                limit: 'Unlimited dashboards',
                cta: 'Go Pro',
                highlighted: true,
                // monthlyUSD: 89, yearlyUSD: 71,
                features: ['Unlimited sources', 'AI forecasting', '2-year history', 'Real-time sync', 'API access', 'Priority support']
            },
            {
                label: 'Enterprise',
                limit: 'Custom',
                cta: 'Contact Sales',
                // monthlyUSD: -1, yearlyUSD: -1,
                features: ['Everything in Pro', 'Custom AI models', 'On-premise option', 'Dedicated engineer', 'Unlimited history', 'SLA guarantee']
            }
        ]
    },
    {
        id: 'helpdesk',
        name: 'SupportDesk',
        tagline: 'Customer Support & Helpdesk',
        description: 'Multi-channel tickets, live chat, SLA management, and a shared inbox.',
        icon: IconHeadset,
        accent: 'var(--amber)',
        accentBg: 'oklch(from var(--amber) l c h / 0.10)',
        tiers: [
            {
                label: 'Free',
                limit: '2 agents',
                cta: 'Start Free',
                // monthlyUSD: 0, yearlyUSD: 0,
                features: ['Email channel', '50 tickets/month', 'Knowledge base', 'Basic reports']
            },
            {
                label: 'Support',
                limit: '10 agents',
                cta: 'Get Started',
                // monthlyUSD: 25, yearlyUSD: 20,
                features: ['Email + chat + social', 'Unlimited tickets', 'SLA management', 'Canned responses', 'Team reports']
            },
            {
                label: 'Pro',
                limit: '50 agents',
                cta: 'Go Pro',
                highlighted: true,
                // monthlyUSD: 59, yearlyUSD: 47,
                features: ['Everything in Support', 'Multi-brand inbox', 'AI suggested replies', 'Custom workflows', 'API access', 'Priority support']
            },
            {
                label: 'Enterprise',
                limit: 'Unlimited agents',
                cta: 'Contact Sales',
                // monthlyUSD: -1, yearlyUSD: -1,
                features: ['Everything in Pro', 'Dedicated infra', 'Custom integrations', 'SLA guarantee', 'Audit logs', 'Onboarding manager']
            }
        ]
    }
]

// ─── Export ───────────────────────────────────────────────────────────────────

export const pricingData = {
    badgeTitle: 'Pricing',
    heading: 'Transparent, Affordable Pricing',
    description: 'Explore our SaaS products and development services tailored to grow your business.',
    allServices,
    productSubscriptions
}
