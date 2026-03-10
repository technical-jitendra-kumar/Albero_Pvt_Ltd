import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useNavigate, useLocation } from 'react-router-dom'
import { NavLink } from '../user/common/NavLink'
import { Menu, X } from 'lucide-react'
import Logo from '../../assets/images/logo.png'

const AnimatedNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const navigate = useNavigate()
    const location = useLocation()

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        const targetId = href.replace('#', '')

        if (location.pathname !== '/') {
            // Navigate to home, then scroll after load
            navigate('/', { state: { scrollTo: targetId } })
        } else {
            // Already on home → scroll directly with offset
            const section = document.getElementById(targetId)
            if (section) {
                const yOffset = -60 // 👈 adjust this to your navbar height
                const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset

                window.scrollTo({ top: y, behavior: 'smooth' })
            }
        }
    }

    return (
        <a
            href={href}
            onClick={handleClick}
            className="group relative inline-block overflow-hidden h-5 items-center text-sm">
            <div className="flex flex-col transition-transform duration-500 ease-out transform group-hover:-translate-y-1/2">
                <span className="text-white">{children}</span>
                <span className="text-white">{children}</span>
            </div>
        </a>
    )
}

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    const [isOpen, setIsOpen] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [isPressed, setIsPressed] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    // Disable background scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 0)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <div
            className={`${
                scrolled ? 'fixed bg-transparent' : 'absolute bg-transparent'
            } z-50 w-full flex justify-center py-6 px-4 transition-all duration-500`}>
            {/* Navbar Container with Glass Effect */}
            <div
                className="sticky flex items-center justify-between 
          w-full max-w-3xl px-6 py-3 rounded-full z-10
          border-white/30 bg-black/40 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1),inset_0_0_8px_4px_rgba(255,255,255,0.4)]">
                {/* Logo */}
                <div className="flex items-center">
                    <NavLink href="#home">
                        <motion.div
                            className="relative flex items-center cursor-pointer"
                            initial="rest"
                            whileHover="hover"
                            animate="rest">
                            {/* Logo */}
                            <motion.img
                                src={Logo}
                                alt="Albero Logo"
                                className="w-10 h-10 object-contain"
                                variants={{
                                    rest: { scale: 1 },
                                    hover: { scale: 1.15, rotate: -5 }
                                }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            />

                            {/* Text Reveal (absolute so it doesn’t push links) */}
                            <motion.span
                                className="absolute left-10 text-xl font-semibold tracking-widest text-white whitespace-nowrap"
                                variants={{
                                    rest: { opacity: 0, x: -20 },
                                    hover: { opacity: 1, x: 0 }
                                }}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}>
                                lbero
                            </motion.span>
                        </motion.div>
                    </NavLink>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {['Home', 'About', 'Services', 'Our Work', 'Pricing'].map((item) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            whileHover={{ scale: 1.05 }}>
                            <AnimatedNavLink href={`#${item.toLowerCase()}`}>{item}</AnimatedNavLink>
                        </motion.div>
                    ))}
                </nav>

                {/* 🔥 Desktop CTA (Animated Button) */}
                <motion.div
                    className="hidden md:block relative"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}>
                    <NavLink href="#contact">
                        <button
                            className="group relative border-2 flex justify-center items-center gap-3 border-white/70 rounded-full w-[9.3rem] h-12 
                           transition-all duration-500 ease-out hover:border-white hover:shadow-lg hover:shadow-white/20 
                           hover:scale-105 active:scale-95 overflow-hidden backdrop-blur-sm
                           before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent 
                           before:via-white/5 before:to-transparent before:translate-x-[-100%] 
                           hover:before:translate-x-[100%] before:transition-transform before:duration-700"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => {
                                setIsHovered(false)
                                setIsPressed(false)
                            }}
                            onMouseDown={() => setIsPressed(true)}
                            onMouseUp={() => setIsPressed(false)}>
                            {/* Glow */}
                            <div
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-200/0 via-amber-200/10 to-amber-200/0 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Text */}
                            <span
                                className="text-white font-medium tracking-wide text-sm transition-all duration-300 
                             group-hover:text-amber-50 relative z-10">
                                Contact Us
                            </span>

                            {/* Dot + Ripple */}
                            <span
                                className={`relative z-10 w-4 h-4 bg-amber-200 rounded-full transition-all duration-500 ease-out
                                 ${isHovered ? 'bg-amber-300 shadow-lg shadow-amber-300/50 scale-110' : ''}
                                 ${isPressed ? 'scale-90' : ''}`}>
                                <div
                                    className="absolute inset-0 rounded-full bg-amber-200 animate-ping opacity-0 group-hover:opacity-75"
                                    style={{ animationDuration: '2s' }}></div>
                            </span>
                        </button>
                    </NavLink>
                </motion.div>

                {/* Mobile Menu Button */}
                <motion.button
                    className="md:hidden flex items-center"
                    onClick={toggleMenu}
                    whileTap={{ scale: 0.9 }}>
                    <Menu className="h-6 w-6 text-white" />
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 pt-24 px-6 md:hidden"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}>
                        <motion.button
                            className="absolute top-6 right-6 p-2"
                            onClick={toggleMenu}
                            whileTap={{ scale: 0.9 }}>
                            <X className="h-6 w-6 text-white" />
                        </motion.button>

                        <div className="flex flex-col space-y-6">
                            {['Home', 'About', 'Services', 'Our Work', 'Pricing'].map((item, i) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 + 0.1 }}
                                    exit={{ opacity: 0, x: 20 }}>
                                    <NavLink href={`#${item.toLowerCase()}`}>
                                        <span
                                            className="text-base text-white font-medium"
                                            onClick={toggleMenu}>
                                            {item}
                                        </span>
                                    </NavLink>
                                </motion.div>
                            ))}

                            {/* Mobile CTA (same animated button) */}
                            <NavLink href="#contact">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    className="pt-6">
                                    <button
                                        className="group relative border-2 flex justify-center items-center gap-3 border-white/70 rounded-full w-full h-12 
                                       transition-all duration-500 ease-out hover:border-white hover:shadow-lg hover:shadow-white/20 
                                       hover:scale-105 active:scale-95 overflow-hidden backdrop-blur-sm
                                       before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent 
                                       before:via-white/5 before:to-transparent before:translate-x-[-100%] 
                                       hover:before:translate-x-[100%] before:transition-transform before:duration-700"
                                        onClick={toggleMenu}>
                                        <span className="text-white font-medium tracking-wide text-sm relative z-10">Contact Us</span>
                                    </button>
                                </motion.div>
                            </NavLink>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export { Navbar }
