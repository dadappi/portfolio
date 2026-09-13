import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { techStack } from '@/data/content'
import { CheckCircle, ChevronDown, ChevronUp, ChevronRight } from 'lucide-react'

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState(techStack[0]?.category || '')
  const [expandedItems, setExpandedItems] = useState(new Set())

  const toggleExpand = (toolName) => {
    setExpandedItems(prev => {
      const next = new Set(prev)
      if (next.has(toolName)) next.delete(toolName)
      else next.add(toolName)
      return next
    })
  }

  const currentCategory = techStack.find(c => c.category === activeCategory)

  return (
    <section
      id="techstack"
      className="py-24 md:py-32 bg-gradient-to-b from-bg via-bg-elevated/50 to-bg"
      aria-labelledby="techstack-title"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 id="techstack-title" className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Teknologi dan tools yang dikuasai, dikategorikan untuk kemudahan navigasi.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 flex flex-wrap gap-3 justify-center"
          role="tablist"
          aria-label="Kategori teknologi"
        >
          {techStack.map((cat, i) => (
            <motion.button
              key={cat.category}
              role="tab"
              aria-selected={activeCategory === cat.category}
              aria-controls={`panel-${cat.category}`}
              id={`tab-${cat.category}`}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.category
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-bg-elevated text-text-muted hover:text-text hover:border-purple-500/50 border border-border'
              }`}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              style={{ transitionDelay: `${0.03 * i}s` }}
            >
              {cat.category}
              <span className="ml-2 px-2 py-0.5 text-xs bg-white/10 rounded-full">
                {cat.tools?.length || 0}
              </span>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            id={`panel-${activeCategory}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeCategory}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentCategory?.tools.map((tool, i) => (
              <motion.article
                key={tool.name}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.05 * i, duration: 0.3 }}
                className="group bg-bg-elevated border border-border rounded-2xl p-6 hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-lg font-bold mb-1 truncate">{tool.name}</h3>
                    <div className="flex items-center gap-2">
                      <div className="relative w-32 h-2 bg-border rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tool.level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + 0.05 * i, duration: 0.8, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                        />
                      </div>
                      <span className="text-xs font-medium text-purple-400 whitespace-nowrap">{tool.level}%</span>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => toggleExpand(tool.name)}
                    className="p-2 rounded-lg bg-border text-text-muted hover:bg-purple-500/10 hover:text-purple-400 transition-colors flex-shrink-0"
                    whileTap={{ scale: 0.9 }}
                    aria-expanded={expandedItems.has(tool.name)}
                    aria-controls={`details-${tool.name}`}
                  >
                    {expandedItems.has(tool.name) ? (
                      <ChevronUp className="w-5 h-5" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="w-5 h-5" aria-hidden="true" />
                    )}
                  </motion.button>
                </div>

                <AnimatePresence>
                  {expandedItems.has(tool.name) && (
                    <motion.div
                      id={`details-${tool.name}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pt-4 border-t border-border"
                    >
                      <div className="space-y-2 text-sm text-text-muted">
                        <p>Tingkat kemampuan: <span className="text-text font-medium">{tool.level >= 80 ? 'Expert' : tool.level >= 60 ? 'Advanced' : 'Intermediate'}</span></p>
                        <p>Digunakan dalam project production dan side project aktif.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 bg-bg-elevated border border-border rounded-2xl"
        >
          <h3 className="font-heading text-2xl font-bold text-center mb-6">
            Ingin Kolaborasi?
          </h3>
          <p className="text-text-muted text-center max-w-xl mx-auto mb-8">
            Selalu terbuka untuk project menarik, freelance, atau diskusi teknis.
            Jangan ragu untuk menghubungi.
          </p>
          <div className="flex justify-center">
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-cyan-600 transition-all shadow-lg shadow-purple-500/25"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Hubungi Saya
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}