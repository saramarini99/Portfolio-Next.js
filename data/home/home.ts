export const logic = {
  vue: {
    title: "Vue 3 Mastery",
    concept: "Reactive Proxies",
    code: "const user = reactive({ name: 'Sara' });\n// Direct mutation tracking\nuser.name = 'Engineer';",
    desc: "Architected custom composables and complex reactivity chains in Nuxt 3.",
  },
  next: {
    title: "Next.js Pivot",
    concept: "Immutability & Hooks",
    code: "const [user, setUser] = useState({ name: 'Sara' });\n// Intentional state transitions\nsetUser(prev => ({ ...prev, name: 'Engineer' }));",
    desc: "Translating state logic into React hooks and Server Components.",
  },
};

export const pills = [
  "App Router",
  "Server Actions",
  "SSR / SSG",
  "Pinia",
  "TypeScript",
  "REST APIs",
];
