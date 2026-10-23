import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, CircleDot } from 'lucide-react';
import { PROFILE } from '../data/profileData';
import profileImg from '../assets/ravi-profile.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen pt-36 pb-20 flex items-center relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />
      
      {/* Ambient Background Glow for Elegance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Kolom Teks (Editorial Typography) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-emerald-500/30 text-emerald-400 text-xs font-medium tracking-wide shadow-inner">
              <CircleDot size={12} className="animate-pulse text-emerald-400" />
              <span>Available for Opportunities & Projects</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-50 tracking-tight leading-[1.08]">
              Crafting <span className="font-serif italic font-normal text-emerald-300">functional</span> & aesthetic web solutions.
            </h1>

            <p className="text-base sm:text-lg text-slate-400 max-w-xl font-normal leading-relaxed">
              {PROFILE.tagline}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/15 group"
              >
                Tentang Saya
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl glass-panel text-slate-200 font-medium text-sm hover:bg-slate-800/80 transition-all border border-slate-700/80"
              >
                Hubungi Kami
              </a>
            </div>
          </motion.div>

          {/* Kolom Foto Profil dengan Sentuhan Premium */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group">
              {/* Refined Ambient Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-500/40 via-transparent to-indigo-500/30 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-80 transition duration-700"></div>
              
              {/* Photo Frame Container */}
              <div className="relative w-72 h-85 sm:w-80 sm:h-96 rounded-3xl overflow-hidden glass-panel border border-slate-700/60 shadow-2xl">
                <img 
                  src={profileImg} 
                  alt={PROFILE.name} 
                  className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition duration-700 ease-out"
                />
                
                {/* Smooth Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/20 to-transparent opacity-80"></div>
                
                {/* Floating Info Tag inside Frame */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl glass-panel border border-white/10 backdrop-blur-xl flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-100">{PROFILE.name}</p>
                    <p className="text-[10px] text-emerald-400 font-medium tracking-wide">Informatics Specialist</p>
                  </div>
                  <Sparkles size={16} className="text-emerald-400" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};