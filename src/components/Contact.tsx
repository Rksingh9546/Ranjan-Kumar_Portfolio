import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Github, 
  Linkedin, 
  Twitter 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeMode, ContactMessage } from '../types';

interface ContactProps {
  theme: ThemeMode;
}

export default function Contact({ theme }: ContactProps) {
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceInterest: 'Full-Stack Development'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const isWarm = theme === 'warm';

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg("Please fill in your name, email, and message.");
      return;
    }

    setErrorMsg(null);
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        serviceInterest: 'Full-Stack Development'
      });
      setTimeout(() => setIsSuccess(false), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
            isWarm 
              ? 'bg-orange-100 text-orange-700 border border-orange-200' 
              : 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/30'
          }`}>
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
            isWarm ? 'text-slate-900' : 'text-white'
          }`}>
            Let's Collaborate on Something Impactful
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isWarm ? 'text-slate-600' : 'text-slate-300'
          }`}>
            Whether you have a full-time role, a freelance AI engineering project, or want to discuss machine learning architectures, drop a line!
          </p>
        </div>

        {/* Contact Layout: Left Info Card + Right Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Contact Details & Availability */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Primary Card */}
            <div className={`rounded-3xl p-6 sm:p-8 border transition-all ${
              isWarm
                ? 'bg-white shadow-xl shadow-orange-950/5 border-orange-200/80'
                : 'bg-slate-900/90 shadow-2xl border-slate-800 backdrop-blur-xl'
            }`}>
              <h3 className={`text-xl font-bold tracking-tight mb-6 ${
                isWarm ? 'text-slate-900' : 'text-white'
              }`}>
                Contact Information
              </h3>

              <div className="space-y-5 mb-8">
                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  id="contact-info-email"
                  className={`flex items-start gap-4 p-3 rounded-2xl transition-all group ${
                    isWarm ? 'hover:bg-orange-50/80' : 'hover:bg-slate-800/80'
                  }`}
                >
                  <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500 shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`block text-xs font-semibold ${
                      isWarm ? 'text-slate-400' : 'text-slate-400'
                    }`}>
                      Direct Email
                    </span>
                    <span className={`font-bold text-sm sm:text-base break-all ${
                      isWarm ? 'text-slate-900 group-hover:text-orange-600' : 'text-slate-100 group-hover:text-cyan-400'
                    }`}>
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <div className={`flex items-start gap-4 p-3 rounded-2xl transition-all ${
                  isWarm ? 'hover:bg-orange-50/80' : 'hover:bg-slate-800/80'
                }`}>
                  <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`block text-xs font-semibold ${
                      isWarm ? 'text-slate-400' : 'text-slate-400'
                    }`}>
                      Phone / WhatsApp
                    </span>
                    <span className={`font-bold text-sm sm:text-base ${
                      isWarm ? 'text-slate-900' : 'text-slate-100'
                    }`}>
                      +91 9508016528
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className={`flex items-start gap-4 p-3 rounded-2xl transition-all ${
                  isWarm ? 'hover:bg-orange-50/80' : 'hover:bg-slate-800/80'
                }`}>
                  <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`block text-xs font-semibold ${
                      isWarm ? 'text-slate-400' : 'text-slate-400'
                    }`}>
                      Based In
                    </span>
                    <span className={`font-bold text-sm sm:text-base ${
                      isWarm ? 'text-slate-900' : 'text-slate-100'
                    }`}>
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Badges */}
              <div className="pt-6 border-t border-orange-100/70 space-y-3">
                <div className="flex items-center gap-2.5 text-xs">
                  <Clock className="w-4 h-4 text-emerald-500" />
                  <span className={isWarm ? 'text-slate-700' : 'text-slate-300'}>
                    Typical response time: <strong className="font-semibold">Within 12 hours</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-xs">
                  <ShieldCheck className="w-4 h-4 text-orange-500" />
                  <span className={isWarm ? 'text-slate-700' : 'text-slate-300'}>
                    Available for: <strong className="font-semibold">Full-Time, Contract, &amp; AI Research</strong>
                  </span>
                </div>
              </div>

            </div>

            {/* Social Links Bar */}
            <div className={`rounded-2xl p-5 border flex items-center justify-between ${
              isWarm
                ? 'bg-orange-50/60 border-orange-200/80 text-slate-800'
                : 'bg-slate-900/80 border-slate-800 text-slate-200'
            }`}>
              <span className="text-xs font-bold uppercase tracking-wider">Connect Online:</span>
              <div className="flex items-center gap-3">
                {PERSONAL_INFO.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    title={s.name}
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                      isWarm
                        ? 'bg-white hover:bg-orange-500 hover:text-white text-slate-700 shadow-2xs border border-orange-200'
                        : 'bg-slate-800 hover:bg-cyan-400 hover:text-slate-950 text-slate-300 border border-slate-700'
                    }`}
                  >
                    {s.name === 'GitHub' && <Github className="w-4 h-4" />}
                    {s.name === 'LinkedIn' && <Linkedin className="w-4 h-4" />}
                    {s.name === 'X (Twitter)' && <Twitter className="w-4 h-4" />}
                    {s.name !== 'GitHub' && s.name !== 'LinkedIn' && s.name !== 'X (Twitter)' && <Sparkles className="w-4 h-4" />}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form with Name, Email, Phone, Message, and Send Message button */}
          <div className="lg:col-span-7">
            <div className={`rounded-3xl p-6 sm:p-10 border transition-all ${
              isWarm
                ? 'bg-white shadow-xl shadow-orange-950/5 border-orange-200/80'
                : 'bg-slate-900/90 shadow-2xl border-slate-800 backdrop-blur-xl'
            }`}>
              <h3 className={`text-xl sm:text-2xl font-bold tracking-tight mb-2 ${
                isWarm ? 'text-slate-900' : 'text-white'
              }`}>
                Send a Direct Message
              </h3>
              <p className={`text-xs sm:text-sm mb-6 ${
                isWarm ? 'text-slate-500' : 'text-slate-400'
              }`}>
                Fill in the details below and I will get back to you promptly.
              </p>

              {errorMsg && (
                <div className="mb-6 p-3 rounded-xl bg-red-50 text-red-600 border border-red-200 text-xs font-semibold">
                  {errorMsg}
                </div>
              )}

              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-sm font-semibold flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <div>
                    <p className="font-bold">Message sent successfully!</p>
                    <p className="text-xs text-emerald-700 mt-0.5">Thank you, Ranjan will reply to your email shortly.</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Interest Pills */}
                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                    isWarm ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                    I'm Interested In:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Full-Stack Development',
                      'AI / ML Engineering',
                      'Full-Time Opportunity',
                      'Consulting / Freelance'
                    ].map((interest) => (
                      <button
                        type="button"
                        key={interest}
                        onClick={() => setFormData({ ...formData, serviceInterest: interest })}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          formData.serviceInterest === interest
                            ? isWarm
                              ? 'bg-orange-500 text-white shadow-xs'
                              : 'bg-cyan-400 text-slate-950 font-bold'
                            : isWarm
                              ? 'bg-orange-50 text-slate-700 hover:bg-orange-100/70 border border-orange-200/60'
                              : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label 
                      htmlFor="contact-name"
                      className={`block text-xs font-bold mb-1.5 ${
                        isWarm ? 'text-slate-700' : 'text-slate-300'
                      }`}
                    >
                      Your Name <span className="text-orange-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Name "
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl text-sm border transition-all focus:outline-none ${
                        isWarm
                          ? 'bg-slate-50/60 border-orange-200 focus:border-orange-500 focus:bg-white text-slate-900'
                          : 'bg-slate-950/60 border-slate-700 focus:border-cyan-400 text-white'
                      }`}
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="contact-email"
                      className={`block text-xs font-bold mb-1.5 ${
                        isWarm ? 'text-slate-700' : 'text-slate-300'
                      }`}
                    >
                      Your Email <span className="text-orange-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="Email "
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl text-sm border transition-all focus:outline-none ${
                        isWarm
                          ? 'bg-slate-50/60 border-orange-200 focus:border-orange-500 focus:bg-white text-slate-900'
                          : 'bg-slate-950/60 border-slate-700 focus:border-cyan-400 text-white'
                      }`}
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label 
                    htmlFor="contact-phone"
                    className={`block text-xs font-bold mb-1.5 ${
                      isWarm ? 'text-slate-700' : 'text-slate-300'
                    }`}
                  >
                    Phone Number 
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="+91 "
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl text-sm border transition-all focus:outline-none ${
                      isWarm
                        ? 'bg-slate-50/60 border-orange-200 focus:border-orange-500 focus:bg-white text-slate-900'
                        : 'bg-slate-950/60 border-slate-700 focus:border-cyan-400 text-white'
                    }`}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label 
                    htmlFor="contact-message"
                    className={`block text-xs font-bold mb-1.5 ${
                      isWarm ? 'text-slate-700' : 'text-slate-300'
                    }`}
                  >
                    Message <span className="text-orange-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell me about your project, timeline, or engineering role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl text-sm border transition-all focus:outline-none resize-y ${
                      isWarm
                        ? 'bg-slate-50/60 border-orange-200 focus:border-orange-500 focus:bg-white text-slate-900'
                        : 'bg-slate-950/60 border-slate-700 focus:border-cyan-400 text-white'
                    }`}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={isSubmitting}
                  className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${
                    isWarm
                      ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-orange-500/30'
                      : 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Transmitting..." : "Send Message"}</span>
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
