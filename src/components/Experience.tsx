import React, { useState } from 'react';
import { Calendar, Code, Users, Zap, Trophy } from 'lucide-react';
import { ShieldCheck, ExternalLink, Eye, X } from 'lucide-react';
import type { Experience } from '../types';
import ScrollReveal from './ScrollReveal';

const ExperienceSection: React.FC = () => {
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);
  const [expandedCert, setExpandedCert] = useState<number | null>(null);

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

  const certificates = [
    {
      title: 'Oracle AI Vector Search Certified Professional',
      organization: 'Oracle',
      date: 'Issued Sep 2025 · Expires Sep 2027',
      color: 'from-purple-500 to-pink-500',
      credentialUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=197B6A97F7CA79D6C58ED85DF5128A907BFD3D9E70330BB935F9A44CEE0463C1',
      imageUrl: '/ORACLEAI.jpg'
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Generative AI Professional',
      organization: 'Oracle',
      date: 'Issued Sep 2025 · Expires Sep 2027',
      color: 'from-blue-500 to-cyan-400',
      credentialUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=A3A29B03928BC576216EB78FE5645BDAC3F3C7751D358025F346ED1C2A40F6C3',
      imageUrl: '/ORACLEV.jpg'
    },
    {
      title: 'AWS Academy Graduate - Generative AI Foundations',
      organization: 'Amazon Web Services',
      date: 'Issued Sep 2025',
      color: 'from-indigo-500 to-violet-500',
      credentialUrl: 'https://www.credly.com/badges/583fd41f-3e1e-443f-9583-2218e41d250b/public_url',
      imageUrl: '/AWSGA.jpg'
    },
    {
      title: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
      organization: 'Amazon Web Services',
      date: 'Issued Mar 2025',
      color: 'from-yellow-400 to-orange-500',
      credentialUrl: 'https://www.credly.com/badges/f0e1f1df-d368-4100-aac6-de0efa2928d3/public_url',
      imageUrl: '/AWSCF.jpg'
    },
    {
      title: 'AWS Academy Graduate - AWS Academy Machine Learning Foundations',
      organization: 'Amazon Web Services',
      date: 'Issued Mar 2025',
      color: 'from-green-400 to-emerald-500',
      credentialUrl: 'https://www.credly.com/badges/17bb68ab-c187-4cb4-b957-7bb5369221b4/public_url',
      imageUrl: '/AWS_Academy_Graduate___AWS_Academy_Machine_Learning_Foundations_Badge20250906-29-14cnhx.jpg'
    },
    {
      title: 'NPTEL Java Programming Certification',
      organization: 'NPTEL',
      date: 'Issued Nov 2024',
      color: 'from-red-400 to-pink-600',
      credentialUrl: 'https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs105/Course/NPTEL24CS105S135250158804275781.pdf',
      imageUrl: '/NPTEL.jpg'
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
        <ScrollReveal direction="fade" delay={100}>
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
                delay={150 + index * 100}
              >
                <div className={`flex flex-col sm:flex-row items-center mb-16 relative group ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${colors.bg} rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-2xl transition-all duration-150 animate-cyber-pulse border-4 border-void-900`}>
                    {getIcon(experience.type)}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full sm:w-5/12 ${index % 2 === 0 ? 'sm:pr-12' : 'sm:pl-12'} mt-6 sm:mt-0`}>
                  <div className={`bg-void-800/50 backdrop-blur-sm border ${colors.border} rounded-2xl p-6 hover:bg-void-800/70 transition-all duration-200 hover:shadow-xl hover:shadow-neon-500/10 group-hover:border-neon-500/60`}>
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
        <ScrollReveal direction="up" delay={300}>
          <div className="mt-20">
            <h3 className="text-4xl font-bold text-center text-white mb-12 font-cyber tracking-widest">
              CERTIF<span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-400 to-electric-400">ICATION</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="relative bg-void-800/40 backdrop-blur-xl border border-void-600 rounded-2xl p-6 shadow-lg shadow-black/30 hover:shadow-2xl hover:shadow-neon-500/20 transition-all duration-200 transform hover:-translate-y-2 hover:scale-105 group overflow-hidden"
                  style={{ animationDelay: `${index * 120}ms` }}
                  onMouseEnter={() => setHoveredCert(index)}
                  onMouseLeave={() => setHoveredCert(null)}
                >
                  {/* Gradient Header Bar */}
                  <div className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${cert.color}`} />

                  {/* Certificate Image Preview Overlay - Only shows on hover */}
                  <div className={`absolute inset-0 bg-void-900/95 backdrop-blur-sm rounded-2xl transition-all duration-300 ${
                    hoveredCert === index ? 'opacity-100 visible' : 'opacity-0 invisible'
                  } flex items-center justify-center z-20`}>
                    <div className="text-center p-4">
                      <div 
                        className="w-64 h-40 bg-void-700/30 rounded-lg border-2 border-neon-500/50 mb-4 flex items-center justify-center overflow-hidden cursor-pointer"
                        onClick={() => setExpandedCert(index)}
                      >
                        <img 
                          src={cert.imageUrl} 
                          alt={`${cert.title} Certificate`}
                          className="w-full h-full object-contain rounded-lg"
                          onError={(e) => {
                            // Show fallback if image fails to load
                            const target = e.currentTarget;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        {/* Fallback content */}
                        <div className="text-center hidden flex-col items-center justify-center">
                          <Eye className="w-8 h-8 text-neon-400 mx-auto mb-2" />
                          <p className="text-neon-400 text-xs font-matrix">Certificate Preview</p>
                          <p className="text-gray-400 text-xs font-matrix mt-1">Loading...</p>
                        </div>
                      </div>
                      <p className="text-white text-sm font-cyber mb-2">{cert.title}</p>
                      <p className="text-gray-400 text-xs font-matrix">{cert.organization}</p>
                      <button 
                        className="mt-3 px-3 py-1 text-xs bg-void-700 text-neon-400 rounded border border-neon-500/30 hover:bg-neon-500/10 transition-colors"
                        onClick={() => setExpandedCert(index)}
                      >
                        Click to expand
                      </button>
                    </div>
                  </div>

                  {/* Icon + Date */}
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className={`p-3 bg-gradient-to-r ${cert.color} rounded-xl shadow-md group-hover:scale-110 transition-transform`}>
                      <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-3 py-1 text-xs rounded-full bg-void-700 text-gray-300 font-matrix">
                      {cert.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-semibold text-lg text-white mb-2 leading-snug group-hover:text-neon-400 transition-colors font-cyber relative z-10">
                    {cert.title}
                  </h4>

                  {/* Organization */}
                  <p className="text-gray-400 text-sm font-matrix mb-4 relative z-10">
                    {cert.organization}
                  </p>

                  {/* Check Credentials Button */}
                  <div className="relative z-10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(cert.credentialUrl, '_blank');
                      }}
                      className={`w-full px-4 py-2 bg-gradient-to-r ${cert.color} text-white text-sm font-matrix rounded-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      VERIFY CREDENTIALS
                    </button>
                  </div>

                  {/* Footer Glow */}
                  <div className={`absolute bottom-0 inset-x-0 h-1 rounded-b-2xl bg-gradient-to-r ${cert.color} opacity-60`} />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Expanded Certificate Modal */}
        {expandedCert !== null && (
          <div className="fixed inset-0 bg-void-900/95 backdrop-blur-xl z-50 flex items-center justify-center p-4" onClick={() => setExpandedCert(null)}>
            <div className="relative max-w-4xl max-h-full bg-void-800 rounded-2xl border border-neon-500/30 overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <button 
                className="absolute top-4 right-4 z-50 p-2 bg-void-700 rounded-full text-neon-400 hover:bg-neon-500/20 transition-colors"
                onClick={() => setExpandedCert(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <div className="p-6 max-h-[80vh] overflow-auto">
                <h3 className="text-2xl font-bold text-white mb-2 font-cyber text-center">
                  {certificates[expandedCert].title}
                </h3>
                <p className="text-gray-400 text-sm font-matrix mb-6 text-center">
                  {certificates[expandedCert].organization}
                </p>
                <div className="bg-void-700/30 rounded-lg border-2 border-neon-500/30 p-2 flex justify-center">
                  <img 
                    src={certificates[expandedCert].imageUrl} 
                    alt={`${certificates[expandedCert].title} Certificate`}
                    className="max-w-full max-h-[70vh] object-contain rounded"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* Fallback content */}
                  <div className="hidden flex-col items-center justify-center w-full h-64 text-center">
                    <Eye className="w-12 h-12 text-neon-400 mx-auto mb-4" />
                    <p className="text-neon-400 text-lg font-matrix">Certificate Image</p>
                    <p className="text-gray-400 text-sm font-matrix mt-2">Failed to load</p>
                  </div>
                </div>
                <div className="mt-6 flex justify-center gap-4">
                  <button
                    onClick={() => window.open(certificates[expandedCert].credentialUrl, '_blank')}
                    className={`px-6 py-2 bg-gradient-to-r ${certificates[expandedCert].color} text-white rounded-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    VERIFY CREDENTIALS
                  </button>
                  <button 
                    className="px-6 py-2 bg-void-700 text-neon-400 rounded-lg border border-neon-500/30 hover:bg-neon-500/10 transition-colors"
                    onClick={() => setExpandedCert(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;