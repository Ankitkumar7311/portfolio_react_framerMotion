/**
 * Central portfolio data — generated from Ankit Kumar.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'ANKIT KUMAR',
  displayName: ' ANKIT',
  firstName: 'ANKIT',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A DASARI ORIGINAL',
  role: 'Full-Stack Developer',
  tagline: ['Full-Stack Developer', 'Devops', 'Java'],
  intro:
    'A B.Tech Computer Science and Engineering  student (CGPA 8.40) and full-stack developer building AI-powered platforms, payment systems and multi-tenant SaaS with Java, Python, React, Node.js and Docker.',
  location: 'Samastipur, Bihar',
  email: 'kumarankit42131@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/ankit-kumar-8665ab17b/edit/intro/',
    github: 'https://github.com/Ankitkumar7311',
  },
  resumePdf: '',
  portrait: {
    src: '/assets/portrait-420.webp.png',
    srcSet: '/assets/portrait-420.webp.png 420w, /assets/portrait-420.webp.png 720w, /assets/portrait-420.webp.png 1100w',
    alt: 'Portrait of Ankit kumar',
  },
  interests: ['Full Stack development', 'Cloud Computing (AWS)', 'Devops'],
};

export const education = [
  {
    school: 'Technocrats Institute Of Technology & Science',
    place: 'Bhopal',
    degree: 'Bachelor of Technology — Computer Science and Engineering',
    period: 'October 2021 – 2025',
    score: 'CGPA 8.40',
  },
  {
    school: 'Dayanand Anglo-Vedic public School',
    place: 'Samastipur',
    degree: 'Intermediate',
    period: 'June 2019 – May 2021',
    score: 'Score 396/500',
  },
];

export const experience = [
  {
    company: 'Robowaves It Solution',
    role: 'Intern',
    place: 'Hyderabad , Telengana',
    period: 'May 2025 – November 2025',
    points: [
      'Completed one year of intensive Full-Stack Development training with a strong focus on React.js for building modern, dynamic, and responsive user interfaces.',
      'Developed interactive web applications using React.js, reusable components, props, state, hooks, and API integration.',
      'Built and deployed responsive React.js applications while applying debugging, Git version control, and frontend development best practices.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'vidyasarthi-elearning',
    title: 'VidyaSarthi – E-Learning Platform',
    year: '2025',
    genre: 'Full-Stack • Education • Web Application',
    logline:
      'A full-stack e-learning platform designed to manage students, teachers, and academic activities through a centralized web application.',
    stack: ['React', 'Java', 'Spring Boot', 'Hibernate', 'MySQL'],
    build: [
      'Developed a responsive e-learning web application using React for the frontend and Java Spring Boot for backend services, with Hibernate and MySQL for database integration.',
      'Implemented role-based modules for administrators, teachers, and students, including login functionality, faculty access, and student dashboard navigation.',
    ],
    features: [
      'Responsive user interface built with React',
      'Separate login flows for teachers and students',
      'Role-based modules for administrators, teachers, and students',
      'Backend integration using Java Spring Boot and Hibernate',
      'MySQL database connectivity',
    ],
    metrics: [
      { value: '500+', label: 'policy documents processed' },
      { value: '92%', label: 'accuracy' },
      { value: '60%', label: 'less manual review time' },
      { value: '45%', label: 'faster decision turnaround' },
      { value: '8', label: 'policy categories' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'doctor-online-booking',
    title: 'Doctor Online Booking Application',
    year: '2025',
    genre: 'Full-Stack • Healthcare • Web Application',
    logline:
      'An online healthcare booking platform that helps patients find doctors, explore available appointments, and manage doctor consultations.',
    stack: ['React', 'Java', 'Spring Boot', 'Hibernate', 'MySQL'],
    build: [
      'Developed a responsive healthcare booking application with React for the frontend and Java Spring Boot for backend services, integrating Hibernate and MySQL for data management.',
      'Designed application workflows for doctor discovery, appointment booking, and patient appointment management.',
    ],
    features: [
      'Responsive user interface using React',
      'Doctor listing and details',
      'Online appointment booking workflow',
      'Patient appointment management',
      'Backend and database integration',
    ],
    metrics: [
      { value: '1,000+', label: 'transactions processed' },
      { value: '99.8%', label: 'uptime' },
      { value: '70%', label: 'less deployment setup' },
      { value: '40%', label: 'faster API response' },
      { value: '3×', label: 'throughput under load' },
    ],
    github: '#',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'multi-tenant-saas',
    title: 'Multi-Tenant SaaS Platform',
    year: '2025',
    genre: 'SaaS • Security • DevOps',
    logline: 'Shared-database multi-tenancy with strict tenant isolation and 4-level JWT/RBAC.',
    stack: ['Node.js', 'React', 'PostgreSQL', 'Docker Compose'],
    build: [
      'Architected shared-database multi-tenancy for 50+ concurrent tenants with strict tenant_id isolation and 4-level JWT/RBAC, achieving zero unauthorized-access incidents across 200+ users.',
      'Implemented Docker Compose one-command deployment, reducing environment setup time from 45 minutes to under 2 minutes.',
    ],
    features: [
      'Shared-database multi-tenancy',
      'Strict tenant_id isolation',
      '4-level JWT / RBAC',
      'One-command Docker Compose deployment',
    ],
    metrics: [
      { value: '50+', label: 'concurrent tenants' },
      { value: '200+', label: 'users' },
      { value: '0', label: 'unauthorized-access incidents' },
      { value: '45m → <2m', label: 'environment setup time' },
    ],
    github: '#',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'technical-skills',
    title: 'Full-Stack Developer',
    org: 'Web Development',
    detail: 'Skilled in building responsive web interfaces using React, HTML, CSS, and JavaScript, with knowledge of Java, SQL, Git, GitHub, Linux, and DevOps fundamentals.',
    laurel: 'Full-Stack Development',
  },
  {
    id: 'Athlete',
    title: 'National Player',
    org: '81st All india university Athlete',
    detail: 'Gold-Medalist from RGPV in 400m Sprinting',
    laurel: 'Qualified for 81st All India Unniversity Athletics Championship',
    link: '#',
  },
  {
    id: 'department-topper',
    title: 'Cse Department Topper',
    org: 'B.Tech CSE',
    detail: '8.41 CGPA ',
    laurel: 'Semester Topper',
  },
  {
    id: 'competitive-coding',
    title: '1250+ Problems Solved',
    org: 'Hackerrank • GFG • CodeChef',
    detail: 'Codechef: 100+ DSA problems . GFG: 100+ problems . CodeChef: 1000+ problems.',
    laurel: 'Competitive Coding',
  },
  {
    id: 'hackerrank',
    title: '2-Star Badges',
    org: 'HackerRank',
    detail: '5-star badges in C++, Python, Java, and SQL.',
    laurel: 'Four Languages',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'ROBO-WAVES', name: 'React', link: '#' },
  { issuer: 'NPTEL', name: 'Fundamentals of Artificial Intelligence', link: '#' },
  { issuer: 'NPTEL', name: 'Deep Learning', link: '#' },
  { issuer: 'AWS', name: 'AWS Certified AI Practitioner', link: '#' },
  { issuer: 'AWS', name: 'AWS Academy Graduate – Cloud Foundations', link: '#' },
  { issuer: 'MongoDB', name: 'MongoDB Certified Associate Developer', link: '#' },
  { issuer: 'GitHub', name: 'GitHub Foundations', link: '#' },
  { issuer: 'Pearson', name: 'IT Specialist – HTML and CSS', link: '#' },
  { issuer: 'Oracle', name: 'Java Certified Foundations Associate', link: '#' },
  { issuer: 'Oracle', name: 'Oracle Certified Foundations Associate – Database', link: '#' },
  { issuer: 'Cisco', name: 'HTML Essentials', link: '#' },
  { issuer: 'Cisco', name: 'CSS Essentials', link: '#' },
  { issuer: 'Cisco', name: 'JavaScript Essentials 1', link: '#' },
  { issuer: 'Cisco', name: 'Python Essentials 1', link: '#' },
  { issuer: 'Udemy', name: 'Microsoft Azure Hands-On Training (AZ-900, AZ-104, AZ-305)', link: '#' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Java is the primary language',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'Python', mono: 'Py' },
      { name: 'C', mono: 'C' },
      { name: 'C++', mono: 'C+' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server-side logic',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
    ],
  },
  {
    id: 'infra',
    title: 'Infra & Tools',
    subtitle: 'Shipping & architecture',
    skills: [
      { name: 'Docker', mono: 'Dk' },
      { name: 'Docker Compose', mono: 'Dc' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Microservices', mono: 'Ms' },
      { name: 'JWT Auth', mono: 'Jw' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Postman', mono: 'Pm' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Indexing • Normalization',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'MySQL', mono: 'My' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'The foundations',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'OS', mono: 'Os' },
      { name: 'CN', mono: 'Cn' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'OOPs', mono: 'Oo' },
      { name: 'Collections', mono: 'Co' },
      { name: 'Multithreading', mono: 'Mt' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Coming soon to the series',
    skills: [

      { name: 'System Design', mono: 'Sd' },
      { name: 'Cloud Computing (AWS)', mono: 'Aw' },
      { name: 'Devops', mono: 'Ml' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['Oracle Java Certified Foundations Associate', 'HackerRank 2-star'],
  Python: ['PolicyGuard AI', 'Cisco Python Essentials 1', 'HackerRank 2-star'],
  C: ['HackerRank 3-star'],
  React: ['Payment Gateway System', 'Multi-Tenant SaaS Platform'],
  HTML: ['Pearson IT Specialist – HTML and CSS', 'Cisco HTML Essentials'],
  CSS: ['Pearson IT Specialist – HTML and CSS', 'Cisco CSS Essentials'],
  JavaScript: ['Cisco JavaScript Essentials 1 & 2'],
  'Node.js': ['Payment Gateway System', 'Multi-Tenant SaaS Platform'],
  'Express.js': ['Payment Gateway System'],
  Docker: ['Payment Gateway System'],
  'Docker Compose': ['Multi-Tenant SaaS Platform'],
  'REST APIs': ['PolicyGuard AI'],
  Microservices: ['Payment Gateway System'],
  'JWT Auth': ['Multi-Tenant SaaS Platform'],
  'Git / GitHub': ['GitHub Foundations'],
  PostgreSQL: ['Payment Gateway System', 'Multi-Tenant SaaS Platform'],
  MongoDB: ['MongoDB Certified Associate Developer'],
  DBMS: ['NPTEL Database Management System', 'Oracle Database Foundations'],
  DSA: ['Solved on Codeshef', '850+ problems solved'],
  'Cloud Computing (AWS)': ['AWS Certified AI Practitioner', 'AWS Academy Cloud Foundations'],
  'Machine Learning': ['B.Tech CSE', ' DEvops from Tutedude'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2021 – 2023',
    synopsis: 'Built my foundation in Computer Science and Engineering at Technocrats Institute of Technology & Science, Bhopal, transforming a passion for technology into skills in software development, problem-solving, and innovation.',
    episodes: [

      {
        code: 'S01 E01',
        title: 'The Beginning of My Tech Journey',
        description:
          'B.Tech in Computer Science and Engineering at Technocrats Institute of Technology & Science, Bhopal — building a strong foundation in programming, software development, databases, and problem-solving.',
        tags: ['Computer Science', 'Software Development', 'Engineering'],
        runtime: 'B.Tech | 2021 – 2025',
        palette: amber,
      },

    ],
  },
  {
    number: 2,
    title: 'Enter: AI & ML',
    period: '2023 – Present',
    synopsis: 'B.Tech in Artificial Intelligence and Machine Learning at Aditya Engineering College, Surampalem.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'Bachelor of Technology in Artificial Intelligence and Machine Learning — CGPA 9.10.',
        tags: ['B.Tech', 'AI & ML', 'CGPA 9.10'],
        runtime: 'Oct 2023 – Present',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Topper',
        description: 'AIML Branch Topper with a 9.24 SGPA for the semester.',
        tags: ['9.24 SGPA', 'Branch Topper'],
        runtime: 'One semester',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Problem Solver',
        description: 'LeetCode 350+ (peak 1442), GFG 300+ (1436), CodeChef 200+ and HackerRank 5-star badges in C, Python, Java and SQL.',
        tags: ['DSA', 'LeetCode', 'GFG', 'CodeChef', 'HackerRank'],
        runtime: '850+ problems',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Learning to Build',
    period: '2025 – 2026',
    synopsis: 'One year of intensive Full-Stack Development training as a Trainee at Technical Hub Pvt Ltd.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Trainee',
        description: 'Intensive Full-Stack Development training covering frontend, backend, database integration and deployment workflows.',
        tags: ['FSD', 'Frontend', 'Backend', 'Databases'],
        runtime: 'May 2025 – Jun 2026',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Developer',
        description: 'Developed responsive web applications — user interfaces, server-side logic and database connectivity.',
        tags: ['React', 'Node.js', 'Express.js'],
        runtime: 'Technical Hub',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'The Deployer',
        description: 'Deployed and managed web applications with version control, debugging and end-to-end development practices.',
        tags: ['Git / GitHub', 'Deployment'],
        runtime: 'Technical Hub',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Real Products',
    period: '2026',
    synopsis: 'Three Originals — an AI platform, a payment gateway and a multi-tenant SaaS — plus national-level recognition.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The AI Builder',
        description: 'PolicyGuard AI — LLM-based Q&A and key-information extraction across 500+ policy documents at 92% accuracy.',
        tags: ['Python', 'NLP', 'LLM'],
        runtime: '2026',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Architect',
        description: 'Payment Gateway System and Multi-Tenant SaaS Platform — state machines, microservices, tenant isolation and RBAC.',
        tags: ['Node.js', 'PostgreSQL', 'Docker'],
        runtime: '2026',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'The Fellow',
        description: 'Selected as a Tech Fellow at AlgoUniversity and reached the Semi-Finals of Flipkart GRiD 7.0.',
        tags: ['AlgoUniversity', 'Flipkart GRiD 7.0'],
        runtime: 'National stage',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'The interests on the resume point to the next arc of the story.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Exploring System Design, Cloud Computing (AWS) and Machine Learning.',
        tags: ['System Design', 'AWS', 'Machine Learning'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'Java', detail: 'Listed as primary on the resume • Oracle certified', palette: amber },
  { label: 'The AI Original', title: 'PolicyGuard AI', detail: '500+ documents • 92% accuracy', palette: crimson },
  { label: 'Biggest stage', title: 'Flipkart GRiD 7.0', detail: 'Semi-Finalist', palette: ocean },
  { label: 'National selection', title: 'AlgoUniversity', detail: 'Tech Fellow', palette: violet },
  { label: 'Academic high', title: 'Branch Topper', detail: '9.24 SGPA in AI & ML', palette: jade },
  { label: 'Cloud credential', title: 'AWS AI Practitioner', detail: 'AWS Certified', palette: amber },
  { label: 'Problems solved', title: '850+', detail: 'LeetCode 350+ • GFG 300+ • CodeChef 200+', palette: crimson },
  { label: 'The training arc', title: '1 Year of FSD', detail: 'Technical Hub Pvt Ltd', palette: ocean },
  { label: 'Database credential', title: 'MongoDB', detail: 'Certified Associate Developer', palette: jade },
  { label: 'Current focus', title: 'System Design', detail: 'with Cloud (AWS) & Machine Learning', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · AI & ML',
    lines: ['Aditya Engineering College, Surampalem', 'October 2023 – Present'],
    chips: ['CGPA 9.10'],
  },
  {
    kicker: 'Skills',
    title: 'Java first.',
    lines: ['Python, C, C++ · React, Node.js, Express.js', 'PostgreSQL, MongoDB, MySQL · Docker, REST, JWT'],
    chips: ['Java', 'Python', 'React', 'Node.js', 'Docker', 'PostgreSQL'],
  },
  {
    kicker: 'Training',
    title: 'The Training Arc',
    lines: ['One year of intensive Full‑Stack Development training', 'Trainee · Technical Hub Pvt Ltd · May 2025 – June 2026', 'Frontend · Backend · Databases · Deployment'],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: ['PolicyGuard AI — 500+ documents, 92% accuracy', 'Payment Gateway — 1,000+ transactions, 99.8% uptime', 'Multi-Tenant SaaS — 50+ tenants, zero unauthorized access'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['Tech Fellow — AlgoUniversity', 'Semi-Finalist — Flipkart GRiD 7.0', 'AIML Branch Topper — 9.24 SGPA'],
  },
  {
    kicker: 'Certified',
    title: '16 Certifications',
    lines: ['AWS · MongoDB · Oracle · GitHub · Pearson', 'NPTEL · Cisco · Udemy'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['System Design · Cloud Computing (AWS) · Machine Learning'],
  },
];

export type ProfileId = 'Ankit' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
    {
      id: 'Ankit',
      name: 'Ankit',
      blurb: 'The full series, in order',
      color: '#e5132b',
      order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
    },
    {
      id: 'recruiter',
      name: 'Recruiter',
      blurb: 'Resume, achievements & skills first',
      color: '#4cc9ff',
      order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
    },
    {
      id: 'developer',
      name: 'Developer',
      blurb: 'Projects, stack & GitHub first',
      color: '#46e3a8',
      order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
    },
    {
      id: 'creative',
      name: 'Creative',
      blurb: 'The story arc & highlights first',
      color: '#ffb547',
      order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
    },
  ];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
