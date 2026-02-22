import React from 'react'
import Layout from '../components/Layout'
import { ExternalLink, Book, MessageCircle, HelpCircle, Users, FileText, Building2 } from 'lucide-react'

const sections = [
  {
    title: 'ISL Alphabet',
    icon: Book,
    color: 'text-violet-600 bg-violet-100',
    desc: 'Learn the Indian Sign Language alphabet (fingerspelling). Each letter has a distinct handshape used in names and words. ISLRTC and other official resources provide standardized fingerspelling charts. Practice the alphabet as the foundation for names and loan words.',
    links: [
      { label: 'ISL Alphabet (YouTube)', url: 'https://www.youtube.com/results?search_query=Indian+Sign+Language+alphabet' },
      { label: 'ISLRTC – Official resources', url: 'https://islrtc.nic.in' },
    ],
  },
  {
    title: 'Greetings',
    icon: MessageCircle,
    color: 'text-emerald-600 bg-emerald-100',
    desc: 'Common greetings in ISL: Hello, Good morning, Good night, How are you, Nice to meet you, Thank you, See you later. Use these in daily conversation and in the Dashboard voice/gesture practice.',
    links: [
      { label: 'ISL Greetings tutorial', url: 'https://www.youtube.com/results?search_query=ISL+greetings+sign+language' },
    ],
  },
  {
    title: 'Pronouns',
    icon: Users,
    color: 'text-amber-600 bg-amber-100',
    desc: 'I, you, he, she, we, they, my, your, and other pronouns in Indian Sign Language. Pronouns are often indicated by pointing and placement in signing space. ISL grammar uses these for clear reference.',
    links: [
      { label: 'Pronouns in ISL', url: 'https://www.youtube.com/results?search_query=ISL+pronouns' },
    ],
  },
  {
    title: 'Question Words',
    icon: HelpCircle,
    color: 'text-blue-600 bg-blue-100',
    desc: 'What, who, where, when, why, how—question words and how to form questions in ISL. Question formation may use specific non-manual markers (e.g. facial expression) and word order. Refer to ISLRTC and linguistic resources for details.',
    links: [
      { label: 'Question words in ISL', url: 'https://www.youtube.com/results?search_query=ISL+question+words' },
    ],
  },
  {
    title: 'Daily Conversations',
    icon: MessageCircle,
    color: 'text-rose-600 bg-rose-100',
    desc: 'Everyday phrases: introductions, asking for help, polite expressions, and short dialogues. Practice on the Dashboard with voice or text to see signs for common phrases. Align with ISL vocabulary and usage promoted by ISLRTC.',
    links: [
      { label: 'Daily ISL conversations', url: 'https://www.youtube.com/results?search_query=Indian+Sign+Language+daily+conversation' },
    ],
  },
  {
    title: 'Grammar Rules',
    icon: FileText,
    color: 'text-indigo-600 bg-indigo-100',
    desc: 'Word order, negation, tense, and other grammatical structures in Indian Sign Language. ISL has its own grammar distinct from spoken Indian languages. For in-depth grammar and research, see ISLRTC publications and training materials.',
    links: [
      { label: 'ISL grammar overview', url: 'https://www.youtube.com/results?search_query=ISL+grammar' },
      { label: 'ISLRTC – Training & research', url: 'https://islrtc.nic.in' },
    ],
  },
]

const Resources: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-violet-50/80 via-white to-indigo-50/60 p-8 lg:p-10 border border-violet-100/80 shadow-lg shadow-violet-500/10">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 mb-2 text-center">Resources</h1>
        <p className="text-gray-600 text-center mb-12 text-lg">Organized learning hub for Indian Sign Language. Content aligned with ISLRTC and official ISL promotion.</p>

        <div className="space-y-8">
          {sections.map((sec) => (
            <div key={sec.title} className="rounded-2xl border border-violet-100 bg-white p-8 shadow-md shadow-violet-500/5 hover:shadow-lg hover:shadow-violet-500/10 transition-all">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${sec.color}`}>
                  <sec.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{sec.title}</h2>
                  <p className="text-gray-600 mb-4">{sec.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {sec.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-50 text-violet-700 hover:bg-violet-100 font-medium"
                      >
                        {link.label} <ExternalLink className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Official ISLRTC section */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-indigo-50 to-violet-50 border-2 border-violet-200">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-10 h-10 text-indigo-600" />
            <h3 className="text-xl font-bold text-gray-800">Official ISL Resource References (ISLRTC)</h3>
          </div>
          <p className="text-gray-700 mb-4">
            The <strong>Indian Sign Language Research and Training Centre (ISLRTC)</strong>, under the Department of Empowerment of Persons with Disabilities, Government of India, is the national body for:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Research and documentation of Indian Sign Language</li>
            <li>Standardization of ISL vocabulary and grammar</li>
            <li>Training programmes (e.g. DISLI for interpreters, DTISL for teachers)</li>
            <li>Official dictionaries, curricula, and educational materials</li>
          </ul>
          <p className="text-gray-600 mb-4">
            For authoritative tutorials, dictionaries, and training, use ISLRTC’s official website and published resources. This page’s links (e.g. YouTube) are for supplementary practice; for certification and formal training, refer to ISLRTC.
          </p>
          <a
            href="https://islrtc.nic.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
          >
            ISLRTC official website <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default Resources
