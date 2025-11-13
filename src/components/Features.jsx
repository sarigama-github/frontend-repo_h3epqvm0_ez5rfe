export default function Features(){
  const items = [
    {
      title: 'Pomodoro Focus',
      desc: 'Gentle timers and breaks with soft haptics and sounds.',
    },
    {
      title: 'Session Plans',
      desc: 'Create study blocks with goals, tags and course context.',
    },
    {
      title: 'Calm Insights',
      desc: 'Pastel charts for weekly streaks and time by course.',
    },
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl bg-white/70 backdrop-blur p-6 ring-1 ring-slate-200 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800">{it.title}</h3>
              <p className="mt-2 text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
