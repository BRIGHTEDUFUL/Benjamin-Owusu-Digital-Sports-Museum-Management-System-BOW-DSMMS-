import { Link } from "react-router-dom";
import { ArrowRight, Play, Trophy, Users, Calendar, MapPin } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArchiveCard } from "@/components/archive/ArchiveCard";
import { archives } from "@/data/archives";
import heroMuseum from "@/assets/hero-museum.jpg";

const stats = [
  { icon: Trophy, value: "4", label: "AFCON Titles" },
  { icon: Users, value: "100+", label: "Legendary Players" },
  { icon: Calendar, value: "65+", label: "Years of History" },
  { icon: MapPin, value: "20+", label: "Historic Venues" },
];

const Index = () => {
  const featuredArchives = archives.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroMuseum}
            alt="Ghana Football Museum"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ghana-black via-ghana-black/80 to-transparent" />
        </div>

        <div className="container-museum relative z-10">
          <div className="max-w-2xl space-y-6 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-secondary text-sm font-medium">Welcome to Ghana's Football Heritage</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider text-secondary leading-none">
              GFA DIGITAL
              <br />
              <span className="text-primary-foreground">MUSEUM</span>
            </h1>

            <p className="text-lg text-muted max-w-xl leading-relaxed">
              Explore decades of football glory, from AFCON triumphs to World Cup dreams. 
              Discover the stories, legends, and moments that defined Ghanaian football.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/archives">
                  Explore Archives
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl">
                <Play className="w-5 h-5" />
                Virtual Tour
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 rounded-full border-2 border-secondary/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 -mt-20">
        <div className="container-museum">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label} 
                className={`bg-card border-none shadow-xl animate-slide-up stagger-${index + 1}`}
                style={{ opacity: 0, animationFillMode: 'forwards' }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-display text-4xl tracking-wider text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Exhibits */}
      <section className="section-padding">
        <div className="container-museum">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-primary font-medium mb-2">Featured Collection</p>
              <h2 className="font-display text-4xl md:text-5xl tracking-wider">
                DISCOVER OUR ARCHIVES
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/archives">
                View All Archives
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArchives.map((item, index) => (
              <div 
                key={item.id}
                className={`animate-slide-up stagger-${index + 1}`}
                style={{ opacity: 0, animationFillMode: 'forwards' }}
              >
                <ArchiveCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero text-primary-foreground">
        <div className="container-museum">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-display text-4xl md:text-5xl tracking-wider">
              EXPERIENCE THE <span className="text-secondary">GLORY</span>
            </h2>
            <p className="text-lg text-muted opacity-90 max-w-xl mx-auto">
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
      <section className="section-padding">
        <div className="container-museum">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2">Stay Updated</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-wider">
              LATEST NEWS
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "New Exhibit: Black Stars World Cup Journey",
                date: "December 15, 2024",
                description: "A comprehensive exhibition showcasing Ghana's three FIFA World Cup appearances.",
              },
              {
                title: "Digitization Project Milestone",
                date: "December 10, 2024",
                description: "Over 10,000 historical photographs have been digitized and added to our archives.",
              },
              {
                title: "Virtual Reality Experience Launch",
                date: "December 5, 2024",
                description: "Experience iconic moments in Ghana football history through immersive VR technology.",
              },
            ].map((news, index) => (
              <Card 
                key={news.title} 
                className={`card-hover animate-slide-up stagger-${index + 1}`}
                style={{ opacity: 0, animationFillMode: 'forwards' }}
              >
                <CardContent className="p-6">
                  <p className="text-sm text-primary font-medium mb-2">{news.date}</p>
                  <h3 className="font-display text-xl tracking-wide mb-3">{news.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{news.description}</p>
                  <Button variant="link" className="px-0 mt-4">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
