import { motion } from "framer-motion";
import { School } from 'lucide-react'



const Education = ({ education }: { education: any }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            className="p-4 rounded-lg border"
        >
            <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <School className="h-5 w-5" />
                </div>
                <div>
                    <h4 className="font-medium">{education.degree}</h4>
                    <p className="text-sm text-muted-foreground"> {education.university} | {education.location} | {education.startYear} - {education.endYear}
                        <br />
                        CGPA: {education.cgpa}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}
export default Education;