'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface SkillSummaryI {
  slug: string;
  category: string;
  skills: string;
}

const skillsSummary: SkillSummaryI[] = [
    {
        slug: "frontend",
        category: "Frontend Development",
        skills: "JavaScript, TypeScript, React.js, Next.js, React Native, Vue.js, Redux Toolkit, JSON, AJAX, SCSS/SASS, LESS, Tailwind CSS, Ant Design, Chakra UI, Shadcn/ui, Bootstrap, Material UI, DOM, ES6, jQuery, Hooks, Webpack, HTML5, CSS3, RESTful APIs, Third-Party Libraries.",
    },
    {
        slug: "backend",
        category: "Backend Development",
        skills: "Node.js/Express.js, FastAPI, Python, MongoDB, Mongoose, MySQL, PostgreSQL, Model-View-Controller (MVC), Pinecone.",
    },
    {
        slug: "mlai",
        category: "Machine Learning & AI",
        skills: "NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow, Keras, ANN, RNN, LSTM, Transformers, LangChain, Hugging Face, OpenAI API.",
    },
    {
        slug: "server",
        category: "Server & Domain",
        skills: "Vercel, AWS, AWS Amplify, Lambda Functions, API Gateway, S3 Bucket, Cloudinary.",
    },
    {
        slug: "soft",
        category: "Soft Skills",
        skills: "Teamwork, Communication, Troubleshooting, Problem Solving, Work Ethics, Open to Positive Criticism, Adaptability, Collaboration, Ability to Work Under Pressure, Attention to Details.",
    },
    {
        slug: "tools",
        category: "Tools/OS",
        skills: "Visual Studio Code, GIT, GitHub, Gitlab, Jira, Postman, Figma, Npm, Pip, Anaconda, Google Colab, Jupyter Notebooks.",
    },
];

export function SkillsSection() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (slug: string) => {
    setExpandedCategory(expandedCategory === slug ? null : slug);
  };

  return (
    <section className="container py-12" id="skills">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold">Technical Proficiencies</h2>
        <p className="text-muted-foreground mt-2">
          Tools and technologies I work with
        </p>
      </motion.div>

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