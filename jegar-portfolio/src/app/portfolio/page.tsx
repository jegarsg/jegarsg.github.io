import React from 'react'

const projects = [
  {
    title: 'Enterprise Banking System',
    description: 'Led backend development and migration for PT Bank Mandiri Tbk.',
    link: 'https://bankmandiri.co.id', // replace with actual project link or remove
  },
  {
    title: 'Restaurant Control System',
    description: 'Built a PostgreSQL-based control system using Python.',
    link: null,
  },
  {
    title: 'ICounting PGI Data System',
    description: 'Implemented backend services using Golang.',
    link: null,
  },
  // Add more projects here
]

export default function PortfolioPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">Portfolio</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map(({ title, description, link }, idx) => (
          <div
            key={idx}
            className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800"
          >
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="mb-3 text-gray-700 dark:text-gray-300">{description}</p>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
