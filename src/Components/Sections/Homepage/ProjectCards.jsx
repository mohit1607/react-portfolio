import coding from '../../../assets/images/coding.png'
import ProjectCard2 from './ProjectCard2'
import Dashboard from '../../../assets/images/dashboard.png'
import mockups from '../../../assets/images/mockups.png'
import gymapp from '../../../assets/images/gymappmobile.png'
import lj from '../../../assets/images/laxmijewellwers.png'
import nextjs from '../../../assets/images/skills/nextjs.png'
import python from '../../../assets/images/skills/python.png'
import aipowered from '../../../assets/images/skills/chatgpt.png'
import reactlogo from '../../../assets/images/skills/reactlogo.png'
import reactnative from '../../../assets/images/skills/reactnative.png'
import ts from '../../../assets/images/skills/ts.png'
import expo from '../../../assets/images/skills/expo.png'
import fastapi from '../../../assets/images/skills/fastapi.png'
import sanity from '../../../assets/images/skills/sanity.png'
import js from '../../../assets/images/skills/js.png'

const iconMap = {
    "Fastapi": { image: fastapi, alt: 'FastAPI', url: 'fastapi.tiangolo.com' },
    "AWS S3": { image: aipowered, alt: 'AWS S3', url: 'aws.amazon.com/s3/' },
    "Python": { image: python, alt: 'Python', url: 'python.org' },
    "SQL Model": { image: python, alt: 'SQLModel', url: 'sqlmodel.tiangolo.com' },
    "Pydantic": { image: python, alt: 'Pydantic', url: 'pydantic-docs.helpmanual.io' },
    "React": { image: reactlogo, alt: 'React', url: 'reactjs.org' },
    "Javascript": { image: js, alt: 'JavaScript', url: 'javascript.com' },
    "React Native": { image: reactnative, alt: 'React Native', url: 'reactnative.dev' },
    "Typescript": { image: ts, alt: 'TypeScript', url: 'typescriptlang.org' },
    "Expo": { image: expo, alt: 'Expo', url: 'expo.dev' },
    "Firebase": { image: aipowered, alt: 'Firebase', url: 'firebase.google.com' },
    "Redux": { image: reactlogo, alt: 'Redux', url: 'redux.js.org' },
    "Next.js": { image: nextjs, alt: 'Next.js', url: 'nextjs.org' },
    "Sanity": { image: sanity, alt: 'Sanity', url: 'sanity.io' }
}

const projects = [
    {
        title: 'School Management Server (backend)',
        description: 'Backend Server made with @Fastapi using Postgres with Vertical Slicing Architecture Satisfying the all needs of a School managment System',
        imageUrl: coding,
        github: 'https://firststepschool.xyz',
        // live: 'https://weatherapp.example.com',
        technologies: ["Fastapi", "AWS S3", "Python", "SQL Model", "Pydantic"]
    },
    {
        title: 'School Management Dashboard',
        description: 'A full-functional dashboard for school managment for my client',
        imageUrl: Dashboard,
        github: 'https://admin.firststepschool.xyz',
        // live: 'https://weatherapp.example.com',
        technologies: ["React", "Javascript"]
    },
    {
        title: 'First Step school Mobile app',
        description: 'A fully customized Mobile application made with Expo(react native) for the students and teachers, Students are updated with information and teachers can take attendance and upload the relevent things',
        imageUrl: mockups,
        github: 'https://github.com/babaji1607/school-app',
        // live: 'https://weatherapp.example.com',
        technologies: ["React Native", "Typescript", "Expo"]
    },
    {
        title: 'Gym Booking Mobile App',
        description: 'An app for gated community to book gym slots and manage their fitness activities, and manage in and out timings',
        imageUrl: gymapp,
        github: 'https://play.google.com/store/apps/details?id=com.newproject2&hl=en_IN',
        // live: 'https://weatherapp.example.com',
        technologies: ["React Native", "Typescript", "Firebase", "Redux"]
    },
    {
        title: 'Laxmi Jewellers online store',
        description: 'A simple ecommerce application for a local jeweller to showcase and sell their products online',
        imageUrl: lj,
        // github: '',
        github: 'https://www.laxmijewellers.shop/',
        technologies: ["Next.js", "Typescript", "Sanity"]
    },
    {
        title: 'Omzi Mobile App Performance Optimization',
        description: 'Optimized performance bottlenecks of Astrology app Omzi with thousands of daily users',
        imageUrl: 'https://play-lh.googleusercontent.com/vjr8ltNNdhXUcC6iJjM95YGoOBFxSbuNqcdSiLaTkbwUzor_EJwk6RLY2XnphGUz2KXaNndugp7oB73rq6QnZw=w480-h960-rw',
        // github: '',
        github: 'https://play.google.com/store/apps/details?id=com.hrish17.boltexponativewind&hl=en_IN',
        technologies: ["React Native", "Typescript", "Expo"]
    },

]

const ProjectCardGrid = () => {
    return (
        <main className="container mx-auto py-12 px-4 bg-slate-50">
            <h1 className="mb-8 text-3xl font-bold text-center text-slate-800">Our Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.reverse().map((project, idx) => {
                    const iconPack = project.technologies.map(tech => iconMap[tech] || { image: aipowered, alt: tech, url: '#' }).filter(Boolean)
                    return (
                        <ProjectCard2
                            key={idx + project.title}
                            projectTitle={project.title}
                            descritpion={project.description}
                            imageURL={project.imageUrl}
                            liveURL={project.github}
                            iconPack={iconPack}
                            idx={idx}
                        />
                    )
                })}
            </div>
        </main>
    )
}

export default ProjectCardGrid



