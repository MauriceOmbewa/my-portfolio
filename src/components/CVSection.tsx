import React from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';
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

  return (
    <Section id="cv" icon={<FileText />} title="Curriculum Vitae">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* CV Preview */}
        <div className="space-y-6">
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-400" />
              CV Preview
            </h3>
            
            {/* PDF Viewer for Desktop */}
            <div className="hidden md:block">
              <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="/maurice-ombewa-cv.pdf"
                  className="w-full h-96 border-0"
                  title="Maurice Ombewa CV Preview"
                />
              </div>
            </div>

            {/* Mobile Preview Placeholder */}
            <div className="md:hidden bg-gray-700/50 rounded-lg p-8 text-center">
              <FileText className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <p className="text-gray-300 mb-4">
                CV preview is available on desktop devices
              </p>
              <button
                onClick={handleViewInNewTab}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View in new tab
              </button>
            </div>
          </div>
        </div>

        {/* CV Information and Actions */}
        <div className="space-y-6">
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <h3 className="text-xl font-semibold text-white mb-4">
              About My CV
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                My curriculum vitae provides a comprehensive overview of my professional experience, 
                technical skills, education, and achievements in software development.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium text-white">Highlights include:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Software development experience with Go, JavaScript, and modern web technologies</li>
                  <li>Educational background in Information Technology</li>
                  <li>Project portfolio showcasing practical applications</li>
                  <li>Technical certifications and continuous learning initiatives</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={handleDownload}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5" />
              Download CV (PDF)
            </button>
            
            <button
              onClick={handleViewInNewTab}
              className="w-full bg-gray-700/50 hover:bg-gray-600/50 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 border border-gray-600/50 hover:border-gray-500/50"
            >
              <ExternalLink className="w-5 h-5" />
              Open in New Tab
            </button>
          </div>

          {/* Last Updated */}
          <div className="text-center text-sm text-gray-400">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CVSection;
