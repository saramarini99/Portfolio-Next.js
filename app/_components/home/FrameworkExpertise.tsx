"use client";
import { useState } from "react";
import { logic } from "@/data/home/home";
import BaseButton from "../BaseButton";

export default function FrameworkExpertise() {
  const [activeTab, setActiveTab] = useState<"vue" | "next">("next");

  return (
    <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h3 className="text-xl font-bold dark:text-white">
            Conceptual Translation
          </h3>
          <p className="text-sm text-slate-500">
            How I bridge the gap between frameworks.
          </p>
        </div>
        <div className="flex gap-1 p-1 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5">
          {["vue", "next"].map((tab) => (
            <BaseButton
              key={tab}
              onClick={() => setActiveTab(tab as "vue" | "next")}
              className={
                activeTab === tab
                  ? "bg-amber-400 text-black border border-slate-200 font-medium text-xs font-mono px-4 py-2 rounded-lg transition-all"
                  : "text-white text-xs font-mono px-4 py-2 rounded-lg transition-all"
              }
            >
              {tab === "vue" ? "Nuxt Logic" : "Next.js Logic"}
            </BaseButton>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div className="inline-block px-2 py-0.5 rounded bg-violet-500/10 text-violet-500 text-[10px] font-bold font-mono">
            {logic[activeTab].concept}
          </div>
          <p className="text-sm dark:text-slate-300 leading-relaxed">
            {logic[activeTab].desc}
          </p>
        </div>
        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto">
          <pre className="text-xs font-mono leading-relaxed">
            <code className="text-violet-300">{logic[activeTab].code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
