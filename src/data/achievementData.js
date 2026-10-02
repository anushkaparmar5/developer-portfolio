import HTMLCertificate from "../assets/png/HTML.png";
import CSSCertificate from "../assets/png/CSS.png";
import JSCertificate from "../assets/png/JS.png";

export const achievementData = {
    bio: "Certifications and continuous learning in modern frontend & full-stack development.",
    achievements: [
        {
            id: 1,
            title: 'React + Redux (Advanced State Management)',
            details: 'Mastered complex state management, custom hooks, async middleware, and performance optimization.',
            date: '2023',
            field: 'State Management',
            image: HTMLCertificate,
        },
        {
            id: 2,
            title: 'JavaScript ES6+ Objects & Core Concepts',
            details: 'Deep dive into asynchronous JavaScript, promises, event loop, closures, and ES6+ standards.',
            date: '2022',
            field: 'Core Languages',
            image: JSCertificate
        },
        {
            id: 3,
            title: 'Next.js Framework SSR & Modern Web Development',
            details: 'Server-side rendering, static site generation, API routes, and full-stack React capabilities.',
            date: '2023',
            field: 'Modern Web Frameworks',
            image: CSSCertificate
        }
    ]
}
