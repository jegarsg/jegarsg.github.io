// src/app/components/Header.tsx
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaBriefcase, FaEnvelope, FaTools, FaUser, FaLaptopCode } from 'react-icons/fa'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import DarkModeToggle from './DarkModeToggle'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 w-full z-50 flex justify-center transition-all duration-300 px-4">
      <nav
        className={`w-full max-w-3xl mt-3 px-4 py-3 flex items-center justify-between rounded-full transition-all duration-300 ${
          scrolled ? 'glass shadow-lg' : 'bg-transparent border border-transparent'
        }`}
      >
        {/* Left: Logo as clickable link */}
        <Link
          href="/"
          className="text-xl font-heading font-semibold text-gradient"
        >
          JG
        </Link>

        {/* Mobile Right: Dark Mode Toggle + Hamburger menu side by side */}
        <div className="md:hidden flex items-center space-x-3">
          <DarkModeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-gray-50 focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop navigation */}
        <ul className="hidden md:flex gap-6 text-sm font-semibold items-center text-gray-800 dark:text-gray-200">
          <li>
            <Link href="#about" className="hover:text-cyan-500 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#experience" className="hover:text-cyan-500 transition-colors">
              Experiences
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-cyan-500 transition-colors">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-cyan-500 transition-colors">
              Contacts
            </Link>
          </li>
          <li>
            <Link href="#project" className="hover:text-cyan-500 transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <DarkModeToggle />
          </li>
        </ul>
      </nav>

      {/* Mobile bottom nav menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 bottom-6 z-50 flex justify-center pointer-events-none"
          >
            <div className="pointer-events-auto w-[90%] max-w-sm glass rounded-3xl shadow-2xl px-6 py-5 grid grid-cols-2 gap-4">
              {[
                {
                  href: '#about',
                  label: 'About',
                  icon: <FaUser className="text-blue-500 w-5 h-5" />,
                },
                {
                  href: '#experience',
                  label: 'Experience',
                  icon: <FaBriefcase className="text-green-500 w-5 h-5" />,
                },
                {
                  href: '#skills',
                  label: 'Skills',
                  icon: <FaTools className="text-yellow-500 w-5 h-5" />,
                },
                {
                  href: '#project',
                  label: 'Projects',
                  icon: <FaLaptopCode className="text-purple-500 w-5 h-5" />,
                },
                {
                  href: '#contact',
                  label: 'Contact',
                  icon: <FaEnvelope className="text-red-500 w-5 h-5" />,
                  center: true,
                },
              ].map(({ href, label, icon, center }) => (
                <motion.div
                  key={label}
                  className={center ? 'col-span-2' : ''}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 py-2 px-4 bg-white/50 dark:bg-white/5 rounded-xl hover:bg-white/80 dark:hover:bg-white/10 transition-colors shadow-sm text-sm font-semibold text-gray-900 dark:text-gray-50"
                  >
                    {icon}
                    {label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
