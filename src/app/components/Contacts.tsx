import React from 'react'
import Link from 'next/link'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="px-4 py-10 max-w-3xl mx-auto">
      <div className="glass rounded-3xl p-8 text-center">
        <h2 className="text-2xl font-heading font-semibold text-gray-900 dark:text-gray-50 mb-6">
          Contact
        </h2>

        {/* Always in a row, with wrap if needed on small screens */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-3">
          {/* Email */}
          <Link
            href="mailto:jegarsg@gmail.com"
            className="glass-hover flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-white/5 transition-colors duration-300 ease-in-out"
          >
            <FaEnvelope className="text-cyan-500" />
            jegarsg@gmail.com
          </Link>

          {/* Phone */}
          <Link
            href="tel:+6282128614801"
            className="glass-hover flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-white/5 transition-colors duration-300 ease-in-out"
          >
            <FaPhone className="text-green-500" />
            +62 821 2861 4801
          </Link>

          {/* Location */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-white/5">
            <FaMapMarkerAlt className="text-red-500" />
            Jakarta, ID
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
