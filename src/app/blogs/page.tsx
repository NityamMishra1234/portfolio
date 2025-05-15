'use Client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../../features/blogs/blogSlice';
import BlogCard from '@/components/BlogCard';
import { RootState } from '../../redux/store';
import StarBackground from '@/components/StarBackground'; // Optional
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SpiderWebCanvas from '@/components/WebCanvasBackground';

export default function BlogsPage() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state: RootState) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs() as any);
  }, []);

  return (
    <>
    <Navbar/>
    <div className="relative min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-950 text-white">
      <StarBackground />
      <SpiderWebCanvas/>
      <div className="relative z-10 p-8 max-w-6xl mx-auto">
        <StarBackground/>
        <h1 className="text-4xl font-bold text-center mb-10">Latest Blogs</h1>

        {loading ? (
          <p className="text-center text-gray-400">Loading blogs...</p>
        ) : (
          <div className="flex flex-col gap-6">
  {items.map((blog: any) => (
    <BlogCard key={blog._id} blog={blog} />
  ))}
</div>

        )}
      </div>
    </div>
    <Footer/>
    </>
  );
}
