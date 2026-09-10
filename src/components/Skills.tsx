import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  FileCode, 
  Coffee, 
  Braces, 
  Atom, 
  Palette, 
  Zap, 
  Server, 
  Brain, 
  Flame, 
  Database, 
  GitBranch, 
  Sparkles,
  CheckCircle,
  Filter
} from 'lucide-react';
import { SKILLS } from '../data/portfolioData';
import { ThemeMode, Skill } from '../types';

interface SkillsProps {
  theme: ThemeMode;
}

export default function Skills({ theme }: SkillsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  const isWarm = theme === 'warm';

  const categories = ['All', 'Languages', 'Frontend', 'Backend & API', 'Database', 'AI & Tools'];

  const filteredSkills = selectedCategory === 'All' 
    ? SKILLS 
    : SKILLS.filter(s => s.category === selectedCategory);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCode': return <FileCode className="w-5 h-5 text-amber-500" />;
      case 'Coffee': return <Coffee className="w-5 h-5 text-orange-600" />;
      case 'Braces': return <Braces className="w-5 h-5 text-yellow-500" />;
      case 'Atom': return <Atom className="w-5 h-5 text-sky-500" />;
      case 'Palette': return <Palette className="w-5 h-5 text-teal-500" />;
      case 'Zap': return <Zap className="w-5 h-5 text-emerald-500" />;
      case 'Server': return <Server className="w-5 h-5 text-green-600" />;
      case 'Brain': return <Brain className="w-5 h-5 text-purple-500" />;
      case 'Flame': return <Flame className="w-5 h-5 text-amber-600" />;
      case 'Database': return <Database className="w-5 h-5 text-blue-500" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-red-500" />;
      default: return <Code2 className="w-5 h-5 text-orange-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
            isWarm 
              ? 'bg-orange-100 text-orange-700 border border-orange-200' 
              : 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/30'
          }`}>
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
            isWarm ? 'text-slate-900' : 'text-white'
          }`}>
            Core Skills &amp; Proficiencies
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isWarm ? 'text-slate-600' : 'text-slate-300'
          }`}>
            A battle-tested stack combining high-performance Python &amp; Java backends, reactive modern interfaces, and intelligent machine learning pipelines.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                id={`skill-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? isWarm
                      ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30 scale-105'
                      : 'bg-cyan-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(34,211,238,0.4)] scale-105'
                    : isWarm
                      ? 'bg-white text-slate-700 hover:bg-orange-50 hover:text-orange-600 border border-orange-200/80 shadow-2xs'
                      : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-cyan-300 border border-slate-700/80'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className={`group rounded-2xl p-6 transition-all duration-300 relative border ${
                  isWarm
                    ? 'bg-white hover:border-orange-300 shadow-lg shadow-orange-950/5 hover:shadow-orange-950/10 border-orange-200/80 hover:-translate-y-1'
                    : 'bg-slate-900/90 hover:border-cyan-500/50 shadow-xl border-slate-800 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]'
                }`}
              >
                {/* Header: Icon, Name, Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl transition-transform group-hover:scale-110 ${
                      isWarm 
                        ? 'bg-orange-50/80 border border-orange-100' 
                        : 'bg-slate-800/90 border border-slate-700'
                    }`}>
                      {getSkillIcon(skill.iconName)}
                    </div>
                    <div>
                      <h3 className={`font-bold text-base sm:text-lg ${
                        isWarm ? 'text-slate-900' : 'text-white'
                      }`}>
                        {skill.name}
                      </h3>
                      <p className={`text-xs ${
                        isWarm ? 'text-slate-400' : 'text-slate-400'
                      }`}>
                        {skill.category} • {skill.experienceYears}
                      </p>
                    </div>
                  </div>

                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    isWarm
                      ? 'bg-orange-100/70 text-orange-700 border border-orange-200/60'
                      : 'bg-cyan-950/70 text-cyan-300 border border-cyan-500/30'
                  }`}>
                    {skill.badge}
                  </span>
                </div>

                {/* Progress Bar & Percentage */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                    <span className={isWarm ? 'text-slate-600' : 'text-slate-400'}>Proficiency</span>
                    <span className={`font-bold font-mono ${
                      isWarm ? 'text-orange-600' : 'text-cyan-400'
                    }`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className={`h-2.5 rounded-full overflow-hidden ${
                    isWarm ? 'bg-orange-100/60' : 'bg-slate-800'
                  }`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`h-full rounded-full ${
                        isWarm
                          ? 'bg-gradient-to-r from-orange-500 to-amber-500'
                          : 'bg-gradient-to-r from-cyan-500 to-teal-400 shadow-[0_0_10px_rgba(6,182,212,0.5)]'
                      }`}
                    />
                  </div>
                </div>

                {/* Contextual description snippet */}
                <p className={`text-xs leading-relaxed ${
                  isWarm ? 'text-slate-600' : 'text-slate-300'
                }`}>
                  {skill.highlight}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Highlight Banner / Stacks Synergy Callout */}
        <div className={`rounded-3xl p-6 sm:p-8 border transition-all ${
          isWarm
            ? 'bg-gradient-to-r from-orange-50 via-white to-amber-50 border-orange-200 shadow-md'
            : 'bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border-slate-800 shadow-xl'
        }`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-orange-500/30">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <h4 className={`text-base sm:text-lg font-bold ${
                  isWarm ? 'text-slate-900' : 'text-white'
                }`}>
                  Full-Cycle Architecture: From ML Models to Responsive Production UIs
                </h4>
                <p className={`text-xs sm:text-sm mt-0.5 ${
                  isWarm ? 'text-slate-600' : 'text-slate-400'
                }`}>
                  Trained to ship clean APIs in FastAPI/Django, persist data in MySQL/Firebase, and deliver fluid React interfaces.
                </p>
              </div>
            </div>
            
            <a
              href="#projects"
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold shrink-0 transition-all ${
                isWarm
                  ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-sm shadow-orange-500/30'
                  : 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold'
              }`}
            >
              See Skills in Projects →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
