export default function Pricing(){
  const tiers = [
    {
      name: 'Free',
      price: '$0',
      features: ['Basic timer', '3 projects', 'Weekly summary']
    },
    {
      name: 'Pro',
      price: '$5/mo',
      featured: true,
      features: ['Unlimited projects', 'Advanced insights', 'Export CSV']
    },
    {
      name: 'Team',
      price: '$12/mo',
      features: ['Shared workspaces', 'Admin dashboard', 'Priority support']
    }
  ]

  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-slate-800">Simple pricing</h2>
        <p className="text-center text-slate-600 mt-2">Start free, upgrade anytime</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t)=> (
            <div key={t.name} className={`rounded-2xl p-6 ring-1 ring-slate-200 bg-white/80 backdrop-blur shadow-sm ${t.featured ? 'border-2 border-pink-300 shadow-pink-100' : ''}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-slate-800">{t.name}</h3>
                <span className="text-2xl font-bold text-slate-900">{t.price}</span>
              </div>
              <ul className="mt-4 space-y-2 text-slate-600">
                {t.features.map((f)=> (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-full px-4 py-2 font-medium ${t.featured ? 'bg-slate-900 text-white' : 'bg-white text-slate-700 ring-1 ring-slate-200'}`}>Choose {t.name}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
