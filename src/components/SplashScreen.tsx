import React, { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [loadingText, setLoadingText] = useState('');
  const [currentStep, setCurrentStep] = useState(0);

  const loadingSteps = [
    'Initializing neural networks...',
    'Loading AI modules...',
    'Establishing quantum connections...',
    'Calibrating holographic display...',
    'System ready. Welcome to the future.'
  ];

  useEffect(() => {
    const stepInterval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        setLoadingText(loadingSteps[currentStep]);
        setCurrentStep(prev => prev + 1);
      }
    }, 500);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    }, 3500);

    return () => {
      clearInterval(stepInterval);
      clearTimeout(timer);
    };
  }, [onComplete, currentStep]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-void-900 via-surface-900 to-void-900 z-50 flex items-center justify-center opacity-0 transition-opacity duration-800 pointer-events-none" />
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-void-900 via-surface-900 to-void-900 z-50 flex items-center justify-center overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-neon-500/30 to-transparent animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              height: '300px',
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-400 rounded-full opacity-40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative text-center">
        {/* Main Logo with Quantum Effects */}
        <div className="relative mb-12">
          {/* Outer Rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 border border-neon-500/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute w-60 h-60 border border-cyber-500/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
            <div className="absolute w-40 h-40 border border-electric-500/40 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
          </div>
          
          {/* Central Logo */}
          <div className="relative z-10">
            <div className="text-8xl md:text-9xl font-bold font-cyber tracking-wider mb-4">
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-neon-400 via-cyber-400 to-electric-400 animate-glow">
                SS
              </span>
            </div>
            
            {/* Holographic Effect */}
            <div className="absolute inset-0 text-8xl md:text-9xl font-bold font-cyber tracking-wider">
              <span className="inline-block text-neon-500/20 animate-pulse">
                SS
              </span>
            </div>
          </div>

          {/* Energy Beams */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-2 h-40 bg-gradient-to-t from-transparent via-neon-500/50 to-transparent animate-pulse" />
            <div className="absolute top-0 left-0 w-40 h-2 bg-gradient-to-r from-transparent via-cyber-500/50 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Loading Terminal */}
        <div className="bg-void-800/80 backdrop-blur-sm border border-neon-500/30 rounded-2xl p-6 max-w-md mx-auto">
          <div className="flex items-center mb-4">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-neon-500 rounded-full animate-pulse" />
            </div>
            <span className="text-neon-400 font-matrix text-sm">boot_sequence.exe</span>
          </div>
          
          <div className="font-matrix text-sm text-left space-y-1">
            {loadingSteps.slice(0, currentStep).map((step, index) => (
              <div key={index} className="text-neon-400 animate-fade-in">
                &gt; {step}
              </div>
            ))}
            {currentStep < loadingSteps.length && (
              <div className="text-neon-400 animate-pulse">
                &gt; {loadingText}<span className="animate-pulse">_</span>
              </div>
            )}
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="w-full bg-void-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-neon-500 to-cyber-500 h-2 rounded-full transition-all duration-500 animate-pulse"
                style={{ width: `${(currentStep / loadingSteps.length) * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-2 font-matrix">
              <span>0%</span>
              <span>{Math.round((currentStep / loadingSteps.length) * 100)}%</span>
              <span>100%</span>
            </div>
          </div>
        </div>

        {/* Quantum Signature */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <Zap className="w-4 h-4 text-electric-400 animate-pulse" />
          <span className="text-electric-400 font-matrix text-xs tracking-wider">
            QUANTUM_SIGNATURE_VERIFIED
          </span>
          <Zap className="w-4 h-4 text-electric-400 animate-pulse" />
        </div>
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
    </div>
  );
};

export default SplashScreen;