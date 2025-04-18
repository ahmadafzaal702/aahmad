'use client';

import { motion } from 'framer-motion';
import { Briefcase, CalendarDays, MapPin } from 'lucide-react';

// Dummy experience data - replace with your actual experiences
const experiences = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2022 - Present",
    location: "San Francisco, CA (Remote)",
    description: [
      "Lead the development of customer-facing dashboards using Next.js and TypeScript",
      "Implemented design system that improved development speed by 40%",
      "Mentored 3 junior developers in React best practices"
    ],
    skills: ["Next.js", "TypeScript", "React", "Tailwind CSS", "GraphQL"]
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Digital Solutions LLC",
    duration: "2019 - 2022",
    location: "New York, NY",
    description: [
      "Developed and maintained 10+ microservices using Node.js and Express",
      "Reduced API response times by 60% through query optimization",
      "Collaborated with UX team to implement responsive designs"
    ],
    skills: ["Node.js", "React", "MongoDB", "AWS", "Docker"]
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "WebCraft Studios",
    duration: "2017 - 2019",
    location: "Boston, MA",
    description: [
      "Built 50+ client websites using modern JavaScript frameworks",
      "Implemented CI/CD pipelines reducing deployment time by 70%",
      "Won 'Employee of the Year' for innovative solutions"
    ],
    skills: ["JavaScript", "HTML/CSS", "PHP", "WordPress"]
  }
];

export function ExperienceSection() {
  return (
    <section className="container py-12" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold">Professional Journey</h2>
        <p className="text-muted-foreground mt-2">
          Where I've worked and what I've accomplished
        </p>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 h-full w-0.5 bg-border transform -translate-x-1/2 md:left-1/2" />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`relative mb-8 pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}
          >
            {/* Timeline dot */}
            <div className={`absolute top-1.5 left-0 w-4 h-4 rounded-full bg-primary border-4 border-background md:left-1/2 md:transform md:-translate-x-1/2 ${index % 2 === 0 ? 'md:-translate-x-1/2' : 'md:translate-x-1/2'}`} />

            {/* Experience card */}
            <div className={`p-6 rounded-lg border bg-card shadow-sm ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
              <div className="flex items-center gap-2 mb-1">
                <Briefcase className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">{exp.role}</h3>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="flex items-center gap-1.5 text-sm">
                  <CalendarDays className="h-4 w-4 text-muted-foreground" />
                  {exp.duration}
                </span>
                <span className="flex items-center gap-1.5 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  {exp.location}
                </span>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Key Contributions:</h4>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 mr-2" />
                      <span className="text-muted-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring" }}
                    viewport={{ once: true }}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}