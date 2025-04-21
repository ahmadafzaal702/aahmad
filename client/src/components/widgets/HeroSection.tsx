'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import TypeWriter from '../Typewriter';

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

// Hero FC
function HeroSection() {
  // Hero FC return
  return (
    <motion.section
      className="min-h-[90vh] flex flex-col items-center justify-center text-center gap-8 pb-8 pt-4 md:pt-8"
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
          <span className="text-primary">
            Full Stack Developer | React.js | Next.js | Node.js
            {/* <TypeWriter /> */}
          </span>
        </motion.h1>

        <motion.p
          className="text-lg text-muted-foreground md:text-xl"
          variants={itemVariants}
        >
          I'm a full-stack developer passionate about building responsive, accessible web applications with modern technologies.
        </motion.p>
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
  );
}

export default HeroSection;