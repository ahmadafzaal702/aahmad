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
            "Built BI dashboards with React, JavaScript, and integrated.",
            "Added AI chatbot for real-time user interactions.",
            "Managed Agile workflows using Jira and Git.",
        ],
        skills: ["Next.js", "TypeScript", "Tailwind CSS", "MySql", "AWS", "Docker"]
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
            "Built frontend applications from scratch using ReactJS, NextJS, and modern CSS.",
            "Developed REST APIs with ExpressJS (Node) and integrated authentication using JWT.",
            "Managed DevOps & cloud infra using CI/CD tools and Git for version control.",
            "Collaborated cross-functionally with designers & developers in Agile workflows.",
            "Participated in the full life cycle of new website development projects.",
        ],
        skills: ["Node.js", "React", "MongoDB", "AWS", "Docker"]
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
            "Designed responsive UIs in React.js with Figma, Material UI, and Bootstrap.",
            "Managed state efficiently using Redux, Context API, and Redux Toolkit for data flow.",
            "Integrated RESTful APIs, handling payloads and responses for smooth frontend-backend connectivity.",
        ],
        skills: ["JavaScript", "React.js", "Redux Toolkit", "WordPress"]
    },
    {
        slug: "fiverr",
        role: "Web Developer",
        company: "Fiverr",
        startDate: "March 2019",
        endDate: "July 2020",
        isPresent: false,
        location: "Pakistan",
        responsibilities: [
            "Developed websites in WordPress and Shopify for US based clients.",
            "Expertise of creating front-end using HTML/HTML5, CSS/CSS3, Bootstrap.",
            "Customize themes according to the requirements with Cross Browser Compatibility.",
        ],
        skills: ["HTML/CSS", "JavaScript", "Shopify", "WordPress"]
    },
];