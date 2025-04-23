'use client';

import { motion } from 'framer-motion';
import { Briefcase, CalendarDays, MapPin } from 'lucide-react';

// data import
import { experiences } from '@/data/experience';
import { Title } from '../shared';

// Experiences FC
function ExperienceSection() {
  
  // Experiences FC return
  return (
    <section className="py-12 px-4 md:px-12" id="experience">

      <Title title="Professional Journey" tagline="Where I've worked and what I've accomplished" />

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 h-full w-0.5 bg-border transform -translate-x-1/2 md:left-1/2" />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.slug}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`relative mb-8 pl-10 md:pl-0`}
          >
            {/* Timeline dot */}
            <div className={`absolute top-1.5 left-0 w-4 h-4 rounded-full bg-primary border-4 border-background md:left-1/2 md:transform md:-translate-x-1/2 ${index % 2 === 0 ? 'md:-translate-x-1/2' : 'md:translate-x-1/2'}`} />

            {/* Experience card */}
            <div className={`p-6 rounded-lg border bg-card shadow-sm`}>
              <div className="flex items-center gap-2 mb-1">
                <Briefcase className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">{exp.role}</h3>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="flex items-center gap-1.5 text-sm">
                  <CalendarDays className="h-4 w-4 text-muted-foreground" />
                  {exp.startDate} -  {exp.endDate}
                </span>
                <span className="flex items-center gap-1.5 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  {exp.location}
                </span>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Key Contributions:</h4>
                <ul className="space-y-2">
                  {exp.responsibilities?.map((item, i) => (
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

export default ExperienceSection;