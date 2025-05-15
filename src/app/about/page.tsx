'use client'

import { motion } from 'framer-motion'
import StarsCanvas from '@/components/StarBackground'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WebCanvasBackground from '../../components/WebCanvasBackground'
export default function AboutPage() {
  return (
    <>
    <Navbar/>
    
    <div className="relative min-h-screen bg-black text-white px-6 py-20 overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black z-0" />
      <StarsCanvas />
      <WebCanvasBackground/>
      <div className="relative z-10 max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-cyan-400">Nityam Mishra</h1>
          <p className="text-zinc-300 mt-2 text-xl">Full Stack Developer • AI Innovator • Visionary Builder</p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg text-zinc-300 space-y-4"
        >
          <p>
            I’m a developer who merges technical expertise with creative vision to bring ideas to life. From designing modern web experiences to building AI-driven tools like InterviewAI, I believe in solving real-world problems with elegance and innovation.
          </p>
          <p>
            Currently focused on spiritual-tech and AI-based productivity tools. Passionate about the Bhagavad Gita, meaningful code, and building products that matter.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-cyan-300">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {[
              'Next.js',
              'TypeScript',
              'Tailwind CSS',
              'MongoDB',
              'Mongoose',
              'Zustand',
              'JWT',
              'Framer Motion',
              'OpenAI',
              'Gemini API',
              'Resend',
              'Speech Recognition',
              'TTS',
            ].map((tech) => (
              <span
                key={tech}
                className="bg-cyan-800/40 border border-cyan-600 text-sm px-4 py-2 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
        >
          <h2 className="text-2xl font-semibold text-cyan-300 mb-4">My Journey</h2>
          <div className="space-y-6 border-l border-cyan-700 pl-6">
            <div>
              <h3 className="text-lg font-semibold text-white">InterviewAI — Founder</h3>
              <p className="text-sm text-zinc-400">2024 - Present</p>
              <p className="text-zinc-300 mt-1">AI-powered mock interview platform with voice interaction, anti-cheating, and real-time scoring.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Spiritual-Tech Platform</h3>
              <p className="text-sm text-zinc-400">2025 - In Progress</p>
              <p className="text-zinc-300 mt-1">Building a knowledge center to blend Hindu philosophy with modern problem-solving.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Portfolio Builder</h3>
              <p className="text-sm text-zinc-400">2023</p>
              <p className="text-zinc-300 mt-1">Developed a fully featured portfolio app with project management, chatbot, and secure login system.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
