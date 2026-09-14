import { motion } from 'framer-motion'
import { projects } from '@/data/content'
import { ExternalLink, Code, Image, FileText } from 'lucide-react'

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-bg"
      aria-labelledby="projects-title"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="projects-title" className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Studi Kasus / <span className="gradient-text">Project</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Project-project yang dibangun — dari konsep hingga produksi.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="grid lg:grid-cols-2 gap-8 items-start"
            >
              <div className="order-2 lg:order-1">
                <div className="relative aspect-video bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-2xl overflow-hidden border border-border">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.name} preview`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Code className="w-16 h-16 text-purple-500/50" aria-hidden="true" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                </div>

                {(project.images?.length > 0) && (
                  <div className="grid grid-cols-3 gap-2 mt-4" role="list" aria-label={`${project.name} screenshots`}>
                    {(project.images || []).slice(0, 3).map((img, i) => (
                      <motion.a
                        key={img}
                        href={img}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative aspect-square bg-bg-elevated rounded-lg overflow-hidden border border-border group"
                        whileHover={{ scale: 1.02 }}
                        aria-label={`Screenshot ${i + 1}`}
                      >
                        <img src={img} alt={`${project.name} screenshot ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Image className="w-6 h-6 text-white" aria-hidden="true" />
                        </div>
                      </motion.a>
                    ))}
                  </div>
                )}
              </div>

              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-sm rounded-full font-medium">
                    Studi Kasus
                  </span>
                </div>

                <h3 className="font-heading text-3xl font-bold mb-3">{project.name}</h3>
                <p className="text-text-muted mb-6 leading-relaxed">{project.description}</p>

                {project.details && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-6 p-4 bg-bg-elevated border border-border rounded-xl"
                  >
                    <p className="text-sm text-text-muted leading-relaxed">{project.details}</p>
                  </motion.div>
                )}

                <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Tech stack">
                  {project.techStack.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i, duration: 0.2 }}
                      className="px-3 py-1 text-sm bg-purple-500/10 text-purple-400 rounded-lg border border-purple-500/20"
                      role="listitem"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.linkDemo && (
                    <motion.a
                      href={project.linkDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-cyan-600 transition-all shadow-lg shadow-purple-500/25"
                      whileHover={{ y: -2, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      Demo Live
                    </motion.a>
                  )}
                  {project.linkGithub && (
                    <motion.a
                      href={project.linkGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-bg-elevated text-text border border-border rounded-lg font-medium hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400 transition-all"
                      whileHover={{ y: -2, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <GithubIcon className="w-4 h-4" aria-hidden="true" />
                      Kode Sumber
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
