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
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-xl sm:text-3xl font-bold">Experience</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            My journey through work and education
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {['work', 'education'].map(tab => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab as 'work' | 'education')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                activeTab === tab
                  ? 'bg-cyan-500 text-gray-50 border-cyan-500'
                  : 'bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-300 border-gray-300 dark:border-gray-600'
              }`}
            >
              {tab === 'work' ? <FaBriefcase size={12} /> : <FaGraduationCap size={12} />}
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.5 }}
            className="relative border-l border-cyan-400 pl-4"
          >
            {experiences[activeTab].map((item, i) => (
              <motion.div
                key={i}
                className="mb-6 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                {/* Dot */}
                <span className="absolute -left-[10px] top-1 w-3 h-3 bg-cyan-400 rounded-full border-2 border-gray-50 dark:border-gray-900" />

                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md shadow-md">
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="text-[11px] text-gray-600 dark:text-gray-300">{item.company}</p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400">{item.date}</p>
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
