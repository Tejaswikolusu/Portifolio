/**
 * Central portfolio data — generated from Tejaswi Kolusu's resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

export const profile = {
  fullName: 'Tejaswi Kolusu',
  displayName: 'Tejaswi Kolusu',
  firstName: 'TEJASWI',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A KOLUSU ORIGINAL',
  role: 'Software Engineer & AI Engineer',
  tagline: ['Software Engineer', 'AI Engineer', 'Java', 'Python', 'Generative AI'],
  intro:
    'A Computer Science graduate (CGPA 8.8) from Gayatri Vidya Parishad College of Engineering seeking a Software Engineer / AI Engineer role. Hands-on experience in Java, Python, full-stack development, REST APIs, SQL/NoSQL databases, Machine Learning, and Generative AI, with expertise in integrating AI models (Gemini API) with backend services.',
  location: 'Vijayawada, India',
  email: 'kolusutejaswi99@gmail.com',
  phone: '+91 94413 54646',
  links: {
    linkedin: 'https://linkedin.com/in/kolusu-tejaswi9999',
    github: 'https://github.com/Tejaswikolusu',
  },
  resumePdf: `${base}/assets/Tejaswi_Kolusu_Resume.pdf`,
  portrait: {
    src: `${base}/assets/portrait-720.webp`,
    srcSet: `${base}/assets/portrait-420.webp 420w, ${base}/assets/portrait-720.webp 720w, ${base}/assets/portrait-1100.webp 1100w`,
    alt: 'Portrait of Tejaswi Kolusu',
  },
  interests: ['Backend Systems', 'Generative AI & LLMs', 'ML Pipeline Optimization'],
};

export const education = [
  {
    school: 'Gayatri Vidya Parishad College of Engineering (A)',
    place: 'Visakhapatnam',
    degree: 'Bachelor of Technology — Computer Science and Engineering',
    period: '2022 – 2026',
    score: 'CGPA 8.8',
  },
  {
    school: 'Narayana Junior College',
    place: 'Vijayawada',
    degree: 'Intermediate — MPC',
    period: '2020 – 2022',
    score: 'CGPA 9.7',
  },
  {
    school: 'Kumar School',
    place: 'Nuzvid',
    degree: 'Secondary School Certificate (SSC)',
    period: '2018 – 2019',
    score: 'CGPA 10',
  },
];

export const experience = [
  {
    company: 'Alkame',
    role: 'Artificial Intelligence and Machine Learning (Intern)',
    place: 'Predictive Stock Price Modeling',
    period: 'Internship',
    points: [
      'Built a Python data preprocessing pipeline for cleaning and preparing historical stock data, reducing preparation time by 30%.',
      'Implemented ML prediction algorithms to analyze stock patterns and improve prediction accuracy.',
      'Performed model training, testing, and evaluation by comparing predicted and actual stock values.',
      'Optimized the ML execution pipeline, reducing preprocessing and prediction time by 20%.',
    ],
  },
  {
    company: 'S Technologies',
    role: 'Full Stack Developer — FloraHub (Intern)',
    place: 'Ecommerce Website - FloraHub',
    period: 'Internship',
    points: [
      'Developed a full-stack e-commerce application with product search, browsing, product details, and cart functionality.',
      'Built and integrated REST APIs for products, search, cart, and user operations, improving data processing by 25%.',
      'Implemented database CRUD operations for product, user, and cart data, improving retrieval efficiency by 20%.',
      'Integrated the frontend, backend, and database to support end-to-end shopping workflows, reducing manual handling by 30%.',
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
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'genai-floor-plan',
    title: 'GenAI Architectural Floor Plan Generator',
    year: '2026',
    genre: 'GenAI • Computer Vision • Full-Stack',
    logline: 'An AI-powered architectural layout generator using Gemini API, prompt engineering, and interactive Fabric.js canvas.',
    stack: ['Python', 'Gemini API', 'Fabric.js', 'MongoDB', 'Prompt Engineering'],
    build: [
      'Developed a GenAI floor-plan generator using Python, Prompt Engineering, and Gemini API, reducing manual layout-design effort by 40%.',
      'Integrated the Gemini API with the backend to process room and plot constraints and generate customized architectural layouts.',
      'Implemented interactive floor-plan rendering using Fabric.js, improving layout visualization and modification efficiency by 30%.',
      'Integrated MongoDB for user and floor-plan storage and implemented regenerate and download functionality for generated layouts.',
    ],
    features: [
      'Gemini API prompt-engineered layout generation',
      'Constraint-based room and plot dimension processing',
      'Interactive 2D floor-plan rendering via Fabric.js',
      'MongoDB storage for layouts and user workspaces',
      'One-click layout regeneration and plan downloading',
    ],
    metrics: [
      { value: '40%', label: 'less manual layout-design effort' },
      { value: '30%', label: 'faster visual modification' },
      { value: 'Gemini API', label: 'constraint-based GenAI engine' },
      { value: 'Fabric.js', label: 'interactive canvas rendering' },
    ],
    github: 'https://github.com/Tejaswikolusu',
    palette: { from: '#1a0624', via: '#5f1680', to: '#0b0612', accent: '#c084fc' },
    motif: 'flow',
  },
  {
    id: 'florahub-ecommerce',
    title: 'FloraHub E-Commerce Platform',
    year: '2025',
    genre: 'Full-Stack • E-Commerce • REST APIs',
    logline: 'A full-stack shopping platform with product search, cart operations, and optimized database transactions.',
    stack: ['React.js', 'Java', 'Python', 'REST APIs', 'SQL', 'Bootstrap'],
    build: [
      'Developed a full-stack e-commerce application with product search, browsing, product details, and cart functionality.',
      'Built and integrated REST APIs for products, search, cart, and user operations, improving data processing by 25%.',
      'Implemented database CRUD operations for product, user, and cart data, improving retrieval efficiency by 20%.',
      'Integrated the frontend, backend, and database to support end-to-end shopping workflows, reducing manual handling by 30%.',
    ],
    features: [
      'Product search, browsing, and item detail views',
      'Cart management and checkout workflow',
      'REST APIs for product, search, and user operations',
      'Database CRUD operations and seamless end-to-end pipeline',
    ],
    metrics: [
      { value: '25%', label: 'faster data processing via REST APIs' },
      { value: '20%', label: 'improved database retrieval efficiency' },
      { value: '30%', label: 'reduction in manual handling' },
      { value: 'Full-Stack', label: 'end-to-end shopping workflows' },
    ],
    github: 'https://github.com/Tejaswikolusu',
    palette: { from: '#021a14', via: '#095944', to: '#040d0a', accent: '#34d399' },
    motif: 'tenants',
  },
  {
    id: 'freshify-iot',
    title: 'Freshify – Real-Time Air Quality & Control',
    year: '2025',
    genre: 'IoT • Embedded Systems • Automation',
    logline: 'Smart IoT monitoring system with MQ9 gas sensor, continuous threshold processing, and automated purifier activation.',
    stack: ['IoT', 'MQ9 Sensor', 'Microcontroller', 'Embedded C/C++', 'Automation'],
    build: [
      'Developed an IoT-based air-quality monitoring system using an MQ9 sensor and microcontroller for real-time smoke and gas detection.',
      'Implemented sensor-data processing and threshold logic to continuously monitor air-quality levels.',
      'Programmed automatic air-purifier activation when detected gas levels exceeded the predefined threshold.',
    ],
    features: [
      'Real-time smoke and hazardous gas detection with MQ9 sensor',
      'Continuous sensor-data stream processing and threshold evaluation',
      'Automated relay triggering for air purifier activation',
      'Continuous environmental quality safeguards',
    ],
    metrics: [
      { value: 'Real-time', label: 'smoke & gas detection' },
      { value: 'Automated', label: 'air purifier activation' },
      { value: 'MQ9', label: 'calibrated gas sensor' },
      { value: '24/7', label: 'continuous environmental monitoring' },
    ],
    github: 'https://github.com/Tejaswikolusu',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'shield',
  },
  {
    id: 'stock-price-prediction',
    title: 'Predictive Stock Price Modeling',
    year: '2025',
    genre: 'Machine Learning • Data Pipeline • Finance',
    logline: 'An ML pipeline analyzing historical market trends and forecasting stock prices with optimized data preprocessing.',
    stack: ['Python', 'Machine Learning', 'Data Preprocessing', 'Model Evaluation'],
    build: [
      'Built a Python data preprocessing pipeline for cleaning and preparing historical stock data, reducing preparation time by 30%.',
      'Implemented ML prediction algorithms to analyze stock patterns and improve prediction accuracy.',
      'Performed model training, testing, and evaluation by comparing predicted and actual stock values.',
      'Optimized the ML execution pipeline, reducing preprocessing and prediction time by 20%.',
    ],
    features: [
      'Automated data cleaning and transformation pipeline',
      'Pattern analysis on historical financial data',
      'Cross-validation and model performance evaluation',
      'Optimized prediction pipeline runtime',
    ],
    metrics: [
      { value: '30%', label: 'reduction in preparation time' },
      { value: '20%', label: 'faster execution pipeline' },
      { value: 'ML', label: 'pattern recognition & modeling' },
    ],
    github: 'https://github.com/Tejaswikolusu',
    palette: { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' },
    motif: 'flow',
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
    id: 'nptel-silver',
    title: 'Silver Medalist',
    org: 'NPTEL — Java Programming',
    detail: 'Awarded Silver Medal for elite performance in the national NPTEL examination in Java Programming.',
    laurel: 'Silver Medal',
  },
  {
    id: 'infosys-grade-a',
    title: 'Grade A Distinction',
    org: 'Infosys Foundation Finishing School',
    detail: 'Completed Java Software Developer Training organized by ICT Academy with top Grade A distinction.',
    laurel: 'Grade A Distinction',
  },
  {
    id: 'btech-cgpa',
    title: '8.8 CGPA in B.Tech CSE',
    org: 'Gayatri Vidya Parishad College of Engineering (A)',
    detail: 'Consistently maintained top academic performance across computer science, software development, and algorithms.',
    laurel: 'Academic Excellence',
  },
  {
    id: 'school-cgpa',
    title: 'Perfect 10 CGPA',
    org: 'Kumar School, Nuzvid',
    detail: 'Achieved a perfect 10/10 CGPA in Secondary School Education (SSC).',
    laurel: 'Flawless 10 CGPA',
  },
  {
    id: 'intermediate-cgpa',
    title: '9.7 CGPA in Intermediate',
    org: 'Narayana Junior College, Vijayawada',
    detail: 'Secured 9.7 CGPA in MPC curriculum with excellence in Mathematics and Sciences.',
    laurel: 'High Academic Merit',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Infosys / ICT Academy', name: 'Java Software Developer Training – Infosys Foundation Finishing School (Grade A)', link: 'https://github.com/Tejaswikolusu' },
  { issuer: 'NPTEL', name: 'Java Programming (Silver Medal)', link: 'https://github.com/Tejaswikolusu' },
  { issuer: '1Stop', name: 'Artificial Intelligence & Full Stack Development', link: 'https://github.com/Tejaswikolusu' },
  { issuer: 'Certifications', name: 'Python Programming Certified', link: 'https://github.com/Tejaswikolusu' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    subtitle: 'Java & Python with strong DSA foundation',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'Python', mono: 'Py' },
      { name: 'C', mono: 'C' },
      { name: 'C++', mono: 'C+' },
      { name: 'Data Structures & Algorithms', mono: 'Ds' },
    ],
  },
  {
    id: 'aiml',
    title: 'AI & Machine Learning',
    subtitle: 'GenAI, LLMs & predictive modeling',
    skills: [
      { name: 'Generative AI', mono: 'Ga', note: 'GenAI' },
      { name: 'Gemini API', mono: 'Gm' },
      { name: 'Prompt Engineering', mono: 'Pe' },
      { name: 'Machine Learning', mono: 'Ml' },
      { name: 'Model Evaluation', mono: 'Me' },
      { name: 'ML Pipeline Optimization', mono: 'Op' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Services, APIs & database CRUD',
    skills: [
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'API Integration', mono: 'Ai' },
      { name: 'Backend Services', mono: 'Bs' },
      { name: 'Database CRUD Operations', mono: 'Cd' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Full-Stack & Frameworks',
    subtitle: 'Interactive UI & canvas rendering',
    skills: [
      { name: 'React.js', mono: 'Re' },
      { name: 'Bootstrap', mono: 'Bs' },
      { name: 'Fabric.js', mono: 'Fb' },
      { name: 'Full-Stack Development', mono: 'Fs' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'SQL & NoSQL persistence',
    skills: [
      { name: 'SQL', mono: 'Sq' },
      { name: 'MySQL', mono: 'My' },
      { name: 'MongoDB', mono: 'Mg' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Practices',
    subtitle: 'Git, debugging & evaluation',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'Debugging', mono: 'Dg' },
      { name: 'Testing & ML Evaluation', mono: 'Te' },
    ],
  },
  {
    id: 'coursework',
    title: 'Academic Coursework',
    subtitle: 'Computer Science core',
    skills: [
      { name: 'DBMS', mono: 'Db' },
      { name: 'Operating Systems', mono: 'Os' },
      { name: 'Computer Networks', mono: 'Cn' },
      { name: 'Data Structures', mono: 'Ds' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['NPTEL Java Programming (Silver Medal)', 'Infosys Foundation Finishing School (Grade A)'],
  Python: ['GenAI Floor Plan Generator', 'Alkame Stock Price Modeling', 'Python Programming Certified'],
  C: ['Core CSE Curriculum (GVPCE)'],
  'C++': ['Core CSE Curriculum (GVPCE)'],
  'Data Structures & Algorithms': ['GVPCE Core CSE Coursework', 'Algorithm Implementation'],
  'Generative AI': ['Gemini API Layout Generation', 'Prompt Engineering', 'GenAI Floor Plan Generator'],
  'Gemini API': ['GenAI Architectural Floor Plan Generator', 'AI Model Backend Integration'],
  'Prompt Engineering': ['GenAI Architectural Floor Plan Generator', 'Constraint-based Layout Generation'],
  'Machine Learning': ['Alkame Predictive Stock Modeling Pipeline', '1Stop AI & Full Stack'],
  'Model Evaluation': ['Alkame Stock Model Testing & Validation'],
  'ML Pipeline Optimization': ['Alkame Predictive Stock Modeling (20% faster pipeline)'],
  'REST APIs': ['FloraHub E-Commerce', 'GenAI Floor Plan Generator Backend'],
  'API Integration': ['Gemini API Backend Integration', 'FloraHub REST APIs'],
  'Backend Services': ['FloraHub E-Commerce', 'GenAI Floor Plan Generator'],
  'Database CRUD Operations': ['FloraHub SQL Operations', 'MongoDB Storage Engine'],
  'React.js': ['FloraHub E-Commerce UI', '1Stop AI & Full Stack'],
  Bootstrap: ['FloraHub Responsive Frontend'],
  'Fabric.js': ['GenAI Floor Plan Generator (Interactive Canvas)'],
  'Full-Stack Development': ['FloraHub E-Commerce', '1Stop AI & Full Stack Certified'],
  SQL: ['FloraHub Database Management', 'Core DBMS Coursework'],
  MySQL: ['FloraHub E-Commerce Database'],
  MongoDB: ['GenAI Floor Plan Generator (User & Plan Storage)'],
  Git: ['Version control across all software projects and GitHub'],
  Debugging: ['Application Debugging & Problem Solving'],
  'Testing & ML Evaluation': ['Alkame Stock Model Validation & Accuracy Testing'],
  DBMS: ['Gayatri Vidya Parishad CSE Coursework'],
  'Operating Systems': ['Core Computer Science Coursework'],
  'Computer Networks': ['Core Computer Science Coursework'],
  'Data Structures': ['Core Computer Science Coursework'],
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
    title: 'The Foundation',
    period: '2018 – 2022',
    synopsis: 'Academic excellence at Kumar School and Narayana Junior College in Vijayawada.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Flawless Ten',
        description: 'Completed Secondary School Certificate (SSC) at Kumar School, Nuzvid with a perfect 10 CGPA.',
        tags: ['Kumar School', '10 CGPA', 'SSC'],
        runtime: '2018 – 2019',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'Mastering Sciences',
        description: 'Higher secondary education in MPC at Narayana Junior College, Vijayawada, graduating with a 9.7 CGPA.',
        tags: ['MPC', '9.7 CGPA', 'Vijayawada'],
        runtime: '2020 – 2022',
        palette: crimson,
      },
    ],
  },
  {
    number: 2,
    title: 'Computer Science & Engineering',
    period: '2022 – 2026',
    synopsis: 'B.Tech in Computer Science and Engineering at Gayatri Vidya Parishad College of Engineering (A).',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Core Engineer',
        description: 'Bachelor of Technology in Computer Science and Engineering with a standout CGPA of 8.8.',
        tags: ['B.Tech CSE', 'GVPCE', 'CGPA 8.8'],
        runtime: '2022 – 2026',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'The Silver Standard',
        description: 'Awarded Silver Medal in Java Programming by NPTEL for national-level excellence.',
        tags: ['NPTEL', 'Java', 'Silver Medal'],
        runtime: 'NPTEL Certification',
        palette: violet,
      },
      {
        code: 'S02 E03',
        title: 'Finishing School Distinction',
        description: 'Achieved Grade A in Java Software Developer Training at Infosys Foundation Finishing School (ICT Academy).',
        tags: ['Infosys', 'ICT Academy', 'Grade A'],
        runtime: 'Infosys Training',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'The Industry Internships',
    period: '2024 – 2025',
    synopsis: 'Hands-on software development across AI/ML data pipelines and full-stack e-commerce platforms.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Predictive Modeler',
        description: 'Built Python data preprocessing pipelines and ML stock prediction algorithms at Alkame, cutting prep time by 30%.',
        tags: ['Alkame', 'AI / ML', 'Python', 'Stock Modeling'],
        runtime: 'Internship',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'The Full-Stack Architect',
        description: 'Developed FloraHub e-commerce application at S Technologies — building REST APIs and optimizing database operations.',
        tags: ['S Technologies', 'Full-Stack', 'REST APIs', 'SQL'],
        runtime: 'Internship',
        palette: amber,
      },
    ],
  },
  {
    number: 4,
    title: 'Originals & Innovations',
    period: '2025 – 2026',
    synopsis: 'Building impactful real-world software: GenAI floor plan generator and smart IoT air quality control.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The GenAI Creator',
        description: 'GenAI Architectural Floor Plan Generator — combining Gemini API prompt engineering and Fabric.js interactive rendering.',
        tags: ['Python', 'Gemini API', 'Fabric.js', 'MongoDB'],
        runtime: '2026',
        palette: violet,
      },
      {
        code: 'S04 E02',
        title: 'The IoT Automator',
        description: 'Freshify Real-Time Air Quality System — smoke and gas detection with MQ9 sensor and automated air-purifier activation.',
        tags: ['IoT', 'MQ9 Sensor', 'Microcontroller', 'Embedded'],
        runtime: '2025',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Ready to build scalable software, cloud backend architectures, and intelligent AI applications.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Mission',
        description: 'Seeking an entry-level Software Developer role to engineer robust backend systems, APIs, and end-to-end applications.',
        tags: ['Software Developer', 'Backend', 'GenAI', 'Java / Python'],
        runtime: 'Ready to join',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Elite credential', title: 'Java Silver Medalist', detail: 'Awarded Silver Medal in Java Programming by NPTEL', palette: amber },
  { label: 'The GenAI Original', title: 'Floor Plan Generator', detail: 'Gemini API + Prompt Engineering + Fabric.js', palette: violet },
  { label: 'Academic pinnacle', title: 'B.Tech CSE (8.8 CGPA)', detail: 'Gayatri Vidya Parishad College of Engineering', palette: ocean },
  { label: 'Finishing school', title: 'Grade A Distinction', detail: 'Infosys Foundation Java Developer Training', palette: jade },
  { label: 'Full-stack platform', title: 'FloraHub E-Commerce', detail: 'REST APIs & CRUD workflows at S Technologies', palette: crimson },
  { label: 'Predictive AI', title: 'Stock Price Modeling', detail: 'ML pipeline & data preprocessing at Alkame', palette: amber },
  { label: 'IoT innovation', title: 'Freshify Air Quality', detail: 'MQ9 sensor & automated purifier control', palette: ocean },
  { label: 'Perfect score', title: 'Flawless 10 CGPA', detail: 'Secondary School Education at Kumar School', palette: jade },
  { label: 'Higher secondary', title: '9.7 CGPA in MPC', detail: 'Narayana Junior College, Vijayawada', palette: crimson },
  { label: 'Certified full-stack', title: 'AI & Full Stack', detail: 'Certified by 1Stop in AI & Full Stack Dev', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · CSE',
    lines: ['Gayatri Vidya Parishad College of Engineering (A), Visakhapatnam', '2022 – 2026'],
    chips: ['CGPA 8.8'],
  },
  {
    kicker: 'Languages & Core',
    title: 'Java & Python First',
    lines: ['Java (NPTEL Silver Medal) · Python · C · C++', 'REST APIs · SQL · MySQL · MongoDB · React.js · Fabric.js'],
    chips: ['Java', 'Python', 'REST APIs', 'SQL', 'MongoDB', 'React.js'],
  },
  {
    kicker: 'Industry Experience',
    title: 'Dual Internships',
    lines: ['AI/ML Intern @ Alkame — Predictive Stock Price Modeling', 'Full Stack Developer @ S Technologies — FloraHub E-Commerce'],
  },
  {
    kicker: 'Originals',
    title: 'Standout Projects',
    lines: ['GenAI Architectural Floor Plan Generator (Gemini API & Fabric.js)', 'FloraHub E-Commerce Platform with REST APIs and CRUD ops', 'Freshify — Real-Time IoT Air Quality & Purifier Automation'],
  },
  {
    kicker: 'Distinctions',
    title: 'Top Honors',
    lines: ['Silver Medal in Java Programming — NPTEL', 'Grade A Distinction — Infosys Foundation Finishing School', 'Flawless 10 CGPA in SSC & 9.7 CGPA in Intermediate'],
  },
  {
    kicker: 'Certifications',
    title: 'Certified Developer',
    lines: ['Infosys Foundation · NPTEL · 1Stop AI & Full Stack · Python'],
  },
  {
    kicker: 'Current Mission',
    title: 'Software Engineer & AI Engineer',
    lines: ['Seeking a Software Engineer / AI Engineer role to build end-to-end applications, backend services, and AI model integrations (Gemini API).'],
  },
];

export type ProfileId = 'tejaswi' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'tejaswi',
    name: 'Tejaswi',
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
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & internships', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2025–2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Honors • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
