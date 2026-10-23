import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { ContactForm } from './components/ContactForm';
import { PROFILE } from './data/profileData';
import { Mail, Phone, MapPin, CheckCircle2, Briefcase, GraduationCap, Compass } from 'lucide-react';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-emerald-500 selection:text-slate-950">
      <Navbar />
      
      <main>
        <Hero />

        {/* 01 / ABOUT & PHILOSOPHY SECTION */}
        <section id="about" className="py-28 border-t border-slate-800/60 relative">
          <div className="max-w-6xl mx-auto px-6">
            
            <div className="flex items-center gap-4 mb-16">
              <span className="text-xs font-mono font-bold text-emerald-400 tracking-widest">01 / PROFILE & ETHOS</span>
              <div className="h-px bg-slate-800 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-6">
                <h2 className="text-3xl font-bold text-slate-50 leading-tight">
                  Ketelitian rekayasa bertemu kedisiplinan operasional.
                </h2>
                <div className="p-6 rounded-2xl glass-panel border border-slate-800/80 space-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl"></div>
                  <Compass size={20} className="text-emerald-400 mb-2" />
                  <p className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Filosofi Kerja</p>
                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    "Menggabungkan pola pikir terstruktur informatika dengan standar eksekusi lapangan yang presisi, efisien, dan berorientasi pada kualitas jangka panjang."
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-8">
                <p className="text-slate-300 text-base leading-relaxed">
                  {PROFILE.about}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {PROFILE.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2.5 text-xs text-slate-300 glass-panel p-3 rounded-xl border border-slate-800/80 hover:border-emerald-500/30 transition-colors">
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800/60 flex flex-wrap gap-6 text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-2"><MapPin size={14} className="text-emerald-400" /> {PROFILE.contact.location}</span>
                  <span className="flex items-center gap-2"><Phone size={14} className="text-emerald-400" /> {PROFILE.contact.phone}</span>
                  <span className="flex items-center gap-2"><Mail size={14} className="text-emerald-400" /> {PROFILE.contact.email}</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 02 / EXPERIENCE & EDUCATION SECTION */}
        <section className="py-28 border-t border-slate-800/60 bg-slate-950/30 relative">
          <div className="max-w-6xl mx-auto px-6">
            
            <div className="flex items-center gap-4 mb-16">
              <span className="text-xs font-mono font-bold text-emerald-400 tracking-widest">02 / CAREER & TRACK RECORD</span>
              <div className="h-px bg-slate-800 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Experience Column */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Briefcase size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-50">Pengalaman Profesional</h3>
                </div>

                <div className="space-y-6 relative border-l border-slate-800 ml-3 pl-6">
                  {PROFILE.experience.map((exp, idx) => (
                    <div key={idx} className="relative space-y-2 group">
                      <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-800 border-2 border-emerald-400 group-hover:bg-emerald-400 transition-colors"></div>
                      <span className="text-xs font-mono font-semibold text-emerald-400">{exp.period}</span>
                      <h4 className="text-lg font-bold text-slate-100">{exp.role} <span className="text-slate-400 font-normal">@ {exp.company}</span></h4>
                      <p className="text-xs text-slate-300 leading-relaxed">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Column */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <GraduationCap size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-50">Latar Belakang Pendidikan</h3>
                </div>

                <div className="space-y-6 relative border-l border-slate-800 ml-3 pl-6">
                  {PROFILE.education.map((edu, idx) => (
                    <div key={idx} className="relative space-y-2 group">
                      <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-800 border-2 border-emerald-400 group-hover:bg-emerald-400 transition-colors"></div>
                      <span className="text-xs font-mono font-semibold text-emerald-400">{edu.period}</span>
                      <h4 className="text-lg font-bold text-slate-100">{edu.institution}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">{edu.degree}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 03 / PROJECTS SECTION */}
        <div className="border-t border-slate-800/60 relative">
          <div className="max-w-6xl mx-auto px-6 pt-16">
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono font-bold text-emerald-400 tracking-widest">03 / SELECTED WORKS</span>
              <div className="h-px bg-slate-800 flex-1"></div>
            </div>
          </div>
          <Projects />
        </div>

        {/* 04 / CONTACT SECTION */}
        <section id="contact" className="py-28 border-t border-slate-800 relative overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none"></div>

          <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span>04 / CONNECT</span>
            </div>

            <h2 className="text-3xl font-extrabold text-slate-50">
              Mari Berkolaborasi dalam Proyek Berikutnya.
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
              Terbuka untuk peluang profesional, pengembangan sistem web, maupun kolaborasi strategis. Silakan kirimkan pesan melalui formulir di bawah ini.
            </p>
            
            {/* Formulir Kontak Interaktif */}
            <ContactForm />

            <div className="pt-6 flex flex-wrap justify-center gap-4 border-t border-slate-800/60 max-w-xl mx-auto">
              <a
                href={`mailto:${PROFILE.contact.email}`}
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Mail size={14} className="text-emerald-400" />
                {PROFILE.contact.email}
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={`tel:${PROFILE.contact.phone}`}
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Phone size={14} className="text-emerald-400" />
                {PROFILE.contact.phone}
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="py-8 border-t border-slate-900 text-center text-xs text-slate-500 font-mono">
        <p>© {new Date().getFullYear()} {PROFILE.name}. Designed with editorial precision & robust engineering.</p>
      </footer>
    </div>
  );
};

export default App;