

import React, { useState, useEffect } from "react";
import Joyride, { Step } from "react-joyride";
import { ThemeProvider } from "./context/ThemeContext";
import SmoothScroll from "./components/SmoothScroll";
import SplashScreen from "./components/SplashScreen";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ClubsSection from "./components/ClubsSection";
import AchievementsSection from "./components/AchievementsSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [runTour, setRunTour] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  // Enhanced steps with mobile-friendly positioning
  const steps: Step[] = [
    {
      target: "#home",
      content: "👋 Welcome to my portfolio! This is where you can learn about me and my work.",
      placement: "center",
      disableBeacon: isMobile, // Disable beacon on mobile
    },
    {
      target: "#about",
      content: "📖 Here you'll find my background, education, and what drives me.",
      placement: isMobile ? "bottom" : "top", // Better mobile positioning
      disableBeacon: isMobile,
    },
    {
      target: "#skills",
      content: "💡 These are the technologies and skills I specialize in.",
      placement: isMobile ? "bottom" : "top",
      disableBeacon: isMobile,
    },
    {
      target: "#projects",
      content: "🚀 Check out some of my featured projects and what I've built.",
      placement: isMobile ? "bottom" : "top",
      disableBeacon: isMobile,
    },
    {
      target: "#experience",
      content: "💼 My professional journey and work experience.",
      placement: isMobile ? "bottom" : "top",
      disableBeacon: isMobile,
    },
    {
      target: "#clubs",
      content: "🤝 Clubs and communities I've been involved with.",
      placement: isMobile ? "bottom" : "top",
      disableBeacon: isMobile,
    },
    {
      target: "#achievements",
      content: "My accomplishments and recognitions. 🏆",
      placement: isMobile ? "bottom" : "top",
      disableBeacon: isMobile,
    },
    {
      target: "#contact",
      content: "📩 Ready to connect? Get in touch with me here!",
      placement: isMobile ? "bottom" : "top",
      disableBeacon: isMobile,
    },
  ];

  return (
    <ThemeProvider>
      <SmoothScroll>
        <div className="relative">
          {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
          {!showSplash && (
            <>
              {/* Enhanced Joyride with mobile optimizations */}
              <Joyride
                steps={steps}
                run={runTour}
                continuous
                showProgress
                showSkipButton
                scrollToFirstStep
                disableOverlayClose={!isMobile} // Allow overlay close on mobile
                spotlightClicks
                scrollDuration={isMobile ? 0 : 300} // Faster/no scroll on mobile
                scrollOffset={isMobile ? 100 : 20} // Better mobile offset
                disableScrollParentFix={isMobile} // Fix mobile scroll issues
                floaterProps={{
                  disableAnimation: isMobile, // Disable animations on mobile
                  hideArrow: isMobile, // Hide arrow on mobile for cleaner look
                }}
                styles={{
                  options: {
                    zIndex: 99999,
                    primaryColor: "#00ffcc",
                    backgroundColor: "#0f0c29",
                    textColor: "#ffffff",
                    overlayColor: "rgba(0, 0, 0, 0.7)",
                  },
                  tooltip: {
                    fontSize: isMobile ? "14px" : "16px", // Smaller font on mobile
                    fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                    maxWidth: isMobile ? "280px" : "400px", // Limit width on mobile
                    padding: isMobile ? "12px" : "16px",
                  },
                  tooltipContainer: {
                    textAlign: "left",
                  },
                  buttonNext: {
                    backgroundColor: "#00ffcc",
                    color: "#0f0c29",
                    fontWeight: "bold",
                    border: "none",
                    borderRadius: "4px",
                    padding: isMobile ? "10px 14px" : "8px 16px", // Larger touch targets
                  },
                  buttonBack: {
                    color: "#00ffcc",
                    marginRight: "10px",
                    padding: isMobile ? "10px 14px" : "8px 16px",
                  },
                  buttonSkip: {
                    color: "#ff6b00",
                    padding: isMobile ? "10px 14px" : "8px 16px",
                  },
                  spotlight: {
                    borderRadius: "8px",
                  },
                  // Mobile-specific overlay adjustments
                  overlay: {
                    mixBlendMode: isMobile ? "normal" : "multiply",
                  },
                }}
                callback={(data) => {
                  const { status, action, index, type } = data;
                  
                  // Handle tour completion
                  if (status === "finished" || status === "skipped") {
                    setRunTour(false);
                  }
                  
                  // Add small delay for mobile step changes to reduce glitchiness
                  if (isMobile && action === "next" && type === "step:after") {
                    setTimeout(() => {
                      // Small delay to let mobile browser settle
                    }, 100);
                  }
                }}
              />

              {/* Enhanced global CSS with mobile-specific fixes */}
              <style>{`
                /* Force Joyride to be above everything */
                .__floater__open {
                  z-index: 99999 !important;
                }
                
                [data-tour="true"] {
                  z-index: 99999 !important;
                }
                
                /* Joyride specific overrides */
                .react-joyride__tooltip {
                  z-index: 99999 !important;
                  transform: translate3d(0, 0, 0) !important; /* Force GPU acceleration */
                }
                
                .react-joyride__overlay {
                  z-index: 99998 !important;
                  transform: translate3d(0, 0, 0) !important;
                }
                
                .react-joyride__spotlight {
                  z-index: 99997 !important;
                  transform: translate3d(0, 0, 0) !important;
                }
                
                .react-joyride__beacon {
                  z-index: 99999 !important;
                }

                /* Mobile-specific fixes */
                @media (max-width: 768px) {
                  .react-joyride__tooltip {
                    position: fixed !important;
                    will-change: transform !important;
                    backface-visibility: hidden !important;
                    -webkit-font-smoothing: antialiased !important;
                    -webkit-transform: translate3d(0, 0, 0) !important;
                    transform: translate3d(0, 0, 0) !important;
                  }
                  
                  .react-joyride__overlay {
                    position: fixed !important;
                    will-change: auto !important;
                  }
                  
                  .react-joyride__spotlight {
                    will-change: transform !important;
                    backface-visibility: hidden !important;
                  }
                  
                  /* Prevent scrolling issues during tour */
                  body.react-joyride__body--fixed {
                    overflow: hidden !important;
                    position: fixed !important;
                    width: 100% !important;
                  }
                }

                /* Smooth transitions */
                .react-joyride__tooltip,
                .react-joyride__overlay,
                .react-joyride__spotlight {
                  transition: all 0.2s ease-out !important;
                }
                
                /* Mobile touch improvements */
                @media (max-width: 768px) {
                  .react-joyride__tooltip button {
                    min-height: 44px !important; /* iOS recommended touch target */
                    min-width: 44px !important;
                  }
                }
              `}</style>

              <Navigation />
              <main className="transition-opacity duration-500 ease-in">
                <Hero onStartTour={() => setRunTour(true)} />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <ClubsSection />
                <AchievementsSection />
                <Contact />
              </main>
              <Footer />
            </>
          )}
        </div>
      </SmoothScroll>
    </ThemeProvider>
  );
}

export default App;