interface SkillSummaryI {
    slug: string;
    category: string;
    skills: string;
}

export const skillsSummary: SkillSummaryI[] = [
    {
        slug: "frontend",
        category: "Frontend Development",
        skills: "JavaScript, TypeScript, React.js, Next.js, React Native, Vue.js, Redux Toolkit, JSON, AJAX, SCSS/SASS, LESS, Tailwind CSS, Ant Design, Chakra UI, Shadcn/ui, Bootstrap, Material UI, DOM, ES6, jQuery, Hooks, Webpack, HTML5, CSS3, RESTful APIs, Third-Party Libraries.",
    },
    {
        slug: "backend",
        category: "Backend Development",
        skills: "Node.js/Express.js, FastAPI, Python, MongoDB, Mongoose, MySQL, PostgreSQL, Model-View-Controller (MVC), Pinecone.",
    },
    {
        slug: "mlai",
        category: "Machine Learning & AI",
        skills: "NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow, Keras, ANN, RNN, LSTM, Transformers, LangChain, Hugging Face, OpenAI API.",
    },
    {
        slug: "server",
        category: "Server & Domain",
        skills: "Vercel, AWS, AWS Amplify, Lambda Functions, API Gateway, S3 Bucket, Cloudinary.",
    },
    {
        slug: "soft",
        category: "Soft Skills",
        skills: "Teamwork, Communication, Troubleshooting, Problem Solving, Work Ethics, Open to Positive Criticism, Adaptability, Collaboration, Ability to Work Under Pressure, Attention to Details.",
    },
    {
        slug: "tools",
        category: "Tools/OS",
        skills: "Visual Studio Code, GIT, GitHub, Gitlab, Jira, Postman, Figma, Npm, Pip, Anaconda, Google Colab, Jupyter Notebooks.",
    },
];


// Dummy project data
export const projects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution with Next.js, Stripe integration, and inventory management.',
        tags: ['Next.js', 'Stripe', 'Tailwind CSS', 'Node.js'],
        image: '/project-ecommerce.jpg',
        githubUrl: '#',
        liveUrl: '#',
        category: 'fullstack'
    },
    {
        id: 2,
        title: 'AI Content Generator',
        description: 'AI-powered content creation tool using OpenAI API with custom templates and history tracking.',
        tags: ['React', 'OpenAI API', 'MongoDB', 'Express'],
        image: '/project-ai.jpg',
        githubUrl: '#',
        liveUrl: '#',
        category: 'ai'
    },
    {
        id: 3,
        title: 'Task Management App',
        description: 'Real-time collaborative task management with drag-and-drop interface and team features.',
        tags: ['React', 'Firebase', 'TypeScript', 'DnD'],
        image: '/project-tasks.jpg',
        githubUrl: '#',
        liveUrl: '#',
        category: 'frontend'
    },
];

// Dummy experience data - replace with your actual experiences
export const experiences = [
    {
        id: 1,
        role: "Senior Frontend Developer",
        company: "TechCorp Inc.",
        duration: "2022 - Present",
        location: "San Francisco, CA (Remote)",
        description: [
            "Lead the development of customer-facing dashboards using Next.js and TypeScript",
            "Implemented design system that improved development speed by 40%",
            "Mentored 3 junior developers in React best practices"
        ],
        skills: ["Next.js", "TypeScript", "React", "Tailwind CSS", "GraphQL"]
    },
    {
        id: 2,
        role: "Full Stack Developer",
        company: "Digital Solutions LLC",
        duration: "2019 - 2022",
        location: "New York, NY",
        description: [
            "Developed and maintained 10+ microservices using Node.js and Express",
            "Reduced API response times by 60% through query optimization",
            "Collaborated with UX team to implement responsive designs"
        ],
        skills: ["Node.js", "React", "MongoDB", "AWS", "Docker"]
    },
    {
        id: 3,
        role: "Junior Web Developer",
        company: "WebCraft Studios",
        duration: "2017 - 2019",
        location: "Boston, MA",
        description: [
            "Built 50+ client websites using modern JavaScript frameworks",
            "Implemented CI/CD pipelines reducing deployment time by 70%",
            "Won 'Employee of the Year' for innovative solutions"
        ],
        skills: ["JavaScript", "HTML/CSS", "PHP", "WordPress"]
    }
];

// Dummy blog data (replace with your actual content)
export const blogs = [
    {
        id: 1,
        title: "How I Built a Scalable E-Commerce Platform with Next.js",
        excerpt: "A deep dive into optimizing performance for high-traffic e-commerce sites using Next.js and edge functions.",
        date: new Date('2024-05-15'),
        category: "Projects",
        readTime: "8 min read",
        featured: true,
    },
    {
        id: 2,
        title: "State Management in React: Context API vs Zustand",
        excerpt: "Comparing modern state management solutions for React applications with real-world benchmarks.",
        date: new Date('2024-04-22'),
        category: "Tutorials",
        readTime: "6 min read",
    },
    {
        id: 3,
        title: "The Future of AI in Web Development",
        excerpt: "Exploring how AI tools like GitHub Copilot are changing the way we build web applications.",
        date: new Date('2024-03-10'),
        category: "Industry Trends",
        readTime: "5 min read",
    },
    {
        id: 4,
        title: "Migrating from REST to GraphQL: Lessons Learned",
        excerpt: "A step-by-step guide to transitioning APIs with minimal downtime and maximum efficiency.",
        date: new Date('2024-02-28'),
        category: "Tutorials",
        readTime: "10 min read",
    },
];

// Testimonial data
export const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "CTO at TechStart Inc.",
        content: "Working with [Your Name] was an absolute pleasure. Their expertise in Next.js optimization helped us reduce page load times by 60%. They're not just a developer but a problem-solver who understands business needs.",
        avatar: "/avatar-1.jpg",
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Senior Product Manager, FinTech Corp",
        content: "One of the most detail-oriented developers I've collaborated with. Delivered our AI integration project 2 weeks ahead of schedule while maintaining exceptional code quality.",
        avatar: "/avatar-2.jpg",
    },
    {
        id: 3,
        name: "David Rodriguez",
        role: "Startup Founder",
        content: "[Your Name] transformed our MVP into a scalable product. Their ability to explain technical concepts to non-technical stakeholders is remarkable. Will hire again!",
        avatar: "/avatar-3.jpg",
    },
];

// Social Links dummy data
export const sociallinks = [
    {

    }
]





