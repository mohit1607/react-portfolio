import coding from '../../../assets/images/coding.png'
import ProjectCard from '../../ProjectCard'
import Dashboard from '../../../assets/images/dashboart.png'

const projects = [
    {
        title: 'School Management Server (backend)',
        description: 'Backend Server made with @Fastapi using Postgres with Vertical Slicing Architecture Satisfying the all needs of a School managment System',
        imageUrl: coding,
        github: 'https://github.com/babaji1607/first-step-school-server',
        // live: 'https://weatherapp.example.com',
        technologies: ["Fastapi", "AWS S3", "Python", "SQL Model", "Pydantic"]
    },
    {
        title: 'School Management Dashboard',
        description: 'A full-functional dashboard for school managment for my client',
        imageUrl: Dashboard,
        github: 'https://github.com/babaji1607/admin-dashboard',
        // live: 'https://weatherapp.example.com',
        technologies: ["React", "Javascript"]
    },
    {
        title: 'First Step school Mobile app',
        description: 'A fully customized Mobile application made with Expo(react native) for the students and teachers, Students are updated with information and teachers can take attendance and upload the relevent things',
        imageUrl: Dashboard,
        github: 'https://github.com/babaji1607/school-app',
        // live: 'https://weatherapp.example.com',
        technologies: ["React Native", "Typescript", "Expo"]
    },

]

const ProjectCardGrid = () => {
    return (
        <main className="container mx-auto py-12 px-4 bg-slate-50">
            <h1 className="mb-8 text-3xl font-bold text-center text-slate-800">Our Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <ProjectCard
                        title={project.title}
                        key={idx + project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        projectUrl={project.github}
                        technologies={project.technologies}
                    />
                ))}
            </div>
        </main>
    )
}

export default ProjectCardGrid



