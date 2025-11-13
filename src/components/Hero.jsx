import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-24" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-24 sm:py-32">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200 shadow-sm">New • Pastel UI</span>
              <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Track study time beautifully
              </h1>
              <p className="mt-4 text-slate-700/80 text-lg">
                A minimal time tracking app for students. Plan sessions, focus with timers, and see gentle insights.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#pricing" className="inline-flex justify-center rounded-full bg-slate-900 text-white px-5 py-3 font-medium shadow-lg shadow-blue-200/50">Get Started</a>
                <a href="#features" className="inline-flex justify-center rounded-full bg-white/80 text-slate-700 px-5 py-3 font-medium ring-1 ring-slate-200 backdrop-blur">See Features</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white" />
    </section>
  )
}
