import AboutIntro from '@/components/about/AboutIntro'
import SkillsGrid from '@/components/about/SkillsGrid';
// import ExperienceTimeline from '@/components/about/ExperienceTimeline';
// import PersonalInterests from '@/components/about/PersonalInterests';

export default function About() {
  return (
    <section className="max-w-4xl mx-auto space-y-24 p-4">
      <AboutIntro />
      <SkillsGrid />
      {/* <ExperienceTimeline />
      <PersonalInterests /> */}
    </section>
  );
}
