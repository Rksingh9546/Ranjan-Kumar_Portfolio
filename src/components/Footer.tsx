import { Code2, ArrowUp, Github, Linkedin, Twitter, Instagram, Youtube, Heart } from 'lucide-react';
import { PERSONAL_INFO, NAV_ITEMS } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface FooterProps {
  theme: ThemeMode;
}

export default function Footer({ theme }: FooterProps) {
  const isWarm = theme === 'warm';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'GitHub': return <Github className="w-4 h-4" />;
      case 'LinkedIn': return <Linkedin className="w-4 h-4" />;
      case 'X (Twitter)': return <Twitter className="w-4 h-4" />;
      case 'Instagram': return <Instagram className="w-4 h-4" />;
      case 'YouTube': return <Youtube className="w-4 h-4" />;
      default: return <Code2 className="w-4 h-4" />;
    }
  };

  return (
    <footer className={`pt-16 pb-12 border-t transition-colors ${
      isWarm 
        ? 'bg-white/80 border-orange-200/80 text-slate-800' 
        : 'bg-slate-950 border-slate-800/90 text-slate-300'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#home" className="flex items-center gap-2.5 mb-4 group">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                isWarm 
                  ? 'bg-orange-500 text-white shadow-sm' 
                  : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
              }`}>
                <Code2 className="w-5 h-5" />
              </div>
              <div className="flex items-center font-bold text-xl tracking-tight">
                <span className={isWarm ? 'text-slate-900' : 'text-white'}>RKS</span>
                <span className={isWarm ? 'text-orange-500' : 'text-cyan-400'}>.dev</span>
              </div>
            </a>

            <p className={`text-sm leading-relaxed max-w-sm mb-6 ${
              isWarm ? 'text-slate-600' : 'text-slate-400'
            }`}>
              Full-Stack Developer &amp; AI/ML Engineer creating reliable software systems with Python, FastAPI, React, and Machine Learning.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {PERSONAL_INFO.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  title={s.name}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    isWarm
                      ? 'bg-orange-50 hover:bg-orange-500 hover:text-white text-slate-700 border border-orange-200'
                      : 'bg-slate-900 hover:bg-cyan-400 hover:text-slate-950 text-slate-300 border border-slate-800'
                  }`}
                >
                  {getSocialIcon(s.name)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 ${
              isWarm ? 'text-slate-900' : 'text-white'
            }`}>
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm font-medium">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`transition-colors ${
                      isWarm 
                        ? 'text-slate-600 hover:text-orange-600' 
                        : 'text-slate-400 hover:text-cyan-300'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:ranjankum7633@gmail.com"
                  className={`transition-colors ${
                    isWarm 
                      ? 'text-slate-600 hover:text-orange-600' 
                      : 'text-slate-400 hover:text-cyan-300'
                  }`}
                >
                  Send Email
                </a>
              </li>
            </ul>
          </div>

          {/* Back to top button */}
          <div className="md:col-span-3 flex flex-col md:items-end">
            <button
              onClick={scrollToTop}
              id="footer-back-to-top"
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                isWarm
                  ? 'bg-orange-50 hover:bg-orange-100/80 text-orange-700 border-orange-200'
                  : 'bg-slate-900 hover:bg-slate-800 text-cyan-400 border-slate-800'
              }`}
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200/60 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className={isWarm ? 'text-slate-500' : 'text-slate-400'}>
            © {new Date().getFullYear()} Ranjan Kumar. All rights reserved. RKS
          </p>
          <p className={`flex items-center gap-1.5 ${isWarm ? 'text-slate-500' : 'text-slate-400'}`}>
            
          </p>
        </div>

      </div>
    </footer>
  );
}
