import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AuthProvider } from './providers/AuthProvider'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Resources from './pages/Resources'
import Practice from './pages/Practice'
import Chatbot from './components/Chatbot'

function ChatbotGate() {
  const loc = useLocation()
  const isAuthPage = loc.pathname === '/login' || loc.pathname === '/register'
  return !isAuthPage ? <Chatbot /> : null
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/practice" element={<Practice />} />
        </Routes>
        <ChatbotGate />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
