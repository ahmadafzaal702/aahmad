'use client'

import { motion } from 'framer-motion'
const Copyright = () => {
    const currentYear = new Date().getFullYear();

    return (
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
    )
}

export default Copyright