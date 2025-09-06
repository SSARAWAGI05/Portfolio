import React, { useState } from "react";
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

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  // 🔹 Define tour steps with better content
  const steps: Step[] = [
    {
      target: "#home",
      content: "👋 Welcome to my portfolio! This is where you can learn about me and my work.",
      placement: "center",
    },
    {
      target: "#about",
      content: "📖 Here you'll find my background, education, and what drives me.",
      placement: "top",
    },
    {
      target: "#skills",
      content: "💡 These are the technologies and skills I specialize in.",
      placement: "top",
    },
    {
      target: "#projects",
      content: "🚀 Check out some of my featured projects and what I've built.",
      placement: "top",
    },
    {
      target: "#experience",
      content: "💼 My professional journey and work experience.",
      placement: "top",
    },
    {
      target: "#clubs",
      content: "🤝 Clubs and communities I've been involved with.",
      placement: "top",
    },
    {
      target: "#achievements",
      content: "My  accomplishments and recognitions. 🏆",
      placement: "top",
    },
    {
      target: "#contact",
      content: "📩 Ready to connect? Get in touch with me here!",
      placement: "top",
    },
  ];

  return (
    <ThemeProvider>
      <SmoothScroll>
        <div className="relative">
          {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
          {!showSplash && (
            <>
              {/* 🔹 Enhanced Joyride with proper z-index and styling */}
              <Joyride
                steps={steps}
                run={runTour}
                continuous
                showProgress
                showSkipButton
                scrollToFirstStep
                disableOverlayClose
                spotlightClicks
                styles={{
                  options: {
                    zIndex: 99999, // ✅ Extremely high z-index
                    primaryColor: "#00ffcc",
                    backgroundColor: "#0f0c29",
                    textColor: "#ffffff",
                    overlayColor: "rgba(0, 0, 0, 0.7)",
                  },
                  tooltip: {
                    fontSize: "16px",
                    fontFamily: "'JetBrains Mono', 'Courier New', monospace",
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
                    padding: "8px 16px",
                  },
                  buttonBack: {
                    color: "#00ffcc",
                    marginRight: "10px",
                  },
                  buttonSkip: {
                    color: "#ff6b00",
                  },
                  spotlight: {
                    borderRadius: "8px",
                  },
                }}
                callback={(data) => {
                  const { status } = data;
                  if (status === "finished" || status === "skipped") {
                    setRunTour(false);
                  }
                }}
              />

              {/* Global CSS to ensure Joyride is always on top */}
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
                }
                
                .react-joyride__overlay {
                  z-index: 99998 !important;
                }
                
                .react-joyride__spotlight {
                  z-index: 99997 !important;
                }
                
                /* Ensure backdrop doesn't interfere */
                .react-joyride__beacon {
                  z-index: 99999 !important;
                }
              `}</style>

              <Navigation />
              <main className="transition-opacity duration-500 ease-in">
                {/* 🔹 Pass startTour function to Hero */}
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