import React from 'react';
import { Zap, User, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-void-900 via-surface-900 to-void-800 relative overflow-hidden lg:pl-24">
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
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="fade" delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-cyber">
              SYSTEM <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-400 to-cyber-400 animate-glow">PROFILE</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-neon-500 to-cyber-500 mx-auto mb-8 animate-pulse"></div>
            <p className="text-cyber-300 font-matrix text-lg">
              {'>'} Initializing personal_data.json...
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Personal Info - Takes 3/5 of width */}
          <div className="lg:col-span-3 space-y-8">
            {/* Personal Info Card */}
            <ScrollReveal direction="left" delay={400}>
              <div className="bg-void-800/50 backdrop-blur-sm border border-neon-500/30 rounded-2xl p-8 animate-cyber-pulse h-full">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-gradient-to-r from-neon-500 to-neon-600 rounded-lg mr-4">
                    <User className="w-5 h-5 text-void-900" />
                  </div>
                  <h3 className="text-xl font-bold text-neon-400 font-cyber">PERSONAL_INFO.TXT</h3>
                </div>
                
                <div className="space-y-4">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Hi there! I'm <span className="text-neon-400 font-semibold">Shubam Sarawagi</span>, a passionate 3rd-year B.Tech Computer Science student 
                    specializing in Artificial Intelligence and Machine Learning.
                  </p>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    My journey in AI/ML began with curiosity about how machines can learn and make decisions. 
                    Today, I'm actively working on projects involving deep learning, natural language processing, 
                    and computer vision.
                  </p>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    I'm currently seeking internship opportunities and research collaborations where I can 
                    contribute to meaningful AI projects while learning from industry experts.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            

          </div>

          {/* System Metrics - Takes 2/5 of width */}
          <div className="lg:col-span-2">
            <ScrollReveal direction="right" delay={400}>
              <div className="bg-gradient-to-br from-void-800/50 to-surface-800/50 backdrop-blur-sm border border-neon-500/20 rounded-2xl p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-gradient-to-r from-cyber-500 to-cyber-600 rounded-lg mr-4">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-cyber-400 font-cyber">SYSTEM_METRICS</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-void-700/50 rounded-xl border border-neon-500/10">
                    <div className="text-3xl font-bold text-neon-400 font-matrix mb-2">15+</div>
                    <div className="text-gray-400 text-sm">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 bg-void-700/50 rounded-xl border border-cyber-500/10">
                    <div className="text-3xl font-bold text-cyber-400 font-matrix mb-2">5</div>
                    <div className="text-gray-400 text-sm">Years Learning</div>
                  </div>
                  <div className="text-center p-4 bg-void-700/50 rounded-xl border border-electric-500/10">
                    <div className="text-3xl font-bold text-electric-400 font-matrix mb-2">5+</div>
                    <div className="text-gray-400 text-sm">Technologies</div>
                  </div>
                  <div className="text-center p-4 bg-void-700/50 rounded-xl border border-neon-500/10">
                    <div className="text-3xl font-bold text-neon-400 font-matrix mb-2">∞</div>
                    <div className="text-gray-400 text-sm">Curiosity</div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-neon-500/10">
                  <div className="flex items-center text-cyber-300">
                    <Sparkles className="w-4 h-4 mr-2" />
                    <span className="text-sm font-matrix">System status: Operational & Learning</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;