"use client";
import { useEffect, useState } from "react";
interface Project {
  _id: string;
  name: string;
  videoUrl: string;
  link: string;
  github: string;
}
export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    link: "",
    github: "",
    video: null as File | null,
  });

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const fetchProjects = async () => {
    const res = await fetch("/api/projects");
    const data = await res.json();
    setProjects(data.projects);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setForm({ ...form, video: file });
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setForm({ ...form, video: null });
      setPreviewUrl(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.video) return;

    setIsUploading(true);

    const fd = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value) fd.append(key, value);
    });

    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        body: fd,
      });

      if (res.ok) {
        setForm({ name: "", description: "", link: "", github: "", video: null });
        setPreviewUrl(null);
        fetchProjects();
      }
    } catch (err) {
      console.error("Upload error:", err);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="bg-gray-900 p-4 rounded shadow space-y-4">
      <h2 className="text-xl font-bold text-white">Projects</h2>
      
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          placeholder="Name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Description"
          required
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="url"
          placeholder="Live Link"
          required
          value={form.link}
          onChange={(e) => setForm({ ...form, link: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="url"
          placeholder="GitHub"
          required
          value={form.github}
          onChange={(e) => setForm({ ...form, github: e.target.value })}
          className="w-full border p-2 rounded"
        />

        <label className="block">
          <span className="text-white font-medium">Project Video</span>
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
            className="w-full mt-1 text-white"
          />
        </label>

        {previewUrl && (
          <video
            src={previewUrl}
            controls
            className="w-full mt-2 rounded max-h-60 border"
          />
        )}

        <button
          type="submit"
          disabled={isUploading}
          className={`w-full mt-2 py-2 rounded text-white ${
            isUploading ? "bg-gray-600 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {isUploading ? "Uploading Video..." : "Add Project"}
        </button>
      </form>

      <div className="grid gap-3">
        {projects.map((p: Project) => (
          <div key={p._id} className="border p-2 rounded bg-white/10">
            <h3 className="font-semibold text-white">{p.name}</h3>
            <video src={p.videoUrl} controls className="w-full max-h-60 mt-1 rounded" />
            <div className="mt-1 text-sm text-white">
              <a href={p.link} className="text-blue-400 hover:underline mr-2">Live</a>
              |
              <a href={p.github} className="text-gray-300 hover:underline ml-2">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
