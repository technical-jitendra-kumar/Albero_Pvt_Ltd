import { BarChart3, DollarSign } from 'lucide-react'
import { MdOutlineDashboardCustomize } from 'react-icons/md'
import { FaHandshake, FaStopwatch } from 'react-icons/fa'
import { RiCustomerService2Line } from 'react-icons/ri'

const features = [
    { name: '24/7 Customer Support', icon: RiCustomerService2Line, us: true, others: false },
    { name: 'Customizable Solutions', icon: MdOutlineDashboardCustomize, us: true, others: false },
    { name: 'Affordable Pricing', icon: DollarSign, us: true, others: true },
    { name: 'Fast Implementation', icon: FaStopwatch, us: true, others: false },
    { name: 'Advanced Analytics', icon: BarChart3, us: true, others: false },
    { name: 'User-Friendly Dashboard', icon: FaHandshake, us: true, others: false }
]

export const whyChooseUsData = {
    badgeTitle: 'Why Choose Us',
    title: 'Your Success is Our Priority',
    subtitle: 'See how we stack up against the competition with our premium features and dedicated support.',
    col1Name: 'Features',
    col2Name: 'Our Company', // fixed stray '<'
    col3Name: 'Others',
    mobileTitleText: 'Comparison',
    features,
    cardTitle: 'Ready to experience the difference?',
    cardSubtitle: "Join hundreds of satisfied clients who've chosen our premium services.",
    ctaLabel: 'Get Started Today'
}
