'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Tuition Management System',
    description:
      'A full-featured platform to manage batches, students, fees, and attendance with real-time updates and smart dashboards.',
    techStack: ['React', 'Redux', 'Node.js', 'MongoDB'],
    github: 'https://github.com/your-repo/tms',
    demo: 'https://tms-demo.netlify.app',
    image: '/images/tms.png',
  },
  {
    title: 'PG Manager System',
    description:
      'Helps PG owners manage rooms, students, expenses, and payments efficiently, with monthly due alerts.',
    techStack: ['Next.js', 'Tailwind', 'MongoDB', 'JWT'],
    github: 'https://github.com/your-repo/pg-manager',
    demo: 'https://pgmanager.netlify.app',
    image: '/images/pg.png',
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 px-4 bg-black text-white" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12">🚀 Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <motion.div
            key={proj.title}
            whileHover={{ scale: 1.02 }}
            className="bg-[#111] p-6 rounded-2xl border border-gray-800 shadow-md hover:shadow-lg transition-all"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="rounded-lg mb-4 w-full h-48 object-cover border border-gray-700"
            />
            <h3 className="text-2xl font-semibold mb-2 text-cyan-400">{proj.title}</h3>
            <p className="text-sm text-gray-400 mb-3">{proj.description}</p>
            <div className="flex flex-wrap gap-2 text-sm mb-4">
              {proj.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white flex items-center gap-1"
              >
                <FaGithub /> Code
              </a>
              <a
                href={proj.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 flex items-center gap-1"
              >
                <FaExternalLinkAlt /> Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
