import React from 'react';
import { FileText, Download, ExternalLink, CheckCircle } from 'lucide-react';
import Section from './Section';

const CVSection: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/maurice-ombewa-cv.pdf';
    link.download = 'Maurice-Ombewa-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewInNewTab = () => {
    window.open('/maurice-ombewa-cv.pdf', '_blank');
  };

  const highlights = [
    'Full-stack experience with React, Angular, FastAPI & Spring Boot',
    'BS. Information Technology — KCA University',
    'Production deployments with Docker, CI/CD & Linux servers',
    'Open-source projects with live demos',
  ];

  return (
    <Section id="cv" icon={<FileText />} title="Curriculum Vitae">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* CV Preview */}
        <div className="reveal-left">
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 card-hover gradient-border">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-400" />
              CV Preview
            </h3>

            {/* Desktop PDF viewer */}
            <div className="hidden md:block">
              <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <iframe
                  src="/maurice-ombewa-cv.pdf"
                  className="w-full h-96 border-0"
                  title="Maurice Ombewa CV"
                />
              </div>
            </div>

            {/* Mobile fallback */}
            <div className="md:hidden bg-gray-700/40 rounded-xl p-8 text-center">
              <FileText className="w-14 h-14 text-blue-400 mx-auto mb-4" />
              <p className="text-gray-400 text-sm mb-4">
                PDF preview is available on desktop devices.
              </p>
              <button
                onClick={handleViewInNewTab}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Open in new tab
              </button>
            </div>
          </div>
        </div>

        {/* Info + actions */}
        <div className="reveal-right space-y-6">
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">About My CV</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              A comprehensive look at my professional journey, technical skills, education,
              and the projects I've shipped end-to-end.
            </p>
            <ul className="space-y-2.5">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <button
              onClick={handleDownload}
              className="btn-glow w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
            >
              <Download className="w-5 h-5" />
              Download CV (PDF)
            </button>

            <button
              onClick={handleViewInNewTab}
              className="btn-glow w-full bg-gray-700/50 hover:bg-gray-600/50 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border border-gray-600/50 hover:border-gray-500/50"
            >
              <ExternalLink className="w-5 h-5" />
              Open in New Tab
            </button>
          </div>

          <p className="text-center text-xs text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default CVSection;
