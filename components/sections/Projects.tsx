import React from 'react';
import { PROJECTS } from '../../constants';
import Card from '../ui/Card';
import { Bot, Lock, Code, Shield } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-chassis">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-12">Active Protocols</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => {
                const isStealth = project.tech.includes("Stealth Mode");
                return (
                  <Card key={idx} elevated withVents>
                      <div className="flex items-start gap-4 mb-6">
                          <div className={`w-12 h-12 rounded-lg shadow-recessed flex items-center justify-center ${isStealth ? 'bg-chassis text-text-muted' : 'bg-chassis text-accent'}`}>
                              {isStealth ? <Lock size={24} /> : <Bot size={24} />}
                          </div>
                          <div>
                              <h3 className="text-xl font-bold text-text-primary">{project.title}</h3>
                              <div className="flex gap-2 mt-2">
                                  {project.tech.map(t => (
                                      <span key={t} className="text-[10px] font-mono bg-panel px-2 py-0.5 rounded shadow-sm text-text-muted uppercase">{t}</span>
                                  ))}
                              </div>
                          </div>
                      </div>
                      <p className="text-text-muted leading-relaxed">
                          {project.description}
                      </p>
                      <div className="mt-6 flex justify-end">
                          <button 
                            className={`text-sm font-bold uppercase tracking-wider flex items-center gap-1 ${isStealth ? 'text-text-muted cursor-not-allowed' : 'text-accent hover:underline'}`}
                            disabled={isStealth}
                          >
                              {isStealth ? (
                                <>Access Restricted <Shield size={14} /></>
                              ) : (
                                <>Execute View <Code size={14} /></>
                              )}
                          </button>
                      </div>
                  </Card>
                );
            })}
        </div>
      </div>
    </section>
  );
};

export default Projects;