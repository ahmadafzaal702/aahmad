'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-bg-hero">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/40 via-background/80 to-background" />
        <div className="absolute bottom-0 left-0 right-0 top-1/2 bg-[radial-gradient(circle_600px_at_50%_200px,oklch(var(--primary)/0.25),transparent)]" />
      </div>

      {/* Content */}
      <motion.section
        className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center text-center gap-8 pb-8 pt-4 md:pt-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="max-w-3xl space-y-6"
          variants={itemVariants}
        >
          <motion.h1
            className="h-28 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Full Stack Developer | AI/ML Enthusiast
            </span>
          </motion.h1>

          <motion.i
            className="text-lg text-muted-foreground md:text-xl"
            variants={itemVariants}
          >
            Merging robust development with generative AI to build smarter digital experiences.
            <br />
            <span className="text-sm text-muted-foreground">Coding the future—where web apps meet intelligent AI systems.</span>
          </motion.i>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={itemVariants}
        >
          <Button size="lg" asChild>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </motion.a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </Button>
        </motion.div>
      </motion.section>

      {/* Animated Scrolling Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </div>
  );
}

export default HeroSection;