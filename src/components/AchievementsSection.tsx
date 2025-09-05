import React, { useState, useEffect, useRef } from 'react';
import { Trophy, Award, Medal, Star, Zap, Shield, ChevronUp, Eye, X, ExternalLink, Calendar, Building2, ChevronLeft, ChevronRight, Crown, Target } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  type: 'hackathon' | 'academic' | 'leadership' | 'competition';
  featured?: boolean;
  certificateImage?: string;
  verificationLink?: string;
}

const getTypeGradient = (type: string) => {
  switch (type) {
    case "hackathon": return "from-cyan-500 to-blue-500";
    case "academic": return "from-orange-500 to-red-500";
    case "leadership": return "from-green-500 to-teal-500";
    case "competition": return "from-purple-500 to-pink-500";
    default: return "from-cyber-500 to-cyber-600";
  }
};
const AchievementsSection: React.FC = () => {
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredAchievement, setHoveredAchievement] = useState<string | null>(null);
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const previewTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const achievements: Achievement[] = [
    {
      id: 'ach-001',
      title: 'OpenHack2025',
      issuer: 'IISc Bangalore',
      date: '2025',
      type: 'hackathon',
      description: 'First place in AI/ML category - Developed an innovative machine learning solution for healthcare diagnostics',
      featured: false,
      certificateImage: '/Screenshot 2025-09-04 at 9.43.24 PM.png',
      verificationLink: '#'
    },
    {
      id: 'ach-002',
      title: 'FINTECH-A-THON',
      issuer: 'NIT Tiruchirapalli',
      date: '2025',
      type: 'hackathon',
      description: 'Runner-up position for developing a blockchain-based financial solution',
      featured: true,
      certificateImage: '/Screenshot 2025-09-04 at 9.44.11 PM.png',
      verificationLink: '#'
    },
    {
      id: 'ach-003',
      title: 'Smart India Hackathon',
      issuer: 'Government of India',
      date: '2024',
      type: 'hackathon',
      description: 'National level hackathon participant - Smart city solutions track',
      certificateImage: '/Screenshot 2025-09-04 at 9.44.55 PM.png',
      verificationLink: '',
      featured: true
    },
    {
      id: 'ach-004',
      title: 'HackNova Hackathon',
      issuer: 'SRM University',
      date: '2023',
      type: 'hackathon',
      description: 'Top 10 finalist in cybersecurity category',
      certificateImage: '/Screenshot 2025-09-04 at 9.45.34 PM.png'
    },
    {
      id: 'ach-005',
      title: 'Pentathon Hackathon',
      issuer: 'Cyber Security Organization',
      date: '2023',
      type: 'hackathon',
      description: 'Excellence in penetration testing and vulnerability assessment',
      certificateImage: '/Screenshot 2025-09-04 at 9.46.09 PM.png'
    },
    {
      id: 'ach-006',
      title: 'Safety Patrol Leadership',
      issuer: 'School Administration',
      date: '2023',
      type: 'leadership',
      description: 'Award for outstanding conduct and management of the Safety Patrol Squad',
      certificateImage: '/Screenshot 2025-09-04 at 9.47.16 PM.png'
    },
    {
      id: 'ach-007',
      title: 'Computer Science Excellence',
      issuer: 'ISC Board',
      date: '2023',
      type: 'academic',
      description: 'Award for achieving the highest marks in Computer Science in ISC-2023 (98%)',
      certificateImage: '/Screenshot 2025-09-04 at 9.46.38 PM.png'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle mouse movement for preview positioning
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPreviewPosition({ x: e.clientX, y: e.clientY });
    };

    if (hoveredAchievement) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [hoveredAchievement]);

  const getIcon = (type: Achievement['type']) => {
    switch (type) {
      case 'hackathon': return <Zap className="w-5 h-5" />;
      case 'academic': return <Medal className="w-5 h-5" />;
      case 'leadership': return <Shield className="w-5 h-5" />;
      case 'competition': return <Trophy className="w-5 h-5" />;
      default: return <Award className="w-5 h-5" />;
    }
  };

  const getTypeGradient = (type: Achievement['type']) => {
    switch (type) {
      case 'hackathon': return 'from-cyan-400 to-blue-500';
      case 'academic': return 'from-orange-400 to-red-500';
      case 'leadership': return 'from-green-400 to-teal-500';
      case 'competition': return 'from-purple-400 to-pink-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const handleCardHover = (achievementId: string, event: React.MouseEvent) => {
    if (previewTimeoutRef.current) {
      clearTimeout(previewTimeoutRef.current);
    }
    
    const achievement = achievements.find(a => a.id === achievementId);
    if (achievement?.certificateImage) {
      previewTimeoutRef.current = setTimeout(() => {
        setHoveredAchievement(achievementId);
      }, 300); // 300ms delay for smooth experience
    }
  };

  const handleCardLeave = () => {
    if (previewTimeoutRef.current) {
      clearTimeout(previewTimeoutRef.current);
    }
    
    previewTimeoutRef.current = setTimeout(() => {
      setHoveredAchievement(null);
    }, 150); // Small delay to prevent flickering
  };

  const filters = [
    { id: 'all', label: 'All', icon: Target },
    { id: 'hackathon', label: 'Hackathons', icon: Zap },
    { id: 'academic', label: 'Academic', icon: Medal },
    { id: 'leadership', label: 'Leadership', icon: Shield },
    { id: 'competition', label: 'Competition', icon: Trophy }
  ];

  const filteredAchievements = activeFilter === 'all' 
    ? achievements 
    : achievements.filter(a => a.type === activeFilter);

  const certificateImages = achievements.filter(a => a.certificateImage).map(a => a.certificateImage!);

  const openCertificateViewer = (imageUrl: string) => {
    const index = certificateImages.indexOf(imageUrl);
    setPreviewIndex(index >= 0 ? index : 0);
    setHoveredAchievement(null); // Close hover preview
  };

  const closeCertificateViewer = () => {
    setPreviewIndex(null);
  };

  const nextCertificate = () => {
    if (previewIndex !== null) {
      setPreviewIndex((previewIndex + 1) % certificateImages.length);
    }
  };

  const prevCertificate = () => {
    if (previewIndex !== null) {
      setPreviewIndex((previewIndex - 1 + certificateImages.length) % certificateImages.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (previewIndex !== null) {
        if (e.key === 'ArrowRight') nextCertificate();
        if (e.key === 'ArrowLeft') prevCertificate();
        if (e.key === 'Escape') closeCertificateViewer();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [previewIndex]);

  // Get the hovered achievement's certificate
  const hoveredCertificate = hoveredAchievement 
    ? achievements.find(a => a.id === hoveredAchievement)?.certificateImage 
    : null;

  return (
    <section id="achievements" className="relative min-h-screen py-24 bg-gradient-to-br from-surface-900 via-void-800 to-surface-900 overflow-hidden">
    {/* Background Grid */}
    <div className="absolute inset-0 bg-cyber-grid opacity-10" />

      {/* Minimal Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-green-500/3 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Minimal Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-cyber text-white mb-4 font-cyber">
            ACHIEV<span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-400 to-electric-400 animate-glow">EMENTS</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-500 via-cyber-500 to-electric-500 mx-auto mb-8 animate-pulse"></div>
        </div>

        {/* Clean Filter Pills */}
        <div className={`flex flex-wrap justify-center gap-3 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {filters.map((filter) => {
            const IconComponent = filter.icon;
            const isActive = activeFilter === filter.id;
            const count = filter.id === 'all' ? achievements.length : achievements.filter(a => a.type === filter.id).length;
            
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`group relative px-5 py-2.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 text-cyan-300'
                    : 'border border-gray-700 text-gray-400 hover:text-cyan-600 hover:text-gray-300'
                }`}
              >
                <div className="flex items-center gap-2 text-sm">
                  <IconComponent className="w-4 h-4" />
                  <span>{filter.label}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    isActive ? 'bg-cyan-400/20 text-cyan-300' : 'bg-gray-800 text-gray-500'
                  }`}>
                    {count}
                  </span>
                </div>
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-xl" />
                )}
              </button>
            );
          })}
        </div>

        {/* Featured Achievements - Minimalist Cards */}
        {activeFilter === 'all' && (
          <div className={`mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-4 mb-12">
              <div className="flex items-center gap-2 text-orange-400">
                <Crown className="w-5 h-5" />
                <span className="text-sm font-cyber tracking-wider">FEATURED</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.filter(a => a.featured).map((achievement, index) => (
                <div 
                  key={achievement.id}
                  className="group relative"
                  style={{ animationDelay: `${index * 200}ms` }}
                  onMouseEnter={(e) => handleCardHover(achievement.id, e)}
                  onMouseLeave={handleCardLeave}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${getTypeGradient(achievement.type)} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500`} />
                  
                  <div className="bg-void-800/50 backdrop-blur-sm border border-void-600 rounded-2xl p-6 hover:bg-void-800/70 transition-all duration-500 hover:shadow-xl hover:shadow-neon-500/10 group">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${getTypeGradient(achievement.type)} bg-opacity-20`}>
                        {getIcon(achievement.type)}
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          <Calendar className="w-4 h-4" />
                          {achievement.date}
                        </div>
                        
                        {achievement.certificateImage && (
                          <button 
                            onClick={() => openCertificateViewer(achievement.certificateImage!)}
                            className="p-2 border border-gray-700 rounded-lg text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-cyber font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-500">
                        {achievement.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Building2 className="w-4 h-4" />
                        <span>{achievement.issuer}</span>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed">
                        {achievement.description}
                      </p>

                      {/* Type Badge */}
                      <div className="pt-4">
                        <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r ${getTypeGradient(achievement.type)} bg-opacity-10 border border-current text-sm`}
                              style={{ color: `rgb(${achievement.type === 'hackathon' ? '34, 211, 238' : achievement.type === 'academic' ? '251, 146, 60' : achievement.type === 'leadership' ? '52, 211, 153' : '168, 85, 247'})` }}>
                          {getIcon(achievement.type)}
                          {achievement.type.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Achievements - Clean Grid */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAchievements.filter(a => !a.featured || activeFilter !== 'all').map((achievement, index) => (
              <div 
                key={achievement.id}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={(e) => handleCardHover(achievement.id, e)}
                onMouseLeave={handleCardLeave}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${getTypeGradient(achievement.type)} rounded-xl opacity-0 group-hover:opacity-10 transition-all duration-500`} />
                
                <div className="relative bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 group-hover:text-cyan-700/50 transition-all duration-500 group-hover:-translate-y-1">
                  {/* Type Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-lg bg-gradient-to-r ${getTypeGradient(achievement.type)} bg-opacity-20`}>
                      {getIcon(achievement.type)}
                    </div>
                    
                    {achievement.certificateImage && (
                      <button 
                        onClick={() => openCertificateViewer(achievement.certificateImage!)}
                        className="p-2 text-gray-500 hover:text-cyan-400 transition-colors duration-300"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-cyber font-bold text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                      {achievement.title}
                    </h4>

                    <div className="space-y-2 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-3 h-3" />
                        <span>{achievement.issuer}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        <span>{achievement.date}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {achievement.description}
                    </p>

                    {/* Bottom Badge */}
                    <div className="pt-3">
                      <span className={`px-2 py-1 text-xs font-cyber rounded-md bg-gradient-to-r ${getTypeGradient(achievement.type)} text-black`}
                            style={{ 
                              color: `rgb(${achievement.type === 'hackathon' ? '34, 211, 238' : achievement.type === 'academic' ? '251, 146, 60' : achievement.type === 'leadership' ? '52, 211, 153' : '168, 85, 247'})`,
                              borderColor: `rgb(${achievement.type === 'hackathon' ? '34, 211, 238' : achievement.type === 'academic' ? '251, 146, 60' : achievement.type === 'leadership' ? '52, 211, 153' : '168, 85, 247'}, 0.3)`
                            }}>
                        {achievement.type.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Footer */}
        <div className={`mt-20 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {filters.slice(1).map((filter) => {
                const count = achievements.filter(a => a.type === filter.id).length;
                return (
                  <div key={filter.id} className="space-y-2">
                    <div className="text-3xl font-cyber text-white">{count}</div>
                    <div className="text-xs text-gray-500 font-cyber tracking-wider uppercase">{filter.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Hover Certificate Preview */}
      {hoveredCertificate && (
        <div 
          className="fixed pointer-events-none z-40 transition-all duration-300"
          style={{
            left: `${Math.min(previewPosition.x + 20, window.innerWidth - 320)}px`,
            top: `${Math.min(previewPosition.y - 120, window.innerHeight - 240)}px`,
            transform: hoveredCertificate ? 'scale(1) opacity(1)' : 'scale(0.9) opacity(0)'
          }}
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl" />
            
            {/* Certificate Preview */}
            <div className="relative bg-gray-900/95 backdrop-blur-xl border border-gray-700 rounded-2xl p-4 shadow-2xl max-w-sm">
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={hoveredCertificate}
                  alt="Certificate Preview"
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMTExODI3Ii8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjEwMCIgcj0iMjAiIHN0cm9rZT0iIzIyZDNlZSIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTQwIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNmI3Mjg5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DZXJ0aWZpY2F0ZSBQcmV2aWV3PC90ZXh0Pgo8L3N2Zz4=';
                  }}
                />
                
                {/* Overlay with click hint */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white text-sm font-cyber flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    Click to view full size
                  </div>
                </div>
              </div>
              
              {/* Preview Label */}
              <div className="mt-3 text-center">
                <span className="text-xs text-gray-400 font-cyber tracking-wider">CERTIFICATE PREVIEW</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Certificate Slideshow Modal */}
      {previewIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          {/* Close Button */}
          <button 
            onClick={closeCertificateViewer}
            className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors z-10 border border-gray-700 rounded-lg hover:text-cyan-600"
          >
            <X className="w-6 h-6" />
          </button>
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevCertificate}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-gray-400 hover:text-white transition-colors border border-gray-700 rounded-lg hover:text-cyan-600 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextCertificate}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-gray-400 hover:text-white transition-colors border border-gray-700 rounded-lg hover:text-cyan-600 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Certificate Image */}
          <div className="relative max-w-5xl max-h-[90vh] mx-auto px-20">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl" />
              <img 
                src={certificateImages[previewIndex]}
                alt="Certificate"
                className="relative max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjMTExODI3Ii8+CjxjaXJjbGUgY3g9IjQwMCIgY3k9IjMwMCIgcj0iNDAiIHN0cm9rZT0iIzIyZDNlZSIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iMzYwIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjNmI3Mjg5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DZXJ0aWZpY2F0ZSBOb3QgRm91bmQ8L3RleHQ+Cjwvc3ZnPg==';
                }}
              />
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg">
            <span className="text-sm text-gray-400 font-cyber">
              {previewIndex + 1} / {certificateImages.length}
            </span>
          </div>

          {/* Keyboard Hint */}
          <div className="absolute bottom-6 right-6 text-xs text-gray-500 font-cyber">
            Use ← → keys to navigate • ESC to close
          </div>
        </div>
      )}
    </section>
  );
};

export default AchievementsSection;