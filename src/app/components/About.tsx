// src/app/components/About.tsx
'use client'

import React from 'react'
import Image from 'next/image'
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

const buttonVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  hover: { scale: 1.05 },
}

const CAREER_START = new Date(2019, 4, 1) // May 2019, matches AGIT role in Experience.tsx
const yearsOfExperience = Math.floor(
  (Date.now() - CAREER_START.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
)

export default function About() {
  return (
    <section id="about" className="pt-32 pb-20 max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 auto-rows-[minmax(120px,auto)]">
        {/* Intro card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass glass-hover rounded-3xl p-8 lg:col-span-2 lg:row-span-2 flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
            Hi, my name is <br />
            <span className="text-gradient">Jegar</span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 font-semibold mb-6">
            Engineering Solutions, Not Just Code.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            Senior Software Engineer with {yearsOfExperience}+ years of experience building
            scalable backend systems and cloud-native infrastructure, now leading an engineering
            team to deliver reliable, high-impact platforms grounded in Clean Architecture
            principles. Proven track record of driving performance and reliability improvements
            at enterprise scale — now expanding into AI to build what&apos;s next.
          </p>

          <div className="flex flex-wrap gap-3">
            <motion.a
              href="/CV-Jegar-Sahaduta-Ginting.pdf"
              className="bg-cyan-500 text-white px-4 py-2 rounded-full shadow inline-flex items-center gap-2 text-sm font-semibold
                transition-colors duration-300 ease-in-out hover:bg-cyan-600"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap={{ scale: 0.95, rotate: 0 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload className="w-4 h-4" />
              Resume
            </motion.a>

            <motion.a
              href="https://github.com/jegarsg"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass px-4 py-2 rounded-full inline-flex items-center gap-2 text-sm font-semibold
                transition-colors duration-300 ease-in-out hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900"
            >
              <FaGithub className="w-4 h-4" />
              GitHub
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/jegarsg"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass px-4 py-2 rounded-full inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400
                transition-colors duration-300 ease-in-out hover:bg-blue-600 hover:text-white dark:hover:text-white"
            >
              <FaLinkedin className="w-4 h-4" />
              LinkedIn
            </motion.a>
          </div>
        </motion.div>

        {/* Photo card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-3xl p-4 lg:col-span-1 lg:row-span-2 flex items-center justify-center"
        >
          <motion.div whileHover={{ scale: 1.05, rotate: 1 }} transition={{ duration: 0.4 }}>
            <Image
              src="/profile.jpg"
              alt="Jegar Profile"
              width={220}
              height={280}
              className="rounded-2xl shadow-xl object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Stat cards */}
        {[
          { label: 'Years of Experience', value: `${yearsOfExperience}+` },
          { label: 'Current Role', value: 'Senior SE @ Bank Mandiri' },
          { label: 'Based in', value: 'Jakarta, ID' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 * i }}
            className="glass glass-hover rounded-3xl p-5 flex flex-col justify-center"
          >
            <span className="text-xl font-heading font-bold text-gradient">{stat.value}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
