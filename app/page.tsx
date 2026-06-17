import BaseLink from "./_components/BaseLink";

export default function RootPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white flex flex-col transition-colors duration-300">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-violet-500/10 via-transparent to-amber-400/5 [background-image:linear-gradient(rgba(139,92,246,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.12)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black_40%,transparent_100%)]"></div>
      <div className="absolute -z-10 top-1/4 left-1/2 -translate-x-1/2 w-[480px] h-[480px] bg-violet-500/20 rounded-full blur-3xl"></div>

      <section className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="max-w-2xl w-full flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-[10px] uppercase tracking-widest font-bold text-violet-300 bg-violet-500/10 rounded-full border border-violet-400/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to opportunities
          </div>

          <p className="font-mono text-xs tracking-[0.3em] uppercase text-violet-400 mb-5">
            Front-End Developer
          </p>

          <h1 className="text-6xl sm:text-7xl font-black tracking-tight leading-[1.05] mb-3">
            Sara Marini
          </h1>

          <div className="h-px w-16 bg-gradient-to-r from-violet-500 to-amber-400 mb-6 opacity-70"></div>

          <p className="text-white/40 font-mono text-sm mb-5">
            Vue · Nuxt · React · Next.js
          </p>

          <p className="text-white/60 text-lg leading-relaxed max-w-lg mb-12">
            Strong in Vue&nbsp;/&nbsp;Nuxt, actively growing in
            React&nbsp;&amp;&nbsp;Next.js.
          </p>

          <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center">
            <BaseLink
              href="/home"
              className="flex justify-center items-center gap-2 bg-violet-500 hover:bg-violet-400 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 active:scale-95 shadow-lg shadow-violet-500/30"
            >
              View portfolio
            </BaseLink>

            <a
              href="/resume/Sara_Marini_Front.pdf"
              download
              className="flex items-center gap-2 border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] hover:border-amber-400/40 text-white/80 font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 active:scale-95"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download CV
            </a>

            <BaseLink
              href="/contact"
              className="flex items-center justify-center gap-2 border border-white/15 hover:bg-white/[0.04] text-white/50 hover:text-violet-300 font-mono text-sm px-7 py-3.5 rounded-xl transition-all duration-200"
            >
              Get in touch
            </BaseLink>
          </div>

          <div className="flex gap-6 mt-12 text-xs font-mono text-white/30">
            <BaseLink
              href="mailto:saramarini24137@gmail.com"
              className="hover:text-violet-300 transition-colors"
            >
              Email
            </BaseLink>
            <BaseLink
              href="https://www.linkedin.com/in/sara-marini-3834a424a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-300 transition-colors"
            >
              LinkedIn
            </BaseLink>
            <a
              href="https://github.com/saramarini99"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-300 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
