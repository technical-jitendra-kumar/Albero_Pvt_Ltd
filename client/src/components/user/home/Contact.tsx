import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Facebook, Instagram, Linkedin, Loader2, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { useContactForm } from '@/hooks/user/useContactForm'
import { contactData } from '@/constants/contact'
import axios from 'axios'
import toast from 'react-hot-toast'

export const Contact = () => {
    const { submitForm, loading } = useContactForm()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const success = await submitForm(formData)

        if (success) {
            await handleSubmitGoogleForm()
            setFormData({ name: '', email: '', phone: '', message: '' })
        }
    }

    const handleSubmitGoogleForm = async () => {
        const scriptURL = import.meta.env.VITE_SHEET_URL
        const formDataSheet = new FormData()
        formDataSheet.append('Name', formData.name)
        formDataSheet.append('Email', formData.email)
        formDataSheet.append('Phone', formData.phone || 'N/A')
        formDataSheet.append('Message', formData.message)
        const today = new Date()
        const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
        const formattedTime = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
        formDataSheet.append('Date', formattedDate)
        formDataSheet.append('Time', formattedTime)
        try {
            const response = await axios.post(scriptURL as string, formDataSheet, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
            if (response.status !== 200) throw new Error('Failed to submit to Google Sheets')
            return true
        } catch {
            toast.error('Something went wrong! Please try again later.')
            return false
        }
    }

    return (
        <section
            id="contact"
            className="px-5 py-12 md:py-20 text-white"
            style={{ background: 'transparent', position: 'relative', overflow: 'hidden' }}>
            <style>{`
                .ct-orb { position:absolute; border-radius:50%; pointer-events:none; filter:blur(10px); }

                /* Form glass card */
                .ct-form-card {
                    background: linear-gradient(135deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.018) 50%, rgba(99,102,241,0.04) 100%) !important;
                    backdrop-filter: blur(24px) saturate(1.4) !important;
                    -webkit-backdrop-filter: blur(24px) saturate(1.4) !important;
                    border: 1px solid rgba(255,255,255,0.09) !important;
                    box-shadow: 0 0 0 1px rgba(255,255,255,0.04) inset, 0 1px 0 rgba(255,255,255,0.12) inset, 0 24px 64px rgba(0,0,0,0.45), 0 4px 16px rgba(0,0,0,0.3) !important;
                    border-radius: 20px !important;
                    position: relative; overflow: hidden; isolation: isolate;
                    transition: border-color 0.3s, box-shadow 0.3s;
                }
                .ct-form-card::before {
                    content: ''; position: absolute; top: 0; left: 10%; right: 10%; height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18) 40%, rgba(255,255,255,0.18) 60%, transparent);
                    pointer-events: none; z-index: 10;
                }
                .ct-form-card::after {
                    content: ''; position: absolute; inset: 0; border-radius: inherit;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
                    background-size: 200px 200px; pointer-events: none; opacity: 0.55; z-index: 1;
                }
                .ct-form-card:hover {
                    border-color: rgba(99,102,241,0.28) !important;
                    box-shadow: 0 0 0 1px rgba(255,255,255,0.06) inset, 0 1px 0 rgba(255,255,255,0.16) inset, 0 32px 80px rgba(0,0,0,0.52), 0 0 36px rgba(99,102,241,0.1), 0 8px 24px rgba(0,0,0,0.35) !important;
                }

                /* Inputs */
                .ct-form-card input, .ct-form-card textarea {
                    background: rgba(255,255,255,0.04) !important;
                    border: 1px solid rgba(255,255,255,0.09) !important;
                    border-radius: 10px !important;
                    color: rgba(255,255,255,0.88) !important;
                    font-family: var(--font-barlow) !important;
                    font-size: 14px !important;
                    backdrop-filter: blur(8px);
                    box-shadow: 0 1px 0 rgba(255,255,255,0.05) inset !important;
                    transition: border-color 0.2s, box-shadow 0.2s, background 0.2s !important;
                    outline: none !important;
                }
                .ct-form-card input::placeholder, .ct-form-card textarea::placeholder { color: rgba(255,255,255,0.2) !important; }
                .ct-form-card input:focus, .ct-form-card textarea:focus {
                    border-color: rgba(99,102,241,0.5) !important;
                    background: rgba(99,102,241,0.06) !important;
                    box-shadow: 0 1px 0 rgba(255,255,255,0.07) inset, 0 0 0 3px rgba(99,102,241,0.12) !important;
                }

                /* Labels */
                .ct-form-card label {
                    font-family: var(--font-barlow-condensed) !important;
                    font-size: 10px !important; font-weight: 700 !important;
                    letter-spacing: 0.12em !important; text-transform: uppercase !important;
                    color: rgba(255,255,255,0.32) !important;
                }

                /* Form title */
                .ct-form-card h3 {
                    font-family: var(--font-bebas) !important;
                    font-size: clamp(24px, 2.8vw, 32px) !important;
                    letter-spacing: 0.03em !important;
                    color: rgba(255,255,255,0.95) !important;
                }

                /* Submit */
                .ct-submit-btn {
                    width: 100%; display: inline-flex !important; align-items: center !important;
                    justify-content: center !important; padding: 12px 24px !important;
                    border-radius: 10px !important; font-family: var(--font-barlow-condensed) !important;
                    font-size: 14px !important; font-weight: 700 !important;
                    letter-spacing: 0.08em !important; text-transform: uppercase !important;
                    cursor: pointer !important;
                    background: linear-gradient(135deg, rgba(99,102,241,0.22), rgba(99,102,241,0.1)) !important;
                    border: 1px solid rgba(99,102,241,0.4) !important;
                    color: oklch(0.707 0.165 254.624) !important;
                    backdrop-filter: blur(8px) !important;
                    box-shadow: 0 1px 0 rgba(255,255,255,0.1) inset, 0 0 20px rgba(99,102,241,0.12) !important;
                    transition: opacity 0.2s, transform 0.2s !important;
                }
                .ct-submit-btn:hover { opacity: 0.9 !important; transform: translateY(-1px) !important; }

                /* Right col headings */
                .ct-right h3 {
                    font-family: var(--font-bebas) !important;
                    font-size: clamp(22px, 2.5vw, 28px) !important;
                    letter-spacing: 0.03em !important; color: rgba(255,255,255,0.95) !important;
                }
                .ct-right h4 {
                    font-family: var(--font-barlow-condensed) !important;
                    font-size: 11px !important; font-weight: 700 !important;
                    letter-spacing: 0.14em !important; text-transform: uppercase !important;
                    color: rgba(255,255,255,0.28) !important;
                }

                /* Contact link rows */
                .ct-contact-link {
                    display: flex !important; align-items: center !important; gap: 12px !important;
                    padding: 12px 14px !important; border-radius: 12px !important;
                    border: 1px solid rgba(255,255,255,0.06) !important;
                    background: rgba(255,255,255,0.03) !important;
                    backdrop-filter: blur(8px) !important;
                    box-shadow: 0 1px 0 rgba(255,255,255,0.04) inset !important;
                    text-decoration: none !important;
                    transition: background 0.2s, border-color 0.2s !important;
                    color: rgba(255,255,255,0.6) !important;
                    font-family: var(--font-barlow) !important; font-size: 14px !important;
                }
                .ct-contact-link:hover {
                    background: rgba(99,102,241,0.1) !important;
                    border-color: rgba(99,102,241,0.3) !important;
                    color: rgba(255,255,255,0.9) !important;
                }
                .ct-link-icon {
                    width: 34px; height: 34px; border-radius: 9px; flex-shrink: 0;
                    background: rgba(99,102,241,0.14); border: 1px solid rgba(99,102,241,0.28);
                    box-shadow: 0 1px 0 rgba(255,255,255,0.08) inset;
                    display: flex; align-items: center; justify-content: center;
                    color: oklch(0.707 0.165 254.624) !important;
                }

                /* Social buttons */
                .ct-social-btn {
                    width: 40px !important; height: 40px !important; border-radius: 10px !important;
                    background: rgba(255,255,255,0.04) !important;
                    border: 1px solid rgba(255,255,255,0.08) !important;
                    backdrop-filter: blur(8px) !important;
                    box-shadow: 0 1px 0 rgba(255,255,255,0.06) inset !important;
                    color: rgba(255,255,255,0.35) !important;
                    transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s !important;
                }
                .ct-social-btn:hover {
                    background: rgba(99,102,241,0.18) !important;
                    border-color: rgba(99,102,241,0.4) !important;
                    color: oklch(0.707 0.165 254.624) !important;
                    transform: translateY(-2px) !important;
                }

                /* CTA card */
                .ct-cta-card {
                    background: linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(99,102,241,0.05) 100%) !important;
                    border: 1px solid rgba(99,102,241,0.25) !important;
                    border-radius: 18px !important;
                    box-shadow: 0 1px 0 rgba(255,255,255,0.07) inset, 0 0 24px rgba(99,102,241,0.08) !important;
                    backdrop-filter: blur(16px) !important;
                    position: relative; overflow: hidden;
                }
                .ct-cta-card h4 {
                    font-family: var(--font-bebas) !important;
                    font-size: clamp(20px, 2.2vw, 26px) !important;
                    letter-spacing: 0.04em !important; color: rgba(255,255,255,0.95) !important;
                }
                .ct-cta-card p {
                    font-family: var(--font-barlow) !important;
                    font-size: 13px !important; color: rgba(255,255,255,0.4) !important; line-height: 1.78 !important;
                }
            `}</style>

            {/* Scene orbs */}
            <div
                className="ct-orb"
                style={{
                    top: -200,
                    left: '20%',
                    width: 700,
                    height: 700,
                    background: 'radial-gradient(circle, oklch(0.546 0.245 262.881) 0%, transparent 70%)',
                    opacity: 0.1
                }}
            />
            <div
                className="ct-orb"
                style={{
                    bottom: -120,
                    right: '10%',
                    width: 500,
                    height: 500,
                    background: 'radial-gradient(circle, oklch(0.623 0.214 259.815) 0%, transparent 70%)',
                    opacity: 0.07
                }}
            />
            <div
                className="ct-orb"
                style={{
                    top: '50%',
                    left: '-5%',
                    width: 320,
                    height: 320,
                    background: 'radial-gradient(circle, oklch(0.511 0.262 276.966) 0%, transparent 70%)',
                    opacity: 0.08
                }}
            />

            <div
                className="container mx-auto"
                style={{ position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <div className="text-center mb-16">
                    <Badge
                        variant="outline"
                        className="mb-6 text-white text-xl">
                        {contactData.badgeTitle}
                    </Badge>
                    <h2
                        className="mb-6"
                        style={{
                            fontFamily: 'var(--font-bebas)',
                            fontSize: 'clamp(36px, 5vw, 60px)',
                            letterSpacing: '0.04em',
                            color: 'rgba(255,255,255,0.95)',
                            lineHeight: 1
                        }}>
                        {contactData.title}
                    </h2>
                    <p
                        className="max-w-2xl mx-auto"
                        style={{ fontFamily: 'var(--font-barlow)', fontSize: 16, color: 'rgba(255,255,255,0.35)', lineHeight: 1.75 }}>
                        {contactData.subtitle}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* LEFT: Form */}
                    <div>
                        <Card className="p-8 ct-form-card">
                            <h3 className="text-2xl font-bold mb-6">{contactData.form.title}</h3>
                            <form
                                onSubmit={handleSubmit}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && e.target instanceof HTMLTextAreaElement) {
                                        e.stopPropagation()
                                        handleSubmit(e)
                                    }
                                }}
                                className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">{contactData.form.nameLabel}</label>
                                    <Input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder={contactData.form.namePlaceholder}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">{contactData.form.emailLabel}</label>
                                    <Input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder={contactData.form.emailPlaceholder}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">{contactData.form.phoneLabel}</label>
                                    <Input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder={contactData.form.phonePlaceholder}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">{contactData.form.messageLabel}</label>
                                    <Textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder={contactData.form.messagePlaceholder}
                                        rows={4}
                                        required
                                    />
                                </div>
                                <button className="ct-submit-btn">
                                    {loading ? (
                                        <Loader2
                                            className="animate-spin"
                                            size={18}
                                        />
                                    ) : (
                                        contactData.form.buttonLabel
                                    )}
                                </button>
                            </form>
                        </Card>
                    </div>

                    {/* RIGHT: Info */}
                    <div className="ct-right space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">{contactData.card.title}</h3>
                            <div className="space-y-3">
                                <a
                                    href={`mailto:${contactData.card.email}`}
                                    className="ct-contact-link flex items-center space-x-3">
                                    <div className="ct-link-icon">
                                        <Mail size={15} />
                                    </div>
                                    <span>{contactData.card.email}</span>
                                </a>
                                <a
                                    href={`tel:${contactData.card.phone}`}
                                    className="ct-contact-link flex items-center space-x-3">
                                    <div className="ct-link-icon">
                                        <Phone size={15} />
                                    </div>
                                    <span>{contactData.card.phone}</span>
                                </a>
                                <a
                                    className="ct-contact-link flex items-center space-x-3"
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactData.card.address)}`}
                                    target="_blank"
                                    rel="noreferrer">
                                    <div className="ct-link-icon">
                                        <MapPin size={15} />
                                    </div>
                                    <span>{contactData.card.address}</span>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">{contactData.link.title}</h4>
                            <div className="flex space-x-3">
                                <a
                                    href={contactData.link.facebook}
                                    target="_blank"
                                    rel="noreferrer">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="ct-social-btn">
                                        <Facebook className="h-4 w-4" />
                                    </Button>
                                </a>
                                <a
                                    href={contactData.link.twitter}
                                    target="_blank"
                                    rel="noreferrer">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="ct-social-btn">
                                        <Twitter className="h-4 w-4" />
                                    </Button>
                                </a>
                                <a
                                    href={contactData.link.linkedin}
                                    target="_blank"
                                    rel="noreferrer">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="ct-social-btn">
                                        <Linkedin className="h-4 w-4" />
                                    </Button>
                                </a>
                                <a
                                    href={contactData.link.instagram}
                                    target="_blank"
                                    rel="noreferrer">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="ct-social-btn">
                                        <Instagram className="h-4 w-4" />
                                    </Button>
                                </a>
                            </div>
                        </div>

                        <Card className="p-6 ct-cta-card text-primary-foreground rounded-2xl shadow-lg">
                            {/* Dot grid */}
                            <svg
                                width="140"
                                height="140"
                                viewBox="0 0 180 180"
                                fill="none"
                                style={{ position: 'absolute', top: 0, right: 0, pointerEvents: 'none', opacity: 0.5 }}>
                                <defs>
                                    <pattern
                                        id="ct-dots"
                                        x="0"
                                        y="0"
                                        width="18"
                                        height="18"
                                        patternUnits="userSpaceOnUse">
                                        <circle
                                            cx="1.5"
                                            cy="1.5"
                                            r="1.5"
                                            fill="oklch(0.623 0.214 259.815)"
                                            fillOpacity="0.22"
                                        />
                                    </pattern>
                                </defs>
                                <rect
                                    width="180"
                                    height="180"
                                    fill="url(#ct-dots)"
                                />
                            </svg>

                            <div style={{ position: 'relative', zIndex: 2 }}>
                                <span
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 6,
                                        marginBottom: 12,
                                        padding: '3px 11px',
                                        borderRadius: 20,
                                        fontFamily: 'var(--font-barlow-condensed)',
                                        fontSize: 10,
                                        fontWeight: 700,
                                        letterSpacing: '0.12em',
                                        textTransform: 'uppercase' as const,
                                        color: 'oklch(0.707 0.165 254.624)',
                                        background: 'rgba(99,102,241,0.14)',
                                        border: '1px solid rgba(99,102,241,0.3)'
                                    }}>
                                    <span
                                        style={{
                                            width: 5,
                                            height: 5,
                                            borderRadius: '50%',
                                            background: 'oklch(0.623 0.214 259.815)',
                                            boxShadow: '0 0 5px oklch(0.623 0.214 259.815)',
                                            display: 'inline-block'
                                        }}
                                    />
                                    Free
                                </span>

                                <h4 className="text-xl font-bold mb-3 text-white">{contactData.otherCard.title}</h4>
                                <p className="text-gray-300 leading-relaxed mb-2">
                                    {contactData.otherCard.subtitle1}{' '}
                                    <span className="font-semibold text-white">{contactData.otherCard.subtitle2}</span>
                                    {contactData.otherCard.subtitle3} <span className="italic">{contactData.otherCard.subtitle4}</span>
                                    {contactData.otherCard.subtitle5}.
                                </p>

                                <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', margin: '14px 0' }} />

                                <div
                                    className="mt-3 text-sm text-gray-200"
                                    style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <span
                                        style={{
                                            width: 5,
                                            height: 5,
                                            borderRadius: '50%',
                                            background: 'oklch(0.623 0.214 259.815)',
                                            boxShadow: '0 0 6px oklch(0.623 0.214 259.815)',
                                            flexShrink: 0,
                                            display: 'inline-block'
                                        }}
                                    />
                                    {contactData.otherCard.tagline}
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
