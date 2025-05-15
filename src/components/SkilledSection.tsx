'use client';

import { useRef, useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaDatabase, FaTools, FaHtml5, FaCss3Alt, FaGitAlt, FaPython, FaLanguage,
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTypescript, SiMongodb, SiTailwindcss, SiJavascript, SiFastapi,
} from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';

const skillCards = [
  {
    title: 'Frontend',
    icon: <FaReact size={30} color="#61DBFB" />,
    skills: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
    ],
    borderColor: '#61DBFB',
  },
  {
    title: 'Backend',
    icon: <FaNodeJs size={30} color="#3C873A" />,
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express', icon: <FaNodeJs /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'SQL', icon: <FaDatabase /> },
    ],
    borderColor: '#3C873A',
  },
  {
    title: 'Tools & Platforms',
    icon: <FaTools size={30} color="#FFD700" />,
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'Postman', icon: <FaTools /> },
    ],
    borderColor: '#FFD700',
  },
  {
    title: 'AI & Programming',
    icon: <GiArtificialIntelligence size={30} color="#9C27B0" />,
    skills: [
      { name: 'Generative AI', icon: <GiArtificialIntelligence /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'FastAPI', icon: <SiFastapi /> },
      { name: 'LLMs', icon: <GiArtificialIntelligence /> },
    ],
    borderColor: '#9C27B0',
  },
  {
    title: 'Soft Skills',
    icon: <FaLanguage size={30} color="#00BFA5" />,
    skills: [
      { name: 'Communication', icon: <FaLanguage /> },
      { name: 'English (Fluent)', icon: <FaLanguage /> },
      { name: 'Hindi (Native)', icon: <FaLanguage /> },
    ],
    borderColor: '#00BFA5',
  },
];

const SkilledSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (el) {
      const maxScroll = el.scrollWidth - el.clientWidth;
      const currentScroll = el.scrollLeft;
      const progress = (currentScroll / maxScroll) * 100;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', handleScroll);
      return () => ref.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <Box sx={{ backgroundColor: '#0A0A0A', py: 10, px: { xs: 2, md: 8 }, color: 'white', textAlign: 'center' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
        My Skillset
      </Typography>

      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          gap: 4,
          mt: 6,
          pb: 2,
          scrollSnapType: 'x mandatory',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {skillCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            style={{ scrollSnapAlign: 'start', minWidth: '300px', flex: '0 0 auto' }}
          >
            <Card
              sx={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: `2px solid ${card.borderColor}`,
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                minHeight: 280,
                color: 'white',
                boxShadow: `0 0 20px ${card.borderColor}`,
                '&:hover': {
                  transform: 'scale(1.03)',
                  transition: '0.3s',
                },
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                  {card.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {card.title}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1.5,
                    justifyContent: 'center',
                    mt: 2,
                  }}
                >
                  {card.skills.map((skill) => (
                    <Box
                      key={skill.name}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        px: 2,
                        py: 1,
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                      }}
                    >
                      {skill.icon}
                      <Typography variant="body2">{skill.name}</Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>

      {/* Scroll progress bar */}
      <Box sx={{ mt: 2, width: '100%' }}>
        <LinearProgress
          variant="determinate"
          value={scrollProgress}
          sx={{
            height: 4,
            borderRadius: 2,
            backgroundColor: '#333',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#00E676',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default SkilledSection;
