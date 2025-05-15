'use client'

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa'
import { motion } from 'framer-motion'
import SolarSystemUI from './SolarSystemUI'
import StarBackground from './StarBackground'

export default function Footer() {
  return (
    <footer className="w-full bg-transparent text-white px-6 py-10 flex flex-col md:flex-row justify-between items-center relative overflow-hidden z-10">
      {/* Left Section */}
      <StarBackground/>
      <div className="flex flex-col space-y-4 z-10 text-center md:text-left">
        <h2 className="text-2xl font-bold text-cyan-400">Nityam Mishra</h2>
        <div className="flex justify-center md:justify-start space-x-4 text-sm text-zinc-300">
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>
        <div className="flex justify-center md:justify-start space-x-4 text-xl text-cyan-300">
          <a href="#" className="hover:text-white"><FaGithub /></a>
          <a href="#" className="hover:text-white"><FaLinkedin /></a>
          <a href="#" className="hover:text-white"><FaTwitter /></a>
        </div>
        <p className="text-xs text-zinc-500">© 2025 Nityam Mishra. All rights reserved.</p>
      </div>

      {/* Right Section - Orbiting Solar System */}
      <div className="w-96 h-fit relative mt-10 md:mt-0 mr-32 ">
        <SolarSystemUI />
      </div>
    </footer>
  )
}
