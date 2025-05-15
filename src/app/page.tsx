'use client';

import dynamic from 'next/dynamic';
import { Box } from '@mui/material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SkilledSection from '@/components/SkilledSection';
import WhatSetsMeApart from '@/components/WhatSetsMeApart';
import Workflow from '@/components/workflow';

// ✅ Dynamically import StarBackground to disable SSR
const StarBackground = dynamic(() => import('@/components/StarBackground'), {
  ssr: false,
});

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SkilledSection />
      <WhatSetsMeApart />
      <Workflow />
      <Footer />
      <StarBackground />
    </div>
  );
}
