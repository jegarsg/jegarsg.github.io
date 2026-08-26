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
  SiOracle,
  SiRedhatopenshift,
  SiBmcsoftware,
  SiNvidia,
  SiPytorch,
  SiTensorflow,
  SiHuggingface,
  SiOpenai,
  SiOllama,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiJupyter,
} from 'react-icons/si'
import { FaDatabase } from 'react-icons/fa'
import { RiJavaFill } from 'react-icons/ri'
import { DiVisualstudio } from 'react-icons/di'
import { VscAzureDevops } from 'react-icons/vsc'
import { FaRust } from 'react-icons/fa6'
const iconClass =
  'text-gray-500 dark:text-gray-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors'

const skillSections = [
  {
    title: 'Programming Languages',
    items: [
      { icon: <SiPython className={iconClass} />, label: 'Python' },
      { icon: <SiSharp className={iconClass} />, label: 'C#' },
      { icon: <SiTypescript className={iconClass} />, label: 'TypeScript' },
      { icon: <SiJavascript className={iconClass} />, label: 'JavaScript' },
      { icon: <SiRust className={iconClass} />, label: 'Rust' },
      { icon: <SiGoland className={iconClass} />, label: 'Go' },
      { icon: <RiJavaFill className={iconClass} />, label: 'Java' },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { icon: <SiNestjs className={iconClass} />, label: 'NestJS' },
      { icon: <SiNextdotjs className={iconClass} />, label: 'Next.js' },
      { icon: <SiNodedotjs className={iconClass} />, label: 'Node.js' },
      { icon: <SiAngular className={iconClass} />, label: 'Angular JS' },
      { icon: <SiGin className={iconClass} />, label: 'Gin' },
      { icon: <SiDotnet className={iconClass} />, label: '.NET Core' },
      { icon: <SiSpringboot className={iconClass} />, label: 'Springboot' },
      { icon: <SiFastapi className={iconClass} />, label: 'FastApi' },
      { icon: <FaRust className={iconClass} />, label: 'Axum' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    items: [
      { icon: <SiNvidia className={iconClass} />, label: 'CUDA' },
      { icon: <SiPytorch className={iconClass} />, label: 'PyTorch' },
      { icon: <SiTensorflow className={iconClass} />, label: 'TensorFlow' },
      { icon: <SiHuggingface className={iconClass} />, label: 'Hugging Face' },
      { icon: <SiOpenai className={iconClass} />, label: 'OpenAI API' },
      { icon: <SiOllama className={iconClass} />, label: 'Ollama' },
      { icon: <SiScikitlearn className={iconClass} />, label: 'scikit-learn' },
      { icon: <SiNumpy className={iconClass} />, label: 'NumPy' },
      { icon: <SiPandas className={iconClass} />, label: 'Pandas' },
      { icon: <SiJupyter className={iconClass} />, label: 'Jupyter' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { icon: <SiPostgresql className={iconClass} />, label: 'PostgreSQL' },
      { icon: <SiMongodb className={iconClass} />, label: 'MongoDB' },
      { icon: <FaDatabase className={iconClass} />, label: 'MS SQL Server' },
      { icon: <SiOracle className={iconClass} />, label: 'Oracle' },
      { icon: <SiRedis className={iconClass} />, label: 'Redis' },
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
      { icon: <SiDocker className={iconClass} />, label: 'Docker' },
      { icon: <SiApachekafka className={iconClass} />, label: 'Kafka' },
      { icon: <SiJenkins className={iconClass} />, label: 'Jenkins' },
      { icon: <SiGithubactions className={iconClass} />, label: 'GitHub Actions' },
      { icon: <SiElastic className={iconClass} />, label: 'ELK Stack' },
      { icon: <SiKubernetes className={iconClass} />, label: 'Kubernetes' },
      { icon: <SiRedhatopenshift className={iconClass} />, label: 'OpenShift (OCP)' },
      { icon: <SiBmcsoftware className={iconClass} />, label: 'Control-M' },
      { icon: <SiBitbucket className={iconClass} />, label: 'Bitbucket' },
      { icon: <SiJira className={iconClass} />, label: 'Jira' },
      { icon: <DiVisualstudio className={iconClass} />, label: 'VSCode' },
      { icon: <SiJetbrains className={iconClass} />, label: 'JetBrains' },
      { icon: <VscAzureDevops className={iconClass} />, label: 'Azure' },
      { icon: <FaAws className={iconClass} />, label: 'AWS' },
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

const spanClasses = ['md:col-span-2', 'md:col-span-1', 'md:col-span-3', 'md:col-span-3']

function Skills() {
  const [, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="skills" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-3xl font-heading font-bold tracking-tight mb-2"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skillSections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className={`card p-6 text-left ${spanClasses[idx % spanClasses.length]}`}
            >
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
                {section.title}
              </h3>

              <motion.div
                className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {section.items.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ y: -3 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="group border border-black/[0.06] dark:border-white/[0.08] hover:border-emerald-500/40 dark:hover:border-emerald-400/30 px-3 py-4 rounded-xl flex flex-col items-center justify-center cursor-default transition-colors duration-300"
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <span className="text-[11px] text-gray-600 dark:text-gray-300 text-center">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
