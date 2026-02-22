import React, { useState, useRef, useEffect } from 'react'
import { Bot, X, Send } from 'lucide-react'

const quickReplies = [
  'What is ISL?',
  'How do I sign Hello?',
  'Explain ISL grammar',
  'Tips for beginners',
]

function getBotResponse(input: string): string {
  const text = input.toLowerCase().trim()
  if (text.includes('what is isl') || text.includes('indian sign language')) {
    return 'Indian Sign Language (ISL) is the primary sign language used by the Deaf community in India. It has its own grammar and vocabulary and is a visual-gestural language.'
  }
  if (text.includes('hello') || text.includes('hi') || text.includes('sign hello')) {
    return "To sign 'Hello' in ISL: Raise your right hand to your forehead, then bring it down in a friendly salute motion."
  }
  if (text.includes('thank')) {
    return "To sign 'Thank you': Touch your chin with your fingertips, then move your hand forward (like blowing a kiss)."
  }
  if (text.includes('grammar')) {
    return 'ISL has its own grammar: word order, negation, and tense can differ from English. Facial expressions also carry meaning. Check the Resources page for more.'
  }
  if (text.includes('beginner') || text.includes('start') || text.includes('tip')) {
    return 'Start with the alphabet and greetings on the Resources page. Use the Dashboard to practice voice-to-sign, and try the Practice quiz to test yourself.'
  }
  if (text.includes('how are you')) {
    return "Sign 'how' (hands up, move in opposite directions), then 'are' (R hand, small circle), then 'you' (point index finger forward)."
  }
  if (text.includes('name') || text.includes('your name')) {
    return "For 'What is your name?': Sign 'what', then 'is', then 'your', then 'name' (index and middle fingers tap on other hand)."
  }
  if (text.includes('help') || text.includes('please')) {
    return "For 'Please': place your flat hand on your chest and move it in a small circular motion. For 'Help': place one hand on top of the other and lift both up."
  }
  return "I can explain ISL signs, grammar, and give beginner tips. Try asking: 'What is ISL?', 'How do I sign Hello?', or 'Explain ISL grammar'."
}

interface Message {
  id: string
  text: string
  isUser: boolean
  time: Date
}

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: '0', text: "Hi! I'm your ISL Learning Assistant. Ask me about signs, grammar, or tips for beginners.", isUser: false, time: new Date() },
  ])
  const [input, setInput] = useState('')
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const send = (text: string) => {
    const t = text.trim()
    if (!t) return
    const userMsg: Message = { id: Date.now().toString(), text: t, isUser: true, time: new Date() }
    setMessages((m) => [...m, userMsg])
    setInput('')
    const reply = getBotResponse(t)
    setTimeout(() => {
      setMessages((m) => [...m, { id: (Date.now() + 1).toString(), text: reply, isUser: false, time: new Date() }])
    }, 400)
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-violet-600 text-white shadow-lg hover:bg-violet-700 flex items-center justify-center transition-transform hover:scale-105"
        aria-label="Open chatbot"
      >
        <Bot className="w-7 h-7" />
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] rounded-2xl bg-white border border-gray-200 shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          <div className="flex items-center justify-between px-4 py-3 bg-violet-600 text-white">
            <span className="font-semibold flex items-center gap-2">
              <Bot className="w-5 h-5" /> ISL Learning Assistant
            </span>
            <button onClick={() => setOpen(false)} className="p-1 hover:bg-white/20 rounded">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="h-80 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] px-4 py-2 rounded-2xl ${
                    msg.isUser ? 'bg-violet-600 text-white rounded-br-md' : 'bg-white border border-gray-200 text-gray-800 rounded-bl-md'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
          <div className="p-2 border-t border-gray-200 bg-white">
            <div className="flex flex-wrap gap-2 mb-2">
              {quickReplies.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="text-xs px-3 py-1.5 rounded-full bg-violet-100 text-violet-700 hover:bg-violet-200"
                >
                  {q}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send(input)}
                placeholder="Ask about ISL..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              <button onClick={() => send(input)} className="p-2 rounded-xl bg-violet-600 text-white hover:bg-violet-700">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot
