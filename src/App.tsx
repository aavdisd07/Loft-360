import React, { useState, useEffect } from 'react';
// import { ChevronDown, Phone, Mail, MapPin, Trophy, Users, Heart, Star, Menu, X, Feather, Wind, Zap, Camera, MessageCircle, Instagram, Gavel, User } from 'lucide-react';
import { ChevronDown, Phone, Mail, MapPin, Trophy, Users, Heart, Star, Menu, X, Feather, Wind, Zap, Camera, MessageCircle, Instagram, Gavel, User, Crown, Shield, Target, UserCheck, Calendar, Award } from 'lucide-react';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'requirements', 'about', 'achievements', 'breeders', 'sale', 'fame', 'gallery', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    // { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'requirements', label: 'Strategy' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'breeders', label: 'Our Top Breeders' },
    { id: 'sale', label: 'Birds for Sale' },
    { id: 'fame', label: 'Wall of Fame' },
    // { id: 'gallery', label: 'Gallery' },
    // { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Flying Pigeons */}
        <div className="absolute top-20 left-0 animate-fly-across">
          <Feather className="w-8 h-8 text-white/20 transform rotate-45" />
        </div>
        <div className="absolute top-40 right-0 animate-fly-across-reverse animation-delay-2000">
          <Feather className="w-6 h-6 text-purple-300/30 transform -rotate-12" />
        </div>
        <div className="absolute top-60 left-1/4 animate-fly-diagonal animation-delay-4000">
          <Feather className="w-10 h-10 text-blue-300/25 transform rotate-90" />
        </div>

        {/* Floating Particles */}
        <div className="absolute top-1/3 left-1/3 animate-float">
          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-2/3 right-1/4 animate-float animation-delay-1000">
          <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-50"></div>
        </div>
        <div className="absolute top-1/2 left-1/6 animate-float animation-delay-3000">
          <div className="w-1 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-70"></div>
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-gradient-to-r from-purple-900/95 via-blue-900/95 to-purple-900/95 backdrop-blur-lg z-50 shadow-2xl border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <div className="w-20 h-20 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                <img
                  src="/unnamed.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 bg-clip-text text-white font-serif">
                  360 LOFT INDIA
                </h1>
                {/* //  <p className="text-xs text-purple-200 animate-shimmer">Premier Racing Pigeon Club</p> */}
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-purple-300 hover:scale-110 transform ${activeSection === item.id
                    ? 'text-purple-300 scale-110 drop-shadow-glow'
                    : 'text-white/80'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white hover:text-purple-300 transition-colors transform hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 py-4 border-t border-purple-500/30 animate-slide-down">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-3 px-4 text-sm font-medium transition-all duration-300 hover:text-purple-300 hover:bg-purple-800/20 rounded-lg ${activeSection === item.id ? 'text-purple-300 bg-purple-800/30' : 'text-white/80'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-pink-900/40 z-10"></div>
        {/* <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/596792/pexels-photo-596792.jpeg?cs=srgb&dl=pexels-creapattern-187589-596792.jpg&fm=jpg')]  bg-center bg-no-repeat bg-contain sm:bg-cover animate-ken-burns"></div> */}
        <div className="absolute inset-0 bg-[url('/unnamed.png')]  bg-center bg-no-repeat bg-contain sm:bg-cover animate-ken-burns"></div>

        {/* Animated Flying Pigeons */}
        <div className="absolute top-1/4 left-1/4 animate-fly-circle">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-300/20 shadow-2xl">
            <Feather className="w-10 h-10 text-white animate-bounce-slow transform rotate-45" />
          </div>
        </div>

        <div className="absolute top-1/3 right-1/3 animate-fly-figure-eight animation-delay-2000">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-300/20 shadow-xl">
            <Wind className="w-8 h-8 text-white animate-spin-slow" />
          </div>
        </div>

        <div className="absolute bottom-1/3 left-1/3 animate-fly-spiral animation-delay-4000">
          <div className="w-14 h-14 bg-gradient-to-br from-orange-400/30 to-yellow-400/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-orange-300/20 shadow-lg">
            <Zap className="w-7 h-7 text-white animate-pulse" />
          </div>
        </div>

        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-title-entrance bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 bg-clip-text text-white font-serif">
            360 LOFT INDIA
          </h1>
          <p className="text-xl md:text-3xl mb-10 font-light max-w-4xl mx-auto animate-subtitle-entrance text-white leading-relaxed">
            Nestled in the heart of Gangavathi, Karnataka, dedicated to the art and sport of pigeon racing with championship bloodlines and unmatched excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-buttons-entrance">
            <button
              onClick={() => scrollToSection('about')}
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 text-white px-10 py-4 rounded-full font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl shadow-lg animate-pulse-glow"
            >
              Discover Our Legacy
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-transparent px-10 py-4 rounded-full font-semibold transition-all duration-500 transform hover:scale-110 shadow-lg"
            >
              Join Our Community
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 animate-fly-slow">
            <div className="w-4 h-4 bg-purple-400 rounded-full opacity-60"></div>
          </div>
          <div className="absolute top-1/3 right-20 animate-fly-slow animation-delay-1000">
            <div className="w-3 h-3 bg-pink-400 rounded-full opacity-50"></div>
          </div>
          <div className="absolute bottom-20 left-1/4 animate-fly-slow animation-delay-2000">
            <div className="w-5 h-5 bg-blue-400 rounded-full opacity-40"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-fade-in-up">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                About 360 LOFT INDIA
              </h2>
              <p className="text-xl md:text-2xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
                Welcome to 360 Loft India, a dedicated home for elite racing
                pigeons. As passionate fanciers, we focus on breeding, training, and
                racing high-performance pigeons for all distances. With a strong
                commitment to quality, genetics, and care, our loft is built on
                experience, precision, and performance. At 360 Loft India, every bird is raised to compete and excel.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: Users,
                  title: "Expert Team",
                  description: "Our passionate team of pigeon racing experts brings decades of combined experience in breeding, training, and racing championship birds.",
                  gradient: "from-purple-500 to-pink-500",
                  bgGradient: "from-purple-100 to-pink-100"
                },
                {
                  icon: Heart,
                  title: "Premium Care",
                  description: "Every bird receives individual attention with proper nutrition, health monitoring, and training programs tailored to maximize their racing potential.",
                  gradient: "from-pink-500 to-orange-500",
                  bgGradient: "from-pink-100 to-orange-100"
                },
                {
                  icon: Trophy,
                  title: "Proven Results",
                  description: "Our birds have achieved numerous victories in regional and national competitions, establishing our reputation as a premier racing loft.",
                  gradient: "from-orange-500 to-yellow-500",
                  bgGradient: "from-orange-100 to-yellow-100"
                }
              ].map((item, index) => (
                <div key={index} className={`text-center p-8 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-card-entrance border border-white/20`} style={{ animationDelay: `${index * 200}ms` }}>
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-icon-bounce`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-purple-100 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="py-24 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 animate-float">
            <Feather className="w-32 h-32 text-purple-600 transform rotate-12" />
          </div>
          <div className="absolute bottom-20 right-20 animate-float animation-delay-2000">
            <Feather className="w-24 h-24 text-pink-600 transform -rotate-45" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-800 via-pink-700 to-orange-600 bg-clip-text text-transparent mb-6 sm:mb-8">
              Racing Strategy
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
              Essential guidelines and standards for participating in our racing events and breeding programs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {/* Selection of birds */}
            <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 h-full flex flex-col">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg flex-shrink-0">
                <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 flex-shrink-0">
                Selection of birds
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed flex-grow">
                Choosing the right racing pigeons is the foundation of a winning loft & well- known fanciers.Selection should focus on proven performance, strong genetics, and physical qualities like a well muscled body, balanced wing structure, and healthy plumage.
              </p>
            </div>

            {/* Pairing and breeding */}
            <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 h-full flex flex-col">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg flex-shrink-0">
                <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 flex-shrink-0">
                Pairing and breeding
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed flex-grow">
                Successful racing starts with smart pairing and strong breeding.Breeding pairs should be selected based on performance, bloodline, and physical traits like muscle strength, wing balance, and eye sign. Pairing a speed bird with a stamina bird can balance traits for different race distances. A good breeding plan ensures healthy, competitive youngsters with the genetics and structure needed to succeed on the race course.
              </p>
            </div>

            {/* Race preparation and conditions */}
            <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 h-full flex flex-col">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg flex-shrink-0">
                <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 flex-shrink-0">
                Race preparation and conditions
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed flex-grow">
                Proper race preparation is key to peak performance. Birds must follow a structured training schedule combining loft flying and road work to build stamina and orientation. Feeding should be adjusted to increase energy levels leading up to race day. Monitoring weather, wind, and health conditions helps you decide which birds are ready to race. A well-conditioned bird is not just physically fit but also mentally prepared to return home fast and focused.
              </p>
            </div>

            {/* Loft maintenance */}
            <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 h-full flex flex-col">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg flex-shrink-0">
                <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 flex-shrink-0">
                Loft maintenance
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed flex-grow">
                A clean, well-ventilated loft is essential for the health and performance of racing pigeons. Regular cleaning prevents disease, while proper airflow keeps the environment dry and fresh. Disinfect perches, nest boxes, and floors weekly, and control parasites with routine treatments. Consistent loft hygiene reduces stress, boosts immunity, and ensures your birds stay in top racing condition.
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 animate-spin-slow">
            <Trophy className="w-40 h-40 text-orange-600" />
          </div>
          <div className="absolute bottom-1/4 right-1/4 animate-spin-slow animation-delay-3000">
            <Star className="w-32 h-32 text-purple-600" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-fade-in-up">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-800 via-pink-700 to-purple-800 bg-clip-text text-transparent mb-8">
                Race Achievements
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Our proud history of victories and records in pigeon racing competitions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                { number: "15+", label: "Races Won", icon: Trophy, gradient: "from-yellow-500 to-orange-500" },
                { number: "50+", label: "Champion Birds", icon: Star, gradient: "from-purple-500 to-pink-500" },
                { number: "5+", label: "Years Experience", icon: Heart, gradient: "from-pink-500 to-red-500" },
                { number: "5", label: "Records", icon: Trophy, gradient: "from-blue-500 to-purple-500" }
              ].map((stat, index) => (
                <div key={index} className={`text-center p-8 bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-4 animate-card-entrance`} style={{ animationDelay: `${index * 100}ms` }}>
                  <div className={`w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-icon-bounce`}>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3 animate-number-count">{stat.number}</h3>
                  <p className="text-gray-600 font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-slate-800/80 to-purple-900/80 backdrop-blur-md rounded-3xl p-10 shadow-3xl border border-purple-500/20 animate-fade-in-up">
              <h3 className="text-3xl font-bold text-center text-white mb-8 font-serif">Champion Birds & Recent Victories</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Champion Birds */}
                <div>
                  <h4 className="text-xl font-bold text-purple-300 mb-6 flex items-center">
                    <Crown className="w-5 h-5 mr-2" />
                    Champion Birds
                  </h4>
                  <div className="space-y-4">
                    {[
                       {
                        name: "BLUEE",
                        ring: "KKHPF 257",
                        details: "300 KM - 5th/2016, 400 KM 13th/2016, 500 KM 1st/2016",
                        gradient: "from-green-500 to-emerald-500"
                      },
                      {
                        name: "JUNGLEE",
                        ring: "GRPT 792",
                        details: "300 KM - 5th/2016, 400 KM 13th/2016, 500 KM 1st/2016",
                        gradient: "from-green-500 to-emerald-500"
                      },
                      {
                        name: "ARMANI",
                        ring: "GRPT 792",
                        details: "200 KM - 1st/2016, 300 KM 8th/2016, 700 KM 5th/2016",
                        gradient: "from-blue-500 to-cyan-500"
                      },
                      {
                        name: "BLACK JACK",
                        ring: "IN 121460",
                        details: "150 KM - 3rd/2016, 200 KM 1st/2016, 300 KM 2nd/2016, 400 KM 8th/2016",
                        gradient: "from-gray-600 to-gray-800"
                      },
                      {
                        name: "BEAUTY",
                        ring: "KKHPF 268",
                        details: "300 KM - 5th/2016, 400 KM 7th/2016, 500 KM 1st/2016",
                        gradient: "from-pink-500 to-rose-500"
                      }
                    ].map((bird, index) => (
                      <div key={index} className={`p-4 bg-gradient-to-r from-slate-700/50 to-purple-800/50 rounded-xl border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 animate-slide-in-left`} style={{ animationDelay: `${index * 200}ms` }}>
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-bold text-white text-lg">{bird.name}</h5>
                          <span className={`inline-block bg-gradient-to-r ${bird.gradient} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                            {bird.ring}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">{bird.details}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Achievements */}
                <div>
                  <h4 className="text-xl font-bold text-orange-300 mb-6 flex items-center">
                    <Trophy className="w-5 h-5 mr-2" />
                    Top Achievements
                  </h4>
                  <div className="space-y-4">
                    {[
                      {
                        achievement: "1st Position - 500KM Race",
                        bird: "JUNGLE & BEAUTY",
                        year: "2016",
                        gradient: "from-yellow-400 to-orange-400"
                      },
                      {
                        achievement: "1st Position - 200KM Race",
                        bird: "ARMANI & BLACK JACK",
                        year: "2016",
                        gradient: "from-yellow-400 to-orange-400"
                      },
                      {
                        achievement: "2nd Position - 300KM Race",
                        bird: "BLACK JACK",
                        year: "2016",
                        gradient: "from-gray-400 to-gray-500"
                      },
                      {
                        achievement: "3rd Position - 150KM Race",
                        bird: "BLACK JACK",
                        year: "2016",
                        gradient: "from-orange-400 to-red-400"
                      }
                    ].map((achievement, index) => (
                      <div key={index} className={`p-4 bg-gradient-to-r from-slate-700/50 to-orange-800/50 rounded-xl border border-orange-400/20 hover:border-orange-400/40 transition-all duration-300 animate-slide-in-right`} style={{ animationDelay: `${index * 200}ms` }}>
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-bold text-white">{achievement.achievement}</h5>
                          <span className={`inline-block bg-gradient-to-r ${achievement.gradient} text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse-glow`}>
                            {achievement.year}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Bird: <span className="font-semibold text-orange-300">{achievement.bird}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Top Breeders Section */}
      <section id="breeders" className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              <div className="w-1 h-1 bg-purple-400 rounded-full opacity-60"></div>
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-fade-in-up">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Our Top Breeders
              </h2>
              <p className="text-xl md:text-2xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
                Meet our champion breeding birds, each selected for their exceptional genetics and proven racing lineage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Thunder Wing",
                  breed: "Belgian Racing Homer",
                  achievement: "1st Place - 500km Race 2024",
                  description: "Exceptional speed and endurance with outstanding homing instincts.",
                  gradient: "from-purple-600 to-blue-600",
                  borderGradient: "from-purple-400 to-blue-400"
                },
                {
                  name: "Golden Arrow",
                  breed: "Dutch Racing Pigeon",
                  achievement: "Regional Champion 2023",
                  description: "Consistent performer with remarkable navigation abilities.",
                  gradient: "from-pink-600 to-orange-600",
                  borderGradient: "from-pink-400 to-orange-400"
                },
                {
                  name: "Storm Rider",
                  breed: "German Racing Homer",
                  achievement: "Top 3 - National Championship",
                  description: "Powerful flyer with excellent weather adaptation skills.",
                  gradient: "from-blue-600 to-cyan-600",
                  borderGradient: "from-blue-400 to-cyan-400"
                },
                {
                  name: "Swift Shadow",
                  breed: "English Racing Pigeon",
                  achievement: "Speed Champion 2024",
                  description: "Lightning-fast sprinter with perfect racing form.",
                  gradient: "from-indigo-600 to-purple-600",
                  borderGradient: "from-indigo-400 to-purple-400"
                },
                {
                  name: "Wind Dancer",
                  breed: "Belgian Hybrid",
                  achievement: "Distance Record Holder",
                  description: "Exceptional long-distance racer with incredible stamina.",
                  gradient: "from-orange-600 to-red-600",
                  borderGradient: "from-orange-400 to-red-400"
                },
                {
                  name: "Royal Fleet",
                  breed: "Elite Racing Homer",
                  achievement: "Multiple Race Winner",
                  description: "Consistent top performer across various race distances.",
                  gradient: "from-teal-600 to-green-600",
                  borderGradient: "from-teal-400 to-green-400"
                }
              ].map((bird, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-3xl p-8 hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 animate-card-entrance border-2 border-gradient-to-r ${bird.borderGradient}`} style={{ animationDelay: `${index * 150}ms` }}>
                  <div className={`w-full h-56 bg-gradient-to-br ${bird.gradient} rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden shadow-xl`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                    <Feather className="w-16 h-16 text-white animate-float transform rotate-12" />
                    <div className="absolute top-4 right-4">
                      <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{bird.name}</h3>
                  <p className="text-purple-300 font-semibold mb-3 text-lg">{bird.breed}</p>
                  <div className="flex items-center mb-4">
                    <Trophy className="w-5 h-5 text-yellow-400 mr-3 animate-bounce-slow" />
                    <span className="text-sm text-purple-200">{bird.achievement}</span>
                  </div>
                  <p className="text-purple-100 text-sm leading-relaxed">{bird.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Birds for Sale Section */}
      <section id="sale" className="py-24 bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              <div className="w-1 h-1 bg-green-400 rounded-full opacity-60"></div>
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-fade-in-up">
              {/* <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Birds for Sale
              </h2> */}
              <div className="flex items-center justify-center mb-8">
                <Gavel className="w-12 h-12 text-yellow-400 mr-4 animate-bounce-slow" />
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                  Auction</h2>
                {/* <h2 className="text-4xl font-bold text-yellow-400 animate-pulse-glow">AUCTION</h2> */}
              </div>
              <p className="text-xl md:text-2xl text-green-200 max-w-4xl mx-auto leading-relaxed">
                Premium racing pigeons available through our exclusive auction system.
              </p>
            </div>

            {/* Members Selling Birds */}
            <div className="mb-16">
              <h4 className="text-3xl font-bold text-center text-white mb-12">Fancier</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: "Rajesh Kumar", specialty: "Speed Champions", birds: 5 },
                  { name: "Suresh Patil", specialty: "Distance Racers", birds: 8 },
                  { name: "Mahesh Singh", specialty: "Breeding Stock", birds: 6 },
                  { name: "Vikram Reddy", specialty: "Young Birds", birds: 12 }
                ].map((member, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-card-entrance border border-white/20" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="text-xl font-bold text-white mb-2">{member.name}</h5>
                    <p className="text-green-300 text-sm mb-2">{member.specialty}</p>
                    <span className="inline-block bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs">
                      {member.birds} Birds Available
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Birds for Sale */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Young Champion",
                  breed: "Belgian Racing Homer",
                  age: "6 months",
                  price: "₹15,000",
                  seller: "Rajesh Kumar",
                  features: ["Proven bloodline", "Health certified", "Training started"],
                  gradient: "from-green-600 to-teal-600",
                  priceGradient: "from-green-500 to-emerald-500"
                },
                {
                  name: "Speed Demon",
                  breed: "Dutch Racing Pigeon",
                  age: "8 months",
                  price: "₹18,000",
                  seller: "Suresh Patil",
                  features: ["Fast learner", "Excellent form", "Race ready"],
                  gradient: "from-teal-600 to-blue-600",
                  priceGradient: "from-teal-500 to-blue-500"
                },
                {
                  name: "Elite Performer",
                  breed: "German Racing Homer",
                  age: "1 year",
                  price: "₹25,000",
                  seller: "Mahesh Singh",
                  features: ["Competition proven", "Strong genetics", "Top performer"],
                  gradient: "from-blue-600 to-indigo-600",
                  priceGradient: "from-blue-500 to-indigo-500"
                }
              ].map((bird, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-3xl p-8 hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 animate-card-entrance border border-white/20`} style={{ animationDelay: `${index * 200}ms` }}>
                  <div className={`w-full h-56 bg-gradient-to-br ${bird.gradient} rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden shadow-xl`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                    <Feather className="w-16 h-16 text-white animate-bounce-slow transform -rotate-12" />
                    <div className="absolute top-4 left-4">
                      <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-white text-xs font-semibold">AUCTION</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{bird.name}</h3>
                  <p className="text-green-300 font-semibold mb-2 text-lg">{bird.breed}</p>
                  <p className="text-teal-200 mb-2">Age: {bird.age}</p>
                  <p className="text-blue-200 mb-4 text-sm">Seller: {bird.seller}</p>
                  <div className="mb-6">
                    {bird.features.map((feature, idx) => (
                      <span key={idx} className="inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full mr-2 mb-2 backdrop-blur-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-3xl font-bold bg-gradient-to-r ${bird.priceGradient} bg-clip-text text-transparent animate-pulse-glow`}>{bird.price}</span>
                    <button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-400 hover:to-teal-400 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg font-semibold">
                      Bid Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wall of Fame */}
      <section id="fame" className="py-24 bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 animate-spin-slow">
            <Star className="w-48 h-48 text-yellow-600" />
          </div>
          <div className="absolute bottom-20 right-20 animate-spin-slow animation-delay-2000">
            <Trophy className="w-36 h-36 text-orange-600" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-fade-in-up">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-800 via-orange-700 to-red-800 bg-clip-text text-transparent mb-8">
                Wall of Fame
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Honoring our legendary champion birds and their remarkable achievements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Legend Master",
                  years: "2018-2022",
                  achievements: ["National Champion 2020", "Speed Record Holder", "Hall of Fame Inductee"],
                  legacy: "Retired champion with 45 race victories",
                  gradient: "from-yellow-500 to-orange-500"
                },
                {
                  name: "Golden Hero",
                  years: "2019-2023",
                  achievements: ["Regional Champion 2021", "Distance King", "Breeding Stallion"],
                  legacy: "Exceptional long-distance performer",
                  gradient: "from-orange-500 to-red-500"
                },
                {
                  name: "Storm King",
                  years: "2017-2021",
                  achievements: ["Weather Champion", "Consistent Winner", "Legendary Bloodline"],
                  legacy: "Undefeated in adverse conditions",
                  gradient: "from-red-500 to-pink-500"
                }
              ].map((legend, index) => (
                <div key={index} className={`bg-white rounded-3xl p-8 shadow-2xl border-4 border-gradient-to-r from-yellow-400 to-orange-400 hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 animate-card-entrance`} style={{ animationDelay: `${index * 250}ms` }}>
                  <div className={`w-full h-56 bg-gradient-to-br ${legend.gradient} rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden shadow-xl`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
                    <Star className="w-20 h-20 text-white animate-spin-slow" />
                    <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-sm rounded-full p-2">
                      <Trophy className="w-6 h-6 text-white animate-bounce-slow" />
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-white text-xs font-bold">LEGEND</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{legend.name}</h3>
                  <p className="text-orange-600 font-semibold mb-4 text-lg">{legend.years}</p>
                  <div className="mb-6">
                    {legend.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center mb-2">
                        <Trophy className="w-5 h-5 text-yellow-500 mr-3 animate-bounce-slow" />
                        <span className="text-sm text-gray-700 font-medium">{achievement}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-600 italic text-sm leading-relaxed bg-gradient-to-r from-yellow-50 to-orange-50 p-3 rounded-lg">{legend.legacy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-purple-800/50"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
              <User className="w-8 h-8 text-purple-400 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold text-white font-serif">FOUNDER</h2>
            </div>
            {/* <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div> */}
          </div>

          <div className="bg-gradient-to-br from-slate-800/80 to-purple-900/80 backdrop-blur-md rounded-3xl p-6 md:p-12 shadow-3xl border border-purple-500/20 animate-card-entrance">
            <div className="grid md:grid-cols-2 gap-4 items-center">
              <div className="text-center md:text-left">
                <div className="mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 font-serif">PRATHAM HIRAL</h3>
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    <Crown className="w-5 h-5 text-purple-400 mr-2" />
                    <p className="text-purple-300 font-semibold">Founder & Visionary</p>
                  </div>
                  <div className="flex items-center justify-center md:justify-start mb-6">
                    <Shield className="w-5 h-5 text-pink-400 mr-2" />
                    <p className="text-pink-300 font-medium">Admin & System Manager of IDI ONE LOFT INDIA</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    The founder of 360 Loft India, <span className="text-purple-200 font-semibold">PRATHAM HIRAL</span> is a passionate and dedicated racing pigeon fancier with a deep understanding of breeding, training, and competitive strategy.
                  </p>
                  <p>
                    With years of hands-on experience and a sharp eye for quality bloodlines, he has built 360 Loft India into a trusted name in the pigeon racing community.
                  </p>
                  <p className="text-purple-200 font-medium">
                    His vision is to raise world-class racers and promote the sport across India.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="flex items-center bg-purple-600/20 px-4 py-2 rounded-full">
                    <Target className="w-4 h-4 text-purple-400 mr-2" />
                    <span className="text-purple-300 text-sm font-medium">Expert Breeder</span>
                  </div>
                  <div className="flex items-center bg-pink-600/20 px-4 py-2 rounded-full">
                    <Zap className="w-4 h-4 text-pink-400 mr-2" />
                    <span className="text-pink-300 text-sm font-medium">Training Specialist</span>
                  </div>
                  <div className="flex items-center bg-indigo-600/20 px-4 py-2 rounded-full">
                    <Trophy className="w-4 h-4 text-indigo-400 mr-2" />
                    <span className="text-indigo-300 text-sm font-medium">Racing Champion</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-60 h-60 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-3xl">
                    <div className="text-center text-white">
                    <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s"
    alt="Team Member"
    className="w-60 h-60 rounded-full object-cover border-2 border-white shadow"
  />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Backbone Section */}
      <section id="backbone" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-purple-900/30 to-slate-900/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-purple-400 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold text-white font-serif">BACK BONE</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              At 360 Loft India, our team is united by a shared passion for racing pigeons. From expert breeders and caretakers to training specialists, every member plays a key role in maintaining the health, performance, and success of our birds. With dedication, discipline, and teamwork, we strive to achieve excellence in every race and breeding season.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Wilson Sir */}
            <div className="bg-gradient-to-br from-slate-800/80 to-purple-900/80 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-purple-500/20 animate-card-entrance hover:scale-102 transition-transform duration-300">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s"
                    alt="Team Member"
                    className="w-32 h-32 rounded-full object-cover border-2 border-white shadow"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-serif">WILSON SIR</h3>
                <div className="flex items-center justify-center mb-2">
                  <UserCheck className="w-4 h-4 text-blue-400 mr-2" />
                  <p className="text-blue-300 text-sm font-medium">KRPC Bangalore Club Member</p>
                </div>
                <div className="flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-purple-400 mr-2" />
                  <p className="text-purple-300 text-sm font-medium">15+ Years Experience</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed text-center">
                Expert in breeding and birds with 15+ years of experience. He has helped me achieve whatever 360 Loft India has done till now.
              </p>
              <div className="mt-4 flex justify-center">
                <div className="flex items-center bg-blue-600/20 px-3 py-1 rounded-full">
                  <Heart className="w-3 h-3 text-blue-400 mr-1" />
                  <span className="text-blue-300 text-xs font-medium">Breeding Expert</span>
                </div>
              </div>
            </div>

            {/* Vinod Sir */}
            <div className="bg-gradient-to-br from-slate-800/80 to-purple-900/80 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-purple-500/20 animate-card-entrance animation-delay-300 hover:scale-102 transition-transform duration-300">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s"
                    alt="Team Member"
                    className="w-32 h-32 rounded-full object-cover border-2 border-white shadow"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-serif">VINOD SIR</h3>
                <div className="flex items-center justify-center mb-2">
                  <UserCheck className="w-4 h-4 text-green-400 mr-2" />
                  <p className="text-green-300 text-sm font-medium">KRPC Bangalore Club Member</p>
                </div>
                <div className="flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-purple-400 mr-2" />
                  <p className="text-purple-300 text-sm font-medium">20+ Years Experience</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed text-center">
                Expert in racing, pairing, breeding and maintenance of the loft. He has helped me in building my racing team and birds. He has played an important role in what I have achieved till date.
              </p>
              <div className="mt-4 flex justify-center">
                <div className="flex items-center bg-green-600/20 px-3 py-1 rounded-full">
                  <Trophy className="w-3 h-3 text-green-400 mr-1" />
                  <span className="text-green-300 text-xs font-medium">Racing Expert</span>
                </div>
              </div>
            </div>

            {/* Viki Sir */}
            <div className="bg-gradient-to-br from-slate-800/80 to-purple-900/80 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-purple-500/20 animate-card-entrance animation-delay-1000 hover:scale-102 transition-transform duration-300">
              <div className="text-center mb-6">
                <div className="w-32 h-32 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s"
                    alt="Team Member"
                    className="w-32 h-32 rounded-full object-cover border-2 border-white shadow"
                  />
                  </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-serif">VIKI SIR</h3>
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-4 h-4 text-yellow-400 mr-2" />
                  <p className="text-yellow-300 text-sm font-medium">World Renowned</p>
                </div>
                <div className="flex items-center justify-center">
                  <Crown className="w-4 h-4 text-red-400 mr-2" />
                  <p className="text-red-300 text-sm font-medium">IDI Founder</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed text-center">
                Very well-known around the world for his achievements and quality of birds. He has been the only person in India to start one loft race in India (IDI). I thank sir for all his support and guidance till date.
              </p>
              <div className="mt-4 flex justify-center">
                <div className="flex items-center bg-yellow-600/20 px-3 py-1 rounded-full">
                  <Award className="w-3 h-3 text-yellow-400 mr-1" />
                  <span className="text-yellow-300 text-xs font-medium">Global Expert</span>
                </div>
              </div>
            </div>

            {/* Shivu Murthi */}
            <div className="bg-gradient-to-br from-slate-800/80 to-purple-900/80 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-purple-500/20 animate-card-entrance animation-delay-300 hover:scale-102 transition-transform duration-300">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s"
                    alt="Team Member"
                    className="w-32 h-32 rounded-full object-cover border-2 border-white shadow"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-serif">SHIVU MURTHI</h3>
                <div className="flex items-center justify-center">
                  <Feather className="w-4 h-4 text-indigo-400 mr-2" />
                  <p className="text-indigo-300 text-sm font-medium">Loft Jockey</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed text-center">
                My loft jockey who takes care of my birds and maintains the birds with dedication and expertise.
              </p>
              <div className="mt-4 flex justify-center">
                <div className="flex items-center bg-indigo-600/20 px-3 py-1 rounded-full">
                  <Heart className="w-3 h-3 text-indigo-400 mr-1" />
                  <span className="text-indigo-300 text-xs font-medium">Bird Care</span>
                </div>
              </div>
            </div>

            {/* Marya Dolly */}
            <div className="bg-gradient-to-br from-slate-800/80 to-purple-900/80 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-purple-500/20 animate-card-entrance animation-delay-1000 hover:scale-102 transition-transform duration-300">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-pink-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s"
                    alt="Team Member"
                    className="w-32 h-32 rounded-full object-cover border-2 border-white shadow"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-serif">MARYA DOLLY</h3>
                <div className="flex items-center justify-center">
                  <Target className="w-4 h-4 text-pink-400 mr-2" />
                  <p className="text-pink-300 text-sm font-medium">Training Head</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed text-center">
                My loft training head who helps me during the racing season with expertise and dedication.
              </p>
              <div className="mt-4 flex justify-center">
                <div className="flex items-center bg-pink-600/20 px-3 py-1 rounded-full">
                  <Zap className="w-3 h-3 text-pink-400 mr-1" />
                  <span className="text-pink-300 text-xs font-medium">Training Expert</span>
                </div>
              </div>
            </div>

            {/* Mahesh RX */}
            <div className="bg-gradient-to-br from-slate-800/80 to-purple-900/80 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-purple-500/20 animate-card-entrance animation-delay-2000 hover:scale-102 transition-transform duration-300">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-teal-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s"
                    alt="Team Member"
                    className="w-32 h-32 rounded-full object-cover border-2 border-white shadow"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-serif">MAHESH RX</h3>
                <div className="flex items-center justify-center">
                  <Trophy className="w-4 h-4 text-teal-400 mr-2" />
                  <p className="text-teal-300 text-sm font-medium">Racing Specialist</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed text-center">
                Takes care of my training and my racing season with professional expertise and commitment.
              </p>
              <div className="mt-4 flex justify-center">
                <div className="flex items-center bg-teal-600/20 px-3 py-1 rounded-full">
                  <Target className="w-3 h-3 text-teal-400 mr-1" />
                  <span className="text-teal-300 text-xs font-medium">Race Training</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Team Members */}
          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Santhu S */}
            <div className="bg-gradient-to-br from-slate-800/80 to-purple-900/80 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-purple-500/20 animate-card-entrance animation-delay-300 hover:scale-102 transition-transform duration-300">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s"
                    alt="Team Member"
                    className="w-24 h-24 rounded-full object-cover border-2 border-white shadow"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-serif">SANTHU S</h3>
                <p className="text-gray-400 text-sm">Team Member</p>
              </div>
            </div>

            {/* Shivu */}
            <div className="bg-gradient-to-br from-slate-800/80 to-purple-900/80 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-purple-500/20 animate-card-entrance animation-delay-1000 hover:scale-102 transition-transform duration-300">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s"
                    alt="Team Member"
                    className="w-24 h-24 rounded-full object-cover border-2 border-white shadow"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-serif">SHIVU</h3>
                <p className="text-gray-400 text-sm">Team Member</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            >
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-fade-in-up">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                360 Loft Gallery
              </h2>
              <p className="text-xl md:text-2xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
                Capturing moments of excellence, training sessions, and our beautiful racing pigeons in action.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Training Session",
                  description: "Morning training with our champion racers",
                  image: "https://img.freepik.com/premium-photo/full-body-speed-racing-pigeon-bird-home-loft_34013-327.jpg",
                  gradient: "from-purple-600 to-blue-600"
                },
                {
                  title: "Racing Champions",
                  description: "Our top performing birds ready for competition",
                  image: "https://t3.ftcdn.net/jpg/02/92/29/50/360_F_292295043_y9UcUE9puMMKiDQ3FcVCDB2IXYVAJUJ8.jpg",
                  gradient: "from-blue-600 to-cyan-600"
                },
                {
                  title: "Loft Facilities",
                  description: "State-of-the-art breeding and training facilities",
                  image: "https://img.freepik.com/premium-photo/full-body-speed-racing-pigeon-bird-home-loft_34013-327.jpg",
                  gradient: "from-cyan-600 to-teal-600"
                },
                {
                  title: "Victory Celebration",
                  description: "Celebrating another championship win",
                  image: "https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/b/0e/b0ee422e-442b-566d-a72b-480adc8c7835/571fb050f2284.image.jpg?resize=750%2C500",
                  gradient: "from-teal-600 to-green-600"
                },
                {
                  title: "Young Birds",
                  description: "Next generation of racing champions",
                  image: "https://assets1.cbsnewsstatic.com/hub/i/2024/10/20/7128a02a-fb59-4d1d-beeb-491aa4902830/pigeons-1920.jpg",
                  gradient: "from-green-600 to-yellow-600"
                },
                {
                  title: "Team Members",
                  description: "Our dedicated team of pigeon racing experts",
                  image: "https://assets1.cbsnewsstatic.com/hub/i/2024/10/20/7128a02a-fb59-4d1d-beeb-491aa4902830/pigeons-1920.jpg",
                  gradient: "from-yellow-600 to-orange-600"
                }
              ].map((item, index) => (
                <div key={index} className={`group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 animate-card-entrance`} style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="aspect-w-16 aspect-h-12 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center mb-2">
                      <Camera className="w-5 h-5 mr-2 " />
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clubs Section */}
      <section id="clubs" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-slate-900/30"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-purple-400 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold text-white font-serif">CLUBS TAKING PART IN</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* GRPT */}
            <div className="bg-gradient-to-br from-slate-800/80 to-purple-900/80 backdrop-blur-md rounded-3xl p-8 shadow-3xl border border-purple-500/20 animate-card-entrance hover:scale-102 transition-transform duration-300">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                  <Shield className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif">GANGAVATHI RACING PIGEON TRUST</h3>
                <p className="text-green-300 text-lg font-semibold mb-2">(GRPT)</p>
                <div className="flex items-center justify-center mb-6">
                  <Calendar className="w-5 h-5 text-purple-400 mr-2" />
                  <p className="text-purple-300 font-medium">SINCE 2019</p>
                </div>
                <div className="flex justify-center">
                  <div className="flex items-center bg-green-600/20 px-4 py-2 rounded-full">
                    <MapPin className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-green-300 text-sm font-medium">Gangavathi, Karnataka</span>
                  </div>
                </div>
              </div>
            </div>

            {/* IDI */}
            <div className="bg-gradient-to-br from-slate-800/80 to-purple-900/80 backdrop-blur-md rounded-3xl p-8 shadow-3xl border border-purple-500/20 animate-card-entrance animation-delay-300 hover:scale-102 transition-transform duration-300">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                  <Trophy className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif">INTERNATIONAL DERBY INDIA</h3>
                <p className="text-purple-300 text-lg font-semibold mb-2">ONE LOFT INDIA</p>
                <div className="flex items-center justify-center mb-6">
                  <Calendar className="w-5 h-5 text-pink-400 mr-2" />
                  <p className="text-pink-300 font-medium">SINCE 2020</p>
                </div>
                <div className="flex justify-center">
                  <div className="flex items-center bg-purple-600/20 px-4 py-2 rounded-full">
                    <Star className="w-4 h-4 text-purple-400 mr-2" />
                    <span className="text-purple-300 text-sm font-medium">International Competition</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 animate-float">
            <MessageCircle className="w-32 h-32 text-emerald-600 transform rotate-12" />
          </div>
          <div className="absolute bottom-20 right-20 animate-float animation-delay-2000">
            <Star className="w-24 h-24 text-teal-600 transform -rotate-45" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-fade-in-up">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-800 via-teal-700 to-cyan-800 bg-clip-text text-transparent mb-8">
                Reviews & Testimonials
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                What our community members and fellow racing enthusiasts say about 360 LOFT INDIA.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  name: "Arjun Sharma",
                  location: "Bangalore",
                  rating: 5,
                  review: "Exceptional breeding program! The birds I purchased from 360 LOFT INDIA have consistently performed well in races. Their expertise and care for the birds is evident.",
                  gradient: "from-emerald-500 to-teal-500"
                },
                {
                  name: "Priya Patel",
                  location: "Mumbai",
                  rating: 5,
                  review: "Outstanding service and healthy birds. The team's knowledge about pigeon racing is impressive. Highly recommend for anyone serious about the sport.",
                  gradient: "from-teal-500 to-cyan-500"
                },
                {
                  name: "Ravi Kumar",
                  location: "Chennai",
                  rating: 5,
                  review: "Best loft in Karnataka! Their champion bloodlines speak for themselves. Professional approach and excellent after-sale support.",
                  gradient: "from-cyan-500 to-blue-500"
                },
                {
                  name: "Deepak Singh",
                  location: "Hyderabad",
                  rating: 5,
                  review: "Amazing experience! The birds are well-trained and healthy. The team's passion for pigeon racing is contagious. Will definitely return for more birds.",
                  gradient: "from-blue-500 to-indigo-500"
                },
                {
                  name: "Meera Reddy",
                  location: "Pune",
                  rating: 5,
                  review: "Top-quality birds and excellent guidance. 360 LOFT INDIA helped me get started in pigeon racing with the right birds and training tips.",
                  gradient: "from-indigo-500 to-purple-500"
                },
                {
                  name: "Sunil Joshi",
                  location: "Ahmedabad",
                  rating: 5,
                  review: "Fantastic loft with champion birds! Their breeding program produces consistent winners. Great value for money and professional service.",
                  gradient: "from-purple-500 to-pink-500"
                }
              ].map((review, index) => (
                <div key={index} className={`bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-card-entrance`} style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${review.gradient} rounded-full flex items-center justify-center mr-4 shadow-lg`}>
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">{review.name}</h4>
                      <p className="text-gray-600">{review.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current animate-bounce-slow" style={{ animationDelay: `${i * 100}ms` }} />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">"{review.review}"</p>
                </div>
              ))}
            </div>

            {/* Leave a Review Form */}
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-10 shadow-2xl animate-fade-in-up">
              <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-emerald-800 to-teal-700 bg-clip-text text-transparent mb-8">Leave Your Review</h3>
              <form className="max-w-2xl mx-auto space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-white border border-emerald-200 rounded-2xl focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                  />
                  <input
                    type="text"
                    placeholder="Your Location"
                    className="w-full px-6 py-4 bg-white border border-emerald-200 rounded-2xl focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-700 font-medium">Rating:</span>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-8 h-8 text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors duration-200" />
                  ))}
                </div>
                <textarea
                  placeholder="Share your experience with 360 LOFT INDIA..."
                  rows={5}
                  className="w-full px-6 py-4 bg-white border border-emerald-200 rounded-2xl focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:via-teal-500 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-2xl animate-pulse-glow"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            >
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-fade-in-up">
              <h2 className="text-5xl md:text-6xl font-bold mb-8">Get In Touch</h2>
              <p className="text-xl md:text-2xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
                Ready to join the world of pigeon racing? Contact us to learn more about our birds and training programs.
              </p>
            </div>

            {/* Two Columns */}
            <div className="grid md:grid-cols-2 gap-16">
              {/* Left: Contact Info */}
              <div className="animate-slide-in-left">
                <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {[
                    { icon: MapPin, title: "Location", info: "Gangavathi, Karnataka, India", gradient: "from-purple-500 to-pink-500" },
                    { icon: Phone, title: "Phone", info: "+91 98765 43210", gradient: "from-pink-500 to-orange-500" },
                    { icon: Mail, title: "Email", info: "info@360loftindia.com", gradient: "from-orange-500 to-yellow-500" },
                    { icon: Instagram, title: "Instagram", info: "@360_loft_india", gradient: "from-pink-500 to-purple-500" }
                  ].map((contact, index) => (
                    <div key={index} className={`flex items-start p-6 bg-white/10 backdrop-blur-lg rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-card-entrance`} style={{ animationDelay: `${index * 200}ms` }}>
                      <div className={`w-12 h-12 bg-gradient-to-br ${contact.gradient} rounded-full flex items-center justify-center mr-4 shadow-lg animate-icon-bounce`}>
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg text-purple-200">{contact.title}</p>
                        {contact.title === "Instagram" ? (
                          <a
                            href="https://www.instagram.com/360_loft_india?igsh=MXZqM3dhc3U0eG95eQ=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-pink-300 transition-colors duration-300"
                          >
                            {contact.info}
                          </a>
                        ) : (
                          <p className="text-white">{contact.info}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Form */}
              <div className="animate-slide-in-right">
                <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent">
                  Send a Message
                </h3>
                <form className="space-y-6">
                  {[
                    { type: "text", placeholder: "Your Name" },
                    { type: "email", placeholder: "Your Email" },
                    { type: "tel", placeholder: "Your Phone" }
                  ].map((field, index) => (
                    <div key={index} className={`animate-slide-in-right`} style={{ animationDelay: `${index * 100}ms` }}>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg border border-purple-500/30 rounded-2xl focus:outline-none focus:border-purple-400 focus:bg-white/20 text-white placeholder-purple-300 transition-all duration-300 hover:bg-white/15"
                      />
                    </div>
                  ))}
                  <div className="animate-slide-in-right animation-delay-300">
                    <textarea
                      placeholder="Your Message"
                      rows={5}
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg border border-purple-500/30 rounded-2xl focus:outline-none focus:border-purple-400 focus:bg-white/20 text-white placeholder-purple-300 transition-all duration-300 hover:bg-white/15 resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-2xl animate-pulse-glow"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* New: Visit Our Loft (centered below) */}
            <div className="mt-16 flex justify-center">
              <div className="p-8 bg-gradient-to-br from-purple-800/50 to-pink-800/50 backdrop-blur-lg rounded-3xl border border-purple-500/30 animate-fade-in-up w-full max-w-2xl">
                <h4 className="text-2xl font-bold mb-6 text-purple-200">Visit Our Loft</h4>
                <p className="text-purple-100 mb-6 leading-relaxed">
                  We welcome fellow pigeon racing enthusiasts to visit our facility. Please call ahead to schedule your visit.
                </p>
                <div className="text-sm text-purple-200 space-y-2">
                  <p className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                    Visiting Hours: 9:00 AM - 5:00 PM (Daily)
                  </p>
                  <p className="flex items-center">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 animate-pulse"></div>
                    Closed on Major Holidays
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 animate-float">
            <Feather className="w-16 h-16 text-purple-400" />
          </div>
          <div className="absolute bottom-10 right-10 animate-float animation-delay-2000">
            <Heart className="w-12 h-12 text-pink-400" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-4 mb-8 animate-fade-in-up">
              <div className="w-24 h-24 flex items-center justify-center p-2">
                <img
                  src="/unnamed.png"
                  alt="360 LOFT INDIA Logo"
                  className="w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 bg-clip-text text-white font-serif">360 LOFT INDIA</h3>
                {/* <p className="text-purple-200 animate-shimmer">Premier Racing Pigeon Club</p> */}
              </div>
            </div>
            <p className="text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed text-lg">
              Dedicated to the art and sport of pigeon racing. Whether you're a fellow fancier or simply curious about the world's fastest feathered athletes, we invite you to explore our loft and share in our passion.
            </p>
            <div className="border-t border-purple-500/30 pt-8">
              <p className="text-purple-200">
                © 2025 360 LOFT INDIA. All rights reserved. | Gangavathi, Karnataka, India
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;