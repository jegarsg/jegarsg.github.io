// src/app/components/Services.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaServer, FaDatabase, FaCloud, FaComments } from 'react-icons/fa'
import { IconType } from 'react-icons'

type Service = {
  title: string
  description: string
  icon: IconType
  tags: string[]
}

const services: Service[] = [
  {
    title: 'Backend & API Development',
    description:
      'Design and build reliable REST APIs, API gateways, and system integrations using Node.js/NestJS, .NET, Go, or Java Spring Boot.',
    icon: FaServer,
    tags: ['NestJS', '.NET Core', 'Go', 'Spring Boot'],
  },
  {
    title: 'Database Optimization & Architecture',
    description:
      'Schema design and query tuning for PostgreSQL, MS SQL Server, Oracle, and MongoDB to improve performance and reliability at scale.',
    icon: FaDatabase,
    tags: ['PostgreSQL', 'MS SQL Server', 'Oracle', 'MongoDB'],
  },
  {
    title: 'Cloud & DevOps Setup',
    description:
      'Containerization, CI/CD pipelines, and observability setup with Docker, Kubernetes, Jenkins, GitHub Actions, Azure DevOps, and ELK.',
    icon: FaCloud,
    tags: ['Docker', 'Kubernetes', 'CI/CD', 'ELK Stack'],
  },
  {
    title: 'Technical Consulting & Code Review',
    description:
      'Architecture review, Clean Architecture guidance, and hands-on mentoring to help your team ship reliable, maintainable software.',
    icon: FaComments,
    tags: ['Architecture Review', 'Mentoring', 'Best Practices'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-heading font-bold tracking-tight mb-2">Services</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xl">
            Open for freelance and consulting work outside my full-time role — here&apos;s where
            I can help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="card card-hover p-6"
            >
              <service.icon className="w-6 h-6 text-accent mb-5" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map(tag => (
                  <span
                    key={tag}
                    className="border border-black/10 dark:border-white/10 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
