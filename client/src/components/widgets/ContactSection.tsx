"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Title } from "../shared";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name is too short").max(50),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message is too short").max(500),
});

// Contact FC
const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = () => {
    // console.log(data); // Replace with your email service (e.g., Resend, Nodemailer)
    reset();
    alert("Message sent successfully!");
  };

  // Contact FC return
  return (
    <section className="py-8 px-4 md:px-12" id="contact">
      <Title
        title="Get In Touch"
        tagline="Let's collaborate or chat about opportunities!"
      />
      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-6 max-w-2xl mx-auto"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input
              placeholder="Your Name"
              {...register("name")}
              className={errors.name ? "border-destructive" : ""}
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
              {...register("email")}
              className={errors.email ? "border-destructive" : ""}
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
              {...register("message")}
              className={errors.message ? "border-destructive" : ""}
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
    </section>
  );
};

export default ContactSection;
