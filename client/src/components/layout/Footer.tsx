'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Phone, MapPin} from 'lucide-react';

import { SocialLinks } from '../shared';

const navItems = [
  { slug: "home", name: "Home", href: "/" },
  { slug: "about", name: "About", href: "/about" },
  { slug: "projects", name: "Projects", href: "/projects" },
  { slug: "contact", name: "Contact", href: "/contact" },
];


// Footer FC
const Footer = () => {
  const currentYear = new Date().getFullYear();

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
              Building digital experiences that matter.
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
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:ahmadafzaal703@gmail.com">ahmadafzaal703@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+971527483200">+971 52 7483200</a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Dubai, UAE</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t mt-12 pt-6 text-center text-sm text-muted-foreground"
        >
          <p>
            © {currentYear} Afzaal Ahmad. All rights reserved.
          </p>
          <p className="mt-2">
            Built with <span className="text-primary">Next.js</span> and <span className="text-primary">Shadcn/ui</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer