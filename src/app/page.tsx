'use client';

import { Box, Typography, Button, Container } from '@mui/material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SkilledSection from '@/components/SkilledSection';
import WhatSetsMeApart from '@/components/WhatSetsMeApart';
import Workflow from '@/components/workflow';
import StarBackground from '@/components/StarBackground';
export default function HomePage() {
  return (
    <Box>
      <Navbar />
      <HeroSection/>
      <SkilledSection/>
      
      <WhatSetsMeApart/>
      {/* <WebCanvasBackground/> */}
      <Workflow/>
      
      <Footer />
      
      
      <StarBackground/>
    </Box>
  );
}
