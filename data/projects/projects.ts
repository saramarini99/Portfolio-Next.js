export const projects = [
  {
    id: "tabdeal",
    featured: true,
    title: "Tabdeal",
    framework: "Vue / Nuxt",
    frameworkColor: "emerald",
    year: "2025-2026",
    role: "Front-End Developer",
    description:
      "Large-scale cryptocurrency exchange platform. Led the migration from Nuxt 2 to Nuxt 3, improving performance, scalability, and SSR hydration. Worked within a 12-member team on SEO, reCAPTCHA, CI/CD pipelines, and release processes.",
    tags: [
      "Nuxt.js",
      "Vue",
      "Pinia",
      "Tailwind",
      "SSR",
      "SEO",
      "Webpack",
      "SWR",
    ],
    links: { live: "https://tabdeal.org/" },
  },
  {
    id: "ghabzino",
    featured: false,
    title: "Ghabzino Counter",
    framework: "Vue",
    frameworkColor: "emerald",
    year: "2022–2025",
    role: "Front-End Developer",
    description:
      "Admin panel for police offices and billing services. Built dynamic UI components with Vue 3 Options API and created a Design Language System to unify UI across the product suite.",
    tags: ["Vue 3", "Options API", "Pinia", "Sass", "Vite", "REST API"],
    links: { live: "https://counter.ghabzino.com/" },
  },
  {
    id: "portfolio",
    featured: false,
    title: "Personal Portfolio",
    framework: "Next.js / React",
    frameworkColor: "amber",
    year: "2026",
    role: "Solo project",
    description:
      "This portfolio — built to learn Next.js App Router, React hooks, server components, and TypeScript. Includes dark/light mode, dynamic routing, and a contact form.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "App Router", "SSR"],
    links: { live: "#", github: "https://github.com/saramarini99" },
  },
  {
    id: "minimench",
    featured: false,
    title: "Mini Mench",
    framework: "Vanilla",
    frameworkColor: "slate",
    year: "2023",
    role: "Front-End Developer",
    description:
      "Responsive landing page for a mobile game. The challenge was pixel-perfect responsiveness across all devices given a complex layered design.",
    tags: ["JavaScript", "CSS", "Sass", "Responsive Design"],
    links: { live: "http://minimench.ir/" },
  },
];

export const frameworkBadge: Record<string, string> = {
  emerald:
    "bg-emerald-400/10 text-emerald-600 dark:text-emerald-400 border-emerald-400/20",
  amber:
    "bg-amber-400/10 text-amber-600 dark:text-amber-400 border-amber-400/20",
  slate:
    "bg-slate-400/10 text-slate-500 dark:text-slate-400 border-slate-300/30 dark:border-slate-600/30",
};

export const filters = ["All", "Vue / Nuxt", "Next.js / React", "Vanilla"];
