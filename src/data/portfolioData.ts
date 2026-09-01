export interface SkillCategory {
  title: string;
  iconName: "Code2" | "Database" | "Layers" | "Smartphone" | "Cloud" | "Cpu" | "BarChart3" | "FileSpreadsheet" | "Workflow" | "CheckCircle2" | "Server";
  skills: string[];
}

export interface WorkExperienceItem {
  role: string;
  company: string;
  period: string;
  duration: string;
  summary: string;
  bullets: string[];
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  org: string;
  period: string;
  duration: string;
  tagline: string;
  overview: string;
  lifecycleHighlights: {
    engineering: string;
    dataModeling: string;
    analytics: string;
    businessImpact: string;
  };
  bullets: string[];
  tags: string[];
  category: string;
  featured: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  status: string;
  details: string;
  period: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
}

export const PERSONAL_INFO = {
  name: "MOHAMMED ABULHASAN M",
  title: "Software Engineer & Analyst",
  tagline: "Mobile & Web App Development • SQL & Star Schema Data Modeling • BI Analytics • Business Decisions",
  phone: "+971 50 252 6797",
  email: "mdyahasan18@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohammed-abulhasan-256767235",
  github: "https://github.com/abulhasan-18",
  portfolio: "https://abulhasan-portfolio.vercel.app",
  location: "United Arab Emirates / Remote",
  summary:
    "Multidisciplinary Software Engineer & Analyst with 2+ years of hands-on production experience at CloudPixels Consultancy Services. I build full-stack web and Flutter mobile applications, architect SQL relational databases & dimensional Star Schemas to capture granular user telemetry, perform in-depth data analytics in Power BI and Tableau, and translate empirical insights into actionable BRDs, process optimizations, and strategic business decisions.",
  keyHighlights: [
    "Full-Stack & Flutter Mobile Apps",
    "SQL & Star Schema Data Modeling",
    "Power BI & Telemetry Analytics",
    "BRD & Process Mapping",
    "Data-Driven Business Growth & Cost Optimization",
  ],
};

export const LIFECYCLE_STEPS = [
  {
    step: "01",
    title: "Develop Mobile & Web Apps",
    badge: "Software Engineering",
    description:
      "Design and engineer production cross-platform mobile apps (Flutter/Dart) and responsive web applications (Next.js/React, Java Spring Boot REST APIs) with secure auth and scalable architecture.",
    details: [
      "Production Flutter apps (Android & iOS)",
      "High-throughput Java Spring Boot APIs",
      "Real-time Next.js & WebSocket platforms",
    ],
  },
  {
    step: "02",
    title: "Model Data & Star Schemas",
    badge: "Data Architecture",
    description:
      "Architect transactional schemas and dimensional Star Schemas (Fact & Dimension tables) in SQL to systematically capture live user interactions and application events.",
    details: [
      "Star Schema & Dimensional Modeling (Fact/Dim tables)",
      "Advanced SQL queries, joins & ETL pipelines",
      "PostgreSQL, Supabase, MySQL & Snowflake storage",
    ],
  },
  {
    step: "03",
    title: "Analyze & Extract Insights",
    badge: "Data & BI Analytics",
    description:
      "Extract and analyze application telemetry using Power BI, Tableau, Excel, and Python, tracking user engagement, conversion funnels, screen heat maps, and cohort retention.",
    details: [
      "Interactive Power BI & Tableau dashboards",
      "User segmentation, cohort retention & heat maps",
      "Automated reporting workflows & KPI tracking",
    ],
  },
  {
    step: "04",
    title: "Drive Business Decisions",
    badge: "Business Analysis",
    description:
      "Translate analytics and stakeholder requirements into clear BRDs, optimized business process flows, feature roadmaps, and measurable infrastructure cost reductions.",
    details: [
      "Comprehensive BRD & Process Flow documentation",
      "Data-backed feature prioritization & cost reduction",
      "UAT coordination & stakeholder alignment",
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Mobile & Frontend Development",
    iconName: "Smartphone",
    skills: [
      "Flutter & Dart (Android & iOS)",
      "React.js & Next.js (TypeScript)",
      "Tailwind CSS & Responsive UI Design",
      "App State Management & Offline Caching",
      "Cross-Platform UI/UX Performance Tuning",
    ],
  },
  {
    title: "Backend, APIs & Architecture",
    iconName: "Server",
    skills: [
      "Java & Spring Boot Microservices",
      "Node.js & Express REST APIs",
      "STOMP WebSockets Real-Time Streaming",
      "Supabase (Auth, PostgreSQL, Row Level Security)",
      "Scalable API Architecture & Telemetry Instrumentation",
    ],
  },
  {
    title: "SQL & Star Schema Data Modeling",
    iconName: "Database",
    skills: [
      "Star Schema & Dimensional Data Modeling (Fact/Dim)",
      "Advanced SQL (Complex Joins, Window Functions, CTEs)",
      "PostgreSQL, MySQL & Supabase Databases",
      "Snowflake Cloud Data Warehousing",
      "Data Cleaning, Validation & ETL Pipelines",
    ],
  },
  {
    title: "BI, Analytics & Telemetry Reporting",
    iconName: "BarChart3",
    skills: [
      "Power BI (DAX, Calculated Measures, Dashboards)",
      "Tableau Visualizations & Trend Analysis",
      "App Telemetry & User Segmentation",
      "Advanced Excel (Formulas, Pivot Tables, Modeling)",
      "KPI Dashboards & Retention Tracking",
    ],
  },
  {
    title: "Business Analysis & Strategic Decisioning",
    iconName: "Workflow",
    skills: [
      "BRD & Functional Requirements Documentation",
      "Business Process Mapping (Current vs Future State)",
      "Data-Driven Business Impact & ROI Analysis",
      "Gap Analysis & Solution Design",
      "UAT Coordination & JIRA Agile Backlogs",
    ],
  },
  {
    title: "DevOps, Cloud & Automation",
    iconName: "Cpu",
    skills: [
      "Python Scripting & Reporting Automation",
      "Docker Containerization & Sandbox Deployments",
      "Git & GitHub Collaborative Workflows",
      "CI/CD Pipelines & Agile Delivery",
      "Cost Optimization & Infrastructure Efficiency",
    ],
  },
];

export const WORK_EXPERIENCE: WorkExperienceItem[] = [
  {
    role: "Software Engineer & Analyst",
    company: "CloudPixels Consultancy Services",
    period: "Jan 2024 – Mar 2026",
    duration: "2 years 2 months",
    summary:
      "Led end-to-end initiatives combining mobile and web application engineering, SQL star schema telemetry modeling, Power BI data analytics, and BRD documentation to drive measurable business improvements.",
    bullets: [
      "Developed and deployed production Flutter mobile applications and Next.js web portals serving thousands of active users globally.",
      "Designed relational databases and dimensional Star Schemas (Fact & Dimension tables) in SQL to log application telemetry, user interactions, and event data.",
      "Built interactive Power BI and Tableau dashboards tracking daily active usage, retention cohorts, user journeys, and feature performance.",
      "Authored comprehensive BRDs and mapped current vs future-state business workflows to align technical deliverables with stakeholder business objectives.",
      "Leveraged analytics to optimize cloud storage and backend architectures, significantly cutting infrastructure overhead while boosting system throughput.",
      "Coordinated UAT sessions, formulated test plans, and managed sprint backlogs in JIRA across cross-functional engineering teams.",
    ],
    skills: [
      "Flutter",
      "React/Next.js",
      "Spring Boot",
      "SQL",
      "Star Schema",
      "Power BI",
      "BRD",
      "UAT",
      "Docker",
      "JIRA",
    ],
  },
  {
    role: "Software & Data Analyst Intern",
    company: "CloudPixels Consultancy Services",
    period: "Jun 2023 – Dec 2023",
    duration: "7 months",
    summary:
      "Supported web application development, SQL data validation, KPI reporting summaries, and business requirements documentation.",
    bullets: [
      "Built responsive web portal interfaces and dynamic API endpoints for digital publishing and exam platforms.",
      "Prepared analytics datasets, wrote SQL queries to clean raw data, and assembled periodic KPI reporting summaries.",
      "Assisted senior analysts with BRD documentation, process flow diagrams, and stakeholder interview notes.",
      "Helped prepare UAT test cases and tracked defect resolution across active project releases.",
    ],
    skills: [
      "Full-Stack Web",
      "SQL Querying",
      "Excel",
      "Data Validation",
      "Requirements Mapping",
      "UAT Support",
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "tamil-calendars-365",
    title: "Tamil Calendars 365 — Mobile & Web Platform",
    org: "CloudPixels Consultancy Services",
    period: "Aug 2025 – Mar 2026",
    duration: "8 months",
    category: "Mobile App • SQL Star Schema • Power BI Analytics • BRD",
    featured: true,
    tagline: "End-to-end localized calendar application with telemetry modeling and analytics-driven feature updates.",
    overview:
      "Led the end-to-end delivery of a cross-platform localized calendar platform. Developed mobile (Flutter) and web applications, modeled user engagement into SQL Star Schemas, built Power BI dashboards to track festival interest trends, and prioritized feature releases using data analytics.",
    lifecycleHighlights: {
      engineering: "Built responsive cross-platform Flutter and web apps with multi-calendar synchronization and memory optimization.",
      dataModeling: "Architected SQL Star Schema (Fact_UserEngagement, Dim_Date, Dim_FestivalEvent, Dim_Region) for granular telemetry.",
      analytics: "Developed Power BI dashboards analyzing daily active usage, regional event interest, and seasonal usage spikes.",
      businessImpact: "Used analytics insights in BRDs to prioritize festival content digitization, driving a measurable increase in user retention.",
    },
    bullets: [
      "Engineered cross-platform mobile (Flutter) and web experiences delivering daily calendar insights, festival schedules, and offline access.",
      "Designed and implemented dimensional Star Schemas in SQL to capture page views, event clicks, and regional engagement metrics.",
      "Built interactive Power BI dashboards providing real-time visibility into content popularity and daily active users.",
      "Authored BRDs and conducted gap analysis to guide development roadmaps based on empirical user behavior data.",
      "Optimized assets and client-side caching to reduce load times across low-bandwidth networks.",
    ],
    tags: [
      "Flutter & Dart",
      "Web App",
      "Star Schema",
      "SQL Data Modeling",
      "Power BI",
      "BRD",
      "Retention Analytics",
    ],
  },
  {
    id: "christian-multimedia-app",
    title: "Christian Community Multimedia App",
    org: "CloudPixels Consultancy Services",
    period: "Mar 2024 – Oct 2025",
    duration: "19 months",
    category: "Streaming App • Audience Telemetry • Cost Optimization • BRD",
    featured: true,
    tagline: "Community multimedia streaming application with audience segmentation and 40% cloud cost reduction.",
    overview:
      "Designed and delivered a full-featured multimedia streaming application. Built the Flutter frontend and Supabase backend, modeled playback telemetry in SQL, analyzed media drop-off rates in Power BI, and reorganized infrastructure to reduce recurring hosting costs by 40%.",
    lifecycleHighlights: {
      engineering: "Developed Flutter audio/video streaming app with secure Supabase authentication and media delivery pipelines.",
      dataModeling: "Structured streaming telemetry (Fact_MediaPlay, Dim_UserSegment, Dim_ContentCategory) in relational SQL warehouse.",
      analytics: "Analyzed sermon plays, audience completion rates, traffic source channels, and heat maps in Power BI.",
      businessImpact: "Identified streaming patterns to restructure cloud storage tiers, achieving a 40% cost reduction while maintaining playback quality.",
    },
    bullets: [
      "Developed a scalable Flutter application unifying audio streaming, video sermons, and community digital resources.",
      "Architected database schemas and telemetry pipelines capturing playback duration, buffering events, and user drop-offs.",
      "Constructed Power BI dashboards with screen heat maps to identify high-engagement content categories and user segments.",
      "Documented CMS requirements, conducted stakeholder workshops, and coordinated UAT verification cycles.",
      "Translated usage analytics into infrastructure savings by optimizing storage and delivery architectures.",
    ],
    tags: [
      "Flutter",
      "Supabase",
      "Star Schema",
      "Power BI Dashboards",
      "Audience Segmentation",
      "Cost Optimization",
      "UAT",
    ],
  },
  {
    id: "online-compiler-platform",
    title: "Real-Time Online Compiler Platform",
    org: "CloudPixels Consultancy Services",
    period: "Sep 2023 – Feb 2024",
    duration: "6 months",
    category: "Full-Stack System • Docker Sandboxes • WebSockets • Latency Telemetry",
    featured: true,
    tagline: "Real-time browser-based code execution platform with containerized sandboxes and performance telemetry.",
    overview:
      "Built a high-performance online compiler system. Developed the Next.js code editor interface, containerized multi-language execution environments with Docker and Spring Boot STOMP WebSockets, and logged runtime latency metrics to optimize concurrency limits.",
    lifecycleHighlights: {
      engineering: "Built responsive Next.js editor frontend with STOMP WebSocket streaming and Dockerized multi-language sandboxes.",
      dataModeling: "Modeled code execution telemetry (Fact_ExecutionRun, Dim_Language, Dim_ErrorCode, Dim_ResourceUsage) in SQL.",
      analytics: "Monitored execution latency distributions, compiler timeout frequencies, and memory consumption under concurrency.",
      businessImpact: "Formulated technical specifications and concurrency limits that maximized server utilization and uptime.",
    },
    bullets: [
      "Developed full-stack web interface with Monaco editor integration and real-time execution output streaming.",
      "Containerized language execution runners in Docker to ensure strict process isolation and security.",
      "Integrated STOMP WebSockets with Spring Boot for low-latency bidirectional status updates.",
      "Logged and analyzed execution latencies and error distributions to fine-tune container resource allocation.",
    ],
    tags: [
      "Next.js",
      "Java Spring Boot",
      "Docker Sandboxes",
      "STOMP WebSockets",
      "SQL Telemetry",
      "Latency Analytics",
    ],
  },
  {
    id: "company-portal-tnpsc",
    title: "Company Portal & TNPSC Prime Platform",
    org: "CloudPixels Consultancy Services",
    period: "Jun 2023 – Aug 2023",
    duration: "3 months",
    category: "Web Applications • Page Traffic Analytics • Publishing Decisions",
    featured: false,
    tagline: "Content-driven digital publishing portals with page-level traffic analytics and cloud cost reduction.",
    overview:
      "Built dynamic web portals for educational and organizational publishing. Developed REST APIs in Spring Boot, analyzed page traffic trends to identify high-interest exam categories, and guided editorial strategy.",
    lifecycleHighlights: {
      engineering: "Developed responsive portal frontends and Spring Boot dynamic page generation APIs.",
      dataModeling: "Captured page views, category navigation paths, and repeat visitor sessions in relational tables.",
      analytics: "Constructed weekly traffic review dashboards comparing top-performing topics and user engagement.",
      businessImpact: "Offloaded high-volume PDF downloads to cloud storage to cut hosting expenses while speeding up load times.",
    },
    bullets: [
      "Engineered responsive web portals delivering dynamic content updates with Spring Boot backend services.",
      "Analyzed page traffic, user navigation patterns, and repeat visitor engagement across exam study categories.",
      "Created weekly dashboard reporting views for content stakeholders to guide topic publishing priorities.",
      "Reduced hosting and operational overhead by optimizing downloadable asset storage and delivery pipelines.",
    ],
    tags: [
      "HTML5 / JavaScript",
      "Spring Boot",
      "Traffic Analytics",
      "Weekly Dashboards",
      "Cost Reduction",
      "Process Optimization",
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Jain University (Online)",
    status: "Currently Pursuing | Expected Graduation: 2026",
    details:
      "Advanced software engineering, database architectures, distributed systems, and enterprise data analytics.",
    period: "2024 – 2026",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Islamiah College (Autonomous)",
    status: "Graduated: 2022 | CGPA: 7.89 / 10",
    details:
      "Core Computer Science, Algorithms & Data Structures, Relational Database Systems, Object-Oriented Programming.",
    period: "2019 – 2022",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Business Analysis Fundamentals",
    issuer: "Udemy",
    year: "2024",
  },
  {
    title: "SQL (Intermediate) Skill Certification",
    issuer: "HackerRank",
    year: "Issued Mar 2025",
  },
  {
    title: "SQL Basics Skill Certification",
    issuer: "HackerRank",
    year: "Issued Jan 2025",
  },
  {
    title: "Full Stack Development Certification",
    issuer: "SmartCliff Learning Solutions",
    year: "2023",
  },
];

export const ACTIVITIES = [
  "Organized blood donation and social relief camps in collaboration with Lions Club.",
  "Actively participated in community cricket and football charity tournaments.",
  "Engineered an open-source real-time YouTube Watch Party platform using Next.js & WebSockets deployed on Vercel.",
  "Maintained active GitHub repositories demonstrating Flutter applications, full-stack microservices, and BI data workflows.",
];
