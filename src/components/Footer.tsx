import React from 'react';
import { Github, Linkedin, Mail, X, ExternalLink, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-950 border-t border-white/[0.06] py-12 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <a href="#" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent tracking-wider">
            M.OMBEWA
          </a>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { href: 'https://github.com/MauriceOmbewa', icon: <Github className="w-4 h-4" />, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/maurice-ombewa-3631ab223/', icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
              { href: 'mailto:ombewamaurice79@gmail.com', icon: <Mail className="w-4 h-4" />, label: 'Email' },
              { href: 'https://x.com/maurice_ombewa', icon: <X className="w-4 h-4" />, label: 'X/Twitter' },
              { href: 'https://dev.to/maurice_ombewa_21d073ef7a', icon: <ExternalLink className="w-4 h-4" />, label: 'Dev.to' },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-xl bg-gray-800/50 hover:bg-blue-500/10 text-gray-500 hover:text-blue-400 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            {['About', 'Projects', 'Experience', 'Blogs', 'CV', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-gray-300 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-xs text-gray-600 space-y-1">
            <p>© {new Date().getFullYear()} Maurice Ombewa. All rights reserved.</p>
            <p className="flex items-center justify-center gap-1">
              Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
