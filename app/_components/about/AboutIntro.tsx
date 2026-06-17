"use client";

export default function AboutIntro() {
  return (
    <section>
      <p className="font-mono text-xs tracking-[0.3em] uppercase text-amber-500 dark:text-amber-400 mb-4">
        About me
      </p>
      <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-[1.05] mb-8">
        Sara Marini
      </h1>
      <p className="font-mono text-xs tracking-[0.2em] uppercase text-slate-400 dark:text-white/30 mb-6">
        Front-End Developer — Vue / React
      </p>
      <div className="space-y-4 text-slate-600 dark:text-white/60 text-lg leading-relaxed">
        <p className="mb-0">
          I&apos;m a front-end developer with about{" "}
          <span className="text-slate-900 dark:text-white font-semibold">
            4 years of production experience
          </span>{" "}
          specializing in Vue.js and Nuxt.
        </p>
        <p>
          I have a strong foundation in component-driven architecture, SSR,
          state management, and RESTful API integration — the same fundamentals
          that transfer directly into{" "}
          <span className="text-slate-900 dark:text-white font-semibold">
            React and Next.js
          </span>
          , which I&apos;m actively deepening through real projects. I&apos;m
          looking for a team where I can contribute on day one and keep growing
          in the React ecosystem.
        </p>
      </div>
    </section>
  );
}
