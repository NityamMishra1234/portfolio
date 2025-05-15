'use client'

import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiMongodb,
  SiGit,
  SiGithub,
} from 'react-icons/si'
import { FaGlobe } from 'react-icons/fa'
import type { IconType } from 'react-icons'

const OrbitIcon = ({
  Icon,
  size,
  orbitRadius,
  duration,
  delay = 0,
  color,
}: {
  Icon: IconType
  size: number
  orbitRadius: number
  duration: number
  delay?: number
  color: string
}) => {
  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{
        width: `${orbitRadius * 2}px`,
        height: `${orbitRadius * 2}px`,
        marginLeft: `-${orbitRadius}px`,
        marginTop: `-${orbitRadius}px`,
        animation: `orbit ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
        transformOrigin: 'center center',
      }}
    >
      <div
        className="absolute"
        style={{
          left: '50%',
          top: 0,
          transform: `translateX(-50%)`,
        }}
      >
        <Icon size={size} color={color} />
      </div>
    </div>
  )
}

export default function SolarSystemUI() {
  const icons = [
    { Icon: SiHtml5, color: '#e34c26', radius: 60, duration: 5, delay: 0 },
    { Icon: SiCss3, color: '#264de4', radius: 80, duration: 6, delay: 0.5 },
    { Icon: SiJavascript, color: '#f0db4f', radius: 100, duration: 7, delay: 1 },
    { Icon: SiTypescript, color: '#3178c6', radius: 120, duration: 8, delay: 1.5 },
    { Icon: SiReact, color: '#61dafb', radius: 140, duration: 9, delay: 2 },
    { Icon: SiTailwindcss, color: '#38bdf8', radius: 160, duration: 10, delay: 2.5 },
    { Icon: SiNextdotjs, color: '#ffffff', radius: 180, duration: 11, delay: 3 },
    { Icon: SiNodedotjs, color: '#3c873a', radius: 200, duration: 12, delay: 3.5 },
    { Icon: SiMongodb, color: '#47A248', radius: 210, duration: 13, delay: 4 },
    { Icon: SiGit, color: '#f14e32', radius: 230, duration: 14, delay: 4.5 },
    { Icon: SiGithub, color: '#ffffff', radius: 250, duration: 15, delay: 5 },
  ]

  return (
    <div className="relative w-full h-[500px] bg-transparent overflow-hidden">
      {/* Central web technology "sun" */}
      <div
        className="absolute left-1/2 top-1/2 w-16 h-16 bg-yellow-400/90 rounded-full shadow-[0_0_40px_10px_rgba(255,255,0,0.5)] flex items-center justify-center animate-pulse"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <FaGlobe size={30} color="white" />
      </div>

      {/* Orbiting icons */}
      {icons.map(({ Icon, color, radius, duration, delay }, idx) => (
        <OrbitIcon
          key={idx}
          Icon={Icon}
          size={24}
          orbitRadius={radius}
          duration={duration}
          delay={delay}
          color={color}
        />
      ))}

      {/* Orbit rings */}
      {icons.map((_, i) => {
        const r = 50 + i * 20
        return (
          <div
            key={i}
            className="absolute border border-white/10 rounded-full"
            style={{
              width: `${r * 3}px`,
              height: `${r * 2}px`,
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%)`,
            }}
          />
        )
      })}
    </div>
  )
}
