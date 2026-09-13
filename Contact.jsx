import { motion } from 'framer-motion'
import { useState } from 'react'
import { profile } from '@/data/content'
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'

const GithubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const TwitterIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 9.24-3.363.765-8.14-8.22-8.14 8.22-3.363-.765 8.502-9.24-7.227-8.26H3.692l7.71 8.583L3.665 21.75h3.24l-1.857-2.184 8.502-9.24L22.863 24h3.215L16.331 12.882 18.244 2.25z" />
  </svg>
)

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    await new Promise(r => setTimeout(r, 1000))
    setStatus('success')
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 3000)
  }

  const socialLinks = [
    { href: `mailto:${profile.contact?.email || ''}`, icon: Mail, label: 'Email', color: 'from-red-500 to-pink-500' },
    { href: profile.contact?.github || '#', icon: GithubIcon, label: 'GitHub', color: 'from-gray-700 to-gray-500' },
    { href: profile.contact?.linkedin || '#', icon: LinkedinIcon, label: 'LinkedIn', color: 'from-blue-600 to-blue-400' },
    { href: profile.contact?.twitter || '#', icon: TwitterIcon, label: 'Twitter', color: 'from-sky-500 to-blue-500' },
  ]

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-gradient-to-b from-bg via-bg-elevated/50 to-bg"
      aria-labelledby="contact-title"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="contact-title" className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Mari <span className="gradient-text">Berkolaborasi</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Punya project menarik? Butuh bantuan teknis? Atau cuma mau ngobrol soal teknologi?
            Jangan ragu untuk menghubungi.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading text-2xl font-bold mb-6">Hubungi Langsung</h3>
            <p className="text-text-muted mb-8 leading-relaxed">
              Cara tercepat untuk menghubungi saya adalah via email atau media sosial di bawah.
              Saya berusaha merespons dalam 24 jam di hari kerja.
            </p>

            <div className="space-y-4 mb-10">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.3 }}
                  className="group flex items-center gap-4 p-4 bg-bg-elevated border border-border rounded-xl hover:border-purple-500/50 transition-all"
                  whileHover={{ x: 4 }}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${social.color} text-white`}>
                    <social.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium">{social.label}</p>
                    <p className="text-sm text-text-muted truncate max-w-xs">
                      {social.href.replace('mailto:', '').replace('https://', '')}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="p-5 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-xl">
              <h4 className="font-medium mb-2">Ketersediaan</h4>
              <ul className="text-sm text-text-muted space-y-1">
                <li>• Freelance project: <span className="text-text">Terbuka</span></li>
                <li>• Full-time role: <span className="text-text">Selektif</span></li>
                <li>• Mentoring/Konsultasi: <span className="text-text">Terbuka</span></li>
                <li>• Speaking engagement: <span className="text-text">Terbuka</span></li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="bg-bg-elevated border border-border rounded-2xl p-6 md:p-8" noValidate>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="w-full px-4 py-3 bg-bg border border-border rounded-lg text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                    placeholder="Nama Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="w-full px-4 py-3 bg-bg border border-border rounded-lg text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                    placeholder="email@anda.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-bg border border-border rounded-lg text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all resize-none"
                    placeholder="Ceritakan project atau ide Anda..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status !== 'idle'}
                  className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-cyan-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Mengirim...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" aria-hidden="true" />
                      Terkirim!
                    </>
                  ) : (
                    <>
                      Kirim Pesan
                      <Send className="w-5 h-5" aria-hidden="true" />
                    </>
                  )}
                </motion.button>

                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm text-emerald-400 flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4" aria-hidden="true" />
                    Pesan terkirim! Saya akan merespons segera.
                  </motion.p>
                )}

                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm text-red-400 flex items-center justify-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4" aria-hidden="true" />
                    Gagal mengirim. Coba lagi atau email langsung.
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} {profile.name}. Dibangun dengan React, Tailwind CSS, & Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  )
}