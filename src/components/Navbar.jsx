import { motion } from 'framer-motion'
import { profile } from '@/data/content'

const sections = ['hero', 'profile', 'experience', 'hobbies', 'projects', 'techstack', 'milestone', 'contact']

export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border"
    >
      <div className="section-container flex h-16 items-center justify-between">
        <motion.a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo('hero') }}
          className="font-heading text-xl font-semibold gradient-text"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {profile.name}
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {sections.map((section) => (
            <motion.a
              key={section}
              href={`#${section}`}
              onClick={(e) => { e.preventDefault(); scrollTo(section) }}
              className="text-sm text-text-muted hover:text-text transition-colors relative"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.a>
          ))}
        </div>

        <button className="md:hidden p-2" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  )
}
