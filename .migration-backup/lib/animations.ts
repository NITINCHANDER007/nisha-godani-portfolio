import type { Variants, Transition } from 'framer-motion'

// ─── Base Transitions ──────────────────────────────────────────────────────────

export const easeOut: Transition = { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
export const easeOutFast: Transition = { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
export const spring: Transition = { type: 'spring', stiffness: 300, damping: 30 }
export const springBounce: Transition = { type: 'spring', stiffness: 400, damping: 20 }

// ─── Fade Variants ─────────────────────────────────────────────────────────────

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: easeOut },
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: easeOut },
}

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0, transition: easeOut },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: easeOut },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: easeOut },
}

// ─── Scale Variants ────────────────────────────────────────────────────────────

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
  },
}

export const scaleFade: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: easeOut },
  exit: { opacity: 0, scale: 0.95, transition: easeOutFast },
}

// ─── Stagger Container ─────────────────────────────────────────────────────────

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0,
    },
  },
}

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

// ─── Hero Orchestration ────────────────────────────────────────────────────────

export const heroName: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.6, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export const heroTitle: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.9, duration: 0.5 },
  },
}

export const heroCtas: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1.4, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export const heroBadges: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1.6, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  },
}

export const heroStats: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 1.1, duration: 0.6 },
  },
}

export const heroPortrait: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.4, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
}

// ─── Card Interactions ─────────────────────────────────────────────────────────

export const cardHoverVariants = {
  rest: {
    y: 0,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  hover: {
    y: -4,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
}

// ─── Timeline ─────────────────────────────────────────────────────────────────

export const timelineItemLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

export const timelineItemRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

export const timelineDot: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
  },
}

// ─── Modal ─────────────────────────────────────────────────────────────────────

export const modalOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
}

export const modalContent: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.25, ease: [0.34, 1.2, 0.64, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 8,
    transition: { duration: 0.15, ease: 'easeIn' },
  },
}

// ─── Accordion ─────────────────────────────────────────────────────────────────

export const accordionContent: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: { height: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }, opacity: { duration: 0.2, delay: 0.1 } },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { height: { duration: 0.25, ease: 'easeIn' }, opacity: { duration: 0.15 } },
  },
}

// ─── Filter Transition ─────────────────────────────────────────────────────────

export const filterListVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.15 } },
}

export const filterItemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: easeOutFast },
  exit: { opacity: 0, transition: { duration: 0.1 } },
}

// ─── Section Reveal (scroll-triggered) ────────────────────────────────────────

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

// ─── Mobile Menu ──────────────────────────────────────────────────────────────

export const mobileMenuOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

export const mobileMenuContainer: Variants = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { x: '100%', transition: { duration: 0.25, ease: 'easeIn' } },
}

export const mobileMenuItems: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
}

export const mobileMenuItem: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: easeOut },
}
