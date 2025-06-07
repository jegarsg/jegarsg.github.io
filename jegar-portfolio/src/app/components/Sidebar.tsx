'use client'

import Link from 'next/link'
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'
import DarkModeToggle from './DarkModeToggle'

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-16 md:w-20 flex flex-col items-center justify-center bg-white dark:bg-gray-800 shadow-lg z-50">
      <Link
        href="#home"
        className="my-4 text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-white"
      >
        <FaHome size={24} />
      </Link>
      <Link
        href="#about"
        className="my-4 text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-white"
      >
        <FaUser size={24} />
      </Link>
      <Link
        href="#skills"
        className="my-4 text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-white"
      >
        <FaCode size={24} />
      </Link>
      <Link
        href="#projects"
        className="my-4 text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-white"
      >
        <FaProjectDiagram size={24} />
      </Link>
      <Link
        href="#contact"
        className="my-4 text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-white"
      >
        <FaEnvelope size={24} />
      </Link>

      {/* Dark Mode Toggle */}
      <DarkModeToggle />
    </div>
  )
}

export default Sidebar
