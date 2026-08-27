import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ChevronRight, Download, Mail, Cpu, Database, Bot } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import AnimatedBackground from './components/AnimatedBackground';
import { stackData, projectsData } from './data/portafolioData';
import miFoto from './assets/mi-foto.jpeg';
// SVGs puros
// const GithubIcon = ({ size = 18 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>;
const LinkedinIcon = ({ size = 18 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 400, damping: 40, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-slate-800 selection:bg-blue-200 selection:text-blue-900 relative">
      <AnimatedBackground />
      
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-400 origin-left z-50" style={{ scaleX }} />

      {/* NAVBAR */}
      <nav className={`fixed w-full z-40 transition-all duration-200 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="font-extrabold text-xl tracking-tighter text-slate-800">
            Mi<span className="text-blue-600">Portafolio</span>.
          </span>
          <div className="hidden md:flex gap-8 text-sm font-semibold">
            {['Sobre mí', 'Tecnologías', 'Proyectos', 'Contacto'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="relative text-slate-600 hover:text-blue-600 transition-colors group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[90vh] flex items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 border border-indigo-100 text-indigo-700 rounded-full text-sm font-bold mb-6 hover:bg-indigo-100 transition-colors cursor-default">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              Desarrolladora & Ingeniera de Industrial y de Sistemas
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
              Desarrollo <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                soluciones digitales
              </span><br/>
              que convierten.
            </h1>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
              Especialista en desarrollo web, automatización e integración de <strong className="text-blue-600 font-bold">IA</strong>, con interés creciente en  <strong className="text-blue-600 font-bold">Cloud y arquitecturas AWS</strong> . Combino tecnología y visión de negocio para diseñar soluciones eficientes, escalables y orientadas a resultados. También participo en la comunidad tecnológica como <strong className="text-blue-600 font-bold">coorganizadora de AWS User Group</strong> y ponente en formación.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#proyectos" className="group flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-300 transition-all">
                Ver proyectos <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/agnes-bchang/CV_AgnesBuscalChang.pdf" target="_blank" className="flex items-center gap-2 px-8 py-4 bg-white text-slate-700 border border-slate-200 font-semibold rounded-xl hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 transition-all shadow-sm">
                <Download size={18} /> Ver CV
              </motion.a>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="absolute w-[400px] h-[400px] bg-gradient-to-tr from-blue-100 to-lavender-100 rounded-full blur-3xl opacity-60" />
            
            <motion.div whileHover={{ scale: 1.02 }} className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-slate-200 z-10 group cursor-pointer">
              <img 
                src={miFoto}
                alt="Mi foto de perfil" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300" />
            </motion.div>

            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-6 -right-6 md:right-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 text-blue-600 hover:text-cyan-500 hover:scale-110 transition-all cursor-pointer">
              <Bot size={32} />
            </motion.div>
            <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute -bottom-6 -left-6 md:left-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 text-cyan-500 hover:text-blue-600 hover:scale-110 transition-all cursor-pointer">
              <Cpu size={32} />
            </motion.div>
          </div>
        </div>
      </header>

      {/* SECCIÓN SOBRE MÍ - 100% visible desde el inicio */}
      <section id="sobre-mí" className="py-24 relative bg-white border-y border-slate-100 group">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 group-hover:text-blue-700 transition-colors duration-500">
            Más allá del código
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Mi formación como <span className="text-blue-600 font-semibold">Ingeniera Industrial y de Sistemas</span> en la<span className="text-blue-600 font-semibold"> Universidad de Piura</span>, me permite abordar el desarrollo de software desde una perspectiva estratégica. No solamente desarrollo interfaces; analizo el problema de negocio, diseño la solución tecnológica más eficiente y la llevo a una implementación funcional. Combino la lógica de procesos con tecnologías modernas para crear herramientas que automatizan flujos, integran IA y mejoran la conversión.
          </p>
        </div>
      </section>

      {/* STACK TECNOLÓGICO - 100% visible, interactividad en hover */}
      <section id="tecnologías" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Stack Tecnológico</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(stackData).map(([category, techs]) => (
            <motion.div 
              key={category} 
              whileHover={{ y: -5 }}
              className="p-6 border border-slate-200 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-blue-50/80 hover:to-indigo-50/80 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
            >
              <h3 className="text-lg font-bold text-slate-800 capitalize mb-4 border-b border-slate-100 pb-3 flex items-center gap-2 group-hover:text-blue-700 group-hover:border-blue-200 transition-colors">
                <Database size={18} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                {category.replace('ai', 'Inteligencia Artificial')}
              </h3>
              <ul className="space-y-3">
                {techs.map(tech => (
                  <li key={tech} className="flex items-center text-slate-600 font-medium group-hover:text-slate-800 transition-colors">
                    <span className="w-2 h-2 bg-slate-300 group-hover:bg-blue-500 rounded-full mr-3 transition-colors" />
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROYECTOS - 100% visible */}
      <section id="proyectos" className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Proyectos Destacados</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Sistemas empresariales, automatizaciones e integraciones de IA diseñadas para resolver problemas reales.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO - 100% visible */}
      <section id="contacto" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/50 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 hover:scale-[1.01] transition-transform duration-500">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">¿Lista para optimizar tu negocio?</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto font-medium">
            Abierta a nuevos desafíos en automatización, IA y desarrollo web corporativo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="mailto:agneschang0601@gmail.com" className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-cyan-600 hover:shadow-cyan-200 transition-all">
              <Mail size={18} /> Hablemos por Email
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://www.linkedin.com/in/agnes-buscal-chang-22742b151" target="_blank" className="flex items-center gap-2 px-8 py-4 bg-white text-[#0A66C2] border border-[#0A66C2]/20 font-bold rounded-xl hover:bg-[#0A66C2] hover:text-white transition-all shadow-sm">
              <LinkedinIcon size={18} /> LinkedIn
            </motion.a>
            {/* <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="[URL_GITHUB]" target="_blank" className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-indigo-600 transition-colors shadow-lg">
              <GithubIcon size={18} /> GitHub
            </motion.a> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;