'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
  FaDownload,
  FaBriefcase,
  FaGraduationCap,
  FaGithub,
  FaLinkedin,
  FaAws,
  FaUser,
  FaTools,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
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
  SiJavascript,
  SiNestjs,
  SiAngular,
  SiNextdotjs,
  SiNodedotjs,
  SiSqlite,
  SiJira,
  SiBitbucket,
  SiGin,
  SiSharp,
  SiJetbrains,
  SiSpringboot,
  SiFastapi,
  SiKubernetes,
} from 'react-icons/si'
import DarkModeToggle from './components/DarkModeToggle'
import { RiJavaFill } from 'react-icons/ri'
import { DiVisualstudio } from 'react-icons/di'
import { VscAzureDevops } from 'react-icons/vsc'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { FaRust } from 'react-icons/fa6'

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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const [activeSection, setActiveSection] = useState('')

  const sections = ['about', 'experience', 'skills', 'contact']
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      for (const id of sections) {
        const section = document.getElementById(id)
        if (section) {
          const offsetTop = section.offsetTop - 100 // Adjust for header height
          const offsetBottom = offsetTop + section.offsetHeight

          if (scrollY >= offsetTop && scrollY < offsetBottom) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // run once on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          scrolled
            ? 'bg-white dark:bg-gray-800 shadow-lg'
            : 'bg-transparent dark:bg-transparent shadow-none'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between md:justify-center relative">
          {/* Left: Logo as clickable link */}
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 dark:text-white absolute left-4 top-1/2 -translate-y-1/2 md:static md:translate-y-0"
          >
            JG
          </Link>

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
            {sections.map(section => (
              <li key={section}>
                <Link
                  href={`#${section}`}
                  className={`hover:text-cyan-500 ${
                    activeSection === section ? 'text-cyan-500' : ''
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
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
                    <Link
                      href="#about"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                      <FaUser className="w-5 h-5 text-blue-500" />
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#experience"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                      <FaBriefcase className="w-5 h-5 text-green-500" />
                      Experience
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#skills"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                      <FaTools className="w-5 h-5 text-yellow-500" />
                      Skills
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#contact"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                      <FaEnvelope className="w-5 h-5 text-red-500" />
                      Contacts
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.nav>
          </AnimatePresence>
        )}
      </header>

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

          <p className="text-lg text-gray-600 dark:text-gray-300 font-medium mb-6">
            Engineering Solutions, Not Just Code.
          </p>

          <div className="flex justify-center mb-8">
            <motion.div whileHover={{ scale: 1.05, rotate: 1 }} transition={{ duration: 0.4 }}>
              <Image
                src="/profile.jpg"
                alt="Jegar Profile"
                width={220}
                height={280}
                className="rounded-x shadow-xl object-cover"
              />
            </motion.div>
          </div>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto mb-6">
            Senior Software Engineer with 7+ years of experience building scalable backend systems,
            cloud-native infrastructure, and applying Clean Architecture principles. Passionate
            about crafting systems that scale — and now exploring AI for the future.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="/resume.pdf"
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
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap={{ scale: 0.95, rotate: 0 }}
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
      hover:bg-blue-600 hover:text-white"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap={{ scale: 0.95, rotate: 0 }}
            >
              <FaLinkedin className="w-4 h-4" />
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
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

      <section id="contact" className="px-4 py-10 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact</h2>

        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-800 dark:text-gray-200">
          {/* Email */}
          <Link href="mailto:jegarsg@gmail.com" className="flex items-center gap-2 hover:underline">
            <FaEnvelope className="text-cyan-500" />
            jegarsg@gmail.com
          </Link>

          {/* Phone */}
          <Link href="tel:+6282128614801" className="flex items-center gap-2 hover:underline">
            <FaPhone className="text-green-500" />
            +62 821 2861 4801
          </Link>

          {/* Location */}
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-500" />
            Jakarta, ID
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-10 text-sm text-gray-700 dark:text-gray-300">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left side */}
          <p className="text-center sm:text-left flex-1 text-gray-700 dark:text-gray-300">
            © {new Date().getFullYear()}{' '}
            <span className="font-medium text-black dark:text-white">Jegar</span>. Built with{' '}
            <span className="text-black dark:text-white font-semibold">Next.js</span> &{' '}
            <span className="text-sky-500 font-semibold">Tailwind CSS</span>.
          </p>

          {/* Center fork link: only show on md and up */}
          <div className="hidden md:flex flex-1 justify-center">
            <a
              href="https://github.com/jegarsg/jegarsg.github.io/fork"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors transform hover:scale-110 motion-reduce:transform-none select-none"
              aria-label="Fork me on GitHub"
            >
              {/* Simplified fork icon (stroke only) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>

              <span className="text-sm font-medium">Fork</span>
            </a>
          </div>

          {/* Right side social icons */}
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 flex-1 justify-end">
            <a
              href="https://github.com/jegarsg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/jegarsg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
