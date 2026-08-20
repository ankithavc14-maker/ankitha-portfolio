import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Lenis from 'lenis'
import { ArrowUpRight, Github, Linkedin, Mail, Download, ExternalLink, X, ChevronRight, Terminal, Cpu, Database, Boxes, Send, MapPin, Layers3, Code2, Menu } from 'lucide-react'
import { profile, skills, projects, experience, certifications } from './data/portfolio'
import './styles.css'

function Scene() {
  const group = useRef()
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const move = e => setPointer({ x: (e.clientX / innerWidth - .5), y: (e.clientY / innerHeight - .5) })
    addEventListener('pointermove', move); return () => removeEventListener('pointermove', move)
  }, [])
  useFrame((_, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * .08
    group.current.rotation.x += (pointer.y * .12 - group.current.rotation.x) * .025
    group.current.position.x += (pointer.x * .22 - group.current.position.x) * .025
  })
  return <group ref={group}>
    <mesh rotation={[.4, .5, .1]}>
      <icosahedronGeometry args={[1.25, 1]} />
      <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={.13} />
    </mesh>
    <mesh position={[1.9, .7, -.8]} rotation={[.3, .7, .2]}>
      <boxGeometry args={[.5,.5,.5]} />
      <meshStandardMaterial color="#22d3ee" emissive="#082f49" emissiveIntensity={1.4} metalness={.6} roughness={.3} />
    </mesh>
    <mesh position={[-2.1, -.8, -.3]}>
      <octahedronGeometry args={[.45, 0]} />
      <meshStandardMaterial color="#a78bfa" emissive="#2e1065" emissiveIntensity={1.3} metalness={.7} roughness={.25} />
    </mesh>
  </group>
}

function HeroCanvas() {
  return <div className="absolute inset-0 opacity-90">
    <Canvas camera={{ position: [0, 0, 5.8], fov: 48 }} dpr={[1, 1.5]} gl={{ antialias: true, powerPreference: 'high-performance' }}>
      <ambientLight intensity={.55} />
      <pointLight position={[3, 2, 4]} intensity={18} color="#8b5cf6" />
      <pointLight position={[-3, -1, 2]} intensity={10} color="#22d3ee" />
      <Scene />
    </Canvas>
  </div>
}
function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null); const inView = useInView(ref, { once: true, amount: .18 })
  return <motion.div ref={ref} className={className} initial={{ opacity: 0, y: 35 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .75, delay, ease: [0.16, 1, .3, 1] }}>{children}</motion.div>
}

function BootIntro({ onComplete }) {
  const [lines, setLines] = useState([])
  const [phase, setPhase] = useState('boot')
  const timers = useRef([])

  useEffect(() => {
    const sequence = [
      ['> initializing portfolio...', 120],
      ['[✓] AI / ML modules', 360],
      ['[✓] Backend systems', 620],
      ['[✓] Project archive', 880],
      ['[✓] Experience + credentials', 1140],
      ['> system ready', 1430],
    ]
    sequence.forEach(([text, delay]) => {
      timers.current.push(setTimeout(() => setLines(v => [...v, text]), delay))
    })
    timers.current.push(setTimeout(() => setPhase('reveal'), 1680))
    timers.current.push(setTimeout(onComplete, 3150))
    return () => timers.current.forEach(clearTimeout)
  }, [onComplete])

  const skip = () => {
    timers.current.forEach(clearTimeout)
    onComplete()
  }

  return <AnimatePresence>
    <motion.div
      className={`boot-screen ${phase === 'reveal' ? 'boot-screen-reveal' : ''}`}
      initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      <div className="boot-noise" />
      <div className="boot-orbit boot-orbit-a" />
      <div className="boot-orbit boot-orbit-b" />
      <div className="boot-window">
        <div className="boot-bar">
          <div className="boot-dots"><i/><i/><i/></div>
          <span>ankitha@portfolio: ~</span>
          <span className="boot-status">PORTFOLIO.EXE</span>
        </div>
        <div className="boot-body">
          <div className="boot-copy">
            <div className="boot-prompt">$ ./start_portfolio.sh<span className="blink">_</span></div>
            <div className="boot-lines">{lines.map((line, i) => <motion.div key={line} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .22 }} className={i === lines.length - 1 ? 'boot-line-current' : ''}>{line}</motion.div>)}</div>
            {phase === 'reveal' && <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="boot-ready">WELCOME TO ANKITHA'S DIGITAL UNIVERSE<span className="blink">_</span></motion.div>}
          </div>
          <div className="boot-mini-scene">
            <div className="boot-ring"/><div className="boot-ring boot-ring-2"/>
            <div className="boot-core">AC</div>
          </div>
        </div>
        <div className="boot-footer"><span>Ln 01, Col 01</span><button onClick={skip}>Skip intro →</button><span>UTF-8 · SYSTEM READY</span></div>
      </div>
      <div className="boot-progress"><span/></div>
    </motion.div>
  </AnimatePresence>
}

function Header() {
  const [open, setOpen] = useState(false)
  const links = [['About', 'about'], ['Projects', 'projects'], ['Experience', 'experience'], ['Certificates', 'certificates'], ['Contact', 'contact']]
  return <header className="fixed top-0 z-50 w-full px-4 md:px-8 py-4"><div className="glass mx-auto max-w-7xl rounded-2xl px-4 md:px-5 py-3 flex items-center justify-between">
    <a href="#top" className="font-mono text-xs tracking-[.25em] text-white">AVC<span className="text-violet-400">/</span>26</a>
    <nav className="hidden md:flex items-center gap-7 text-[11px] uppercase tracking-[.18em] text-zinc-400">{links.map(([label,id]) => <a key={id} href={'#'+id} className="hover:text-white transition">{label}</a>)}</nav>
    <a href={profile.github} target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[11px] uppercase tracking-wider hover:bg-white/5"><Github size={14}/> GitHub</a>
    <button onClick={() => setOpen(!open)} className="md:hidden p-2">{open ? <X/> : <Menu/>}</button>
  </div>{open && <div className="glass mx-auto mt-2 max-w-7xl rounded-2xl p-4 grid gap-2">{links.map(([label,id]) => <a onClick={() => setOpen(false)} key={id} href={'#'+id} className="p-3 text-sm text-zinc-300">{label}</a>)}</div>}</header>
}

function Hero() {
  return <section id="top" className="relative min-h-[88vh] overflow-hidden pt-24 hero-section">
    <HeroCanvas />
    <motion.div
      className="hero-image-layer"
      initial={{ opacity: 0, y: -220, scale: .90 }}
      animate={{ opacity: [0, .72, .50], y: [-220, 8, 0], scale: [.92, 1.025, 1] }}
      transition={{ duration: 1.65, delay: .12, times: [0, .62, 1], ease: [0.16, 1, .3, 1] }}
    >
      <img src="/assets/hero.png" alt="Ankitha working on a laptop" />
    </motion.div>
    <div className="hero-image-vignette" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(124,58,237,.18),transparent_28%),linear-gradient(90deg,#05060a_5%,rgba(5,6,10,.78)_42%,rgba(5,6,10,.18)_100%)]" />
    <div className="hero-grid absolute inset-0" />
    <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 min-h-[74vh] flex items-center">
      <div className="max-w-3xl hero-copy">
        <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.72,ease:[.16,1,.3,1]}} className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/5 px-3 py-1.5 text-[10px] uppercase tracking-[.22em] text-violet-200 hero-step"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]"/> Available for opportunities</motion.div>
        <motion.h1 initial={{opacity:0,y:-78,scale:.96}} animate={{opacity:1,y:[-78,6,0],scale:[.97,1.012,1]}} transition={{duration:1.45,delay:.12,times:[0,.62,1],ease:[.16,1,.3,1]}} className="font-display text-[clamp(3.3rem,7.5vw,7.1rem)] leading-[.84] tracking-[-.07em] font-semibold hero-name">ANKITHA<br/><span className="gradient-text">CHANDAN.</span></motion.h1>
        <motion.p initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.72,delay:1.12,ease:[.16,1,.3,1]}} className="mt-6 max-w-2xl text-base md:text-lg text-zinc-200 hero-step">{profile.role}</motion.p>
        <motion.p initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.72,delay:1.28,ease:[.16,1,.3,1]}} className="mt-3 max-w-2xl text-sm md:text-base leading-7 text-zinc-400 hero-step">{profile.tagline}</motion.p>
        <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.72,delay:1.44,ease:[.16,1,.3,1]}} className="mt-7 flex flex-wrap gap-3 hero-step">
          <a href="#projects" className="cta"><span>Explore projects</span><ArrowUpRight size={16}/></a>
          <a href="/assets/Resume.pdf" download className="secondary"><Download size={15}/> Resume</a>
          <a href="#contact" className="secondary"><Mail size={15}/> Contact</a>
        </motion.div>
        <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.65,delay:1.62}} className="mt-6 flex gap-5 text-zinc-400 hero-social"><a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white"><Linkedin size={18}/></a><a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white"><Github size={18}/></a></motion.div>
      </div>
    </div>
    <div className="absolute bottom-4 left-6 right-6 z-10 mx-auto max-w-7xl flex justify-between font-mono text-[9px] tracking-[.25em] text-zinc-500 uppercase hero-footer"><span>Scroll to explore</span></div>
  </section>
}

function About() {
  const [active, setActive] = useState(null)
  return <section id="about" className="section-shell">
    <Reveal>
      <div className="section-kicker">01 — ABOUT / TECH STACK</div>
      <div className="grid lg:grid-cols-[.75fr_1.25fr] gap-12 items-center">
        <div>
          <h2 className="section-title">Backend engineering with<br/><span className="gradient-text">AI in the workflow.</span></h2>
          <p className="mt-7 text-zinc-400 leading-8 max-w-2xl">Computer Science graduate with hands-on experience designing, developing, and testing backend systems and RESTful APIs using Python, FastAPI, Flask, and Django. I focus on modular backend development, database integration, authentication, API testing, and practical AI capabilities.</p>
          <div className="mt-8 grid grid-cols-3 gap-3 max-w-xl"><Stat n="10+" l="REST endpoints"/><Stat n="20K+" l="training images"/><Stat n="8.76" l="MCA CGPA"/></div>
        </div>
        <div className="stack-stage">
          <div className="stack-orbit stack-orbit-1"/><div className="stack-orbit stack-orbit-2"/>
          {skills.map(([name,type,icon],i)=><motion.button key={name} className={`stack-card stack-card-${i % 7} ${active===name?'stack-active':''}`} onMouseEnter={()=>setActive(name)} onFocus={()=>setActive(name)} onMouseLeave={()=>setActive(null)} onClick={()=>setActive(active===name?null:name)} whileHover={{y:-5, scale:1.02, z:30}} style={{transformStyle:'preserve-3d'}}>
            <span className="stack-icon">{icon}</span><span><strong>{name}</strong><small>{type}</small></span><span className="stack-arrow">↗</span>
          </motion.button>)}
          <AnimatePresence>{active && <motion.div className="stack-detail" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:10}}><b>{active}</b><span>{skills.find(x=>x[0]===active)?.[1]} · used across my projects</span></motion.div>}</AnimatePresence>
        </div>
      </div>
    </Reveal>
  </section>
}
function Stat({n,l}) { return <div className="stat"><b>{n}</b><span>{l}</span></div> }

function ProjectVisual({ p }) {
  if (p.image) return <img src={p.image} alt={`${p.title} cover`} className="absolute inset-0 h-full w-full object-cover project-cover-image" />
  return <div className={`absolute inset-0 visual-${p.visual}`}><div className="visual-orb"/><div className="visual-ring r1"/><div className="visual-ring r2"/><div className="visual-ring r3"/></div>
}

function ProjectCard({p, onOpen, featured=false}) {
  return <motion.article whileHover={{y:-7, rotateX:1, rotateY:-.7, scale:1.008}} onClick={() => onOpen(p)} className={`project-card group cursor-pointer ${featured?'project-featured':''}`} style={{transformStyle:'preserve-3d'}}>
    <div className="project-media"><ProjectVisual p={p}/><div className="absolute inset-0 bg-gradient-to-t from-[#07080c] via-transparent to-transparent"/><span className="project-cat">{p.category}</span><span className="project-index">0{projects.indexOf(p)+1}</span></div>
    <div className="p-6"><div className="flex justify-between gap-3"><h3 className="text-2xl font-display font-semibold">{p.title}</h3><ArrowUpRight className="text-zinc-600 group-hover:text-white transition"/></div><p className="mt-3 text-sm leading-6 text-zinc-500">{p.description}</p><div className="mt-5 flex flex-wrap gap-2">{p.stack.slice(0,5).map(x=><span key={x} className="tag">{x}</span>)}</div><div className="mt-6 flex flex-wrap gap-2"><button className="cta" onClick={e=>{e.stopPropagation();onOpen(p)}}>Explore <ArrowUpRight size={14}/></button>{p.live && <a className="secondary" href={p.live} target="_blank" rel="noreferrer" onClick={e=>e.stopPropagation()}>Live demo <ExternalLink size={13}/></a>}</div></div>
  </motion.article>
}

function Projects() {
  const [selected,setSelected]=useState(null)
  const featured = projects.slice(0,4), more = projects.slice(4)
  return <section id="projects" className="section-shell pt-16">
    <Reveal>
      <div className="section-kicker">02 — PROJECT ARCHIVE</div>
      <div className="flex items-end justify-between gap-6"><h2 className="section-title">Systems I’ve<br/><span className="gradient-text">built & shipped.</span></h2><p className="hidden md:block max-w-sm text-sm text-zinc-600 leading-6">Explore the featured systems, then open any project to inspect its stack and implementation.</p></div>
      <div className="mt-12 featured-project-grid">{featured.map(p=><ProjectCard key={p.id} p={p} onOpen={setSelected} featured/>)}</div>
      <div className="mt-20 section-kicker">ADDITIONAL BUILDS</div>
      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">{more.map(p=><ProjectCard key={p.id} p={p} onOpen={setSelected}/>)}</div>
    </Reveal>
    <AnimatePresence>{selected && <ProjectModal p={selected} close={()=>setSelected(null)}/>}</AnimatePresence>
  </section>
}
function ProjectModal({p,close}) { return <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-xl p-4 md:p-8 flex items-center justify-center" onClick={close}><motion.div initial={{opacity:0,scale:.92,y:25}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:.95}} onClick={e=>e.stopPropagation()} className="glass max-w-4xl w-full max-h-[90vh] overflow-auto rounded-3xl p-6 md:p-8"><div className="flex justify-between"><div><span className="project-cat">{p.category}</span><h3 className="mt-3 text-3xl md:text-5xl font-display font-semibold">{p.title}</h3></div><button onClick={close} className="icon-btn"><X/></button></div><div className="mt-8 grid lg:grid-cols-[1fr_.8fr] gap-8"><div><p className="text-zinc-300 leading-8">{p.description}</p><ul className="mt-7 space-y-3">{p.details.map(d=><li key={d} className="flex gap-3 text-sm text-zinc-400"><span className="text-cyan-300">◆</span>{d}</li>)}</ul></div><div className="rounded-2xl border border-white/10 bg-black/30 p-5"><div className="font-mono text-[10px] uppercase tracking-[.2em] text-zinc-600">Technology surface</div><div className="mt-4 flex flex-wrap gap-2">{p.stack.map(s=><span className="tag" key={s}>{s}</span>)}</div><div className="mt-8 flex flex-wrap gap-2">{p.live ? <><a className="cta" href={p.live} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14}/></a><a className="secondary" href={p.live} target="_blank" rel="noreferrer">Open preview <ArrowUpRight size={14}/></a></> : <span className="secondary opacity-50">Live demo URL not supplied</span>}{p.github ? <a className="secondary" href={p.github} target="_blank" rel="noreferrer"><Github size={15}/></a> : <a className="secondary" href={profile.github} target="_blank" rel="noreferrer"><Github size={15}/></a>}</div>{p.live && <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-black aspect-video"><iframe title={`${p.title} live preview`} src={p.live} className="h-full w-full" loading="lazy" sandbox="allow-scripts allow-same-origin allow-forms allow-popups" /></div>}</div></div></motion.div></motion.div> }

function Experience() { return <section id="experience" className="section-shell"><Reveal><div className="section-kicker">03 — EXPERIENCE / EDUCATION</div><div className="grid lg:grid-cols-[.75fr_1.25fr] gap-12"><div><h2 className="section-title">A timeline of<br/><span className="gradient-text">building.</span></h2><p className="mt-6 text-zinc-500 leading-7">From academic foundations to backend engineering and AI/ML systems.</p></div><div className="timeline">{experience.map((e,i)=><motion.div key={e.title} initial={{opacity:0,x:25}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.4}} transition={{delay:i*.08}} className="timeline-item"><div className="timeline-dot"/><div className="font-mono text-[10px] tracking-[.2em] text-violet-300">{e.date}</div><h3 className="mt-2 text-xl font-semibold">{e.title}</h3><div className="mt-1 text-sm text-zinc-500">{e.org}</div><p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600">{e.text}</p></motion.div>)}</div></div></Reveal></section> }

function Certificates() {
  const [selected,setSelected]=useState(null)
  return <section id="certificates" className="section-shell">
    <Reveal>
      <div className="section-kicker">04 — CREDENTIALS / RESEARCH</div>
      <div className="flex items-end justify-between gap-6"><h2 className="section-title">Proof of<br/><span className="gradient-text">curiosity.</span></h2><a href="/assets/Resume.pdf" download className="secondary hidden md:flex"><Download size={14}/> Resume</a></div>
      <div className="certificate-stage">
        {certifications.map(([name,file,type,thumb],i)=><motion.button type="button" key={name} className={`certificate-card certificate-card-${i%7}`} whileHover={{y:-14,scale:1.02}} onClick={()=>setSelected({name,file,type})}>
          <div className="certificate-paper">
            <div className="cert-no">0{i+1}</div>
            <div className="cert-preview"><img src={thumb} alt="" loading="lazy" /></div>
            <div className="cert-type">{type}</div>
            <h3>{name}</h3>
            <span>View certificate <ArrowUpRight size={14}/></span>
          </div>
        </motion.button>)}
      </div>
    </Reveal>
    <AnimatePresence>{selected && <motion.div className="fixed inset-0 z-[90] bg-black/85 backdrop-blur-xl p-4 md:p-8 flex items-center justify-center" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSelected(null)}>
      <motion.div className="certificate-modal glass rounded-3xl p-4 md:p-6 w-full max-w-5xl h-[88vh]" initial={{scale:.92,y:20}} animate={{scale:1,y:0}} exit={{scale:.96}} onClick={e=>e.stopPropagation()}>
        <div className="flex items-center justify-between pb-4"><div><div className="project-cat">{selected.type}</div><h3 className="text-xl md:text-2xl font-semibold">{selected.name}</h3></div><button onClick={()=>setSelected(null)} className="icon-btn"><X/></button></div>
        <iframe title={selected.name} src={selected.file} className="certificate-frame w-full h-[calc(100%-60px)] rounded-2xl border border-white/10 bg-white"/>
      </motion.div>
    </motion.div>}
    </AnimatePresence>
  </section>
}

function Contact() {
  const [status,setStatus]=useState('idle')
  const submitForm = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    try {
      const response = await fetch('https://formspree.io/f/mzepklzb', {
        method:'POST',
        body:new FormData(form),
        headers:{Accept:'application/json'}
      })
      if (!response.ok) throw new Error('Form submission failed')
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }
  return <section id="contact" className="section-shell pb-20"><Reveal><div className="contact-panel"><div><div className="section-kicker">05 — CONTACT</div><h2 className="section-title">Let’s build something<br/><span className="gradient-text">useful.</span></h2><p className="mt-6 max-w-xl text-zinc-500 leading-7">Have a backend, AI integration, API, or systems problem worth solving? Send a note and I’ll get back to you.</p><div className="mt-7 space-y-3 text-sm text-zinc-400"><a href={`mailto:${profile.email}`} className="contact-link"><Mail size={16}/> {profile.email}</a><a href={`tel:${profile.phone.replace(/\s/g,'')}`} className="contact-link"><Send size={16}/> {profile.phone}</a><a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-link"><Linkedin size={16}/> Connect on LinkedIn</a><span className="contact-link"><MapPin size={16}/> {profile.location}</span></div></div><form onSubmit={submitForm} className="form-grid" onChange={()=>status==='error' && setStatus('idle')}><input required name="name" placeholder="Your name"/><input required type="email" name="email" placeholder="Your email"/><textarea required name="message" rows="6" placeholder="Tell me about the project or opportunity..."/><input type="hidden" name="_subject" value="Portfolio contact — Ankitha V Chandan"/><button className={`cta justify-center ${status==='sent'?'form-sent':''}`} type="submit" disabled={status==='sending'}>{status==='sending' ? 'Sending…' : status==='sent' ? 'Message sent ✓' : status==='error' ? 'Try again' : 'Send message'} <Send size={15}/></button>{status==='sent' ? <p className="form-status success">Message sent successfully. Thank you — I’ll get back to you soon.</p> : status==='error' ? <p className="form-status error">Couldn’t send the message. Please try again.</p> : null}</form></div></Reveal><footer className="mt-16 flex flex-col md:flex-row justify-between gap-4 border-t border-white/5 pt-6 text-[10px] font-mono uppercase tracking-[.18em] text-zinc-700"><span>© 2026 Ankitha V Chandan</span><span>Python · APIs · AI/ML · Backend</span><div className="flex gap-4"><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div></footer></section>
}

function App() {
  const [intro, setIntro] = useState(true)
  useEffect(() => { const lenis = new Lenis({ duration: 1.1, smoothWheel: true }); let raf; const loop=(t)=>{lenis.raf(t);raf=requestAnimationFrame(loop)}; raf=requestAnimationFrame(loop); return()=>{cancelAnimationFrame(raf);lenis.destroy()} },[])
  useEffect(()=>{ const el=document.documentElement; const move=e=>{el.style.setProperty('--mx',`${e.clientX}px`);el.style.setProperty('--my',`${e.clientY}px`)}; addEventListener('pointermove',move); return()=>removeEventListener('pointermove',move)},[])
  return <>{intro && <BootIntro onComplete={() => setIntro(false)} />}<div className="cursor-glow"/><Header/><main><Hero/><About/><Projects/><Experience/><Certificates/><Contact/></main></>
}

createRoot(document.getElementById('root')).render(<App />)
