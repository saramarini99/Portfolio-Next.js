"use client";

import SkillsGrid from "@/components/about/SkillsGrid";
import ExperienceTimeline from "@/components/about/ExperienceTimeline";
import AboutIntro from "@/components/about/AboutIntro";

export default function AboutPage() {
  return (
    <main className="min-h-screen text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 py-16 space-y-24">
        <AboutIntro />
        <SkillsGrid />
        <ExperienceTimeline />

        <section className="border border-amber-400/20 bg-amber-400/5 rounded-2xl p-8">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-amber-500 dark:text-amber-400 mb-4">
            Right now
          </p>
          <p className="text-slate-700 dark:text-white/70 leading-relaxed">
            Alongside coding in Vue and Nuxt, I&apos;m building React and Next.js
            projects that cover the things companies care about: App Router,
            data fetching patterns, custom hooks, global state, and TypeScript
            throughout. I&apos;m open to front-end roles where my Vue production
            background is seen as a transferable asset.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-amber-500 dark:text-amber-400 hover:gap-3 transition-all"
          >
            Get in touch →
          </a>
        </section>
      </div>
    </main>
  );
}
