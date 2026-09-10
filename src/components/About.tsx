import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  FolderGit2, 
  BrainCircuit, 
  CalendarCheck, 
  Layers, 
  ArrowRight, 
  GraduationCap, 
  Target, 
  CheckCircle2, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface AboutProps {
  theme: ThemeMode;
  onOpenHireMe: () => void;
}

export default function About({ theme, onOpenHireMe }: AboutProps) {
  const [expanded, setExpanded] = useState(false);
  const isWarm = theme === 'warm';

  const getStatIcon = (icon: string) => {
    switch (icon) {
      case 'FolderGit2': return <FolderGit2 className="w-5 h-5 text-orange-500" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-amber-500" />;
      case 'CalendarCheck': return <CalendarCheck className="w-5 h-5 text-orange-600" />;
      case 'Layers': return <Layers className="w-5 h-5 text-cyan-500" />;
      default: return <Sparkles className="w-5 h-5 text-orange-500" />;
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
            isWarm 
              ? 'bg-orange-100 text-orange-700 border border-orange-200' 
              : 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/30'
          }`}>
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
            isWarm ? 'text-slate-900' : 'text-white'
          }`}>
            Engineering With Purpose &amp; Precision
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isWarm ? 'text-slate-600' : 'text-slate-300'
          }`}>
            Bridging complex algorithms and machine learning with intuitive, human-centric software architecture.
          </p>
        </div>

        {/* Main About Card */}
        <div className={`rounded-3xl p-6 sm:p-10 lg:p-12 transition-all duration-300 ${
          isWarm
            ? 'bg-white shadow-xl shadow-orange-950/5 border border-orange-200/80'
            : 'bg-slate-900/80 shadow-2xl border border-slate-800 backdrop-blur-xl'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Side: Developer Illustration / Tech Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm">
                
                {/* Accent glow */}
                <div className={`absolute -inset-1.5 rounded-3xl blur-lg opacity-40 ${
                  isWarm ? 'bg-orange-400' : 'bg-cyan-400'
                }`} />

                <div className={`relative rounded-2xl overflow-hidden p-3 border ${
                  isWarm ? 'bg-orange-50/80 border-orange-200' : 'bg-slate-800/80 border-slate-700'
                }`}>
                  <img
                    src={PERSONAL_INFO.avatarImage}
                    alt="Ranjan Kumar Developer"
                    className="w-full aspect-[4/4] object-cover rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="mt-3 flex items-center justify-between px-2 text-xs font-semibold">
                    <span className={isWarm ? 'text-slate-800' : 'text-slate-200'}>
                      📍 {PERSONAL_INFO.location}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full ${
                      isWarm ? 'bg-orange-100 text-orange-700' : 'bg-cyan-950 text-cyan-300'
                    }`}>
                      2026
                    </span>
                  </div>
                </div>

                {/* Quick Academic Tag */}
                <div className={`mt-4 p-4 rounded-2xl border flex items-center gap-3 ${
                  isWarm 
                    ? 'bg-orange-50/50 border-orange-200/80 text-slate-800' 
                    : 'bg-slate-950/60 border-slate-800 text-slate-200'
                }`}>
                  <div className="p-2 rounded-xl bg-orange-500/10 text-orange-500">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm">
                    <p className="font-bold">{PERSONAL_INFO.degree}</p>
                    <p className={isWarm ? 'text-slate-500' : 'text-slate-400'}>Specialization in AI &amp; Distributed Systems</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Narrative & Statistics */}
            <div className="lg:col-span-7 flex flex-col">
              <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight mb-4 ${
                isWarm ? 'text-slate-900' : 'text-white'
              }`}>
                Hi, I'm Ranjan Kumar
              </h3>
              
              <div className={`space-y-4 text-base leading-relaxed mb-8 ${
                isWarm ? 'text-slate-600' : 'text-slate-300'
              }`}>
                <p>
                  {PERSONAL_INFO.fullBio[0]}
                </p>
                <p>
                  {PERSONAL_INFO.fullBio[1]}
                </p>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
                {STATS.map((st) => (
                  <div
                    key={st.label}
                    className={`p-4 rounded-2xl border transition-transform hover:-translate-y-1 ${
                      isWarm
                        ? 'bg-orange-50/40 border-orange-200/70 shadow-2xs'
                        : 'bg-slate-950/60 border-slate-800/80 shadow-md'
                    }`}
                  >
                    <div className="mb-2">{getStatIcon(st.icon)}</div>
                    <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                      isWarm ? 'text-slate-900' : 'text-cyan-400'
                    }`}>
                      {st.value}
                    </div>
                    <div className={`text-xs font-bold mt-1 ${
                      isWarm ? 'text-slate-800' : 'text-slate-200'
                    }`}>
                      {st.label}
                    </div>
                    <div className={`text-[11px] leading-tight mt-0.5 ${
                      isWarm ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      {st.sublabel}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons: Learn More Toggle & Hire Me */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setExpanded(!expanded)}
                  id="about-learn-more-btn"
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold border transition-all ${
                    isWarm
                      ? 'bg-orange-50 hover:bg-orange-100/80 text-orange-700 border-orange-200 shadow-2xs'
                      : 'bg-slate-800 hover:bg-slate-700 text-cyan-300 border-slate-700'
                  }`}
                >
                  <span>{expanded ? "Show Less" : "Learn More"}</span>
                  {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                <button
                  onClick={onOpenHireMe}
                  className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    isWarm
                      ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-sm shadow-orange-500/30'
                      : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold'
                  }`}
                >
                  <span>Work With Me</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

          {/* Expanded Drawer: Deeper Engineering Principles & Academic Foundation */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden pt-8 mt-8 border-t border-dashed border-orange-200/60"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  <div className={`p-5 rounded-2xl border ${
                    isWarm ? 'bg-orange-50/30 border-orange-100' : 'bg-slate-950/40 border-slate-800'
                  }`}>
                    <div className="flex items-center gap-2 text-orange-500 font-bold text-sm mb-2">
                      <Target className="w-4 h-4" />
                      <span>Clean Architecture</span>
                    </div>
                    <p className={`text-xs leading-relaxed ${
                      isWarm ? 'text-slate-600' : 'text-slate-400'
                    }`}>
                      I believe code should be self-documenting, maintainable, and modular. I emphasize domain-driven structures, decoupling business logic from UI frameworks.
                    </p>
                  </div>

                  <div className={`p-5 rounded-2xl border ${
                    isWarm ? 'bg-orange-50/30 border-orange-100' : 'bg-slate-950/40 border-slate-800'
                  }`}>
                    <div className="flex items-center gap-2 text-orange-500 font-bold text-sm mb-2">
                      <BrainCircuit className="w-4 h-4" />
                      <span>Applied Machine Learning</span>
                    </div>
                    <p className={`text-xs leading-relaxed ${
                      isWarm ? 'text-slate-600' : 'text-slate-400'
                    }`}>
                      Rather than treating AI as a black box, I focus on practical NLP vectorization, sentiment scoring, and deterministic fallback routines that protect user trust.
                    </p>
                  </div>

                  <div className={`p-5 rounded-2xl border ${
                    isWarm ? 'bg-orange-50/30 border-orange-100' : 'bg-slate-950/40 border-slate-800'
                  }`}>
                    <div className="flex items-center gap-2 text-orange-500 font-bold text-sm mb-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Production Reliability</span>
                    </div>
                    <p className={`text-xs leading-relaxed ${
                      isWarm ? 'text-slate-600' : 'text-slate-400'
                    }`}>
                      Proficient in Dockerized environments, CI/CD pipelines, automated testing, and defensive API validation using Pydantic, TypeScript, and ACID MySQL transactions.
                    </p>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
