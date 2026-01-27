function Home() {
  return (
    // min-h-full upewnia się, że sekcja zajmuje całą wysokość, a p-8/p-20 dodaje oddech
    <div className="flex flex-col md:flex-row items-center justify-between min-h-full w-full mx-auto px-8 md:px-20 py-24 gap-12">
      {/* Lewa strona: Tekst */}
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
          Cześć, jestem <span className="text-orange-500">Marek.</span> <br />
          Buduję skalowalne aplikacje od pomysłu aż po wdrożenie.
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
          Full Stack Developer specjalizujący się w nowoczesnych aplikacjach
          <span className="text-slate-200"> SPA</span>, rozwiązaniach mobilnych
          i wydajnych systemach backendowych. Tworzę kod, który dostarcza
          wartość biznesową.
        </p>

        {/* Miejsce na Call to Action (opcjonalnie) */}
        <div className="pt-4">
          <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors">
            Zobacz moje projekty
          </button>
        </div>
      </div>

      {/* Prawa strona: Twoje karty lub element graficzny */}
      <div className="flex-1 w-full max-w-md">
        <div className="grid grid-cols-2 gap-4">
          {/* Przykładowe karty-placeholdery */}
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-32 md:h-40 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center backdrop-blur-sm"
            >
              <p className="text-slate-500 font-mono text-xs italic">
                Feature_{i}.tsx
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
