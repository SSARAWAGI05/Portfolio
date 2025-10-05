import React, { useState } from 'react';
import { Github, ExternalLink, Filter, Zap, Eye } from 'lucide-react';
import type { Project } from '../types';
import ScrollReveal from './ScrollReveal';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: '1',
      title: 'Apex Arena',
      description: 'An AI battle royale betting game where you wager virtual credits on pre-trained neural network agents competing to survive in a dynamic wilderness—watch them navigate a grid world managing hunger, thirst, and temperature across changing seasons, and win double your bet if your chosen agent outlasts the competition.',
      techStack: ['Python', 'PyGame', 'PyTorch', 'Deep Q-Networks', 'Reinforcement Learning', 'Multi-Agent Systems'],
      githubUrl: 'https://github.com/SSARAWAGI05/ApexArena',
      category: 'AI Apps',
      imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '2',
      title: 'SpendWise',
      description: 'Tracked over 100 expenses using NLP parsing, achieving 98% accuracy in group splits, enabled UPI settlements through QR-based payments in real-world testing, and integrated facial recognition for secure multi-user verification.',
      techStack: ['Python', 'PyTorch', 'Transformers', 'FastAPI', 'React'],
      githubUrl: 'https://github.com/SSARAWAGI05/SpendWise',
      liveUrl: '#',
      category: 'NLP',
      imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '3',
      title: 'StudyBlitz',
      description: 'Tracked real-time focus and engagement across multiple study sessions using facial and posture cues, summarized over 200 hours of video content with AI while integrating a 24/7 query-resolution chatbot, and gamified learning with 12+ badges, XP milestones, and streak analytics.',
      techStack: ['Python', 'TensorFlow', 'OpenCV', 'CRNN', 'Flask'],
      githubUrl: 'https://github.com/SSARAWAGI05/YouvaPrashikshan',
      liveUrl: '#',
      category: 'AI Apps',
      imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '4',
      title: 'FaceCheck-IN',
      description: 'An AI-powered facial recognition system that automates attendance by detecting and recognizing faces in live video, instantly marking attendance, and flagging unrecognized individuals for review.',
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'MongoDB', 'Docker'],
      githubUrl: 'https://github.com/SSARAWAGI05/FaceCkeckIn',
      category: 'AI Apps',
      imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const filteredProjects = projects;

  const getFilterColor = (color: string) => {
    const colors = {
      neon: 'from-neon-500 to-neon-600 shadow-neon-500/30',
      cyber: 'from-cyber-500 to-cyber-600 shadow-cyber-500/30',
      electric: 'from-electric-500 to-electric-600 shadow-electric-500/30',
      matrix: 'from-matrix-500 to-matrix-600 shadow-matrix-500/30'
    };
    return colors[color as keyof typeof colors] || colors.neon;
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-void-900 via-surface-800 to-void-900 relative overflow-hidden lg:pl-24">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-matrix-pattern opacity-20" />
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-neon-500/30 to-transparent animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="fade" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-cyber">
              PROJECT <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-400 to-electric-400 animate-glow">SHOWCASE</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-neon-500 via-cyber-500 to-electric-500 mx-auto mb-8 animate-pulse"></div>
            <p className="text-lg text-cyber-300 max-w-2xl mx-auto font-matrix">
              {'>'} Innovative AI/ML solutions and cutting-edge applications
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              direction="up"
              delay={200 + index * 50}
            >
              <div
                className="group relative bg-void-800/30 backdrop-blur-sm border border-neon-500/20 rounded-2xl overflow-hidden hover:border-neon-500/50 transition-all duration-150 hover:scale-105 hover:shadow-2xl hover:shadow-neon-500/20"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
              {/* Project Image with Overlay */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
                />
                
                {/* Holographic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-void-900/90 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-neon-500/10 via-transparent to-cyber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-neon-500 to-cyber-500 text-white text-xs rounded-full font-matrix uppercase tracking-wider shadow-lg">
                    {project.category}
                  </span>
                </div>

                {/* Hover Actions */}
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 animate-fade-in">
                    <button className="p-3 bg-neon-500/80 backdrop-blur-sm rounded-full hover:bg-neon-500 transition-colors">
                      <Eye className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-3 bg-cyber-500/80 backdrop-blur-sm rounded-full hover:bg-cyber-500 transition-colors">
                      <Github className="w-5 h-5 text-white" />
                    </button>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-400 transition-colors font-cyber">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-matrix">
                  {project.description}
                </p>

                {/* Tech Stack with Glow Effects */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-void-700/50 border border-cyber-500/30 text-cyber-400 text-xs rounded-lg font-matrix hover:border-cyber-500/60 hover:bg-cyber-500/10 transition-all duration-100"
                      style={{ animationDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-void-700/50 border border-neon-500/30 text-neon-400 rounded-xl hover:bg-neon-500/10 hover:border-neon-500/60 transition-all duration-100 text-sm font-matrix group"
                  >
                    <Github className="w-4 h-4 group-hover:animate-spin" />
                    SOURCE
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-electric-500 to-electric-600 text-white rounded-xl hover:shadow-lg hover:shadow-electric-500/30 transition-all duration-100 text-sm font-matrix group"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:animate-pulse" />
                      DEPLOY
                    </a>
                  )}
                </div>
              </div>

              {/* Scan Line Effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* More Projects Terminal */}
        <ScrollReveal direction="up" delay={1200}>
          <div className="flex justify-center mt-16">
            <div className="w-full max-w-md bg-void-800/50 backdrop-blur-sm border border-neon-500/30 rounded-2xl p-6 hover:border-neon-500/60 transition-all duration-100 group">
            <div className="flex items-center justify-center mb-4">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-neon-500 rounded-full" />
              </div>
              <span className="text-neon-400 font-matrix text-sm">github_explorer.exe</span>
            </div>
            
            <a
              href="https://github.com/SSARAWAGI05"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-void-700 to-surface-700 text-white rounded-xl hover:from-surface-700 hover:to-void-700 transition-all duration-100 font-matrix group-hover:shadow-lg group-hover:shadow-neon-500/20"
            >
              <Github className="w-5 h-5 group-hover:animate-spin" />
              <span> EXPLORE_ALL_REPOSITORIES()</span>
              <Zap className="w-4 h-4 text-neon-400 group-hover:animate-pulse" />
            </a>
          </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;


