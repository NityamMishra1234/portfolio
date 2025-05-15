'use client';
import { Box, Typography, Button } from '@mui/material';
import Lottie from 'react-lottie';
import lottieAnimationData from '../statics/heroLoote.json';
import WebCanvasBackground from './WebCanvasBackground';

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        height: { xs: 'auto', md: 'fit' },
        minHeight: 'fit',
        backgroundColor: '#0A0A0A',
        color: 'white',
        px: { xs: 2, md: 6 },
        pt: { xs: 10, md: 8 },
        pb: { xs: 6, md: 6 },
        overflow: 'hidden',
      }}
    >
      <WebCanvasBackground />

      {/* Left Section */}
      <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' }, zIndex: 1 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
         Hi, I&apos;m Nityam Mishra
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 400, mb: 2 }}>
          Full Stack Developer | Tech Enthusiast | Problem Solver
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, opacity: 0.85 }}>
          I build scalable full-stack apps with seamless UIs and optimized backends. Passionate about cutting-edge tools and solving real-world problems.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' }, flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(90deg, #1F71FF, #2CFF89)',
              px: 4,
              py: 1.5,
              fontWeight: 600,
              borderRadius: '8px',
              '&:hover': {
                background: 'linear-gradient(90deg, #2CFF89, #1F71FF)',
              },
            }}
          >
            View My Projects
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: 'white',
              border: '2px solid #2CFF89',
              px: 4,
              py: 1.5,
              fontWeight: 600,
              borderRadius: '8px',
              '&:hover': {
                borderColor: '#1F71FF',
              },
            }}
          >
            Contact Me
          </Button>
        </Box>
      </Box>

      {/* Right Animation */}
      <Box sx={{ flex: 1, textAlign: 'center', mt: { xs: 6, md: 0 }, zIndex: 1 }}>
        <Lottie
          options={{ animationData: lottieAnimationData, loop: true, autoplay: true }}
          height={350}
          width={350}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
