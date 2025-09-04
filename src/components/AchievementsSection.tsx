import React, { useState, useEffect, useRef } from 'react';
import { Trophy, Award, Medal, Star, Zap, Shield, ChevronUp, Eye, X, ExternalLink, Calendar, Building2, Sparkles, Crown, Target } from 'lucide-react';

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

const AchievementsSection: React.FC = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const getIcon = (type: Achievement['type']) => {
    switch (type) {
      case 'hackathon':
        return <Zap className="w-6 h-6" />;
      case 'academic':
        return <Medal className="w-6 h-6" />;
      case 'leadership':
        return <Shield className="w-6 h-6" />;
      case 'competition':
        return <Trophy className="w-6 h-6" />;
      default:
        return <Award className="w-6 h-6" />;
    }
  };

  const getTypeColor = (type: Achievement['type']) => {
    switch (type) {
      case 'hackathon':
        return { 
          bg: 'from-violet-500 via-purple-500 to-fuchsia-500', 
          text: 'text-violet-300', 
          border: 'border-violet-400/40',
          glow: 'shadow-violet-500/30',
          particle: 'bg-violet-400'
        };
      case 'academic':
        return { 
          bg: 'from-amber-400 via-orange-500 to-red-500', 
          text: 'text-amber-300', 
          border: 'border-amber-400/40',
          glow: 'shadow-amber-500/30',
          particle: 'bg-amber-400'
        };
      case 'leadership':
        return { 
          bg: 'from-emerald-400 via-teal-500 to-cyan-500', 
          text: 'text-emerald-300', 
          border: 'border-emerald-400/40',
          glow: 'shadow-emerald-500/30',
          particle: 'bg-emerald-400'
        };
      case 'competition':
        return { 
          bg: 'from-rose-400 via-pink-500 to-red-500', 
          text: 'text-rose-300', 
          border: 'border-rose-400/40',
          glow: 'shadow-rose-500/30',
          particle: 'bg-rose-400'
        };
      default:
        return { 
          bg: 'from-slate-400 via-gray-500 to-zinc-500', 
          text: 'text-slate-300', 
          border: 'border-slate-400/40',
          glow: 'shadow-slate-500/30',
          particle: 'bg-slate-400'
        };
    }
  };

  const filters = [
    { id: 'all', label: 'All Achievements', icon: Target, count: achievements.length },
    { id: 'hackathon', label: 'Hackathons', icon: Zap, count: achievements.filter(a => a.type === 'hackathon').length },
    { id: 'academic', label: 'Academic', icon: Medal, count: achievements.filter(a => a.type === 'academic').length },
    { id: 'leadership', label: 'Leadership', icon: Shield, count: achievements.filter(a => a.type === 'leadership').length },
    { id: 'competition', label: 'Competitions', icon: Trophy, count: achievements.filter(a => a.type === 'competition').length }
  ];

  const filteredAchievements = activeFilter === 'all' 
    ? achievements 
    : achievements.filter(a => a.type === activeFilter);

  const openPreview = (imageUrl: string) => {
    setPreviewImage(imageUrl);
  };

  const closePreview = () => {
    setPreviewImage(null);
  };

  return (
    <section 
      ref={sectionRef}
      id="achievements" 
      className="relative min-h-screen py-16 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_70%)]" />
        
        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white/20 rounded-full animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-cyber">
                ACHIEV<span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-400 via-cyan-400 to-purple-400 animate-gradient-x">EMENTS</span>
              </h2>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {filters.map((filter, index) => {
            const IconComponent = filter.icon;
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`group relative px-6 py-3 rounded-2xl font-cyber transition-all duration-500 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white shadow-lg shadow-purple-500/30 scale-105'
                    : 'bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 text-gray-300 hover:border-purple-400/50 hover:text-white hover:bg-gray-700/50'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-2">
                  <IconComponent className="w-4 h-4" />
                  <span>{filter.label}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    isActive ? 'bg-white/20' : 'bg-gray-700'
                  }`}>
                    {filter.count}
                  </span>
                </div>
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl blur-xl opacity-50 -z-10" />
                )}
              </button>
            );
          })}
        </div>

        {/* Featured Achievements - Hero Style */}
        {activeFilter === 'all' && (
          <div className={`mb-24 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-16">
              <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent flex-1" />
              <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-400/30 rounded-2xl">
                <Crown className="w-6 h-6 text-yellow-400" fill="currentColor" />
                <span className="text-lg font-cyber text-yellow-300">FEATURED EXCELLENCE</span>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent flex-1" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
              {achievements.filter(a => a.featured).map((achievement, index) => {
                const colors = getTypeColor(achievement.type);
                return (
                  <div 
                    key={achievement.id}
                    className="group relative"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Outer glow */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${colors.bg} rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-700`} />
                    
                    <div className="relative bg-gradient-to-br from-gray-800/60 via-gray-900/60 to-black/60 backdrop-blur-2xl border border-gray-700/30 rounded-3xl p-8 group-hover:border-purple-400/40 transition-all duration-700 overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.4),transparent_70%)]" />
                      </div>
                      
                      {/* Floating Elements */}
                      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Sparkles className="w-8 h-8 text-yellow-400" />
                      </div>
                      
                      <div className="relative z-10">
                        {/* Header with enhanced styling */}
                        <div className="flex items-start justify-between mb-8">
                          <div className="relative">
                            <div className={`absolute -inset-2 bg-gradient-to-r ${colors.bg} rounded-2xl blur-lg opacity-50`} />
                            <div className={`relative p-4 rounded-2xl bg-gradient-to-r ${colors.bg} shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                              {getIcon(achievement.type)}
                            </div>
                          </div>
                          
                          <div className="text-right space-y-3">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-gray-400" />
                              <span className="px-3 py-1 bg-gray-800/80 border border-gray-600/50 rounded-xl text-sm text-gray-300 font-cyber">
                                {achievement.date}
                              </span>
                            </div>
                            <div className="flex gap-3">
                              {achievement.certificateImage && (
                                <button 
                                  onClick={() => openPreview(achievement.certificateImage!)}
                                  className="group/btn p-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 rounded-xl text-blue-300 hover:text-blue-200 transition-all duration-300 hover:scale-110"
                                  title="View Certificate"
                                >
                                  <Eye className="w-5 h-5" />
                                </button>
                              )}
                              {achievement.verificationLink && (
                                <button className="group/btn p-3 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/30 rounded-xl text-emerald-300 hover:text-emerald-200 transition-all duration-300 hover:scale-110">
                                  <ExternalLink className="w-5 h-5" />
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {/* Enhanced Certificate Preview */}
                        {achievement.certificateImage && (
                          <div className="mb-8 relative overflow-hidden rounded-2xl group/img cursor-pointer border border-gray-600/30" onClick={() => openPreview(achievement.certificateImage!)}>
                            <img 
                              src={achievement.certificateImage}
                              alt={`${achievement.title} Certificate`}
                              className="w-full h-32 sm:h-40 object-cover group-hover/img:scale-110 transition-all duration-700"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMWYyOTM3Ii8+CjxwYXRoIGQ9Ik0xODAgMTAwTDIwMCA4MEwyMjAgMTAwTDIwMCAxMjBMMTgwIDEwMFoiIGZpbGw9IiM2MzY2ZjEiLz4KPHRleHQgeD0iMjAwIiB5PSIxNDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOWNhM2FmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DZXJ0aWZpY2F0ZSBJbWFnZTwvdGV4dD4KPC9zdmc+';
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-all duration-500" />
                            <div className="absolute bottom-4 left-4 opacity-0 group-hover/img:opacity-100 transition-all duration-500 transform translate-y-4 group-hover/img:translate-y-0">
                              <div className="flex items-center gap-2 text-white">
                                <Eye className="w-5 h-5" />
                                <span className="text-sm font-cyber">Click to expand</span>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {/* Enhanced Content */}
                        <div className="space-y-6">
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-cyber text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-500">
                            {achievement.title}
                          </h3>
                          
                          <div className="flex items-center gap-3 text-gray-300">
                            <Building2 className="w-5 h-5 text-gray-400" />
                            <span className="font-cyber text-lg">{achievement.issuer}</span>
                          </div>
                          
                          <p className="text-gray-300 leading-relaxed text-lg">
                            {achievement.description}
                          </p>

                          <div className="flex items-center justify-between pt-6 border-t border-gray-700/50">
                            <div className="flex items-center gap-3">
                              <span className={`px-4 py-2 rounded-xl text-sm uppercase tracking-wider font-cyber ${colors.text} bg-gray-800/60 border ${colors.border}`}>
                                {achievement.type}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-400/30 rounded-xl">
                              <Crown className="w-5 h-5 text-yellow-400" fill="currentColor" />
                              <span className="text-yellow-300 font-cyber">FEATURED</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* All Achievements Grid */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent flex-1" />
            <h3 className="text-2xl font-cyber text-white">
              {activeFilter === 'all' ? 'All Achievements' : `${filters.find(f => f.id === activeFilter)?.label} (${filteredAchievements.length})`}
            </h3>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent flex-1" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredAchievements.filter(a => !a.featured || activeFilter !== 'all').map((achievement, index) => {
              const colors = getTypeColor(achievement.type);
              return (
                <div 
                  key={achievement.id}
                  className="group relative hover:z-10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Hover glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${colors.bg} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700`} />
                  
                  <div className="relative bg-gradient-to-br from-gray-800/40 via-gray-900/40 to-black/40 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-6 group-hover:border-purple-400/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/10 group-hover:-translate-y-2 group-hover:scale-105 overflow-hidden">
                    {/* Background pattern */}
                    <div className={`absolute top-0 right-0 w-32 h-32 ${colors.particle}/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700`} />
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="relative">
                          <div className={`absolute -inset-1 bg-gradient-to-r ${colors.bg} rounded-xl blur opacity-50`} />
                          <div className={`relative p-3 rounded-xl bg-gradient-to-r ${colors.bg} shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                            {getIcon(achievement.type)}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {achievement.certificateImage && (
                            <button 
                              onClick={() => openPreview(achievement.certificateImage!)}
                              className="p-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 rounded-lg text-blue-300 hover:text-blue-200 transition-all duration-300 hover:scale-110"
                              title="View Certificate"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                          )}
                          {achievement.verificationLink && (
                            <button className="p-2 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/30 rounded-lg text-emerald-300 hover:text-emerald-200 transition-all duration-300 hover:scale-110">
                              <ExternalLink className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Certificate Thumbnail */}
                      {achievement.certificateImage && (
                        <div className="mb-6 relative overflow-hidden rounded-xl cursor-pointer border border-gray-600/20 group/img" onClick={() => openPreview(achievement.certificateImage!)}>
                          <img 
                            src={achievement.certificateImage}
                            alt={`${achievement.title} Certificate`}
                            className="w-full h-20 sm:h-24 object-cover group-hover/img:scale-110 transition-all duration-700"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDMwMCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMTUwIiBmaWxsPSIjMWYyOTM3Ii8+CjxwYXRoIGQ9Ik0xMzUgNzVMMTUwIDYwTDE2NSA3NUwxNTAgOTBMMTM1IDc1WiIgZmlsbD0iIzYzNjZmMSIvPgo8dGV4dCB4PSIxNTAiIHk9IjEwNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNlcnRpZmljYXRlPC90ZXh0Pgo8L3N2Zz4=';
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Eye className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      )}

                      {/* Content */}
                      <div className="space-y-4">
                        <h4 className="font-cyber text-lg sm:text-xl text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300">
                          {achievement.title}
                        </h4>

                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span className="font-cyber">{achievement.date}</span>
                          <span className="text-gray-600">•</span>
                          <Building2 className="w-4 h-4" />
                          <span className="font-cyber">{achievement.issuer}</span>
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed">
                          {achievement.description}
                        </p>

                        <div className="pt-4 border-t border-gray-700/30">
                          <div className="flex items-center justify-between">
                            <span className={`text-xs px-3 py-1.5 rounded-lg ${colors.text} bg-gray-800/60 border ${colors.border} uppercase tracking-wider font-cyber`}>
                              {achievement.type}
                            </span>
                            {achievement.featured && (
                              <div className="flex items-center gap-1 px-2 py-1 bg-yellow-500/10 border border-yellow-400/20 rounded-md">
                                <Crown className="w-3 h-3 text-yellow-400" fill="currentColor" />
                                <span className="text-yellow-300 text-xs font-cyber">FEATURED</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className={`mt-24 transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {filters.slice(1).map((filter, index) => {
              const colors = getTypeColor(filter.id as Achievement['type']);
              const IconComponent = filter.icon;
              return (
                <div 
                  key={filter.id}
                  className="group relative"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${colors.bg} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700`} />
                  <div className="relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-gray-700/20 rounded-2xl p-6 text-center group-hover:border-purple-400/30 transition-all duration-500">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${colors.bg} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="text-3xl font-cyber text-white mb-1">{filter.count}</div>
                    <div className="text-sm text-gray-400 font-cyber">{filter.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced CTA Button */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="group relative inline-flex items-center px-8 sm:px-12 py-4 sm:py-6 overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105">
            {/* Background gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-blue-700 to-cyan-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            
          </button>
        </div>
      </div>

      {/* Enhanced Certificate Preview Modal */}
      {previewImage && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="relative max-w-6xl max-h-full">
            {/* Close button */}
            <button 
              onClick={closePreview}
              className="absolute top-2 right-2 sm:-top-16 sm:right-0 p-2 sm:p-3 text-white hover:text-gray-300 transition-colors z-10 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-600/30 hover:border-gray-500/50"
            >
              <X className="w-8 h-8" />
            </button>
            
            {/* Image container with enhanced styling */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-30" />
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-4 border border-gray-600/30">
                <img 
                  src={previewImage}
                  alt="Certificate Preview"
                  className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            
            {/* Floating action buttons */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
              <button className="px-6 py-3 bg-blue-600/80 hover:bg-blue-600 backdrop-blur-sm border border-blue-400/30 rounded-xl text-white font-cyber transition-all duration-300 hover:scale-105">
                <ExternalLink className="w-4 h-4 mr-2 inline" />
                Verify
              </button>
              <button className="px-6 py-3 bg-gray-800/80 hover:bg-gray-700 backdrop-blur-sm border border-gray-600/30 rounded-xl text-white font-cyber transition-all duration-300 hover:scale-105">
                <Award className="w-4 h-4 mr-2 inline" />
                Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button for Quick Access */}
      <div className="fixed bottom-8 right-8 z-40">
        <button className="group p-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-110">
          <Trophy className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default AchievementsSection;