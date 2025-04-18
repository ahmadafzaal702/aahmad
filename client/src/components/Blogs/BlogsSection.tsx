'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Dummy blog data (replace with your actual content)
const blogs = [
  {
    id: 1,
    title: "How I Built a Scalable E-Commerce Platform with Next.js",
    excerpt: "A deep dive into optimizing performance for high-traffic e-commerce sites using Next.js and edge functions.",
    date: new Date('2024-05-15'),
    category: "Projects",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "State Management in React: Context API vs Zustand",
    excerpt: "Comparing modern state management solutions for React applications with real-world benchmarks.",
    date: new Date('2024-04-22'),
    category: "Tutorials",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "The Future of AI in Web Development",
    excerpt: "Exploring how AI tools like GitHub Copilot are changing the way we build web applications.",
    date: new Date('2024-03-10'),
    category: "Industry Trends",
    readTime: "5 min read",
  },
  {
    id: 4,
    title: "Migrating from REST to GraphQL: Lessons Learned",
    excerpt: "A step-by-step guide to transitioning APIs with minimal downtime and maximum efficiency.",
    date: new Date('2024-02-28'),
    category: "Tutorials",
    readTime: "10 min read",
  },
];

export function BlogSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredBlogs = activeCategory === 'All' 
    ? blogs 
    : blogs.filter(blog => blog.category === activeCategory);

  const featuredBlog = blogs.find(blog => blog.featured);

  return (
    <section className="container py-12" id="blog">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold">My Blog</h2>
        <p className="text-muted-foreground mt-2">
          Thoughts on projects, tech, and industry trends
        </p>
      </motion.div>

      {/* Category Filters */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-2 mb-8"
      >
        {['All', 'Projects', 'Tutorials', 'Industry Trends'].map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </motion.div>

      {/* Featured Blog (Desktop) */}
      {featuredBlog && activeCategory === 'All' && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="hidden md:block mb-12"
        >
          <div className="border rounded-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="h-64 bg-gradient-to-r from-primary/10 to-secondary" />
              <div className="p-8">
                <Badge variant="outline" className="mb-3">
                  Featured Post
                </Badge>
                <h3 className="text-2xl font-bold mb-2">{featuredBlog.title}</h3>
                <p className="text-muted-foreground mb-4">{featuredBlog.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {format(featuredBlog.date, 'MMMM d, yyyy')} · {featuredBlog.readTime}
                  </span>
                  <Button variant="ghost">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Blog Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs
          .filter(blog => !blog.featured) // Hide featured in grid if viewing "All"
          .map((blog) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-48 bg-gradient-to-r from-primary/10 to-secondary" />
              <div className="p-6">
                <Badge variant="outline" className="mb-3">
                  {blog.category}
                </Badge>
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                <p className="text-muted-foreground mb-4">{blog.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {format(blog.date, 'MMM d, yyyy')} · {blog.readTime}
                  </span>
                  <Button variant="ghost" size="sm">
                    Read <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
      </div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Button variant="outline">
          View All Articles
        </Button>
      </motion.div>
    </section>
  );
}