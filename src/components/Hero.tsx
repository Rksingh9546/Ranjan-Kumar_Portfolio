import { motion } from 'motion/react';
import { 
  Download, 
  Mail, 
  Code2, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Youtube, 
  ArrowUpRight,
  Zap,
  Atom,
  Server,
  FileCode
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface HeroProps {
  theme: ThemeMode;
  onOpenResume: () => void;
}

export default function Hero({ theme, onOpenResume }: HeroProps) {
  const isWarm = theme === 'warm';

  // Helper for social icons
  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'GitHub': return <Github className="w-4 h-4" />;
      case 'LinkedIn': return <Linkedin className="w-4 h-4" />;
      case 'X (Twitter)': return <Twitter className="w-4 h-4" />;
      case 'Instagram': return <Instagram className="w-4 h-4" />;
      case 'YouTube': return <Youtube className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section 
      id="home" 
      className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Social Media Circular Badges */}
            <div className="flex items-center gap-2.5 mb-6">
              {PERSONAL_INFO.socials.map((s, idx) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  id={`hero-social-${s.name.toLowerCase().replace(/\s+/g, '')}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * idx, duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title={`${s.name} - ${s.username}`}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all ${
                    isWarm
                      ? 'bg-white text-slate-700 shadow-sm border border-orange-200/80 hover:text-orange-600 hover:border-orange-400 hover:shadow-orange-500/10'
                      : 'bg-slate-900/90 text-slate-300 border border-slate-700/80 hover:text-cyan-400 hover:border-cyan-500/60 hover:shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                  }`}
                >
                  {getSocialIcon(s.name)}
                </motion.a>
              ))}
            </div>

            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5 ${
                isWarm
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-xs'
                  : 'bg-emerald-950/40 text-emerald-300 border border-emerald-500/30'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{PERSONAL_INFO.status}</span>
            </motion.div>

            {/* Big Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4">
              <span className={isWarm ? 'text-slate-900' : 'text-white'}>Hi, I'm </span>
              <span className={`bg-clip-text text-transparent ${
                isWarm
                  ? 'bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500'
                  : 'bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-300 drop-shadow-[0_0_20px_rgba(34,211,238,0.35)]'
              }`}>
                Ranjan Kumar
              </span>
            </h1>

            {/* Role & Secondary Pill */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${
                isWarm ? 'text-slate-800' : 'text-slate-100'
              }`}>
                {PERSONAL_INFO.role}
              </h2>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                isWarm
                  ? 'bg-orange-100 text-orange-700 border border-orange-300/60'
                  : 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.2)]'
              }`}>
                AI &amp; Full-Stack
              </span>
            </div>

            {/* Short Description */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mb-6 ${
              isWarm ? 'text-slate-600' : 'text-slate-300'
            }`}>
              {PERSONAL_INFO.shortBio}
            </p>

            {/* Quick Skill Tags (from reference image) */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {PERSONAL_INFO.quickPills.map((pill) => (
                <div
                  key={pill.label}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-transform hover:scale-102 ${
                    isWarm
                      ? 'bg-white text-slate-700 border border-orange-200/90 shadow-2xs'
                      : 'bg-slate-900/80 text-slate-200 border border-slate-700/80'
                  }`}
                >
                  <span className={isWarm ? 'text-orange-500' : 'text-cyan-400'}>
                    {pill.icon === 'Code' && <Code2 className="w-3.5 h-3.5" />}
                    {pill.icon === 'Layout' && <Atom className="w-3.5 h-3.5" />}
                    {pill.icon === 'Zap' && <Zap className="w-3.5 h-3.5" />}
                    {pill.icon === 'Brain' && <Cpu className="w-3.5 h-3.5" />}
                  </span>
                  <span>{pill.label}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenResume}
                id="hero-download-cv-btn"
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold shadow-md transition-all ${
                  isWarm
                    ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-orange-500/30'
                    : 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                }`}
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                <span>Download CV</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                id="hero-contact-me-btn"
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold border transition-all ${
                  isWarm
                    ? 'bg-white hover:bg-orange-50/80 text-slate-800 border-orange-300 shadow-2xs'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-100 border-slate-700 hover:border-cyan-500/50'
                }`}
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Framed Developer Illustration & Interactive Floating Badges */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Decorative Glowing Rings / Aura */}
              <div 
                className={`absolute -inset-2 rounded-[2.5rem] filter blur-xl opacity-60 transition-colors pointer-events-none ${
                  isWarm ? 'bg-gradient-to-tr from-orange-500/20 via-amber-400/20 to-orange-600/10' : 'bg-gradient-to-tr from-cyan-500/30 via-sky-400/20 to-teal-500/20'
                }`}
              />

              {/* Main Card Frame */}
              <div className={`relative rounded-[2rem] p-3 sm:p-4 overflow-hidden transition-all duration-300 ${
                isWarm
                  ? 'bg-white shadow-xl shadow-orange-950/10 border-2 border-orange-300/80'
                  : 'bg-slate-900/90 shadow-2xl border-2 border-cyan-400/60 shadow-cyan-950/50'
              }`}>
                
                {/* Image Container with Inner Vignette & Gradient */}
                <div className={`relative rounded-3xl overflow-hidden aspect-[4/4.6] flex items-end justify-center ${
                  isWarm ? 'bg-gradient-to-b from-orange-100/60 via-amber-50 to-orange-100/40' : 'bg-gradient-to-b from-slate-800/80 via-slate-900 to-slate-950'
                }`}>
                  <img
                    src={PERSONAL_INFO.avatarImage}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top filter contrast-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient overlay at bottom of photo for seamless badge blending */}
                  <div className={`absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t ${
                    isWarm ? 'from-white/90 via-white/40 to-transparent' : 'from-slate-950/90 via-slate-950/40 to-transparent'
                  }`} />
                </div>

                {/* Floating Badge 1: Top Left `</> Code` */}
                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute top-6 left-6 px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md ${
                    isWarm
                      ? 'bg-white/95 text-slate-800 border border-orange-200'
                      : 'bg-slate-900/90 text-cyan-300 border border-cyan-500/50 shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5 text-orange-500" />
                  <span>Code</span>
                </motion.div>

                {/* Floating Badge 2: Top Right `🧠 AI/ML` */}
                <motion.div 
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className={`absolute top-6 right-6 px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md ${
                    isWarm
                      ? 'bg-white/95 text-slate-800 border border-orange-200'
                      : 'bg-slate-900/90 text-cyan-300 border border-cyan-500/50 shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5 text-orange-500" />
                  <span>AI/ML</span>
                </motion.div>

                {/* Floating Stack 3: Right Side Tech Chips (React, Node, Python, Django) */}
                <div className="absolute right-6 top-20 flex flex-col gap-1.5">
                  {[
                    { name: 'React', icon: Atom, color: 'text-sky-400' },
                    { name: 'Node.js', icon: Server, color: 'text-emerald-400' },
                    { name: 'Python', icon: FileCode, color: 'text-amber-400' },
                    { name: 'Django', icon: Code2, color: 'text-teal-400' },
                  ].map((tech, idx) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      whileHover={{ x: -4 }}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold flex items-center gap-1.5 shadow-sm backdrop-blur-md ${
                        isWarm
                          ? 'bg-white/95 text-slate-700 border border-orange-100 shadow-2xs'
                          : 'bg-slate-950/80 text-slate-200 border border-slate-700/70'
                      }`}
                    >
                      <tech.icon className={`w-3 h-3 ${tech.color}`} />
                      <span>{tech.name}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Playful Doodle: "Build Innovate Grow ↗" (exact recreation of reference doodle!) */}
                <div className={`absolute bottom-16 left-6 font-mono text-xs font-bold italic tracking-wide select-none ${
                  isWarm ? 'text-orange-600 drop-shadow-xs' : 'text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]'
                }`}>
                  <div className="flex flex-col -space-y-0.5 transform -rotate-6">
                    <span>Build</span>
                    <span>Innovate</span>
                    <span className="flex items-center gap-0.5">
                      Grow <ArrowUpRight className="w-3.5 h-3.5 inline text-orange-500" />
                    </span>
                  </div>
                </div>

                {/* Floating Bottom Badge: `● Full-Stack Developer` */}
                <motion.div 
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute bottom-5 right-5 px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg ${
                    isWarm
                      ? 'bg-white text-slate-800 border border-orange-300/80 shadow-orange-950/10'
                      : 'bg-slate-900/95 text-cyan-300 border border-cyan-400/80 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span>Full-Stack Developer</span>
                </motion.div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
