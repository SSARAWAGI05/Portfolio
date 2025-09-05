import React from 'react';
import { User, Sparkles, GraduationCap, Target } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-void-900 via-surface-900 to-void-800 relative overflow-hidden lg:pl-24"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-matrix-pattern opacity-30" />
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="fade" delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-cyber">
              SYSTEM{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-400 to-cyber-400 animate-glow">
                PROFILE
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-neon-500 to-cyber-500 mx-auto mb-8 animate-pulse"></div>
            <p className="text-cyber-300 font-matrix text-lg">
              {'>'} Initializing personal_data.json...
            </p>
          </div>
        </ScrollReveal>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Personal Info - Left Side */}
          <ScrollReveal direction="left" delay={400}>
            <div className="bg-void-800/50 backdrop-blur-sm border border-neon-500/30 rounded-2xl p-8 animate-cyber-pulse h-full">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-gradient-to-r from-neon-500 to-neon-600 rounded-lg mr-4">
                  <User className="w-5 h-5 text-void-900" />
                </div>
                <h3 className="text-xl font-bold text-neon-400 font-cyber">
                  PERSONAL_INFO.TXT
                </h3>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Hi there! I'm{' '}
                  <span className="text-neon-400 font-semibold">
                    Shubam Sarawagi
                  </span>
                  , a passionate 3rd-year B.Tech Computer Science student
                  specializing in Artificial Intelligence and Machine
                  Learning.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  My journey in AI/ML began with curiosity about how machines
                  can learn and make decisions. Today, I'm actively working on
                  projects involving deep learning, natural language
                  processing, and computer vision.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm currently seeking internship opportunities and research
                  collaborations where I can contribute to meaningful AI
                  projects while learning from industry experts.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Current Focus - Right Side */}
          <ScrollReveal direction="right" delay={500}>
            <div className="bg-void-800/50 backdrop-blur-sm border border-cyber-500/30 rounded-2xl p-8 animate-cyber-pulse h-full">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-gradient-to-r from-cyber-500 to-electric-600 rounded-lg mr-4">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-cyber-400 font-cyber">
                  CURRENT_FOCUS.MD
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-electric-400 mb-3">
                    Active Learning Areas
                  </h4>
                  <div className="space-y-3">
                    {[
                      { name: 'Deep Learning', progress: 85 },
                      { name: 'Natural Language Processing', progress: 75 },
                      { name: 'Computer Vision', progress: 70 },
                      { name: 'Generative AI', progress: 80 }
                    ].map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">{skill.name}</span>
                          <span className="text-neon-400 font-matrix">{skill.progress}%</span>
                        </div>
                        <div className="h-2 bg-void-900 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-neon-400 to-cyber-500 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.progress}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-void-700/40 rounded-xl p-4 border border-neon-500/20">
                  <p className="text-sm text-cyber-300 font-matrix mb-2">
                    STATUS: <span className="text-neon-400">ACTIVELY_SEEKING</span>
                  </p>
                  <p className="text-gray-300 text-sm">
                    Looking for internships in AI/ML, research opportunities, and collaborative projects.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Education Section - Full Width */}
        <ScrollReveal direction="up" delay={600}>
          <div className="bg-void-800/50 backdrop-blur-sm border border-cyber-500/30 rounded-2xl p-8 animate-cyber-pulse">
            <div className="flex items-center mb-8">
              <div className="p-2 bg-gradient-to-r from-electric-500 to-cyber-600 rounded-lg mr-4">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-electric-400 font-cyber">
                EDUCATION_LOG.SYS
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Current Education */}
              <div className="bg-void-700/40 rounded-xl p-6 border border-neon-500/20">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-neon-400 mb-1">
                    SRM Institute of Science & Technology
                  </h4>
                  <p className="text-gray-300 text-sm mb-2">Chennai, Tamil Nadu</p>
                  <p className="text-electric-400 font-semibold">
                    B.Tech in Computer Science (AI & ML)
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-cyber-300 font-matrix">
                      Status: <span className="text-neon-400">ACTIVE</span>
                    </span>
                    <span className="text-sm text-neon-400 font-bold font-matrix">
                      Year: 3rd
                    </span>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">Current GPA</span>
                      <span className="text-neon-400 font-matrix font-bold">9.90 / 10</span>
                    </div>
                    <div className="h-2 w-full bg-void-900 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-neon-400 to-electric-500 w-[99%] animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* School Education */}
              <div className="bg-void-700/40 rounded-xl p-6 border border-cyber-500/20">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-cyber-400 mb-1">
                    La Martiniere For Boys
                  </h4>
                  <p className="text-gray-300 text-sm mb-2">Kolkata, West Bengal</p>
                  <p className="text-gray-500 text-xs font-matrix">
                    Status: COMPLETED
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Class XII */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">CISCE (Class XII)</span>
                      <span className="text-electric-400 font-matrix font-semibold">88%</span>
                    </div>
                    <div className="h-1.5 w-full bg-void-900 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-electric-400 to-cyber-400 w-[88%]"></div>
                    </div>
                  </div>
                  
                  {/* Class X */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">ICSE (Class X)</span>
                      <span className="text-electric-400 font-matrix font-semibold">95%</span>
                    </div>
                    <div className="h-1.5 w-full bg-void-900 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-electric-400 to-cyber-400 w-[95%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;