import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', subject:'', message:''})
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('')
    try{
      const res = await fetch(`${API}/api/contact`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if(data.ok){
        setStatus('Thanks! We will reach out soon.')
        setForm({name:'', email:'', subject:'', message:''})
      }else{
        setStatus('Something went wrong.')
      }
    }catch(e){
      setStatus('Network error. Try again later.')
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white/80 ring-1 ring-slate-200 p-6">
          <h2 className="text-2xl font-semibold text-slate-800">Contact us</h2>
          <p className="text-slate-600 mt-1">Questions or feedback? Send a note.</p>
          <form onSubmit={submit} className="mt-6 grid grid-cols-1 gap-4">
            <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Name" className="rounded-xl px-4 py-3 ring-1 ring-slate-200 focus:ring-slate-400 outline-none bg-white/90" />
            <input required type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Email" className="rounded-xl px-4 py-3 ring-1 ring-slate-200 focus:ring-slate-400 outline-none bg-white/90" />
            <input required value={form.subject} onChange={e=>setForm({...form, subject:e.target.value})} placeholder="Subject" className="rounded-xl px-4 py-3 ring-1 ring-slate-200 focus:ring-slate-400 outline-none bg-white/90" />
            <textarea required value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder="Message" rows={5} className="rounded-xl px-4 py-3 ring-1 ring-slate-200 focus:ring-slate-400 outline-none bg-white/90" />
            <button className="mt-2 rounded-full bg-slate-900 text-white px-5 py-3 font-medium">Send</button>
            {status && <p className="text-sm text-slate-600">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
