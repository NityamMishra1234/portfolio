'use client'

import { useState } from 'react'
import { toast } from 'react-hot-toast'
import StarsCanvas from '@/components/StarBackground'
import { motion, AnimatePresence } from 'framer-motion'
import WebCanvasBackground from '../../components/WebCanvasBackground'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [showRocket, setShowRocket] = useState(false)

  async function handleSubmit(e: any) {
    e.preventDefault()
    setLoading(true)

    const form = e.target
    const body = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    }

    try {
      const res = await fetch('/api/contect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      const data = await res.json()
      setLoading(false)

      if (data.success) {
        toast.success('Message sent successfully!')
        alert("Messae sent sucessfull")
        form.reset()
        setShowRocket(true)
        setTimeout(() => setShowRocket(false), 3000)
      } else {
        toast.error('Something went wrong.')
      }
    } catch (error) {
      console.error('Error:', error)
      toast.error('Failed to send message.')
      setLoading(false)
    }
  }

  return (
    <>
    <Navbar/>
    <div className="relative min-h-screen w-full bg-black text-white flex items-center justify-center px-4 py-20 overflow-hidden">
      <StarsCanvas />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black z-0"></div>
      <StarsCanvas />
      <WebCanvasBackground/>
      <div className="relative z-10 flex flex-col items-center space-y-10 w-full max-w-4xl">
        {/* Rocket Animation */}
        <AnimatePresence>
          {showRocket && (
            <motion.div
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: -600, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
              className="absolute bottom-20 text-6xl"
            >
              🚀
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
            Let’s Build Something Legendary
          </h1>
          <p className="text-zinc-300 max-w-2xl mx-auto">
            We are developers — shaping imagination into code, turning ideas into reality.
            Let’s connect and create your next digital universe.
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-zinc-900 bg-opacity-50 p-6 rounded-xl shadow-lg space-y-4 w-full max-w-xl"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full bg-black/30 border border-cyan-700 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full bg-black/30 border border-cyan-700 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={5}
            className="w-full bg-black/30 border border-cyan-700 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition font-semibold"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Interactive Contact Options */}
        <div className="flex flex-wrap gap-4 mt-10 justify-center">
          <a
            href="mailto:nityam@example.com"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition font-semibold shadow-lg"
          >
            📧 Email Me
          </a>
          <a
            href="tel:+918000000000"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition font-semibold shadow-lg"
          >
            📞 Call Me
          </a>
          <a
            href="https://linkedin.com/in/nityammishra"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition font-semibold shadow-lg"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://github.com/nityam-mishra"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition font-semibold shadow-lg"
          >
            💻 GitHub
          </a>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
