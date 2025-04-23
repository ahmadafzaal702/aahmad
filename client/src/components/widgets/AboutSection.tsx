'use client';

import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Download, Award } from 'lucide-react';

import { Education, Awards, Title } from '../shared';

// data imports
import { educationData } from '@/data/education';
import { awardsData } from '@/data/awards';

// About FC
export const AboutSection = () => {

  // About FC return
  return (
    <section className="py-12 px-4 md:px-12" id="about">
      
      <Title title="About Me" tagline="My journey, education, and achievements" />

      <div className="grid gap-12 md:grid-cols-3">
        {/* Profile Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start space-y-6"
        >
          <Avatar className="h-48 w-48 border-4 border-primary">
            <AvatarImage src="/profile.jpg" alt="Your Name" />
            <AvatarFallback>YN</AvatarFallback>
          </Avatar>

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold">Afzaal Ahmad</h3>
            <p className="text-muted-foreground">Full Stack Developer</p>
          </div>

          <Button className="w-full md:w-auto">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>

          {/* Quick Facts */}
          <div className="space-y-3 w-full">
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 p-3 rounded-lg bg-secondary"
            >
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">5+ Years</p>
                <p className="text-sm text-muted-foreground">Experience</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bio Column */}
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
                Passionate full-stack developer with expertise in modern web technologies.
                Specializing in building responsive, accessible applications with
                React, Next.js, and Node.js. Committed to writing clean,
                maintainable code and solving complex problems.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source
                projects, mentoring junior developers, or exploring new hiking trails.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Education</h3>
            <div className="space-y-6">

              {
                educationData?.map((education) => {
                  return (
                    <div key={education.slug}>
                      <Education education={education} />
                    </div>
                  )
                })
              }
            </div>
          </div>

          {/* Honors & Certifications */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Honors & Certifications</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {

                awardsData?.map((award, index) => {
                  return (
                    <div key={index}>
                      <Awards index={index} award={award} />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection