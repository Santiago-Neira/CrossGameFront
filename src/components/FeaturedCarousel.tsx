import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface FeaturedGame {
  id: number;
  title: string;
  genres: string[];
  image: string;
}

interface FeaturedCarouselProps {
  onGameClick?: (gameId: number) => void;
}

const featuredGames: FeaturedGame[] = [
  {
    id: 1,
    title: "Cyber Revolution 2077",
    genres: ["Acción", "RPG", "Aventura"],
    image: "https://images.unsplash.com/photo-1664092815283-19c6196f5319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGdhbWUlMjBjeWJlcnB1bmt8ZW58MXx8fHwxNzYxNDkzNjkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    title: "Mystic Realms",
    genres: ["Fantasía", "Aventura", "Mundo Abierto"],
    image: "https://images.unsplash.com/photo-1698450998458-0bc1045788a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwZ2FtZSUyMGFydHdvcmt8ZW58MXx8fHwxNzYxNTE4NjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    title: "Night Racers",
    genres: ["Carreras", "Acción", "Multijugador"],
    image: "https://images.unsplash.com/photo-1753480865924-e79a938b6fd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBnYW1lJTIwbmlnaHR8ZW58MXx8fHwxNzYxNTE4NjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    title: "Shadow Operations",
    genres: ["Disparos", "Táctico", "Multijugador"],
    image: "https://images.unsplash.com/photo-1759491978401-1dc6f38b6780?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9vdGVyJTIwZ2FtZXxlbnwxfHx8fDE3NjE1MTg2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function FeaturedCarousel({ onGameClick }: FeaturedCarouselProps) {
  return (
    <section className="relative">
      <Carousel 
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {featuredGames.map((game) => (
            <CarouselItem key={game.id}>
              <button
                onClick={() => onGameClick?.(game.id)}
                className="relative aspect-[21/9] overflow-hidden rounded-xl w-full cursor-pointer group"
              >
                {/* Game Image */}
                <ImageWithFallback
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-all" />
                
                {/* Game Info */}
                <div className="absolute bottom-0 left-0 right-0 p-12">
                  <h2 className="text-5xl mb-3 text-white group-hover:text-blue-400 transition-colors">{game.title}</h2>
                  <div className="flex gap-3">
                    {game.genres.map((genre, index) => (
                      <span
                        key={index}
                        className="px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded text-sm text-white"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="left-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20" />
        <CarouselNext className="right-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20" />
      </Carousel>
    </section>
  );
}
