import React, { useState, useRef, useEffect } from 'react';
import { Code2, Database, Cloud, GitBranch, Cpu, Zap, Eye, Activity, Sparkles, Target, Brain, Network } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

// Enhanced Skills Component without Percentages
const EnhancedSkills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [particleSystem, setParticleSystem] = useState<boolean>(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Advanced skill categories with rich descriptions
  const skillCategories = [
    {
      title: "AI/ML_DOMAINS",
      icon: <Brain className="w-6 h-6" />,
      color: "neon",
      priority: "high",
      skills: [
        { 
          name: "Machine Learning", 
          specialty: "Predictive Modeling & MLOps",
          focus: "Production-ready ML pipelines"
        },
        { 
          name: "Deep Learning", 
          specialty: "Neural Architecture Design",
          focus: "Custom model architectures"
        },
        { 
          name: "Computer Vision", 
          specialty: "Real-time Object Detection",
          focus: "Image processing systems"
        },
        { 
        name: "Generative AI", 
        specialty: "Large Language Models (LLMs), Diffusion Models, Prompt Engineering, Multimodal AI", 
        focus: ""
      },
        { 
          name: "Agentic AI", 
          specialty: "Autonomous AI Systems",
          focus: "Designing self-directed AI agents"
        }
      ]
    },
    {
      title: "CORE_LANGUAGES",
      icon: <Code2 className="w-6 h-6" />,
      color: "cyber",
      priority: "high",
      skills: [
        { 
          name: "Python", 
          specialty: "AI/ML & Backend Development",
          focus: "Data science & web frameworks"
        },
        { 
          name: "Java", 
          specialty: "Data Structures & Algorithm",
          focus: "Logic Building"
        },
        { 
          name: "C++", 
          specialty: "Object Oriented Programming"
        },
        { 
          name: "C", 
          specialty: "System Programming & Algorithms"
        },
        { 
          name: "Javascript", 
          specialty: "Full Steck Development"
        }
      ]
    },
    {
      title: "AI/ML_FRAMEWORKS",
      icon: <Network className="w-6 h-6" />,
      color: "electric",
      priority: "high",
      skills: [
        { 
          name: "TensorFlow/Keras", 
          specialty: "Production ML Models",
          focus: "Scalable deep learning"
        },
        { 
          name: "Scikit-Learn", 
          specialty: "Classical ML",
          focus: "Traditional algorithms"
        },
        { 
          name: "OpenCV", 
          specialty: "Real-time Computer Vision",
          focus: "Image & video analysis"
        },
        { 
          name: "Pandas", 
          specialty: "Data Manipulation & Analysis",
          focus: "Data wrangling and transformation"
        },
        { 
          name: "NumPy", 
          specialty: "Numerical Computing",
          focus: "High-performance array operations"
        }
      ]
    },
    {
      title: "DEV_TOOLS",
      icon: <div>🛠️</div>, // Replaced with emoji
      color: "matrix",
      priority: "medium",
      skills: [
        { 
          name: "FastAPI", 
          specialty: "ML API Development",
          focus: "High-performance APIs"
        },
        { 
          name: "Docker", 
          specialty: "Application Containerization",
          focus: "Containerized environments"
        },
        { 
          name: "MySQL", 
          specialty: "Relational Database Management",
          focus: "Structured data storage & querying"
        },
        { 
          name: "n8n", 
          specialty: "Workflow Automation",
          focus: "Connecting services and APIs"
        }
      ]
    },
    {
      title: "DATA_VISUALISATION",
      icon: <div>📊</div>, // Replaced with emoji
      color: "electric",
      priority: "medium",
      skills: [
        { 
          name: "Matplotlib", 
          specialty: "Static, Animated, and Interactive Visualizations",
          focus: "Creating publication-quality plots"
        },
        { 
          name: "Seaborn", 
          specialty: "Statistical Data Visualization",
          focus: "Creating informative and attractive statistical graphics"
        },
        { 
          name: "Altair", 
          specialty: "Declarative statistical visualization",
          focus: ""
        },
        { 
          name: "Plotly", 
          specialty: "Statistical Data Visualization",
          focus: "Interactive and web-friendly charts"
        }
      ]
    },
    {
      title: "STRATEGIC_SKILLS",
      icon: <Target className="w-6 h-6" />,
      color: "neon",
      priority: "medium",
      skills: [
        { 
          name: "Technical Leadership", 
          specialty: "AI Team Management",
          focus: "Cross-functional collaboration"
        },
        { 
          name: "MLOps Strategy", 
          specialty: "Production Pipelines",
          focus: "End-to-end ML workflows"
        },
        { 
          name: "Research & Innovation", 
          specialty: "Research Implementation",
          focus: "Cutting-edge AI techniques"
        },
        { 
          name: "Model Deployment & Monitoring", 
          specialty: "Scalable Deployment",
          focus: "Robust monitoring systems"
        }
      ]
    }
  ];

  // Enhanced particle system
  useEffect(() => {
    if (!canvasRef.current || !particleSystem) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5 + 1,
        color: `hsl(${Math.random() * 60 + 180}, 100%, 70%)`,
        opacity: Math.random() * 0.4 + 0.2
      });
    }

    let animationId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // Mouse interaction
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          particle.vx += dx * 0.00008;
          particle.vy += dy * 0.00008;
          particle.opacity = Math.min(0.8, particle.opacity + 0.02);
        } else {
          particle.opacity = Math.max(0.2, particle.opacity - 0.008);
        }
        
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        
        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (100 - distance) / 100 * 0.15;
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [particleSystem, mousePosition]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getColorClasses = (color: string) => {
    const colors = {
      neon: {
        border: 'border-neon-500/40 hover:border-neon-400/80',
        bg: 'from-neon-500 to-neon-600',
        text: 'text-neon-400',
        glow: 'shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)]',
        accent: 'bg-neon-500/20'
      },
      cyber: {
        border: 'border-cyan-500/40 hover:border-cyan-400/80',
        bg: 'from-cyan-500 to-cyan-600',
        text: 'text-cyan-400',
        glow: 'shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]',
        accent: 'bg-cyan-500/20'
      },
      electric: {
        border: 'border-purple-500/40 hover:border-purple-400/80',
        bg: 'from-purple-500 to-purple-600',
        text: 'text-purple-400',
        glow: 'shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]',
        accent: 'bg-purple-500/20'
      },
      matrix: {
        border: 'border-green-500/40 hover:border-green-400/80',
        bg: 'from-green-500 to-green-600',
        text: 'text-green-400',
        glow: 'shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]',
        accent: 'bg-green-500/20'
      }
    };
    return colors[color as keyof typeof colors] || colors.neon;
  };

  // Enhanced skill card component
  const SkillCard: React.FC<{ skill: any, colorClasses: any }> = ({ skill, colorClasses }) => (
    <div className="relative group">
      <div 
        className={`p-4 bg-void-700/30 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-void-700/50 cursor-pointer ${colorClasses.glow}`}
        onMouseEnter={() => setHoveredSkill(skill.name)}
        onMouseLeave={() => setHoveredSkill(null)}
      >
        <div className="flex items-start justify-between mb-3">
          <h4 className="font-matrix font-semibold text-white text-sm">
            {skill.name}
          </h4>
          <div className={`w-2 h-2 rounded-full ${colorClasses.accent} animate-pulse`} />
        </div>
        
        <p className="text-xs text-gray-400 mb-3 leading-relaxed">
          {skill.specialty}
        </p>
        
        <div className="text-xs text-gray-500">
          {skill.focus}
        </div>
        
        {hoveredSkill === skill.name && (
          <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-void-800/95 backdrop-blur-sm border border-white/20 rounded-lg z-20 animate-fade-in">
            {skill.certifications && skill.certifications.length > 0 && (
              <div>
                <span className="text-gray-300 text-xs font-semibold">Certifications:</span>
                <div className="flex flex-wrap gap-1 mt-2">
                  {skill.certifications.map((cert: string, idx: number) => (
                    <span key={idx} className={`px-2 py-1 text-xs bg-gradient-to-r ${colorClasses.bg} rounded-md text-white`}>
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section id="skills" className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-surface-900 via-void-800 to-surface-900 overflow-hidden px-4 sm:px-6 lg:pl-24">
      {/* Enhanced Background Effects */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full ${particleSystem ? 'opacity-25' : 'opacity-0'} transition-opacity duration-500`}
        style={{ pointerEvents: 'none' }}
      />
      
      {/* Dynamic Grid Overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-neon-500/5 via-transparent to-electric-500/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <ScrollReveal direction="fade" delay={200}>
          <div className="text-center mb-20">
            <div className="flex justify-center items-center mb-6">
              <Activity className="w-8 h-8 text-neon-400 mr-4 animate-pulse" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-cyber">
                TECHNICAL_<span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-400 via-cyan-400 to-purple-400 animate-gradient-x">ARSENAL</span>
              </h2>
              <Sparkles className="w-8 h-8 text-electric-400 ml-4 animate-pulse" />
            </div>
            
            {/* Particle Toggle */}
            <div className="flex justify-center mb-8">
              <button
                onClick={() => setParticleSystem(!particleSystem)}
                className={`px-4 py-2 border rounded-lg transition-all duration-300 ${
                  particleSystem 
                    ? 'border-neon-500/60 bg-neon-500/20 text-neon-400' 
                    : 'border-gray-600 bg-gray-800/20 text-gray-400'
                }`}
              >
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Enhanced Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            const isActive = activeCategory === category.title;
            
            return (
              <ScrollReveal 
                key={category.title} 
                direction={index % 2 === 0 ? 'left' : 'right'} 
                delay={400 + index * 150}
              >
                <div 
                  className={`relative bg-void-800/40 backdrop-blur-sm border ${colorClasses.border} rounded-2xl p-8 
                    hover:bg-void-800/60 transition-all duration-500 ${colorClasses.glow} group cursor-pointer
                    ${isActive ? 'ring-2 ring-white/20' : ''}`}
                  onMouseEnter={() => setActiveCategory(category.title)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  {/* Priority Badge */}
                  {category.priority === 'high' && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-neon-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                  )}
                  
                  <div className="flex items-center mb-8">
                    <div className={`p-4 bg-gradient-to-r ${colorClasses.bg} rounded-xl mr-4 group-hover:animate-bounce transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${colorClasses.text} font-cyber tracking-wider`}>
                        {category.title}
                      </h3>
                      <div className="text-xs text-gray-400 mt-1">
                        {category.skills.length} Technologies
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid gap-4">
                    {category.skills.map((skill) => (
                      <SkillCard key={skill.name} skill={skill} colorClasses={colorClasses} />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Enhanced Timeline */}
        <ScrollReveal direction="up" delay={800}>
          <div className="mt-20">
            <h3 className="text-4xl font-bold text-center text-white mb-16 font-cyber">
              NEURAL_<span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-400 to-purple-400">EVOLUTION</span>
            </h3>
          
            <div className="relative max-w-6xl mx-auto">
              {/* Enhanced Timeline Beam */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-neon-500 via-cyan-500 to-purple-500 animate-pulse rounded-full" />
              
              {[
                { 
                  year: "2022", 
                  milestone: "JAVA", 
                  description: "Enhanced Java expertise by solving complex problems and developing structured applications.",
                  status: "COMPLETED",
                  color: "neon",
                  technologies: ["Advanced Java", "Data Structures", "Algorithms"],
                  achievement: "Strengthened Java application development skills"
                },
                { 
                  year: "2023", 
                  milestone: "C_PROGRAMMING", 
                  description: "Learned C programming to understand low-level programming and system-level logic.",
                  status: "COMPLETED",
                  color: "cyber",
                  technologies: ["C Language", "Pointers", "Memory Management"],
                  achievement: "Built solid foundations in structured programming"
                },
                { 
                  year: "2023", 
                  milestone: "PYTHON", 
                  description: "Explored Python for scripting, automation, and scientific computing.",
                  status: "COMPLETED",
                  color: "cyber",
                  technologies: ["Python", "NumPy", "Pandas"],
                  achievement: "Gained versatility in Python development"
                },
                { 
                  year: "2023", 
                  milestone: "MACHINE_LEARNING", 
                  description: "Started building ML models for predictive tasks and data-driven insights.",
                  status: "COMPLETED",
                  color: "cyber",
                  technologies: ["Scikit-Learn", "Linear Models", "ML Pipelines"],
                  achievement: "Created basic ML solutions"
                },
                { 
                  year: "2024", 
                  milestone: "C++", 
                  description: "Learned C++ to enhance performance-oriented and object-oriented design skills.",
                  status: "COMPLETED",
                  color: "electric",
                  technologies: ["C++", "STL", "Object-Oriented Design"],
                  achievement: "Applied C++ in advanced problem-solving"
                },
                { 
                  year: "2024", 
                  milestone: "DEEP_LEARNING", 
                  description: "Dived into neural networks and deep learning frameworks for AI development.",
                  status: "COMPLETED",
                  color: "electric",
                  technologies: ["TensorFlow", "PyTorch", "Neural Networks"],
                  achievement: "Built and trained deep learning models"
                },
                { 
                  year: "2024", 
                  milestone: "COMPUTER_VISION", 
                  description: "Explored computer vision applications including image classification and object detection.",
                  status: "COMPLETED",
                  color: "electric",
                  technologies: ["OpenCV", "CNNs", "Vision Transformers"],
                  achievement: "Developed AI-powered visual systems"
                },
                { 
                  year: "2024", 
                  milestone: "GENERATIVE_AI", 
                  description: "Worked on GenAI techniques for text and image generation.",
                  status: "COMPLETED",
                  color: "electric",
                  technologies: ["Transformers", "LLMs", "Diffusion Models"],
                  achievement: "Built creative generative AI applications"
                },
                { 
                  year: "2025", 
                  milestone: "MYSQL_DATABASES", 
                  description: "Learning relational databases and SQL for data storage and management.",
                  status: "ACTIVE",
                  color: "matrix",
                  technologies: ["MySQL", "Database Design", "Queries"],
                  achievement: "Applying SQL in real projects"
                },
                { 
                  year: "2025", 
                  milestone: "AGENTIC_AI", 
                  description: "Exploring autonomous AI agents and orchestration frameworks.",
                  status: "ACTIVE",
                  color: "matrix",
                  technologies: ["LangChain", "Agent Frameworks", "Multi-Agent Systems"],
                  achievement: "Building agent-based intelligent systems"
                },
                { 
                  year: "2025", 
                  milestone: "JAVASCRIPT", 
                  description: "Currently learning JavaScript for frontend and full-stack development.",
                  status: "ONGOING",
                  color: "matrix",
                  technologies: ["JavaScript", "DOM", "ES6+"],
                  achievement: "Expanding into web technologies"
                }
              ].map((item, index) => {
                const colorClasses = getColorClasses(item.color);
                return (
                  <div 
                    key={item.year}
                    className={`flex flex-col md:flex-row items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} relative group`}
                  >
                    {/* Enhanced Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <div className={`w-20 h-20 bg-gradient-to-r ${colorClasses.bg} rounded-full flex items-center justify-center text-white shadow-2xl ${colorClasses.glow} transition-all duration-300 group-hover:scale-110`}>
                        <div className="text-center">
                          <div className="font-matrix font-bold text-sm">{item.year}</div>
                          <div className="text-xs opacity-75">
                            {item.status === 'ACTIVE' ? '●' : '✓'}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Content Card */}
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} mt-8 md:mt-0`}>
                      <div className={`bg-void-800/50 backdrop-blur-sm border ${colorClasses.border} rounded-2xl p-8 hover:bg-void-800/70 transition-all duration-500 ${colorClasses.glow} group-hover:scale-105`}>
                        <div className="flex items-center justify-between mb-4">
                          <h4 className={`text-xl font-bold ${colorClasses.text} font-cyber`}>
                            {item.milestone}
                          </h4>
                          <span className={`px-4 py-2 bg-gradient-to-r ${colorClasses.bg} text-white text-xs rounded-full font-matrix uppercase tracking-wider animate-pulse`}>
                            {item.status}
                          </span>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed font-matrix mb-4">
                          {item.description}
                        </p>
                        
                        <div className="mb-4">
                          <div className={`text-sm ${colorClasses.text} font-semibold mb-2`}>
                            Key Technologies:
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech, idx) => (
                              <span key={idx} className="px-3 py-1 bg-void-700/50 text-gray-300 text-xs rounded-lg border border-white/10">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className={`text-sm ${colorClasses.text} font-matrix`}>
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
        <ScrollReveal direction="up" delay={1000}>
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-white mb-12 font-cyber">
              IMPACT_<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">HIGHLIGHTS</span>
            </h3>
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  label: "Projects Deployed", 
                  icon: "🚀",
                  description: "Production-ready solutions"
                },
                { 
                  label: "Technologies Mastered", 
                  icon: "⚡",
                  description: "Cutting-edge tech stack"
                },
                { 
                  label: "AI Models Built", 
                  icon: "🧠",
                  description: "Custom neural networks"
                },
                { 
                  label: "Years Experience", 
                  icon: "💎",
                  description: "Continuous learning"
                }
              ].map((highlight, index) => (
                <div key={highlight.label} className="group">
                  <div className="bg-void-900/50 backdrop-blur-sm border border-neon-500/20 rounded-2xl p-6 hover:border-neon-500/40 transition-all duration-300 group-hover:scale-105">
                    <div className="text-center">
                      <div className="text-4xl mb-4 group-hover:animate-bounce">
                        {highlight.icon}
                      </div>
                      <div className="text-neon-400 font-cyber font-bold text-lg mb-2">
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
    </section>
  );
};

export default EnhancedSkills;

// Additional CSS animations (same as before)
const additionalCSS = `
@keyframes gradient-x {
  0%, 100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-gradient-x {
  animation: gradient-x 3s ease infinite;
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out forwards;
}
`;