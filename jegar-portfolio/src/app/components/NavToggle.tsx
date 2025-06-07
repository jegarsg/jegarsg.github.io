'use client'

import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function NavToggle() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <button
      className="fixed top-4 left-4 z-50 md:hidden p-2 bg-purple-600 text-white rounded shadow-lg"
      onClick={() => setNavOpen(!navOpen)}
      aria-label="Toggle Navigation"
    >
      {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
    </button>
  )
}
