import {
  HeroSection, SkillsSection, ProjectsSection, ExperienceSection,
  AboutSection, ContactSection, TestimonialsSection
} from "@/components/widgets";

import { BlogSection } from "@/components/blogs";


export default function Home() {
  return (
    <main className="w-full overflow-hidden min-h-screen px-4">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <AboutSection />
      <BlogSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
