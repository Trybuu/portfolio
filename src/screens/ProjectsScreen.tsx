import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// Przykładowe dane dla Twoich projektów
const projects = [
  {
    title: 'Skalowalny E-commerce',
    description:
      'Kompleksowa platforma sprzedażowa z systemem CMS, płatnościami online i integracją z magazynem. Next.js, GraphQL, PostgreSQL, Docker.',
    image:
      'https://via.placeholder.com/800x450/FF8C00/FFFFFF?text=E-commerce+Platform', // Placeholder - zastąp swoimi zdjęciami
    tags: ['Next.js', 'GraphQL', 'TypeScript', 'Stripe'],
    link: '#',
  },
  {
    title: 'Aplikacja Mobilna Fitness',
    description:
      'Personalizowany trener fitness z planami treningowymi, śledzeniem postępów i integracją z wearables. React Native, Firebase.',
    image: 'https://via.placeholder.com/800x450/007BFF/FFFFFF?text=Fitness+App',
    tags: ['React Native', 'Expo', 'Firebase', 'Redux'],
    link: '#',
  },
  {
    title: 'System Zarządzania Projektem',
    description:
      'Narzędzie do zarządzania zespołami i zadaniami z modułem Gantta, raportami i powiadomieniami. React, Node.js, MongoDB.',
    image:
      'https://via.placeholder.com/800x450/28A745/FFFFFF?text=Project+Management',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    link: '#',
  },
  {
    title: 'Blockchain Explorer',
    description:
      'Wizualizacja transakcji i danych z sieci blockchain w czasie rzeczywistym. WebSockets, D3.js, Rust (backend).',
    image:
      'https://via.placeholder.com/800x450/6C757D/FFFFFF?text=Blockchain+Explorer',
    tags: ['WebSockets', 'D3.js', 'Rust', 'TypeScript'],
    link: '#',
  },
]

function ProjectScreen() {
  return (
    <div className="w-full mx-auto px-8 md:px-20 py-24">
      {/* Nagłówek */}
      <div className="mb-20">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
          Wybrane <span className="text-orange-500">Projekty.</span>
        </h2>
        <div className="h-1 w-20 bg-orange-500 rounded-full" />
      </div>

      {/* Lista Projektów w pionie */}
      <div className="space-y-32">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
          >
            {/* Wizualizacja / Obrazek */}
            <div className="flex-1 w-full group relative">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative aspect-video bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-slate-600 font-mono italic">
                  [ Project_Mockup_{index + 1}.png ]
                </div>
              </div>
            </div>

            {/* Opis projektu */}
            <div className="flex-1 space-y-6">
              <span className="font-mono text-orange-500 text-sm">
                0{index + 1}.
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                {project.title}
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono py-1 px-3 border border-slate-700 rounded-full text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4">
                <button className="text-white font-bold flex items-center gap-2 group">
                  Sprawdź Case Study
                  <span className="group-hover:translate-x-2 transition-transform text-orange-500">
                    →
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ProjectScreen
