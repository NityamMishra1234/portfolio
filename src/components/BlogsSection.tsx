"use client";
import { useEffect, useState, useRef } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "@/lib/cropImage";
import { Dialog } from "@headlessui/react";

export default function BlogsSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);

  const [cropConfig, setCropConfig] = useState({
    image: null as string | null,
    crop: { x: 0, y: 0 },
    zoom: 1,
    croppedAreaPixels: null as any,
    open: false,
  });

  const [form, setForm] = useState<{
    title: string;
    content: string;
    image: File | null;
    video: File | null;
  }>({
    title: "", content: "", image: null, video: null,
  });

  const fetchBlogs = async () => {
    const res = await fetch("/api/blogs");
    const data = await res.json();
    setBlogs(data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setCropConfig(prev => ({ ...prev, image: reader.result as string, open: true }));
    };
    reader.readAsDataURL(file);
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setForm({ ...form, video: file });
      setVideoPreview(URL.createObjectURL(file));
    }
  };

  const handleCropComplete = (_: any, croppedAreaPixels: any) => {
    setCropConfig(prev => ({ ...prev, croppedAreaPixels }));
  };

  const saveCroppedImage = async () => {
    const croppedBlob = await getCroppedImg(cropConfig.image!, cropConfig.croppedAreaPixels);
    const file = new File([croppedBlob], "cropped.jpg", { type: "image/jpeg" });
    setForm(prev => ({ ...prev, image: file }));
    setPreview(URL.createObjectURL(croppedBlob));
    setCropConfig(prev => ({ ...prev, open: false }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value) fd.append(key, value);
    });

    const res = await fetch("/api/blogs", {
      method: "POST",
      body: fd,
    });

    if (res.ok) {
      setForm({ title: "", content: "", image: null, video: null });
      setPreview(null);
      setVideoPreview(null);
      fetchBlogs();
    }
    setLoading(false);
  };

  return (
    <div className="bg-black p-4 rounded shadow space-y-4">
      <h2 className="text-xl font-bold">Blogs</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input type="text" placeholder="Title" required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full border p-2 rounded" />
        <textarea placeholder="Content" required value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} className="w-full border p-2 rounded" />

        <label className="block text-sm text-gray-100">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full mt-1"
          title="Upload blog image"
          placeholder="Choose an image file"
        />
        {preview && <img src={preview} alt="Blog preview" className="max-h-52 object-cover w-full rounded" />}

        <label className="block text-sm text-gray-100">Optional Blog Video</label>
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoChange}
          className="w-full mt-1"
          title="Upload blog video"
          placeholder="Choose a video file"
        />
        {videoPreview && <video src={videoPreview} className="w-full max-h-52 mt-1" controls />}

        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded" disabled={loading}>
          {loading ? "Uploading..." : "Add Blog"}
        </button>
      </form>

      <div className="space-y-4">
        {blogs.map((b: any) => (
          <div key={b._id} className="border p-2 rounded">
            <h3 className="font-semibold">{b.title}</h3>
            <img src={b.imageUrl} alt={b.title} className="w-full max-h-52 object-cover" />
            <p>{b.content}</p>
            {b.videoUrl && (
              <video src={b.videoUrl} controls className="w-full max-h-52 mt-2 rounded" />
            )}
          </div>
        ))}
      </div>

      {/* Cropping Dialog */}
      {cropConfig.open && (
        <Dialog open={cropConfig.open} onClose={() => setCropConfig({ ...cropConfig, open: false })} className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded w-[90%] max-w-md space-y-4">
            <h3 className="text-lg font-bold">Crop Image</h3>
            <div className="relative w-full aspect-[3/2] bg-black">
              <Cropper
                image={cropConfig.image!}
                crop={cropConfig.crop}
                zoom={cropConfig.zoom}
                aspect={3 / 2}
                onCropChange={(crop) => setCropConfig((p) => ({ ...p, crop }))}
                onZoomChange={(zoom) => setCropConfig((p) => ({ ...p, zoom }))}
                onCropComplete={handleCropComplete}
              />
            </div>
            <button onClick={saveCroppedImage} className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
          </div>
        </Dialog>
      )}
    </div>
  );
}
