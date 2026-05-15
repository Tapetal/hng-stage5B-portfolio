export const me = {
  name:       'Ashraf Aminu',
  title:      'Full Stack Software Engineer',
  tagline:    'Crafting scalable, high-impact applications with clean UIs and efficient performance.',
  bio:        "Full Stack Software Engineer specializing in Frontend excellence with React.js and TypeScript. Proficient in building scalable applications using Node.js, AWS, and modern database architectures. Passionate about writing clean, maintainable code and optimizing system performance.",
  location:   'Abuja, FCT, Nigeria',
  email:      'aminuashraf55@gmail.com',
  github:     'https://github.com/Tapetal',
  twitter:    'https://x.com/ashraf_amyn_',
  linkedin:   'https://linkedin.com/in/ashraf-aminu',
  resume:     '/resume.pdf',
  available:  true,
  phone:      '+2347040762509',
  website:    'https://ashraf-aminu.vercel.app',
};

export const skills = [
  { cat: 'Frontend',    items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Context API'] },
  { cat: 'Backend',     items: ['Node.js', 'Express.js', 'Python', 'C#', 'RESTful APIs', 'JWT'] },
  { cat: 'Databases',   items: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQL Server', 'Firebase'] },
  { cat: 'Cloud & DevOps', items: ['AWS', 'Google Cloud', 'Git/GitHub', 'Postman', 'Docker', 'CI/CD'] },
  { cat: 'Specialized', items: ['Web3', 'Hedera', 'Jest Testing', 'Payment Gateways', 'E2EE'] },
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
    id:          'ticketproof',
    title:       'TicketProof',
    description: 'Web3-powered event ticketing platform with blockchain NFT verification',
    longDesc:    'Blockchain-based event ticketing platform using Next.js and Hedera blockchain. Each ticket is minted as a unique NFT, featuring wallet integration with HashConnect, QR verification, and fraud-proof authentication to eliminate counterfeit tickets.',
    tags:        ['Next.js', 'TypeScript', 'Hedera', 'Web3', 'Firebase', 'Tailwind CSS'],
    category:    'fullstack',
    accent:      '#06b6d4',
    icon:        '🎫',
    demo:        'https://ticketproof.vercel.app',
    repo:        'https://github.com/Tapetal/TicketProof',
    featured:    true,
    year:        2024,
  },
  {
    id:          'tapetrics',
    title:       'Tapetrics',
    description: 'Real-time analytics and monitoring dashboard (formerly SentinelX)',
    longDesc:    'High-performance analytics platform with real-time data streaming, comprehensive visualizations, and responsive dashboard. Built for monitoring and analyzing system metrics with live updates.',
    tags:        ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    category:    'fullstack',
    accent:      '#10b981',
    icon:        '📊',
    demo:        'https://hng-stage5a-tapetrics.vercel.app/',
    repo:        'https://github.com/Tapetal/hng-stage5A-tapetrics',
    featured:    true,
    year:        2025,
  },
  {
    id:          'invora',
    title:       'Invora',
    description: 'Full-featured inventory management system with secure authentication',
    longDesc:    'Web-based inventory system with role-based access, secure authentication, transaction filtering, and PDF/Excel report generation. Built with React/TypeScript frontend, Node.js/Express backend, and MongoDB for data storage.',
    tags:        ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    category:    'fullstack',
    accent:      '#8b5cf6',
    icon:        '📦',
    demo:        'https://invora-demo.vercel.app/',
    repo:        'https://github.com/Tapetal/Inventory-Management-System',
    featured:    true,
    year:        2024,
  },
  {
    id:          'rosca',
    title:       'ROSCA',
    description: 'Rotational Savings Group management app with payment integration',
    longDesc:    'Full-stack web app for managing Rotational Savings Groups with Monnify payment integration and AWS services. Enables group creation, automated contributions, and secure KYC verification.',
    tags:        ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'AWS'],
    category:    'fullstack',
    accent:      '#f59e0b',
    icon:        '💰',
    demo:        'https://rosca-client.onrender.com/',
    repo:        'https://github.com/Tapetal/ROSCA',
    featured:    false,
    year:        2024,
  },
  {
    id:          'whisperbox',
    title:       'WhisperBox',
    description: 'End-to-end encrypted messaging application',
    longDesc:    'Real-time messaging platform with end-to-end encryption, ensuring messages remain private and secure. Features wallet integration and secure communication protocols.',
    tags:        ['Next.js', 'TypeScript', 'E2EE', 'WebSocket', 'Tailwind CSS'],
    category:    'security',
    accent:      '#6366f1',
    icon:        '🔒',
    demo:        'https://hng-stage4-b-whisperbox.vercel.app/',
    repo:        'https://github.com/Tapetal/hng-stage4B-whisperbox',
    featured:    false,
    year:        2024,
  },
  {
    id:          'miramar-sg',
    title:       'Miramar-SG',
    description: 'Hotel room booking system with responsive design',
    longDesc:    'Hotel booking web app for searching, reserving, and managing room bookings with efficient data handling and smooth UX. Features include advanced search, real-time availability, and secure bookings.',
    tags:        ['Python', 'HTML', 'CSS', 'JavaScript', 'SQL'],
    category:    'fullstack',
    accent:      '#ec4899',
    icon:        '🏨',
    demo:        'https://miramar-sg.onrender.com/',
    repo:        'https://github.com/Tapetal/Miramar-SG',
    featured:    false,
    year:        2023,
  },
  {
    id:          'qr-scanner',
    title:       'QR Scanner & Brain Teaser',
    description: 'Multi-featured mobile app with QR scanning and brain teaser puzzles',
    longDesc:    'Cross-platform mobile application featuring QR code scanning, QR generation, puzzle solving, offline support, and AdMob integration. Built with React Native with tab-based navigation.',
    tags:        ['React Native', 'JavaScript', 'Mobile', 'QR Code', 'Expo'],
    category:    'frontend',
    accent:      '#14b8a6',
    icon:        '📱',
    repo:        'https://github.com/Tapetal/QR-Scanner-Pro',
    featured:    false,
    year:        2026,
  },
];

export const timeline = [
  { year: '2026', title: 'Engineering & Technology Intern', desc: 'Contributing to NOMA platform at Noma Service Consolidated Ltd', accent: '#10b981' },
  { year: '2025', title: 'IT Support & Data Management', desc: 'Nigerian Shippers Council - Database optimization (20% latency reduction)', accent: '#06b6d4' },
  { year: '2024', title: 'Frontend Developer Intern', desc: 'Comsoft - Component library & automated testing (15% efficiency gain)', accent: '#8b5cf6' },
  { year: '2022', title: 'Advanced Diploma in Software Engineering', desc: 'Aptech - Full-stack development, databases, and modern frameworks', accent: '#f59e0b' },
];
