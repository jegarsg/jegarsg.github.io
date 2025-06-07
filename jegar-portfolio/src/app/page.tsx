'use client'

import Image from 'next/image'
import { useState } from 'react'
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
import { DiAws, DiJira, DiSqllite, DiVisualstudio } from 'react-icons/di'
import { VscAzureDevops, VscCode } from 'react-icons/vsc'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GrJava } from 'react-icons/gr'
import { LiaJava } from 'react-icons/lia'
import { BiLogoSpringBoot } from 'react-icons/bi'

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

  const { ref, inView } = useInView({
    triggerOnce: false, // So it re-triggers
    threshold: 0.1,
  })

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { scale: 1.1, transition: { type: 'spring', stiffness: 300 } },
  }

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* NAVBAR */}
      <header className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow z-50 transition-colors duration-300">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">🌀</h1>
          <ul className="flex gap-6 font-semibold items-center">
            <li>
              <a href="#about" className="hover:text-blue-500 dark:hover:text-cyan-400">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-500 dark:hover:text-cyan-400">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-500 dark:hover:text-cyan-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500 dark:hover:text-cyan-400">
                Contact
              </a>
            </li>
            <li>
              <DarkModeToggle />
            </li>
          </ul>
        </nav>
      </header>

      <section id="about" className="pt-32 pb-20 max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-1">Jegar Sahaduta Ginting</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">Software Engineer</p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={200}
            height={200}
            className="rounded-xl shadow-lg"
          />

          <div className="max-w-xl text-left" style={{ textAlign: 'justify' }}>
            <p className="mb-4">
              Senior Software Engineer with over 7 years of experience designing and delivering
              enterprise-grade backend systems. Focused on scalable architectures, cloud
              infrastructure, and applying Clean Architecture principles to build maintainable
              solutions.
            </p>
            <p className="mb-4">
              Experienced across the full software development lifecycle and microservices, with a
              strong passion for clean code and scalable systems. Interested in leveraging
              artificial intelligence technologies to drive innovation and enhance product
              capabilities.
            </p>

            <div className="flex gap-4 mb-4 flex-wrap justify-start">
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
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Title + Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold">Experiences</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">My journey</p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            className="flex justify-center gap-4 mb-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {['work', 'education'].map(tab => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab as 'work' | 'education')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                  activeTab === tab
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white border'
                }`}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          {/* Content with AnimatePresence for smooth transitions */}
          <AnimatePresence mode="wait">
            {activeTab === 'work' ? (
              <motion.div
                key="work"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="text-left max-w-xl mx-auto"
              >
                {[
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
                    title: '.NET Developer',
                    company: 'AGIT, Jakarta',
                    date: 'May 2019 – Dec 2021',
                  },
                  {
                    title: 'Intern Java Developer',
                    company: 'Ministry of Finance, Jakarta',
                    date: 'Juni 2017 – Sep 2017',
                  },
                ].map((exp, i) => (
                  <motion.div
                    key={i}
                    className="border-l-4 border-cyan-500 pl-4 mb-6"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
                  >
                    <h3 className="font-bold">{exp.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{exp.company}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{exp.date}</p>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="education"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="text-left max-w-xl mx-auto"
              >
                {[
                  {
                    title: 'Bachelor of Information Technology',
                    school: 'Universitas Atma Jaya Yogyakarta',
                    date: '2013 – 2018',
                  },
                  {
                    title: 'High School',
                    school: 'SMA Negeri 1 Tigabinanga',
                    date: '2010 – 2013',
                  },
                ].map((edu, i) => (
                  <motion.div
                    key={i}
                    className="border-l-4 border-cyan-500 pl-4 mb-6"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
                  >
                    <h3 className="font-bold">{edu.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{edu.school}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{edu.date}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>

          {/* Programming Languages */}
          <h3 className="text-2xl font-semibold mb-4 text-left">Programming Languages</h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center text-gray-700 dark:text-gray-100 text-base mb-10"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {[
              { icon: <SiPython className="text-lg text-yellow-500" />, label: 'Python' },
              { icon: <SiSharp className="text-lg text-cyan-600" />, label: 'C#' },
              { icon: <SiTypescript className="text-lg text-blue-400" />, label: 'TypeScript' },
              { icon: <SiJavascript className="text-lg text-yellow-400" />, label: 'JavaScript' },
              { icon: <SiRust className="text-lg text-orange-600" />, label: 'Rust' },
              { icon: <SiGoland className="text-lg text-blue-500" />, label: 'Go' },
              { icon: <RiJavaFill className="text-lg text-blue-500" />, label: 'Java' },
            ].map(({ icon, label }, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.12)' }}
                className="bg-white dark:bg-gray-700 px-4 py-3 rounded-md flex flex-col items-center justify-center shadow-md cursor-pointer w-28 h-16 mx-auto"
                style={{ minWidth: '112px' }}
              >
                {icon}
                <span className="mt-1 text-sm">{label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Frameworks */}
          <h3 className="text-2xl font-semibold mb-4 text-left">Frameworks</h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center text-gray-700 dark:text-gray-100 text-base mb-10"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {[
              { icon: <SiNestjs className="text-lg text-red-500" />, label: 'NestJS' },
              {
                icon: <SiNextdotjs className="text-lg text-black dark:text-white" />,
                label: 'Next.js',
              },
              { icon: <SiNodedotjs className="text-lg text-green-600" />, label: 'Node.js' },
              { icon: <SiAngular className="text-lg text-red-600" />, label: 'Angular' },
              { icon: <SiGin className="text-lg text-green-700" />, label: 'Gin' },
              { icon: <SiDotnet className="text-lg text-purple-500" />, label: '.NET' },
              { icon: <SiSpringboot className="text-lg text-purple-500" />, label: 'Springboot' },
            ].map(({ icon, label }, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.12)' }}
                className="bg-white dark:bg-gray-700 px-4 py-3 rounded-md flex flex-col items-center justify-center shadow-md cursor-pointer w-28 h-16 mx-auto"
                style={{ minWidth: '112px' }}
              >
                {icon}
                <span className="mt-1 text-sm">{label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Databases */}
          <h3 className="text-2xl font-semibold mb-4 text-left">Databases</h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center text-gray-700 dark:text-gray-100 text-base mb-10"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {[
              { icon: <SiPostgresql className="text-lg text-indigo-600" />, label: 'PostgreSQL' },
              { icon: <SiMongodb className="text-lg text-green-600" />, label: 'MongoDB' },
              { icon: <SiSqlite className="text-lg text-blue-600" />, label: 'SQL Server' },
              { icon: <SiRedis className="text-lg text-red-500" />, label: 'Redis' },
            ].map(({ icon, label }, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.12)' }}
                className="bg-white dark:bg-gray-700 px-4 py-3 rounded-md flex flex-col items-center justify-center shadow-md cursor-pointer w-28 h-16 mx-auto"
                style={{ minWidth: '112px' }}
              >
                {icon}
                <span className="mt-1 text-sm">{label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Tools & Platforms */}
          <h3 className="text-2xl font-semibold mb-4 text-left">Tools & Platforms</h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center text-gray-700 dark:text-gray-100 text-base"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {[
              { icon: <SiDocker className="text-lg text-blue-700" />, label: 'Docker' },
              { icon: <SiApachekafka className="text-lg text-black" />, label: 'Kafka' },
              { icon: <SiJenkins className="text-lg text-red-700" />, label: 'Jenkins' },
              {
                icon: <SiGithubactions className="text-lg text-gray-800" />,
                label: 'GitHub Actions',
              },
              { icon: <SiElastic className="text-lg text-yellow-700" />, label: 'ELK Stack' },
              { icon: <SiElastic className="text-lg text-blue-600" />, label: 'Kubernetes' },
              { icon: <SiBitbucket className="text-lg" />, label: 'Bitbucket' },
              { icon: <SiJira className="text-lg" />, label: 'Jira' },
              { icon: <DiVisualstudio className="text-lg" />, label: 'VSCode' },
              { icon: <SiJetbrains className="text-lg" />, label: 'Jet Brains' },
              { icon: <VscAzureDevops className="text-lg" />, label: 'Azure' },
              { icon: <FaAws className="text-lg" />, label: 'AWS' },
            ].map(({ icon, label }, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.12)' }}
                className="bg-white dark:bg-gray-700 px-4 py-3 rounded-md flex flex-col items-center justify-center shadow-md cursor-pointer w-28 h-16 mx-auto"
                style={{ minWidth: '112px' }}
              >
                {icon}
                <span className="mt-1 text-sm">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-6">
        Powered by Next.js 15 + Tailwind CSS. © {new Date().getFullYear()}
      </footer>
    </main>
  )
}
