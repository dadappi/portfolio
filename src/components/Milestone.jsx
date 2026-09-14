import { motion } from 'framer-motion'
import { milestones } from '@/data/content'
import { Award, Flag, Star, Target, Zap, Trophy } from 'lucide-react'

const milestoneIcons = [Award, Flag, Star, Target, Zap, Trophy]

export default function Milestone() {
  return (
    <section
      id="milestone"
      className="py-24 md:py-32 bg-bg"
      aria-labelledby="milestone-title"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 id="milestone-title" className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Milestone & <span className="gradient-text">Pencapaian</span>
          </h2>
          <p className="text-text-muted text-lg">
            Perjalanan dan momen-momen penting dalam karier.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-purple-500 to-cyan-500"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            aria-hidden="true"
          />

          {milestones.map((milestone, index) => {
            const Icon = milestoneIcons[index % milestoneIcons.length]
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`relative pl-20 pr-8 pb-12 ${isEven ? 'text-right' : 'pl-8 pr-20'}`}
              >
                <div className={`absolute top-4 ${isEven ? 'right-0' : 'left-0'} translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white z-10 shadow-lg shadow-purple-500/25`}>
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>

                <motion.div
                  className={`bg-bg-elevated border border-border rounded-2xl p-6 ${isEven ? 'mr-4' : 'ml-4'} hover:border-purple-500/50 transition-all`}
                  whileHover={{ x: isEven ? -4 : 4 }}
                >
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-sm font-bold rounded-full whitespace-nowrap">
                      {milestone.year}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold mb-3">{milestone.title}</h3>
                  <p className="text-text-muted leading-relaxed">{milestone.description}</p>
                </motion.div>

                {index < milestones.length - 1 && (
                  <motion.div
                    className="absolute top-14 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-border"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 + 0.1 * index }}
                    aria-hidden="true"
                  />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
