import React from 'react'
import Link from 'next/link'
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="px-4 sm:px-6 py-16 max-w-3xl mx-auto">
      <div className="card p-10 sm:p-14 text-center">
        <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-gray-50 mb-3">
          Have a project in mind?
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
          Open for freelance and consulting work — reach out and let&apos;s talk about it.
        </p>

        {/* Primary hire CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <Link
            href="mailto:jegarsg@gmail.com?subject=Freelance%20Project%20Inquiry"
            className="btn-primary flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
          >
            <FaEnvelope />
            Hire Me via Email
          </Link>
          <Link
            href="https://wa.me/6282128614801?text=Hi%20Jegar%2C%20I%27d%20like%20to%20discuss%20a%20freelance%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
          >
            <FaWhatsapp />
            Chat on WhatsApp
          </Link>
        </div>

        {/* Always in a row, with wrap if needed on small screens */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-3">
          {/* Email */}
          <Link
            href="mailto:jegarsg@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:text-accent transition-colors duration-300 text-sm font-medium"
          >
            <FaEnvelope className="text-accent" />
            jegarsg@gmail.com
          </Link>

          {/* Phone */}
          <Link
            href="tel:+6282128614801"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:text-accent transition-colors duration-300 text-sm font-medium"
          >
            <FaPhone className="text-accent" />
            +62 821 2861 4801
          </Link>

          {/* Location */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 text-sm font-medium text-gray-600 dark:text-gray-300">
            <FaMapMarkerAlt className="text-accent" />
            Jakarta, ID
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
