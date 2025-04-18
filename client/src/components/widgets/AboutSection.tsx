'use client';

import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Download, Award, School, BadgeCheck } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="container py-12" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-muted-foreground mt-2">
          My journey, education, and achievements
        </p>
      </motion.div>

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
            <h3 className="text-2xl font-bold">Your Name</h3>
            <p className="text-muted-foreground">Senior Full Stack Developer</p>
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

            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 p-3 rounded-lg bg-secondary"
            >
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <BadgeCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">12+</p>
                <p className="text-sm text-muted-foreground">Certifications</p>
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
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="p-4 rounded-lg border"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <School className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Master of Science in Computer Science</h4>
                    <p className="text-sm text-muted-foreground">Stanford University | 2018 - 2020</p>
                  </div>
                </div>
                <p className="text-muted-foreground pl-11">
                  Specialized in Artificial Intelligence and Machine Learning. Thesis on 
                  "Neural Networks for Natural Language Processing".
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="p-4 rounded-lg border"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <School className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Bachelor of Science in Software Engineering</h4>
                    <p className="text-sm text-muted-foreground">MIT | 2014 - 2018</p>
                  </div>
                </div>
                <p className="text-muted-foreground pl-11">
                  Graduated with Honors. Minor in Mathematics. President of Computer Science Club.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Honors & Certifications */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Honors & Certifications</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "AWS Certified Solutions Architect",
                "Google Professional Data Engineer",
                "Microsoft Certified: Azure Developer",
                "Dean's List (5 Semesters)",
                "Best Thesis Award 2020",
                "Hackathon Winner (2019)"
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2 p-3 rounded-lg bg-secondary"
                >
                  <Award className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                  <span className="text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}