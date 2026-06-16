"use client";

import HeroSection from "@/components/home/HeroSection";
import FrameworkExpertise from "@/components/home/FrameworkExpertise";

export default function Home() {
  return (
    <div className="py-16 px-4">
      <HeroSection></HeroSection>
      <FrameworkExpertise />
    </div>
  );
}
