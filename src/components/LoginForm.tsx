'use client'


import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCredentials } from '@/features/auth/authSlice'
import { loginUser } from '@/features/auth/apiAuth'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault()
  try {
    const response = await loginUser(email, password) // Your API call
    const { token, user } = response

    // Map _id to id
    const mappedUser = {
      id: user._id,
      email: user.email,
      name: user.name || '', // if available
    }

    dispatch(setCredentials({ user: mappedUser, token }))
    toast.success('Login successful')
    router.push('/dashboard')
  } catch (err: unknown) {
  if (err instanceof Error) {
    toast.error(err.message);
  } else {
    toast.error('Login failed');
  }
}
}


  return (
    <form onSubmit={handleLogin} className="space-y-4 p-6 bg-zinc-900 rounded-xl">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 bg-zinc-800 rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 bg-zinc-800 rounded"
        required
      />
      <button type="submit" className="w-full p-2 bg-fuchsia-600 rounded text-white">
        Login
      </button>
    </form>
  )
}

export default LoginForm
