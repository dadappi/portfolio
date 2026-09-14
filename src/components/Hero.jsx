import { motion } from 'framer-motion'
import { profile } from '@/data/content'
import { ArrowRight, Mail } from 'lucide-react'

const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083.729 0 1.852 1.335 2.652 2.157 2.757.098.087.151.215.151.352 0 .266-.01.994-.015 1.743-2.57.593-3.112-1.243-3.112-1.243-.497-1.273-1.215-1.612-1.215-1.612-.994-.681.074-.666.074.666 0 .479.054.921.135 1.307-2.122.126-4.35-1.064-4.35-4.802 0-1.062.378-1.93 1.007-2.606-.102-.254-.44-1.271.096-2.645 0 0 .821-.261 2.69 1.005.782-.217 1.62-.326 2.45-.33.83.004 1.668.113 2.45.33 1.869-1.266 2.689-1.005 2.689-1.005.537 1.374.203 2.391.1 2.645.628.676 1.006 1.544 1.006 2.606 0 3.75-2.235 4.922-4.365 5.182.342.295.664.881.664 1.779 0 1.283-.013 2.319-.013 2.635 0 .317.192.69.8.573C20.565 21.795 24 17.297 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
)

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 9.24-3.363.765-8.14-8.22-8.14 8.22-3.363-.765 8.502-9.24-7.227-8.26H3.692l7.71 8.583L3.665 21.75h3.24l-1.857-2.184 8.502-9.24L22.863 24h3.215L16.3 2.25z" />
  </svg>
)

export default function Hero() {
  const CTA_BUTTONS = [
    { label: 'Lihat Project', href: '#projects', primary: true, icon: ArrowRight },
    { label: 'GitHub', href: profile?.contact?.github || '#', primary: false, icon: GithubIcon, external: true },
    { label: 'Kontak', href: '#contact', primary: false, icon: Mail },
  ]

  const SOCIAL_LINKS = [
    { href: profile?.contact?.github || '#', icon: GithubIcon, label: 'GitHub' },
    { href: profile?.contact?.linkedin || '#', icon: LinkedinIcon, label: 'LinkedIn' },
    { href: profile?.contact?.twitter || '#', icon: TwitterIcon, label: 'Twitter' },
    { href: `mailto:${profile?.contact?.email || ''}`, icon: Mail, label: 'Email' },
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-gradient-start)_0%,_transparent_70%)] opacity-20" aria-hidden="true" />

      <div className="section-container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-purple-300 mb-6"
          >
            {profile?.title || 'Developer'}
          </motion.span>

          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          >
            Hai, saya <span className="gradient-text">{profile?.name?.split(' ')?.slice(-1)[0] || 'Developer'}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {profile?.shortBio || 'Selamat datang di portfolio saya'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            {CTA_BUTTONS.map((btn, i) => {
              const IconComponent = btn.icon
              return (
                <motion.a
                  key={btn.label}
                  href={btn.href}
                  target={btn.external ? '_blank' : undefined}
                  rel={btn.external ? 'noopener noreferrer' : undefined}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    btn.primary
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-600 hover:to-cyan-600 shadow-lg shadow-purple-500/25'
                      : 'bg-bg-elevated text-text border border-border hover:border-purple-500/50 hover:bg-purple-500/10'
                  }`}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ transitionDelay: `${0.05 * i}s` }}
                >
                  {btn.label}
                  <IconComponent className="w-4 h-4" aria-hidden="true" />
                </motion.a>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center justify-center gap-6"
          >
            {SOCIAL_LINKS.map((social, i) => {
              const IconComponent = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-2 rounded-lg bg-bg-elevated border border-border text-text-muted hover:text-text hover:border-purple-500/50 transition-all"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                  style={{ transitionDelay: `${0.05 * i}s` }}
                >
                  <IconComponent className="w-5 h-5" aria-hidden="true" />
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
          aria-hidden="true"
        >
          <svg className="w-6 h-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
