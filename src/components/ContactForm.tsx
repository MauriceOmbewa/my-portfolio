import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  // EmailJS configuration from environment variables
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill in all fields.'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      return;
    }

    setStatus({
      type: 'loading',
      message: 'Sending message...'
    });

    try {
      // EmailJS send
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'ombewamaurice79@gmail.com'
        },
        PUBLIC_KEY
      );

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact me directly.'
      });
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white border border-gray-600/50 focus:border-blue-500/50"
            placeholder="Your full name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white border border-gray-600/50 focus:border-blue-500/50"
            placeholder="your.email@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white border border-gray-600/50 focus:border-blue-500/50"
            placeholder="Tell me about your project or how I can help you..."
          ></textarea>
        </div>

        {/* Status Message */}
        {status.type !== 'idle' && (
          <div className={`flex items-center gap-2 p-3 rounded-lg ${
            status.type === 'success' 
              ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
              : status.type === 'error'
              ? 'bg-red-500/10 text-red-400 border border-red-500/20'
              : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
          }`}>
            {status.type === 'success' && <CheckCircle className="w-5 h-5" />}
            {status.type === 'error' && <AlertCircle className="w-5 h-5" />}
            {status.type === 'loading' && (
              <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
            )}
            <span>{status.message}</span>
          </div>
        )}
        
        <button
          type="submit"
          disabled={status.type === 'loading'}
          className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors rounded-lg text-white font-medium flex items-center justify-center gap-2"
        >
          {status.type === 'loading' ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
