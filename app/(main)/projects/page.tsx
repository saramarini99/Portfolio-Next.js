"use client";

import { useState } from "react";
import BaseMotion from "@/components/BaseMotion";
import BaseButton from "@/components/BaseButton";
import ProjectCard from "@/components/ProjectCard";
import { projects, filters } from "../../../data/projects/projects";

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((p) => p.framework === active);

  return (
    <main className="min-h-screen text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="mb-12">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-amber-500 dark:text-amber-400 mb-4">
            Work
          </p>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-[1.05] mb-4">
            Projects
          </h1>
          <p className="text-slate-500 dark:text-white/40 text-sm max-w-md">
            Production work and personal projects across Vue, Nuxt, and React
            ecosystems.
          </p>
        </div>

        <div className="flex gap-1 p-1 w-fit rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 mb-12">
          {filters.map((f) => (
            <BaseButton
              key={f}
              onClick={() => setActive(f)}
              type="transparent"
              className={`text-xs font-mono px-4 py-2 rounded-lg transition-all duration-150 ${
                active === f
                  ? "bg-amber-400 text-black font-medium"
                  : "text-slate-400 dark:text-white/40 hover:text-slate-700 dark:hover:text-white"
              }`}
            >
              {f}
            </BaseButton>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="text-slate-400 dark:text-white/30 font-mono text-sm">
            No projects match this filter.
          </p>
        ) : (
          <BaseMotion>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {visible.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
            </div>
          </BaseMotion>
        )}
      </div>
    </main>
  );
}
