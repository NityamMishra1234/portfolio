import { connectDB } from '@/lib/db'
import ContactMessage from '@/models/ContactMessage'
import { NextResponse } from 'next/server'
export async function POST(req: Request) {
  await connectDB()
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return new Response('Missing fields', { status: 400 })
  }

  await ContactMessage.create({ name, email, message })
  return NextResponse.json({
    success: true,
    message: "Message sent successfully",
  });
  
}
export async function GET() {
    try {
      await connectDB()
  
      const messages = await ContactMessage.find().sort({ createdAt: -1 })
  
      return NextResponse.json({ success: true, data: messages })
    } catch (error) {
      console.error('[GET_CONTACT_MESSAGES]', error)
      return NextResponse.json({ success: false, error: 'Failed to fetch messages' }, { status: 500 })
    }
  }
