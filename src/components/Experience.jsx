import { motion } from 'framer-motion'
import { experience } from '@/data/content'
import { Award, Code, Link, ExternalLink, CheckCircle } from 'lucide-react'

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 bg-bg"
      aria-labelledby="experience-title"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 id="experience-title" className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Pengalaman <span className="gradient-text">Kerja</span>
          </h2>
          <p className="text-text-muted text-lg">
            Perjalanan karier dan pencapaian profesional.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-cyan-500"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            aria-hidden="true"
          />

          {experience.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative pl-16 pb-12 last:pb-0"
            >
              <motion.div
                className="absolute left-0 top-1 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 border-4 border-bg z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 + 0.1 * index, type: 'spring', stiffness: 200 }}
              />

              <motion.div
                className="bg-bg-elevated border border-border rounded-2xl p-6 hover:border-purple-500/50 transition-all"
                whileHover={{ x: 4 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-purple-400 font-medium">{exp.institution}</p>
                  </div>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-sm rounded-full font-medium whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="text-text-muted mb-5 leading-relaxed">{exp.description}</p>

                {(exp.achievements?.length > 0) && (
                  <div className="space-y-2 mb-5">
                    <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">Pencapaian Utama</h4>
                    {(exp.achievements || []).map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i, duration: 0.3 }}
                        className="flex items-start gap-3 text-sm text-text-muted"
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                )}

                {(exp.techStack?.length > 0) && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mr-3 mb-2 w-full sm:w-auto">Tech Stack</h4>
                    {(exp.techStack || []).map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * i, duration: 0.2 }}
                        className="px-2.5 py-1 text-xs bg-purple-500/10 text-purple-400 rounded border border-purple-500/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                )}

                {(exp.links?.length > 0) && (
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                    {(exp.links || []).map((link, i) => (
                      <motion.a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * i, duration: 0.3 }}
                        className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-purple-400 transition-colors"
                        whileHover={{ x: 2 }}
                      >
                        {link.url.startsWith('http') ? <ExternalLink className="w-4 h-4" /> : <Link className="w-4 h-4" />}
                        {link.label}
                      </motion.a>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
