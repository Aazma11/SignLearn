import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User, Lock } from 'lucide-react'
import { useAuth } from '../providers/AuthProvider'

const Login: React.FC = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(true)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    login(usernameOrEmail, usernameOrEmail.includes('@') ? usernameOrEmail : undefined)
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 p-12 flex-col justify-center">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white/10 animate-pulse" />
          <div className="absolute bottom-32 right-24 w-40 h-40 rounded-full bg-white/10 animate-pulse delay-300" />
        </div>
        <div className="absolute top-16 right-16 text-white/20 text-6xl">+</div>
        <div className="absolute bottom-40 left-20 text-white/30 text-4xl">· · · · ·</div>
        <div className="relative z-10">
          <h1 className="text-4xl xl:text-5xl font-bold text-white mb-4">Welcome back!</h1>
          <p className="text-lg text-white/90 max-w-md">You can sign in to access with your existing account.</p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8 lg:p-12">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Sign In</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username or email</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={usernameOrEmail}
                onChange={(e) => setUsernameOrEmail(e.target.value)}
                placeholder="Username or email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="rounded border-gray-300 text-violet-600 focus:ring-violet-500" />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-violet-600 hover:underline">Forgot password?</a>
          </div>
          <button type="submit" className="w-full py-3 px-6 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700 transition-all">
            Sign In
          </button>
          <p className="text-center text-gray-600">
            New here? <Link to="/register" className="text-violet-600 font-semibold hover:underline">Create an Account</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
