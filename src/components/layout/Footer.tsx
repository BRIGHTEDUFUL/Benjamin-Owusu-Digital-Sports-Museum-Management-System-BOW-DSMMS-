import { Link } from "react-router-dom";
import { Trophy, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ghana-black text-muted">
      <div className="container-museum py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Trophy className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="font-display text-xl tracking-wider text-secondary">GFA Museum</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Preserving Ghana's football heritage for generations to come. Explore our rich history of triumphs, legends, and unforgettable moments.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-muted/10 flex items-center justify-center hover:bg-secondary hover:text-ghana-black transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-muted/10 flex items-center justify-center hover:bg-secondary hover:text-ghana-black transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-muted/10 flex items-center justify-center hover:bg-secondary hover:text-ghana-black transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-muted/10 flex items-center justify-center hover:bg-secondary hover:text-ghana-black transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg tracking-wider text-secondary mb-4">Explore</h4>
            <ul className="space-y-2">
              {["Archives", "Exhibits", "Virtual Tours", "Events", "Shop"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="font-display text-lg tracking-wider text-secondary mb-4">Visit Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary" />
                <span>GFA Secretariat, Ridge, Accra, Ghana</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-secondary" />
                <span>+233 (0) 302 665 898</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-secondary" />
                <span>museum@ghanafa.org</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg tracking-wider text-secondary mb-4">Hours</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-secondary">9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-secondary">10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-secondary">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-muted/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Ghana Football Association. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="#" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-secondary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
