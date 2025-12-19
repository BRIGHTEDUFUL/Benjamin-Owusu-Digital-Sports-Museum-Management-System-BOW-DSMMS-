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

      {/* Hero Slideshow Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Slideshow Background */}
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-out ${
                index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            >
              {brokenSlides[index] ? (
                <div className="w-full h-full bg-gradient-to-br from-ghana-black via-ghana-black/90 to-ghana-black/70 flex items-center justify-center">
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
          {/* Modern Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-ghana-black via-ghana-black/90 to-ghana-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ghana-black/80 via-transparent to-ghana-black/30" />
          {/* Animated Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px]" />
        </div>

        {/* Slideshow Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative h-1.5 rounded-full transition-all duration-500 overflow-hidden ${
                index === currentSlide ? "w-12 bg-secondary" : "w-6 bg-white/30 hover:bg-white/50"
              }`}
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

        {/* Hero Content */}
        <div className="container-museum relative z-10">
          <div className="max-w-4xl space-y-8 bg-black/30 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl animate-slide-up">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-lg border border-white/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
              </span>
              <span className="text-secondary/90 text-sm font-medium tracking-wide">Welcome to Ghana's Football Heritage</span>
            </div>

            {/* Main Title with Animation */}
            <div className="space-y-2">
              <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-wider leading-none text-white">
                <span className="text-secondary drop-shadow-[0_0_30px_rgba(252,209,22,0.3)]">GFA DIGITAL</span>
              </h1>
              <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-wider leading-none text-white">MUSEUM</h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Explore decades of football glory, from AFCON triumphs to World Cup dreams. 
              Discover the stories, legends, and moments that defined Ghanaian football.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 pt-4">
              <Button asChild variant="hero" size="xl" className="group w-full sm:w-auto shadow-lg shadow-secondary/30">
                <Link to="/archives">
                  Explore Archives
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" className="group w-full sm:w-auto border-white/30 text-white hover:border-secondary hover:text-secondary shadow-lg shadow-white/10">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Virtual Tour
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-7 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-secondary animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 -mt-20">
        <div className="container-museum">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label} 
                className="bg-card/80 backdrop-blur-xl border-white/10 shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 animate-slide-up group"
                style={{ opacity: 0, animationFillMode: 'forwards', animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="font-display text-4xl md:text-5xl tracking-wider text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-2 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArchives.map((item, index) => (
              <div 
                key={item.id}
                className="animate-slide-up"
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
        
        <div className="container-museum relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-display text-5xl md:text-7xl tracking-wider text-white">
              EXPERIENCE THE <span className="text-secondary drop-shadow-[0_0_20px_rgba(252,209,22,0.4)]">GLORY</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Join us for exclusive exhibits, interactive displays, and immersive experiences 
              that bring Ghana's football history to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/exhibits">Interactive Exhibits</Link>
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

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "New Exhibit: Black Stars World Cup Journey", date: "December 15, 2024", description: "A comprehensive exhibition showcasing Ghana's three FIFA World Cup appearances." },
              { title: "Digitization Project Milestone", date: "December 10, 2024", description: "Over 10,000 historical photographs have been digitized and added to our archives." },
              { title: "Virtual Reality Experience Launch", date: "December 5, 2024", description: "Experience iconic moments in Ghana football history through immersive VR technology." },
            ].map((news, index) => (
              <Card 
                key={news.title} 
                className="group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 animate-slide-up border-transparent hover:border-primary/20"
                style={{ opacity: 0, animationFillMode: 'forwards', animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <CardContent className="p-8">
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
      `}</style>
    </div>
  );
};

export default Index;
