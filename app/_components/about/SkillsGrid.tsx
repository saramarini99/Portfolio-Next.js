import { skills } from "../../../data/about/about";

export default function SkillsGrid() {
  return (
    <section>
      <p className="font-mono text-xs tracking-[0.3em] uppercase text-amber-500 dark:text-amber-400 mb-8">
        Skills
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="border border-slate-200 dark:border-white/10 rounded-2xl p-6 bg-white dark:bg-white/[0.02]"
          >
            <p className="text-xs font-mono text-slate-400 dark:text-white/30 uppercase tracking-widest mb-4">
              {category}
            </p>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-white/70 border border-slate-200 dark:border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
