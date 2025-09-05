import React from 'react';
import { Calendar, MapPin, Award, Code, Users, Zap, Trophy } from 'lucide-react';
import { Download, Github, Mail, ArrowDown, Sparkles, ShieldCheck } from 'lucide-react';
import type { Experience } from '../types';
import ScrollReveal from './ScrollReveal';

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: '1',
      title: 'Intelligent Automation Intern',
      company: 'Atharva Atelier',
      period: 'May 2025 - Sep 2025',
      description: 'Reduced 3D modeling time by 80% by designing an AI tool to convert 2D CAD drawings into 3D models. Processed 100+ architectural DWG files and automated recognition of 100+ entities (walls, texts, elevations).',
      type: 'internship'
    },
    {
      id: '2',
      title: 'AI Intern',
      company: 'METALCO',
      period: 'May 2025 - June 2025',
      description: 'Automated 500+ monthly tax invoices and follow-ups using AI Agents, cutting processing time by 70%.',
      type: 'internship'
    }
  ];

  const getIcon = (type: Experience['type']) => {
    switch (type) {
      case 'internship':
        return <Code className="w-5 h-5" />;
      case 'hackathon':
        return <Trophy className="w-5 h-5" />;
      case 'research':
        return <Users className="w-5 h-5" />;
      case 'project':
        return <Zap className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: Experience['type']) => {
    switch (type) {
      case 'internship':
        return { bg: 'from-cyber-500 to-cyber-600', border: 'border-cyber-500/50', text: 'text-cyber-400' };
      case 'hackathon':
        return { bg: 'from-electric-500 to-electric-600', border: 'border-electric-500/50', text: 'text-electric-400' };
      case 'research':
        return { bg: 'from-matrix-500 to-matrix-600', border: 'border-matrix-500/50', text: 'text-matrix-400' };
      case 'project':
        return { bg: 'from-neon-500 to-neon-600', border: 'border-neon-500/50', text: 'text-neon-400' };
      default:
        return { bg: 'from-gray-500 to-gray-600', border: 'border-gray-500/50', text: 'text-gray-400' };
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-surface-900 via-void-800 to-surface-900 relative overflow-hidden lg:pl-24">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="fade" delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-cyber">
              EXPERIENCE <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-400 to-electric-400 animate-glow">LOG</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-neon-500 via-cyber-500 to-electric-500 mx-auto mb-8 animate-pulse"></div>
            <p className="text-lg text-cyber-300 max-w-2xl mx-auto font-matrix">
              {'>'} Career progression through AI/ML research and development
            </p>
          </div>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto flex flex-col space-y-12">
          {/* Quantum Timeline */}
          <div className="absolute top-0 left-4 sm:left-1/2 sm:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-500 via-cyber-500 via-electric-500 to-matrix-500 rounded-full animate-pulse"></div>

          {experiences.map((experience, index) => {
            const colors = getTypeColor(experience.type);
            return (
              <ScrollReveal
                key={experience.id}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={400 + index * 200}
              >
                <div className={`flex flex-col sm:flex-row items-center mb-16 relative group ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${colors.bg} rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-2xl transition-all duration-300 animate-cyber-pulse border-4 border-void-900`}>
                    {getIcon(experience.type)}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full sm:w-5/12 ${index % 2 === 0 ? 'sm:pr-12' : 'sm:pl-12'} mt-6 sm:mt-0`}>
                  <div className={`bg-void-800/50 backdrop-blur-sm border ${colors.border} rounded-2xl p-6 hover:bg-void-800/70 transition-all duration-500 hover:shadow-xl hover:shadow-neon-500/10 group-hover:border-neon-500/60`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 font-cyber group-hover:text-neon-400 transition-colors">
                          {experience.title}
                        </h3>
                        <p className={`${colors.text} font-semibold mb-3 font-matrix`}>
                          {experience.company}
                        </p>
                      </div>
                      <span className={`px-3 py-1 bg-gradient-to-r ${colors.bg} text-white text-xs rounded-full uppercase tracking-wider font-matrix shadow-lg`}>
                        {experience.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-400 text-sm mb-4 font-matrix">
                      <Calendar className="w-4 h-4 mr-2 text-neon-400" />
                      {experience.period}
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed font-matrix text-sm">
                      {experience.description}
                    </p>

                    {/* Status Indicator */}
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-neon-500 rounded-full mr-2 animate-pulse" />
                        <span className="text-neon-400 text-xs font-matrix">STATUS: COMPLETED</span>
                      </div>
                      <div className="text-xs text-gray-500 font-matrix">
                        ID: {experience.id.padStart(4, '0')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden sm:block w-5/12"></div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Certifications Section */}
        <ScrollReveal direction="up" delay={800}>
          <div className="mt-20">
            <h3 className="text-4xl font-bold text-center text-white mb-12 font-cyber tracking-widest">
              CERTIF<span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-400 to-electric-400">ICATION_</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Oracle AI Vector Search Certified Professional',
                  organization: 'Oracle',
                  date: 'Issued Sep 2025 · Expires Sep 2027',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  title: 'Oracle Cloud Infrastructure 2025 Generative AI Professional',
                  organization: 'Oracle',
                  date: 'Issued Sep 2025 · Expires Sep 2027',
                  color: 'from-blue-500 to-cyan-400'
                },
                {
                  title: 'AWS Academy Graduate - Generative AI Foundations',
                  organization: 'Amazon Web Services',
                  date: 'Issued Sep 2025',
                  color: 'from-indigo-500 to-violet-500'
                },
                {
                  title: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
                  organization: 'Amazon Web Services',
                  date: 'Issued Mar 2025',
                  color: 'from-yellow-400 to-orange-500'
                },
                {
                  title: 'AWS Academy Graduate - AWS Academy Machine Learning Foundations',
                  organization: 'Amazon Web Services',
                  date: 'Issued Mar 2025',
                  color: 'from-green-400 to-emerald-500'
                },
                {
                  title: 'NPTEL Java Programming Certification',
                  organization: 'NPTEL',
                  date: 'Issued Nov 2024',
                  color: 'from-red-400 to-pink-600'
                }
              ].map((cert, index) => (
                <div
                  key={index}
                  className="relative bg-void-800/40 backdrop-blur-xl border border-void-600 rounded-2xl p-6 shadow-lg shadow-black/30 hover:shadow-2xl hover:shadow-neon-500/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  {/* Gradient Header Bar */}
                  <div className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${cert.color}`} />

                  {/* Icon + Date */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 bg-gradient-to-r ${cert.color} rounded-xl shadow-md group-hover:scale-110 transition-transform`}>
                      <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-3 py-1 text-xs rounded-full bg-void-700 text-gray-300 font-matrix">
                      {cert.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-semibold text-lg text-white mb-2 leading-snug group-hover:text-neon-400 transition-colors font-cyber">
                    {cert.title}
                  </h4>

                  {/* Organization */}
                  <p className="text-gray-400 text-sm font-matrix">
                    {cert.organization}
                  </p>

                  {/* Footer Glow */}
                  <div className={`absolute bottom-0 inset-x-0 h-1 rounded-b-2xl bg-gradient-to-r ${cert.color} opacity-60`} />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ExperienceSection;