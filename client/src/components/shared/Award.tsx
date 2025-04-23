import { motion } from "framer-motion";
import { Award } from 'lucide-react'
function Awards({ index, award }: { index: any, award: any }) {

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            viewport={{ once: true }}
            className="flex items-start gap-2 p-3 rounded-lg bg-secondary"
        >
            <Award className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
            <span className="text-sm">{award}</span>
        </motion.div>
    )
}

export default Awards;