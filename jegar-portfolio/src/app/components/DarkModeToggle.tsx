'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sunIcon = (
  <svg
    key="sun"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    className="w-7 h-7 text-yellow-400"
  >
    <circle cx="12" cy="12" r="5" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 1v2m0 18v2m9-11h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05L5.636 5.636m12.728 0l-1.414 1.414M7.05 16.95l-1.414 1.414"
    />
  </svg>
)

const moonIcon = (
  <svg
    key="moon"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
    className="w-7 h-7 text-gray-700 dark:text-gray-300"
  >
    <path d="M21 12.79A9 9 0 0112.21 3a7 7 0 000 14 9 9 0 018.79-4.21z" />
  </svg>
)

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const html = document.documentElement
    const savedTheme = localStorage.getItem('theme')

    if (
      savedTheme === 'dark' ||
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      html.classList.add('dark')
      setIsDarkMode(true)
    } else {
      html.classList.remove('dark')
      setIsDarkMode(false)
    }
  }, [])

  const toggleDarkMode = () => {
    const html = document.documentElement
    if (isDarkMode) {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
    setIsDarkMode(!isDarkMode)
  }

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggleDarkMode}
      className="cursor-pointer focus:outline-none"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDarkMode ? 'sun' : 'moon'}
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center"
        >
          {isDarkMode ? sunIcon : moonIcon}
        </motion.div>
      </AnimatePresence>
    </button>
  )
}
