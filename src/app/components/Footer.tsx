import React from 'react'

import { FaGithub, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-10 text-sm text-gray-700 dark:text-gray-300">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-center sm:text-left flex-1 text-gray-700 dark:text-gray-300">
          © {new Date().getFullYear()} <span className="font-semibold">Jegar</span>. Built with{' '}
          <span className="font-semibold">Next.js</span> &{' '}
          <span className="text-sky-500 font-semibold">Tailwind CSS</span>.
        </p>

        <div className="hidden md:flex flex-1 justify-center">
          <a
            href="https://github.com/jegarsg/jegarsg.github.io/fork"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fork me on GitHub"
            className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors transform hover:scale-110 motion-reduce:transform-none select-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
              viewBox="0 0 24 24"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>

            <span className="text-sm font-semibold">Fork</span>
          </a>
        </div>

        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 flex-1 justify-end">
          <a
            href="https://github.com/jegarsg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github profile"
            className="hover:text-black dark:hover:text-gray-50 transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/jegarsg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
