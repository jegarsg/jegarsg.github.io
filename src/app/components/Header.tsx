// src/app/components/Header.tsx
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaBriefcase, FaEnvelope, FaTools, FaUser, FaLaptopCode, FaHandshake } from 'react-icons/fa'
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
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'nav-surface' : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Left: Logo as clickable link */}
          <Link
            href="/"
            className="text-lg font-heading font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Jegar<span className="text-accent">.</span>
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
          <ul className="hidden md:flex gap-8 text-sm font-medium items-center text-gray-600 dark:text-gray-400">
            <li>
              <Link href="#about" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="#experience" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
                Experience
              </Link>
            </li>
            <li>
              <Link href="#skills" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#project" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="btn-primary rounded-full px-4 py-1.5 text-sm font-semibold"
              >
                Contact
              </Link>
            </li>
            <li>
              <DarkModeToggle />
            </li>
          </ul>
        </nav>
      </header>

      {/*
        Mobile bottom nav menu — rendered as a sibling of <header>, not a child.
        <header> gets `backdrop-blur` (nav-surface) once scrolled, and in WebKit/Safari
        an element with `backdrop-filter` becomes a new containing block for
        `position: fixed` descendants. Nested inside <header>, this popup would then be
        positioned relative to the (short) header box instead of the viewport — which is
        why it appeared pinned near the top instead of anchored to the bottom of the screen.
      */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 bottom-6 z-50 flex justify-center pointer-events-none"
          >
            <div className="pointer-events-auto w-[90%] max-w-sm card shadow-2xl px-6 py-5 grid grid-cols-2 gap-3 bg-white/95 dark:bg-black/90 backdrop-blur-xl">
              {[
                { href: '#about', label: 'About', icon: <FaUser className="w-4 h-4 text-accent" /> },
                {
                  href: '#services',
                  label: 'Services',
                  icon: <FaHandshake className="w-4 h-4 text-accent" />,
                },
                {
                  href: '#experience',
                  label: 'Experience',
                  icon: <FaBriefcase className="w-4 h-4 text-accent" />,
                },
                { href: '#skills', label: 'Skills', icon: <FaTools className="w-4 h-4 text-accent" /> },
                {
                  href: '#project',
                  label: 'Projects',
                  icon: <FaLaptopCode className="w-4 h-4 text-accent" />,
                },
                {
                  href: '#contact',
                  label: 'Contact',
                  icon: <FaEnvelope className="w-4 h-4 text-accent" />,
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
                    className="flex items-center justify-center gap-2 py-2 px-4 rounded-xl border border-black/5 dark:border-white/10 hover:border-emerald-500/40 dark:hover:border-emerald-400/40 transition-colors text-sm font-semibold text-gray-900 dark:text-gray-50"
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
    </>
  )
}

export default Header
