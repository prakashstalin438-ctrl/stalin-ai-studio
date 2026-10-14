// Central Project Data Configuration for Stalin AI Studio
// All features and tech stacks verified against actual project codebases

export const projectsData = [
  {
    id: 'learn-60',
    title: 'Learn 60',
    subtitle: 'GenAI 60-Day Progress Tracker & Roadmap',
    category: 'GenAI Learning Dashboard',
    tag: 'GenAI & Dashboards',
    badge: 'GenAI Application',
    description:
      'A structured, mobile-first 60-day GenAI curriculum tracking application designed to help developers build GenAI mastery through daily milestones, streak tracking, interactive task checklists, and personal note-taking.',
    verifiedTech: [
      'React 19',
      'Vite',
      'Lucide Icons',
      'Canvas Confetti',
      'PWA Architecture',
      'Local Storage'
    ],
    thumbnail: '/images/learn60.png',
    screenshots: [
      { url: '/images/learn60/screenshot_home.png', caption: 'Roadmap Dashboard with Daily Milestones' },
      { url: '/images/learn60/screenshot_completed_day.png', caption: 'Completed Day View & Milestone Check' },
      { url: '/images/learn60/screenshot_learn60_header.png', caption: 'Progress Stats, Streak Tracker & Header' }
    ],
    features: [
      '60-Day Structured Curriculum Roadmap divided into progressive AI phases',
      'Interactive Daily Task Checklists with instant state preservation',
      'Streak & Milestone Progress Analytics with motivational celebration effects',
      'Personal Notes & Reflection Editor per learning module',
      'Offline-First Local Storage Engine with JSON Data Export / Import',
      'Installable Progressive Web App (PWA) optimized for mobile devices'
    ],
    overview:
      'Learn 60 was built as an intensive 60-day roadmap companion for mastering Generative AI and modern AI engineering. It keeps learners accountable through daily task checklists, persistent streak tracking, milestone rewards, and offline capability without relying on heavy cloud backends.',
    architecture:
      'Engineered with React 19 and Vite for instant load times. State persistence is managed through robust browser storage with custom import/export serialization. PWA manifests and service-worker ready layouts ensure seamless installation on iOS and Android.',
    metrics: [
      { label: 'Curriculum Days', value: '60 Days' },
      { label: 'Offline Support', value: '100% PWA' },
      { label: 'Bundle Size', value: '< 95 KB' }
    ],
    liveDemoAvailable: true,
    liveDemoUrl: 'https://genai-60-day-tracker.web.app',
    githubUrl: 'https://github.com/prakashstalin438-ctrl/learn-60',
    demoNote: 'Live web app running on Firebase Hosting. Interactive preview and screenshots below.'
  },
  {
    id: 'novacart-dashboard',
    title: 'NovaCart Dashboard',
    subtitle: 'AI E-Commerce Analytics Platform',
    category: 'Web Dashboard',
    tag: 'Web Dashboards',
    badge: 'Analytics Dashboard',
    description:
      'A high-performance SaaS analytics dashboard built for online commerce operators. Delivers real-time revenue KPIs, customer conversion rate tracking, category sales breakdowns, and automated business health indicators.',
    verifiedTech: [
      'JavaScript (ES6+)',
      'HTML5 & Modern CSS3',
      'Custom SVG Charts',
      'Glassmorphism UI',
      'Responsive Design'
    ],
    thumbnail: '/images/novacart.jpg',
    screenshots: [
      { url: '/images/novacart.jpg', caption: 'Executive KPI Dashboard & Revenue Curves' }
    ],
    features: [
      'Real-Time KPI Metric Cards for Sales ($482K+), Conversion Rates, and Active Carts',
      'Multi-Period Revenue Comparison charts with gradient visualizers',
      'Product Sales Performance & Stock Status Health Monitor',
      'Customer Funnel Tracking & Cart Abandonment Analytics',
      'Modern High-Density SaaS Layout with Dark Mode Glassmorphism'
    ],
    overview:
      'NovaCart Dashboard solves the problem of scattered retail data by consolidating key performance indicators into a sleek, unified executive control center. Built to deliver sub-second rendering, instant filtering, and clean visual hierarchy.',
    architecture:
      'Built with clean, dependency-free vanilla web technologies to maximize performance and runtime efficiency. Utilizes mathematical SVG rendering for interactive multi-period line charts, bar visualizers, and responsive CSS grid architectures.',
    metrics: [
      { label: 'Reported Revenue', value: '$482,910' },
      { label: 'Conversion Rate', value: '3.72%' },
      { label: 'Stock Health', value: '91% Adequate' }
    ],
    liveDemoAvailable: true,
    liveDemoUrl: 'https://novacart-dashboard.vercel.app/',
    githubUrl: 'https://github.com/prakashstalin438-ctrl/novacart-dashboard',
    demoNote: 'Live web app running on Vercel. High-density SaaS layout showcase with verified architecture details.'
  },
  {
    id: 'careeros',
    title: 'CareerOS — AI Career Operating System',
    subtitle: 'AI Career Platform / Full-Stack Web Application',
    category: 'AI Career Platform / Full-Stack Web Application',
    tag: 'AI Applications',
    badge: 'AI Application',
    description:
      'A modern AI-powered career operating system featuring job discovery, application tracking, interview preparation, career insights, and a personalized career dashboard.',
    verifiedTech: [
      'React 19',
      'TypeScript',
      'Vite',
      'Firebase Authentication',
      'Firestore',
      'Vercel'
    ],
    thumbnail: '/images/careeros.jpg',
    screenshots: [
      { url: '/images/careeros.jpg', caption: 'Interactive Career Dashboard & ATS Job Matcher' }
    ],
    features: [
      'Interactive career dashboard with target role tracking and progress insights',
      'Job matching interface with semantic ATS scoring and matched skill breakdown',
      'Application tracking pipeline with customizable Kanban workflow stages',
      'Interview preparation module with targeted drills and performance feedback',
      'Dual authentication supporting Firebase Google sign-in and login-free demo mode using fictional sample data',
      'Automated resume intelligence engine with client-side document extraction'
    ],
    overview:
      'CareerOS is an end-to-end AI career operating system built to streamline modern job seeking. It unifies job discovery, intelligent resume parsing, semantic ATS matching, skill-gap analysis, interview preparation, and real-time application tracking into a cohesive SaaS dashboard.',
    architecture:
      'Architected in TypeScript with React 19 and Vite for instant load times. Features Firebase Authentication with Google sign-in and a login-free demo mode, Cloud Firestore for synchronized application tracking, client-side document parsing via PDF.js and Mammoth.js, and production hosting on Vercel.',
    metrics: [
      { label: 'Architecture', value: 'React + TS' },
      { label: 'Data Store', value: 'Firestore' },
      { label: 'Hosting', value: 'Vercel' }
    ],
    liveDemoAvailable: true,
    liveDemoUrl: 'https://careeros-pi-two.vercel.app/',
    githubUrl: 'https://github.com/prakashstalin438-ctrl/careeros',
    demoNote: 'Live web app running on Vercel with Google auth and login-free sample demo mode.'
  },
  {
    id: 'star-love-journal',
    title: 'STAR Love Journal',
    subtitle: 'Personal Memory & Milestone Journal',
    category: 'Personal Memory Journal App',
    tag: 'Web Applications',
    badge: 'Web App Concept',
    description:
      'A warm, beautifully designed memory-journal application concept built to celebrate relationships. Features an anniversary countdown timer, milestone memory grid, voice note audio waveforms, and sweet daily thoughts.',
    privacyNote:
      'Public concept preview uses curated sample dummy memories and royalty-free photography. Original app and private user data remain strictly confidential.',
    verifiedTech: [
      'React 19',
      'Vite',
      'Audio Waveform UI',
      'Responsive CSS Grid',
      'Firebase Architecture Concept'
    ],
    thumbnail: '/images/star_journal.jpg',
    screenshots: [
      { url: '/images/star_journal.jpg', caption: 'Milestone Countdown & Sample Memory Cards (Public Demo Concept)' }
    ],
    features: [
      'Live Milestone & Anniversary Countdown Timer with days/hours/minutes precision',
      'Curated Photo Memory Grid for capturing cherished life moments',
      'Audio Voice Note Waveform Player UI for spoken messages and voice memories',
      'Daily Notes & Thought Journaling prompts with clean typography',
      'Midnight Slate & Rose Violet romantic theme with delicate glassmorphism'
    ],
    overview:
      'STAR Love Journal is an intimate digital sanctuary designed for couples to preserve precious moments together. It combines milestone tracking, audio notes, and memory curation into a distraction-free, password-protected web experience.',
    architecture:
      'Crafted with React 19 on Vite with rich custom CSS transitions. Features a responsive media grid, simulated audio waveform visualization, and a countdown math engine calculating real-time milestone deltas.',
    metrics: [
      { label: 'Countdown Precision', value: 'Real-Time' },
      { label: 'Privacy Mode', value: 'Strictly Isolated' },
      { label: 'Public Demo Data', value: 'Sample & Dummy' }
    ],
    liveDemoAvailable: true,
    liveDemoUrl: 'https://star-love-journal-demo.vercel.app/',
    githubUrl: 'https://github.com/prakashstalin438-ctrl/star-love-journal-demo',
    demoNote: 'Public concept demo with sanitized sample media and dummy memories.'
  }
];

export const projectCategories = [
  'All',
  'AI Applications',
  'Web Dashboards',
  'Web Applications',
  'GenAI & Dashboards'
];
