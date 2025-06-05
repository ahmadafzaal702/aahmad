import {
  HeroSection,
  SkillsSection,
  ProjectsSection,
  ExperienceSection,
  AboutSection,
  ContactSection,
} from "@/components/widgets";

export default function Home() {
  return (
    <main className="w-full overflow-hidden min-h-screen">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <AboutSection />
      {/* <BlogSection /> */}
      {/* <TestimonialsSection /> */}
      <ContactSection />
    </main>
  );
}
