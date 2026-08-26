// src/components/Experience.tsx

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

const experiences = {
  work: [
    {
      title: 'Senior Software Engineer',
      company: 'PT Bank Mandiri Tbk, Jakarta',
      date: 'Jan 2025 – Present',
      tech: [
        'Java',
        'Spring Boot',
        '.NET',
        'SQL',
        'Oracle',
        'Azure',
        'ELK Stack',
        'Control-M',
        'OpenShift (OCP)',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Avows Global Technology, Jakarta',
      date: 'Jul 2023 – Dec 2024',
    },
    {
      title: 'Software Engineer',
      company: 'PGI Data, Jakarta',
      date: 'Jan 2022 – Jun 2023',
    },
    {
      title: '.NET Fullstack Developer',
      company: 'AGIT, Jakarta',
      date: 'May 2019 – Dec 2021',
    },
    {
      title: 'Intern Fullstack Developer',
      company: 'Ministry of Finance, Jakarta',
      date: 'Jun 2017 – Sep 2017',
    },
  ],
  education: [
    {
      title: 'Bachelor of Information Technology',
      company: 'Universitas Atma Jaya Yogyakarta',
      date: '2013 – 2018',
    },
  ],
}

function Experience() {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work')

  return (
    <section id="experience" className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-10 flex-wrap gap-4"
        >
          <div>
            <h2 className="text-3xl font-heading font-bold tracking-tight">Experience</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              My journey through work and education
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 p-1 rounded-full border border-black/[0.08] dark:border-white/10">
            {['work', 'education'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as 'work' | 'education')}
                className={`relative flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  activeTab === tab
                    ? 'text-white dark:text-gray-900'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {activeTab === tab && (
                  <motion.span
                    layoutId="exp-tab"
                    className="absolute inset-0 bg-gray-900 dark:bg-white rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {tab === 'work' ? <FaBriefcase size={12} /> : <FaGraduationCap size={12} />}
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
            className="relative border-l border-black/10 dark:border-white/10 pl-6"
          >
            {experiences[activeTab].map((item, i) => (
              <motion.div
                key={i}
                className="mb-6 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {/* Dot */}
                <span className="absolute -left-[27px] top-1.5 w-2.5 h-2.5 bg-emerald-500 dark:bg-emerald-400 rounded-full ring-4 ring-[var(--background)]" />

                <div className="card card-hover p-4">
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="text-[12px] text-gray-600 dark:text-gray-300">{item.company}</p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 font-mono mt-0.5">
                    {item.date}
                  </p>
                  {'tech' in item && item.tech && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {item.tech.map(tech => (
                        <span
                          key={tech}
                          className="border border-black/10 dark:border-white/10 text-gray-600 dark:text-gray-300 text-[10px] px-2 py-0.5 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Experience
