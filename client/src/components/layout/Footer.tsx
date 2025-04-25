'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { SocialLinks, Contact, Copyright } from '../shared';

const navItems = [
  { slug: "home", name: "Home", href: "/" },
  { slug: "about", name: "About", href: "/about" },
  { slug: "projects", name: "Projects", href: "/projects" },
  { slug: "contact", name: "Contact", href: "/contact" },
];


// Footer FC
const Footer = () => {

  // Footer FC return
  return (
    <footer className="border-t bg-secondary/50">
      <div className="py-12 px-4 md:px-12">
        {/* Main Footer Content */}
        
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold">Afzaal Ahmad</span>
            </Link>
            <p className="text-muted-foreground">
            Smart code. Smarter AI. Future-ready.
            </p>
            <SocialLinks isTitle={false} />
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {navItems?.map((link) => (
                <li key={link.slug}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-semibold">Get In Touch</h3>
            <Contact />
          </motion.div>
        </div>

        {/* Copyright */}
        <Copyright />
        
      </div>
    </footer>
  );
}

export default Footer