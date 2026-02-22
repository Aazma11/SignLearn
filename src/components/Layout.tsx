import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User, LogOut, ChevronDown } from 'lucide-react'
import { useAuth } from '../providers/AuthProvider'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [profileOpen, setProfileOpen] = useState(false)

  const handleLogout = () => {
    logout()
    setProfileOpen(false)
    navigate('/login')
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-violet-50/50 via-white to-indigo-50/40">
      <header className="sticky top-0 z-50 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white shadow-lg shadow-violet-900/20">
        <div className="w-full max-w-[1600px] mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2 text-xl font-bold text-white hover:text-white/90 transition-colors">
            <span className="text-2xl">🤟</span>
            <span>isl_learning</span>
          </Link>

          <nav className="flex items-center gap-1">
            <Link
              to="/about"
              className="px-4 py-2 rounded-lg text-white/90 hover:bg-white/15 hover:text-white flex items-center gap-1 transition-all"
            >
              About
            </Link>
            <Link
              to="/resources"
              className="px-4 py-2 rounded-lg text-white/90 hover:bg-white/15 hover:text-white flex items-center gap-1 transition-all"
            >
              Resources
            </Link>
            <Link to="/dashboard" className="px-4 py-2 rounded-lg text-white/90 hover:bg-white/15 hover:text-white transition-all">Dashboard</Link>
            <Link to="/practice" className="px-4 py-2 rounded-lg text-white/90 hover:bg-white/15 hover:text-white transition-all">Practice</Link>

            <div className="relative ml-4 pl-4 border-l border-white/30">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/15 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <User size={18} />
                </div>
                <span className="font-medium max-w-[120px] truncate text-white/95">{user?.username || 'Guest'}</span>
                <ChevronDown className="w-4 h-4 text-white/70" />
              </button>
              {profileOpen && (
                <div className="absolute right-0 top-full mt-1 w-48 py-2 bg-white rounded-xl shadow-xl border border-violet-100 text-gray-800">
                  <button onClick={handleLogout} className="w-full flex items-center gap-2 px-4 py-2 hover:bg-red-50 hover:text-red-600 rounded-lg mx-1">
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1 w-full max-w-[1600px] mx-auto px-6 py-6">
        {children}
      </main>
    </div>
  )
}

export default Layout
