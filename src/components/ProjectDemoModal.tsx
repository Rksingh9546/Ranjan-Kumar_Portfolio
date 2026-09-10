import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Sparkles, 
  CheckCircle2, 
  Brain, 
  FileText, 
  Calendar, 
  Clock, 
  AlertCircle,
  Activity,
  Send,
  Zap,
  Play
} from 'lucide-react';
import { Project, ThemeMode } from '../types';

interface ProjectDemoModalProps {
  project: Project | null;
  onClose: () => void;
  theme: ThemeMode;
}

export default function ProjectDemoModal({ project, onClose, theme }: ProjectDemoModalProps) {
  if (!project) return null;

  const isWarm = theme === 'warm';

  // State for AI Resume Screener Demo
  const [selectedCandidate, setSelectedCandidate] = useState<'candidateA' | 'candidateB' | 'candidateC'>('candidateA');
  const [isAnalyzingResume, setIsAnalyzingResume] = useState(false);
  const [resumeScore, setResumeScore] = useState<number | null>(94);

  // State for Mental Health Demo
  const [sentimentText, setSentimentText] = useState("Feeling slightly overwhelmed by the sprint deadlines, but excited about our machine learning release.");
  const [analyzedSentiment, setAnalyzedSentiment] = useState<{
    mood: string;
    stressLevel: string;
    polarity: number;
    advice: string;
  } | null>({
    mood: "Eustress / Driven (Mild Anxiety)",
    stressLevel: "Moderate (38%)",
    polarity: 0.68,
    advice: "High cognitive drive detected. Schedule a 15-minute screen-free decompression block."
  });

  // State for Clinic Appointment Demo
  const [bookedSlot, setBookedSlot] = useState<string | null>(null);
  const [doctorSelected, setDoctorSelected] = useState("Dr. Ananya Sharma - Cardiology Specialist");

  const runResumeAnalysis = () => {
    setIsAnalyzingResume(true);
    setTimeout(() => {
      setIsAnalyzingResume(false);
      if (selectedCandidate === 'candidateA') setResumeScore(96);
      else if (selectedCandidate === 'candidateB') setResumeScore(82);
      else setResumeScore(74);
    }, 600);
  };

  const runSentimentAnalysis = () => {
    if (sentimentText.toLowerCase().includes("stress") || sentimentText.toLowerCase().includes("overwhelm") || sentimentText.toLowerCase().includes("tired")) {
      setAnalyzedSentiment({
        mood: "Elevated Cognitive Strain",
        stressLevel: "Elevated (72%)",
        polarity: 0.35,
        advice: "Early burnout indicators present. Recommend prioritizing sleep hygiene and taking short micro-breaks."
      });
    } else if (sentimentText.toLowerCase().includes("excited") || sentimentText.toLowerCase().includes("happy") || sentimentText.toLowerCase().includes("great")) {
      setAnalyzedSentiment({
        mood: "Optimistic & Flourishing",
        stressLevel: "Low (15%)",
        polarity: 0.92,
        advice: "Positive neurological engagement. Optimal state for complex problem-solving."
      });
    } else {
      setAnalyzedSentiment({
        mood: "Balanced / Neutral Baseline",
        stressLevel: "Balanced (28%)",
        polarity: 0.58,
        advice: "Equilibrium maintained. Continue consistent pacing across tasks."
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto backdrop-blur-md bg-slate-950/70">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25 }}
        className={`relative w-full max-w-4xl rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl border transition-all ${
          isWarm 
            ? 'bg-white text-slate-900 border-orange-200' 
            : 'bg-slate-900 text-white border-slate-700'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-orange-500/10 text-orange-600 border border-orange-500/20">
            {project.category}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Interactive Sandbox
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
          {project.title}
        </h2>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mb-6 max-w-2xl">
          {project.subtitle} — Explore the functional mechanics designed by Ranjan Kumar below.
        </p>

        {/* Dynamic Interactive Demo Sandbox */}
        <div className={`rounded-2xl p-5 sm:p-6 mb-6 border ${
          isWarm ? 'bg-orange-50/40 border-orange-200/80' : 'bg-slate-950/60 border-slate-800'
        }`}>
          
          {/* CASE 1: AI Resume Screening System */}
          {project.id === 'ai-resume-screening' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 font-bold text-sm text-orange-600">
                  <Brain className="w-4 h-4" />
                  <span>NLP Resume Matcher Simulator</span>
                </div>
                <span className="text-xs text-slate-500">TF-IDF Vectorizer + Scikit-Learn Model</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300">
                    Target Job Spec:
                  </label>
                  <div className="p-3 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <p className="font-bold text-slate-900 dark:text-white">Senior Full-Stack AI Engineer</p>
                    <p className="text-slate-500 mt-1">Required: Python, FastAPI, React.js, NLP, Transformers, Docker, MySQL.</p>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300">
                    Select Candidate Resume Profile:
                  </label>
                  <div className="flex gap-2">
                    {[
                      { key: 'candidateA', label: 'Ranjan (AI & Full-Stack)' },
                      { key: 'candidateB', label: 'Alex (Frontend Pure)' },
                      { key: 'candidateC', label: 'Dev (Junior Java)' },
                    ].map(cand => (
                      <button
                        key={cand.key}
                        onClick={() => setSelectedCandidate(cand.key as any)}
                        className={`flex-1 p-2 rounded-xl text-xs font-semibold border transition-all ${
                          selectedCandidate === cand.key
                            ? 'bg-orange-500 text-white border-orange-500 shadow-sm'
                            : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800'
                        }`}
                      >
                        {cand.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={runResumeAnalysis}
                  disabled={isAnalyzingResume}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2 cursor-pointer shadow-sm shadow-orange-500/30"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>{isAnalyzingResume ? "Computing Vectors..." : "Calculate Similarity Score"}</span>
                </button>

                {resumeScore && (
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-slate-500">Predicted Match:</span>
                    <span className="text-xl font-extrabold font-mono text-emerald-600 dark:text-emerald-400">
                      {resumeScore}%
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* CASE 2: AI Mental Health Monitoring */}
          {project.id === 'ai-mental-health-monitoring' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 font-bold text-sm text-orange-600">
                  <Activity className="w-4 h-4" />
                  <span>Natural Language Sentiment &amp; Mood Classifier</span>
                </div>
                <span className="text-xs text-slate-500">Emotion Polarity Engine</span>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300">
                  Patient Journal Entry / Check-in Thought:
                </label>
                <textarea
                  value={sentimentText}
                  onChange={(e) => setSentimentText(e.target.value)}
                  rows={2}
                  className="w-full p-3 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={runSentimentAnalysis}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2 cursor-pointer shadow-sm shadow-orange-500/30"
                >
                  <Brain className="w-3.5 h-3.5" />
                  <span>Run Sentiment Classification</span>
                </button>
              </div>

              {analyzedSentiment && (
                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Classified State:</span>
                    <span className="font-bold text-orange-600 dark:text-orange-400 text-sm">
                      {analyzedSentiment.mood}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Stress Index:</span>
                    <span className="font-bold text-slate-900 dark:text-white text-sm">
                      {analyzedSentiment.stressLevel}
                    </span>
                  </div>
                  <div className="sm:col-span-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-slate-400 block text-[11px] mb-0.5">Clinical Wellness Suggestion:</span>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      {analyzedSentiment.advice}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* CASE 3: Integrated Healthcare Management System */}
          {project.id === 'healthcare-management-system' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 font-bold text-sm text-orange-600">
                  <Activity className="w-4 h-4" />
                  <span>Hospital Shift &amp; Electronic Medical Records (EHR) Explorer</span>
                </div>
                <span className="text-xs text-slate-500">HIPAA Compliant Simulator</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 text-xs">
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-400 block">Active Inpatients:</span>
                  <span className="text-lg font-bold text-slate-900 dark:text-white">142 Beds (88%)</span>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-400 block">Doctors On Duty:</span>
                  <span className="text-lg font-bold text-emerald-600">28 Specialists</span>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-400 block">Pharmacy Stock:</span>
                  <span className="text-lg font-bold text-orange-600">99.2% Available</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
                <p className="font-bold mb-1">Recent Hospital Audit Event:</p>
                <p className="text-slate-500">Dr. Ranjan dispatched prescription #RX-9921 to Central Pharmacy with digital signature verification.</p>
              </div>
            </div>
          )}

          {/* CASE 4: Medical Clinic Website */}
          {project.id === 'medical-clinic-website' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 font-bold text-sm text-orange-600">
                  <Calendar className="w-4 h-4" />
                  <span>Patient Appointment Booking Simulator</span>
                </div>
                <span className="text-xs text-slate-500">Real-time Slot Dispatch</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300">
                    Select Specialist:
                  </label>
                  <select 
                    value={doctorSelected}
                    onChange={(e) => setDoctorSelected(e.target.value)}
                    className="w-full p-2.5 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                  >
                    <option>Dr. Ananya Sharma - Cardiology Specialist</option>
                    <option>Dr. Vikram Mehta - Orthopedic Surgeon</option>
                    <option>Dr. Priya Nair - General Physician &amp; Wellness</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300">
                    Choose Available Time Slot:
                  </label>
                  <div className="flex gap-2">
                    {["10:00 AM", "02:30 PM", "05:00 PM"].map(slot => (
                      <button
                        key={slot}
                        onClick={() => setBookedSlot(slot)}
                        className={`flex-1 p-2 rounded-xl text-xs font-semibold border transition-all ${
                          bookedSlot === slot
                            ? 'bg-orange-500 text-white border-orange-500'
                            : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {bookedSlot && (
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
                  <span>Simulated appointment booked with {doctorSelected} at {bookedSlot}! SMS confirmation triggered.</span>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Feature List */}
        <div className="mb-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
            Core Engineering Architecture
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stacks */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Technologies &amp; Libraries
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(t => (
              <span 
                key={t}
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Inspect GitHub Code</span>
          </a>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/30 transition-colors"
          >
            Done Exploring
          </button>
        </div>

      </motion.div>
    </div>
  );
}
