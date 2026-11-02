/**
 * Portfolio content from Zainulabdeen_Noori_CV.pdf + confirmed QA details.
 */
export const ZAIN = {
  githubLogin: "zainnasseer",
  githubUserId: 196541309,
  displayName: "Zain Nasseer",
  legalName: "Zainulabdeen Naseer Noori",
  location: "Baghdad, Iraq",
  nationality: "Iraqi",
  phone: "+964 771 903 5744",
  email: "zainnaser18@gmail.com",
  handle: "zainnasseer",
  resumeUrl: "/Zainulabdeen_Noori_CV.pdf",
  heroTagline: "Backend developer · communications engineer · QA for streaming & APIs",
  roles: [
    "Backend Developer",
    "Communications Engineer",
    "Quality Assurance Analyst",
  ],
  bio: `Zainulabdeen Naseer Noori (Zain Nasseer) is a Communications Engineer and backend developer in Baghdad, Iraq, building reliable services with Node.js, Express.js, NestJS, Bun, and PostgreSQL. He combines a wireless systems, networking, and IoT engineering background with hands-on API design, JWT auth, and payment integrations.

He also works as a Quality Assurance Analyst—microservices and e-commerce testing with Postman, mobile UI regression, defect tracking in Trello, and tvOS QA for a video streaming app (timeline scrubbing, RTL localization, search filtering).

Zain earned a B.Sc. in Communications Engineering from the University of Information Technology and Communications (UoITC), specializing in Mobile Communications and Computing Engineering. He completed summer training at Zain Iraq HQ (top 10 pitched projects) and ships personal projects on GitHub as zainnasseer. Languages: Arabic (native) and English (fluent).`,
  avatarUrl: "https://avatars.githubusercontent.com/u/196541309?v=4",
  taglines: [
    { text: "Reliable APIs. Solid engineering.", active: true, order: 0 },
    { text: "Node · Nest · Postgres · QA", active: true, order: 1 },
  ],
  projects: [
    {
      repo: "bun-js-mini-payment-gateway",
      title: "Custom Payment Gateway",
      tags: ["Bun", "PostgreSQL", "Drizzle", "Jest"],
      featured: true,
      order: 0,
      customBlurb:
        "Bun/Node payment service with Drizzle ORM and PostgreSQL—idempotency keys, ACID transaction blocks, and a finite state machine for checkout flows.",
    },
    {
      repo: "e-com",
      title: "E-commerce REST API",
      tags: ["Express.js", "MongoDB", "JWT", "Stripe"],
      featured: true,
      order: 1,
      customBlurb:
        "Modular Express REST API with MongoDB, bcrypt + JWT auth, role-based access, Stripe payments, SMTP/OTP login, and hardening against common web attacks.",
    },
    {
      repo: "nest-js-practice",
      title: "NestJS REST API",
      tags: ["NestJS", "PostgreSQL", "TypeORM", "JWT"],
      featured: true,
      order: 2,
      customBlurb:
        "Layered NestJS API (controllers, services, modules, interceptors) with PostgreSQL via TypeORM—migrations, seeding, bcrypt, and JWT sessions.",
    },
    {
      repo: "esp32-c5-devkit-wifi-repeater",
      title: "ESP32-C5 Wi-Fi Repeater",
      tags: ["ESP32-C5", "Embedded C", "NAPT"],
      featured: true,
      order: 3,
      customBlurb:
        "Senior-year project: dual-band Wi-Fi range extender on ESP32-C5—low-level Wi-Fi APIs, NAT/NAPT routing, embedded firmware, and a management dashboard.",
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
      period: "Present",
      location: "Baghdad, Iraq · Remote",
      isCurrent: true,
      description: [
        "Manual API testing with Postman across microservice and e-commerce flows.",
        "Mobile application UI testing and structured regression.",
        "Defect management and triage in Trello with reproducible steps.",
      ],
      order: 0,
    },
    {
      role: "QA Engineer · tvOS Streaming",
      org: "Apple TV Video Application",
      period: "Recent",
      location: "Remote",
      isCurrent: false,
      description: [
        "Validated timeline scrubbing, playback edge cases, and player UX on tvOS.",
        "Tested RTL localization and layout for right-to-left locales.",
        "Verified search and catalog filtering behavior.",
      ],
      order: 1,
    },
    {
      role: "Summer Training",
      org: "Zain Iraq HQ",
      period: "Summer program",
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
      period: "Graduated",
      location: "Baghdad, Iraq",
      isCurrent: false,
      description: [
        "Specialization: Mobile Communications and Computing Engineering.",
        "Coursework: wireless and optical communications, IoT networking, mobile systems, cryptography, DSP, and soft computing.",
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
        { name: "Express.js", level: "Intermediate", iconPath: "/skills/express.svg" },
        { name: "NestJS", level: "Intermediate", iconPath: "/skills/express.svg" },
        { name: "Bun", level: "Intermediate", iconPath: "/skills/nodejs.svg" },
        { name: "REST APIs", level: "Intermediate", iconPath: "/skills/nodejs.svg" },
        { name: "JWT / bcrypt", level: "Intermediate", iconPath: "/skills/nodejs.svg" },
      ],
    },
    {
      category: "Database Management",
      items: [
        { name: "PostgreSQL", level: "Intermediate", iconPath: "/skills/postgresql.svg" },
        { name: "MySQL", level: "Intermediate", iconPath: "/skills/mysql.svg" },
        { name: "MongoDB", level: "Intermediate", iconPath: "/skills/mongodb.svg" },
        { name: "Drizzle ORM", level: "Intermediate", iconPath: "/skills/postgresql.svg" },
      ],
    },
    {
      category: "Programming Languages",
      items: [
        { name: "TypeScript", level: "Intermediate", iconPath: "/skills/typescript.svg" },
        { name: "JavaScript", level: "Intermediate", iconPath: "/skills/javascript.svg" },
        { name: "Dart / Flutter", level: "Intermediate", iconPath: "/skills/flutter.svg" },
        { name: "Python", level: "Beginner", iconPath: "/skills/ubuntu.png" },
        { name: "C / C++", level: "Intermediate", iconPath: "/skills/ubuntu.png" },
      ],
    },
    {
      category: "Quality Assurance",
      items: [
        { name: "Postman", level: "Expert", iconPath: "/images/analytical-skills.png" },
        { name: "Swagger", level: "Intermediate", iconPath: "/images/logical-thinking.png" },
        { name: "API Testing", level: "Expert", iconPath: "/images/logical-thinking.png" },
        { name: "Mobile UI Testing", level: "Expert", iconPath: "/images/collaboration.png" },
      ],
    },
    {
      category: "Tools & Workflow",
      items: [
        { name: "Git", level: "Intermediate", iconPath: "/skills/git.svg" },
        { name: "GitHub", level: "Intermediate", iconPath: "/skills/github.svg" },
        { name: "Docker", level: "Intermediate", iconPath: "/skills/docker.png" },
        { name: "VS Code", level: "Expert", iconPath: "/skills/ubuntu.png" },
      ],
    },
    {
      category: "Embedded & Networking",
      items: [
        { name: "ESP32-C5", level: "Intermediate", iconPath: "/skills/ubuntu.png" },
        { name: "IoT / Networking", level: "Intermediate", iconPath: "/skills/ubuntu.png" },
        { name: "MATLAB / Simulation", level: "Intermediate", iconPath: "/skills/ubuntu.png" },
      ],
    },
    {
      category: "Frontend Development",
      items: [
        { name: "Next.js", level: "Intermediate", iconPath: "/skills/nextjs.png" },
        { name: "React.js", level: "Intermediate", iconPath: "/skills/react.svg" },
      ],
    },
  ],
  services: [
    {
      title: "Backend Development",
      shortDescription: "Node, NestJS, Express, and Postgres-backed APIs.",
      description:
        "REST APIs with layered architecture, JWT authentication, ORM migrations, payment hooks, and production-minded error handling—matching the stack in my e-commerce and NestJS projects.",
      order: 0,
    },
    {
      title: "Quality Assurance",
      shortDescription: "API, mobile, and tvOS streaming validation.",
      description:
        "Postman-driven API testing, mobile UI regression, tvOS scenarios (scrubbing, RTL, search), and Trello-based defect workflows for microservices and e-commerce teams.",
      order: 1,
    },
    {
      title: "Embedded & IoT",
      shortDescription: "ESP32 networking and repeater firmware.",
      description:
        "Wi-Fi repeater and NAT/NAPT designs on ESP32-C5—bridging communications engineering coursework with shipped firmware prototypes.",
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
        "Zainulabdeen Naseer Noori (Zain Nasseer) is an Iraqi Communications Engineer and backend developer in Baghdad, with QA experience across APIs, mobile, and tvOS streaming. B.Sc. from UoITC (Mobile Communications and Computing Engineering).",
      order: 0,
    },
    {
      question: "What is Zain's professional background?",
      answer:
        "Backend-focused builder (Node.js, Express, NestJS, PostgreSQL) plus QA work on microservices, e-commerce, and Apple TV streaming. Summer training at Zain Iraq HQ with a top-10 project pitch.",
      order: 1,
    },
    {
      question: "What is Zain's tech stack?",
      answer:
        "Backend: Node.js, Bun, NestJS, Express, REST, JWT, Drizzle/TypeORM. Data: PostgreSQL, MySQL, MongoDB. Tools: Postman, Swagger, Docker, Git. Embedded: ESP32-C5, IoT networking. Also Flutter/Dart and Next.js for apps and this portfolio.",
      order: 2,
    },
    {
      question: "What projects should I look at?",
      answer:
        "E-commerce Express/Mongo API, NestJS/PostgreSQL API, Bun payment gateway with idempotency, ESP32-C5 Wi-Fi repeater thesis, Codecrafters shell, and this Next.js portfolio—all on GitHub (zainnasseer).",
      order: 3,
    },
    {
      question: "How can I contact Zain?",
      answer:
        "Email zainnaser18@gmail.com, connect on LinkedIn (zain-naseer), call +964 771 903 5744, or reach out on GitHub. Download the CV from the resume link on this site.",
      order: 4,
    },
  ],
  sectionVisibility: {
    testimonials: false,
    support: false,
  },
} as const;
