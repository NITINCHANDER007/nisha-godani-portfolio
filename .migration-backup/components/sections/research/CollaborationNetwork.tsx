'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { collaborators } from '@/data/research'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { CollaboratorCard } from '@/components/cards/CollaboratorCard'
import { scaleIn, staggerContainer, fadeUp } from '@/lib/animations'

// Fixed angular positions around the center node for visual balance
const angleFor = (index: number, total: number) => (index / total) * 2 * Math.PI - Math.PI / 2

export function CollaborationNetwork() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const radius = 160
  const centerX = 250
  const centerY = 220

  const nodePositions = collaborators.map((c, i) => {
    const angle = angleFor(i, collaborators.length)
    return {
      ...c,
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    }
  })

  return (
    <SectionWrapper background="dark" id="collaborations" ariaLabelledBy="collaboration-network-heading">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow label="Collaboration Network" color="teal" />
        <h2
          id="collaboration-network-heading"
          className="text-heading-1 font-display text-text-inverse"
        >
          A Web of Shared Discovery
        </h2>
      </div>

      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-14 overflow-x-auto"
      >
        <svg
          viewBox="0 0 500 440"
          className="mx-auto h-auto w-full max-w-2xl"
          role="img"
          aria-label="Network diagram showing Dr. Godani's research collaborators"
        >
          {/* Edges */}
          {nodePositions.map((node) => {
            const isHighlight = node.id === 'capozziello-salvatore'
            const isDimmed = hoveredId !== null && hoveredId !== node.id
            return (
              <line
                key={`edge-${node.id}`}
                x1={centerX}
                y1={centerY}
                x2={node.x}
                y2={node.y}
                stroke={isHighlight ? 'var(--accent-gold)' : 'var(--accent-teal)'}
                strokeWidth={isHighlight ? 2 : 1}
                strokeOpacity={isDimmed ? 0.1 : isHighlight ? 0.6 : 0.3}
                style={{ transition: 'stroke-opacity 200ms ease' }}
              />
            )
          })}

          {/* Center node */}
          <circle cx={centerX} cy={centerY} r={28} fill="var(--accent-gold)" />
          <text
            x={centerX}
            y={centerY + 5}
            textAnchor="middle"
            fontSize="11"
            fontWeight="700"
            fill="var(--bg-dark)"
          >
            NG
          </text>

          {/* Collaborator nodes */}
          {nodePositions.map((node) => {
            const nodeRadius = 12 + Math.min(node.paperCount, 20) * 0.4
            const isDimmed = hoveredId !== null && hoveredId !== node.id
            return (
              <g
                key={node.id}
                onMouseEnter={() => setHoveredId(node.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{ cursor: 'pointer', opacity: isDimmed ? 0.35 : 1, transition: 'opacity 200ms ease' }}
              >
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={nodeRadius}
                  fill="var(--accent-teal)"
                  fillOpacity={0.85}
                />
                <text
                  x={node.x}
                  y={node.y + 4}
                  textAnchor="middle"
                  fontSize="14"
                >
                  {node.countryFlag}
                </text>
                <text
                  x={node.x}
                  y={node.y + nodeRadius + 16}
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="600"
                  fill="var(--text-inverse)"
                  opacity={0.85}
                >
                  {node.name.replace('Prof. ', '').replace('Dr. ', '')}
                </text>
              </g>
            )
          })}
        </svg>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {collaborators.map((collaborator) => (
          <motion.div
            key={collaborator.id}
            variants={fadeUp}
            onMouseEnter={() => setHoveredId(collaborator.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <CollaboratorCard collaborator={collaborator} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
