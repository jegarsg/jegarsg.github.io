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
    <section id="about" className="pt-40 pb-24 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center mb-16">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-mono text-sm mb-4 tracking-wide">
          </p>

          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-xs font-medium text-gray-600 dark:text-gray-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Open for freelance projects
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.05] tracking-tight mb-6">
            Hi, I&apos;m Jegar<span className="text-accent">.</span>
            <br />
            Engineering solutions,
            <br />
            not just code.
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl mb-8">
            {yearsOfExperience}+ years building scalable backend systems and cloud-native
            infrastructure, now leading an engineering team to deliver reliable, high-impact
            platforms grounded in Clean Architecture — expanding into AI to build what&apos;s
            next.
          </p>

          <div className="flex flex-wrap gap-3">
            <motion.a
              href="/CV-Jegar-Sahaduta-Ginting.pdf"
              className="btn-primary px-5 py-2.5 rounded-full inline-flex items-center gap-2 text-sm font-semibold"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
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
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary px-5 py-2.5 rounded-full inline-flex items-center gap-2 text-sm font-semibold"
            >
              <FaGithub className="w-4 h-4" />
              GitHub
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/jegarsg"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary px-5 py-2.5 rounded-full inline-flex items-center gap-2 text-sm font-semibold"
            >
              <FaLinkedin className="w-4 h-4" />
              LinkedIn
            </motion.a>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="justify-self-center lg:justify-self-end"
        >
          <div className="relative w-[200px] h-[240px] sm:w-[240px] sm:h-[280px]">
            <div className="absolute inset-0 rounded-3xl border border-emerald-500/30 dark:border-emerald-400/20 translate-x-3 translate-y-3" />
            <Image
              src="/profile.jpg"
              alt="Jegar Profile"
              width={240}
              height={280}
              className="relative rounded-3xl object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>

      {/* Stat row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-black/[0.06] dark:divide-white/[0.08] border-t border-b border-black/[0.06] dark:border-white/[0.08]"
      >
        {[
          { label: 'Years of Experience', value: `${yearsOfExperience}+` },
          { label: 'Current Role', value: 'Senior SE @ Bank Mandiri' },
          { label: 'Based in', value: 'Jakarta, ID' },
        ].map(stat => (
          <div key={stat.label} className="py-6 px-2 sm:px-6">
            <span className="block text-2xl font-heading font-bold">{stat.value}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
