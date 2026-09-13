import { motion } from 'framer-motion'
import { useState } from 'react'
import { profile, techStack, experience, projects } from '@/data/content'
import { Code, Database, Server, Globe, Layers, Zap } from 'lucide-react'

const skillCategories = [
  { key: 'frontend', label: 'Frontend', icon: Globe, color: 'from-purple-500 to-pink-500' },
  { key: 'backend', label: 'Backend', icon: Server, color: 'from-cyan-500 to-blue-500' },
  { key: 'database', label: 'Database', icon: Database, color: 'from-emerald-500 to-teal-500' },
  { key: 'devops', label: 'DevOps', icon: Layers, color: 'from-orange-500 to-red-500' },
  { key: 'tools', label: 'Tools', icon: Code, color: 'from-violet-500 to-purple-500' },
  { key: 'other', label: 'Lainnya', icon: Zap, color: 'from-slate-500 to-gray-500' },
]

const categoryMap = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'DevOps & Cloud',
  devops: 'DevOps & Cloud',
  tools: 'Tools & Others',
  other: 'Tools & Others',
}

export default function Profile() {
  const [activeTab, setActiveTab] = useState('frontend')

  const getToolsForCategory = (categoryKey) => {
    const targetCategory = categoryMap[categoryKey]
    const cat = techStack.find(c => c.category === targetCategory)
    return cat?.tools || []
  }

  const tools = getToolsForCategory(activeTab)

  return (
    <section
      id="profile"
      className="py-24 md:py-32 px-4 bg-gradient-to-b from-bg via-bg-elevated/50 to-bg"
      aria-labelledby="profile-title"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="profile-title" className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Profil & <span className="gradient-text">Keahlian</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Ringkasan latar belakang, pengalaman, dan teknologi yang dikuasai.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="relative aspect-square max-w-xs mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-2xl blur-2xl" aria-hidden="true" />
              <div className="relative bg-bg-elevated border border-border rounded-2xl p-1 aspect-square">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-cyan-500/10 flex items-center justify-center">
                  {profile.photo ? (
                    <img src={profile.photo} alt={profile.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">{profile.name?.charAt(0) || '?'}</span>
                    </div>
                  )}
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 border-2 border-purple-500/20 rounded-3xl"
                aria-hidden="true"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-8 text-center"
            >
              <h3 className="font-heading text-2xl font-bold mb-2">{profile.name}</h3>
              <p className="gradient-text font-medium mb-4">{profile.title}</p>
              <p className="text-text-muted text-sm">{profile.shortBio}</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="Kategori keahlian">
                {skillCategories.map((cat, i) => (
                  <motion.button
                    key={cat.key}
                    role="tab"
                    aria-selected={activeTab === cat.key}
                    aria-controls={`panel-${cat.key}`}
                    id={`tab-${cat.key}`}
                    onClick={() => setActiveTab(cat.key)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                      activeTab === cat.key
                        ? 'bg-gradient-to-r text-white shadow-lg'
                        : 'bg-bg-elevated text-text-muted hover:text-text hover:border-purple-500/50 border border-border'
                    } ${cat.color}`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    style={{ transitionDelay: `${0.03 * i}s` }}
                  >
                    <cat.icon className="w-4 h-4" aria-hidden="true" />
                    {cat.label}
                  </motion.button>
                ))}
              </div>

              <motion.div
                key={activeTab}
                id={`panel-${activeTab}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeTab}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {tools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                    className="bg-bg-elevated border border-border rounded-lg p-4 hover:border-purple-500/50 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{tool.name}</span>
                      <span className="text-xs text-text-muted">{tool.level}%</span>
                    </div>
                    <div className="h-1.5 bg-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${tool.level}%` }}
                        transition={{ delay: 0.3 + 0.05 * i, duration: 0.8, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full group-hover:from-cyan-500 group-hover:to-purple-500 transition-all duration-300"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {[
                { label: 'Pengalaman', value: `${experience?.length || 0}+ Aktivitas` },
                { label: 'Project', value: `${projects?.length || 0}+` },
                { label: 'Teknologi', value: `${techStack.reduce((acc, c) => acc + (c.tools?.length || 0), 0)}+` },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + 0.1 * i, duration: 0.4 }}
                  className="bg-bg-elevated border border-border rounded-xl p-6 text-center hover:border-purple-500/50 transition-all"
                >
                  <div className="font-heading text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-text-muted text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}