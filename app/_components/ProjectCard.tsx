import BaseLink from "@/components/BaseLink";
import { frameworkBadge } from "../../data/projects/projects";

interface Project {
  id: string;
  title: string;
  framework: string;
  frameworkColor: string;
  role: string;
  description: string;
  tags: string[];
  links: {
    live: string | null;
    github?: string | null;
  };
  year: string;
}

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      key={project.id}
      className="group flex flex-col rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-7 transition-all duration-300 hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-400/5 hover:-translate-y-0.5"
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span
            className={`text-xs font-mono px-2.5 py-1 rounded-lg border ${
              frameworkBadge[project.frameworkColor]
            }`}
          >
            {project.framework}
          </span>
        </div>
        <span className="text-xs font-mono text-slate-400 dark:text-white/25">
          {project.year}
        </span>
      </div>

      <h2 className="text-2xl font-black mb-1 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-200">
        {project.title}
      </h2>
      <p className="text-xs font-mono text-slate-400 dark:text-white/30 mb-4">
        {project.role}
      </p>

      <p className="text-sm text-slate-600 dark:text-white/55 leading-relaxed flex-1 mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-white/40 border border-slate-200 dark:border-white/10"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-5 mt-auto pt-5 border-t border-slate-100 dark:border-white/5">
        {project.links.live && (
          <BaseLink
            href={project.links.live}
            className="text-xs font-mono font-bold text-amber-500 dark:text-amber-400 uppercase tracking-widest flex items-center gap-1.5 hover:gap-3 transition-all duration-150"
          >
            View project →
          </BaseLink>
        )}
        {project.links.github && (
          <BaseLink
            href={project.links.github}
            className="text-xs font-mono text-slate-400 dark:text-white/30 hover:text-slate-700 dark:hover:text-white transition-colors uppercase tracking-widest"
          >
            GitHub ↗
          </BaseLink>
        )}
      </div>
    </div>
  );
}
