'use client';

import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  videoUrl:string;
  name:string;
  github:string;
  // add other fields you expect
}
export default function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative group overflow-hidden rounded-lg border border-gray-700 shadow-md hover:shadow-2xl transition duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full h-60 bg-black">
        {hovered ? (
          <video
            src={project.videoUrl}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center text-lg text-white">
            {project.name}
          </div>
        )}
      </div>

      <div className="p-4 bg-zinc-900">
        <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
        <p className="text-sm text-gray-400 line-clamp-3">{project.description}</p>

        <div className="mt-4 flex justify-between">
          <a
            href={project.link}
            target="_blank"
            className="text-sm bg-green-600 hover:bg-green-700 px-3 py-1 rounded flex items-center gap-1"
          >
            Live <FaExternalLinkAlt size={14} />
          </a>

          <a
            href={project.github}
            target="_blank"
            className="text-sm bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded flex items-center gap-1"
          >
            Code <FaGithub size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
