import React from 'react'
import Layout from '../components/Layout'
import VoiceInput from '../components/VoiceInput'
import ChatInterface from '../components/ChatInterface'
import GestureDisplay from '../components/GestureDisplay'
import { ChatProvider } from '../providers/ChatProvider'

const Dashboard: React.FC = () => {
  return (
    <ChatProvider>
      <Layout>
        <div className="min-h-[calc(100vh-12rem)] rounded-3xl bg-gradient-to-br from-violet-500/20 via-purple-500/25 to-indigo-500/20 p-6 lg:p-8 relative overflow-hidden border border-violet-200/60 shadow-[0_20px_60px_rgba(139,92,246,0.15)]">
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-violet-400/35 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-fuchsia-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-amber-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.3s' }} />
          </div>
          <div className="relative z-10">
            <header className="text-center mb-10 animate-fade-in">
              <h1 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 mb-2">
                Speak, Learn and Practice ISL with AI-Powered Feedback
              </h1>
              <p className="text-gray-700 text-lg">Master Indian Sign Language with intelligent feedback and interactive practice.</p>
            </header>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="animate-fade-in" style={{ animationDelay: '0.05s' }}>
                  <VoiceInput />
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '0.15s' }}>
                  <ChatInterface />
                </div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.25s' }}>
                <GestureDisplay />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </ChatProvider>
  )
}

export default Dashboard
