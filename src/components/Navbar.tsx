import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Sparkles, 
  Send 
} from 'lucide-react';
import { NAV_ITEMS } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface NavbarProps {
  theme: ThemeMode;
  toggleTheme: () => void;
  onOpenHireMe: () => void;
  activeSection: string;
}

export default function Navbar({ theme, toggleTheme, onOpenHireMe, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isWarm = theme === 'warm';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 transition-all duration-300">
      <div 
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 px-4 sm:px-6 py-3 flex items-center justify-between ${
          isWarm
            ? isScrolled 
              ? 'bg-white/95 shadow-lg shadow-orange-950/10 border border-orange-200/80 backdrop-blur-md' 
              : 'bg-white/85 shadow-md shadow-orange-950/5 border border-white/60 backdrop-blur-md'
            : isScrolled
              ? 'bg-slate-900/90 shadow-2xl shadow-cyan-950/30 border border-cyan-500/30 backdrop-blur-md'
              : 'bg-slate-950/70 shadow-lg border border-slate-800/80 backdrop-blur-md'
        }`}
      >
        {/* Brand Logo */}
        <a 
          href="#home" 
          id="nav-brand-logo"
          className="flex items-center gap-2.5 group"
        >
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${
            isWarm 
              ? 'bg-orange-500 text-white shadow-sm shadow-orange-500/40' 
              : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
          }`}>
            <Code2 className="w-5 h-5" />
          </div>
          <div className="flex items-center font-bold text-lg tracking-tight">
            <span className={isWarm ? 'text-slate-900' : 'text-white'}>RKS</span>
            <span className={isWarm ? 'text-orange-500' : 'text-cyan-400'}>.dev</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                id={`nav-link-${item.id}`}
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? isWarm 
                      ? 'text-orange-600 font-semibold' 
                      : 'text-cyan-400 font-semibold'
                    : isWarm
                      ? 'text-slate-700 hover:text-orange-600 hover:bg-orange-50/70'
                      : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full ${
                      isWarm ? 'bg-orange-500' : 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]'
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle & Hire Me */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            id="theme-toggle-btn"
            title={isWarm ? "Switch to Midnight Cyber theme" : "Switch to Warm Studio theme"}
            aria-label="Toggle Theme"
            className={`p-2 rounded-full transition-colors flex items-center justify-center ${
              isWarm
                ? 'bg-orange-100/70 text-orange-700 hover:bg-orange-200/80 border border-orange-200'
                : 'bg-slate-800 text-cyan-400 hover:bg-slate-700 border border-slate-700'
            }`}
          >
            {isWarm ? (
              <div className="flex items-center gap-1.5 px-1">
                <Sun className="w-4 h-4 text-orange-500" />
                <span className="text-xs font-semibold hidden sm:inline">Warm</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 px-1">
                <Moon className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-semibold hidden sm:inline">Cyber</span>
              </div>
            )}
          </button>

          {/* Hire Me CTA Button */}
          <button
            onClick={onOpenHireMe}
            id="nav-hire-me-btn"
            className={`hidden sm:flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm ${
              isWarm
                ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5'
                : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Hire Me</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            aria-label="Toggle Navigation Menu"
            className={`md:hidden p-2 rounded-full transition-colors ${
              isWarm
                ? 'text-slate-800 hover:bg-orange-100/60'
                : 'text-slate-200 hover:bg-slate-800'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden mt-2 max-w-7xl mx-auto rounded-3xl p-5 border shadow-2xl ${
              isWarm
                ? 'bg-white/95 border-orange-200/80 backdrop-blur-xl'
                : 'bg-slate-900/95 border-slate-700/80 backdrop-blur-xl'
            }`}
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? isWarm 
                        ? 'bg-orange-50 text-orange-600 font-semibold' 
                        : 'bg-cyan-950/50 text-cyan-400 font-semibold'
                      : isWarm
                        ? 'text-slate-700 hover:bg-orange-50/50'
                        : 'text-slate-300 hover:bg-slate-800/70'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t mt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenHireMe();
                  }}
                  className="w-full py-2.5 rounded-xl bg-orange-500 text-white font-semibold flex items-center justify-center gap-2 shadow-md shadow-orange-500/30"
                >
                  <Send className="w-4 h-4" />
                  <span>Hire Me for Projects</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
