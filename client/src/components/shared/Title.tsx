import { motion } from 'framer-motion'

const Title = ({ title, tagline }: { title: string, tagline: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
        >
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="text-muted-foreground mt-2">
                {tagline}
            </p>
        </motion.div>
    )
}

export default Title