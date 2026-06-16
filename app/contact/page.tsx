"use client";

import { useState } from "react";
import BaseLink from "@/components/BaseLink";
import BaseModal from "@/components/BaseModal";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen text-slate-900 dark:text-white flex flex-col">
      <section className="relative flex-1 flex items-center justify-center px-4 py-16 overflow-hidden">
        <div className="relative w-full">
          <div className="mb-12">
            <p className="text-amber-500 dark:text-amber-400 font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Get in touch
            </p>
            <h1 className="text-5xl sm:text-6xl font-black leading-[1.05] tracking-tight">
              Let&apos;s work
              <br />
              <span className="dark:text-white/20">together.</span>
            </h1>
          </div>

          <BaseModal isOpen={submitted} onClose={() => setSubmitted(false)}>
            <div className="w-[500px]">
              {" "}
              <div className="text-4xl mb-4">✦</div>
              <h2 className="text-2xl font-bold mb-2">Message sent!</h2>
              <p className="dark:text-white/50 text-sm">
                I&apos;ll get back to you as soon as possible.
              </p>
            </div>
          </BaseModal>

          <ContactForm onSubmitSuccess={() => setSubmitted(true)} />
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap gap-6 text-xs font-mono text-slate-400 dark:text-white/30">
            <BaseLink
              href="mailto:saramarini24137@gmail.com"
              className="hover:text-amber-400 transition-colors"
            >
              saramarini24137@gmail.com
            </BaseLink>
            <BaseLink
              href="https://www.linkedin.com/in/sara-marini-3834a424a/"
              className="hover:text-amber-400 transition-colors"
            >
              LinkedIn
            </BaseLink>
          </div>
        </div>
      </section>
    </main>
  );
}
