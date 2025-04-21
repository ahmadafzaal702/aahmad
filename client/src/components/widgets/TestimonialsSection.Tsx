'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import * as Slider from '@radix-ui/react-slider';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';

// data import
import { testimonials } from '@/data/data';

// Testimonials FC
function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Testimonials FC return
  return (
    <section className="py-12 px-4 md:px-12" id="testimonials">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold">Kind Words</h2>
        <p className="text-muted-foreground mt-2">
          What colleagues and clients say
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Testimonial Cards */}
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", damping: 20 }}
            className="flex"
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-full px-4"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-card border rounded-xl p-8 relative"
                >
                  <Quote className="absolute top-6 left-6 h-8 w-8 text-primary opacity-10" />
                  <p className="text-lg italic mb-6 relative z-10">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary to-secondary overflow-hidden">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full border hover:bg-secondary"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <Slider.Root
            value={[currentIndex]}
            max={testimonials.length - 1}
            onValueChange={([val]) => setCurrentIndex(val)}
            className="relative flex-1 h-2 flex items-center"
          >
            <Slider.Track className="bg-secondary relative h-1 rounded-full flex-1">
              <Slider.Range className="absolute h-full bg-primary rounded-full" />
            </Slider.Track>
            {testimonials.map((_, i) => (
              <Slider.Thumb
                key={i}
                className={`block h-3 w-3 rounded-full ${currentIndex === i ? 'bg-primary' : 'bg-border'} hover:bg-primary focus:outline-none`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </Slider.Root>

          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full border hover:bg-secondary"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Company Logos (Optional) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-8 mt-12 opacity-70"
      >
        {["TechStart", "FinTech Corp", "AI Ventures", "NextGen Labs"].map((company) => (
          <div key={company} className="text-muted-foreground font-medium">
            {company}
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default TestimonialsSection