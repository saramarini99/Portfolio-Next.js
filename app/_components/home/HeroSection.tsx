"use client";

import { useNavigation } from "@/utils/useNavigation";
import BaseButton from "@/components/BaseButton";
import { pills } from "../../../data/home/home";

export default function HomePage() {
  const { navigate } = useNavigation();

  return (
    <div className="space-y-8">
      <section className="relative flex flex-col lg:flex-row items-stretch justify-between gap-12 overflow-hidden md:min-h-[600px]">
        <div className="flex-1 flex flex-col justify-start text-center lg:text-left z-10 md:min-h-[400px]">
          <div className="inline-flex w-fit items-center gap-2 px-3 py-1 mb-8 text-[10px] uppercase tracking-widest font-bold text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10 rounded-full border border-violet-100 dark:border-violet-500/20 mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
            </span>
            Vue · Nuxt · React · Next.js
          </div>

          <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-6 leading-[1.3] text-justify md:text-left">
            Building production web apps in{" "}
            <span className="text-violet-500 dark:text-violet-400">
              Vue, Nuxt
            </span>{" "}
            And
            <br />
            <span className="text-violet-500 dark:text-violet-400">
              React, Next.js
            </span>
            .
          </h1>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-lg lg:mx-0 mx-auto mb-10 leading-loose text-left">
            I&apos;m{" "}
            <span className="text-slate-900 dark:text-slate-50 font-semibold">
              Sara.
            </span>{" "}
            ~4 years shipping front-end products at scale - crypto platforms,
            citizen-services apps and design systems. Strong in
            Vue&nbsp;/&nbsp;Nuxt, actively building in
            React&nbsp;&amp;&nbsp;Next.js. Ready for either ecosystem.
          </p>

          <div className="flex flex-wrap justify-between lg:justify-start gap-4 mb-10 md:mb-0">
            <BaseButton
              className="bg-violet-600 text-white hover:bg-violet-700 px-8 py-3 text-sm font-semibold transition-all rounded-lg shadow-lg shadow-violet-500/20 w-[calc(50%-16px)]
"
              onClick={() => navigate("/projects")}
            >
              See my work
            </BaseButton>
            <BaseButton
              className="border border-slate-200 dark:border-slate-800 rounded-lg px-8 py-3 text-sm font-semibold transition-all w-[calc(50%-16px)]
"
              onClick={() => navigate("/about")}
              type="secondary"
            >
              About me
            </BaseButton>
          </div>
        </div>

        <div className="flex-1 items-center justify-center relative hidden lg:flex">
          <div className="absolute w-64 h-64 bg-violet-500/10 blur-[120px] rounded-full" />

          <div className="relative w-full max-w-[420px] bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl shadow-2xl">
            <div className="flex justify-between text-[10px] uppercase tracking-widest font-mono font-bold text-slate-400 mb-6">
              <span>Engineering pivot</span>
              <span className="text-violet-500">Active</span>
            </div>

            <div className="space-y-6 mb-6">
              <div className="space-y-2">
                <div className="flex justify-between text-[11px] dark:text-slate-300">
                  <span>Vue / Nuxt (production)</span>
                  <span className="text-green-500 font-bold">4 yrs</span>
                </div>
                <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-green-500 rounded-full" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-[11px] dark:text-slate-300">
                  <span>React / Next.js</span>
                  <span className="text-amber-500 font-bold animate-pulse">
                    Active projects
                  </span>
                </div>
                <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="w-[70%] h-full bg-amber-500 rounded-full" />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <p className="text-[9px] font-mono text-slate-400 uppercase tracking-widest mb-3">
                Currently working with
              </p>
              <div className="flex flex-wrap gap-2">
                {pills.map((pill) => (
                  <span
                    key={pill}
                    className="text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 px-3 py-1.5 rounded-lg"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
