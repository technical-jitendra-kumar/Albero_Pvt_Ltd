import './App.css'
import { Suspense, lazy, useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

// Components
import Loader from './components/user/common/Loader'
import NotFound from './components/user/not-found/NotFound'
import { Navbar } from './components/ui/navbar'
import OfflinePage from './components/user/common/OfflinePage'
import Footer from './components/ui/animated-footer'
import BackToTopButton from './components/user/common/BackToTopButton'

// Lazy load pages
const Home = lazy(() => import('./pages/user/Home'))
const RefundPolicy = lazy(() => import('./pages/user/Refund'))
const TermsAndPolicies = lazy(() => import('./pages/user/Terms'))
const WorkPage = lazy(() => import('./pages/user/work'))
const AboutPage = lazy(() => import('./pages/user/About'))

export default function App() {
    const [isOnline, setIsOnline] = useState(navigator.onLine)
    const location = useLocation()

    useEffect(() => {
        if (location.state?.scrollTo) {
            const section = document.getElementById(location.state.scrollTo)
            if (section) {
                const yOffset = -60 // same offset as above
                const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
                window.scrollTo({ top: y, behavior: 'smooth' })
            }
        }
    }, [location])

    useEffect(() => {
        const handleOnline = () => setIsOnline(true)
        const handleOffline = () => setIsOnline(false)

        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOffline)

        return () => {
            window.removeEventListener('online', handleOnline)
            window.removeEventListener('offline', handleOffline)
        }
    }, [])

    if (!isOnline) {
        return <OfflinePage />
    }

    return (
        <div>
            {/* <Navbar /> */}
            <Suspense fallback={<Loader />}>
                <Navbar />
                <BackToTopButton />

                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/refund-policy"
                        element={<RefundPolicy />}
                    />

                    <Route
                        path="/terms-and-policies"
                        element={<TermsAndPolicies />}
                    />

                    <Route
                        path="/work"
                        element={<WorkPage />}
                    />

                    <Route
                        path="/about"
                        element={<AboutPage />}
                    />

                    <Route
                        path="*"
                        element={<NotFound />}
                    />
                </Routes>

                {/* Footer */}
                <Footer
                    leftLinks={[
                        { href: '/terms-and-policies', label: 'Terms & policies' },
                        { href: '/refund-policy', label: 'Refund policy' }
                    ]}
                    rightLinks={[
                        { href: '#about', label: 'About' },
                        { href: '#services', label: 'Services' },
                        { href: '#contact', label: 'Contact' },
                        { href: 'https://www.instagram.com/taher_max_', label: 'Instagram' },
                        { href: 'https://github.com/tahermaxse', label: 'Facebook' }
                    ]}
                    copyrightText="Albero 2025. All Rights Reserved"
                />
            </Suspense>
        </div>
    )
}
