import React from 'react'
import Layout from '../components/Layout'
import { BookOpen, Target, Eye, Rocket, Building2, ExternalLink } from 'lucide-react'

const About: React.FC = () => {
  const cards = [
    {
      icon: BookOpen,
      title: 'What is Indian Sign Language?',
      color: 'from-amber-400 to-orange-500',
      bg: 'bg-amber-50 border-amber-200',
      text: 'Indian Sign Language (ISL) is the primary sign language used by the Deaf community in India. It is a visual-gestural language with its own grammar and vocabulary, distinct from spoken languages. ISL enables effective communication and inclusion for millions of deaf and hard-of-hearing individuals across the country. It is not a signed version of Hindi or English but has its own linguistic structure.',
    },
    {
      icon: Eye,
      title: 'Importance of Accessibility',
      color: 'from-emerald-400 to-teal-500',
      bg: 'bg-emerald-50 border-emerald-200',
      text: 'Accessibility ensures that everyone, including deaf and hard-of-hearing persons, can participate fully in education, employment, and society. Learning ISL promotes inclusion, breaks communication barriers, and empowers the Deaf community. The Rights of Persons with Disabilities Act (RPwD), 2016 recognizes the importance of sign language. Accessible design and ISL resources are essential for equal opportunities.',
    },
    {
      icon: Target,
      title: 'Objectives of This System',
      color: 'from-violet-400 to-purple-500',
      bg: 'bg-violet-50 border-violet-200',
      text: 'To provide an interactive platform for learning Indian Sign Language; to offer grammar explanations, sign meanings, and practice tools; to support beginners and educators with structured content aligned with national efforts; and to promote awareness and adoption of ISL through technology. This platform complements formal training and resources provided by the national body (ISLRTC).',
    },
    {
      icon: Rocket,
      title: 'Future Scope',
      color: 'from-rose-400 to-pink-500',
      bg: 'bg-rose-50 border-rose-200',
      text: '3D avatar animation for realistic sign demonstration; gesture recognition using webcam for real-time feedback; AI-powered motion capture to evaluate and improve signing accuracy. These features will make ISL learning more immersive and effective, in line with research and development in sign language technology.',
    },
  ]

  return (
    <Layout>
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-violet-50/80 via-white to-indigo-50/60 p-8 lg:p-10 border border-violet-100/80 shadow-lg shadow-violet-500/10">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 mb-2 text-center">About ISL Learning</h1>
        <p className="text-gray-600 text-center mb-12 text-lg">Learn about Indian Sign Language and our mission.</p>

        <div className="grid gap-8 md:grid-cols-2">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`rounded-2xl border-2 ${card.bg} p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${card.color} text-white mb-6`}>
                <card.icon className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{card.title}</h2>
              <p className="text-gray-700 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>

        {/* ISLRTC – Reference Authority */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-indigo-50 to-violet-50 border-2 border-indigo-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-indigo-100">
              <Building2 className="w-8 h-8 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Reference Authority: Indian Sign Language Research and Training Centre (ISLRTC)</h3>
              <p className="text-sm text-gray-600">Government of India • Ministry of Social Justice & Empowerment</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            We acknowledge the <strong>Indian Sign Language Research and Training Centre (ISLRTC)</strong> as the national body for the promotion, development, and standardization of Indian Sign Language. ISLRTC was established on 28 September 2015 under the Department of Empowerment of Persons with Disabilities. Its mandate includes:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Research and documentation of Indian Sign Language (ISL corpus and vocabulary)</li>
            <li>Training and capacity building for officials, teachers, and the public in ISL</li>
            <li>Development of ISL interpreters (e.g. Diploma in Indian Sign Language Interpretation – DISLI)</li>
            <li>Teacher training (e.g. Diploma in Teaching Indian Sign Language – DTISL)</li>
            <li>Promotion and use of ISL in education and society</li>
            <li>International collaboration to upgrade ISL standards</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Our content and objectives are aligned with supporting ISL learning and accessibility in line with ISLRTC’s vision. For official curricula, dictionaries, and training programmes, please refer to ISLRTC.
          </p>
          <a
            href="https://islrtc.nic.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
          >
            Visit ISLRTC official website <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default About
