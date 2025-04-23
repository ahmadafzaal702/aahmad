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
        skills: "AWS (Lambda, S3), CI/CD, Docker, Vercel, Cloudinary",
    },
    // {
    //     slug: "soft",
    //     category: "Soft Skills",
    //     skills: "Teamwork, Communication, Troubleshooting, Problem Solving, Work Ethics, Open to Positive Criticism, Adaptability, Collaboration, Ability to Work Under Pressure, Attention to Details.",
    // },
    {
        slug: "tools",
        category: "Tools",
        skills: "GIT, GitHub, Jira, Postman, Figma",
    },
];














