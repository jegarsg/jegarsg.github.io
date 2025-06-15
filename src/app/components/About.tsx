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

export default function About() {
  return (
    <section id="about" className="pt-28 pb-20 max-w-4xl mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Hi, my name is <br />
          <span className="text-cyan-600">Jegar</span>
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 font-semibold mb-6">
          Engineering Solutions, Not Just Code.
        </p>

        <div className="flex justify-center mb-8">
          <motion.div whileHover={{ scale: 1.05, rotate: 1 }} transition={{ duration: 0.4 }}>
            <Image
              src="/profile.jpg"
              alt="Jegar Profile"
              width={220}
              height={280}
              className="rounded shadow-xl object-cover"
            />
          </motion.div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto mb-6">
          Senior Software Engineer with 7+ years of experience building scalable backend systems,
          cloud-native infrastructure, and applying Clean Architecture principles. Passionate about
          crafting systems that scale — and now exploring AI for the future.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            href="/CV-Jegar-Sahaduta-Ginting.pdf"
            className="bg-white text-cyan-600 px-3 py-1.5 rounded shadow inline-flex items-center gap-2 text-sm
      transition-colors duration-300 ease-in-out
      hover:bg-cyan-600 hover:text-white"
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
            className="bg-white text-gray-800 px-3 py-1.5 rounded shadow inline-flex items-center gap-2 text-sm
      transition-colors duration-300 ease-in-out
      hover:bg-gray-800 hover:text-white"
          >
            <FaGithub className="w-4 h-4" />
            GitHub
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/jegarsg"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-3 py-1.5 rounded shadow inline-flex items-center gap-2 text-sm
      transition-colors duration-300 ease-in-out
      hover:bg-blue-600 hover:text-gray-50"
          >
            <FaLinkedin className="w-4 h-4" />
            LinkedIn
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
