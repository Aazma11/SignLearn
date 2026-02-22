import React, { createContext, useContext, useState, ReactNode } from 'react'

interface User {
  username: string
  email?: string
}

interface AuthContextType {
  user: User | null
  login: (username: string, email?: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('isl_user')
    if (saved) try { return JSON.parse(saved) } catch { return null }
    return null
  })

  const login = (username: string, email?: string) => {
    const u = { username, email }
    setUser(u)
    localStorage.setItem('isl_user', JSON.stringify(u))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('isl_user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
