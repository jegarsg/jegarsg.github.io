// src/components/Skills.tsx

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaAws } from 'react-icons/fa'
import {
  SiDotnet,
  SiGoland,
  SiPython,
  SiTypescript,
  SiRust,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiRedis,
  SiApachekafka,
  SiJenkins,
  SiGithubactions,
  SiElastic,
  SiJavascript,
  SiNestjs,
  SiAngular,
  SiNextdotjs,
  SiNodedotjs,
  SiJira,
  SiBitbucket,
  SiGin,
  SiSharp,
  SiJetbrains,
  SiSpringboot,
  SiFastapi,
  SiKubernetes,
} from 'react-icons/si'
import { FaDatabase } from "react-icons/fa";
import { RiJavaFill } from 'react-icons/ri'
import { DiVisualstudio } from 'react-icons/di'
import { VscAzureDevops } from 'react-icons/vsc'
import { FaRust } from 'react-icons/fa6'
const skillSections = [
  {
    title: 'Programming Languages',
    items: [
      { icon: <SiPython className="text-yellow-500" />, label: 'Python' },
      { icon: <SiSharp className="text-cyan-600" />, label: 'C#' },
      { icon: <SiTypescript className="text-blue-400" />, label: 'TypeScript' },
      { icon: <SiJavascript className="text-yellow-400" />, label: 'JavaScript' },
      { icon: <SiRust className="text-orange-600" />, label: 'Rust' },
      { icon: <SiGoland className="text-blue-500" />, label: 'Go' },
      { icon: <RiJavaFill className="text-blue-500" />, label: 'Java' },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { icon: <SiNestjs className="text-red-500" />, label: 'NestJS' },
      { icon: <SiNextdotjs className="text-black dark:text-white" />, label: 'Next.js' },
      { icon: <SiNodedotjs className="text-green-600" />, label: 'Node.js' },
      { icon: <SiAngular className="text-red-600" />, label: 'Angular JS' },
      { icon: <SiGin className="text-green-700" />, label: 'Gin' },
      { icon: <SiDotnet className="text-purple-500" />, label: '.NET Core' },
      { icon: <SiSpringboot className="text-purple-500" />, label: 'Springboot' },
      { icon: <SiFastapi className="text-purple-500" />, label: 'FastApi' },
      { icon: <FaRust className="text-purple-500" />, label: 'Axum' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { icon: <SiPostgresql className="text-indigo-600" />, label: 'PostgreSQL' },
      { icon: <SiMongodb className="text-green-600" />, label: 'MongoDB' },
      { icon: <FaDatabase className="text-blue-600" />, label: 'MS SQL Server' },
      { icon: <SiRedis className="text-red-500" />, label: 'Redis' },
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
      { icon: <SiDocker className="text-blue-700" />, label: 'Docker' },
      { icon: <SiApachekafka className="text-black" />, label: 'Kafka' },
      { icon: <SiJenkins className="text-red-700" />, label: 'Jenkins' },
      { icon: <SiGithubactions className="text-gray-800" />, label: 'GitHub Actions' },
      { icon: <SiElastic className="text-yellow-700" />, label: 'ELK Stack' },
      { icon: <SiKubernetes className="text-blue-600" />, label: 'Kubernetes' },
      { icon: <SiBitbucket className="text-blue-700" />, label: 'Bitbucket' },
      { icon: <SiJira className="text-blue-500" />, label: 'Jira' },
      { icon: <DiVisualstudio className="text-indigo-600" />, label: 'VSCode' },
      { icon: <SiJetbrains className="text-pink-600" />, label: 'JetBrains' },
      { icon: <VscAzureDevops className="text-blue-500" />, label: 'Azure' },
      { icon: <FaAws className="text-orange-500" />, label: 'AWS' },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

function Skills() {
  const [, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-semibold tracking-tight mb-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-12">
          Technologies I use frequently
        </p>

        {skillSections.map((section, idx) => (
          <div key={idx} className="mb-16">
            <motion.h3
              className="text-left text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {section.title}
            </motion.h3>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {section.items.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -6, boxShadow: '0 10px 20px rgb(6, 182, 212, 0.4)' }}
                  whileTap={{
                    scale: 0.95,
                    filter: 'brightness(1.1) drop-shadow(0 0 8px rgb(6, 182, 212, 0.5)',
                    transition: { duration: 0.3, ease: 'easeOut' },
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="bg-gray-50 dark:bg-gray-800 px-4 py-6 rounded-2xl shadow-md flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
                >
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <span className="text-sm text-gray-700 dark:text-gray-100">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
