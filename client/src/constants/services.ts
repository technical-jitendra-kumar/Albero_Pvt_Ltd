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

export interface ServiceFeature {
    title: string
    description: string
    icon: ComponentType<{ size?: number; className?: string }>
}

export interface ProductStat {
    label: string
    value: string
}

export interface Product {
    id: string
    name: string
    tagline: string
    description: string
    icon: ComponentType<{ size?: number; className?: string }>
    accent: string
    accentBg: string
    badge: string
    stats: ProductStat[]
    features: string[]
}

// ─── Services ─────────────────────────────────────────────────────────────────

const features: ServiceFeature[] = [
    {
        title: 'Custom Website Development',
        description: 'High-performance websites designed for speed, responsiveness, and seamless user experiences across all devices.',
        icon: IconFileTypeJsx
    },
    {
        title: 'Web Application Development',
        description: 'Scalable web applications using modern frameworks like React, Next.js, Laravel, and Node.js.',
        icon: IconBrandReact
    },
    {
        title: 'WordPress & CMS Development',
        description: 'Flexible content-driven websites using WordPress and custom CMS solutions tailored for business growth.',
        icon: IconBrandWordpress
    },
    {
        title: 'UI/UX Product Design',
        description: 'Intuitive user interfaces and product experiences designed to increase engagement and usability.',
        icon: IconPhotoSquareRounded
    },
    {
        title: 'Cloud Hosting & Deployment',
        description: 'Reliable cloud infrastructure, hosting management, and CI/CD deployment for scalable digital platforms.',
        icon: IconCloud
    },
    {
        title: 'SEO & Digital Growth',
        description: 'Data-driven SEO and digital growth strategies to increase visibility, traffic, and conversions.',
        icon: IconEyeSearch
    },
    {
        title: 'Enterprise Solutions',
        description: 'Custom enterprise-grade applications designed to automate workflows and improve operational efficiency.',
        icon: IconBrandLaravel
    },
    {
        title: 'E-Commerce Development',
        description: 'Custom online stores with secure payments, inventory management, and optimized checkout experiences.',
        icon: IconShoppingCart
    },
    {
        title: 'API Development',
        description: 'Secure REST API development and third-party integrations for seamless data communication.',
        icon: IconApi
    },
    {
        title: 'Website Maintenance',
        description: 'Ongoing support, updates, performance monitoring, and bug fixes to keep your website running smoothly.',
        icon: IconSettings
    },
    {
        title: 'Performance Optimization',
        description: 'Speed optimization, Core Web Vitals improvements, and performance tuning for better SEO and UX.',
        icon: IconBolt
    },
    {
        title: 'Website Security',
        description: 'Security audits, SSL configuration, malware protection, and vulnerability fixes.',
        icon: IconShieldLock
    }
]

// ─── Products ─────────────────────────────────────────────────────────────────

export const productsData: Product[] = [
    {
        id: 'crm',
        name: 'CRM Pro',
        tagline: 'Customer Relationship Management',
        description:
            'A powerful CRM platform to manage leads, pipelines, and customer interactions — all in one place. Automate follow-ups and close deals faster.',
        icon: IconBuildingSkyscraper,
        accent: 'var(--blue-vivid)',
        accentBg: 'oklch(0.623 0.214 259.815 / 0.10)',
        badge: 'Most Popular',
        stats: [
            { label: 'Active Users', value: '12K+' },
            { label: 'Deals Closed', value: '98K+' },
            { label: 'Uptime', value: '99.9%' }
        ],
        features: ['Pipeline Management', 'Lead Scoring', 'Email Automation', 'Analytics Dashboard', 'Team Collaboration', 'Mobile App']
    },
    {
        id: 'lms',
        name: 'LearnFlow LMS',
        tagline: 'Learning Management System',
        description:
            'A feature-rich LMS for schools, enterprises, and online educators. Create courses, track progress, and certify learners with ease.',
        icon: IconSchool,
        accent: 'var(--amber)',
        accentBg: 'oklch(0.795 0.184 86.047 / 0.10)',
        badge: 'New',
        stats: [
            { label: 'Learners', value: '50K+' },
            { label: 'Courses', value: '3K+' },
            { label: 'Completion Rate', value: '87%' }
        ],
        features: ['Course Builder', 'Live Sessions', 'Quizzes & Exams', 'Certificates', 'Progress Tracking', 'SCORM Support']
    },
    {
        id: 'hrms',
        name: 'HRM Suite',
        tagline: 'Human Resource Management',
        description: 'Streamline HR operations with smart tools for recruitment, payroll, attendance, and employee performance — all under one roof.',
        icon: IconUsers,
        accent: 'var(--blue-vivid)',
        accentBg: 'oklch(0.623 0.214 259.815 / 0.10)',
        badge: 'Beta',
        stats: [
            { label: 'Employees Managed', value: '200K+' },
            { label: 'Companies', value: '800+' },
            { label: 'Time Saved', value: '40%' }
        ],
        features: [
            'Payroll Automation',
            'Attendance Tracking',
            'Leave Management',
            'Performance Reviews',
            'Recruitment Module',
            'Self-Service Portal'
        ]
    },
    {
        id: 'pms',
        name: 'ProjectFlow',
        tagline: 'Project Management System',
        description:
            'Plan, execute, and deliver projects on time. Kanban boards, Gantt charts, team tasks, and real-time collaboration — built for modern teams.',
        icon: IconClipboardList,
        accent: 'var(--amber)',
        accentBg: 'oklch(0.795 0.184 86.047 / 0.10)',
        badge: 'Popular',
        stats: [
            { label: 'Projects Launched', value: '25K+' },
            { label: 'Tasks Completed', value: '1.2M+' },
            { label: 'Team Members', value: '80K+' }
        ],
        features: ['Kanban Boards', 'Gantt Charts', 'Time Tracking', 'File Sharing', 'Budget Management', 'Client Portal']
    },
    {
        id: 'analytics',
        name: 'DataPulse',
        tagline: 'Business Analytics Platform',
        description:
            'Turn raw data into actionable insights with interactive dashboards, custom reports, and AI-powered trend analysis for your business.',
        icon: IconChartBar,
        accent: 'var(--blue-vivid)',
        accentBg: 'oklch(0.623 0.214 259.815 / 0.10)',
        badge: 'AI-Powered',
        stats: [
            { label: 'Data Points/Day', value: '10M+' },
            { label: 'Reports Generated', value: '500K+' },
            { label: 'Integrations', value: '60+' }
        ],
        features: ['Real-Time Dashboards', 'Custom Reports', 'AI Forecasting', 'Data Import/Export', 'Role-Based Access', 'API Access']
    },
    {
        id: 'helpdesk',
        name: 'SupportDesk',
        tagline: 'Customer Support & Helpdesk',
        description:
            'Deliver exceptional customer support with a multi-channel helpdesk. Manage tickets, live chat, and feedback from a single intuitive panel.',
        icon: IconHeadset,
        accent: 'var(--amber)',
        accentBg: 'oklch(0.795 0.184 86.047 / 0.10)',
        badge: 'Trusted',
        stats: [
            { label: 'Tickets Resolved', value: '2M+' },
            { label: 'Avg Response Time', value: '< 2min' },
            { label: 'Satisfaction Rate', value: '96%' }
        ],
        features: ['Ticket Management', 'Live Chat', 'Knowledge Base', 'SLA Management', 'Multi-Channel Inbox', 'Reports & Analytics']
    }
]

// ─── servicesData ─────────────────────────────────────────────────────────────

export const servicesData = {
    badgeTitle: 'Our Services',
    heading: 'Comprehensive Web Development Solutions',
    description: 'From simple websites to complex enterprise applications, we deliver solutions tailored to your needs.',
    features
}
