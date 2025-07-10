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
      const sections = ['about',
        'founder',
        'secretary',
        'achievements',
        'breeders',
        'clubs',
        'fame',
        'gallery',
        'auction',
        'reviews',
        'contact'];
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
    { id: 'about', label: 'About' },
    // { id: 'founder', label: 'Founder & Backbone' },
    // { id: 'secretary', label: 'Racing Secretary' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'breeders', label: 'Top Breeders' },
    { id: 'clubs', label: 'Participating Clubs' },
    { id: 'fame', label: 'Wall of Fame' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'auction', label: 'Auction' },
    { id: 'reviews', label: 'Reviews' },
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
        <div className="container mx-auto px-4 py-0">
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

            <div className="grid md:grid-cols-3 gap-6">
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
                <div
                  key={index}
                  className={`text-center p-4 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-card-entrance border border-white/20`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-icon-bounce`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-purple-100 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* Founder Section */}
      <section id="founder" className="py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/60 to-purple-900/60"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <User className="w-6 h-6 text-purple-400 mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold text-white font-serif tracking-tight">Founder</h2>
            </div>
          </div>

          <div className="bg-slate-900/80 backdrop-blur rounded-2xl p-6 md:p-10 shadow-xl border border-purple-500/10">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              {/* Image */}
              <div className="md:col-span-2 flex justify-center">
                <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s"
                    alt="Pratham Hiral"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="md:col-span-3 text-center md:text-left space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white font-serif">Pratham Hiral</h3>
                <p className="text-purple-300 font-semibold flex items-center justify-center md:justify-start">
                  <Crown className="w-4 h-4 mr-2 text-purple-400" /> Founder & Visionary
                </p>
                <p className="text-pink-300 font-medium flex items-center justify-center md:justify-start">
                  <Shield className="w-4 h-4 mr-2 text-pink-400" /> Admin – IDI One Loft India
                </p>

                <p className="text-gray-300">
                  A passionate and dedicated racing pigeon fancier, <span className="text-purple-200 font-medium">Pratham Hiral</span> brings a wealth of knowledge in breeding, training, and strategic competition.
                </p>
                <p className="text-gray-400">
                  With deep experience and a keen eye for bloodlines, he has positioned 360 Loft India as a leader in India’s pigeon racing scene.
                </p>
                <p className="text-purple-200 font-medium">
                  His mission: raise world-class racers and elevate the sport across India.
                </p>

                <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
                  <div className="flex items-center bg-purple-700/20 px-3 py-1.5 rounded-full">
                    <Target className="w-4 h-4 text-purple-400 mr-2" />
                    <span className="text-purple-200 text-sm font-medium">Expert Breeder</span>
                  </div>
                  <div className="flex items-center bg-pink-600/20 px-3 py-1.5 rounded-full">
                    <Zap className="w-4 h-4 text-pink-400 mr-2" />
                    <span className="text-pink-200 text-sm font-medium">Training Specialist</span>
                  </div>
                  <div className="flex items-center bg-indigo-600/20 px-3 py-1.5 rounded-full">
                    <Trophy className="w-4 h-4 text-indigo-400 mr-2" />
                    <span className="text-indigo-200 text-sm font-medium">Racing Champion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Backbone Section */}
      <section id="backbone" className="py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-purple-900/30 to-slate-900/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-10 animate-fade-in-up">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-7 h-7 text-purple-400 mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold text-white font-serif">Backbone</h2>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
              Meet the powerhouse behind 360 Loft India – a skilled, passionate team keeping our pigeons at peak performance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "WILSON SIR",
                role: "Breeding Expert",
                exp: "15+ Years",
                club: "KRPC Bangalore Club Member",
                tag: "Breeding Expert",
                tagColor: "blue",
                icon: <Heart className="w-4 h-4 text-blue-400 mr-1" />,
              },
              {
                name: "VINOD SIR",
                role: "Racing Expert",
                exp: "20+ Years",
                club: "KRPC Bangalore Club Member",
                tag: "Racing Expert",
                tagColor: "green",
                icon: <Trophy className="w-4 h-4 text-green-400 mr-1" />,
              },
              {
                name: "VIKI SIR",
                role: "Global Expert",
                exp: "IDI Founder",
                club: "World Renowned",
                tag: "Global Expert",
                tagColor: "yellow",
                icon: <Award className="w-4 h-4 text-yellow-400 mr-1" />,
              },
              {
                name: "SHIVU MURTHI",
                role: "Loft Jockey",
                exp: "",
                club: "",
                tag: "Bird Care",
                tagColor: "indigo",
                icon: <Heart className="w-4 h-4 text-indigo-400 mr-1" />,
              },
              {
                name: "MARYA DOLLY",
                role: "Training Head",
                exp: "",
                club: "",
                tag: "Training Expert",
                tagColor: "pink",
                icon: <Zap className="w-4 h-4 text-pink-400 mr-1" />,
              },
              {
                name: "MAHESH RX",
                role: "Racing Specialist",
                exp: "",
                club: "",
                tag: "Race Training",
                tagColor: "teal",
                icon: <Target className="w-4 h-4 text-teal-400 mr-1" />,
              }
            ].map(({ name, role, exp, club, tag, tagColor, icon }, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-slate-800/80 to-purple-900/80 backdrop-blur-md rounded-xl p-5 shadow-xl border border-purple-500/20 animate-fade-in-up`}
              >
                <div className="text-center mb-4">
                  <div className="w-24 h-24 mx-auto mb-2 rounded-full overflow-hidden border-2 border-white shadow-lg bg-gradient-to-br from-purple-500 to-purple-800">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s"
                      alt={name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white font-serif">{name}</h3>
                  {club && <p className="text-sm text-purple-300">{club}</p>}
                  {exp && <p className="text-sm text-blue-300">{exp}</p>}
                </div>
                <p className="text-sm text-gray-300 text-center mb-3">
                  {role === "Breeding Expert"
                    ? "Expert in breeding and loft setup. Key contributor to 360 Loft India's journey."
                    : role === "Racing Expert"
                      ? "Supports in racing, pairing, and team building with immense experience."
                      : role === "Global Expert"
                        ? "Founder of IDI and renowned for world-class racing pigeons and support."
                        : role === "Loft Jockey"
                          ? "Takes care of bird welfare and daily loft operations with discipline."
                          : role === "Training Head"
                            ? "Responsible for training routines and seasonal race prep."
                            : "Plays an integral role in training and maintaining race-readiness."}
                </p>
                <div className="flex justify-center">
                  <div className={`flex items-center bg-${tagColor}-600/20 px-3 py-1 rounded-full`}>
                    {icon}
                    <span className={`text-${tagColor}-300 text-xs font-medium`}>{tag}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Support Team Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { name: "SANTHU S", role: "Team Member", color: "orange" },
              { name: "SHIVU", role: "Team Member", color: "cyan" }
            ].map(({ name, role, color }, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br from-slate-800/80 to-purple-900/80 backdrop-blur-md rounded-xl p-4 shadow-lg border border-purple-500/20`}
              >
                <div className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-2 rounded-full overflow-hidden bg-gradient-to-br from-${color}-600 to-purple-600`}>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s"
                      alt={name}
                      className="w-full h-full object-cover border-2 border-white shadow"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{name}</h3>
                  <p className="text-sm text-gray-400">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Requirements Section */}
      <section id="requirements" className="py-24 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 relative overflow-hidden">
  {/* Floating Decorations */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <div className="absolute top-20 left-20 animate-float">
      <Feather className="w-32 h-32 text-purple-600 rotate-12" />
    </div>
    <div className="absolute bottom-20 right-20 animate-float animation-delay-2000">
      <Feather className="w-24 h-24 text-pink-600 -rotate-45" />
    </div>
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-800 via-pink-700 to-orange-600 bg-clip-text text-transparent mb-6">
          Racing Strategy
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
          Essential guidelines and standards for participating in our racing events and breeding programs.
        </p>
      </div>

      {/* Strategy Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[
          {
            title: "Selection of birds",
            short: "Focus on performance, genetics, and body structure.",
            full: "Choosing the right racing pigeons is the foundation of a winning loft. Selection should focus on proven performance, strong genetics, and physical qualities like a well-muscled body, balanced wing structure, and healthy plumage.",
          },
          {
            title: "Pairing and breeding",
            short: "Smart pairing creates competitive offspring.",
            full: "Successful racing starts with smart pairing and strong breeding. Breeding pairs should be selected based on performance, bloodline, and traits. Pairing a speed bird with a stamina bird balances traits for all distances.",
          },
          {
            title: "Race preparation and conditions",
            short: "Training, nutrition & timing for peak performance.",
            full: "Birds need a structured training schedule combining loft flying and road work. Feeding should be adjusted to increase energy, and weather and health must be monitored before selecting race participants.",
          },
          {
            title: "Loft maintenance",
            short: "Hygiene ensures health and peak fitness.",
            full: "A clean, well-ventilated loft prevents disease and reduces stress. Regular cleaning, disinfection, and parasite control boost immunity and keep pigeons race-ready.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden bg-white/40 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
          >
            {/* Card Top */}
            <div className="p-6 sm:p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm sm:text-base text-gray-700">{item.short}</p>
            </div>

            {/* Slide-up Drawer with Glass Effect */}
            <div className="absolute bottom-0 left-0 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-20">
              <div className="bg-white/70 backdrop-blur-xl border-t border-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 rounded-b-3xl p-6 text-gray-800 shadow-inner">
                <p className="text-sm sm:text-base leading-relaxed font-medium">{item.full}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>



      {/* Achievements Section */}
      <section id="achievements" className="py-12 bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 relative overflow-hidden">
  {/* Animated Background Icons */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <div className="absolute top-1/3 left-1/4 animate-spin-slow">
      <Trophy className="w-28 h-28 text-orange-500 drop-shadow-md" />
    </div>
    <div className="absolute bottom-1/3 right-1/4 animate-spin-slow animation-delay-3000">
      <Star className="w-24 h-24 text-purple-600 drop-shadow-md" />
    </div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-800 via-pink-700 to-purple-800 bg-clip-text text-transparent mb-2 tracking-tight">
        Race Achievements
      </h2>
      <p className="text-base md:text-lg text-gray-700 max-w-xl mx-auto">
        Highlights of our most celebrated pigeons and race results.
      </p>
    </div>

    {/* Stat Cards */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
      {[
        { number: "15+", label: "Races Won", icon: Trophy, gradient: "from-yellow-400 to-orange-500" },
        { number: "50+", label: "Champion Birds", icon: Star, gradient: "from-purple-500 to-pink-500" },
        { number: "5+", label: "Years Racing", icon: Heart, gradient: "from-pink-500 to-red-500" },
        { number: "5", label: "Records Held", icon: Trophy, gradient: "from-blue-500 to-purple-500" }
      ].map((stat, index) => (
        <div key={index} className="text-center p-4 bg-white/90 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105">
          <div className={`w-14 h-14 bg-gradient-to-br ${stat.gradient} rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg`}>
            <stat.icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">{stat.number}</h3>
          <p className="text-sm text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>

    {/* Achievements Grid */}
    <div className="grid md:grid-cols-2 gap-6 bg-gradient-to-br from-slate-800/80 to-purple-900/80 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 shadow-xl">
      {/* Champion Birds */}
      <div>
        <h4 className="text-lg font-semibold text-purple-300 mb-4 flex items-center">
          <Crown className="w-4 h-4 mr-2" />
          Champion Birds
        </h4>
        <div className="space-y-3">
          {[
            { name: "BLUEE", ring: "KKHPF 257", details: "300 KM - 5th/2016, 400 KM 13th, 500 KM 1st", gradient: "from-green-400 to-emerald-500" },
            { name: "JUNGLEE", ring: "GRPT 792", details: "300 KM - 5th, 400 KM 13th, 500 KM 1st", gradient: "from-lime-400 to-green-500" },
            { name: "ARMANI", ring: "GRPT 792", details: "200 KM - 1st, 300 KM 8th, 700 KM 5th", gradient: "from-blue-400 to-cyan-500" },
            { name: "BLACK JACK", ring: "IN 121460", details: "150 KM - 3rd, 200 KM 1st, 300 KM 2nd", gradient: "from-gray-500 to-gray-700" },
            { name: "BEAUTY", ring: "KKHPF 268", details: "300 KM - 5th, 400 KM 7th, 500 KM 1st", gradient: "from-rose-400 to-pink-500" }
          ].map((bird, i) => (
            <div key={i} className={`p-3 rounded-lg bg-gradient-to-r from-slate-700/60 to-purple-800/50 border border-purple-400/20`}>
              <div className="flex justify-between mb-1">
                <span className="text-white font-medium text-sm">{bird.name}</span>
                <span className={`text-xs text-white font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${bird.gradient}`}>
                  {bird.ring}
                </span>
              </div>
              <p className="text-gray-300 text-xs">{bird.details}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Top Achievements */}
      <div>
        <h4 className="text-lg font-semibold text-orange-300 mb-4 flex items-center">
          <Trophy className="w-4 h-4 mr-2" />
          Top Achievements
        </h4>
        <div className="space-y-3">
          {[
            { achievement: "1st - 500KM", bird: "JUNGLE & BEAUTY", year: "2016", gradient: "from-yellow-400 to-orange-400" },
            { achievement: "1st - 200KM", bird: "ARMANI & BLACK JACK", year: "2016", gradient: "from-orange-400 to-red-400" },
            { achievement: "2nd - 300KM", bird: "BLACK JACK", year: "2016", gradient: "from-gray-400 to-gray-500" },
            { achievement: "3rd - 150KM", bird: "BLACK JACK", year: "2016", gradient: "from-amber-400 to-orange-500" }
          ].map((item, i) => (
            <div key={i} className={`p-3 rounded-lg bg-gradient-to-r from-slate-700/60 to-orange-800/50 border border-orange-400/20`}>
              <div className="flex justify-between mb-1">
                <span className="text-white font-medium text-sm">{item.achievement}</span>
                <span className={`text-xs text-white font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${item.gradient}`}>
                  {item.year}
                </span>
              </div>
              <p className="text-gray-300 text-xs">Bird: <span className="text-orange-300 font-medium">{item.bird}</span></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Our Top Breeders Section */}
      <section id="breeders" className="py-12 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
  <div className="absolute inset-0 z-0">
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
        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full opacity-40 blur-sm" />
      </div>
    ))}
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-10 animate-fade-in-up">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
        🕊️ Our Top Breeders
      </h2>
      <p className="text-sm md:text-base text-purple-200 max-w-2xl mx-auto">
        Champion birds selected for elite genetics and top-tier racing lineage.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
      ].map((bird, i) => (
        <div
          key={i}
          className={`bg-white/10 backdrop-blur-xl rounded-xl p-4 md:p-5 border-2 border-gradient-to-r ${bird.borderGradient} hover:scale-[1.035] transition-all duration-300 animate-fade-in-up`}
          style={{ animationDelay: `${i * 100}ms` }}
        >
          {/* Image Section */}
          <div className={`w-full h-36 bg-gradient-to-br ${bird.gradient} rounded-lg mb-4 relative overflow-hidden shadow-md`}>
            <div className="absolute inset-0 bg-white/10" />
            <Feather className="w-10 h-10 text-white absolute inset-0 m-auto animate-float-slow" />
            <div className="absolute top-2 right-2">
              <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Text */}
          <h3 className="text-lg font-semibold text-white mb-1">{bird.name}</h3>
          <p className="text-purple-300 text-sm mb-1">{bird.breed}</p>
          <div className="flex items-center text-xs text-purple-200 mb-2">
            <Trophy className="w-4 h-4 text-yellow-300 mr-2" />
            {bird.achievement}
          </div>
          <p className="text-purple-100 text-xs leading-snug">{bird.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Clubs Section */}
      <section id="clubs" className="py-12 px-4 sm:px-6 lg:px-8 relative">
  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-slate-900/30" />
  
  <div className="relative z-10 max-w-6xl mx-auto">
    <div className="text-center mb-10 animate-fade-in-up">
      <div className="flex items-center justify-center mb-4">
        <Shield className="w-6 h-6 text-purple-400 mr-2" />
        <h2 className="text-3xl md:text-4xl font-bold text-white font-serif tracking-tight">
          CLUBS TAKING PART IN
        </h2>
      </div>
      <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {/* GRPT */}
      <div className="bg-gradient-to-br from-slate-800/80 to-purple-900/80 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-purple-500/20 animate-fade-in-up hover:scale-[1.025] transition-transform duration-300">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
            <Shield className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-serif leading-snug">
            GANGAVATHI RACING PIGEON TRUST
          </h3>
          <p className="text-green-300 text-sm font-semibold mb-2">(GRPT)</p>
          <div className="flex items-center justify-center mb-4 text-purple-300 text-sm">
            <Calendar className="w-4 h-4 text-purple-400 mr-1.5" />
            SINCE 2019
          </div>
          <div className="flex justify-center">
            <div className="flex items-center bg-green-600/20 px-3 py-1.5 rounded-full">
              <MapPin className="w-4 h-4 text-green-400 mr-1.5" />
              <span className="text-green-300 text-xs font-medium">Gangavathi, Karnataka</span>
            </div>
          </div>
        </div>
      </div>

      {/* IDI */}
      <div className="bg-gradient-to-br from-slate-800/80 to-purple-900/80 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-purple-500/20 animate-fade-in-up animation-delay-300 hover:scale-[1.025] transition-transform duration-300">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
            <Trophy className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-serif leading-snug">
            INTERNATIONAL DERBY INDIA
          </h3>
          <p className="text-purple-300 text-sm font-semibold mb-2">ONE LOFT INDIA</p>
          <div className="flex items-center justify-center mb-4 text-pink-300 text-sm">
            <Calendar className="w-4 h-4 text-pink-400 mr-1.5" />
            SINCE 2020
          </div>
          <div className="flex justify-center">
            <div className="flex items-center bg-purple-600/20 px-3 py-1.5 rounded-full">
              <Star className="w-4 h-4 text-purple-400 mr-1.5" />
              <span className="text-purple-300 text-xs font-medium">International Competition</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Wall of Fame */}
      <section id="fame" className="py-10 bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 relative overflow-hidden">
  {/* Background Icons */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <div className="absolute top-8 left-8 animate-spin-slow">
      <Star className="w-28 h-28 text-yellow-600" />
    </div>
    <div className="absolute bottom-8 right-8 animate-spin-slow animation-delay-2000">
      <Trophy className="w-24 h-24 text-orange-600" />
    </div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-6xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-10 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-800 via-orange-700 to-red-800 bg-clip-text text-transparent mb-3 tracking-tight">
          Wall of Fame
        </h2>
        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Honoring our legendary champion birds and their remarkable achievements.
        </p>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {[
          {
            name: "Legend Master",
            years: "2018–2022",
            achievements: ["National Champion 2020", "Speed Record Holder", "Hall of Fame Inductee"],
            legacy: "Retired champion with 45 race victories",
            gradient: "from-yellow-500 to-orange-500"
          },
          {
            name: "Golden Hero",
            years: "2019–2023",
            achievements: ["Regional Champion 2021", "Distance King", "Breeding Stallion"],
            legacy: "Exceptional long-distance performer",
            gradient: "from-orange-500 to-red-500"
          },
          {
            name: "Storm King",
            years: "2017–2021",
            achievements: ["Weather Champion", "Consistent Winner", "Legendary Bloodline"],
            legacy: "Undefeated in adverse conditions",
            gradient: "from-red-500 to-pink-500"
          }
        ].map((legend, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-5 shadow-lg border-2 border-yellow-300 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 transform animate-card-entrance"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className={`w-full h-40 bg-gradient-to-br ${legend.gradient} rounded-lg mb-4 flex items-center justify-center relative overflow-hidden shadow-md`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
              <Star className="w-14 h-14 text-white animate-spin-slow" />
              <div className="absolute top-2 right-2 bg-white/30 backdrop-blur-sm rounded-full p-1">
                <Trophy className="w-4 h-4 text-white animate-bounce-slow" />
              </div>
              <div className="absolute bottom-2 left-2 bg-white/20 backdrop-blur-sm rounded-full px-2 py-0.5">
                <span className="text-white text-xs font-semibold">LEGEND</span>
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">{legend.name}</h3>
            <p className="text-orange-600 text-sm font-medium mb-2">{legend.years}</p>
            <ul className="mb-3 space-y-1">
              {legend.achievements.map((achieve, idx) => (
                <li key={idx} className="flex items-center text-sm">
                  <Trophy className="w-4 h-4 text-yellow-500 mr-2 animate-bounce-slow" />
                  <span className="text-gray-700">{achieve}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 italic text-xs leading-snug bg-gradient-to-r from-yellow-50 to-orange-50 p-2 rounded-md">
              {legend.legacy}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>




      {/* Gallery Section */}
      <section id="gallery" className="py-12 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
  {/* Twinkling Background Stars */}
  <div className="absolute inset-0 pointer-events-none">
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
      {/* Section Heading */}
      <div className="text-center mb-12 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          360 Loft Gallery
        </h2>
        <p className="text-base md:text-lg text-purple-200 max-w-3xl mx-auto leading-relaxed">
          Capturing moments of excellence, training sessions, and our beautiful racing pigeons in action.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-400 transform hover:scale-[1.03] hover:-translate-y-2 animate-card-entrance"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="aspect-w-16 aspect-h-10 relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-black/30 backdrop-blur-sm">
              <div className="flex items-center mb-1">
                <Camera className="w-4 h-4 mr-2 text-white/90" />
                <h3 className="text-lg font-semibold tracking-tight drop-shadow">{item.title}</h3>
              </div>
              <p className="text-xs opacity-90 leading-tight">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Birds for Sale Section */}
      <section id="sale" className="py-20 bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 relative overflow-hidden">
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
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in-up">
        <div className="flex items-center justify-center mb-6">
          <Gavel className="w-10 h-10 text-yellow-400 mr-3 animate-bounce-slow" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">Auction</h2>
        </div>
        <p className="text-lg md:text-xl text-green-200 max-w-3xl mx-auto leading-relaxed">
          Premium racing pigeons available through our exclusive auction system.
        </p>
      </div>

      {/* Members Selling Birds */}
      <div className="mb-14">
        <h4 className="text-2xl font-semibold text-center text-white mb-10">Fancier</h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "Rajesh Kumar", specialty: "Speed Champions", birds: 5 },
            { name: "Suresh Patil", specialty: "Distance Racers", birds: 8 },
            { name: "Mahesh Singh", specialty: "Breeding Stock", birds: 6 },
            { name: "Vikram Reddy", specialty: "Young Birds", birds: 12 }
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-5 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] animate-card-entrance border border-white/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <User className="w-7 h-7 text-white" />
              </div>
              <h5 className="text-lg font-bold text-white mb-1">{member.name}</h5>
              <p className="text-green-300 text-sm mb-1">{member.specialty}</p>
              <span className="inline-block bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs">
                {member.birds} Birds Available
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Birds for Sale */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.03] hover:-translate-y-2 animate-card-entrance border border-white/20"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className={`w-full h-44 bg-gradient-to-br ${bird.gradient} rounded-xl mb-4 flex items-center justify-center relative overflow-hidden shadow-md`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
              <Feather className="w-10 h-10 text-white animate-bounce-slow transform -rotate-12" />
              <div className="absolute top-2 left-2 w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
              <div className="absolute bottom-2 right-2 bg-white/20 backdrop-blur-sm rounded-full px-2 py-0.5">
                <span className="text-white text-[10px] font-semibold">AUCTION</span>
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">{bird.name}</h3>
            <p className="text-green-300 text-sm font-medium">{bird.breed}</p>
            <p className="text-teal-200 text-sm">Age: {bird.age}</p>
            <p className="text-blue-200 text-xs mb-3">Seller: {bird.seller}</p>
            <div className="mb-4">
              {bird.features.map((feature, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full mr-1 mb-1 backdrop-blur-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-xl font-bold bg-gradient-to-r ${bird.priceGradient} bg-clip-text text-transparent animate-pulse-glow`}>
                {bird.price}
              </span>
              <button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-400 hover:to-teal-400 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md text-sm font-medium">
                Bid Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>




      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 relative overflow-hidden">
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-10 left-10 animate-float">
      <MessageCircle className="w-24 h-24 text-emerald-600 rotate-12" />
    </div>
    <div className="absolute bottom-10 right-10 animate-float animation-delay-2000">
      <Star className="w-20 h-20 text-teal-600 -rotate-45" />
    </div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-800 via-teal-700 to-cyan-800 bg-clip-text text-transparent mb-4">
          Reviews & Testimonials
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Hear from our racing community across India.
        </p>
      </div>

      {/* Reviews */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {[
          {
            name: "Arjun Sharma",
            location: "Bangalore",
            rating: 5,
            review:
              "Exceptional breeding program! The birds I purchased from 360 LOFT INDIA have consistently performed well in races.",
            gradient: "from-emerald-500 to-teal-500"
          },
          {
            name: "Priya Patel",
            location: "Mumbai",
            rating: 5,
            review:
              "Outstanding service and healthy birds. The team's knowledge about pigeon racing is impressive.",
            gradient: "from-teal-500 to-cyan-500"
          },
          {
            name: "Ravi Kumar",
            location: "Chennai",
            rating: 5,
            review:
              "Best loft in Karnataka! Their champion bloodlines speak for themselves. Professional and supportive team.",
            gradient: "from-cyan-500 to-blue-500"
          },
          {
            name: "Deepak Singh",
            location: "Hyderabad",
            rating: 5,
            review:
              "Amazing experience! The birds are well-trained and healthy. The team's passion for pigeon racing is contagious.",
            gradient: "from-blue-500 to-indigo-500"
          },
          {
            name: "Meera Reddy",
            location: "Pune",
            rating: 5,
            review:
              "Top-quality birds and excellent guidance. 360 LOFT INDIA helped me get started in pigeon racing.",
            gradient: "from-indigo-500 to-purple-500"
          },
          {
            name: "Sunil Joshi",
            location: "Ahmedabad",
            rating: 5,
            review:
              "Fantastic loft with champion birds! Their breeding program produces consistent winners.",
            gradient: "from-purple-500 to-pink-500"
          }
        ].map((review, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-400 transform hover:scale-[1.02] hover:-translate-y-1 animate-card-entrance`}
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="flex items-center mb-4">
              <div
                className={`w-12 h-12 bg-gradient-to-br ${review.gradient} rounded-full flex items-center justify-center mr-3 shadow-md`}
              >
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-gray-800">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.location}</p>
              </div>
            </div>
            <div className="flex items-center mb-2">
              {[...Array(review.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-current animate-bounce-slow"
                  style={{ animationDelay: `${i * 100}ms` }}
                />
              ))}
            </div>
            <p className="text-sm text-gray-700 leading-relaxed italic">"{review.review}"</p>
          </div>
        ))}
      </div>

      {/* Review Form */}
      <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl animate-fade-in-up">
        <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-emerald-800 to-teal-700 bg-clip-text text-transparent mb-6">
          Leave Your Review
        </h3>
        <form className="max-w-2xl mx-auto space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-white border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-all"
            />
            <input
              type="text"
              placeholder="Your Location"
              className="w-full px-4 py-3 bg-white border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-all"
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-700 font-medium">Rating:</span>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-6 h-6 text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors"
              />
            ))}
          </div>
          <textarea
            placeholder="Share your experience..."
            rows={4}
            className="w-full px-4 py-3 bg-white border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-all resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:via-teal-500 hover:to-cyan-500 text-white font-semibold py-3 rounded-xl transition-transform duration-300 transform hover:scale-105 shadow-lg"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
  {/* Background Twinkling Stars */}
  <div className="absolute inset-0 pointer-events-none">
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
        <div className="w-1 h-1 bg-white rounded-full opacity-70"></div>
      </div>
    ))}
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
        <p className="text-lg md:text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
          Ready to join the world of pigeon racing? Contact us to learn more about our birds and training programs.
        </p>
      </div>

      {/* Contact Info & Form */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left: Info */}
        <div className="animate-slide-in-left space-y-6">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            Contact Information
          </h3>
          {[
            { icon: MapPin, title: "Location", info: "Gangavathi, Karnataka, India", gradient: "from-purple-500 to-pink-500" },
            { icon: Phone, title: "Phone", info: "+91 98765 43210", gradient: "from-pink-500 to-orange-500" },
            { icon: Mail, title: "Email", info: "info@360loftindia.com", gradient: "from-orange-500 to-yellow-500" },
            { icon: Instagram, title: "Instagram", info: "@360_loft_india", gradient: "from-pink-500 to-purple-500" }
          ].map((item, index) => (
            <div key={index} className={`flex items-start p-4 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-transform transform hover:scale-105 animate-card-entrance`} style={{ animationDelay: `${index * 200}ms` }}>
              <div className={`w-10 h-10 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mr-4 shadow-md`}>
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm text-purple-200">{item.title}</p>
                {item.title === "Instagram" ? (
                  <a href="https://www.instagram.com/360_loft_india?igsh=MXZqM3dhc3U0eG95eQ==" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-300 text-sm">
                    {item.info}
                  </a>
                ) : (
                  <p className="text-white text-sm">{item.info}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Form */}
        <div className="animate-slide-in-right space-y-4">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent">
            Send a Message
          </h3>
          {[
            { type: "text", placeholder: "Your Name" },
            { type: "email", placeholder: "Your Email" },
            { type: "tel", placeholder: "Your Phone" }
          ].map((field, i) => (
            <input
              key={i}
              type={field.type}
              placeholder={field.placeholder}
              className="w-full px-5 py-3 bg-white/10 backdrop-blur-md border border-purple-500/30 rounded-xl focus:outline-none focus:border-pink-400 text-white placeholder-purple-300 text-sm transition duration-300 hover:bg-white/15"
            />
          ))}
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full px-5 py-3 bg-white/10 backdrop-blur-md border border-purple-500/30 rounded-xl focus:outline-none focus:border-pink-400 text-white placeholder-purple-300 text-sm transition duration-300 hover:bg-white/15 resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:brightness-110 text-white font-bold py-3 rounded-xl transition-all duration-500 transform hover:scale-105 shadow-xl animate-pulse-glow"
          >
            Send Message
          </button>
        </div>
      </div>

      {/* Visit Loft */}
      <div className="mt-14 flex justify-center">
        <div className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-purple-400/30 text-center animate-fade-in-up w-full max-w-xl">
          <h4 className="text-xl font-bold mb-3 text-purple-200">Visit Our Loft</h4>
          <p className="text-purple-100 text-sm mb-4 leading-relaxed">
            We welcome fellow pigeon racing enthusiasts to visit our facility. Please call ahead to schedule your visit.
          </p>
          <div className="text-purple-200 text-sm space-y-1">
            <p className="flex items-center justify-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Visiting Hours: 9:00 AM – 5:00 PM (Daily)
            </p>
            <p className="flex items-center justify-center">
              <span className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></span>
              Closed on Major Holidays
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white py-14 relative overflow-hidden">
  {/* Floating icons */}
  <div className="absolute inset-0 opacity-20 pointer-events-none">
    <div className="absolute top-10 left-10 animate-float">
      <Feather className="w-14 h-14 text-purple-400" />
    </div>
    <div className="absolute bottom-10 right-10 animate-float animation-delay-2000">
      <Heart className="w-12 h-12 text-pink-400" />
    </div>
  </div>

  {/* Main content */}
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-5xl mx-auto text-center space-y-6 animate-fade-in-up">
      {/* Logo & Title */}
      <div className="flex items-center justify-center gap-4">
        <img src="/unnamed.png" alt="360 Loft India Logo" className="w-20 h-20 object-contain" />
        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 bg-clip-text text-transparent font-serif">
          360 LOFT INDIA
        </h3>
      </div>

      {/* Description */}
      <p className="text-purple-100 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
        Dedicated to the art and sport of pigeon racing. Whether you're a fellow fancier or simply curious about the world's fastest feathered athletes, we invite you to explore our loft and share in our passion.
      </p>

      {/* Divider & Copyright */}
      <div className="border-t border-purple-400/30 pt-6">
        <p className="text-purple-200 text-sm">
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