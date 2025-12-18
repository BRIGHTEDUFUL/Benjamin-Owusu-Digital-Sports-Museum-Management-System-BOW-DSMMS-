import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Heart, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ArchiveItem {
  id: number;
  title: string;
  type: string;
  image: string;
  description: string;
  year: number;
}

interface LightboxProps {
  item: ArchiveItem | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export function Lightbox({ item, onClose, onPrev, onNext, hasPrev, hasNext }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev?.();
      if (e.key === "ArrowRight" && hasNext) onNext?.();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-ghana-black/95 animate-fade-in">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <Badge className="bg-secondary text-secondary-foreground capitalize">
            {item.type}
          </Badge>
          <span className="text-muted-foreground text-sm">{item.year}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted hover:text-secondary">
            <Heart className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted hover:text-secondary">
            <Download className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted hover:text-secondary">
            <Share2 className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-muted hover:text-secondary">
            <X className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="h-full flex items-center justify-center p-4 md:p-16">
        {/* Previous Button */}
        {hasPrev && (
          <button
            onClick={onPrev}
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-background/10 flex items-center justify-center text-muted hover:bg-secondary hover:text-secondary-foreground transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Image & Info */}
        <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full max-h-[60vh] md:max-h-[70vh] object-contain rounded-lg animate-scale-in"
            />
          </div>
          <div className="md:w-80 space-y-4 text-center md:text-left">
            <h2 className="font-display text-3xl md:text-4xl tracking-wider text-secondary">
              {item.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {item.description}
            </p>
            <Button variant="hero" size="lg">
              View Full Details
            </Button>
          </div>
        </div>

        {/* Next Button */}
        {hasNext && (
          <button
            onClick={onNext}
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-background/10 flex items-center justify-center text-muted hover:bg-secondary hover:text-secondary-foreground transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
}
