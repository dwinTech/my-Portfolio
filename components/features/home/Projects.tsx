

import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/features/home/SectionHeader";
import { ProjectCard } from "@/components/common/ProjectCard";
import { PROJECTS } from "@/constants/project";



export function Projects() {
  return (
    <Section id="projects" className="space-y-15">
      <SectionHeading
  title="Recent Projects"
  description="Here are some of the projects I've worked on recently."
  buttonLabel="View More"
  buttonHref="/projects"
/>
       
      {/* Project Card usage */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.slice(0, 3).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

     
    </Section>
  );
}