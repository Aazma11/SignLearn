import React, { useEffect, useRef } from 'react'
import { useChat } from '../providers/ChatProvider'
import { getGesture } from '../utils/islMapping'
import { useMurfTTS } from '../hooks/useMurfTTS'
import { Volume2, VolumeX } from 'lucide-react'

const GestureDisplay: React.FC = () => {
  const { state } = useChat()
  const { speak, isSpeaking, stop, error } = useMurfTTS()
  const lastSpokenKeyRef = useRef<string | null>(null)
  
  const currentGesture = state.currentGesture ? getGesture(state.currentGesture) : null

  // Test voice function
  const testVoice = async () => {
    try {
      if (currentGesture) {
        await speak(`Sign "${currentGesture.name}": ${currentGesture.instructions}`)
      } else {
        await speak('This is a test of the ISL voice assistant. Speak or type a word to hear its instructions.')
      }
    } catch (err) {
      console.error('Voice test error:', err)
    }
  }

  // Auto-speak when gesture changes (by key so voice and text both trigger)
  useEffect(() => {
    const raw = state.currentGesture?.trim() || null
    if (!raw || state.isProcessing) return
    const gestureKey = raw.toLowerCase()
    if (lastSpokenKeyRef.current === gestureKey) return
    const gesture = getGesture(gestureKey) || getGesture(gestureKey.replace(/\s+/g, '_'))
    if (!gesture) return

    lastSpokenKeyRef.current = gestureKey
    const instructionText = `Great! Now let's learn the sign for "${gesture.name}". ${gesture.instructions}. Ready to practice?`
    const t = setTimeout(() => {
      speak(instructionText).catch(err => console.error('Auto-speak error:', err))
    }, 200)
    return () => clearTimeout(t)
  }, [state.currentGesture, state.isProcessing, speak])

  const handleManualSpeak = async () => {
    if (currentGesture) {
      const instructionText = `Great! Now let's learn the sign for "${currentGesture.name}". ${currentGesture.instructions}. Ready to practice?`
      try {
        await speak(instructionText)
      } catch (err) {
        console.error('Manual speak error:', err)
      }
    }
  }

  const handleVoiceToggle = async () => {
    if (isSpeaking) {
      stop()
    } else {
      await handleManualSpeak()
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-violet-100 p-6 animate-card-glow shadow-[0_8px_30px_rgba(139,92,246,0.12)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.18)] transition-shadow duration-300">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">ISL Gesture</h2>
        <div className="flex space-x-3">
          <button
            onClick={testVoice}
            className="px-4 py-2 bg-violet-500 text-white rounded-xl hover:bg-violet-600 transition-all duration-200 shadow-md hover:shadow-violet-500/30"
          >
            Test Voice
          </button>
          {currentGesture && (
            <button
              onClick={handleVoiceToggle}
              className={`p-3 rounded-xl transition-all duration-200 ${
                isSpeaking 
                  ? 'bg-red-500 text-white shadow-md' 
                  : 'bg-violet-100 text-violet-700 hover:bg-violet-200'
              }`}
              title={isSpeaking ? 'Stop voice' : 'Play voice instructions'}
            >
              {isSpeaking ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          )}
        </div>
      </div>
      
      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl border border-red-200">
          <strong>Voice Error:</strong> {error}
        </div>
      )}
      
      {currentGesture ? (
        <div className="space-y-6">
          {/* Gesture Header */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {currentGesture.name}
            </h3>
            <p className="text-gray-600 text-lg">
              {currentGesture.description}
            </p>
          </div>
          
          {/* Instructions */}
          <div className="p-4 bg-green-50 rounded-xl border border-green-200">
            <h4 className="font-semibold text-gray-800 mb-3">
              How to Sign:
            </h4>
            <p className="text-gray-700 text-lg leading-relaxed">
              {currentGesture.instructions}
            </p>
          </div>
          
          {/* Category */}
          <div className="p-4 bg-gray-50 rounded-xl">
            <div className="text-gray-600 text-center">
              Category: <span className="text-purple-600 font-semibold">{currentGesture.category}</span>
            </div>
          </div>

          {isSpeaking && (
            <div className="flex items-center justify-center space-x-3 text-violet-600 bg-violet-50 p-4 rounded-xl border border-violet-200 animate-pulse">
              <span className="text-xl">🔊</span>
              <span className="font-semibold">Speaking ISL instructions...</span>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-12">
          <div className="text-6xl mb-6">🎤</div>
          <p className="text-xl mb-4 text-gray-400">Ready to learn ISL?</p>
          <p className="text-lg mb-6">Speak a word to see its sign language gesture</p>
        </div>
      )}
    </div>
  )
}

export default GestureDisplay
