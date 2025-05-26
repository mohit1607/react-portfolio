import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import coding from '../../../assets/images/coding.png'

const projects = [
    {
        title: 'Weather App',
        description: 'A weather forecasting app using OpenWeather API.',
        imageUrl: coding,
        github: 'https://github.com/yourname/weather-app',
        live: 'https://weatherapp.example.com',
    },
    {
        title: 'Todo App',
        description: 'Track tasks easily with this React-powered app.',
        imageUrl: coding,
        github: 'https://github.com/yourname/todo-app',
    },
    {
        title: 'Portfolio',
        description: 'My personal website showcasing all my work.',
        imageUrl: coding,
        live: 'https://portfolio.example.com',
    },
    {
        title: 'Chat App',
        description: 'Real-time chat application using Firebase.',
        imageUrl: coding,
        github: 'https://github.com/yourname/chat-app',
    },
]

const ProjectCardGrid = () => {
    return (
        <div className="w-full py-12 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] p-2 rounded-[18px] metallic-border"
                    >
                        <div className="aspect-[3/4] sm:aspect-[2/3] bg-white shadow-md rounded-[16px] overflow-hidden group relative">
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay */}
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent rounded-b-[16px] transition-all duration-300 h-20 group-hover:h-full overflow-hidden">
                                <div className="absolute bottom-4 left-4 right-4 transition-transform duration-300 transform group-hover:-translate-y-24">
                                    <h3 className="text-xl font-semibold text-white">
                                        {project.title}
                                    </h3>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                                    <p className="text-sm text-white mb-2">
                                        {project.description}
                                    </p>
                                    <div className="flex gap-3">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FaGithub
                                                    size={18}
                                                    className="text-white hover:text-blue-400"
                                                />
                                            </a>
                                        )}
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FaExternalLinkAlt
                                                    size={18}
                                                    className="text-white hover:text-green-400"
                                                />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectCardGrid
