"use client";
import { useNavigation } from "@/utils/useNavigation";
import BaseButton from "@/components/BaseButton";

export default function HeroSection() {
  const { navigate } = useNavigation();

  return (
    <section className="relative py-32 text-center overflow-hidden">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
        Hi, I’m{" "}
        <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
          Sara
        </span>
      </h1>{" "}
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-4">
        Frontend Developer building modern, responsive web applications with
        React and Next.js.
      </p>
      <div className="flex justify-center gap-4">
        <BaseButton className="bg-violet-500 text-white
hover:bg-violet-600" onClick={() => navigate("/projects")}>
          View Projects
        </BaseButton>
        <BaseButton className="border border-gray-300 dark:border-gray-700
hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => navigate("/contact")} type="secondary">
          Contact Me
        </BaseButton>
      </div>
    </section>
  );
}
