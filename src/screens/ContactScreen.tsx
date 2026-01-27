import { motion } from 'framer-motion'

function ContactScreen() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-full w-full mx-auto px-8 md:px-20 py-24 gap-16">
      {/* LEWA STRONA: Info & Socials */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-8"
      >
        <div>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">
            Zróbmy coś <br />
            <span className="text-orange-500">razem.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-sm">
            Jesteś zainteresowany współpracą? A może chcesz po prostu pogadać o
            technologii? Napisz do mnie.
          </p>
        </div>

        <div className="space-y-4 font-mono">
          <div className="group cursor-pointer">
            <p className="text-slate-500 text-xs uppercase tracking-widest">
              Email
            </p>
            <p className="text-white text-xl group-hover:text-orange-500 transition-colors">
              marek@dev.pl
            </p>
          </div>

          <div className="flex gap-6 pt-4">
            {['GitHub', 'LinkedIn', 'X (Twitter)'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-slate-400 hover:text-white transition-colors text-sm underline underline-offset-4"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* PRAWA STRONA: Formularz */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 w-full max-w-lg"
      >
        <form className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl backdrop-blur-xl space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-mono text-orange-500 uppercase">
              01. Twoje Imię
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-slate-700 py-2 text-white focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="Jan Kowalski"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-orange-500 uppercase">
              02. Email
            </label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-slate-700 py-2 text-white focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="jan@przyklad.pl"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-orange-500 uppercase">
              03. Wiadomość
            </label>
            <textarea
              rows="4"
              className="w-full bg-transparent border-b border-slate-700 py-2 text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
              placeholder="O czym myślisz?"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-500/20"
          >
            Wyślij wiadomość
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}

export default ContactScreen
