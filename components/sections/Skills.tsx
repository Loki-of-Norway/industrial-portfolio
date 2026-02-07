import React from 'react';
import { SKILLS } from '../../constants';
import Card from '../ui/Card';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-chassis relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">Technical Modules</h2>
                <div className="h-1 w-24 bg-accent rounded-full shadow-glow" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Categorized Skills */}
                {['Tech', 'Tool', 'Soft'].map((category) => (
                    <Card key={category} withVents className="min-h-[300px]">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-3 h-3 rounded-full bg-accent animate-pulse shadow-glow" />
                            <h3 className="text-xl font-bold uppercase tracking-wider text-text-muted">{category} Stack</h3>
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                            {SKILLS.filter(s => s.category === category).map((skill) => (
                                <div 
                                    key={skill.name}
                                    className="px-4 py-2 bg-chassis rounded-md shadow-card font-mono text-sm text-text-primary border border-white/20 hover:text-accent transition-colors cursor-default select-none"
                                >
                                    {skill.name}
                                </div>
                            ))}
                        </div>

                        {/* Decor: Technical Info */}
                        <div className="absolute bottom-6 left-8 right-8 pt-4 border-t border-gray-300/50 flex justify-between text-[10px] font-mono text-text-muted">
                            <span>MOD_ID: 0{category.length}</span>
                            <span>STATUS: ACTIVE</span>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Skills;