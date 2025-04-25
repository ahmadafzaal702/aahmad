import image1 from '@/assests/1.jpg';
import image2 from '@/assests/2.jpg';
import image3 from '@/assests/3.jpg';


// Dummy project data
export const projects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution with Next.js, Stripe integration, and inventory management.',
        tags: ['Next.js', 'Stripe', 'Tailwind CSS', 'Node.js'],
        image: image1,
        githubUrl: '#',
        liveUrl: '#',
        category: 'fullstack'
    },
    {
        id: 2,
        title: 'AI Content Generator',
        description: 'AI-powered content creation tool using OpenAI API with custom templates and history tracking.',
        tags: ['React', 'OpenAI API', 'MongoDB', 'Express'],
        image: image2,
        githubUrl: '#',
        liveUrl: '#',
        category: 'ai'
    },
    {
        id: 3,
        title: 'Task Management App',
        description: 'Real-time collaborative task management with drag-and-drop interface and team features.',
        tags: ['React', 'Firebase', 'TypeScript', 'DnD'],
        image: image3,
        githubUrl: '#',
        liveUrl: '#',
        category: 'frontend'
    },
];