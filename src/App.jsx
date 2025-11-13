import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import Contact from './components/Contact'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function App() {
  const [showAuth, setShowAuth] = useState(false)
  const [authState, setAuthState] = useState({ email:'', password:'', name:'', mode:'login', status:'' })

  const auth = async (e) => {
    e.preventDefault()
    setAuthState(s=>({ ...s, status: '' }))
    try{
      const url = authState.mode === 'login' ? `${API}/api/auth/login` : `${API}/api/auth/register`
      const payload = authState.mode === 'login' ? { email: authState.email, password: authState.password } : { name: authState.name, email: authState.email, password: authState.password }
      const res = await fetch(url, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
      const data = await res.json()
      if(res.ok && data.ok){
        setAuthState(s=>({ ...s, status: authState.mode === 'login' ? `Welcome back, ${data.name}!` : 'Account created! You can sign in now.' }))
      } else {
        setAuthState(s=>({ ...s, status: data.detail || 'Auth failed' }))
      }
    }catch(err){
      setAuthState(s=>({ ...s, status: 'Network error' }))
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar onOpenAuth={() => setShowAuth(true)} />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Blog />
        <Contact />
      </main>

      {showAuth && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900/40 backdrop-blur-sm" onClick={()=>setShowAuth(false)}>
          <div className="w-full max-w-md rounded-2xl bg-white p-6 ring-1 ring-slate-200" onClick={e=>e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{authState.mode==='login'? 'Sign in' : 'Create account'}</h3>
              <button onClick={()=>setShowAuth(false)} className="text-slate-500">Close</button>
            </div>
            <form onSubmit={auth} className="mt-4 grid gap-3">
              {authState.mode==='register' && (
                <input placeholder="Name" value={authState.name} onChange={e=>setAuthState(s=>({ ...s, name:e.target.value }))} className="rounded-xl px-4 py-3 ring-1 ring-slate-200 focus:ring-slate-400 outline-none" />
              )}
              <input type="email" placeholder="Email" value={authState.email} onChange={e=>setAuthState(s=>({ ...s, email:e.target.value }))} className="rounded-xl px-4 py-3 ring-1 ring-slate-200 focus:ring-slate-400 outline-none" />
              <input type="password" placeholder="Password" value={authState.password} onChange={e=>setAuthState(s=>({ ...s, password:e.target.value }))} className="rounded-xl px-4 py-3 ring-1 ring-slate-200 focus:ring-slate-400 outline-none" />
              <button className="mt-2 rounded-full bg-slate-900 text-white px-5 py-3 font-medium">{authState.mode==='login' ? 'Sign in' : 'Create account'}</button>
              <p className="text-sm text-slate-600">{authState.mode==='login' ? 'No account?' : 'Have an account?'} <button type="button" className="underline" onClick={()=>setAuthState(s=>({ ...s, mode: s.mode==='login' ? 'register' : 'login', status:'' }))}>{authState.mode==='login' ? 'Create one' : 'Sign in'}</button></p>
              {authState.status && <p className="text-sm text-slate-600">{authState.status}</p>}
            </form>
          </div>
        </div>
      )}

      <footer className="py-10 text-center text-slate-500">© {new Date().getFullYear()} StudyFlow</footer>
    </div>
  )
}

export default App
