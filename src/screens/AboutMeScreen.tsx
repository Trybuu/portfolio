import { motion } from 'framer-motion'

// Dane do sekcji prywatnej
const personalInfo = [
  { title: 'Kawa', desc: 'Specialty & V60', icon: '☕', size: 'col-span-1' },
  { title: 'Góry', desc: 'Zimą i latem', icon: '🏔️', size: 'col-span-1' },
  { title: 'Gaming', desc: 'RPG & Retro', icon: '🎮', size: 'col-span-2' },
  { title: 'Setup', desc: 'Minimalistyczny', icon: '💻', size: 'col-span-2' },
  { title: 'Muzyka', desc: 'Vinyl Collector', icon: '🎧', size: 'col-span-1' },
  {
    title: 'Kod po godzinach',
    desc: 'Open Source',
    icon: '🚀',
    size: 'col-span-1',
  },
]

const skills = [
  {
    title: 'Frontend',
    tech: 'React, Next.js, Tailwind',
    color: 'bg-orange-500',
  },
  {
    title: 'Backend',
    tech: 'Node.js, PostgreSQL, Prisma',
    color: 'bg-slate-700',
  },
  { title: 'Mobile', tech: 'React Native, Expo', color: 'bg-slate-800' },
  { title: 'DevOps', tech: 'Docker, AWS, CI/CD', color: 'bg-orange-600' },
]

export function AboutMeScreen() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between min-h-full w-full mx-auto px-8 md:px-20 py-24 gap-12 overflow-hidden">
        {/* Lewa strona: Tekst */}
        <div className="flex-1 space-y-6 z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Pasjonuję się tworzeniem{' '}
            <span className="text-orange-500">kompleksowych</span> ekosystemów
            cyfrowych.
          </h2>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Nie ograniczam się do jednej technologii – dobieram narzędzia tak,
            aby finalny produkt był szybki, bezpieczny i intuicyjny dla
            użytkownika.
          </p>
        </div>

        {/* Prawa strona: Interaktywna Talia Kart */}
        <div className="flex-1 w-full max-w-md relative h-['400px'] flex items-center justify-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`absolute w-64 h-80 ${skill.color} rounded-2xl p-6 shadow-2xl cursor-pointer border border-white/10 backdrop-blur-md`}
              initial={{ rotate: index * 5 - 10, x: index * 10 - 20 }}
              whileHover={{
                scale: 1.05,
                rotate: 0,
                x: 0,
                zIndex: 50,
                transition: { duration: 0.2 },
              }}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              style={{
                zIndex: index,
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              }}
            >
              <div className="flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono text-white/50">
                    0{index + 1}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-white/80 font-mono">
                    {skill.tech}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- DRUGA SEKCJA (Prywatna) --- */}
      <div className="flex flex-col items-center min-h-full w-full mx-auto px-8 md:px-20 py-24 gap-12">
        {/* Nagłówek wycentrowany */}
        <div className="text-center space-y-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Poza kodem jestem...{' '}
            <span className="text-orange-500">człowiekiem</span>.
          </h2>
          <p className="text-slate-400 text-lg">
            Wierzę, że najlepsze pomysły rodzą się z dala od monitora. Oto kilka
            rzeczy, które napędzają moją kreatywność.
          </p>
        </div>

        {/* Siatka Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
          {personalInfo.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`${item.size} bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm flex flex-col justify-between group overflow-hidden relative`}
            >
              {/* Dekoracyjne tło-ikona wewnątrz kafelka */}
              <div className="absolute -right-4 -bottom-4 text-8xl opacity-5 group-hover:opacity-10 transition-opacity">
                {item.icon}
              </div>

              <div className="text-3xl mb-4">{item.icon}</div>
              <div>
                <h4 className="text-white font-bold text-xl">{item.title}</h4>
                <p className="text-slate-500 text-sm font-mono">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AboutMeScreen
