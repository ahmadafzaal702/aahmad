// Experiences Types
interface ExperiencesInterface {
    slug: string;
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    isPresent: boolean;
    location: string;
    responsibilities: string[];
}

// Experiences Array
export const experiences = [
    {
        slug: "suadeo",
        role: "Web Developer",
        company: "Suadeo",
        startDate: "Dec 2023",
        endDate: "Present",
        isPresent: true,
        location: "Dubai, United Arab Emirates",
        responsibilities: [
            "Building scalable BI software using JavaScript, ReactJS, jQuery, and other libraries.",
            "Integrated AI-powered chatbot into the application for real-time interactions",
            "Led component-based architecture and implemented reusable UI modules.",
            "Participated in Agile sprints, using Jira for task management and Git for version control"
        ],
        skills: ["React.js", "TypeScript", "MySql", "AWS", "Docker"]
    },
    {
        slug: "lloyds",
        role: "React JS Developer",
        company: "Lloyds Knight International",
        startDate: "June 2022",
        endDate: "Nov 2023",
        isPresent: false,
        location: "Pakistan",
        responsibilities: [
            "Developed full-stack web applications using React.js, Next.js, Node.js, and Express.js.",
            "Implemented API-driven architecture and JWT-based authentication.",
            "Managed CI/CD pipelines and deployments using GitHub Actions and AWS.",
            "Collaborated cross-functionally with designers & developers in Agile workflows.",
            "Delivered polished, production-grade interfaces across 4+ client projects.",
        ],
        skills: ["React.js", "Next.js", "TypeScript", "Node/Express.js", "MongoDB", "AWS"]
    },
    {
        slug: "nerds",
        role: "Frontend Developer",
        company: "Nerds Studio",
        startDate: "Aug 2020",
        endDate: "May 2022",
        isPresent: false,
        location: "Pakistan",
        responsibilities: [
            "Developed responsive UI/UX designs in React.js using Figma, Material UI, and Bootstrap.",
            "Implemented efficient state management with Redux Toolkit and Context API.  ",
            "Integrated RESTful APIs and handled dynamic front-end data rendering.",
            "Contributed to React Native tasks for the development of Android and iOS mobile applications."
        ],
        skills: ["JavaScript", "React.js", "Redux Toolkit", "WordPress"]
    },
    {
        slug: "fiverr",
        role: "Web Developer",
        company: "@ Fiverr",
        startDate: "March 2019",
        endDate: "July 2020",
        isPresent: false,
        location: "Pakistan",
        responsibilities: [
            "Delivered responsive websites for US-based clients using WordPress and Shopify.  ",
            "Built custom front-end interfaces using HTML5, CSS3, and Bootstrap.",
            "Customized themes to meet unique business needs with full cross-browser compatibility.  ",
        ],
        skills: ["HTML/CSS", "JavaScript", "Shopify", "WordPress"]
    },
];