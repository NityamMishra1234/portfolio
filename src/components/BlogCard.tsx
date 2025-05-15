import React from "react";

interface Blog {
  _id: string;
  title: string;
  content: string;
  imageUrl: string;
}

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="border p-4 rounded bg-zinc-900 shadow">
      <img src={blog.imageUrl} alt={blog.title} className="w-full max-h-52 object-cover mb-2 rounded" />
      <h3 className="text-xl font-bold">{blog.title}</h3>
      <p className="text-sm mt-1 text-gray-300">{blog.content}</p>
    </div>
  );
}
