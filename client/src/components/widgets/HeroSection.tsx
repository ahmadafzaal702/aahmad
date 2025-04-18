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

export function HeroSection() {
  return (
    <motion.section
      className="container flex min-h-[80vh] flex-col items-center justify-center gap-8 pb-8 pt-4 text-center md:pt-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="max-w-3xl space-y-6"
        variants={itemVariants}
      >
        <motion.h1 
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          variants={itemVariants}
        >
          <span className="text-primary">
            <TypeWriter />
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

      {/* Optional animated scroll indicator */}
      <motion.div
        className="absolute bottom-8"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </motion.section>
  );
}