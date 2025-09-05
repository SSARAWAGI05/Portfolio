import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { Code2, Database, Cloud, GitBranch, Cpu, Zap, Eye, Activity, Sparkles, Target, Brain, Network } from 'lucide-react';

// Simplified ScrollReveal component for better performance
const ScrollReveal: React.FC<{ children: React.ReactNode; direction?: string; delay?: number }> = ({ 
  children, 
  direction = 'up', 
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'left': return 'translateX(-30px)';
        case 'right': return 'translateX(30px)';
        case 'up': return 'translateY(30px)';
        case 'down': return 'translateY(-30px)';
        default: return 'translateY(20px)';
      }
    }
    return 'translate(0)';
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
      }}
    >
      {children}
    </div>
  );
};

// Optimized Skills Component
const OptimizedSkills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [particleSystem, setParticleSystem] = useState<boolean>(false); // Disabled by default
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  // Memoized skill categories to prevent re-renders
  const skillCategories = useMemo(() => [
    {
      title: "AI/ML_DOMAINS",
      icon: <Brain className="w-6 h-6" />,
      color: "neon",
      priority: "high",
      skills: [
        { name: "Machine Learning", specialty: "Predictive Modeling & MLOps", focus: "Production-ready ML pipelines" },
        { name: "Deep Learning", specialty: "Neural Architecture Design", focus: "Custom model architectures" },
        { name: "Computer Vision", specialty: "Real-time Object Detection", focus: "Image processing systems" },
        { name: "Generative AI", specialty: "Large Language Models (LLMs), Diffusion Models, Prompt Engineering, Multimodal AI", focus: "" },
        { name: "Agentic AI", specialty: "Autonomous AI Systems", focus: "Designing self-directed AI agents" }
      ]
    },
    {
      title: "LANGUAGES",
      icon: <Code2 className="w-6 h-6" />,
      color: "cyber",
      priority: "high",
      skills: [
        { name: "Python", specialty: "AI/ML & Backend Development", focus: "Data science & web frameworks" },
        { name: "Java", specialty: "Data Structures & Algorithm", focus: "Logic Building" },
        { name: "C++", specialty: "Object Oriented Programming" },
        { name: "C", specialty: "System Programming & Algorithms" },
        { name: "Javascript", specialty: "Full Stack Development" }
      ]
    },
    {
      title: "FRAMEWORKS",
      icon: <Network className="w-6 h-6" />,
      color: "electric",
      priority: "high",
      skills: [
        { name: "TensorFlow/Keras", specialty: "Production ML Models", focus: "Scalable deep learning" },
        { name: "Scikit-Learn", specialty: "Classical ML", focus: "Traditional algorithms" },
        { name: "OpenCV", specialty: "Real-time Computer Vision", focus: "Image & video analysis" },
        { name: "Pandas", specialty: "Data Manipulation & Analysis", focus: "Data wrangling and transformation" },
        { name: "NumPy", specialty: "Numerical Computing", focus: "High-performance array operations" }
      ]
    },
    {
      title: "DEV_TOOLS",
      icon: <div>🛠️</div>,
      color: "matrix",
      priority: "medium",
      skills: [
        { name: "FastAPI", specialty: "ML API Development", focus: "High-performance APIs" },
        { name: "Docker", specialty: "Application Containerization", focus: "Containerized environments" },
        { name: "MySQL", specialty: "Relational Database Management", focus: "Structured data storage & querying" },
        { name: "n8n", specialty: "Workflow Automation", focus: "Connecting services and APIs" }
      ]
    },
    {
      title: "VISUALISATION",
      icon: <div>📊</div>,
      color: "electric",
      priority: "medium",
      skills: [
        { name: "Matplotlib", specialty: "Static, Animated, and Interactive Visualizations", focus: "Creating publication-quality plots" },
        { name: "Seaborn", specialty: "Statistical Data Visualization", focus: "Creating informative and attractive statistical graphics" },
        { name: "Altair", specialty: "Declarative statistical visualization", focus: "" },
        { name: "Plotly", specialty: "Statistical Data Visualization", focus: "Interactive and web-friendly charts" }
      ]
    },
    {
      title: "STRATEGIC_SKILLS",
      icon: <Target className="w-6 h-6" />,
      color: "neon",
      priority: "medium",
      skills: [
        { name: "Technical Leadership", specialty: "AI Team Management", focus: "Cross-functional collaboration" },
        { name: "MLOps Strategy", specialty: "Production Pipelines", focus: "End-to-end ML workflows" },
        { name: "Research & Innovation", specialty: "Research Implementation", focus: "Cutting-edge AI techniques" },
        { name: "Model Deployment & Monitoring", specialty: "Scalable Deployment", focus: "Robust monitoring systems" }
      ]
    }
  ], []);

  // Optimized particle system with fewer particles and simpler animations
  useEffect(() => {
    if (!canvasRef.current || !particleSystem) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    updateCanvasSize();

    // Reduced particle count for better performance
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      hue: number;
      opacity: number;
    }> = [];

    // Create fewer particles (20 instead of 80)
    for (let i = 0; i < 20; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        hue: Math.random() * 60 + 180,
        opacity: Math.random() * 0.3 + 0.2
      });
    }

    let lastTime = 0;
    const targetFPS = 30; // Reduced FPS for better performance
    const frameInterval = 1000 / targetFPS;
    
    const animate = (currentTime: number) => {
      if (currentTime - lastTime < frameInterval) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTime = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = `hsl(${particle.hue}, 100%, 70%)`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);
    
    const resizeHandler = () => {
      updateCanvasSize();
    };
    
    window.addEventListener('resize', resizeHandler);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', resizeHandler);
    };
  }, [particleSystem]);

  // Memoized color classes
  const getColorClasses = useCallback((color: string) => {
    const colors = {
      neon: {
        border: 'border-green-400/40 hover:border-green-400/80',
        bg: 'from-green-500 to-green-600',
        text: 'text-green-400',
        glow: 'shadow-lg hover:shadow-green-400/20',
        accent: 'bg-green-500/20'
      },
      cyber: {
        border: 'border-cyan-500/40 hover:border-cyan-400/80',
        bg: 'from-cyan-500 to-cyan-600',
        text: 'text-cyan-400',
        glow: 'shadow-lg hover:shadow-cyan-400/20',
        accent: 'bg-cyan-500/20'
      },
      electric: {
        border: 'border-purple-500/40 hover:border-purple-400/80',
        bg: 'from-purple-500 to-purple-600',
        text: 'text-purple-400',
        glow: 'shadow-lg hover:shadow-purple-400/20',
        accent: 'bg-purple-500/20'
      },
      matrix: {
        border: 'border-emerald-500/40 hover:border-emerald-400/80',
        bg: 'from-emerald-500 to-emerald-600',
        text: 'text-emerald-400',
        glow: 'shadow-lg hover:shadow-emerald-400/20',
        accent: 'bg-emerald-500/20'
      }
    };
    return colors[color as keyof typeof colors] || colors.neon;
  }, []);

  // Optimized skill card component
  const SkillCard: React.FC<{ skill: any, colorClasses: any }> = React.memo(({ skill, colorClasses }) => (
    <div className="relative group">
      <div 
        className={`p-4 bg-gray-900/30 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200 hover:bg-gray-900/50 cursor-pointer ${colorClasses.glow}`}
        onMouseEnter={() => setHoveredSkill(skill.name)}
        onMouseLeave={() => setHoveredSkill(null)}
      >
        <div className="flex items-start justify-between mb-3">
          <h4 className="flex-1 mr-2 font-semibold text-white text-sm break-words">
            {skill.name}
          </h4>
          <div className={`flex-shrink-0 w-2 h-2 rounded-full ${colorClasses.accent}`} />
        </div>
        
        <p className="text-xs text-gray-400 mb-3 leading-relaxed">
          {skill.specialty}
        </p>
        
        <div className="text-xs text-gray-500">
          {skill.focus}
        </div>
        
        {hoveredSkill === skill.name && (
          <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-gray-800/95 backdrop-blur-sm border border-white/20 rounded-lg z-20">
            <div className="text-gray-300 text-xs">
              <strong>Specialty:</strong> {skill.specialty}
            </div>
          </div>
        )}
      </div>
    </div>
  ));

  const timelineData = useMemo(() => [
    { year: "2022", milestone: "JAVA", description: "Enhanced Java expertise by solving complex problems and developing structured applications.", status: "COMPLETED", color: "neon", technologies: ["Advanced Java", "Data Structures", "Algorithms"], achievement: "Strengthened Java application development skills" },
    { year: "2023", milestone: "C_PROGRAMMING", description: "Learned C programming to understand low-level programming and system-level logic.", status: "COMPLETED", color: "cyber", technologies: ["C Language", "Pointers", "Memory Management"], achievement: "Built solid foundations in structured programming" },
    { year: "2023", milestone: "PYTHON", description: "Explored Python for scripting, automation, and scientific computing.", status: "COMPLETED", color: "cyber", technologies: ["Python", "NumPy", "Pandas"], achievement: "Gained versatility in Python development" },
    { year: "2023", milestone: "MACHINE_LEARNING", description: "Started building ML models for predictive tasks and data-driven insights.", status: "COMPLETED", color: "cyber", technologies: ["Scikit-Learn", "Linear Models", "ML Pipelines"], achievement: "Created basic ML solutions" },
    { year: "2024", milestone: "C++", description: "Learned C++ to enhance performance-oriented and object-oriented design skills.", status: "COMPLETED", color: "electric", technologies: ["C++", "STL", "Object-Oriented Design"], achievement: "Applied C++ in advanced problem-solving" },
    { year: "2024", milestone: "DEEP_LEARNING", description: "Dived into neural networks and deep learning frameworks for AI development.", status: "COMPLETED", color: "electric", technologies: ["TensorFlow", "PyTorch", "Neural Networks"], achievement: "Built and trained deep learning models" },
    { year: "2024", milestone: "COMPUTER_VISION", description: "Explored computer vision applications including image classification and object detection.", status: "COMPLETED", color: "electric", technologies: ["OpenCV", "CNNs", "Vision Transformers"], achievement: "Developed AI-powered visual systems" },
    { year: "2024", milestone: "GENERATIVE_AI", description: "Worked on GenAI techniques for text and image generation.", status: "COMPLETED", color: "electric", technologies: ["Transformers", "LLMs", "Diffusion Models"], achievement: "Built creative generative AI applications" },
    { year: "2025", milestone: "MYSQL_DATABASES", description: "Learning relational databases and SQL for data storage and management.", status: "ACTIVE", color: "matrix", technologies: ["MySQL", "Database Design", "Queries"], achievement: "Applying SQL in real projects" },
    { year: "2025", milestone: "AGENTIC_AI", description: "Exploring autonomous AI agents and orchestration frameworks.", status: "ACTIVE", color: "matrix", technologies: ["LangChain", "Agent Frameworks", "Multi-Agent Systems"], achievement: "Building agent-based intelligent systems" },
    { year: "2025", milestone: "JAVASCRIPT", description: "Currently learning JavaScript for frontend and full-stack development.", status: "ONGOING", color: "matrix", technologies: ["JavaScript", "DOM", "ES6+"], achievement: "Expanding into web technologies" }
  ], []);

  return (
    <section id="skills" className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Effects */}
      {particleSystem && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
        />
      )}
      
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-purple-500/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center mb-16">
            <div className="flex justify-center items-center mb-6">
              <Activity className="w-8 h-8 text-green-400 mr-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-cyber">
                TECHNICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-400 to-electric-400 animate-glow">ARSENAL</span>
              </h2>
              <Sparkles className="w-8 h-8 text-purple-400 ml-4" />
            </div>
            
            {/* Particle Toggle */}
            <button
              onClick={() => setParticleSystem(!particleSystem)}
              className={`px-4 py-2 border rounded-lg transition-all duration-200 ${
                particleSystem 
                  ? 'border-green-500/60 bg-green-500/20 text-green-400' 
                  : 'border-gray-600 bg-gray-800/20 text-gray-400'
              }`}
            >
              {particleSystem ? 'Disable' : 'Enable'} Effects
            </button>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            const isActive = activeCategory === category.title;
            
            return (
              <ScrollReveal 
                key={category.title} 
                direction={index % 2 === 0 ? 'left' : 'right'} 
                delay={200 + index * 100}
              >
                <div 
                  className={`relative bg-gray-800/40 backdrop-blur-sm border ${colorClasses.border} rounded-2xl p-6 
                    hover:bg-gray-800/60 transition-all duration-200 ${colorClasses.glow} group cursor-pointer
                    ${isActive ? 'ring-2 ring-white/20' : ''}`}
                  onMouseEnter={() => setActiveCategory(category.title)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  {/* Priority Badge */}
                  {category.priority === 'high' && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                  )}
                  
                  <div className="mb-6 text-center">
                    <div className="mb-2 flex justify-center">
                      {category.icon}
                    </div>
                    <h3 className={`text-lg font-bold ${colorClasses.text} tracking-wider break-words`}>
                      {category.title}
                    </h3>
                    <div className="text-xs text-gray-400 mt-1">
                      {category.skills.length} Technologies
                    </div>
                  </div>
                  
                  <div className="grid gap-3">
                    {category.skills.map((skill) => (
                      <SkillCard key={skill.name} skill={skill} colorClasses={colorClasses} />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Timeline */}
        <ScrollReveal direction="up" delay={300}>
          <div className="mt-20">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-cyber text-center text-white mb-12 leading-tight">
              TECH_<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-400">
                TIMELINE
              </span>
            </h3>
          
            <div className="relative max-w-6xl mx-auto">
              {/* Timeline Beam */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 via-cyan-500 to-purple-500 rounded-full" />
              
              {timelineData.map((item, index) => {
                const colorClasses = getColorClasses(item.color);
                return (
                  <div 
                    key={`${item.year}-${index}`}
                    className={`flex flex-col md:flex-row items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} relative group`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute md:static left-1/2 md:left-auto transform -translate-x-1/2 md:transform-none z-10 mb-6 md:mb-0">
                      <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses.bg} rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-200 group-hover:scale-110`}>
                        <div className="text-center">
                          <div className="font-bold text-sm">{item.year}</div>
                          <div className="text-xs opacity-75">
                            {item.status === 'ACTIVE' ? '●' : '✓'}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} mt-20 md:mt-0`}>
                      <div className={`bg-gray-800/50 backdrop-blur-sm border ${colorClasses.border} rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-200 ${colorClasses.glow} group-hover:scale-105`}>
                        <div className="flex items-center justify-between mb-4">
                          <h4 className={`text-lg font-bold ${colorClasses.text}`}>
                            {item.milestone}
                          </h4>
                          <span className={`px-3 py-1 bg-gradient-to-r ${colorClasses.bg} text-white text-xs rounded-full uppercase tracking-wider`}>
                            {item.status}
                          </span>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                          {item.description}
                        </p>
                        
                        <div className="mb-4">
                          <div className={`text-sm ${colorClasses.text} font-semibold mb-2`}>
                            Key Technologies:
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech, idx) => (
                              <span key={idx} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded border border-white/10">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className={`text-sm ${colorClasses.text}`}>
                          🎯 {item.achievement}
                        </div>
                      </div>
                    </div>

                    {/* Empty space for alternating layout */}
                    <div className="hidden md:block w-5/12" />
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Achievement Highlights */}
        <ScrollReveal direction="up" delay={400}>
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-white mb-12">
              IMPACT_<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">HIGHLIGHTS</span>
            </h3>
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Projects Deployed", icon: "🚀", description: "Production-ready solutions" },
                { label: "Technologies Mastered", icon: "⚡", description: "Cutting-edge tech stack" },
                { label: "AI Models Built", icon: "🧠", description: "Custom neural networks" },
                { label: "Years Experience", icon: "💎", description: "Continuous learning" }
              ].map((highlight) => (
                <div key={highlight.label} className="group">
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-200 group-hover:scale-105">
                    <div className="text-center">
                      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-200">
                        {highlight.icon}
                      </div>
                      <div className="text-green-400 font-bold text-lg mb-2">
                        {highlight.label}
                      </div>
                      <div className="text-xs text-gray-500">
                        {highlight.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Add CSS for smooth animations */}
      <style jsx>{`
        .group:hover .group-hover\\:scale-105 {
          transform: scale(1.05);
        }
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }
        .transition-all {
          transition-property: all;
        }
        .duration-200 {
          transition-duration: 200ms;
        }
        .ease-out {
          transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
};

export default OptimizedSkills;