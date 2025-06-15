import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

type Project = {
  id: number
  title: string
  description: string
  tech: string[]
  image: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'API Gateway Management',
      description:
        'Built a secure and scalable API gateway using Express.js, JWT, and Redis for rate-limiting and session management.',
      tech: ['Node.js', 'Express.js', 'Redis', 'JWT'],
      image: '',
    },
    {
      id: 2,
      title: 'Serverless Task Scheduler',
      description:
        'Event-driven backend using AWS Lambda and DynamoDB for asynchronous job scheduling and execution.',
      tech: ['AWS Lambda', 'DynamoDB', 'SQS', 'CloudWatch'],
      image: '',
    },
    {
      id: 3,
      title: 'CI/CD Automation Pipeline',
      description:
        'Automated deployment pipeline using GitHub Actions, Docker, and AWS ECS for containerized microservices.',
      tech: ['GitHub Actions', 'Docker'], // <- closing quote here
      image: '',
    },
    {
      id: 4,
      title: 'Headless CMS Integration',
      description:
        'Integrated Sanity and GraphQL with a custom backend API to enable flexible content workflows.',
      tech: ['Go', 'GraphQL', 'Next.js API Routes'],
      image: '',
    },
    {
      id: 5,
      title: 'Postgres Query Optimizer',
      description:
        'Refactored large query structures and added indexing to reduce response time by 70% on core endpoints.',
      tech: ['Postgres', 'Knex.js', 'pgAdmin'],
      image: '',
    },
    {
      id: 6,
      title: 'Monitoring & Alerting Platform',
      description:
        'Built backend logging and alert system using ELK stack and PagerDuty integration.',
      tech: ['Elasticsearch', 'Logstash', 'Kibana', 'PagerDuty'],
      image: '',
    },
  ]

  // Horizontal scroll
  const scrollRef = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState<Project | null>(null)
  const scrollDirectionRef = useRef<'right' | 'left'>('right')

  const isDraggingRef = useRef(false)
  const isTouchingRef = useRef(false)
  const isHoveringRef = useRef(false)

  const selectedRef = useRef<Project | null>(null)
  useEffect(() => {
    selectedRef.current = selected
  }, [selected, projects])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let startX = 0
    let scrollLeft = 0
    let moved = false
    let animationFrameId: number | null = null
    let momentumId: number | null = null
    let velocity = 0
    let lastX = 0
    let lastTimestamp = performance.now()
    const autoScrollSpeed = 0.7

    const clearTimers = () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
      if (momentumId) cancelAnimationFrame(momentumId)
      if (momentumId !== null) {
        cancelAnimationFrame(momentumId)
        momentumId = null
      }
    }

    const animateScroll = () => {
      if (
        !el ||
        isDraggingRef.current ||
        isTouchingRef.current ||
        isHoveringRef.current ||
        momentumId ||
        selectedRef.current ||
        el.scrollWidth <= el.clientWidth
      ) {
        animationFrameId = requestAnimationFrame(animateScroll)
        return
      }

      if (scrollDirectionRef.current === 'right') {
        el.scrollLeft += autoScrollSpeed
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1)
          scrollDirectionRef.current = 'left'
      } else {
        el.scrollLeft -= autoScrollSpeed
        if (el.scrollLeft <= 0) scrollDirectionRef.current = 'right'
      }

      animationFrameId = requestAnimationFrame(animateScroll)
    }

    const onPointerDown = (e: PointerEvent) => {
      if (!el) return
      isDraggingRef.current = true
      moved = false
      startX = e.clientX
      lastX = e.clientX
      scrollLeft = el.scrollLeft
      velocity = 0
      el.setPointerCapture(e.pointerId)
      el.style.scrollBehavior = 'auto'
      el.style.userSelect = 'none'
      el.style.cursor = 'grabbing'
      if (momentumId) cancelAnimationFrame(momentumId)
      lastTimestamp = performance.now()
    }

    const onPointerMove = (e: PointerEvent) => {
      if (!el || !isDraggingRef.current) return
      const delta = e.clientX - startX
      const dx = e.clientX - lastX
      velocity = dx
      lastX = e.clientX
      if (Math.abs(delta) > 5) moved = true
      el.scrollLeft = scrollLeft - delta
    }

    const applyMomentum = (ts: number) => {
      if (!el) return
      const elapsed = ts - lastTimestamp
      lastTimestamp = ts

      if (Math.abs(velocity) > 0.1) {
        el.scrollLeft -= velocity * (elapsed / 16)
        velocity *= 0.95
        momentumId = requestAnimationFrame(applyMomentum)
      } else {
        velocity = 0
        momentumId = null
        animationFrameId = requestAnimationFrame(animateScroll) // resume auto-scroll
      }
    }

    const onPointerUp = (e: PointerEvent) => {
      if (!el) return
      isDraggingRef.current = false
      el.releasePointerCapture(e.pointerId)
      el.style.userSelect = 'auto'
      el.style.cursor = 'default'

      if (!moved) {
        const card = (e.target as HTMLElement).closest('[data-project-index]')
        if (card) {
          const index = Number(card.getAttribute('data-project-index'))
          if (!isNaN(index)) setSelected(projects[index])
        }
      } else {
        momentumId = requestAnimationFrame(applyMomentum)
      }
    }

    el.addEventListener('pointerdown', onPointerDown)
    el.addEventListener('pointermove', onPointerMove)
    el.addEventListener('pointerup', onPointerUp)
    el.addEventListener('mouseenter', () => (isHoveringRef.current = true))
    el.addEventListener('mouseleave', () => (isHoveringRef.current = false))
    el.addEventListener('touchstart', () => (isTouchingRef.current = true), { passive: true })
    el.addEventListener('touchend', () => (isTouchingRef.current = false))
    el.addEventListener('dragstart', e => e.preventDefault())

    animationFrameId = requestAnimationFrame(animateScroll)

    return () => {
      clearTimers()
      el.removeEventListener('pointerdown', onPointerDown)
      el.removeEventListener('pointermove', onPointerMove)
      el.removeEventListener('pointerup', onPointerUp)
    }
  }, [selected, projects])

  return (
    <section id="project" className="py-16 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        Projects
      </h2>

      <div className="flex justify-center">
        <div
          ref={scrollRef}
          className="scroll-container flex gap-4 overflow-x-auto px-4 max-w-screen-xl w-full"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-project-index={index}
              onClick={() => setSelected(project)} // ✅ Set selected project here
              className="min-w-[300px] snap-start rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="rounded-t-2xl object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-t-2xl flex items-center justify-center">
                  No Image
                </div>
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="bg-cyan-100 dark:bg-cyan-800 text-cyan-700 dark:text-cyan-100 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Modal using AnimatePresence */}
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
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-2xl max-w-lg w-full mx-4 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()} // ✅ Prevent click bubbling
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
              {selected.image ? (
                <Image
                  src={selected.image}
                  alt={selected.title}
                  width={500}
                  height={300}
                  className="rounded-md mb-4"
                />
              ) : (
                <div className="bg-gray-200 dark:bg-gray-700 rounded-md p-4 text-gray-500">
                  No Image
                </div>
              )}
              <p className="text-gray-700 dark:text-gray-300">{selected.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
