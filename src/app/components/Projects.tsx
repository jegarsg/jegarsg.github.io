import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaNetworkWired, FaRegClock, FaPlug, FaDatabase, FaChartLine } from 'react-icons/fa'
import { VscAzureDevops } from 'react-icons/vsc'
import { SiNvidia } from 'react-icons/si'
import { IconType } from 'react-icons'

type Project = {
  id: number
  title: string
  description: string
  tech: string[]
  icon: IconType
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
  },
  {
    id: 2,
    title: 'Task Scheduler',
    description:
      'Event-driven backend service for reliable and flexible task scheduling, powered by Hangfire.',
    tech: ['C#', '.NET Core', 'CQRS', 'Hangfire Jobs'],
    icon: FaRegClock,
  },
  {
    id: 3,
    title: 'CI/CD Automation Pipeline',
    description:
      'Automated delivery pipeline for microservices using Azure DevOps and VM orchestration.',
    tech: ['Azure DevOps', 'Virtual Machines', 'Continuous Deployment', 'Microservices'],
    icon: VscAzureDevops,
  },
  {
    id: 4,
    title: 'API Integration Platform',
    description:
      'Built a flexible platform to enable smooth and reliable API-to-API integration.',
    tech: ['Go', 'Postgres', 'Next.js API Routes', 'Integration Patterns'],
    icon: FaPlug,
  },
  {
    id: 5,
    title: 'SQL Query Optimizer',
    description:
      'Enhanced database performance by refactoring large query structures and adding proper indexing, reducing response time by up to 70%.',
    tech: ['MS SQL Server', '.NET Core', 'SSMS', 'Index Tuning'],
    icon: FaDatabase,
  },
  {
    id: 6,
    title: 'Monitoring & Alerting Platform',
    description:
      'Built a robust logging and alerting platform using ELK Stack and PagerDuty for real-time incident response.',
    tech: ['Elasticsearch', 'Logstash', 'Kibana', 'PagerDuty Integration', 'Alerts & Dashboards'],
    icon: FaChartLine,
  },
  {
    id: 7,
    title: 'GPU Kernel Optimization (CUDA)',
    description:
      'A progression of hand-written CUDA kernels — from naive to shared-memory-tiled matrix multiplication, a simplified FlashAttention, and a paged KV-cache attention kernel — profiled with Nsight Compute on a Tesla T4. Achieved a 956.5x speedup over CPU matmul and a 6.86x KV-cache memory reduction.',
    tech: ['CUDA C++', 'Triton', 'PyTorch', 'cuBLAS/cuDNN', 'Nsight Compute'],
    icon: SiNvidia,
  },
]


  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="project" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-heading font-bold mb-10 text-gray-900 dark:text-white">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              onClick={() => setSelected(project)}
              className={`card card-hover overflow-hidden cursor-pointer p-6 flex flex-col ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <project.icon className="w-7 h-7 text-accent mb-6" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.map(tech => (
                  <span
                    key={tech}
                    className="border border-black/10 dark:border-white/10 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal using AnimatePresence */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="card bg-white dark:bg-[#0b0c0f] p-6 shadow-2xl max-w-lg w-full relative"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-5 text-xl text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                ×
              </button>
              <selected.icon className="w-9 h-9 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                {selected.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {selected.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {selected.tech.map(tech => (
                  <span
                    key={tech}
                    className="border border-black/10 dark:border-white/10 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
