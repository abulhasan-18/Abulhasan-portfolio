export type RoleId = "all" | "ba" | "data" | "swe";

export interface RoleConfig {
  id: RoleId;
  label: string;
  shortLabel: string;
  badge: string;
  tagline: string;
  heroAbout: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  iconName: "Code2" | "Database" | "Layers" | "Smartphone" | "Cloud" | "Cpu" | "BarChart3" | "FileSpreadsheet" | "Workflow" | "CheckCircle2" | "Server";
  skills: string[];
  roles: RoleId[];
}

export interface WorkExperienceItem {
  role: string;
  company: string;
  period: string;
  duration: string;
  summary: string;
  bullets: string[];
  skills: string[];
  roles: RoleId[];
}

export interface ProjectItem {
  id: string;
  title: string;
  org: string;
  period: string;
  duration: string;
  summaryByRole: Record<RoleId, string>;
  bulletsByRole: Record<RoleId, string[]>;
  tagsByRole: Record<RoleId, string[]>;
  category: string;
  featured: boolean;
  link?: string;
  github?: string;
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
  roles: RoleId[];
}

export const PERSONAL_INFO = {
  name: "MOHAMMED ABULHASAN M",
  phone: "+971 50 252 6797",
  email: "mdyahasan18@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohammed-abulhasan-256767235",
  github: "https://github.com/abulhasan-18",
  portfolio: "https://abulhasan-portfolio.vercel.app",
  location: "United Arab Emirates / Remote",
};

export const ROLES: Record<RoleId, RoleConfig> = {
  all: {
    id: "all",
    label: "End-to-End Product & Data",
    shortLabel: "Full Lifecycle Overview",
    badge: "App Developer • Data & Star Schema Modeler • Business Strategist",
    tagline: "I build mobile/web apps → architect SQL & star schemas → analyze application telemetry → drive strategic business decisions.",
    heroAbout:
      "Full-Lifecycle Technologist with 2+ years of hands-on experience at CloudPixels Consultancy Services. I specialize in building end-to-end solutions: engineering production Flutter mobile apps and Next.js web portals, architecting SQL dimensional data models & Star Schemas to capture user telemetry, performing deep data analytics in Power BI and Tableau, and translating empirical insights into actionable BRDs, process optimizations, and measurable business growth.",
    highlights: [
      "Full-Stack & Flutter Mobile Apps",
      "SQL & Star Schema Data Modeling",
      "App Telemetry & BI Dashboards",
      "BRD & Process Re-engineering",
      "Data-Driven Business Decisions",
    ],
  },
  ba: {
    id: "ba",
    label: "Business Analyst",
    shortLabel: "Business Analyst",
    badge: "Business Analyst",
    tagline: "BRD • Requirements Gathering • Process Mapping • SQL • Excel • Power BI • JIRA • Stakeholder Communication • UAT",
    heroAbout:
      "Detail-oriented Business Analyst with 2+ years of experience at CloudPixels Consultancy Services. Strong in gathering requirements, documenting BRDs, mapping business processes, and translating stakeholder needs into actionable solutions. Skilled in SQL, Excel, Power BI, and data analysis for validating business rules, analyzing product telemetry from apps, and supporting data-driven decisions. Comfortable conducting gap analysis, preparing test cases, coordinating UAT sessions, and facilitating communication between technical teams and business stakeholders.",
    highlights: [
      "BRD & Requirements Gathering",
      "Process Mapping & Flowcharts",
      "Gap Analysis & Solution Design",
      "UAT Coordination & Test Cases",
      "SQL & Business Rule Validation",
    ],
  },
  data: {
    id: "data",
    label: "Data & BI Analyst",
    shortLabel: "Data & BI Analyst",
    badge: "Data & BI Analyst",
    tagline: "Power BI • SQL & Star Schema • Python • Excel • Tableau • Data Modeling • ETL • KPI Dashboards • Reporting Automation",
    heroAbout:
      "Data & BI Analyst with hands-on experience turning raw business and application data into clear dashboards, reports, and actionable insights. Proficient in SQL, Star Schema dimensional modeling, Power BI, Excel, Python, and Tableau with a strong focus on data modeling, KPI tracking, user retention, trend analysis, and reporting automation. Comfortable designing ETL-ready datasets, validating data integrity across mobile & web telemetry, and presenting findings to drive business decisions.",
    highlights: [
      "SQL & Star Schema Modeling",
      "Power BI & Tableau Dashboards",
      "App Telemetry & User Segmentation",
      "ETL Pipelines & Reporting Automation",
      "KPIs & Trend Forecasting",
    ],
  },
  swe: {
    id: "swe",
    label: "Software Engineer",
    shortLabel: "Software Engineer",
    badge: "Software & Flutter Developer",
    tagline: "Flutter & Dart • React.js & Next.js • Java & Spring Boot • REST APIs • SQL • Docker • Kubernetes • Supabase",
    heroAbout:
      "Experienced Software Engineer with 2+ years of hands-on experience in mobile and web application development. Proficient in Flutter, React.js, Node.js, and full-stack development with a strong background in scalable architectures, API integration, database schema design, and agile delivery. Proven track record of shipping production systems such as Tamil Calendars 365, a real-time online compiler platform, and a cost-efficient audio streaming app, while instrumenting robust data models for performance and analytics.",
    highlights: [
      "Flutter & Mobile Development",
      "React.js, Next.js & TypeScript",
      "Java & Spring Boot REST APIs",
      "Docker, WebSockets & Supabase",
      "Database & Telemetry Design",
    ],
  },
};

export const LIFECYCLE_STEPS = [
  {
    step: "01",
    title: "Develop Mobile & Web Apps",
    badge: "Software Engineering",
    description:
      "I design and build cross-platform mobile apps (Flutter/Dart) and responsive web applications (React, Next.js, Spring Boot) with clean architectures and REST APIs.",
    details: [
      "Production Flutter apps (Android & iOS)",
      "High-concurrency Java Spring Boot backends",
      "Real-time WebSocket platforms & Next.js portals",
    ],
  },
  {
    step: "02",
    title: "Model Data & Star Schemas",
    badge: "Data Architecture",
    description:
      "I architect normalized OLTP database schemas and denormalized dimensional Star Schemas (Fact & Dimension tables) to capture application events and user interactions.",
    details: [
      "Star Schema & Dimensional Data Modeling",
      "Complex SQL querying, indexing & ETL pipelines",
      "PostgreSQL, Supabase, MySQL & Snowflake storage",
    ],
  },
  {
    step: "03",
    title: "Analyze & Uncover Insights",
    badge: "Data & BI Analytics",
    description:
      "I extract, clean, and analyze application telemetry using Power BI, Tableau, and Python, creating interactive dashboards to track user behavior and KPIs.",
    details: [
      "Interactive Power BI & Tableau dashboards",
      "User segmentation, cohort retention & heat maps",
      "Automated reporting workflows & anomaly detection",
    ],
  },
  {
    step: "04",
    title: "Drive Business Decisions & ROI",
    badge: "Business Analysis",
    description:
      "I translate empirical data and stakeholder requirements into comprehensive BRDs, process re-engineering, and strategic roadmap enhancements.",
    details: [
      "BRD documentation & Process Flow Mapping",
      "Data-backed feature prioritization & cost reduction",
      "UAT coordination and stakeholder alignment",
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Business Analysis & Strategic Decisioning",
    iconName: "Workflow",
    skills: [
      "BRD & Functional Specifications",
      "Business Process Mapping (As-Is / To-Be)",
      "Data-Driven Business Impact & ROI Analysis",
      "Gap Analysis & Solution Design",
      "UAT Coordination & Test Planning",
      "Stakeholder Management & JIRA Agile Backlogs",
    ],
    roles: ["ba", "all"],
  },
  {
    title: "BI, Visualization & Telemetry Reporting",
    iconName: "BarChart3",
    skills: [
      "Power BI (DAX, Calculated Measures, Modeling)",
      "Tableau Interactive Dashboards",
      "App User Segmentation & Cohort Analysis",
      "Advanced Excel (Formulas, Pivot, Modeling)",
      "KPI Dashboards & Retention Tracking",
      "Automated Reporting Pipelines",
    ],
    roles: ["data", "ba", "all"],
  },
  {
    title: "Databases, SQL & Star Schema Modeling",
    iconName: "Database",
    skills: [
      "Star Schema & Dimensional Modeling (Fact / Dim)",
      "Advanced SQL (Joins, CTEs, Window Functions)",
      "PostgreSQL, MySQL & Supabase",
      "Snowflake Cloud Data Warehousing",
      "Data Cleaning, Integrity & Schema Validation",
      "ETL Concepts & Pipeline Orchestration",
    ],
    roles: ["data", "swe", "ba", "all"],
  },
  {
    title: "Mobile & Frontend App Development",
    iconName: "Smartphone",
    skills: [
      "Flutter & Dart (Android & iOS)",
      "React.js & Next.js (TypeScript)",
      "Tailwind CSS & Responsive UI/UX",
      "App State Management & Offline Cache",
      "Cross-Platform UI Performance Optimization",
    ],
    roles: ["swe", "all"],
  },
  {
    title: "Backend, APIs & Distributed Workflows",
    iconName: "Server",
    skills: [
      "Java & Spring Boot Microservices",
      "Node.js & Express REST APIs",
      "STOMP WebSockets Real-Time Streaming",
      "Supabase (Auth, PostgreSQL, Row Level Security)",
      "Scalable API Architecture & Telemetry Capture",
    ],
    roles: ["swe", "all"],
  },
  {
    title: "Cloud, DevOps & Automation",
    iconName: "Cpu",
    skills: [
      "Python Scripting & Data Automation",
      "Docker Containerization & Multi-Environment Deployments",
      "Kubernetes Concepts & CI/CD Pipelines",
      "Git & GitHub Version Control",
      "Cost Optimization & Infrastructure Efficiency",
    ],
    roles: ["swe", "data", "all"],
  },
];

export const WORK_EXPERIENCES: Record<RoleId, WorkExperienceItem[]> = {
  all: [
    {
      role: "Software Engineer & Data/Business Analyst",
      company: "CloudPixels Consultancy Services",
      period: "Jan 2024 – Mar 2026",
      duration: "2 years 2 months",
      summary:
        "Engineered production mobile/web applications, architected SQL star schemas to capture application telemetry, analyzed product data in Power BI, and authored BRDs to guide business improvements.",
      bullets: [
        "Built and shipped production Flutter mobile apps and Next.js web platforms serving thousands of active users globally.",
        "Designed relational database schemas and dimensional Star Schemas to structure application event logs and user engagement data.",
        "Created Power BI dashboards and SQL reporting pipelines to analyze user behavior, retention trends, and feature adoption.",
        "Authored comprehensive BRDs and mapped process flows, translating data insights into direct feature prioritization and business cost savings.",
        "Facilitated stakeholder workshops, coordinated UAT testing phases, and managed sprint backlogs in JIRA.",
      ],
      skills: ["Flutter", "Next.js", "Spring Boot", "Star Schema", "SQL", "Power BI", "BRD", "UAT", "JIRA", "Docker"],
      roles: ["all"],
    },
    {
      role: "Associate / Intern Trainee (Full-Stack, BI & BA)",
      company: "CloudPixels Consultancy Services",
      period: "Jun 2023 – Dec 2023",
      duration: "6–7 months",
      summary:
        "Contributed to core web portal infrastructure, requirements mapping, data validation tasks, and reporting automation.",
      bullets: [
        "Built responsive web solutions and dynamic API flows while supporting senior engineers on active client projects.",
        "Supported structured business analysis methodologies, stakeholder interview notes, and BRD documentation.",
        "Prepared analytics datasets, wrote SQL queries, and generated weekly KPI performance summaries.",
      ],
      skills: ["Web Development", "SQL", "Excel", "Data Validation", "Requirements Mapping"],
      roles: ["all"],
    },
  ],
  ba: [
    {
      role: "Business Analyst",
      company: "CloudPixels Consultancy Services",
      period: "Jan 2024 – Mar 2026",
      duration: "2 years 2 months",
      summary:
        "Gathered business requirements, documented BRDs, mapped processes, and coordinated with development teams to deliver data-driven solutions.",
      bullets: [
        "Gathered business requirements, documented BRDs, mapped processes, and coordinated with development teams to deliver data-driven solutions.",
        "Supported UAT, validated business rules, and maintained project documentation for stakeholder alignment.",
        "Prepared BRDs and process flow diagrams for digital transformation projects.",
        "Conducted stakeholder interviews to gather and validate business requirements.",
        "Coordinated UAT sessions and prepared test cases to validate delivered solutions.",
        "Built SQL queries and Power BI dashboards to support data analysis and reporting.",
        "Maintained JIRA backlogs and tracked requirements through the project lifecycle.",
        "Facilitated communication between business stakeholders and development teams.",
      ],
      skills: ["BRD Documentation", "Process Mapping", "Stakeholder Communication", "UAT Coordination", "SQL", "Power BI", "JIRA & Confluence", "Gap Analysis"],
      roles: ["ba"],
    },
    {
      role: "Business Analyst Intern",
      company: "CloudPixels Consultancy Services",
      period: "Jun 2023 – Dec 2023",
      duration: "7 months",
      summary:
        "Supported requirements documentation, process mapping, and data validation tasks while learning structured business analysis methodologies.",
      bullets: [
        "Assisted with BRD documentation and stakeholder meeting notes.",
        "Mapped current-state and future-state business processes.",
        "Validated data outputs against business rules using SQL and Excel.",
        "Helped prepare UAT test cases and tracked defect resolution.",
      ],
      skills: ["BRD Assistance", "Current/Future State Mapping", "SQL Validation", "Excel", "UAT Test Cases", "Defect Tracking"],
      roles: ["ba"],
    },
  ],
  data: [
    {
      role: "Data & BI Analyst",
      company: "CloudPixels Consultancy Services",
      period: "Jan 2024 – Mar 2026",
      duration: "2 years 2 months",
      summary:
        "Built recurring dashboards and reporting workflows to translate operational data into clear business metrics.",
      bullets: [
        "Built recurring dashboards and reporting workflows to translate operational data into clear business metrics.",
        "Designed data models and Star Schemas, cleaned and validated datasets from multiple sources, and automated reporting tasks.",
        "Partnered with stakeholders to improve data quality, visibility, and decision-making.",
        "Developed complex SQL queries and data transformations to power high-impact Power BI and Tableau dashboards.",
        "Conducted trend analysis, user segmentation, and metric anomaly detection across production applications.",
      ],
      skills: ["Power BI", "Tableau", "SQL", "Star Schema", "Python", "Data Modeling", "ETL Concepts", "KPI Dashboards", "Reporting Automation"],
      roles: ["data"],
    },
    {
      role: "Data Analyst Intern (BI Track)",
      company: "CloudPixels Consultancy Services",
      period: "Jun 2023 – Dec 2023",
      duration: "6 months",
      summary:
        "Supported reporting and analysis tasks by preparing datasets, writing SQL queries, and assembling periodic KPI summaries.",
      bullets: [
        "Supported reporting and analysis tasks by preparing datasets, writing SQL queries, and assembling periodic KPI summaries.",
        "Helped streamline spreadsheet-based processes, documented data issues, and delivered concise findings for review by team leads.",
        "Validated raw data feeds for consistency, duplicates, and completeness across internal systems.",
      ],
      skills: ["SQL", "Excel", "Data Cleaning", "KPI Reporting", "Documentation", "Dataset Preparation"],
      roles: ["data"],
    },
  ],
  swe: [
    {
      role: "Associate Software Engineer",
      company: "CloudPixels Consultancy Services",
      period: "Jan 2024 – Mar 2026",
      duration: "2 years 2 months",
      summary:
        "Developed comprehensive mobile and web applications serving thousands of users globally, driving digital transformation initiatives across multiple platforms.",
      bullets: [
        "Developed comprehensive mobile and web applications serving thousands of users globally, driving digital transformation initiatives across multiple platforms.",
        "Contributed to cost optimization strategies, performance enhancements, and scalable solution architecture.",
        "Led cross-platform development projects while consistently exceeding performance targets, delivering innovative solutions ahead of schedule.",
        "Collaborated with cross-functional teams to translate business requirements into reliable production-ready software.",
        "Engineered REST APIs with Java Spring Boot & Node.js, integrated Supabase auth & PostgreSQL databases, and containerized services with Docker.",
      ],
      skills: ["Flutter & Dart", "React.js & Next.js", "Java & Spring Boot", "REST APIs", "PostgreSQL", "Supabase", "Docker", "Git / CI/CD"],
      roles: ["swe"],
    },
    {
      role: "Internship Trainee",
      company: "CloudPixels Consultancy Services",
      period: "Jun 2023 – Dec 2023",
      duration: "6 months",
      summary:
        "Designed and developed foundational web infrastructure and content management systems for organizational digital presence.",
      bullets: [
        "Designed and developed foundational web infrastructure and content management systems for organizational digital presence.",
        "Contributed to process automation, API development, and cost reduction initiatives.",
        "Built responsive web solutions while gaining hands-on experience in full-stack development methodologies and agile project delivery.",
        "Supported senior engineers in feature implementation, testing, and issue resolution across active projects.",
      ],
      skills: ["JavaScript", "HTML5 & CSS3", "API Integration", "Full-Stack Development", "Agile Methodologies", "Debugging"],
      roles: ["swe"],
    },
  ],
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "tamil-calendars-365",
    title: "Tamil Calendars 365 — Mobile & Web Platform",
    org: "CloudPixels Consultancy Services",
    period: "Aug 2025 – Mar 2026",
    duration: "8 months",
    category: "Cross-Platform App • SQL Star Schema • Power BI Analytics",
    featured: true,
    summaryByRole: {
      all: "Built a cross-platform calendar app (Flutter & Web), modeled user engagement data into SQL Star Schemas, analyzed event trends in Power BI, and implemented data-backed feature enhancements that increased user retention.",
      ba: "Gathered requirements and analyzed product usage data to understand user engagement, content popularity, and feature adoption across platforms.",
      data: "Analyzed product usage for the same cross-platform calendar experience to understand user engagement, content popularity, and update patterns across mobile and web. Focused on turning raw activity data into dashboards and insights that supported product improvements.",
      swe: "Led the end-to-end delivery of a cross-platform calendar platform that made localized date, festival, and event information more accessible to users on mobile and web with strong performance and maintainable content workflows.",
    },
    bulletsByRole: {
      all: [
        "Built cross-platform Flutter mobile app and responsive web experiences for daily localized calendar insights and festival data.",
        "Architected dimensional Star Schema in SQL (Fact_UserActivity, Dim_CalendarDate, Dim_FestivalEvent) to capture granular engagement telemetry.",
        "Developed Power BI dashboards to track daily active usage, regional event interest, and content popularity trends.",
        "Conducted gap analysis and utilized analytics to prioritize new feature delivery, resulting in enhanced user retention.",
      ],
      ba: [
        "Documented BRDs for content digitization and feature enhancements.",
        "Built Power BI dashboards to track daily usage and engagement metrics.",
        "Conducted gap analysis between current features and user requirements.",
        "Coordinated with development teams to prioritize feature delivery.",
        "Facilitated stakeholder feedback sessions to validate calendar content accuracy and release roadmap.",
      ],
      data: [
        "Built Power BI dashboards to track daily usage, page views, and festival content engagement.",
        "Cleaned and modeled data from SQL queries, spreadsheets, and export files for reporting.",
        "Added trend analysis to compare user interest across calendar dates, events, and regions.",
        "Highlighted content update patterns and usage spikes to support planning for future releases.",
        "Created user engagement metrics that enabled targeted feature and content prioritization.",
      ],
      swe: [
        "Built mobile and web experiences for daily calendar insights, festival schedules, and user-friendly navigation.",
        "Integrated multiple calendar systems to keep date and event information synchronized across platforms.",
        "Optimized performance to improve load times and reduce memory usage on a wide range of devices.",
        "Developed responsive interfaces that delivered a consistent user experience across mobile and desktop screen sizes.",
        "Streamlined content maintenance workflows for recurring festival and event data updates.",
      ],
    },
    tagsByRole: {
      all: ["Flutter", "Web App", "Star Schema", "Power BI", "SQL Modeling", "BRD", "Retention Analytics"],
      ba: ["BRD Documentation", "Requirements Gathering", "Gap Analysis", "Power BI", "Sprint Prioritization"],
      data: ["Power BI Dashboards", "Star Schema", "SQL Modeling", "Trend Analysis", "User Engagement Metrics"],
      swe: ["Flutter & Dart", "Cross-Platform", "Multi-Calendar Sync", "Performance Tuning", "Responsive UI"],
    },
  },
  {
    id: "christian-multimedia-app",
    title: "Christian Community Multimedia App",
    org: "CloudPixels Consultancy Services",
    period: "Mar 2024 – Oct 2025",
    duration: "19 months",
    category: "Media Streaming App • Audience Analytics • CMS Optimization",
    featured: true,
    summaryByRole: {
      all: "Engineered a Flutter multimedia streaming application, modeled playback metrics into a dimensional data warehouse, analyzed audience consumption in Power BI, and reduced infrastructure costs by 40% based on streaming usage patterns.",
      ba: "Analyzed media consumption patterns and gathered stakeholder requirements to improve content delivery and user experience.",
      data: "Analyzed media consumption for the same community multimedia app to measure sermon plays, video engagement, and recurring audience behavior. Used reporting outputs to understand traffic sources, page-level attraction, and content performance.",
      swe: "Designed and delivered a community-focused multimedia application for streaming sermons, videos, and shared digital resources in a single platform with dependable delivery, secure access, and cost-efficient infrastructure.",
    },
    bulletsByRole: {
      all: [
        "Designed and shipped a Flutter audio/video streaming app with Supabase authentication and centralized CMS.",
        "Structured user playback telemetry (Fact_MediaStream, Dim_UserSegment, Dim_ContentCategory) to analyze drop-off rates.",
        "Built Power BI dashboards with heat maps and page-level analysis to evaluate audience traffic channels and screen attraction.",
        "Translated media analytics into business optimizations, restructuring cloud storage to cut infrastructure expenses while maintaining quality.",
      ],
      ba: [
        "Prepared requirements documentation for content management features.",
        "Analyzed user engagement data to identify content improvement opportunities.",
        "Facilitated stakeholder workshops to validate solution designs.",
        "Coordinated UAT for new feature releases and documented feedback.",
        "Mapped digital publishing workflows to accelerate community sermon and event distribution.",
      ],
      data: [
        "Built Power BI dashboards to track user traffic, source channels, and platform engagement.",
        "Used heat maps and page-level analysis to identify which screens and sections attracted the most attention.",
        "Segmented users by content type, visit frequency, and repeat engagement behavior.",
        "Presented insights with charts and dashboards to support content planning and audience growth.",
        "Analyzed audio completion rates and streaming drop-offs to improve content curation.",
      ],
      swe: [
        "Developed a scalable application that organized audio, video, and supporting community content in one unified platform.",
        "Integrated external media services to simplify publishing workflows and centralize content delivery.",
        "Implemented secure authentication and access flows to improve reliability for protected user features.",
        "Optimized storage and delivery choices to reduce infrastructure costs while maintaining stable playback quality.",
        "Supported recurring streaming demand with dependable performance and intuitive content discovery.",
      ],
    },
    tagsByRole: {
      all: ["Flutter", "Audio/Video Streaming", "Star Schema", "Power BI", "Supabase", "Cost Optimization", "UAT"],
      ba: ["CMS Requirements", "Stakeholder Workshops", "UAT Releases", "User Journey Mapping", "Feedback Analysis"],
      data: ["Power BI Dashboards", "Heat Map Analysis", "User Segmentation", "Traffic Channel Attribution", "Audience Insights"],
      swe: ["Flutter", "Supabase Auth", "Media Streaming APIs", "Cost Optimization", "Scalable Architecture"],
    },
  },
  {
    id: "online-compiler-platform",
    title: "Real-Time Online Compiler Platform",
    org: "CloudPixels Consultancy Services",
    period: "Sep 2023 – Feb 2024",
    duration: "6 months",
    category: "Full-Stack Code Execution • Container Sandbox • Latency Telemetry",
    featured: true,
    summaryByRole: {
      all: "Built a containerized multi-language code execution engine in Docker & Spring Boot with Next.js frontend, logged execution telemetry into SQL, and analyzed runtime performance to optimize concurrency limits.",
      ba: "Engineered user experience workflows and technical specifications for a multi-language browser-based compiler and evaluation environment.",
      data: "Analyzed code execution latency, concurrent resource consumption, and runner error distributions across multi-language workloads.",
      swe: "Built a real-time code execution platform that allowed users to write, run, and review code directly in the browser with fast feedback, combining responsive frontend tooling with containerized backend execution.",
    },
    bulletsByRole: {
      all: [
        "Developed interactive Next.js interface with real-time editor feedback and code output streaming.",
        "Built containerized execution sandbox environments supporting multiple programming languages using Docker.",
        "Integrated STOMP WebSockets with Spring Boot backend for low-latency interactive execution status.",
        "Logged and evaluated execution latencies and compiler failure distributions to tune container resource limits.",
      ],
      ba: [
        "Defined functional specifications and user journeys for in-browser multi-language compilation and feedback.",
        "Identified edge cases in code timeout handling and concurrent execution limits to define system constraints.",
        "Coordinated with development and testing peers to validate language runner execution stability.",
      ],
      data: [
        "Monitored and evaluated code execution latencies, timeout frequencies, and resource usage patterns.",
        "Aggregated compiler status codes and runtime errors to detect bottlenecks in runner provisioning.",
        "Provided performance metrics that guided server container allocation and memory headroom tuning.",
      ],
      swe: [
        "Developed a full-stack interface for writing, executing, and reviewing code in real time.",
        "Added support for multiple programming languages through isolated and containerized execution environments.",
        "Implemented WebSocket-based updates to deliver low-latency feedback for execution status and output.",
        "Improved deployment consistency by standardizing services and environments with Docker.",
        "Designed backend workflows to handle concurrent execution requests with reliable isolation and stability.",
      ],
    },
    tagsByRole: {
      all: ["React / Next.js", "Java Spring Boot", "Docker", "WebSockets", "Multi-Language Sandbox", "Latency Analytics"],
      ba: ["Technical Specifications", "User Journey Design", "Concurrency Constraints", "Requirement Validation"],
      data: ["Latency Analytics", "Error Distribution", "Resource Monitoring", "Execution Metrics"],
      swe: ["Next.js", "Spring Boot", "Docker Sandboxes", "STOMP WebSockets", "Concurrency Isolation"],
    },
  },
  {
    id: "company-portal-tnpsc",
    title: "Company Portal & TNPSC Prime Platform",
    org: "CloudPixels Consultancy Services",
    period: "Jun 2023 – Aug 2023",
    duration: "3 months",
    category: "Web Applications • Page Traffic Analytics • Content Decisions",
    featured: false,
    summaryByRole: {
      all: "Delivered content-driven web portals with dynamic APIs, structured traffic logs, built weekly analytics dashboards to track top-performing topics, and guided editorial publishing decisions.",
      ba: "Mapped exam preparation and organizational content publishing workflows, ensuring user-friendly navigation and structured information architecture.",
      data: "Analyzed traffic and content performance for portal and education-focused website work to understand which pages drove the most engagement, reporting page trends and navigation behavior.",
      swe: "Delivered content-driven web platforms that supported both organizational communication and exam-focused digital publishing needs, featuring responsive UIs, efficient content delivery, and scalable backend support.",
    },
    bulletsByRole: {
      all: [
        "Built responsive web portals delivering dynamic content updates with Spring Boot and Supabase backend services.",
        "Analyzed page traffic, user navigation patterns, and repeat visitor engagement across key exam categories.",
        "Created weekly dashboard reporting views for content and operations teams to guide topic publishing.",
        "Reduced hosting and operational overhead by offloading high-bandwidth downloads to cloud storage without compromising UX.",
      ],
      ba: [
        "Analyzed user feedback and content access bottlenecks to redesign portal information hierarchy.",
        "Mapped digital publishing workflows for study materials, mock tests, and organizational updates.",
        "Maintained clear feature backlog and supported UAT testing for new portal releases.",
      ],
      data: [
        "Analyzed page traffic, content views, and repeat visits across the portals.",
        "Compared top-performing pages and content categories to identify high-interest topics.",
        "Built a dashboard view for quick weekly review by content and operations stakeholders.",
        "Supported better decision-making with trend-based summaries and clear reporting snapshots.",
      ],
      swe: [
        "Built responsive user interfaces for company and education-focused portals with clear content presentation.",
        "Developed backend APIs and dynamic page generation flows to publish large volumes of content efficiently.",
        "Improved user experience through better information structure, readability, and navigation.",
        "Reduced hosting and operational overhead by selecting cost-effective deployment and data delivery approaches.",
        "Delivered the platforms ahead of schedule while meeting functional and presentation requirements.",
      ],
    },
    tagsByRole: {
      all: ["Next.js / HTML5", "Spring Boot", "Traffic Analytics", "Cloud Storage", "Cost Optimization", "Editorial ROI"],
      ba: ["Information Architecture", "Content Workflows", "User Experience Analysis", "Stakeholder Reviews"],
      data: ["Traffic Analytics", "Content Performance", "Weekly Dashboards", "Trend Summaries"],
      swe: ["Responsive UI", "REST APIs", "Dynamic Page Generation", "Cost Reduction", "Performance"],
    },
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Jain University (Online)",
    status: "Currently Pursuing | Expected Graduation: 2026",
    details: "Advanced software engineering, database architectures, distributed systems, and enterprise data analytics.",
    period: "2024 – 2026",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Islamiah College (Autonomous)",
    status: "Graduated: 2022 | CGPA: 7.89 / 10",
    details: "Core Computer Science, Algorithms & Data Structures, Relational Database Systems, Object-Oriented Programming.",
    period: "2019 – 2022",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Business Analysis Fundamentals",
    issuer: "Udemy",
    year: "2024",
    roles: ["ba", "all"],
  },
  {
    title: "SQL (Intermediate) Skill Certification",
    issuer: "HackerRank",
    year: "Issued Mar 2025",
    roles: ["data", "ba", "swe", "all"],
  },
  {
    title: "SQL Basics Skill Certification",
    issuer: "HackerRank",
    year: "Issued Jan 2025",
    roles: ["data", "ba", "swe", "all"],
  },
  {
    title: "Full Stack Development Certification",
    issuer: "SmartCliff Learning Solutions",
    year: "2023",
    roles: ["swe", "data", "ba", "all"],
  },
];

export const ACTIVITIES = [
  "Organized blood donation and social relief camps in collaboration with Lions Club.",
  "Actively participated in community cricket and football charity tournaments.",
  "Engineered an open-source real-time YouTube Watch Party platform using Next.js & WebSockets deployed on Vercel.",
  "Maintained active GitHub repositories demonstrating Flutter applications, full-stack microservices, and BI data workflows.",
];
