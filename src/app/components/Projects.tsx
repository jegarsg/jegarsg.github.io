import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaNetworkWired, FaRegClock, FaPlug, FaDatabase, FaChartLine } from 'react-icons/fa'
import { VscAzureDevops } from 'react-icons/vsc'
import { IconType } from 'react-icons'

type Project = {
  id: number
  title: string
  description: string
  tech: string[]
  icon: IconType
  gradient: string
}

export default function Projects() {
  const projects: Project[] = [
  {
    id: 1,
    title: 'API Gateway Management',
    description:
      'Built a secure and scalable API gateway using Express.js, JWT, and Redis for rate-limiting and session management.',
    tech: ['Express.js', 'TypeScript', 'Redis', 'JWT Authentication'],
    icon: FaNetworkWired,
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 2,
    title: 'Task Scheduler',
    description:
      'Event-driven backend service for reliable and flexible task scheduling, powered by Hangfire.',
    tech: ['C#', '.NET Core', 'CQRS', 'Hangfire Jobs'],
    icon: FaRegClock,
    gradient: 'from-violet-500 to-fuchsia-600',
  },
  {
    id: 3,
    title: 'CI/CD Automation Pipeline',
    description:
      'Automated delivery pipeline for microservices using Azure DevOps and VM orchestration.',
    tech: ['Azure DevOps', 'Virtual Machines', 'Continuous Deployment', 'Microservices'],
    icon: VscAzureDevops,
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    id: 4,
    title: 'API Integration Platform',
    description:
      'Built a flexible platform to enable smooth and reliable API-to-API integration.',
    tech: ['Go', 'Postgres', 'Next.js API Routes', 'Integration Patterns'],
    icon: FaPlug,
    gradient: 'from-emerald-500 to-cyan-600',
  },
  {
    id: 5,
    title: 'SQL Query Optimizer',
    description:
      'Enhanced database performance by refactoring large query structures and adding proper indexing, reducing response time by up to 70%.',
    tech: ['MS SQL Server', '.NET Core', 'SSMS', 'Index Tuning'],
    icon: FaDatabase,
    gradient: 'from-indigo-600 to-violet-600',
  },
  {
    id: 6,
    title: 'Monitoring & Alerting Platform',
    description:
      'Built a robust logging and alerting platform using ELK Stack and PagerDuty for real-time incident response.',
    tech: ['Elasticsearch', 'Logstash', 'Kibana', 'PagerDuty Integration', 'Alerts & Dashboards'],
    icon: FaChartLine,
    gradient: 'from-fuchsia-500 to-rose-600',
  },
]


  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="project" className="py-16">
      <h2 className="text-3xl font-heading font-bold text-center mb-10 text-gray-900 dark:text-white">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 * index }}
            onClick={() => setSelected(project)}
            className={`glass glass-hover rounded-3xl overflow-hidden cursor-pointer ${
              index === 0 ? 'lg:col-span-2' : ''
            }`}
          >
            <div
              className={`w-full h-48 flex items-center justify-center bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
              <project.icon className="w-16 h-16 text-white/90 drop-shadow-lg relative" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-1">
                {project.tech.map(tech => (
                  <span
                    key={tech}
                    className="bg-cyan-500/10 dark:bg-cyan-400/10 text-cyan-700 dark:text-cyan-300 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal using AnimatePresence */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="glass bg-white/90 dark:bg-gray-900/90 p-6 rounded-2xl shadow-2xl max-w-lg w-full mx-4 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-4 text-xl text-gray-400 hover:text-red-500"
              >
                ×
              </button>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                {selected.title}
              </h3>
              <div
                className={`w-full h-40 rounded-md mb-4 flex items-center justify-center bg-gradient-to-br ${selected.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
                <selected.icon className="w-14 h-14 text-white/90 drop-shadow-lg relative" />
              </div>
              <p className="text-gray-700 dark:text-gray-300">{selected.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
