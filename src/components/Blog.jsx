import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Blog(){
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    async function load(){
      try{
        const res = await fetch(`${API}/api/blog`)
        const data = await res.json()
        if(data.ok) setPosts(data.items)
      }catch(e){
        // ignore
      } finally{
        setLoading(false)
      }
    }
    load()
  },[])

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-blue-50 to-pink-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-slate-800">From the blog</h2>
        {loading ? (
          <p className="text-slate-600 mt-4">Loading posts…</p>
        ) : (
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {posts.map(p => (
              <article key={p.id} className="rounded-2xl bg-white/80 p-5 ring-1 ring-slate-200">
                <h3 className="font-semibold text-slate-800">{p.title}</h3>
                <p className="text-slate-600 text-sm mt-2">{p.excerpt || p.content?.slice(0,120)}</p>
                <div className="mt-4 text-xs text-slate-500">By {p.author}</div>
              </article>
            ))}
            {posts.length === 0 && (
              <div className="text-slate-600">No posts yet.</div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
