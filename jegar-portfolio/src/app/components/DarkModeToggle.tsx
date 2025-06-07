'use client'
import { useState, useEffect } from 'react'

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // On mount, check if html has 'dark' class
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  function toggleDark() {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }

  return (
    <button
      onClick={toggleDark}
      className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700"
      aria-label="Toggle dark mode"
    >
      {isDark ? '🌞' : '🌙'}
    </button>
  )
}
