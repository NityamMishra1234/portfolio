'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../../features/project/projectSlice';
import ProjectCard from '@/components/projectCard';
import StarBackground from '@/components/StarBackground'; // or SpiderWebCanvas
import SpiderWebCanvas from '@/components/WebCanvasBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state: any) => state.project);

  useEffect(() => {
    dispatch(fetchProjects() as any);
  }, []);

  return (
    <>
    <Navbar/>
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <StarBackground />
      <SpiderWebCanvas/>

      <div className="relative z-10 p-10">
        <h1 className="text-4xl font-bold mb-6 text-center">My Projects</h1>

        {loading ? (
          <p className="text-center mt-10">Loading projects...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((project: any) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
}
