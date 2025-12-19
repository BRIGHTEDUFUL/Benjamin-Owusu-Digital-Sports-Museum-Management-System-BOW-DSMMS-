import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Trophy, Users, Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArchiveCard } from "@/components/archive/ArchiveCard";
import { archives } from "@/data/archives";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const heroSlides = [
  { image: hero1, alt: "Ghana Black Stars Player Celebrating" },
  { image: hero2, alt: "Ghana National Team Squad" },
  { image: hero3, alt: "Abedi Pele - Ghana Football Legend" },
  { image: hero4, alt: "Asamoah Gyan - Black Stars Captain" },
];

const stats = [
  { icon: Trophy, value: "4", label: "AFCON Titles" },
  { icon: Users, value: "100+", label: "Legendary Players" },
  { icon: Calendar, value: "65+", label: "Years of History" },
  { icon: MapPin, value: "20+", label: "Historic Venues" },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [brokenSlides, setBrokenSlides] = useState<Record<number, boolean>>({});
  const featuredArchives = archives.slice(0, 4);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => goToSlide((currentSlide + 1) % heroSlides.length);
  const prevSlide = () => goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
  const onSlideError = (index: number) => setBrokenSlides((p) => ({ ...p, [index]: true }));

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Side by Side */}
      <section className="relative w-full min-h-screen flex items-center pt-16 md:pt-20 bg-gradient-to-br from-ghana-black via-ghana-black/95 to-ghana-black/90">
        {/* Animated Pattern Background */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px]" />
        {/* Floating glow accents */}
        <div className="absolute -left-10 top-24 w-56 h-56 rounded-full bg-secondary/15 blur-3xl animate-float-slow" />
        <div className="absolute right-4 bottom-6 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float-slower" />
        <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-64 h-64 rounded-full border border-white/10 animate-rotate-slow opacity-50" />
        
        <div className="container-museum relative z-10 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
            
            {/* Left Side - Info Content */}
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1 animate-slide-up">
              {/* Animated Badge */}
              <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:border-secondary/50 transition-colors">
                <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-full w-full bg-secondary"></span>
                </span>
                <span className="text-white/90 text-xs md:text-sm font-semibold tracking-widest uppercase">Welcome to Ghana's Football Heritage</span>
              </div>

              {/* Main Title */}
              <div className="space-y-2 md:space-y-4">
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wider leading-tight text-white">
                  <span className="block text-secondary drop-shadow-[0_0_30px_rgba(252,209,22,0.4)]">GFA DIGITAL</span>
                  <span className="block">MUSEUM</span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg lg:text-xl text-white/85 max-w-2xl leading-relaxed">
                Explore decades of football glory, from AFCON triumphs to World Cup dreams. 
                Discover the stories, legends, and moments that defined Ghanaian football.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 py-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                        <stat.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <p className="font-display text-3xl md:text-4xl text-white">{stat.value}</p>
                    </div>
                    <p className="text-sm text-white/70 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                <Button asChild variant="hero" size="lg" className="group shadow-xl shadow-secondary/40 hover:shadow-secondary/60 transition-all duration-300">
                  <Link to="/archives" className="flex items-center justify-center gap-2">
                    Explore Archives
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" className="group border-2 border-white/40 text-white hover:border-secondary hover:text-secondary hover:bg-secondary/10 shadow-lg transition-all duration-300">
                  <Play className="w-5 h-5 group-hover:scale-125 transition-transform" />
                  Virtual Tour
                </Button>
              </div>
            </div>

            {/* Right Side - Slideshow */}
            <div className="relative order-1 lg:order-2 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] max-h-[72vh] rounded-2xl overflow-hidden shadow-2xl">
                {/* Slideshow Container */}
                <div className="relative w-full h-full">
                  {heroSlides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ease-out ${
                        index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
                      }`}
                    >
                      {brokenSlides[index] ? (
                        <div className="w-full h-full bg-gradient-to-br from-ghana-black/80 via-ghana-black/70 to-ghana-black/60 flex items-center justify-center border border-white/10">
                          <div className="text-center space-y-3 px-6">
                            <Trophy className="w-12 h-12 text-secondary mx-auto opacity-60" />
                            <p className="text-white/70 text-sm">{slide.alt}</p>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={slide.image}
                          alt={slide.alt}
                          className="w-full h-full object-cover"
                          onError={() => onSlideError(index)}
                          loading={index === 0 ? "eager" : "lazy"}
                          decoding="async"
                        />
                      )}
                    </div>
                  ))}
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ghana-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`relative h-1.5 rounded-full transition-all duration-500 overflow-hidden ${
                        index === currentSlide ? "w-10 bg-secondary" : "w-4 bg-white/40 hover:bg-white/60"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    >
                      {index === currentSlide && (
                        <div 
                          className="absolute inset-0 bg-secondary/50 origin-left"
                          style={{ animation: isAutoPlaying ? "slideProgress 5s linear" : "none" }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Exhibits */}
      <section className="section-padding bg-gradient-to-b from-background to-muted/30">
        <div className="container-museum">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="space-y-3">
              <p className="text-primary font-semibold text-sm tracking-wider uppercase">Featured Collection</p>
              <h2 className="font-display text-4xl md:text-6xl tracking-wider">DISCOVER OUR ARCHIVES</h2>
            </div>
            <Button asChild variant="outline" size="lg" className="group">
              <Link to="/archives">
                View All Archives
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredArchives.map((item, index) => (
              <div 
                key={item.id}
                className="group animate-slide-up transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-secondary/20"
                style={{ opacity: 0, animationFillMode: 'forwards', animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <ArchiveCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(252,209,22,0.1),transparent_50%)]" />
        <div className="absolute inset-0 opacity-30 bg-[conic-gradient(from_120deg,rgba(255,255,255,0.08)_0deg,transparent_120deg,transparent_240deg,rgba(255,255,255,0.1)_360deg)] animate-rotate-slower" />
        <div className="absolute inset-0 mix-blend-screen opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.1),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.12),transparent_35%)] animate-pulse-soft" />
        
        <div className="container-museum relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-display text-5xl md:text-7xl tracking-wider text-white">
              EXPERIENCE THE <span className="text-secondary drop-shadow-[0_0_20px_rgba(252,209,22,0.4)]">GLORY</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Join us to explore our digital archives, interactive displays, and immersive experiences 
              that bring Ghana's football history to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/archives">Explore Archives</Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/visitor">Plan Your Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="section-padding bg-muted/20">
        <div className="container-museum">
          <div className="text-center mb-14 space-y-3">
            <p className="text-primary font-semibold text-sm tracking-wider uppercase">Stay Updated</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-wider">LATEST NEWS</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "New Exhibit: Black Stars World Cup Journey", date: "December 15, 2024", description: "A comprehensive exhibition showcasing Ghana's three FIFA World Cup appearances." },
              { title: "Digitization Project Milestone", date: "December 10, 2024", description: "Over 10,000 historical photographs have been digitized and added to our archives." },
              { title: "Virtual Reality Experience Launch", date: "December 5, 2024", description: "Experience iconic moments in Ghana football history through immersive VR technology." },
            ].map((news, index) => (
              <Card 
                key={news.title} 
                className="group relative overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 animate-slide-up border-transparent hover:border-primary/20 bg-card/90"
                style={{ opacity: 0, animationFillMode: 'forwards', animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="relative p-8">
                  <p className="text-sm text-primary font-semibold mb-3">{news.date}</p>
                  <h3 className="font-display text-2xl tracking-wide mb-4 group-hover:text-primary transition-colors">{news.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{news.description}</p>
                  <Button variant="link" className="px-0 mt-6 group/btn">
                    Read More <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes slideProgress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes floatSlow { 0% { transform: translateY(0); } 50% { transform: translateY(-12px); } 100% { transform: translateY(0); } }
        @keyframes floatSlower { 0% { transform: translateY(0); } 50% { transform: translateY(16px); } 100% { transform: translateY(0); } }
        @keyframes rotateSlow { from { transform: translate(-50%, 0) rotate(0deg); } to { transform: translate(-50%, 0) rotate(360deg); } }
        @keyframes pulseSoft { 0%, 100% { opacity: 0.25; } 50% { opacity: 0.45; } }

        .animate-float-slow { animation: floatSlow 9s ease-in-out infinite; }
        .animate-float-slower { animation: floatSlower 14s ease-in-out infinite; }
        .animate-rotate-slow { animation: rotateSlow 22s linear infinite; }
        .animate-rotate-slower { animation: rotateSlow 32s linear infinite; }
        .animate-pulse-soft { animation: pulseSoft 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Index;
