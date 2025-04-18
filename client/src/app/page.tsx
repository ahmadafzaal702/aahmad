import { HeroSection } from "@/components/widgets/HeroSection";
import { SkillsSection } from "@/components/widgets/SkillsSection";
import { ProjectsSection } from "@/components/widgets/ProjectsSection";
import { ExperienceSection } from "@/components/widgets/ExperienceSection";
import { AboutSection } from "@/components/widgets/AboutSection";
import { ContactSection } from "@/components/widgets/ContactSection";
import { BlogSection } from "@/components/Blogs/BlogsSection";
// import { TestimonialsSection } from "@/components/widgets/TestimonialsSection";

export default function Home() {
  return (
    <main className="min-h-screen px-4">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <AboutSection />
      <BlogSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
    </main>
  );
}
