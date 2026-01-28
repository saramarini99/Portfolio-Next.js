import BaseMotion from "@/components/BaseMotion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "../../data/projects/projects";

export default function Projects() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-14">Selected Projects</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <BaseMotion key={project.title} delay={index * 0.12}>
              <ProjectCard {...project} />
            </BaseMotion>
          ))}
        </div>
      </div>
    </section>
  );
}
