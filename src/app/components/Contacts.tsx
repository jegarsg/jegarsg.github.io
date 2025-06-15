import React from 'react'
import Link from 'next/link'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="px-4 py-10 text-center">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-6">Contact</h2>

      {/* Always in a row, with wrap if needed on small screens */}
      <div className="flex flex-row flex-wrap items-center justify-center gap-4">
        {/* Email */}
        <Link
          href="mailto:jegarsg@gmail.com"
          className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 ease-in-out hover:underline"
        >
          <FaEnvelope className="text-cyan-500" />
          jegarsg@gmail.com
        </Link>

        {/* Phone */}
        <Link
          href="tel:+6282128614801"
          className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 ease-in-out hover:underline"
        >
          <FaPhone className="text-green-500" />
          +62 821 2861 4801
        </Link>

        {/* Location */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700">
          <FaMapMarkerAlt className="text-red-500" />
          Jakarta, ID
        </div>
      </div>
    </section>
  )
}

export default Contact
