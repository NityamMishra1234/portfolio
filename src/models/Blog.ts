import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  content: string;
  imageUrl: string;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    imageUrl: { type: String, required: true },
  },
  { timestamps: true }
);

export const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);
