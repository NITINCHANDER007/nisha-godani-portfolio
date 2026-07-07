'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { conferenceEvents } from '@/data/teaching'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { Badge } from '@/components/ui/Badge'
import { staggerContainerFast, fadeUp } from '@/lib/animations'

const roleLabels: Record<string, string> = {
  presented: 'Presented',
  attended: 'Attended',
  organized: 'Organized',
}

export function ConferencesTable() {
  const [yearFilter, setYearFilter] = useState('')
  const [roleFilter, setRoleFilter] = useState('')

  const years = useMemo(
    () => [...new Set(conferenceEvents.map((e) => e.year))].sort((a, b) => b - a),
    [],
  )

  const filtered = useMemo(() => {
    return conferenceEvents
      .filter((e) => (yearFilter ? e.year.toString() === yearFilter : true))
      .filter((e) => (roleFilter ? e.type === roleFilter : true))
      .sort((a, b) => b.year - a.year)
  }, [yearFilter, roleFilter])

  return (
    <div id="conferences">
      <SectionEyebrow label="Conferences, Seminars &amp; Workshops" color="gold" />
      <h2 className="text-heading-2 font-display mb-2 text-text-primary">
        {conferenceEvents.length} Academic Events
      </h2>
      <p className="mb-8 max-w-2xl text-body text-text-secondary">
        A complete record of presentations, attendances, and organized events from 2011
        to the present.
      </p>

      <div className="mb-6 flex flex-wrap gap-3">
        <select
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
          aria-label="Filter events by year"
          className="rounded-[var(--radius-base)] border border-border bg-bg-card px-3.5 py-2.5 text-sm text-text-secondary outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/30"
        >
          <option value="">All Years</option>
          {years.map((y) => (
            <option key={y} value={y.toString()}>
              {y}
            </option>
          ))}
        </select>
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          aria-label="Filter events by role"
          className="rounded-[var(--radius-base)] border border-border bg-bg-card px-3.5 py-2.5 text-sm text-text-secondary outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/30"
        >
          <option value="">All Roles</option>
          <option value="presented">Presented</option>
          <option value="attended">Attended</option>
          <option value="organized">Organized</option>
        </select>
        <p className="text-data ml-auto self-center text-xs text-text-muted">
          {filtered.length} events
        </p>
      </div>

      {/* Desktop table */}
      <div className="hidden overflow-hidden rounded-[var(--radius-md)] border border-border md:block">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-bg-secondary">
              <th scope="col" className="px-5 py-3.5 font-semibold text-text-primary">Year</th>
              <th scope="col" className="px-5 py-3.5 font-semibold text-text-primary">Event</th>
              <th scope="col" className="px-5 py-3.5 font-semibold text-text-primary">Location</th>
              <th scope="col" className="px-5 py-3.5 font-semibold text-text-primary">Role</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((event, i) => (
              <tr
                key={event.id}
                className={i % 2 === 0 ? 'bg-bg-card' : 'bg-bg-primary'}
              >
                <td className="text-data px-5 py-4 align-top text-accent-gold">{event.year}</td>
                <td className="px-5 py-4 align-top">
                  <p className="font-medium text-text-primary">
                    {event.paperTitle ?? event.eventName}
                  </p>
                  {event.paperTitle && (
                    <p className="mt-0.5 text-xs text-text-muted">{event.eventName}</p>
                  )}
                </td>
                <td className="px-5 py-4 align-top text-text-secondary">{event.location}</td>
                <td className="px-5 py-4 align-top">
                  <Badge
                    variant={event.type === 'presented' ? 'award' : 'topic'}
                    label={roleLabels[event.type]}
                    size="sm"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile card view */}
      <motion.div
        variants={staggerContainerFast}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="space-y-3 md:hidden"
      >
        {filtered.map((event) => (
          <motion.div
            key={event.id}
            variants={fadeUp}
            className="rounded-[var(--radius-base)] border border-border bg-bg-card p-4"
          >
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="text-data text-sm text-accent-gold">{event.year}</span>
              <Badge
                variant={event.type === 'presented' ? 'award' : 'topic'}
                label={roleLabels[event.type]}
                size="sm"
              />
            </div>
            <p className="mb-1 text-sm font-medium text-text-primary">
              {event.paperTitle ?? event.eventName}
            </p>
            <p className="text-xs text-text-muted">{event.location}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
