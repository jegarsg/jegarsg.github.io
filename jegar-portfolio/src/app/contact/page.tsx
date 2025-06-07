export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-indigo-600">Contact Me</h2>

      <div className="mb-6">
        <h3 className="text-xl font-medium mb-2">Address</h3>
        <p>123 Your Street, City, Country</p>
      </div>

      <div>
        <h3 className="text-xl font-medium mb-4">Find me on</h3>
        <ul className="space-y-4">
          <li>
            <a
              href="https://linkedin.com/in/jegarsg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-indigo-600 hover:underline"
            >
              {/* LinkedIn Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="none"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.27h-3v-5.5c0-1.32-1.18-1.5-1.5-1.5-.32 0-1.5.18-1.5 1.5v5.5h-3v-10h3v1.36c.69-1.28 3-1.38 3 1.23v7.41z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </li>

          <li>
            <a
              href="https://instagram.com/jegarsg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-pink-600 hover:underline"
            >
              {/* Instagram Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                <path d="M16 11.37a4 4 0 11-4.73-4.73 4 4 0 014.73 4.73z" />
                <line x1={17.5} y1={6.5} x2={17.5} y2={6.5} />
              </svg>
              <span>Instagram</span>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/jegarsg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-900 dark:text-gray-100 hover:underline"
            >
              {/* GitHub Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.776.42-1.305.763-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.02.004 2.045.138 3.003.404 2.292-1.552 3.298-1.23 3.298-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.92.43.37.813 1.103.813 2.222 0 1.606-.014 2.898-.014 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.628-5.372-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
