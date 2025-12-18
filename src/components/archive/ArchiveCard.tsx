import { useState } from "react";
import { Heart, Eye, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ArchiveItem {
  id: number;
  title: string;
  type: string;
  image: string;
  description: string;
  year: number;
}

interface ArchiveCardProps {
  item: ArchiveItem;
  onView?: (item: ArchiveItem) => void;
}

const typeColors: Record<string, string> = {
  trophy: "bg-secondary text-secondary-foreground",
  player: "bg-accent text-accent-foreground",
  stadium: "bg-primary text-primary-foreground",
  memorabilia: "bg-muted text-muted-foreground",
  match: "bg-ghana-green text-primary-foreground",
};

export function ArchiveCard({ item, onView }: ArchiveCardProps) {
  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    return favorites.includes(item.id);
  });

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const newFavorites = isFavorite
      ? favorites.filter((id: number) => id !== item.id)
      : [...favorites, item.id];
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <Card 
      className="group overflow-hidden cursor-pointer card-hover"
      onClick={() => onView?.(item)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ghana-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={toggleFavorite}
            className={cn(
              "w-9 h-9 rounded-full flex items-center justify-center transition-colors",
              isFavorite 
                ? "bg-primary text-primary-foreground" 
                : "bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground"
            )}
          >
            <Heart className={cn("w-4 h-4", isFavorite && "fill-current")} />
          </button>
          <button 
            className="w-9 h-9 rounded-full bg-background/90 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onView?.(item);
            }}
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Type Badge */}
        <div className="absolute top-3 left-3">
          <Badge className={cn("capitalize", typeColors[item.type] || "bg-muted")}>
            {item.type}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
          <Calendar className="w-3 h-3" />
          <span>{item.year}</span>
        </div>
        <h3 className="font-display text-lg tracking-wide line-clamp-1 group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          {item.description}
        </p>
      </CardContent>
    </Card>
  );
}
