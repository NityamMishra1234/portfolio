import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProject extends Document {
  name: string;
  description: string;
  link: string;
  github: string;
  videoUrl: string;
}

const ProjectSchema = new Schema<IProject>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    github: { type: String, required: true },
    videoUrl: { type: String, required: true },
  },
  { timestamps: true }
);

// Explicit model declaration
export const Project: Model<IProject> =
  mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);
