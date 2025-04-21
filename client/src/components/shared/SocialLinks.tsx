import { motion } from "framer-motion";
import { Linkedin, Github, Twitter } from 'lucide-react';

// SocialLinks FC
const SocialLinks = ({ isTitle }: { isTitle: boolean }) => {

    const socialLinks = [
        { icon: Linkedin, url: "https://linkedin.com/in/yourprofile" },
        { icon: Github, url: "https://github.com/yourusername" },
    ]
    // SocialLinks FC return
    return (
        <>
            <div className="space-y-4">
                {
                    isTitle && <h3 className="text-xl font-semibold">Follow Me</h3>
                }

                <div className="flex gap-4">
                    {socialLinks?.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 rounded-full bg-secondary text-primary hover:bg-primary/10"
                        >
                            <social.icon className="h-5 w-5" />
                        </motion.a>
                    ))}
                </div>
            </div>


        </>
    )
};

export default SocialLinks;