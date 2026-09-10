import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { X, Sparkles, Send, CheckCircle2, DollarSign, Calendar, Briefcase } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
}

export default function HireMeModal({ isOpen, onClose, theme }: HireMeModalProps) {
  if (!isOpen) return null;

  const [projectType, setProjectType] = useState('Full-Time Role (Software Engineer)');
  const [budgetRange, setBudgetRange] = useState('$5k - $15k / Competitive Offer');
  const [timeline, setTimeline] = useState('Within 1 Month / Immediate');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isWarm = theme === 'warm';

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-slate-950/70 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className={`relative w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border transition-all ${
          isWarm 
            ? 'bg-white text-slate-900 border-orange-200' 
            : 'bg-slate-900 text-white border-slate-700'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Hire Ranjan Kumar</span>
        </div>

        <h2 className="text-2xl font-extrabold tracking-tight mb-2">
          Start a Collaboration
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
          I am currently available for high-impact full-time engineering roles, AI consulting, and full-stack development projects.
        </p>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-3">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold">Proposal Dispatched!</h3>
            <p className="text-xs text-slate-500 mt-1">
              Ranjan will review your request and connect with you via email shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold mb-1.5 text-slate-700 dark:text-slate-300">
                Engagement Type
              </label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
              >
                <option>Full-Time Role (Software Engineer / AI)</option>
                <option>Custom AI/ML Model Integration</option>
                <option>Full-Stack Web MVP (React + FastAPI/Django)</option>
                <option>Technical Advisory &amp; Code Review</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold mb-1.5 text-slate-700 dark:text-slate-300">
                  Target Timeline
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl text-xs border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
                >
                  <option>Immediate (1-2 weeks)</option>
                  <option>Within 1 Month</option>
                  <option>Next Quarter (Q4 / 2026)</option>
                  <option>Flexible Exploration</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold mb-1.5 text-slate-700 dark:text-slate-300">
                  Budget / Compensation
                </label>
                <select
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl text-xs border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
                >
                  <option>Competitive Salary (Full-Time)</option>
                  <option>$3,000 - $8,000 (MVP)</option>
                  <option>$8,000 - $20,000+ (Enterprise)</option>
                  <option>Hourly Consulting ($60 - $120/hr)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold mb-1.5 text-slate-700 dark:text-slate-300">
                Your Email Address <span className="text-orange-500">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold mb-1.5 text-slate-700 dark:text-slate-300">
                Brief Overview or Job Link
              </label>
              <textarea
                rows={3}
                placeholder="We're looking for an engineer to lead backend APIs and ML pipelines..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-bold text-sm bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/30 flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Submit Hire Inquiry</span>
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
