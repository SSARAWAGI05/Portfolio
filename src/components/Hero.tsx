import React, { useState } from "react";
import { Download, Github, Mail, ArrowDown, Sparkles, Code, Eye, Home, User, Briefcase, MessageSquare } from "lucide-react";

const Hero: React.FC<{ onStartTour?: () => void }> = ({ onStartTour }) => {
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle tour button click - start immediately
  const handleTourClick = () => {
    console.log("Tour button clicked - starting tour immediately!"); // Debug log
    if (onStartTour) {
      onStartTour();
    } else {
      console.error("onStartTour function not provided");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center py-12 pt-24">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-void-900 via-surface-900 to-void-900">
          {/* Matrix Rain */}
          <div className="absolute inset-0 opacity-15">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-px bg-gradient-to-b from-transparent via-neon-500 to-transparent animate-matrix-rain"
                style={{
                  left: `${15 + i * 12}%`,
                  height: "150px",
                  animationDelay: `${i * 2.5}s`,
                  animationDuration: "20s",
                }}
              />
            ))}
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-neon-400 rounded-full opacity-30 animate-float"
                style={{
                  left: `${10 + (i * 8)}%`,
                  top: `${20 + (i * 6)}%`,
                  animationDelay: `${i * 0.8}s`,
                  animationDuration: "6s",
                }}
              />
            ))}
          </div>

          {/* Grid + Holographic Overlay */}
          <div className="absolute inset-0 bg-cyber-grid opacity-8" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-500/3 to-transparent animate-hologram" />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8">
          {/* Balanced Two Column Layout */}
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 xl:gap-16 2xl:gap-20 min-h-[calc(100vh-8rem)] items-center">
            
            {/* Left Column - Profile & Identity (Wider) */}
            <div className="flex flex-col justify-center space-y-8 lg:space-y-10">
              {/* Profile Section */}
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                {/* Profile Image - Now Rectangular */}
                <div className="relative flex-shrink-0">

                  <div className="w-64 h-80 lg:w-72 lg:h-96 xl:w-80 xl:h-[28rem] relative">
                    {/* Glowing Border Effects */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-neon-500 via-cyber-500 to-electric-500 animate-pulse-slow opacity-60 blur-lg" />
                    <div className="absolute inset-2 rounded-3xl border-2 border-neon-500/40 animate-spin-slow" />
                    <div className="absolute inset-1 rounded-3xl border border-cyber-500/30" />

                    {/* Profile Image Container */}
                    <div className="absolute inset-4 rounded-2xl bg-void-900 border border-neon-500/50 flex items-center justify-center overflow-hidden shadow-xl shadow-neon-500/30">
                      {imageError ? (
                        <div className="w-full h-full flex items-center justify-center bg-cyber-900 text-neon-400 text-4xl font-bold rounded-2xl">
                          SS
                        </div>
                      ) : (
                        <img
                          src="/IMG_3247.JPG"
                          alt="Shubam Sarawagi - Machine Learning Engineer"
                          className="w-full h-full object-cover rounded-2xl"
                          onError={() => setImageError(true)}
                        />
                      )}
                    </div>

                    {/* Status Indicator */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-neon-500 rounded-full flex items-center justify-center animate-ping">
                      <Sparkles className="w-5 h-5 text-void-900" />
                    </div>

                    {/* Additional Tech Elements */}
                    <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-cyber-500/80 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <Code className="w-4 h-4 text-void-900" />
                    </div>
                    <div className="absolute top-1/2 -right-4 w-6 h-16 bg-gradient-to-b from-electric-500/60 to-transparent rounded-full animate-pulse" />
                  </div>
                </div>

                {/* Name & Identity Info */}
                <div className="flex-1 text-center lg:text-left space-y-6">
                  {/* Name & Title */}
                  <div className="space-y-4 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
                      <span className="block text-white font-cyber tracking-wider mb-2">
                        SHUBAM
                      </span>
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-400 via-cyber-400 to-electric-400 animate-glow font-cyber tracking-widest text-3xl sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                        SARAWAGI
                      </span>
                    </h1>

                    {/* Animated Subtitle */}
                    <div className="space-y-3">
                      <p className="text-xl lg:text-2xl xl:text-3xl text-neon-400 font-matrix typing-text">
                         ENGINEER.initialize()
                      </p>
                      <p className="text-base lg:text-lg xl:text-xl text-cyber-300 font-light max-w-2xl lg:max-w-none">
                        Building End to End Solutions for Tomorrow
                      </p>
                    </div>
                  </div>

                  {/* Status Card & Social Links */}
                  <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-6 lg:gap-4 xl:gap-6">
                    {/* Status Card */}
                    <div className="w-full max-w-sm lg:max-w-none">
                      <div className="bg-void-800/40 backdrop-blur-sm border border-neon-500/30 rounded-lg p-4 lg:p-5 shadow-lg shadow-neon-500/10">
                        <div className="space-y-2.5 text-sm lg:text-base">
                          <div className="flex items-center justify-between">
                            <span className="text-neon-400 font-matrix">STATUS:</span>
                            <span className="text-cyber-400 animate-pulse">
                              ● AVAILABLE
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-neon-400 font-matrix">FOCUS:</span>
                            <span className="text-electric-400">
                              B.Tech CSE (AIML)
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-neon-400 font-matrix">YEAR:</span>
                            <span className="text-electric-400">
                              3rd Year
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-4 lg:space-x-5">
                      <a
                        href="https://github.com/SSARAWAGI05"
                        className="icon-btn border-neon-500 hover:shadow-neon-500/40 group w-14 h-14 lg:w-16 lg:h-16"
                        aria-label="Visit GitHub profile"
                      >
                        <Github className="w-7 h-7 lg:w-8 lg:h-8 text-neon-400 group-hover:scale-110 transition-all duration-300" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/shubam-sarawagi-6434251b6/"
                        className="icon-btn border-cyber-500 hover:shadow-cyber-500/40 group w-14 h-14 lg:w-16 lg:h-16"
                        aria-label="Visit LinkedIn profile"
                      >
                        <svg
                          className="w-7 h-7 lg:w-8 lg:h-8 text-cyber-400 group-hover:scale-110 transition-all duration-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Actions & Stats (Narrower) */}
            <div className="flex flex-col justify-center space-y-8 lg:space-y-10">
              {/* Action Buttons Section */}
              <div className="space-y-6">
                <h2 className="text-xl lg:text-2xl font-matrix text-cyber-400 text-center lg:text-left">
                  &gt; EXECUTE_COMMANDS_
                </h2>
                
                {/* Primary Action */}
                <button
                  onClick={() => scrollToSection("projects")}
                  className="cyber-button btn-primary w-full group h-16 lg:h-18"
                  aria-label="Explore projects"
                >
                  <div className="button-content">
                    <Code className="button-icon w-5 h-5 lg:w-6 lg:h-6" />
                    <span className="button-text text-sm lg:text-base" data-text="EXPLORE_PROJECTS()">EXPLORE_PROJECTS()</span>
                    <div className="status-indicator primary-indicator"></div>
                  </div>
                  <div className="scan-line"></div>
                </button>

                {/* Secondary Actions Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="https://www.dropbox.com/scl/fi/y6wt6nmqhto1ob096fshs/ShubamSarawagiCV_7056.pdf?rlkey=1pod73nmm4mrsvtxupa8kzj0f&dl=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-button btn-secondary group h-14 lg:h-16"
                    aria-label="Download resume"
                  >
                    <div className="button-content">
                      <Download className="button-icon w-4 h-4 lg:w-5 lg:h-5" />
                      <span className="button-text text-xs lg:text-sm" data-text="RESUME.pdf">RESUME.pdf</span>
                      <div className="status-indicator secondary-indicator"></div>
                    </div>
                    <div className="scan-line"></div>
                  </a>

                  <button
                    onClick={() => scrollToSection("contact")}
                    className="cyber-button btn-tertiary group h-14 lg:h-16"
                    aria-label="Initiate contact"
                  >
                    <div className="button-content">
                      <Mail className="button-icon w-4 h-4 lg:w-5 lg:h-5" />
                      <span className="button-text text-xs lg:text-sm" data-text="CONTACT()">CONTACT()</span>
                      <div className="status-indicator tertiary-indicator"></div>
                    </div>
                    <div className="scan-line"></div>
                  </button>
                </div>

                {/* Fixed Tour Button */}
                <button
                  id="tour-button"
                  onClick={handleTourClick}
                  className="cyber-button btn-accent group h-14 lg:h-16 w-full"
                  aria-label="Start guided tour"
                  type="button"
                >
                  <div className="button-content">
                    <Eye className="button-icon w-4 h-4 lg:w-5 lg:h-5" />
                    <span
                      className="button-text text-xs lg:text-sm"
                      data-text="START_TOUR()"
                    >
                      START_TOUR()
                    </span>
                    <div className="status-indicator accent-indicator"></div>
                  </div>
                  <div className="scan-line"></div>
                </button>
              </div>

              {/* Quick Stats */}
              <div className="space-y-6">
                <h3 className="text-xl lg:text-2xl font-matrix text-cyber-400 text-center lg:text-left">
                  &gt; SYSTEM_STATS_
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-void-800/30 backdrop-blur-sm border border-neon-500/20 rounded-lg p-4 lg:p-5 text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-neon-400 mb-1">15+</div>
                    <div className="text-xs lg:text-sm text-cyber-300">Projects</div>
                  </div>
                  <div className="bg-void-800/30 backdrop-blur-sm border border-cyber-500/20 rounded-lg p-4 lg:p-5 text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-cyber-400 mb-1">3</div>
                    <div className="text-xs lg:text-sm text-cyber-300">Years</div>
                  </div>
                  <div className="bg-void-800/30 backdrop-blur-sm border border-electric-500/20 rounded-lg p-4 lg:p-5 text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-electric-400 mb-1">AI/ML</div>
                    <div className="text-xs lg:text-sm text-cyber-300">Focus</div>
                  </div>
                </div>
              </div>

              {/* Scroll Indicator */}
              <div className="flex justify-center pt-4">
                <div className="animate-bounce">
                  <div className="flex flex-col items-center">
                    <span className="text-neon-400 text-xs font-matrix mb-2 animate-blink">
                      SCROLL_DOWN_
                    </span>
                    <button 
                      onClick={() => scrollToSection("about")}
                      aria-label="Scroll down"
                      className="focus:outline-none hover:scale-110 transition-transform"
                    >
                      <ArrowDown className="w-6 h-6 text-neon-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Optimized Ambient Lights */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyber-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }} />

        {/* Enhanced Cyber Button Styles */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');
          
          .cyber-button {
            position: relative;
            padding: 0;
            background: transparent;
            border: none;
            cursor: pointer;
            font-family: 'JetBrains Mono', 'Courier New', monospace;
            text-decoration: none;
            display: block;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          }
          
          .button-content {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            height: 100%;
            padding: 0 16px;
            background: rgba(15, 12, 41, 0.85);
            border: 2px solid;
            backdrop-filter: blur(12px);
            clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%, 10px 50%);
            transition: all 0.3s ease;
            z-index: 2;
          }
          
          .button-icon {
            stroke-width: 2.5;
            transition: all 0.3s ease;
            z-index: 3;
            flex-shrink: 0;
          }
          
          .button-text {
            font-weight: 600;
            letter-spacing: 0.8px;
            text-transform: uppercase;
            position: relative;
            z-index: 3;
            transition: all 0.3s ease;
            white-space: nowrap;
          }
          
          .scan-line {
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
            transition: left 0.6s ease;
            z-index: 1;
          }
          
          .cyber-button:hover .scan-line {
            left: 100%;
          }
          
          .status-indicator {
            position: absolute;
            top: -3px;
            right: 6px;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            z-index: 4;
            animation: pulse-dot 2s infinite;
          }
          
          /* Button Variants */
          .btn-primary {
            color: #00ff88;
          }
          
          .btn-primary .button-content {
            border-color: #00ff88;
            box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
          }
          
          .btn-primary:hover .button-content {
            background: rgba(0, 255, 136, 0.1);
            box-shadow: 0 0 30px rgba(0, 255, 136, 0.5);
            transform: translateY(-2px);
          }
          
          .btn-primary:hover .button-text {
            text-shadow: 0 0 8px #00ff88;
          }
          
          .primary-indicator {
            background: #00ff88;
            box-shadow: 0 0 8px #00ff88;
          }
          
          .btn-secondary {
            color: #00d4ff;
          }
          
          .btn-secondary .button-content {
            border-color: #00d4ff;
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
          }
          
          .btn-secondary:hover .button-content {
            background: rgba(0, 212, 255, 0.1);
            box-shadow: 0 0 30px rgba(0, 212, 255, 0.5);
            transform: translateY(-2px);
          }
          
          .btn-secondary:hover .button-text {
            text-shadow: 0 0 8px #00d4ff;
          }
          
          .secondary-indicator {
            background: #00d4ff;
            box-shadow: 0 0 8px #00d4ff;
          }
          
          .btn-tertiary {
            color: #ff6b00;
          }
          
          .btn-tertiary .button-content {
            border-color: #ff6b00;
            box-shadow: 0 0 20px rgba(255, 107, 0, 0.3);
          }
          
          .btn-tertiary:hover .button-content {
            background: rgba(255, 107, 0, 0.1);
            box-shadow: 0 0 30px rgba(255, 107, 0, 0.5);
            transform: translateY(-2px);
          }
          
          .btn-tertiary:hover .button-text {
            text-shadow: 0 0 8px #ff6b00;
          }
          
          .tertiary-indicator {
            background: #ff6b00;
            box-shadow: 0 0 8px #ff6b00;
          }
          
          .btn-accent {
            color: #ff0080;
          }
          
          .btn-accent .button-content {
            border-color: #ff0080;
            box-shadow: 0 0 20px rgba(255, 0, 128, 0.3);
          }
          
          .btn-accent:hover .button-content {
            background: rgba(255, 0, 128, 0.1);
            box-shadow: 0 0 30px rgba(255, 0, 128, 0.5);
            transform: translateY(-2px);
          }
          
          .btn-accent:hover .button-text {
            text-shadow: 0 0 8px #ff0080;
          }
          
          .accent-indicator {
            background: #ff0080;
            box-shadow: 0 0 8px #ff0080;
          }
          
          /* Glitch Effect */
          .cyber-button:hover .button-text::before,
          .cyber-button:hover .button-text::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.7;
          }
          
          .cyber-button:hover .button-text::before {
            animation: glitch-1 0.3s ease-in-out;
            color: #ff0080;
            z-index: -1;
          }
          
          .cyber-button:hover .button-text::after {
            animation: glitch-2 0.3s ease-in-out;
            color: #00d4ff;
            z-index: -2;
          }
          
          /* Animations */
          @keyframes pulse-dot {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(1.3); }
          }
          
          @keyframes glitch-1 {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
          }
          
          @keyframes glitch-2 {
            0% { transform: translate(0); }
            20% { transform: translate(2px, -2px); }
            40% { transform: translate(2px, 2px); }
            60% { transform: translate(-2px, -2px); }
            80% { transform: translate(-2px, 2px); }
            100% { transform: translate(0); }
          }
          
          /* Icon Button Styles */
          .icon-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid;
            border-radius: 50%;
            background: rgba(15, 12, 41, 0.8);
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
          }
          
          .icon-btn:hover {
            transform: translateY(-2px);
            backdrop-filter: blur(15px);
          }
          
          /* Large screen optimizations */
          @media (min-width: 1024px) {
            .cyber-button .button-content {
              padding: 0 20px;
              gap: 10px;
            }
            
            .status-indicator {
              width: 8px;
              height: 8px;
              top: -4px;
              right: 8px;
            }
          }
          
          /* Active/Focus States */
          .cyber-button:active .button-content {
            transform: translateY(1px);
          }
          
          .cyber-button:focus {
            outline: none;
          }
          
          .cyber-button:focus .button-content {
            box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
          }
        `}</style>
      </section>
    </>
  );
};

export default Hero;