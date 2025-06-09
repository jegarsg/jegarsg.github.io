'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)
  const [nearFooter, setNearFooter] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      setVisible(scrollY > 300)
      setNearFooter(scrollY + windowHeight >= documentHeight - 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: nearFooter ? -80 : 0 }} // move up 80px near footer
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`
            fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-xl
            bg-gray-900 text-white dark:bg-white dark:text-black
            hover:bg-gray-800 dark:hover:bg-gray-200
            transition-colors duration-300
          `}
          style={{ translateY: 0 }}
        >
          <motion.svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            animate={{
              rotate: 0,
            }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </motion.svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
