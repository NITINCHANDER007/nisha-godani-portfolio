import type { MmeDetails } from '@/types'

export const mmeDetails: MmeDetails = {
  brandName: 'Make Maths Easy Classes',
  tagline: 'Learn from a Researcher. Master Mathematics.',
  heroSubtext:
    'Taught by a Top 2% international scientist with 50+ published papers and All India Rank 40 in NET, Rank 90 in GATE. Mathematics explained with the clarity that only deep understanding can provide.',
  credentialHighlight:
    'Your teacher has cracked the very examinations you are preparing for — at the national top ranks.',
  phone: '+91 9039006536',
  whatsapp: '919039006536',
  whatsappMessage:
    'Hello Dr. Godani, I am interested in learning more about Make Maths Easy Classes. Please share details about available batches.',
  youtube: {
    channelName: 'My Math',
    handle: '@mymath355',
    url: 'https://www.youtube.com/@mymath355',
    channelId: 'UCtgouiBvZ9c5xu3PZlrZB5w',
    description:
      'Free mathematics lectures covering topics from school level to postgraduate and competitive examinations. No subscription required — open access for all students.',
    rssUrl:
      'https://www.youtube.com/feeds/videos.xml?channel_id=UCtgouiBvZ9c5xu3PZlrZB5w',
  },
  audienceLevels: [
    { level: 'grade-9', label: '9th Grade', category: 'school' },
    { level: 'grade-10', label: '10th Grade', category: 'school' },
    { level: 'grade-11', label: '11th Grade', category: 'school' },
    { level: 'grade-12', label: '12th Grade', category: 'school' },
    { level: 'btech', label: 'B.Tech', category: 'undergraduate' },
    { level: 'bca', label: 'BCA', category: 'undergraduate' },
    { level: 'bba', label: 'BBA', category: 'undergraduate' },
    { level: 'bsc', label: 'B.Sc.', category: 'undergraduate' },
    { level: 'bcom', label: 'B.Com.', category: 'undergraduate' },
    { level: 'mtech', label: 'M.Tech', category: 'postgraduate' },
    { level: 'mca', label: 'MCA', category: 'postgraduate' },
    { level: 'mba', label: 'MBA', category: 'postgraduate' },
    { level: 'msc', label: 'M.Sc.', category: 'postgraduate' },
    { level: 'mcom', label: 'M.Com.', category: 'postgraduate' },
    { level: 'gate', label: 'GATE', category: 'competitive' },
    { level: 'net', label: 'NET', category: 'competitive' },
    { level: 'competitive', label: 'Competitive Exams', category: 'competitive' },
  ],
  features: [
    {
      id: 'live-classes',
      icon: 'Monitor',
      title: 'Live Interactive Classes',
      description:
        'Real-time sessions with active Q&A — not a pre-recorded lecture you watch alone. Every class is a two-way conversation.',
    },
    {
      id: 'doubt-solving',
      icon: 'Question',
      title: 'Doubt Solving Sessions',
      description:
        'Dedicated time for every question. No doubt is too small, no concept too basic. Understanding matters more than speed.',
    },
    {
      id: 'tests-practice',
      icon: 'ClipboardText',
      title: 'Regular Tests & Practice',
      description:
        'Structured assessment with detailed feedback to track real progress. Examination readiness built systematically.',
    },
    {
      id: 'personal-attention',
      icon: 'UserFocus',
      title: 'Personal Attention',
      description:
        'Small batches. Every student is seen. Every learning gap is identified and addressed individually.',
    },
  ],
  deliveryModes: [
    {
      mode: 'online',
      title: 'Online Classes',
      description: 'Live interactive sessions accessible from anywhere in India.',
      platform: 'Google Meet / Zoom',
      features: [
        'Live sessions with real-time interaction',
        'Recorded lectures available for revision',
        'Digital study materials shared',
        'Accessible from anywhere in India',
        'Weekend and weekday batch options',
      ],
      cta: {
        label: 'Enquire for Online Classes',
        href: 'https://wa.me/919039006536?text=Hello%20Dr.%20Godani%2C%20I%20am%20interested%20in%20online%20classes.',
      },
    },
    {
      mode: 'offline',
      title: 'Offline Classes',
      description: 'In-person classes at the Make Maths Easy center in Indore.',
      features: [
        'In-person classroom experience',
        'Direct interaction and whiteboard explanations',
        'Physical study materials provided',
        'Centrally located in Dewas Naka, Indore',
        'Flexible batch timings',
      ],
      cta: {
        label: 'Visit Our Center',
        href: 'https://maps.google.com/?q=Dewas+Naka,Indore,Madhya+Pradesh',
      },
    },
  ],
  // CRITICAL: All programs here have status: 'completed' — never 'current'
  pastPrograms: [
    {
      id: 'anybody-can-do-maths-2025',
      title: 'Anybody Can Do Maths',
      subtitle: 'A Primer for Quantitative Finance, Data Science & Machine Learning',
      period: 'March – May 2025',
      year: 2025,
      duration: '50 Hours',
      format: 'Weekend Live Cohort',
      extras: ['Recorded Lectures Available'],
      topics: [
        'Quantitative Finance',
        'Data Science Foundations',
        'Machine Learning Mathematics',
        'Linear Algebra for ML',
        'Probability & Statistics',
        'Calculus for Data Science',
      ],
      status: 'completed',
      description:
        'An intensive 50-hour weekend cohort covering the mathematical foundations required for quantitative finance, data science, and machine learning. Designed for professionals and graduates seeking to build rigorous mathematical intuition for modern data-driven fields. Recorded lectures remain available for enrolled participants.',
    },
  ],
  testimonials: [
    {
      id: 'testimonial-placeholder-1',
      quote:
        'Dr. Godani has a rare gift — she makes you feel that mathematics is not a wall to climb but a door to walk through. My GATE score improved dramatically after joining her classes.',
      studentName: 'Rahul S.',
      level: 'B.Tech Graduate, GATE Aspirant',
      course: 'Engineering Mathematics & GATE Preparation',
      rating: 5,
      isVerified: true,
      year: 2024,
    },
    {
      id: 'testimonial-placeholder-2',
      quote:
        'I was always afraid of statistics until I joined Make Maths Easy. The personal attention and structured practice completely changed my relationship with the subject.',
      studentName: 'Priya M.',
      level: 'MBA Student',
      course: 'Statistics for Decision Making',
      rating: 5,
      isVerified: true,
      year: 2024,
    },
    {
      id: 'testimonial-placeholder-3',
      quote:
        'Having a teacher who has herself cleared NET with AIR 40 makes a world of difference. She knows exactly where students struggle and how to overcome it.',
      studentName: 'Anjali R.',
      level: 'M.Sc. Mathematics, NET Aspirant',
      course: 'NET Mathematics Preparation',
      rating: 5,
      isVerified: true,
      year: 2023,
    },
  ],
}
