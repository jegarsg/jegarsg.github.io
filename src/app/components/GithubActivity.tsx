// src/app/components/GithubActivity.tsx
'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

const GITHUB_USERNAME = 'jegarsg'

function GithubActivity() {
  const [memberSince, setMemberSince] = useState<number | null>(null)
  const [publicRepos, setPublicRepos] = useState<number | null>(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then(res => (res.ok ? res.json() : null))
      .then(data => {
        if (!data) return
        setMemberSince(new Date(data.created_at).getFullYear())
        setPublicRepos(data.public_repos)
      })
      .catch(() => {})
  }, [])

  return (
    <section id="github" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card p-6 sm:p-8"
        >
          <div className="flex items-center justify-between mb-2 flex-wrap gap-3">
            <h2 className="text-xl sm:text-2xl font-heading font-bold flex items-center gap-2">
              <FaGithub /> GitHub Activity
            </h2>
            <Link
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-accent hover:underline"
            >
              View full profile →
            </Link>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
            {memberSince
              ? `On GitHub since ${memberSince} · ${publicRepos} public repositories`
              : 'Loading profile stats…'}
          </p>

          <div className="w-full overflow-x-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://ghchart.rshah.org/10b981/${GITHUB_USERNAME}`}
              alt={`${GITHUB_USERNAME}'s GitHub contribution graph`}
              className="min-w-[700px] w-full opacity-90"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GithubActivity
