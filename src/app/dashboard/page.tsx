'use Client'
import TodoList from "@/components/TodoList";
import ProjectsSection from "@/components/ProjectsSection";
import BlogsSection from "@/components/BlogsSection";
import Navbar from "@/components/Navbar";
export default function Dashboard() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen p-4 bg-gray-100 space-y-6">
      {/* Todo Section */}
      <TodoList />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Projects Section */}
        <ProjectsSection />

        {/* Blogs Section */}
        <BlogsSection />
      </div>
    </div>
    </>
  );
}