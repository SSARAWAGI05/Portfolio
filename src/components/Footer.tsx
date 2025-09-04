import React from 'react';
import { Heart, Zap, Terminal } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-void-900 border-t border-neon-500/20 py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cyber-grid opacity-5" />
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-10 bg-gradient-to-b from-transparent via-neon-500/20 to-transparent animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Terminal-style Footer */}
          <div className="bg-void-800/50 backdrop-blur-sm border border-neon-500/30 rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-neon-500 rounded-full animate-pulse" />
              </div>
              <Terminal className="w-5 h-5 text-neon-400 mr-2" />
              <span className="text-neon-400 font-matrix text-sm">system_info.txt</span>
            </div>
            
            <div className="font-matrix text-sm space-y-2">
              <p className="text-gray-400">
                <span className="text-neon-400">$</span> cat copyright.txt
              </p>
              <p className="text-white flex items-center justify-center gap-2 pl-4">
                © 2025 Shubam Sarawagi. 
              </p>
              <p className="text-gray-400">
                <span className="text-cyber-400">$</span> cat tech_stack.txt
              </p>
              <p className="text-cyber-300 text-xs pl-4">
                Powered by React + TypeScript + Tailwind CSS + Neural Networks
              </p>
              <p className="text-gray-400">
                <span className="text-electric-400">$</span> uptime
              </p>
              <p className="text-electric-300 text-xs pl-4 flex items-center justify-center gap-2">
                <Zap className="w-3 h-3 animate-pulse" />
                System operational since 2022
              </p>
              <p className="text-neon-400 animate-pulse">$ _</p>
            </div>
          </div>

          {/* Version Info */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-xs font-matrix">
              VERSION 2.5.0 | BUILD 20250101 | STATUS: ACTIVE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;