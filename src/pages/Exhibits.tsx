import { useState } from "react";
import { Play, ChevronRight, Star, Clock, Users } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import stadiumAccra from "@/assets/stadium-accra.jpg";
import blackStarsCelebration from "@/assets/black-stars-celebration.jpg";
import trophyAfcon from "@/assets/trophy-afcon.jpg";
import vintageMemorabilia from "@/assets/vintage-memorabilia.jpg";

const timeline = [
  { year: 1957, event: "Ghana FA Founded", description: "The Ghana Football Association was established." },
  { year: 1963, event: "First AFCON Title", description: "Ghana wins first Africa Cup of Nations on home soil." },
  { year: 1965, event: "Back-to-Back Champions", description: "Successful defense of AFCON title in Tunisia." },
  { year: 1978, event: "Third AFCON Victory", description: "Ghana hosts and wins AFCON for the third time." },
  { year: 1982, event: "Fourth AFCON Title", description: "Black Stars claim fourth continental championship." },
  { year: 2006, event: "World Cup Debut", description: "Historic first FIFA World Cup appearance in Germany." },
  { year: 2009, event: "U-20 World Champions", description: "First African nation to win FIFA U-20 World Cup." },
  { year: 2010, event: "World Cup Quarter-Finals", description: "Third African nation to reach WC quarter-finals." },
];

const exhibits = [
  {
    id: 1,
    title: "The AFCON Dynasty",
    subtitle: "Four Titles of Glory",
    image: trophyAfcon,
    duration: "45 min",
    rating: 4.9,
    visitors: "12.5K",
    type: "Virtual Tour",
    featured: true,
  },
  {
    id: 2,
    title: "Stadium Stories",
    subtitle: "Historic Grounds of Ghana",
    image: stadiumAccra,
    duration: "30 min",
    rating: 4.7,
    visitors: "8.2K",
    type: "Interactive",
    featured: false,
  },
  {
    id: 3,
    title: "Black Stars Legends",
    subtitle: "Profiles of the Greats",
    image: blackStarsCelebration,
    duration: "60 min",
    rating: 4.8,
    visitors: "15.3K",
    type: "Gallery",
    featured: true,
  },
  {
    id: 4,
    title: "Football Artifacts",
    subtitle: "Treasures Through Time",
    image: vintageMemorabilia,
    duration: "25 min",
    rating: 4.6,
    visitors: "6.8K",
    type: "Collection",
    featured: false,
  },
];

const Exhibits = () => {
  const [activeYear, setActiveYear] = useState(timeline[0].year);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-dark text-primary-foreground">
        <div className="container-museum">
          <div className="max-w-2xl">
            <p className="text-secondary font-medium mb-2">Interactive Experiences</p>
            <h1 className="font-display text-5xl md:text-6xl tracking-wider mb-4">
              IMMERSIVE EXHIBITS
            </h1>
            <p className="text-muted text-lg">
              Step into Ghana's football history through interactive displays, virtual tours, 
              and multimedia experiences that bring the beautiful game to life.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Exhibits */}
      <section className="section-padding">
        <div className="container-museum">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-primary font-medium mb-2">Featured</p>
              <h2 className="font-display text-4xl tracking-wider">VIRTUAL EXPERIENCES</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {exhibits.map((exhibit) => (
              <Card key={exhibit.id} className="overflow-hidden group card-hover">
                <div className="relative aspect-video">
                  <img
                    src={exhibit.image}
                    alt={exhibit.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ghana-black/90 via-ghana-black/40 to-transparent" />
                  
                  {exhibit.featured && (
                    <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                      Featured
                    </Badge>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Badge variant="outline" className="mb-3 border-muted/50 text-muted">
                      {exhibit.type}
                    </Badge>
                    <h3 className="font-display text-2xl md:text-3xl tracking-wider text-secondary">
                      {exhibit.title}
                    </h3>
                    <p className="text-muted">{exhibit.subtitle}</p>
                  </div>

                  {/* Play Button */}
                  <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-secondary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-6 h-6 text-secondary-foreground fill-current" />
                  </button>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {exhibit.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-secondary" />
                        {exhibit.rating}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {exhibit.visitors}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Start Tour <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="section-padding bg-muted/50">
        <div className="container-museum">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2">Journey Through Time</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-wider">
              HISTORICAL TIMELINE
            </h2>
          </div>

          {/* Timeline Navigation */}
          <div className="relative mb-12">
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-border -translate-y-1/2" />
            <div className="flex justify-between overflow-x-auto pb-4">
              {timeline.map((item) => (
                <button
                  key={item.year}
                  onClick={() => setActiveYear(item.year)}
                  className={`relative flex flex-col items-center min-w-[80px] transition-all ${
                    activeYear === item.year ? "scale-110" : ""
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded-full border-4 transition-colors ${
                      activeYear === item.year
                        ? "bg-secondary border-secondary"
                        : item.year <= activeYear
                        ? "bg-primary border-primary"
                        : "bg-background border-border"
                    }`}
                  />
                  <span
                    className={`font-display text-lg mt-2 ${
                      activeYear === item.year ? "text-secondary" : "text-muted-foreground"
                    }`}
                  >
                    {item.year}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Timeline Content */}
          {timeline.map(
            (item) =>
              item.year === activeYear && (
                <Card key={item.year} className="max-w-2xl mx-auto animate-fade-in">
                  <CardContent className="p-8 text-center">
                    <p className="font-display text-5xl text-secondary mb-4">{item.year}</p>
                    <h3 className="font-display text-2xl tracking-wider mb-4">{item.event}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              )
          )}
        </div>
      </section>

      {/* Quiz Teaser */}
      <section className="section-padding bg-gradient-hero text-primary-foreground">
        <div className="container-museum">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-medium mb-2">Test Your Knowledge</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-wider mb-4">
              GHANA FOOTBALL QUIZ
            </h2>
            <p className="text-muted text-lg mb-8">
              Think you know Ghana football? Challenge yourself with our interactive 
              quiz covering decades of Black Stars history.
            </p>
            <Button variant="hero" size="xl">
              <Link to="/quiz" className="flex items-center gap-2">
                Start Quiz
                <ChevronRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Exhibits;
