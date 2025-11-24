import React from "react";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({
    title,
    description,
    imageUrl,
    projectUrl,
    technologies,
}) => {
    return (
        <div className="w-full max-w-sm mx-auto sm:max-w-none rounded-xl border border-slate-200 bg-white relative group overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            {/* Image Section */}
            <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                    src={typeof imageUrl === "string" ? imageUrl : imageUrl?.src || "/placeholder.svg"}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ objectPosition: "center 20%" }}
                    loading="lazy"
                />

                {/* Blurred Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10" />
            </div>

            {/* Content that slides up & fades in */}
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 text-white z-20 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 leading-tight">{title}</h3>
                <p className="text-xs sm:text-sm text-slate-100 mb-2 sm:mb-3 leading-relaxed line-clamp-2 sm:line-clamp-3">{description}</p>

                <div className="flex flex-wrap gap-1 sm:gap-2 mb-12 sm:mb-10 md:mb-10">
                    {technologies.map((tech, idx) => (
                        <span
                            key={idx}
                            className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs rounded-md bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 transition whitespace-nowrap"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Floating Action Button */}
                <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 sm:bottom-4 md:bottom-5 right-3 sm:right-4 md:right-5"
                >
                    <button
                        className="rounded-full h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 p-0 bg-blue-500 hover:bg-blue-600 shadow-md transform scale-90 group-hover:scale-100 transition-transform duration-300 flex items-center justify-center"
                        aria-label="View project"
                    >
                        <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-white" />
                    </button>
                </a>
            </div>
        </div>
    );
};


export default ProjectCard
