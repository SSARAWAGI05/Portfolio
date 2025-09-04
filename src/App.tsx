import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import SmoothScroll from './components/SmoothScroll';
import SplashScreen from './components/SplashScreen';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ClubsSection from './components/ClubsSection'; // Import the new ClubsSection
import AchievementsSection from './components/AchievementsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  // 🔹 Function to run the guided tour
  const startTour = async () => {
    const sectionIds = ["home", "about", "skills", "projects", "experience", "clubs", "contact"];
    
    for (let i = 0; i < sectionIds.length; i++) {
      const element = document.getElementById(sectionIds[i]);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // wait 2.5s before moving to the next section
        await new Promise((resolve) => setTimeout(resolve, 2500));
      }
    }

    // 🔹 Loop back to top (home) and stop
    const homeElement = document.getElementById("home");
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ThemeProvider>
      <SmoothScroll>
        <div className="relative">
          {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
          
          {!showSplash && (
            <>
              <Navigation />
              <main className="transition-opacity duration-500 ease-in">
                {/* 🔹 Pass startTour to Hero */}
                <Hero onStartTour={startTour} />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <ClubsSection /> {/* Add the ClubsSection component */}
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