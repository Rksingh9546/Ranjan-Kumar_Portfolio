import { motion } from 'motion/react';
import { 
  X, 
  Download, 
  Printer, 
  Briefcase, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  ExternalLink,
  Code2
} from 'lucide-react';
import { PERSONAL_INFO, RESUME_DETAILS } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
}

export default function ResumeModal({ isOpen, onClose, theme }: ResumeModalProps) {
  if (!isOpen) return null;

  const isWarm = theme === 'warm';

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate text/markdown resume file for instant real download
    const content = `=====================================================
${PERSONAL_INFO.name.toUpperCase()}
${PERSONAL_INFO.role}
Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
Status: ${PERSONAL_INFO.status}
=====================================================

PROFESSIONAL SUMMARY:
${PERSONAL_INFO.shortBio}

EDUCATION:
${RESUME_DETAILS.education.map(e => `• ${e.degree} - ${e.institution} (${e.period})\n  ${e.score}\n  ${e.description}`).join('\n\n')}

EXPERIENCE:
${RESUME_DETAILS.experience.map(x => `• ${x.role} - ${x.company} (${x.period}, ${x.location})\n${x.points.map(p => `  - ${p}`).join('\n')}`).join('\n\n')}

KEY SKILLS:
Languages: Python, Java, JavaScript, TypeScript, SQL
Frontend: React.js, Tailwind CSS, HTML5/CSS3, Responsive UI
Backend & Cloud: FastAPI, Django, Node.js, Firebase, MySQL, Docker, REST APIs
AI & Data: Machine Learning, NLP, Scikit-Learn, Transformers, TF-IDF

CERTIFICATIONS:
${RESUME_DETAILS.certifications.map(c => `• ${c}`).join('\n')}
`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Ranjan_Kumar_Resume_2026.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-slate-950/75 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className={`relative w-full max-w-3xl rounded-3xl p-6 sm:p-10 shadow-2xl border max-h-[90vh] overflow-y-auto ${
          isWarm 
            ? 'bg-white text-slate-900 border-orange-200' 
            : 'bg-slate-900 text-white border-slate-700'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Action Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-500 block mb-1">
              Curriculum Vitae
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {PERSONAL_INFO.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {PERSONAL_INFO.role} • {PERSONAL_INFO.email}
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-orange-500/30 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download File</span>
            </button>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm font-bold text-orange-500 uppercase tracking-wider mb-4">
            <GraduationCap className="w-4 h-4" />
            <span>Education</span>
          </div>

          {RESUME_DETAILS.education.map((edu, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-orange-50/40 dark:bg-slate-950/50 border border-orange-100 dark:border-slate-800">
              <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                  {edu.degree}
                </h4>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-orange-100 dark:bg-slate-800 text-orange-700 dark:text-orange-400">
                  {edu.period}
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                {edu.institution} — <span className="text-emerald-600 font-bold">{edu.score}</span>
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {edu.description}
              </p>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm font-bold text-orange-500 uppercase tracking-wider mb-4">
            <Briefcase className="w-4 h-4" />
            <span>Engineering Experience</span>
          </div>

          <div className="space-y-4">
            {RESUME_DETAILS.experience.map((exp, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-orange-50/40 dark:bg-slate-950/50 border border-orange-100 dark:border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                  <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                    {exp.role}
                  </h4>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {exp.period}
                  </span>
                </div>
                <p className="text-xs font-semibold text-orange-600 dark:text-orange-400 mb-2">
                  {exp.company} • {exp.location}
                </p>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm font-bold text-orange-500 uppercase tracking-wider mb-3">
            <Award className="w-4 h-4" />
            <span>Certifications &amp; Accreditations</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
            {RESUME_DETAILS.certifications.map((cert, idx) => (
              <div key={idx} className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="font-medium text-slate-800 dark:text-slate-200">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span>References &amp; Code Repositories available on request.</span>
          <button
            onClick={onClose}
            className="font-bold text-orange-600 dark:text-orange-400 hover:underline cursor-pointer"
          >
            Close Window
          </button>
        </div>

      </motion.div>
    </div>
  );
}
