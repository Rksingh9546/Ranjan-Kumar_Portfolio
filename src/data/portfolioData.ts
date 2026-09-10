import { Project, Skill, StatMetric, NavItem } from '../types';

export const PERSONAL_INFO = {
  name: "Ranjan Kumar",
  role: "Full-Stack Developer & AI/ML Engineer",
  tagline: "Building intelligent architectures, scalable backend pipelines & fluid user experiences",
  status: "Available for Opportunities • 2026",
  email: "ranjankum7633@gmail.com",
  location: "Noida, India (Open to Remote & Global Relocation)",
  experienceYears: "0+ Years",
  projectsCount: "20+ Projects",
  degree: "B.Tech in Computer Science & Engineering",
  shortBio:
    "Hi, I am Ranjan Kumar, a dedicated Full-Stack Software Developer and AI/ML Engineer. I specialize in designing and engineering end-to-end intelligent systems, scalable backend architectures with FastAPI & Django, and fluid, responsive React interfaces with Tailwind CSS.",
  fullBio: [
    "I bridge the gap between heavy computational machine learning intelligence and intuitive, human-centered web design. With a rigorous foundation in Computer Science and systems engineering, I focus on building software that solves high-friction problems in healthcare, automated talent acquisition, and data analysis.",
    "My engineering stack centers around robust Python & Java backends (FastAPI, Django), real-time databases (MySQL, Firebase Firestore, PostgreSQL), and ultra-fast client-side applications crafted in modern React.js, TypeScript, and Tailwind CSS.",
    "When I'm not training neural nets or architecting microservices, you'll find me contributing to open-source software, breaking down research papers, and mentoring budding coders."
  ],
  socials: [
    { name: "GitHub", href: "https://github.com/Rksingh9546/", icon: "Github", username: "@ranjankumar-dev" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/ranjan7kumar/", icon: "Linkedin", username: "ranjan-kumar-eng" },
    { name: "X (Twitter)", href: "https://twitter.com", icon: "Twitter", username: "@ranjan_codes" },
    { name: "Instagram", href: "https://instagram.com", icon: "Instagram", username: "@ranjan.dev" },
    { name: "YouTube", href: "https://youtube.com", icon: "Youtube", username: "@RanjanTech" },
  ],
  quickPills: [
    { label: "Java & Python", icon: "Code" },
    { label: "React.js & Tailwind CSS", icon: "Layout" },
    { label: "FastAPI & REST APIs", icon: "Zap" },
    { label: "Machine Learning & GenAi", icon: "Brain" },
  ],
 avatarImage: "/images/Ranjan_Kumar.png",
};

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const STATS: StatMetric[] = [
  {
    value: "2026",
    label: "Graduation",
    sublabel: "B.Tech Computer Science & Engineering",
    icon: "GraduationCap"
  },
  {
    value: "8.0/10",
    label: "CGPA",
    sublabel: "Galgotias University",
    icon: "Award"
  },
  {
    value: "18+",
    label: "Key Projects",
    sublabel: "AI & Full-Stack applications",
    icon: "FolderGit2"
  },
  {
    value: "10",
    label: "Certifications",
    sublabel: "Oracle & Cisco & Skill India",
    icon: "BadgeCheck"
  }
];

// Required skills from prompt: Java, Python, React.js, JavaScript, Tailwind CSS, Firebase, MySQL, Git/GitHub, FastAPI, Django, AI/ML
export const SKILLS: Skill[] = [
  {
    name: "Python",
    category: "Languages",
    level: 85,
    experienceYears: "Project Experience",
    iconName: "FileCode",
    badge: "Proficient",
    highlight: "Used for AI/ML development, data processing, and the MindWatch AI project."
  },

  {
    name: "Java",
    category: "Languages",
    level: 85,
    experienceYears: "Project Experience",
    iconName: "Coffee",
    badge: "Proficient",
    highlight: "Used for object-oriented programming and the Integrated Healthcare Management System."
  },
  {
    name: "AI/ML",
    category: "AI & Tools",
    level: 85,
    experienceYears: "Project Experience",
    iconName: "Brain",
    badge: "Proficient",
    highlight: "Applied machine learning techniques for behavioral analysis and early depression prediction."
  },

  {
    name: "Scikit-Learn",
    category: "AI & Tools",
    level: 80,
    experienceYears: "Project Experience",
    iconName: "Brain",
    badge: "Proficient",
    highlight: "Used to build and evaluate the Random Forest model in MindWatch AI."
  },

  {
    name: "Pandas & NumPy",
    category: "AI & Tools",
    level: 80,
    experienceYears: "Project Experience",
    iconName: "FileCode",
    badge: "Proficient",
    highlight: "Used for dataset processing, numerical operations, and behavioral data analysis."
  },


  {
    name: "JavaScript",
    category: "Languages",
    level: 80,
    experienceYears: "Project Experience",
    iconName: "Braces",
    badge: "Proficient",
    highlight: "Used for web development and building interactive frontend applications."
  },

  {
    name: "React.js",
    category: "Frontend",
    level: 85,
    experienceYears: "Project Experience",
    iconName: "Atom",
    badge: "Proficient",
    highlight: "Used to build responsive and interactive user interfaces."
  },

  {
    name: "HTML/CSS",
    category: "Frontend",
    level: 85,
    experienceYears: "Project Experience",
    iconName: "Palette",
    badge: "Proficient",
    highlight: "Used for creating responsive layouts and user-friendly web interfaces."
  },

  {
    name: "Spring Boot",
    category: "Backend & API",
    level: 80,
    experienceYears: "Internship Experience",
    iconName: "Server",
    badge: "Proficient",
    highlight: "Used during the Wipro Java Full Stack Developer internship for backend application development."
  },

  {
    name: "REST APIs",
    category: "Backend & API",
    level: 80,
    experienceYears: "Project Experience",
    iconName: "Zap",
    badge: "Proficient",
    highlight: "Used for communication between frontend and backend applications."
  },

  {
    name: "MySQL",
    category: "Database",
    level: 85,
    experienceYears: "Project Experience",
    iconName: "Database",
    badge: "Proficient",
    highlight: "Used for healthcare application data management and relational database operations."
  },

  {
    name: "MongoDB",
    category: "Database",
    level: 70,
    experienceYears: "Academic Experience",
    iconName: "Database",
    badge: "Familiar",
    highlight: "Knowledge of NoSQL database concepts and document-based data storage."
  },

  {
    name: "Firebase",
    category: "Database",
    level: 75,
    experienceYears: "Project Experience",
    iconName: "Flame",
    badge: "Familiar",
    highlight: "Used with Firebase Firestore for data storage in the MindWatch AI project."
  },

  
  {
    name: "Git / GitHub",
    category: "Tools",
    level: 80,
    experienceYears: "Project Experience",
    iconName: "GitBranch",
    badge: "Proficient",
    highlight: "Used for source control, project management, collaboration, and code versioning."
  },

  {
    name: "JDBC",
    category: "Backend & API",
    level: 75,
    experienceYears: "Project Experience",
    iconName: "Database",
    badge: "Familiar",
    highlight: "Used for Java database connectivity in the Integrated Healthcare Management System."
  },

  {
    name: "Postman",
    category: "Tools",
    level: 75,
    experienceYears: "Internship Experience",
    iconName: "Send",
    badge: "Familiar",
    highlight: "Used for testing and validating REST APIs during backend development."
  }
];

// Highlighted projects:
// AI Resume Screening System, AI Mental Health Monitoring, Integrated Healthcare Management System, and Medical Clinic Website
export const PROJECTS: Project[] = [
  {
    id: "ai-mental-health-monitoring",
    title: "AI Mental Health Monitoring",
    subtitle: "Real-time Emotional Wellbeing & Sentiment Analysis Platform",
    description: "A proactive healthcare solution designed to monitor psychological trends and detect early burnout markers using deep sentiment analysis, natural language conversational sentiment logs, and adaptive wellness recommendations.",
    category: "AI & ML",
    image: "/images/project_mental_ai_1788767477023.jpg",
    tags: ["Python", "FastAPI", "Transformers", "React.js", "Tailwind CSS", "Recharts"],
    metrics: "96.2% Emotion Detection Precision",
    features: [
      "Natural language sentiment classification across emotional spectrums",
      "Longitudinal mood charting with trigger identification and daily trend tracking",
      "Confidential, encrypted patient reflection portal with stress factor detection",
      "Emergency threshold triggers with immediate clinical counselor guidance"
    ],
    liveUrl: "https://ai-mental-health.demo.dev",
    githubUrl: "https://github.com/ranjankumar-dev/ai-mental-health-monitoring",
    featured: true
  },
  {
    id: "ai-resume-screening",
    title: "AI Resume Screening System",
    subtitle: "Automated Talent Intelligence & NLP Scoring Platform",
    description: "An intelligent applicant evaluation platform that parses multi-format resumes, extracts technical proficiencies using NLP, and ranks candidates against job descriptions using TF-IDF cosine similarity vectorization.",
    category: "AI & ML",
    image: "/images/project_resume_ai_1788767452676.jpg",
    tags: ["Python", "FastAPI", "NLP", "React.js", "Scikit-Learn", "Tailwind CSS"],
    metrics: "94.8% Candidate Match Accuracy",
    features: [
      "Automated PDF/DOCX resume text extraction and named-entity recognition",
      "Semantic keyword matching and TF-IDF weighted similarity scoring",
      "Interactive recruiter candidate comparison dashboard with radar analytics",
      "Instant recruiter summary generation highlighting candidate strengths and gaps"
    ],
    liveUrl: "https://ai-resume-screener.demo.dev",
    githubUrl: "https://github.com/ranjankumar-dev/ai-resume-screening-system",
    featured: true
  },
  
  {
    id: "healthcare-management-system",
    title: "Integrated Healthcare Management System",
    subtitle: "Enterprise Hospital Administration & Clinical EHR Platform",
    description: "An end-to-end enterprise hospital suite synchronizing electronic medical records (EHR), dynamic doctor shift management, multi-ward patient admission, pharmacy stock audits, and billing invoices.",
    category: "Healthcare",
    image: "/images/project_healthcare_1788767498565.jpg",
    tags: ["Django", "React.js", "MySQL", "Tailwind CSS", "REST API", "Docker"],
    metrics: "10,000+ Records Handled Seamlessly",
    features: [
      "Role-Based Access Control (RBAC) separating Doctors, Nurses, Admins & Patients",
      "Automated doctor appointment dispatch with conflict prevention algorithms",
      "Digital prescription tracker with automatic pharmacy inventory deduction",
      "HIPAA-conscious data segregation and audit trail logging"
    ],
    liveUrl: "https://healthcare-mgmt.demo.dev",
    githubUrl: "https://github.com/ranjankumar-dev/integrated-healthcare-management-system",
    featured: true
  },
  {
    id: "medical-clinic-website",
    title: "Medical Clinic Website",
    subtitle: "Modern Patient Portal & Telemedicine Consultation Hub",
    description: "A patient-first responsive clinic application streamlining doctor discovery, online appointment bookings, clinic service exploration, and digital patient communication with warm, accessible typography.",
    category: "Enterprise & Web",
    image: "/images/project_clinic_1788767526274.jpg",
    tags: ["React.js", "Tailwind CSS", "Firebase", "Motion", "FastAPI"],
    metrics: "3.5x Faster Appointment Booking",
    features: [
      "Real-time appointment slot booking with instant confirmation updates",
      "Specialized doctor profiles with verified credentials, reviews, and timings",
      "Emergency department live queue status and directions integration",
      "Fully responsive mobile-first UI with WCAG AA accessibility compliance"
    ],
    liveUrl: "https://medical-clinic.demo.dev",
    githubUrl: "https://github.com/ranjankumar-dev/medical-clinic-web-portal",
    featured: true
  }
];

export const RESUME_DETAILS = {
  education: [
  {
    institution: "Galgotias University",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    period: "2022 - 2026",
    score: "CGPA: 8.0/ 10",
    description:
      "Focused on Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, Software Engineering, and Artificial Intelligence."
  }
],
skills: {
  programmingLanguages: ["Python","Java", "JavaScript", "SQL"],

  backend: [
    "Java",
    "Spring Boot",
    "REST APIs",
    "Flask",
    "JDBC",
    "JWT",
    "Spring Security"
  ],

  frontend: ["HTML", "CSS", "JavaScript", "React.js"],

  databases: ["MySQL", "MongoDB", "Firebase Firestore"],

  aiMl: ["Scikit-Learn", "Pandas", "NumPy", "AI/ML"],

  tools: ["Git", "GitHub", "Postman", "VS Code", "Eclipse", "IntelliJ IDEA"]
},
  experience: [

  {
    role: "Data Science Intern",
    company: "Henry Harvin",
    period: "1 Month",
    location: "Online",
    points: [
      "Developed foundational skills in Python, data analysis, and machine learning through hands-on data science training.",
      "Performed data cleaning, preprocessing, and exploratory data analysis to identify patterns and insights.",
      "Applied basic statistical analysis and machine learning techniques to data-driven problem-solving tasks."
    ]
  },
  {
    role: "Java Full Stack Developer Intern",
    company: "Wipro Technology",
    period: "3 Months",
    location: "Greater Noida, India",
    points: [
      "Developed full-stack web application features using Java, Spring Boot, REST APIs, MySQL, and Git.",
      "Implemented role-based authentication and authorization using JWT and Spring Security.",
      "Optimized database queries and backend APIs to improve application performance and response time.",
      "Worked in Agile sprints to develop, debug, test, and deliver application features."
    ]
  },
],
  certifications: [
    "AWS Certified Cloud Practitioner (Foundational)",
    "DeepLearning.AI: Neural Networks and Deep Learning",
    "Java Foundations - Oracle Academy",
  "Database Programming with SQL - Oracle Academy",
  ]
};
