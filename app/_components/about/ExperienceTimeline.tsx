import { timeline } from "@/data/about/about";

export default function ExperienceTimeline() {
  return (
    <section>
      <p className="font-mono text-xs tracking-[0.3em] uppercase text-amber-500 dark:text-amber-400 mb-8">
        Experience
      </p>
      <div className="space-y-12">
        {timeline.map((job) => (
          <div
            key={job.company}
            className="border-l-2 border-amber-400/40 pl-6 space-y-3"
          >
            <p className="font-mono text-xs text-slate-400 dark:text-white/30">
              {job.period}
            </p>
            <div>
              <h3 className="font-bold text-lg">{job.role}</h3>
              <p className="text-slate-500 dark:text-white/40 text-sm">
                {job.company}
              </p>
            </div>
            <ul className="space-y-1.5">
              {job.highlights.map((h) => (
                <li
                  key={h}
                  className="text-sm text-slate-600 dark:text-white/60 flex gap-2"
                >
                  <span className="text-amber-500 dark:text-amber-400 mt-0.5 shrink-0">
                    →
                  </span>
                  {h}
                </li>
              ))}
            </ul>
            <p className="text-xs font-mono text-slate-400 dark:text-white/25 pt-1">
              {job.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
