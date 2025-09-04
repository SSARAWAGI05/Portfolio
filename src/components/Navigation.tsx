import React, { useState, useEffect } from 'react';
import { Home, User, Code, Briefcase, Award, Mail, Sun, Moon, Menu, X, ChevronUp, Users, Trophy } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

// Import your logo (if in src/assets)
import Logo from '/ganeshji.jpg'; // adjust path if needed

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(100, (scrollPosition / documentHeight) * 100);

      setIsScrolled(scrollPosition > 100);
      setScrollProgress(progress);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'clubs', 'achievements', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Experience', href: '#experience', icon: Award },
    { name: 'Clubs', href: '#clubs', icon: Users }, 
    { name: 'Achievements', href: '#achievements', icon: Trophy },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden lg:block transition-all duration-300 ${
          isScrolled ? 'translate-y-0' : 'translate-y-2'
        }`}
      >
        <div className="relative">
          <div
            className={`
            relative px-6 py-3 rounded-xl backdrop-blur-md border
            ${isScrolled ? 'bg-black/70 border-neon-500/20' : 'bg-black/50 border-gray-600/10'}
          `}
          >
            <div className="relative flex items-center space-x-1">
              {/* Logo */}
              <div className="flex items-center space-x-2 mr-4 pr-4 border-r border-gray-600/20">
                <img
                  src="/ganeshji.jpg"
                  alt="Logo"
                  className="w-8 h-8 object-contain rounded-lg"
                />
                <span className="text-white font-medium text-sm tracking-wider"></span>
              </div>

              {/* Navigation Items */}
              <div className="flex items-center space-x-0">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.href.slice(1);

                  return (
                    <div key={item.name} className="relative group">
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className={`
                          relative px-3 py-2 rounded-lg transition-all duration-200 flex items-center space-x-1
                          ${isActive ? 'text-neon-400' : 'text-gray-400 hover:text-white'}
                        `}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-xs tracking-wide">{item.name}</span>

                        {isActive && (
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-neon-400 rounded-full" />
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Theme Toggle */}
              <div className="ml-4 pl-4 border-l border-gray-600/20">
                <button
                  onClick={toggleTheme}
                  className="w-8 h-8 bg-black/30 border border-gray-600/20 rounded-lg flex items-center justify-center hover:border-neon-400/30 transition-all duration-200"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-4 h-4 text-gray-300" />
                  ) : (
                    <Moon className="w-4 h-4 text-gray-300" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`fixed top-4 left-4 right-4 z-50 lg:hidden transition-all duration-300 ${
          isScrolled ? 'translate-y-0' : 'translate-y-1'
        }`}
      >
        <div
          className={`
          relative px-4 py-3 rounded-xl backdrop-blur-md border transition-all duration-300
          ${isScrolled ? 'bg-black/70 border-neon-500/20' : 'bg-black/50 border-gray-600/10'}
        `}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                src="/ganeshji.jpg"
                alt="Logo"
                className="w-7 h-7 object-contain rounded-lg"
              />
              <span className="text-white font-medium text-sm tracking-wider"></span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-lg bg-black/30 border border-gray-600/20 hover:border-neon-400/30 transition-all duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4 text-gray-300" />
              ) : (
                <Menu className="w-4 h-4 text-gray-300" />
              )}
            </button>
          </div>

          {/* Mobile Dropdown */}
          {isMobileMenuOpen && (
            <div className="mt-3 pt-3 border-t border-gray-600/20 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.slice(1);

                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`
                      w-full flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200
                      ${isActive ? 'text-neon-400' : 'text-gray-400 hover:text-white'}
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm tracking-wide">{item.name}</span>
                  </button>
                );
              })}

              <div className="pt-2 border-t border-gray-600/20">
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-400 hover:text-white transition-all duration-200"
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="w-4 h-4" />
                      <span className="text-sm tracking-wide">Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4" />
                      <span className="text-sm tracking-wide">Dark Mode</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Scroll Progress */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-transparent z-40">
        <div
          className="h-full bg-gradient-to-r from-neon-500 to-cyber-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Scroll to Top */}
      {isScrolled && (
        <button
          onClick={() => scrollToSection('#home')}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="w-10 h-10 bg-black/70 border border-gray-600/20 rounded-full flex items-center justify-center hover:border-neon-400/30 transition-all duration-200">
            <ChevronUp className="w-5 h-5 text-gray-300" />
          </div>
        </button>
      )}
    </>
  );
};

export default Navigation;
