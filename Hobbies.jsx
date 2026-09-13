import { motion } from 'framer-motion'
import { hobbies } from '@/data/content'
import { ExternalLink, ChevronRight, Image, FileText, Link as LinkIcon } from 'lucide-react'

const iconMap = {
  camera: 'camera',
  'book-open': 'book-open',
  github: 'github',
  music: 'music',
  code: 'code',
  gamepad: 'gamepad-2',
  coffee: 'coffee',
  plane: 'plane',
  bike: 'bike',
  dumbbell: 'dumbbell',
  palette: 'palette',
  headphones: 'headphones',
}

function getIcon(name) {
  const icons = {
    camera: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    'book-open': (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    github: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  }
  return icons[name] || (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  )
}

export default function Hobbies() {
  return (
    <section
      id="hobbies"
      className="py-24 md:py-32 bg-gradient-to-b from-bg via-bg-elevated/50 to-bg"
      aria-labelledby="hobbies-title"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="hobbies-title" className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Hobi & <span className="gradient-text">Minat</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Hal-hal yang dilakukan di luar jam kerja untuk keseimbangan dan kreativitas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <motion.article
              key={hobby.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group bg-bg-elevated border border-border rounded-2xl p-6 hover:border-purple-500/50 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center text-purple-400 group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all"
                >
                  {getIcon(hobby.icon)}
                </motion.div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold mb-1">{hobby.name}</h3>
                  <p className="text-text-muted text-sm">{hobby.description}</p>
                </div>
              </div>

              {hobby.details && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mb-4 overflow-hidden"
                >
                  <p className="text-sm text-text-muted leading-relaxed">{hobby.details}</p>
                </motion.div>
              )}

              {((hobby.images?.length > 0) || (hobby.links?.length > 0)) && (
                <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                  {(hobby.images || []).map((img, i) => (
                    <motion.a
                      key={img}
                      href={img}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i, duration: 0.2 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-text-muted hover:text-purple-400 bg-purple-500/10 rounded-lg border border-purple-500/20 transition-colors"
                      whileHover={{ x: 2 }}
                    >
                      <Image className="w-3.5 h-3.5" aria-hidden="true" />
                      Foto {i + 1}
                    </motion.a>
                  ))}
                  {(hobby.links || []).map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i, duration: 0.2 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-text-muted hover:text-purple-400 bg-purple-500/10 rounded-lg border border-purple-500/20 transition-colors"
                      whileHover={{ x: 2 }}
                    >
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}