import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [statusMsg, setStatusMsg] = useState('');

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '';
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '';
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setStatusMsg('Please fill in all fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus('error');
      setStatusMsg('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setStatusMsg('Sending message…');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_name: formData.name, from_email: formData.email, message: formData.message, to_email: 'ombewamaurice79@gmail.com' },
        PUBLIC_KEY
      );
      setStatus('success');
      setStatusMsg("Message sent! I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
      setStatusMsg('Send failed — please try contacting me directly.');
    }
  };

  const inputClass =
    'w-full px-4 py-3 bg-gray-900/60 rounded-xl focus:ring-2 focus:ring-blue-500/50 outline-none text-white placeholder-gray-600 border border-gray-700/50 focus:border-blue-500/50 transition-all duration-300 text-sm';

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50"
    >
      <div>
        <label htmlFor="name" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={inputClass}
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={inputClass}
          placeholder="Tell me about your project or idea…"
        />
      </div>

      {status !== 'idle' && (
        <div
          className={`flex items-center gap-2 p-3 rounded-xl text-sm ${
            status === 'success'
              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
              : status === 'error'
              ? 'bg-red-500/10 text-red-400 border border-red-500/20'
              : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
          }`}
        >
          {status === 'success' && <CheckCircle className="w-4 h-4 flex-shrink-0" />}
          {status === 'error' && <AlertCircle className="w-4 h-4 flex-shrink-0" />}
          {status === 'loading' && <Loader2 className="w-4 h-4 flex-shrink-0 animate-spin" />}
          <span>{statusMsg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-glow w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 rounded-xl text-white font-medium flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
