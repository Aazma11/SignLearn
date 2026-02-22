import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-10rem)] -mx-6 -mb-6">
        {/* Left: welcome – attached to page, no box */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 p-12 lg:p-16 flex-col justify-center min-h-[420px]">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white/10 animate-pulse" />
            <div className="absolute bottom-32 right-24 w-40 h-40 rounded-full bg-white/10 animate-pulse" style={{ animationDelay: '300ms' }} />
          </div>
          <div className="absolute top-16 right-16 text-white/20 text-6xl">+</div>
          <div className="absolute bottom-40 left-20 text-white/30 text-4xl">· · · · ·</div>
          <div className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-white/40 animate-bounce" />
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="relative z-10">
            <h1 className="text-4xl xl:text-5xl font-bold text-white mb-4">Welcome to ISL Learning</h1>
            <p className="text-lg text-white/90 max-w-md">
              Master Indian Sign Language with intelligent feedback and interactive practice. Start your journey today.
            </p>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-white/60" />
            <span className="w-2 h-2 rounded-full bg-white/40" />
            <span className="w-2 h-2 rounded-full bg-white/40" />
            <span className="w-2 h-2 rounded-full bg-white/40" />
            <span className="w-2 h-2 rounded-full bg-white/40" />
          </div>
        </div>

        {/* Right: sign-in / actions – attached to page, no box */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-b from-violet-50/80 to-indigo-50/60 p-8 lg:p-12 min-h-[420px]">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Speak, Learn and Practice ISL</h2>
              <p className="text-gray-600">Sign in to access your account or create a new one.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/login"
                className="flex-1 py-3 px-6 rounded-xl bg-violet-600 text-white font-semibold text-center hover:bg-violet-700 transition-all shadow-lg shadow-violet-500/25"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="flex-1 py-3 px-6 rounded-xl border-2 border-violet-600 text-violet-600 font-semibold text-center hover:bg-violet-100 transition-all"
              >
                Create Account
              </Link>
            </div>
            <p className="text-center text-sm text-gray-500">
              Continue to <Link to="/dashboard" className="text-violet-600 font-medium hover:underline">Dashboard</Link> without signing in.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
