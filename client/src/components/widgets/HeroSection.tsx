"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Award } from "lucide-react";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import profile from "@/assests/afzaal ahmad 2.jpeg";

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
      ease: "easeOut",
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
        className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center text-center gap-5 pb-6 pt-4 md:pt-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="max-w-3xl space-y-6" variants={itemVariants}>
          <Avatar className="mx-auto h-40 w-40 border-3 border-primary">
            <AvatarImage src={profile.src} alt="Afzaal Ahmad" />
            <AvatarFallback>AF</AvatarFallback>
          </Avatar>

          <motion.h1
            className="h-28 mb-2 text-4xl font-bold tracking-tight sm:text-5xl md:text-[3.2rem]"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Full Stack Developer | AI/ML Enthusiast
            </span>
          </motion.h1>

          {/* Quick Facts */}
          <div className="mx-auto w-80 md:w-100">
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 p-2 rounded-lg bg-popover border"
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

          <motion.i
            className="text-lg text-muted-foreground md:text-xl"
            variants={itemVariants}
          >
            Coding the future—where sleek web apps meet intelligent, powerful AI systems.
          </motion.i>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={itemVariants}
        >
          <Button size="lg" className="w-full md:w-auto" asChild>
            <motion.a
              href="/afzaal-ahmad-frontend-fullstack.pdf"
              download="afzaal-ahmad-frontend-fullstack.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
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
      {/* <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div> */}
    </div>
  );
}

export default HeroSection;
