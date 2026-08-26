// src/app/components/Process.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'We align on scope, goals, and constraints so the plan fits your timeline and budget before any code is written.',
  },
  {
    step: '02',
    title: 'Build',
    description:
      'Iterative development with regular check-ins, so you always know what is shipping and can steer early.',
  },
  {
    step: '03',
    title: 'Deliver & Support',
    description:
      'Production-ready handoff with documentation, plus support after launch to keep things running smoothly.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-heading font-bold tracking-tight mb-2">How I Work</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xl">
            A simple, transparent process from first conversation to delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="card p-6 relative overflow-hidden"
            >
              <span className="text-4xl font-heading font-extrabold text-emerald-500/20 dark:text-emerald-400/15 absolute top-4 right-5 select-none">
                {item.step}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 relative">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed relative">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
