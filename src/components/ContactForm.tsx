import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    // Membuka email client bawaan pengunjung dengan data terisi otomatis
    setTimeout(() => {
      const mailtoUrl = `mailto:raviyusuf37@gmail.com?subject=Portofolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
        `Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left max-w-xl mx-auto glass-panel p-8 rounded-2xl border border-slate-800">
      <div>
        <label className="block text-xs font-mono text-slate-400 mb-2">NAMA LENGKAP</label>
        <input
          type="text"
          required
          placeholder="Masukkan nama Anda"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500/60 transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-mono text-slate-400 mb-2">ALAMAT EMAIL</label>
        <input
          type="email"
          required
          placeholder="nama@email.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500/60 transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-mono text-slate-400 mb-2">PESAN ATAU PROYEK</label>
        <textarea
          required
          rows={4}
          placeholder="Tuliskan detail pesan atau rencana kolaborasi..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500/60 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-semibold text-xs hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/15 disabled:opacity-50 cursor-pointer"
      >
        {status === 'sending' ? (
          <span>Memproses Pesan...</span>
        ) : status === 'success' ? (
          <>
            <CheckCircle2 size={16} />
            <span>Pesan Siap Terkirim!</span>
          </>
        ) : (
          <>
            <Send size={16} />
            <span>Kirim Pesan Sekarang</span>
          </>
        )}
      </button>
    </form>
  );
};