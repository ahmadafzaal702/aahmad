'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

import { Title } from '../shared';

// data import
import { skillsSummary } from '@/data/skills'


// Skills FC
function SkillsSection() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (slug: string) => {
    setExpandedCategory(expandedCategory === slug ? null : slug);
  };

  // Skills FC return
  return (
    <section className="py-8 px-4 md:px-12" id="skills">
      
      <Title title="Technical Proficiencies" tagline="Tools and technologies I work with" />

      <div className="mx-auto max-w-4xl space-y-4">
        {skillsSummary.map((category) => (
          <motion.div
            key={category.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * skillsSummary.indexOf(category) }}
            viewport={{ once: true }}
            className="border rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleCategory(category.slug)}
              className="flex w-full items-center justify-between p-6 text-left"
            >
              <h3 className="text-xl font-semibold">{category.category}</h3>
              {expandedCategory === category.slug ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>

            <AnimatePresence>
              {expandedCategory === category.slug && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <div className="flex flex-wrap gap-2">
                    {category.skills.split(', ').map((skill) => (
                      <motion.div
                        key={skill}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Badge
                          variant="outline"
                          className="px-3 py-1 text-sm font-medium"
                        >
                          {skill.trim()}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Animated proficiency meter */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 max-w-4xl mx-auto"
      >
        <h3 className="text-lg font-medium mb-4 text-center">Skill Proficiency</h3>
        <div className="space-y-3">
          {['Frontend Development', 'Backend Development', 'Machine Learning'].map((skill, index) => (
            <div key={skill} className="space-y-1">
              <div className="flex justify-between">
                <span>{skill}</span>
                <span className="text-muted-foreground">
                  {['Expert', 'Advanced', 'Intermediate'][index]}
                </span>
              </div>
              <motion.div
                className="h-2 bg-secondary rounded-full overflow-hidden"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`h-full ${index === 0 ? 'bg-primary' : index === 1 ? 'bg-blue-500' : 'bg-purple-500'}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${90 - index * 20}%` }}
                  transition={{ duration: 1.5, delay: 1 + index * 0.1 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default SkillsSection