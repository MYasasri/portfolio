import React, { useState, useEffect, useMemo } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Brain, 
  Terminal, 
  ChevronRight, 
  Download, 
  Moon, 
  Sun,
  FileText,
  Layers,
  ShieldCheck,
  GraduationCap,
  Award,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
} from 'recharts';
import { 
  projects, 
  skills, 
  certifications, 
  trainingData, 
  Project,
  Certification,
  Skill,
} from './data';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter text-zinc-900 dark:text-white"
        >
          MY<span className="text-indigo-600">.</span>
        </motion.div>
        
        <div className="hidden md:flex items-center space-x-8">
          {['About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-bold text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors uppercase tracking-widest"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a 
            href="#contact"
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black rounded-full transition-all uppercase tracking-widest shadow-lg shadow-indigo-600/20 active:scale-95"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

const SectionHeading = ({ title, subtitle, icon: Icon }: { title: string, subtitle?: string, icon?: any }) => (
  <div className="mb-16">
    <div className="flex items-center gap-3 mb-4">
      {Icon && <Icon className="text-indigo-600" size={24} />}
      <h2 className="text-sm font-black uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
        {title}
      </h2>
    </div>
    {subtitle && (
      <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight">
        {subtitle}
      </h3>
    )}
  </div>
);

const ProjectCard = React.forwardRef<HTMLDivElement, { project: Project }>(({ project }, ref) => {
  return (
    <motion.div 
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group relative bg-white dark:bg-zinc-800/50 rounded-3xl overflow-hidden border border-zinc-100 dark:border-zinc-700/50 hover:border-indigo-500/50 transition-all duration-500"
    >
      <div className="aspect-video overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <div className="flex gap-3">
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-zinc-900 transition-all"
            >
              <Github size={20} />
            </a>
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-zinc-900 transition-all"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest rounded-full text-indigo-600">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 line-clamp-2 leading-relaxed">
          {project.problem}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tools.map(tool => (
            <span key={tool} className="text-[10px] font-bold px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-lg">
              {tool}
            </span>
          ))}
        </div>

        <div className="pt-6 border-t border-zinc-100 dark:border-zinc-700/50">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-widest">
            Key Insight <ChevronRight size={14} />
          </div>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-500 mt-2 italic">
            "{project.insight}"
          </p>
        </div>
      </div>
    </motion.div>
  );
});

const CertificateCard = ({ cert }: { cert: Certification }) => {
  const getCertificateImage = (cert: Certification) => {
    const title = cert.title;
    
    const certificateImages: Record<string, string> = {
      "Computer Communications": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop",
      "Digital Systems: From Logic Gates to Processors": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
      "Introduction to Hardware and Operating Systems": "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=800&auto=format&fit=crop",
      "Packet Switching Networks and Algorithms": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
      "Fundamentals of Network Communication": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
      "Peer-to-Peer Protocols and Local Area Networks": "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
      "TCP/IP and Advanced Topics": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=800&auto=format&fit=crop",
      "Master Generative AI & Generative AI tools (ChatGPT and more)": "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
      "Chatgpt Made Easy: AI Essentials for beginners": "https://images.unsplash.com/photo-1684161414810-39db391e6397?q=80&w=800&auto=format&fit=crop",
      "Introduction to Large Language Models (LLMs)": "https://images.unsplash.com/photo-1676299081847-c0326a0333d5?q=80&w=800&auto=format&fit=crop",
      "Data Structure and Algorithms (DSA)": "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800&auto=format&fit=crop",
      "Object Oriented Programming using C++": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop",
      "Java Programming": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
    };

    return certificateImages[title] || `https://picsum.photos/seed/${cert.id}/800/600?blur=2`;
  };

  const previewUrl = getCertificateImage(cert);

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group bg-white dark:bg-zinc-800/50 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-700/50 flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-[4/3] relative overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <img 
          src={previewUrl} 
          alt={cert.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.8] saturate-[0.9] contrast-[1.05]"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${cert.id}/400/300?blur=10`;
          }}
          referrerPolicy="no-referrer"
        />
        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
        
        <div className="absolute inset-0 bg-zinc-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
          <a 
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white text-zinc-900 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          >
            View Certificate
          </a>
        </div>
        
        {/* Removed Google Drive specific icon overlay for cleaner look with context images */}

        {cert.isVerified && (
          <div className="absolute top-3 right-3 px-2 py-1 bg-emerald-500/90 backdrop-blur-md text-white text-[10px] font-black rounded-lg flex items-center gap-1 shadow-sm">
            <ShieldCheck size={12} />
            VERIFIED
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-0.5 rounded-md">
            {cert.platform}
          </span>
          <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500">
            • {cert.category}
          </span>
        </div>
        
        <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-4 line-clamp-2 leading-tight group-hover:text-indigo-600 transition-colors">
          {cert.title}
        </h3>

        <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
          {cert.skills.slice(0, 3).map(skill => (
            <span key={skill} className="text-[9px] font-bold px-2 py-0.5 bg-zinc-100 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400 rounded-md">
              {skill}
            </span>
          ))}
          {cert.skills.length > 3 && (
            <span className="text-[9px] font-bold px-2 py-0.5 text-zinc-400">+{cert.skills.length - 3}</span>
          )}
        </div>

        <a 
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold text-zinc-600 dark:text-zinc-400 border border-zinc-100 dark:border-zinc-700 rounded-xl hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300"
        >
          View Certificate
          <ExternalLink size={14} />
        </a>
      </div>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [activeProjectFilter, setActiveProjectFilter] = useState<'All' | 'Data' | 'Web' | 'AI' | 'GUI'>('All');
  const [activeCertFilter, setActiveCertFilter] = useState<string>('All');

  const filteredProjects = activeProjectFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeProjectFilter);

  const certCategories = useMemo(() => {
    const cats = new Set(certifications.map(c => c.category));
    return ['All', ...Array.from(cats)];
  }, []);

  const filteredCerts = activeCertFilter === 'All'
    ? certifications
    : certifications.filter(c => c.category === activeCertFilter);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-500">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text Content Block */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-3/5 text-center lg:text-left order-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Available for new opportunities
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-6 leading-[0.85]">
                M Yasasri<span className="text-indigo-600">.</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-zinc-500 dark:text-zinc-400 mb-8 max-w-2xl lg:mx-0 mx-auto">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">Data Scientist & ML Engineer</span> specializing in building intelligent systems and extracting actionable insights.
              </h2>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
                <a 
                  href="#projects"
                  className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-indigo-600/20 active:scale-95 flex items-center gap-2"
                >
                  Explore Projects <ChevronRight size={18} />
                </a>
                
                <div className="flex items-center gap-3 px-4">
                  {[
                    { icon: Github, href: "https://github.com/MYasasri" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/yasasri-malyavantham" },
                    { icon: Mail, href: "mailto:yasasrimalyabantam@gmail.com" }
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-xl transition-all hover:scale-110"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-8 max-w-md lg:mx-0 mx-auto pt-8 border-t border-zinc-100 dark:border-zinc-800">
                <div>
                  <div className="text-2xl font-bold text-zinc-900 dark:text-white">10+</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-zinc-900 dark:text-white">15+</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Certifications</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-zinc-900 dark:text-white">8.37</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500">CGPA</div>
                </div>
              </div>
            </motion.div>

            {/* Profile Image Block */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:w-2/5 flex justify-center lg:justify-end order-2"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 group">
                {/* Soft glowing gradient ring (blue/purple theme) */}
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-600 to-blue-500 rounded-[32px] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 z-0" />
                
                {/* Rounded Square frame with gradient border */}
                <div className="relative z-10 w-full h-full rounded-[24px] p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-blue-500 shadow-2xl transition-all duration-500 group-hover:scale-[1.03]">
                  <div className="w-full h-full rounded-[20px] overflow-hidden bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-950">
                    <img 
                      src="https://lh3.googleusercontent.com/d/1ljuzaR6NGxgKjBhJQ1m-FD2Keo0uQeCH=w1000" 
                      alt="M Yasasri"
                      className="relative z-20 w-full h-full object-cover object-top brightness-[0.9] saturate-[0.9] contrast-[1.05] bg-zinc-800 transition-all duration-500"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        console.error("Image failed to load from Google Drive");
                        (e.target as HTMLImageElement).src = "https://picsum.photos/seed/yasasri/800/800";
                      }}
                    />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -right-6 p-3 bg-white dark:bg-zinc-800 rounded-2xl shadow-xl flex items-center gap-3 border border-zinc-100 dark:border-zinc-700 z-30"
                >
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg text-indigo-600">
                    <Brain size={18} />
                  </div>
                  <div className="text-left">
                    <div className="text-[8px] font-black uppercase tracking-widest text-zinc-500">Focus</div>
                    <div className="text-[10px] font-bold text-zinc-900 dark:text-white">AI & ML</div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-6 -left-6 p-3 bg-white dark:bg-zinc-800 rounded-2xl shadow-xl flex items-center gap-3 border border-zinc-100 dark:border-zinc-700 z-30"
                >
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-600">
                    <Database size={18} />
                  </div>
                  <div className="text-left">
                    <div className="text-[8px] font-black uppercase tracking-widest text-zinc-500">Specialty</div>
                    <div className="text-[10px] font-bold text-zinc-900 dark:text-white">Data Analysis</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">
            <div className="lg:col-span-3">
              <SectionHeading 
                title="About Me" 
                subtitle="Passionate about solving complex data challenges."
              />
              <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  I am a Computer Science student with a deep passion for data science and machine learning. I focus on building intelligent systems and extracting actionable insights from complex datasets using Python and modern web technologies.
                </p>
                <p>
                  My expertise spans across predictive modeling, data visualization, and full-stack web development. I approach every project with a problem-solving mindset, aiming to create solutions that are both technically robust and user-centric.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-100 dark:border-zinc-700 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-zinc-900 dark:text-white">B.Tech CSE</h5>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wider">LPU • 2023-Present</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-100 dark:border-zinc-700 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600">
                    <Award size={20} />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-zinc-900 dark:text-white">Python Intern</h5>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Harsha • 2025</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 mb-8">Education Journey</h4>
              <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-indigo-600 before:to-purple-600">
                {[
                  {
                    institution: "Lovely Professional University",
                    degree: "B.Tech Computer Science and Engineering",
                    score: "CGPA: 8.37",
                    location: "Phagwara, Punjab",
                    duration: "Aug 2023 – Present",
                    current: true
                  },
                  {
                    institution: "Kendriya Vidyalaya No.1 Tirupati",
                    degree: "12th Standard",
                    score: "76.8%",
                    location: "Tirupati, Andhra Pradesh",
                    duration: "Aug 2021 – Mar 2023",
                    current: false
                  },
                  {
                    institution: "Kendriya Vidyalaya No.1 Tirupati",
                    degree: "10th Standard",
                    score: "CGPA: 9.2",
                    location: "Tirupati, Andhra Pradesh",
                    duration: "Apr 2020 – May 2021",
                    current: false
                  }
                ].map((edu, index) => (
                  <div key={index} className="relative mb-10 last:mb-0">
                    <div className={`absolute -left-[35px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-zinc-900 z-10 ${edu.current ? 'bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.8)]' : 'bg-zinc-400'}`} />
                    <div className="p-6 bg-white dark:bg-zinc-800/50 backdrop-blur-md rounded-2xl border border-zinc-100 dark:border-zinc-700/50 shadow-sm hover:shadow-md transition-all">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-bold text-zinc-900 dark:text-white text-sm leading-tight">{edu.institution}</h5>
                        <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 rounded-full whitespace-nowrap ml-2">
                          {edu.duration}
                        </span>
                      </div>
                      <p className="text-indigo-600 dark:text-indigo-400 font-bold text-[11px] mb-1">{edu.degree}</p>
                      <div className="flex items-center gap-3 text-[10px] text-zinc-500 dark:text-zinc-400">
                        <span>{edu.location}</span>
                        <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                        <span className="font-bold text-zinc-700 dark:text-zinc-300">{edu.score}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Expertise" 
            subtitle="My Technical Arsenal"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Core Programming', icon: Code2, color: 'indigo' },
              { title: 'Data & Analytics', icon: Database, color: 'blue' },
              { title: 'AI / Applied Intelligence', icon: Brain, color: 'purple' },
              { title: 'Development', icon: Terminal, color: 'emerald' },
              { title: 'Tools', icon: Layers, color: 'amber' }
            ].map((cat) => (
              <div key={cat.title} className="p-8 bg-white dark:bg-zinc-800 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-700 shadow-sm hover:shadow-xl transition-all">
                <div className={`w-14 h-14 rounded-2xl bg-${cat.color}-50 dark:bg-${cat.color}-900/30 flex items-center justify-center text-${cat.color}-600 mb-6`}>
                  <cat.icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-6 uppercase tracking-widest">{cat.title}</h3>
                <div className="space-y-4">
                  {skills.filter(s => s.category === cat.title).map(skill => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{skill.name}</span>
                        <span className="text-[10px] text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">Verified</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                          className="skill-progress"
                        />
                      </div>
                      <p className="text-[10px] text-zinc-500 mt-2 line-clamp-1">{skill.proof}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <SectionHeading 
              title="Portfolio" 
              subtitle="Featured Projects"
            />
            
            <div className="flex flex-wrap gap-2 p-1.5 bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-100 dark:border-zinc-700">
              {['All', 'Data', 'Web', 'AI', 'GUI'].map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveProjectFilter(f as any)}
                  className={`px-6 py-2.5 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${
                    activeProjectFilter === f 
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                      : 'text-zinc-500 hover:text-indigo-600 dark:text-zinc-400'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <SectionHeading 
              title="Recognition" 
              subtitle="Certifications & Awards"
            />
            
            <div className="flex flex-wrap gap-2 p-1.5 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-700">
              {certCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCertFilter(cat)}
                  className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${
                    activeCertFilter === cat 
                      ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900' 
                      : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCerts.map((cert) => (
              <CertificateCard key={cert.id} cert={cert} />
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-24 bg-indigo-600 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-indigo-200 mb-4">Professional Training</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">
                Practical Training & Internships
              </h3>
              <p className="text-indigo-100 text-lg mb-10 leading-relaxed">
                Beyond academic learning, I actively seek hands-on opportunities to apply my skills in real-world environments.
              </p>
              <a 
                href={trainingData[0].certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-indigo-600 font-bold rounded-2xl hover:bg-indigo-50 transition-all shadow-xl active:scale-95"
              >
                View Internship Certificate <ExternalLink size={18} />
              </a>
            </div>

            <div className="space-y-6">
              {trainingData.map(training => (
                <div key={training.id} className="p-8 bg-white/10 backdrop-blur-md rounded-[2.5rem] border border-white/20 text-white">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="text-2xl font-bold mb-1">{training.title}</h4>
                      <div className="text-indigo-200 font-medium">{training.organization}</div>
                    </div>
                    <div className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-black uppercase tracking-widest">
                      {training.duration}
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {training.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-indigo-50">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-300 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900 dark:bg-zinc-900 rounded-[4rem] p-12 md:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-600/20 blur-[120px]" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-sm font-black uppercase tracking-[0.3em] text-indigo-500 mb-6">Get in Touch</h2>
                <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-[0.9]">
                  Let's create something <span className="text-indigo-500 italic">extraordinary</span>.
                </h3>
                <p className="text-zinc-400 text-lg mb-12 max-w-md">
                  I'm currently looking for opportunities in Data Science and Machine Learning. If you have a project or just want to say hi, feel free to reach out!
                </p>

                <div className="space-y-8">
                  <a href="mailto:yasasrimalyabantam@gmail.com" className="flex items-center gap-6 group">
                    <div className="w-16 h-16 bg-zinc-800 rounded-3xl flex items-center justify-center text-zinc-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 group-hover:rotate-12">
                      <Mail size={28} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">Email Me</div>
                      <div className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">yasasrimalyabantam@gmail.com</div>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/yasasri-malyavantham" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                    <div className="w-16 h-16 bg-zinc-800 rounded-3xl flex items-center justify-center text-zinc-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 group-hover:rotate-12">
                      <Linkedin size={28} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">Connect</div>
                      <div className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">LinkedIn Profile</div>
                    </div>
                  </a>

                  <div className="pt-8 border-t border-zinc-800 flex flex-wrap gap-4">
                    <a 
                      href="https://drive.google.com/uc?export=download&id=1UFRe3eQQjR9DXzZuxB9lPomFo_hagnAK" 
                      className="flex-1 min-w-[160px] flex items-center justify-center gap-3 px-6 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl transition-all active:scale-95 shadow-lg shadow-indigo-600/20"
                    >
                      <Download size={18} /> Download CV
                    </a>
                    <a 
                      href="https://drive.google.com/file/d/1UFRe3eQQjR9DXzZuxB9lPomFo_hagnAK/view" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[160px] flex items-center justify-center gap-3 px-6 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-2xl transition-all active:scale-95 border border-zinc-700"
                    >
                      <FileText size={18} /> View CV
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-[3rem] p-10 border border-white/10">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-6 py-4 bg-zinc-800/50 border border-zinc-700 rounded-2xl text-white focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Email</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 bg-zinc-800/50 border border-zinc-700 rounded-2xl text-white focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Message</label>
                    <textarea 
                      rows={4}
                      placeholder="Tell me about your project..."
                      className="w-full px-6 py-4 bg-zinc-800/50 border border-zinc-700 rounded-2xl text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                  </div>
                  <button className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-indigo-600/20 active:scale-95">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-zinc-100 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-black tracking-tighter text-zinc-900 dark:text-white">
            MY<span className="text-indigo-600">.</span>
          </div>
          <div className="text-sm text-zinc-500 font-medium">
            © 2026 M Yasasri. Built with React & Tailwind CSS.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/MYasasri" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/yasasri-malyavantham" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
