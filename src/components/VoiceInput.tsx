import React, { useState, useEffect } from 'react'
import { Mic, MicOff, Send } from 'lucide-react'
import { useSpeechRecognition } from '../hooks/useSpeechRecognition'
import { useChat } from '../providers/ChatProvider'
import { getGesture } from '../utils/islMapping'

const VoiceInput: React.FC = () => {
  const [inputText, setInputText] = useState('')
  const { transcript, isListening, startListening, stopListening, resetTranscript, error } = useSpeechRecognition()
  const { dispatch } = useChat()

  // Auto-process transcript when it changes (voice input path)
  useEffect(() => {
    const t = transcript?.trim()
    if (!t) return
    processMessage(t)
    resetTranscript()
  }, [transcript])

  const processMessage = (textToSend: string) => {
    if (!textToSend.trim()) return

    console.log(' PROCESSING MESSAGE:', textToSend)

    const message = {
      id: Date.now().toString(),
      text: textToSend,
      timestamp: new Date(),
      type: 'user' as const
    }

    dispatch({ type: 'ADD_MESSAGE', payload: message })
    dispatch({ type: 'SET_ISL_TEXT', payload: textToSend })
    dispatch({ type: 'SET_PROCESSING', payload: true })

    // Process ISL gesture (normalize for voice: remove punctuation, try phrase with underscores)
    const cleanText = textToSend.toLowerCase().trim().replace(/[.,!?]+$/, '')
    const withUnderscores = cleanText.replace(/\s+/g, '_')
    let gesture = getGesture(cleanText) || getGesture(withUnderscores)
    let gestureKey: string | null = null
    if (gesture) gestureKey = getGesture(cleanText) ? cleanText : withUnderscores
    else {
      const firstWord = cleanText.split(/\s+/)[0] || ''
      gesture = getGesture(firstWord)
      if (gesture) gestureKey = firstWord
    }
    setTimeout(() => {
      dispatch({ type: 'SET_PROCESSING', payload: false })
      dispatch({ type: 'SET_CURRENT_GESTURE', payload: gestureKey })
    }, 350)
  }

  const handleSendMessage = () => {
    const textToSend = inputText.trim() || transcript.trim()
    processMessage(textToSend)
    setInputText('')
    resetTranscript()
  }

  const handleVoiceToggle = () => {
    console.log(' VOICE TOGGLE CLICKED')
    if (isListening) {
      console.log(' STOPPING LISTENING')
      stopListening()
    } else {
      console.log(' STARTING LISTENING')
      startListening()
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-violet-100 p-6 animate-card-glow shadow-[0_8px_30px_rgba(139,92,246,0.12)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.18)] transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 mb-4">Voice Input</h2>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleVoiceToggle}
            className={`p-4 rounded-full transition-all duration-200 ${
              isListening 
                ? 'bg-red-500 text-white animate-pulse shadow-lg shadow-red-500/30' 
                : 'bg-violet-500 text-white hover:bg-violet-600 shadow-lg shadow-violet-500/30'
            }`}
          >
            {isListening ? <MicOff size={24} /> : <Mic size={24} />}
          </button>
          
          <div className="flex-1">
            <div className="text-sm text-gray-600 mb-2">
              {isListening ? 'Listening...' : 'Click to start voice input'}
            </div>
            {transcript && (
              <div className="text-sm text-gray-800 bg-gray-100 p-2 rounded">
                {transcript}
              </div>
            )}
            {error && (
              <div className="text-sm text-red-600 bg-red-50 p-2 rounded">
                {error}
              </div>
            )}
          </div>
        </div>

        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Or type your message here..."
            className="flex-1 px-4 py-2 border border-violet-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-400"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button
            onClick={handleSendMessage}
            className="px-6 py-2 bg-violet-500 text-white rounded-xl hover:bg-violet-600 transition-all shadow-md hover:shadow-violet-500/30"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default VoiceInput
