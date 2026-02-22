import React, { useState, useCallback } from 'react'
import Layout from '../components/Layout'
import { quizQuestions, getQuestionsByDifficulty, type Difficulty, type QuizQuestion } from '../data/quizData'
import { Award, RotateCcw, ChevronRight } from 'lucide-react'

const difficultyLabels: Record<Difficulty, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  difficult: 'Difficult',
}

const Practice: React.FC = () => {
  const [difficulty, setDifficulty] = useState<Difficulty>('beginner')
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [quizStarted, setQuizStarted] = useState(false)
  const [quizEnded, setQuizEnded] = useState(false)

  const startQuiz = useCallback(() => {
    const q = getQuestionsByDifficulty(difficulty)
    if (q.length === 0) {
      setQuestions(quizQuestions.slice(0, 5))
    } else {
      setQuestions(q)
    }
    setCurrentIndex(0)
    setSelectedOption(null)
    setScore(0)
    setShowResult(false)
    setQuizStarted(true)
    setQuizEnded(false)
  }, [difficulty])

  const currentQ = questions[currentIndex]
  const total = questions.length

  const handleOptionSelect = (index: number) => {
    if (showResult) return
    setSelectedOption(index)
    setShowResult(true)
    if (index === currentQ.correctIndex) setScore((s) => s + 1)
  }

  const handleNext = () => {
    if (currentIndex + 1 >= total) {
      setQuizEnded(true)
      return
    }
    setCurrentIndex((i) => i + 1)
    setSelectedOption(null)
    setShowResult(false)
  }

  const resetQuiz = () => {
    setQuizStarted(false)
    setQuizEnded(false)
    setQuestions([])
    setCurrentIndex(0)
    setSelectedOption(null)
    setScore(0)
    setShowResult(false)
  }

  return (
    <Layout>
      <div className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-br from-violet-50/80 via-white to-indigo-50/60 p-8 lg:p-10 border border-violet-100/80 shadow-lg shadow-violet-500/10">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 mb-2 text-center">Practice</h1>
        <p className="text-gray-600 text-center mb-10 text-lg">Quiz on ISL grammar and signs. Choose a difficulty and start.</p>

        {!quizStarted ? (
          <div className="space-y-6">
            <div className="rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-sm">
              <label className="block text-sm font-medium text-gray-700 mb-3">Difficulty</label>
              <div className="flex flex-wrap gap-3">
                {(['beginner', 'intermediate', 'difficult'] as Difficulty[]).map((d) => (
                  <button
                    key={d}
                    onClick={() => setDifficulty(d)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                      difficulty === d
                        ? 'bg-violet-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {difficultyLabels[d]}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={startQuiz}
              className="w-full py-4 px-6 rounded-xl bg-violet-600 text-white font-bold text-lg hover:bg-violet-700 flex items-center justify-center gap-2"
            >
              Start Quiz <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        ) : quizEnded ? (
          <div className="rounded-2xl border-2 border-violet-200 bg-violet-50/50 p-10 text-center">
            <Award className="w-16 h-16 text-violet-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Quiz Complete</h2>
            <p className="text-3xl font-bold text-violet-600 mb-2">{score} / {total}</p>
            <p className="text-gray-600 mb-8">You scored {Math.round((score / total) * 100)}%</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button onClick={startQuiz} className="px-6 py-3 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700">
                Try Again
              </button>
              <button onClick={resetQuiz} className="px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 flex items-center gap-2">
                <RotateCcw size={18} /> Change Difficulty
              </button>
            </div>
          </div>
        ) : currentQ ? (
          <div className="rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg">
            <div className="flex justify-between text-sm text-gray-500 mb-6">
              <span>Question {currentIndex + 1} of {total}</span>
              <span className="px-3 py-1 rounded-full bg-violet-100 text-violet-700 font-medium">{difficultyLabels[currentQ.difficulty]}</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-6">{currentQ.question}</h2>
            <div className="space-y-3">
              {currentQ.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleOptionSelect(i)}
                  disabled={showResult}
                  className={`w-full text-left px-6 py-4 rounded-xl border-2 transition-all ${
                    !showResult
                      ? 'border-gray-200 hover:border-violet-400 hover:bg-violet-50/50'
                      : i === currentQ.correctIndex
                        ? 'border-green-500 bg-green-50 text-green-800'
                        : selectedOption === i
                          ? 'border-red-400 bg-red-50 text-red-800'
                          : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            {showResult && currentQ.explanation && (
              <p className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm">{currentQ.explanation}</p>
            )}
            {showResult && (
              <button
                onClick={handleNext}
                className="mt-6 w-full py-3 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700 flex items-center justify-center gap-2"
              >
                {currentIndex + 1 >= total ? 'See Result' : 'Next'} <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        ) : null}
      </div>
    </Layout>
  )
}

export default Practice
