// app/api/projects/route.ts
import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { Project } from '@/models/Project';
import cloudinary from '@/lib/cloudinary';

export async function POST(req: Request) {
  await connectDB();
  const formData = await req.formData();
  console.log(process.env.CLOUDINARY_CLOUD_NAME); // should log the cloud name

  const file = formData.get('video') as File;
  const name = formData.get('name') as string;
  const description = formData.get('description') as string;
  const link = formData.get('link') as string;
  const github = formData.get('github') as string;

  if (!file) {
    return NextResponse.json({ success: false, message: 'Video file is required' }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadResult = await new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { resource_type: 'video', folder: 'portfolio/projects' },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    ).end(buffer);
  });

  const { secure_url: videoUrl } = uploadResult as any;

  const newProject = await Project.create({
    name,
    description,
    link,
    github,
    videoUrl,
  });

  return NextResponse.json({ success: true, project: newProject }, { status: 201 });
}

// get all the projects
export async function GET() {
    await connectDB();
    const projects = await Project.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, projects });
  }