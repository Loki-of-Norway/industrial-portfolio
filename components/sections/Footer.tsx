import React from 'react';
import { PROFILE } from '../../constants';
import { Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#2d3436] text-white py-16 relative overflow-hidden">
        {/* Carbon Fiber overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-2xl font-bold mb-6">Initialize Communication</h3>
                <p className="text-gray-400 mb-8 max-w-sm">
                    Ready to deploy robust fullstack solutions. Reach out for collaboration or inquiries.
                </p>
                
                <div className="space-y-4 font-mono text-sm">
                    <div className="flex items-center gap-3">
                        <span className="text-accent">{'>'}</span>
                        <span className="text-gray-400">EMAIL:</span>
                        <a href={`mailto:${PROFILE.email}`} className="hover:text-accent transition-colors">{PROFILE.email}</a>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-accent">{'>'}</span>
                        <span className="text-gray-400">PHONE:</span>
                        <span>{PROFILE.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-accent">{'>'}</span>
                        <span className="text-gray-400">BASE:</span>
                        <span>{PROFILE.location}</span>
                    </div>

                    {/* LinkedIn Button */}
                    <div className="pt-4">
                      <a 
                        href={PROFILE.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#0077b5] text-white rounded-md shadow-[4px_4px_8px_rgba(0,0,0,0.3)] hover:brightness-110 active:translate-y-[1px] transition-all font-sans font-bold uppercase text-xs tracking-wider"
                      >
                        <Linkedin size={16} />
                        Connect on LinkedIn
                      </a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-between items-start md:items-end">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_lime]" />
                        <span className="text-xs font-mono text-green-400">SYSTEM STATUS: NOMINAL</span>
                    </div>
                    <div className="text-[10px] text-gray-500 font-mono">
                        LAST UPDATED: {new Date().toLocaleDateString()}
                    </div>
                </div>

                <div className="mt-8 text-gray-600 text-xs font-mono">
                    © {new Date().getFullYear()} THEODOR KVALEM. ALL RIGHTS RESERVED.
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;