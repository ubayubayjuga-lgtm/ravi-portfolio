import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { PROFILE } from '../data/profileData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROFILE.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-3xl glass-panel border border-slate-800/80 p-8 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-500 overflow-hidden shadow-2xl"
            >
              {/* Ambient Glow on Hover */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/15 transition-all duration-700 pointer-events-none"></div>

              <div className="space-y-5 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-widest px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">0{index + 1}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-300 transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>

              <div className="pt-8 space-y-5 relative z-10">
                <div className="flex items-center gap-2 text-[11px] text-emerald-400/90 font-mono bg-emerald-500/5 p-2.5 rounded-xl border border-emerald-500/10">
                  <TrendingUp size={14} className="shrink-0 text-emerald-400" />
                  <span className="truncate">{project.metrics}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-slate-900/80 text-slate-300 border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};