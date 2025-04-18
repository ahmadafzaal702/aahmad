'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Code, ExternalLink, Github } from 'lucide-react';

// Dummy project data
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with Next.js, Stripe integration, and inventory management.',
    tags: ['Next.js', 'Stripe', 'Tailwind CSS', 'Node.js'],
    image: '/project-ecommerce.jpg',
    githubUrl: '#',
    liveUrl: '#',
    category: 'fullstack'
  },
  {
    id: 2,
    title: 'AI Content Generator',
    description: 'AI-powered content creation tool using OpenAI API with custom templates and history tracking.',
    tags: ['React', 'OpenAI API', 'MongoDB', 'Express'],
    image: '/project-ai.jpg',
    githubUrl: '#',
    liveUrl: '#',
    category: 'ai'
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'Real-time collaborative task management with drag-and-drop interface and team features.',
    tags: ['React', 'Firebase', 'TypeScript', 'DnD'],
    image: '/project-tasks.jpg',
    githubUrl: '#',
    liveUrl: '#',
    category: 'frontend'
  },
  {
    id: 4,
    title: 'Health Analytics Dashboard',
    description: 'Data visualization dashboard for health metrics with custom charts and export functionality.',
    tags: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
    image: '/project-health.jpg',
    githubUrl: '#',
    liveUrl: '#',
    category: 'data'
  },
];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'fullstack', name: 'Full Stack' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'ai', name: 'AI/ML' },
  { id: 'data', name: 'Data Visualization' },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="container py-12" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <p className="text-muted-foreground mt-2">
          A selection of my recent work
        </p>
      </motion.div>

      {/* Category filters */}
      <motion.div 
        className="flex flex-wrap justify-center gap-2 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveCategory(category.id)}
            className="rounded-full"
          >
            {category.name}
          </Button>
        ))}
      </motion.div>

      {/* Projects grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative rounded-xl overflow-hidden border bg-card"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Project image */}
            <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                initial={{ opacity: 0.9 }}
                animate={{ 
                  opacity: hoveredProject === project.id ? 1 : 0.9,
                  scale: hoveredProject === project.id ? 1.03 : 1
                }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Project info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: hoveredProject === project.id ? 1 : 0,
                  y: hoveredProject === project.id ? 0 : 10
                }}
                transition={{ duration: 0.2 }}
                className="flex gap-2"
              >
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Hover overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0"
              animate={{ 
                opacity: hoveredProject === project.id ? 1 : 0 
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>

      {/* View more button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Button variant="outline">
          View All Projects
        </Button>
      </motion.div>
    </section>
  );
}