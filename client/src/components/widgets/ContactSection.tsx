'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

import { SocialLinks } from '../shared';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, 'Name is too short').max(50),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message is too short').max(500),
});

// Contact FC
const ContactSection = () =>  {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data); // Replace with your email service (e.g., Resend, Nodemailer)
    reset();
    alert('Message sent successfully!');
  };

  // Contact FC return
  return (
    <section className="py-12 px-4 md:px-24" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold">Get In Touch</h2>
        <p className="text-muted-foreground mt-2">
          Let's collaborate or chat about opportunities!
        </p>
      </motion.div>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                placeholder="Your Name"
                {...register('name')}
                className={errors.name ? 'border-destructive' : ''}
              />
              {errors.name && (
                <p className="text-sm text-destructive mt-1">
                  {errors.name.message as string}
                </p>
              )}
            </div>

            <div>
              <Input
                placeholder="Your Email"
                {...register('email')}
                className={errors.email ? 'border-destructive' : ''}
              />
              {errors.email && (
                <p className="text-sm text-destructive mt-1">
                  {errors.email.message as string}
                </p>
              )}
            </div>

            <div>
              <Textarea
                placeholder="Your Message"
                rows={5}
                {...register('message')}
                className={errors.message ? 'border-destructive' : ''}
              />
              {errors.message && (
                <p className="text-sm text-destructive mt-1">
                  {errors.message.message as string}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </motion.div>

        {/* Contact Info & Socials */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            
            <div className="space-y-3">
              <motion.a
                href="mailto:your.email@example.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-5 w-5 text-primary" />
                <span>your.email@example.com</span>
              </motion.a>

              <motion.a
                href="tel:+1234567890"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground"
              >
                <Phone className="h-5 w-5 text-primary" />
                <span>+1 (234) 567-890</span>
              </motion.a>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-muted-foreground"
              >
                <MapPin className="h-5 w-5 text-primary" />
                <span>San Francisco, CA (Remote)</span>
              </motion.div>
            </div>
          </div>

          {/* Social Links */}
          <SocialLinks isTitle={true} />
 
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;