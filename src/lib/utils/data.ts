export const me = {
  name:       'Tapetal Dev',
  title:      'Frontend Engineer',
  tagline:    'I build systems that feel alive.',
  bio:        "Frontend engineer focused on real-time systems, E2EE applications, and high-performance interfaces. I care deeply about architecture, animation, and the space where engineering meets design.",
  location:   'Lagos, Nigeria',
  email:      'hello@tapetal.dev',
  github:     'https://github.com/tapetal',
  twitter:    'https://twitter.com/tapetal',
  linkedin:   'https://linkedin.com/in/tapetal',
  resume:     '/resume.pdf',
  available:  true,
};

export const skills = [
  { cat: 'Frontend',    items: ['Vue 3', 'React', 'Next.js', 'SvelteKit', 'TypeScript', 'Tailwind CSS'] },
  { cat: 'Real-Time',  items: ['WebSockets', 'SSE', 'WebRTC', 'Pinia', 'Zustand', 'RxJS'] },
  { cat: 'Security',   items: ['Web Crypto API', 'E2EE', 'RSA-OAEP', 'AES-GCM', 'PBKDF2', 'JWT'] },
  { cat: 'Tooling',    items: ['Vite', 'Vitest', 'Playwright', 'Docker', 'Git', 'CI/CD'] },
];

export interface Project {
  id:          string;
  title:       string;
  description: string;
  longDesc:    string;
  tags:        string[];
  category:    'fullstack' | 'frontend' | 'realtime' | 'security';
  accent:      string;
  icon:        string;
  demo?:       string;
  repo?:       string;
  featured:    boolean;
  year:        number;
}

export const projects: Project[] = [
  {
    id:          'sentinelx',
    title:       'SentinelX',
    description: 'Real-time cybersecurity threat intelligence dashboard',
    longDesc:    'High-performance Vue 3 analytics platform with live streaming data, ECharts visualizations, command palette, and advanced state management via Pinia. Processes hundreds of events/second without flickering.',
    tags:        ['Vue 3', 'TypeScript', 'ECharts', 'Pinia', 'Real-time'],
    category:    'realtime',
    accent:      '#10b981',
    icon:        '🛡️',
    demo:        'https://sentinelx.vercel.app',
    repo:        'https://github.com/tapetal/sentinelx',
    featured:    true,
    year:        2026,
  },
  {
    id:          'whisperbox',
    title:       'WhisperBox',
    description: 'End-to-end encrypted real-time messaging application',
    longDesc:    'Zero-knowledge messaging built with Next.js 14 and Web Crypto API. RSA-2048 key pairs, AES-GCM message encryption, PBKDF2 key wrapping, WebSocket real-time delivery, and private keys that never leave the device.',
    tags:        ['Next.js', 'TypeScript', 'E2EE', 'WebCrypto', 'WebSocket'],
    category:    'security',
    accent:      '#6366f1',
    icon:        '🔒',
    demo:        'https://whisperbox.vercel.app',
    repo:        'https://github.com/tapetal/whisperbox',
    featured:    true,
    year:        2026,
  },
  {
    id:          'invoice-app',
    title:       'Invoice Manager',
    description: 'Full-featured invoice management app with light/dark mode',
    longDesc:    'Responsive React + TypeScript invoice application with full CRUD, form validation, status flows (Draft → Pending → Paid), filter system, theme toggle, and localStorage persistence.',
    tags:        ['React', 'TypeScript', 'Tailwind CSS', 'localStorage'],
    category:    'frontend',
    accent:      '#7c3aed',
    icon:        '📄',
    demo:        'https://invoice-app.vercel.app',
    repo:        'https://github.com/tapetal/invoice-app',
    featured:    false,
    year:        2026,
  },
  {
    id:          'habit-tracker',
    title:       'Habit Tracker PWA',
    description: 'Progressive Web App for daily habit tracking with offline support',
    longDesc:    'Next.js PWA with full auth, habit CRUD, streak calculation, and localStorage persistence. Includes Playwright E2E tests, Vitest unit + integration tests, and 80%+ coverage on lib functions.',
    tags:        ['Next.js', 'PWA', 'Vitest', 'Playwright', 'TypeScript'],
    category:    'fullstack',
    accent:      '#f59e0b',
    icon:        '🎯',
    demo:        'https://habit-tracker.vercel.app',
    repo:        'https://github.com/tapetal/habit-tracker',
    featured:    false,
    year:        2026,
  },
  {
    id:          'ai-summarizer',
    title:       'AI Page Summarizer',
    description: 'Chrome Extension (MV3) for AI-powered webpage summarization',
    longDesc:    'Manifest V3 Chrome Extension using Gemini/OpenAI APIs via a background service worker. Heuristic content extraction, per-URL caching, in-page highlighting, and zero API key exposure in content scripts.',
    tags:        ['Chrome Extension', 'MV3', 'Gemini API', 'JavaScript'],
    category:    'frontend',
    accent:      '#ec4899',
    icon:        '✨',
    repo:        'https://github.com/tapetal/ai-summarizer',
    featured:    false,
    year:        2026,
  },
];

export const timeline = [
  { year: '2026', title: 'HNG Internship 14', desc: 'Building production-grade apps across 5 progressive stages', accent: '#10b981' },
  { year: '2025', title: 'Deepened Frontend Architecture', desc: 'Mastered real-time systems, E2EE patterns, and advanced state management', accent: '#6366f1' },
  { year: '2024', title: 'Full-Stack Transition', desc: 'Moved into Next.js, TypeScript, and backend integration', accent: '#f59e0b' },
  { year: '2023', title: 'Started Professional Development', desc: 'First React projects, component systems, and production deployments', accent: '#ec4899' },
];
