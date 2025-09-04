import React from 'react';
import { Atom, Rocket, Square, Brain, Users, Zap, Award, ChevronUp } from 'lucide-react';

interface ClubRole {
  title: string;
  period: string;
  description: string;
  promotion?: boolean;
  transition?: boolean;
}

interface Club {
  id: string;
  name: string;
  roles: ClubRole[];
  icon: React.ReactElement;
  color: string;
}

const ClubsSection: React.FC = () => {
  const clubs: Club[] = [
    {
      id: 'qc-001',
      name: 'SRM Quantum Computing Club',
      roles: [
        {
          title: 'AI/ML Lead',
          period: 'Jul 2024 - Present',
          description: 'Assisted in developing quantum algorithms and organizing tech sessions.',
          promotion: true
        },
        {
          title: 'AI/ML Associate',
          period: 'Jul 2024 - Sep 2024',
          description: 'Assisted in developing quantum algorithms and organizing tech sessions.'
        }
      ],
      icon: <Atom className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'liftoff-002',
      name: 'Liftoff',
      roles: [
        {
          title: 'Technical Lead',
          period: 'Mar 2024 - Oct 2024',
          description: 'Led a team of developers in building innovative solutions for campus problems.',
          promotion: true
        },
        {
          title: 'Tech Team Member',
          period: 'Dec 2023 - Mar 2024',
          description: 'Developed applications and participated in hackathons as part of the tech team.'
        }
      ],
      icon: <Rocket className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'msft-003',
      name: 'Microsoft Learn Student Ambassadors',
      roles: [
        {
          title: 'Technical Team Member',
          period: 'Mar 2025 - Present',
          description: 'Organizing workshops and events to promote Microsoft technologies among students.'
        }
      ],
      icon: <Square className="w-6 h-6" />,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'nextgen-004',
      name: 'NextGen-AI',
      roles: [
        {
          title: 'AI/ML Member',
          period: 'Apr 2025 - Present',
          description: 'Researching and developing AI models for real-world applications.'
        },
        {
          title: 'Management Team Member',
          period: 'Oct 2024 - Mar 2025',
          description: 'Managed event planning and member coordination for AI-focused activities.',
          transition: true
        }
      ],
      icon: <Brain className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const getPromotionBadge = (type: 'promotion' | 'transition' = 'promotion') => (
    <span className={`px-2 py-1 text-xs font-matrix rounded-md ${
      type === 'promotion' 
        ? 'bg-gradient-to-r from-matrix-500 to-matrix-600 text-black' 
        : 'bg-gradient-to-r from-cyber-500 to-cyber-600 text-white'
    }`}>
      {type === 'promotion' ? 'PROMOTED' : 'TRANSITIONED'}
    </span>
  );

  return (
    <section id="clubs" className="py-20 bg-gradient-to-br from-surface-900 via-void-800 to-surface-900 relative overflow-hidden lg:pl-24">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-cyber">
            CLUBS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-400 to-electric-400 animate-glow">ACTIVITIES</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-500 via-cyber-500 to-electric-500 mx-auto mb-8 animate-pulse"></div>
          <p className="text-lg text-cyber-300 max-w-2xl mx-auto font-matrix">
            {'>'} Active participation in tech communities and leadership roles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clubs.map((club) => (
            <div 
              key={club.id}
              className="bg-void-800/50 backdrop-blur-sm border border-void-600 rounded-2xl p-6 hover:bg-void-800/70 transition-all duration-500 hover:shadow-xl hover:shadow-neon-500/10 group"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-xl font-bold text-white font-cyber group-hover:text-neon-400 transition-colors">
                  {club.name}
                </h3>
                <div className={`p-3 rounded-xl bg-gradient-to-r ${club.color} shadow-md group-hover:scale-110 transition-transform`}>
                  {club.icon}
                </div>
              </div>

              <div className="space-y-6">
                {club.roles.map((role, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-electric-500/50">
                    <div className="absolute -left-2.5 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-neon-500 to-electric-500 animate-pulse"></div>
                    
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h4 className="text-lg font-semibold text-neon-400 font-cyber">{role.title}</h4>
                      {role.promotion && getPromotionBadge('promotion')}
                      {role.transition && getPromotionBadge('transition')}
                    </div>
                    
                    <p className="text-cyber-300 text-sm font-matrix mb-2">{role.period}</p>
                    <p className="text-gray-300 text-sm">{role.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-void-600/50 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-neon-500 rounded-full mr-2 animate-pulse" />
                  <span className="text-neon-400 text-xs font-matrix">ACTIVE MEMBER</span>
                </div>
                <div className="text-xs text-gray-500 font-matrix">
                  ID: {club.id}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-void-700 to-void-800 border border-electric-500/30 rounded-lg text-electric-400 font-matrix hover:border-electric-500 hover:text-neon-400 transition-all group">
            VIEW ALL ENGAGEMENTS
            <ChevronUp className="w-4 h-4 ml-2 transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClubsSection;