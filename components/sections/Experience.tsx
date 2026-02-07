import React from 'react';
import { EXPERIENCE } from '../../constants';
import Card from '../ui/Card';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">Operational History</h2>
                <p className="text-text-muted max-w-lg">
                    A trajectory from industrial precision to digital engineering.
                </p>
            </div>
            <div className="font-mono text-xs text-text-muted p-2 bg-chassis shadow-recessed rounded">
                LOG_ENTRIES: {EXPERIENCE.length}
            </div>
        </div>

        <div className="relative">
            {/* Center Line (Pipe) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-3 rounded-full bg-muted shadow-[inset_0_1px_3px_rgba(0,0,0,0.2)]" />

            <div className="space-y-12">
                {EXPERIENCE.map((item, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div key={item.id} className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                            
                            {/* Card Side */}
                            <div className="w-full md:w-1/2 flex justify-center">
                                <Card className={`w-full max-w-lg ${isEven ? 'md:mr-12' : 'md:ml-12'}`} withScrews>
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="font-bold text-lg text-text-primary">{item.role}</span>
                                        {item.type === 'job' ? <Briefcase size={16} className="text-accent" /> : <GraduationCap size={16} className="text-accent" />}
                                    </div>
                                    <h4 className="font-mono text-sm text-text-muted mb-4 uppercase tracking-wide">{item.company}</h4>
                                    <p className="text-text-primary/80 text-sm leading-relaxed border-t border-gray-300 pt-4">
                                        {item.description}
                                    </p>
                                    
                                    {/* Label Decor */}
                                    <div className="absolute -top-3 right-6 bg-yellow-400/20 backdrop-blur-sm px-2 py-1 transform -rotate-2 border border-yellow-500/30">
                                        <span className="text-[10px] font-mono font-bold text-yellow-800">{item.period}</span>
                                    </div>
                                </Card>
                            </div>

                            {/* Center Connector */}
                            <div className="hidden md:flex relative z-10 w-8 h-8 rounded-full bg-chassis border-4 border-muted shadow-card items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-accent" />
                            </div>

                            {/* Empty Side for Spacing */}
                            <div className="w-full md:w-1/2" />
                        </div>
                    );
                })}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;