export type Difficulty = 'beginner' | 'intermediate' | 'difficult'

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  difficulty: Difficulty
  type: 'grammar' | 'sign'
  explanation?: string
}

export const quizQuestions: QuizQuestion[] = [
  { id: '1', question: 'What is Indian Sign Language (ISL)?', options: ['A spoken Indian language', 'A visual-gestural language used by the Deaf community in India', 'A written script only', 'A type of Braille'], correctIndex: 1, difficulty: 'beginner', type: 'grammar', explanation: 'ISL is a visual-gestural language with its own grammar and vocabulary.' },
  { id: '2', question: "How do you sign 'Hello' in ISL?", options: ['Wave both hands', 'Raise right hand to forehead, then bring down in a salute motion', 'Clap hands', 'Point to the person'], correctIndex: 1, difficulty: 'beginner', type: 'sign', explanation: 'Raise your right hand to your forehead, then bring it down in a friendly salute motion.' },
  { id: '3', question: "How do you sign 'Thank you' in ISL?", options: ['Bow your head', 'Touch chin with fingertips, then move hand forward', 'Shake hands', 'Nod yes'], correctIndex: 1, difficulty: 'beginner', type: 'sign' },
  { id: '4', question: 'Which body part is used for "please" in ISL?', options: ['Head', 'Chest', 'Ear', 'Knee'], correctIndex: 1, difficulty: 'beginner', type: 'sign', explanation: 'Place your flat hand on your chest and move it in a small circular motion.' },
  { id: '5', question: 'ISL has its own grammar. True or False?', options: ['False', 'True'], correctIndex: 1, difficulty: 'beginner', type: 'grammar' },
  { id: '6', question: "How do you sign 'How are you?' (phrase)?", options: ['Sign "how" only', 'Sign "how" + "are" + "you" in sequence', 'Sign "you" + "how"', 'One single handshape'], correctIndex: 1, difficulty: 'intermediate', type: 'sign' },
  { id: '7', question: 'Word order in ISL can differ from English. True or False?', options: ['False', 'True'], correctIndex: 1, difficulty: 'intermediate', type: 'grammar', explanation: 'ISL has its own grammar and word order.' },
  { id: '8', question: "What is the sign for 'You' in ISL?", options: ['Point to yourself', 'Point index finger forward toward the person', 'Open palm up', 'Fist on chest'], correctIndex: 1, difficulty: 'intermediate', type: 'sign' },
  { id: '9', question: 'Which organization is the national body for ISL in India?', options: ['WHO', 'ISLRTC', 'UNESCO', 'NIH'], correctIndex: 1, difficulty: 'intermediate', type: 'grammar', explanation: 'Indian Sign Language Research and Training Centre (ISLRTC).' },
  { id: '10', question: "How do you sign 'Nice to meet you'?", options: ['One gesture', 'Sign "nice" + "meet" + "you" in sequence', 'Only "meet"', 'Clap and point'], correctIndex: 1, difficulty: 'intermediate', type: 'sign' },
  { id: '11', question: 'Negation in ISL is typically expressed by:', options: ['Shouting', 'Shaking head or specific negation signs', 'Writing only', 'Facial expression only'], correctIndex: 1, difficulty: 'difficult', type: 'grammar' },
  { id: '12', question: "Describe the sign for 'Love' in ISL.", options: ['Point to heart', 'Cross arms over chest in a hugging motion', 'Two hands forming a heart shape', 'Hand on chest only'], correctIndex: 1, difficulty: 'difficult', type: 'sign' },
  { id: '13', question: 'Tense (past/present/future) in ISL can be shown by:', options: ['Only time words', 'Time words, direction of movement, and context', 'Writing', 'Tone of voice'], correctIndex: 1, difficulty: 'difficult', type: 'grammar' },
  { id: '14', question: "What is the sign for 'What is your name?'?", options: ['Sign "name" only', 'Sign "what" + "is" + "your" + "name" in sequence', 'Point and shrug', 'One handshape'], correctIndex: 1, difficulty: 'difficult', type: 'sign' },
  { id: '15', question: 'Facial expressions in ISL are:', options: ['Optional', 'Part of grammar and meaning'], correctIndex: 1, difficulty: 'difficult', type: 'grammar', explanation: 'Facial expressions carry grammatical and emotional information in ISL.' },
]

export function getQuestionsByDifficulty(d: Difficulty): QuizQuestion[] {
  return quizQuestions.filter((q) => q.difficulty === d)
}

export function getAllQuestions(): QuizQuestion[] {
  return [...quizQuestions]
}
