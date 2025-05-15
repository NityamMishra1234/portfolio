'use client';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { title: 'Home', href: '/' },
  { title: 'Projects', href: '/projects' },
  { title: 'Blogs', href: '/blogs' },
  { title: 'Contact', href: '/contact' },
  { title: 'About', href: '/about' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const glassBackground = {
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    background: 'rgba(15, 15, 15, 0.6)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)',
  };

  return (
    <>
      <AppBar position="sticky" sx={{ ...glassBackground }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', px: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '0.8px',
            }}
          >
            Nityam Mishra
          </Typography>

          {isMobile ? (
            <>
              <IconButton edge="end" color="inherit" onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
                PaperProps={{
                  sx: {
                    ...glassBackground,
                    width: 250,
                    color: 'white',
                    p: 1,
                  },
                }}
              >
                <List>
                  {navLinks.map((link) => (
                    <ListItem key={link.title} disablePadding>
                      <ListItemButton
                        component={Link}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        sx={{
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          },
                        }}
                      >
                        <ListItemText
                          primary={link.title}
                          primaryTypographyProps={{ fontFamily: 'var(--font-poppins)' }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <Box display="flex" gap={2}>
              {navLinks.map((link) => (
                <Button
                  key={link.title}
                  component={Link}
                  href={link.href}
                  sx={{
                    position: 'relative',
                    color: 'white',
                    fontWeight: 500,
                    fontFamily: 'var(--font-poppins)',
                    px: 1.5,
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      bottom: -4,
                      width: '100%',
                      height: '2px',
                      background: 'linear-gradient(to right, #ff6ec4, #7873f5)',
                      transform: 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.3s ease-in-out',
                    },
                    '&:hover:after': {
                      transform: 'scaleX(1)',
                    },
                  }}
                >
                  {link.title}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
