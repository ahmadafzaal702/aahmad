interface SkillSummaryI {
    slug: string;
    category: string;
    skills: string;
}

export const skillsSummary: SkillSummaryI[] = [
    {
        slug: "frontend",
        category: "Frontend Development",
        skills: "JavaScript, TypeScript, React.js, Next.js, Vue.js, Redux Toolkit, Tailwind CSS, Ant Design, Shadcn/ui, Material UI, HTML5, CSS3, RESTful APIs",
    },
    {
        slug: "backend",
        category: "Backend Development",
        skills: "Node.js, Express.js, FastAPI, Python, MongoDB, Mongoose, MySQL",
    },
    {
        slug: "mlai",
        category: "Machine Learning & AI",
        skills: "Pandas, Scikit-learn, TensorFlow, LangChain, Hugging Face, OpenAI API",
    },
    {
        slug: "devops",
        category: "DevOps",
        skills: "AWS (Lambda, S3, EC2), Docker, GitHub Actions, Vercel, Cloudinary",
    },
    {
        slug: "tools",
        category: "Tools",
        skills: "Jest, GIT, GitHub, Jira, Postman, Figma",
    },
];














