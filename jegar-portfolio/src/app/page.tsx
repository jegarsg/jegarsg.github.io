'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import {
  FaDownload,
  FaBriefcase,
  FaGraduationCap,
  FaGithub,
  FaLinkedin,
  FaNodeJs,
  FaAtlassian,
  FaBitbucket,
  FaAws,
  FaJava,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
} from 'react-icons/fa'
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
  SiGithub,
  SiJavascript,
  SiNestjs,
  SiAngular,
  SiNextdotjs,
  SiNodedotjs,
  SiSqlalchemy,
  SiSqlite,
  SiJirasoftware,
  SiJira,
  SiBitbucket,
  SiGin,
  SiSharp,
  SiJetbrains,
  SiTailwindcss,
  SiSpringboot,
} from 'react-icons/si'
import DarkModeToggle from './components/DarkModeToggle'
import { RiAngularjsFill, RiJavaFill } from 'react-icons/ri'
import { DiVisualstudio } from 'react-icons/di'
import { VscAzureDevops, VscCode } from 'react-icons/vsc'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { Menu, X } from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work')
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  }
  const itemVariants2 = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 14,
      },
    },
  }
  const containerVariants2 = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const { ref, inView } = useInView({
    triggerOnce: false, // So it re-triggers
    threshold: 0.1,
  })

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { scale: 1.1, transition: { type: 'spring', stiffness: 300 } },
  }
  const [isOpen, setIsOpen] = useState(false)

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
      {
        title: 'High School',
        company: 'SMA Negeri 1 Tigabinanga',
        date: '2010 – 2013',
      },
    ],
  }

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
        { icon: <SiAngular className="text-red-600" />, label: 'Angular' },
        { icon: <SiGin className="text-green-700" />, label: 'Gin' },
        { icon: <SiDotnet className="text-purple-500" />, label: '.NET Core' },
        { icon: <SiSpringboot className="text-purple-500" />, label: 'Springboot' },
      ],
    },
    {
      title: 'Databases',
      items: [
        { icon: <SiPostgresql className="text-indigo-600" />, label: 'PostgreSQL' },
        { icon: <SiMongodb className="text-green-600" />, label: 'MongoDB' },
        { icon: <SiSqlite className="text-blue-600" />, label: 'SQL Server' },
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
        { icon: <SiElastic className="text-blue-600" />, label: 'Kubernetes' },
        { icon: <SiBitbucket className="text-blue-700" />, label: 'Bitbucket' },
        { icon: <SiJira className="text-blue-500" />, label: 'Jira' },
        { icon: <DiVisualstudio className="text-indigo-600" />, label: 'VSCode' },
        { icon: <SiJetbrains className="text-pink-600" />, label: 'JetBrains' },
        { icon: <VscAzureDevops className="text-blue-500" />, label: 'Azure' },
        { icon: <FaAws className="text-orange-500" />, label: 'AWS' },
      ],
    },
  ]
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* NAVBAR */}
      <header className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow z-50 transition-colors duration-300">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between md:justify-center relative">
          {/* Left: Logo as clickable link */}
          <a
            href="/"
            className="text-2xl font-bold text-gray-900 dark:text-white absolute left-4 top-1/2 -translate-y-1/2 md:static md:translate-y-0"
          >
            JG
          </a>

          {/* Mobile Right: Dark Mode Toggle + Hamburger menu side by side */}
          <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 flex items-center space-x-4">
            <DarkModeToggle />
            <button
              className="text-gray-700 dark:text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop navigation */}
          <ul className="hidden md:flex gap-6 font-semibold items-center ml-auto text-gray-800 dark:text-gray-200">
            <li>
              <a href="#about" className="hover:text-cyan-500">
                About
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-cyan-500">
                Experiences
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-cyan-500">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-cyan-500">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-cyan-500">
                Contact
              </a>
            </li>
            <li>
              <DarkModeToggle />
            </li>
          </ul>
        </nav>

        {/* Mobile bottom nav menu */}
        {isOpen && (
          <AnimatePresence>
            <motion.nav
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1], // easeOutBack
              }}
              className="md:hidden fixed bottom-0 left-0 w-full z-50"
            >
              <div className="w-[95%] max-w-md mx-auto mb-2 bg-white/70 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-3xl shadow-2xl p-6 transition-all duration-300">
                <ul className="grid grid-cols-2 gap-4 text-center text-sm font-medium text-gray-800 dark:text-gray-100">
                  <li>
                    <a
                      href="#about"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                      <FaUser className="w-5 h-5 text-blue-500" />
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#experience"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                      <FaBriefcase className="w-5 h-5 text-green-500" />
                      Experience
                    </a>
                  </li>
                  <li>
                    <a
                      href="#skills"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                      <FaTools className="w-5 h-5 text-yellow-500" />
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                      <FaProjectDiagram className="w-5 h-5 text-pink-500" />
                      Projects
                    </a>
                  </li>
                  <li className="col-span-2">
                    <a
                      href="#contact"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                      <FaEnvelope className="w-5 h-5 text-red-500" />
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </motion.nav>
          </AnimatePresence>
        )}
      </header>
      );
      <section id="about" className="pt-32 pb-20 max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-1">Jegar Sahaduta Ginting</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">Software Engineer</p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={200}
              height={200}
              className="rounded-xl shadow-lg"
            />
          </motion.div>

          <div className="max-w-xl text-center md:text-left">
            <p className="mb-4">
              Senior Software Engineer with over 7 years of experience designing and delivering
              enterprise-grade backend systems. Focused on scalable architectures, cloud
              infrastructure, and applying Clean Architecture principles to build maintainable
              solutions.
            </p>
            <p className="mb-4">
              Experienced across the full Software Development lifecycle and Microservices, with a
              strong passion for clean code and scalable systems. Interested in leveraging
              Artificial Intelligence Technologies to drive innovation and enhance product
              capabilities.
            </p>

            <div className="flex gap-4 mb-4 flex-wrap justify-center md:justify-start">
              <motion.a
                href="/resume.pdf"
                className="bg-white text-cyan-600 px-3 py-1.5 rounded shadow inline-flex items-center gap-2 text-sm
              transition-colors duration-300 ease-in-out
              hover:bg-cyan-600 hover:text-white"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume <FaDownload />
              </motion.a>

              <motion.a
                href="https://github.com/jegarsg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-800 px-3 py-1.5 rounded shadow inline-flex items-center gap-2 text-sm
              transition-colors duration-300 ease-in-out
              hover:bg-gray-800 hover:text-white"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <FaGithub /> GitHub
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/jegarsg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-3 py-1.5 rounded shadow inline-flex items-center gap-2 text-sm
              transition-colors duration-300 ease-in-out
              hover:bg-blue-600 hover:text-white"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <FaLinkedin /> LinkedIn
              </motion.a>
            </div>
          </div>
        </div>
      </section>
      {/* EXPERIENCE */}
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
                className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  activeTab === tab
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600'
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
                  <span className="absolute -left-[10px] top-1 w-3 h-3 bg-cyan-400 rounded-full border-2 border-white dark:border-gray-900" />

                  <div className="bg-white dark:bg-gray-800 p-3 rounded-md shadow-sm">
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
      {/* SKILLS */}
      <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tight mb-2"
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

          {skillSections.map(({ title, items }, idx) => (
            <div key={idx} className="mb-16">
              <motion.h3
                className="text-left text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {title}
              </motion.h3>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {items.map(({ icon, label }, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.1,
                      y: -6,
                      boxShadow: '0 10px 20px rgba(6, 182, 212, 0.4)',
                    }}
                    whileTap={{
                      scale: 0.95,
                      filter: 'brightness(1.1) drop-shadow(0 0 8px rgba(6,182,212,0.5))',
                      transition: { duration: 0.3, ease: 'easeOut' },
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="bg-white dark:bg-gray-800 px-4 py-6 rounded-2xl shadow-md flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
                  >
                    <div className="text-4xl mb-2 text-cyan-600 dark:text-cyan-400">{icon}</div>
                    <span className="text-sm text-gray-700 dark:text-gray-100">{label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>
      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-6">
        Powered by Next.js 15 + Tailwind CSS. © {new Date().getFullYear()}
      </footer>
    </main>
  )
}
