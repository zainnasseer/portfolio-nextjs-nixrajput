/**
 * Portfolio content from CV, LinkedIn, and developer identity notes.
 */
export const ZAIN = {
  githubLogin: "zainnasseer",
  githubUserId: 196541309,
  displayName: "Zain Naseer",
  legalName: "Zainulabdeen Naseer Noori",
  location: "Baghdad, Iraq",
  nationality: "Iraqi",
  phone: "+964 771 903 5744",
  email: "zainnaser18@gmail.com",
  handle: "zainnasseer",
  resumeUrl: "/Zainulabdeen_Noori_CV.pdf",
  /** Fallback About stats when GitHub cache/API is cold (updated from public GitHub profile). */
  profileStats: { years: 2, repos: 6, stars: 2, followers: 0 },
  heroTagline: "Backend APIs · QA on mobile & tvOS · embedded networking",
  roles: [
    "Backend Developer",
    "Quality Assurance Analyst",
    "Communications Engineer",
  ],
  bio: `Zainulabdeen Naseer Noori (Zain Nasseer) is a Communications Engineer and backend developer in Baghdad, Iraq. He builds fast, scalable APIs with Node.js, TypeScript, Bun, and Express.js, and designs relational data layers with PostgreSQL, SQLite, and Drizzle ORM. He is equally comfortable in QA—manual API testing with Postman, e-commerce flow validation, and multi-platform UI testing on mobile and tvOS.

Languages: native Arabic, fluent English (spoken and written).

Developer workflow: terminal-first with Homebrew, Postman CLI, jq, pgcli, and Antigravity IDE, plus multi-remote Git synchronization.

Zain earned a B.Sc. in Communications Engineering from UoITC (Mobile Communications and Computing Engineering), trained at Zain Iraq HQ (top 10 pitched projects), and practices advanced SQL tuning in Dockerized PostgreSQL with DBeaver, psql, and pgcli.`,
  avatarUrl: "https://avatars.githubusercontent.com/u/196541309?v=4",
  taglines: [
    { text: "Terminal-first. API-driven.", active: true, order: 0 },
    { text: "Postgres · Bun · Postman · tvOS QA", active: true, order: 1 },
  ],
  projects: [
    {
      repo: "bun-js-mini-payment-gateway",
      title: "Mini Payment Gateway",
      tags: ["Bun", "Drizzle", "PostgreSQL", "Jest"],
      featured: true,
      order: 0,
      customBlurb:
        "Architected a financial backend on Bun and Node.js with Drizzle ORM and PostgreSQL—idempotency keys, ACID transaction blocks, and finite state machines, with Jest coverage for critical paths.",
    },
    {
      repo: "esp32-c5-devkit-wifi-repeater",
      title: "ESP32 Wi-Fi Repeater",
      tags: ["ESP32-C5", "ESP-IDF", "lwIP", "802.11"],
      featured: true,
      order: 1,
      customBlurb:
        "Senior thesis: hardware Wi-Fi repeater on ESP32-C5—AP + STA mode with NAT support, embedded networking via ESP-IDF and lwIP, aligned with IEEE 802.11 fundamentals.",
    },
    {
      repo: "e-com",
      title: "E-commerce REST API",
      tags: ["Express.js", "MongoDB", "JWT", "Stripe"],
      featured: true,
      order: 2,
      customBlurb:
        "Modular Express REST API with MongoDB, bcrypt + JWT auth, role-based access, Stripe payments, SMTP/OTP login, and hardening against common web attacks.",
    },
    {
      repo: "nest-js-practice",
      title: "NestJS REST API",
      tags: ["NestJS", "PostgreSQL", "TypeORM", "Docker"],
      featured: true,
      order: 3,
      customBlurb:
        "Layered NestJS API with PostgreSQL via TypeORM—migrations, seeding, bcrypt, JWT sessions, and Dockerized Postgres for local schema work.",
    },
    {
      repo: "codecrafters-shell-typescript",
      title: "Codecrafters Shell",
      tags: ["TypeScript", "CLI"],
      featured: false,
      order: 4,
      customBlurb: "TypeScript CLI shell implementation (Codecrafters challenge).",
    },
    {
      repo: "portfolio-nextjs-nixrajput",
      title: "Portfolio",
      tags: ["Next.js", "Neon", "TypeScript"],
      featured: false,
      order: 5,
      customBlurb: "This portfolio—Next.js, Postgres on Neon, admin CMS, and ISR.",
    },
  ],
  experiences: [
    {
      role: "Quality Assurance Analyst",
      org: "Microservices & E-commerce",
      period: "2024 – Present",
      location: "Baghdad, Iraq · Remote",
      isCurrent: true,
      description: [
        "Manual API testing with Postman across microservice boundaries and e-commerce checkout flows.",
        "Mobile application UI testing and structured regression on consumer releases.",
        "Defect management in Trello with reproducible steps for engineering triage.",
      ],
      order: 0,
    },
    {
      role: "QA Engineer · Apple TV Streaming",
      org: "tvOS Video Application",
      period: "2024",
      location: "Remote",
      isCurrent: false,
      description: [
        "Rigorous UI and functional testing on tvOS for a video streaming product.",
        "Filed and tracked defects for timeline scrubbing, RTL localization, search filtering, and subtitle setting persistence.",
        "Validated playback edge cases and player UX across localized builds.",
      ],
      order: 1,
    },
    {
      role: "Summer Training",
      org: "Zain Iraq HQ",
      period: "2023",
      location: "Baghdad, Iraq",
      isCurrent: false,
      description: [
        "Ranked in the top 10 projects pitched to a specialized committee.",
        "Observed and contributed to real in-flight engineering work across teams.",
      ],
      order: 2,
    },
    {
      role: "B.Sc. · Communications Engineering",
      org: "University of Information Technology and Communications (UoITC)",
      period: "2023",
      location: "Baghdad, Iraq",
      isCurrent: false,
      description: [
        "Specialization: Mobile Communications and Computing Engineering.",
        "Senior thesis: ESP32-C5 Wi-Fi repeater (AP + STA, NAT/NAPT).",
        "University project: Flutter weather app using OpenWeather API.",
      ],
      order: 3,
    },
  ],
  skillGroups: [
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", level: "Intermediate", iconPath: "/skills/nodejs.svg" },
        { name: "TypeScript", level: "Intermediate", iconPath: "/skills/typescript.svg" },
        { name: "Bun", level: "Intermediate", iconPath: "/skills/bun.svg" },
        { name: "Express.js", level: "Intermediate", iconPath: "/skills/express.svg" },
        { name: "NestJS", level: "Intermediate", iconPath: "/skills/nestjs.svg" },
        { name: "REST APIs", level: "Intermediate", iconPath: "/skills/openapi.svg" },
      ],
    },
    {
      category: "Database Management",
      items: [
        { name: "PostgreSQL", level: "Intermediate", iconPath: "/skills/postgresql.svg" },
        { name: "SQLite", level: "Intermediate", iconPath: "/skills/sqlite.svg" },
        { name: "Drizzle ORM", level: "Intermediate", iconPath: "/skills/drizzle.svg" },
        { name: "SQL Optimization", level: "Intermediate", iconPath: "/skills/postgresql.svg" },
        { name: "MongoDB", level: "Intermediate", iconPath: "/skills/mongodb.svg" },
      ],
    },
    {
      category: "Quality Assurance",
      items: [
        { name: "Postman", level: "Expert", iconPath: "/skills/postman.svg" },
        { name: "API Testing", level: "Expert", iconPath: "/skills/postman.svg" },
        { name: "E-commerce QA", level: "Expert", iconPath: "/skills/shopify.svg" },
        { name: "Mobile UI Testing", level: "Expert", iconPath: "/skills/flutter.svg" },
        { name: "tvOS QA", level: "Expert", iconPath: "/skills/apple.svg" },
      ],
    },
    {
      category: "CLI & Workflow",
      items: [
        { name: "Homebrew", level: "Expert", iconPath: "/skills/homebrew.svg" },
        { name: "Postman CLI", level: "Intermediate", iconPath: "/skills/postman.svg" },
        { name: "jq", level: "Intermediate", iconPath: "/skills/jq.svg" },
        { name: "pgcli / psql", level: "Intermediate", iconPath: "/skills/postgresql.svg" },
        { name: "Git (multi-remote)", level: "Intermediate", iconPath: "/skills/git.svg" },
        { name: "Docker", level: "Intermediate", iconPath: "/skills/docker.png" },
      ],
    },
    {
      category: "Embedded & Networking",
      items: [
        { name: "ESP32-C5", level: "Intermediate", iconPath: "/skills/espressif.svg" },
        { name: "ESP-IDF / lwIP", level: "Intermediate", iconPath: "/skills/espressif.svg" },
        { name: "IEEE 802.11", level: "Intermediate", iconPath: "/skills/wifi.svg" },
      ],
    },
    {
      category: "Frontend Development",
      items: [
        { name: "Next.js", level: "Intermediate", iconPath: "/skills/nextjs.png" },
        { name: "React.js", level: "Intermediate", iconPath: "/skills/react.svg" },
        { name: "Flutter", level: "Intermediate", iconPath: "/skills/flutter.svg" },
      ],
    },
  ],
  services: [
    {
      title: "Backend Engineering",
      shortDescription: "Fast, scalable APIs with Node.js, TypeScript, Bun, and Express.",
      description:
        "Design and implement RESTful services with clear layering, auth, and data access—using Node.js, TypeScript, Bun, and Express.js for backends that stay maintainable under real traffic.",
      order: 0,
    },
    {
      title: "Quality Assurance & Testing",
      shortDescription: "Postman APIs, e-commerce flows, mobile & tvOS UI.",
      description:
        "Manual API testing with Postman, end-to-end e-commerce validation, and multi-platform UI testing on mobile and tvOS—including scrubbing, RTL, search, and subtitle persistence on streaming clients.",
      order: 1,
    },
    {
      title: "Database Management",
      shortDescription: "Schema design and performance with PostgreSQL & Drizzle.",
      description:
        "Relational schema design, migrations, and query tuning on PostgreSQL and SQLite with Drizzle ORM—often in Dockerized dev environments using DBeaver, psql, and pgcli.",
      order: 2,
    },
  ],
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/zainnasseer",
      username: "zainnasseer",
      order: 0,
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/zain-naseer-166a36345",
      username: "zain-naseer",
      order: 1,
    },
    {
      platform: "Email",
      url: "mailto:zainnaser18@gmail.com",
      username: "zainnaser18@gmail.com",
      order: 2,
    },
    {
      platform: "Phone",
      url: "tel:+9647719035744",
      username: "+964 771 903 5744",
      order: 3,
    },
  ],
  faqs: [
    {
      question: "Who is Zain Nasseer?",
      answer:
        "Zainulabdeen Naseer Noori (Zain Nasseer) is an Iraqi backend developer and QA analyst in Baghdad—native Arabic, fluent English—with a Communications Engineering degree from UoITC and work across APIs, tvOS streaming QA, and embedded Wi-Fi projects.",
      order: 0,
    },
    {
      question: "What does Zain specialize in?",
      answer:
        "Backend engineering (Node.js, TypeScript, Bun, Express), quality assurance (Postman, e-commerce, mobile and tvOS UI), and database management (PostgreSQL, SQLite, Drizzle, SQL performance tuning).",
      order: 1,
    },
    {
      question: "What is Zain's developer workflow?",
      answer:
        "Terminal-first tooling: Homebrew, Postman CLI, jq, pgcli, Antigravity IDE, and multi-remote Git sync—alongside Dockerized Postgres for schema and SQL tuning work.",
      order: 2,
    },
    {
      question: "What projects should I look at?",
      answer:
        "Mini payment gateway (Bun, idempotency, ACID, FSM, Jest), ESP32-C5 Wi-Fi repeater thesis, e-commerce Express API, NestJS/PostgreSQL API, Codecrafters shell, and this Next.js portfolio on GitHub (zainnasseer).",
      order: 3,
    },
    {
      question: "How can I contact Zain?",
      answer:
        "Email zainnaser18@gmail.com, LinkedIn (zain-naseer), phone +964 771 903 5744, or GitHub. CV available via the resume link on this site.",
      order: 4,
    },
  ],
  sectionVisibility: {
    testimonials: false,
    support: false,
  },
} as const;
