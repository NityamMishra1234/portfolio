import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { Blog } from '@/models/Blog';
import cloudinary from '@/lib/cloudinary';

// GET /api/blogs → fetch all blogs
export async function GET() {
  await connectDB();
  const blogs = await Blog.find().sort({ createdAt: -1 });
  return NextResponse.json({ success: true, blogs }, { status: 200 });
}

// POST /api/blogs → add a new blog with image
export async function POST(req: NextRequest) {
  await connectDB();
  const formData = await req.formData();

  const file = formData.get('image') as File;
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  if (!file) {
    return NextResponse.json({ success: false, message: 'Image file is required' }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadResult = await new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { resource_type: 'image', folder: 'portfolio/blogs' },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    ).end(buffer);
  });

  const { secure_url: imageUrl } = uploadResult as any;

  const newBlog = await Blog.create({
    title,
    content,
    imageUrl,
  });

  return NextResponse.json({ success: true, blog: newBlog }, { status: 201 });
}
