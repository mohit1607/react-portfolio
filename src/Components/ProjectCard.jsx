import React from "react";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({
    title,
    description,
    imageUrl,
    projectUrl,
    technologies,
}) => {
    // keep all the images dark
    return (
        <div className="w-full rounded-xl border border-slate-200 bg-white relative group overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            {/* Image Section */}
            <div className="relative w-full h-64 overflow-hidden">
                <img
                    src={typeof imageUrl === "string" ? imageUrl : imageUrl?.src || "/placeholder.svg"}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ objectPosition: "center 20%" }}
                />

                {/* Blurred Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10" />
            </div>

            {/* Content that slides up & fades in */}
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white z-20 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm text-slate-100 mb-3">{description}</p>

                <div className="flex flex-wrap gap-2 mb-10">
                    {technologies.map((tech, idx) => (
                        <span
                            key={idx}
                            className="px-2 py-1 text-xs rounded-md bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 transition"
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
                    className="absolute bottom-5 right-5"
                >
                    <button
                        className="rounded-full h-10 w-10 p-0 bg-blue-500 hover:bg-blue-600 shadow-md transform scale-90 group-hover:scale-100 transition-transform duration-300 flex items-center justify-center"
                        aria-label="View project"
                    >
                        <ExternalLink className="h-4 w-4 text-white" />
                    </button>
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
