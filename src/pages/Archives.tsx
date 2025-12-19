import { useState, useMemo } from "react";
import { Search, Filter, Grid, List, SlidersHorizontal } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArchiveCard } from "@/components/archive/ArchiveCard";
import { Lightbox } from "@/components/archive/Lightbox";
import { archives, archiveTypes, ArchiveItem } from "@/data/archives";
import { cn } from "@/lib/utils";

const Archives = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [sortBy, setSortBy] = useState<"year-desc" | "year-asc" | "title">("year-desc");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedItem, setSelectedItem] = useState<ArchiveItem | null>(null);

  const filteredArchives = useMemo(() => {
    let result = archives;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      );
    }

    // Filter by type
    if (selectedType !== "all") {
      result = result.filter((item) => item.type === selectedType);
    }

    // Sort
    result = [...result].sort((a, b) => {
      if (sortBy === "year-desc") return b.year - a.year;
      if (sortBy === "year-asc") return a.year - b.year;
      return a.title.localeCompare(b.title);
    });

    return result;
  }, [searchQuery, selectedType, sortBy]);

  const currentIndex = selectedItem
    ? filteredArchives.findIndex((item) => item.id === selectedItem.id)
    : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedItem(filteredArchives[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredArchives.length - 1) {
      setSelectedItem(filteredArchives[currentIndex + 1]);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-dark text-primary-foreground">
        <div className="container-museum">
          <div className="max-w-2xl">
            <p className="text-secondary font-medium mb-2">Digital Collection</p>
            <h1 className="font-display text-5xl md:text-6xl tracking-wider mb-4">
              EXPLORE THE ARCHIVES
            </h1>
            <p className="text-muted text-lg">
              Browse our extensive collection of trophies, memorabilia, historical photographs, 
              and documents from Ghana's rich football history.
            </p>
          </div>
        </div>
      </section>

      {/* Filters - Sticky with proper z-index */}
      <section className="sticky top-16 md:top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-border py-4">
        <div className="container-museum">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search archives..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Type Filters */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {archiveTypes.map((type) => (
                <Button
                  key={type}
                  variant={selectedType === type ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedType(type)}
                  className="capitalize whitespace-nowrap"
                >
                  {type}
                </Button>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="h-9 px-3 rounded-lg border border-input bg-background text-sm"
              >
                <option value="year-desc">Newest First</option>
                <option value="year-asc">Oldest First</option>
                <option value="title">A-Z</option>
              </select>

              <div className="flex border border-input rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={cn(
                    "p-2 transition-colors",
                    viewMode === "grid" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  )}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={cn(
                    "p-2 transition-colors",
                    viewMode === "list" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  )}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results - Flex-grow to fill space */}
      <section className="section-padding flex-grow">
        <div className="container-museum">
          {/* Results Count */}
          <p className="text-muted-foreground mb-6">
            Showing {filteredArchives.length} of {archives.length} items
          </p>

          {filteredArchives.length === 0 ? (
            <div className="text-center py-16">
              <SlidersHorizontal className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-display text-2xl mb-2">No Results Found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredArchives.map((item) => (
                <ArchiveCard key={item.id} item={item} onView={setSelectedItem} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredArchives.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="flex gap-4 p-4 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary capitalize">
                        {item.type}
                      </span>
                      <span className="text-sm text-muted-foreground">{item.year}</span>
                    </div>
                    <h3 className="font-display text-xl tracking-wide">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      <Lightbox
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={currentIndex > 0}
        hasNext={currentIndex < filteredArchives.length - 1}
      />
    </div>
  );
};

export default Archives;
