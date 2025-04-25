"use client";

import { motion } from "framer-motion";
import { Education, Awards, Title } from "../shared";

// data imports
import { educationData } from "@/data/education";
import { awardsData } from "@/data/awards";

// About FC
export const AboutSection = () => {
  // About FC return
  return (
    <section className="py-8 px-4 md:px-12" id="about">
      <Title
        title="About Me"
        tagline="My journey, education, and achievements"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="md:col-span-2 space-y-8"
      >
        {/* Personal Summary */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Personal Summary</h3>
          <div className="space-y-3 text-muted-foreground">
            <p>
              A highly motivated Web Applications Developer with over 5 years of
              experience and master’s qualified in IT, now expanding expertise
              in AI/ML integration for web applications. Skilled in building
              high-performance web applications using JavaScript, React.js,
              Next.js, and TypeScript. Passionate about writing clean code,
              collaborating in Agile teams, and innovation in AI-powered
              solutions.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Education</h3>
          <div className="space-y-6">
            {educationData?.map((education) => {
              return (
                <div key={education.slug}>
                  <Education education={education} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Honors & Certifications */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Honors & Certifications</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {awardsData?.map((award, index) => {
              return (
                <div key={index}>
                  <Awards index={index} award={award} />
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
