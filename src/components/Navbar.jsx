import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar({ onOpenAuth }) {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur bg-white/60 border-b border-pink-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-pink-300 to-blue-300" />
            <span className="font-semibold text-slate-700">StudyFlow</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-slate-600">
            <button onClick={() => scrollTo('features')} className="hover:text-slate-900">Features</button>
            <button onClick={() => scrollTo('pricing')} className="hover:text-slate-900">Pricing</button>
            <button onClick={() => scrollTo('blog')} className="hover:text-slate-900">Blog</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-slate-900">Contact</button>
            <button onClick={onOpenAuth} className="ml-4 rounded-full bg-gradient-to-r from-pink-400 to-blue-400 text-white px-4 py-2 font-medium shadow-md shadow-pink-200/60">Sign In</button>
          </nav>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            <Menu className="h-6 w-6 text-slate-700" />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-3 text-slate-700">
            <button onClick={() => scrollTo('features')}>Features</button>
            <button onClick={() => scrollTo('pricing')}>Pricing</button>
            <button onClick={() => scrollTo('blog')}>Blog</button>
            <button onClick={() => scrollTo('contact')}>Contact</button>
            <button onClick={onOpenAuth} className="rounded-full bg-gradient-to-r from-pink-400 to-blue-400 text-white px-4 py-2 font-medium shadow">Sign In</button>
          </div>
        )}
      </div>
    </header>
  )
}
