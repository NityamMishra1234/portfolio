"use client";

import { Box, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import {
  GiCircuitry,
  GiArtificialIntelligence,
  GiMeditation,
} from "react-icons/gi";
import { MdRocketLaunch } from "react-icons/md";

const edgeCards = [
  {
    title: "Systems Thinker",
    icon: <GiCircuitry size={32} color="#00BFA5" />,
    description:
      "I break down complex challenges into elegant, logical systems that scale.",
    borderColor: "#00BFA5",
  },
  {
    title: "Science + Scriptures",
    icon: <GiArtificialIntelligence size={32} color="#9C27B0" />,
    description:
      "I fuse the wisdom of ancient Hindu texts with modern AI to build something extraordinary.",
    borderColor: "#9C27B0",
  },
  {
    title: "Mission-Driven",
    icon: <MdRocketLaunch size={32} color="#FFD700" />,
    description:
      "Every project I take on is rooted in a purpose — to empower, uplift, and evolve.",
    borderColor: "#FFD700",
  },
  {
    title: "Mindful Engineering",
    icon: <GiMeditation size={32} color="#00ACC1" />,
    description:
      "My workflow is focused, intentional, and designed to maximize clarity and quality.",
    borderColor: "#00ACC1",
  },
];

const WhatSetsMeApart = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #0d0d0d, #1a1a1a)",
        py: 10,
        px: { xs: 2, md: 8 },
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 6, color: "#FFD700" }}
      >
        What Sets Me Apart
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: { xs: "nowrap", md: "wrap" },
          overflowX: { xs: "auto", md: "visible" },
          gap: 4,
          justifyContent: { md: "center" },
          scrollSnapType: "x mandatory",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {edgeCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            style={{
              scrollSnapAlign: "start",
              minWidth: "280px",
              flex: "0 0 auto",
            }}
          >
            <Card
              sx={{
                border: `2px solid ${card.borderColor}`,
                background: "rgba(255,255,255,0.05)",
                color: "white",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
                boxShadow: `0 0 18px ${card.borderColor}`,
                minHeight: 220,
                px: 3,
                py: 2,
                '&:hover': {
                  transform: 'scale(1.03)',
                  transition: '0.3s ease',
                },
              }}
            >
              <CardContent>
                <Box sx={{ mb: 2 }}>{card.icon}</Box>
                <Typography variant="h6" gutterBottom>
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ opacity: 0.75, fontSize: "0.95rem" }}
                >
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default WhatSetsMeApart;
