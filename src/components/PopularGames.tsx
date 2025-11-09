import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PopularGame {
  id: number;
  title: string;
  image: string;
}

interface PopularGamesProps {
  onGameClick?: (gameId: number) => void;
}

const popularGames: PopularGame[] = [
  {
    id: 1,
    title: "Cyber Revolution 2077",
    image: "https://images.unsplash.com/photo-1664092815283-19c6196f5319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGdhbWUlMjBjeWJlcnB1bmt8ZW58MXx8fHwxNzYxNDkzNjkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    title: "Mystic Realms",
    image: "https://images.unsplash.com/photo-1698450998458-0bc1045788a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwZ2FtZSUyMGFydHdvcmt8ZW58MXx8fHwxNzYxNTE4NjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    title: "Night Racers",
    image: "https://images.unsplash.com/photo-1753480865924-e79a938b6fd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBnYW1lJTIwbmlnaHR8ZW58MXx8fHwxNzYxNTE4NjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    title: "Shadow Operations",
    image: "https://images.unsplash.com/photo-1759491978401-1dc6f38b6780?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9vdGVyJTIwZ2FtZXxlbnwxfHx8fDE3NjE1MTg2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 5,
    title: "Extreme Warriors",
    image: "https://images.unsplash.com/photo-1528723624453-3e53a413b392?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBnYW1lfGVufDF8fHx8MTc2MTUxODY1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 6,
    title: "Uncharted Horizons",
    image: "https://images.unsplash.com/photo-1736347837458-7cc3697ba57a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBnYW1lJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2MTUxODY1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function PopularGames({ onGameClick }: PopularGamesProps) {
  return (
    <section className="mt-12">
      <h3 className="text-2xl mb-6 text-white">Juegos Populares</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {popularGames.map((game) => (
          <button
            key={game.id}
            onClick={() => onGameClick?.(game.id)}
            className="group flex items-center gap-4 p-3 rounded-lg bg-[#1a1f2e] border border-[#1e293b] hover:border-blue-500 hover:bg-[#1e293b] transition-all"
          >
            <div className="relative w-20 h-20 flex-shrink-0 rounded overflow-hidden">
              <ImageWithFallback
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            
            <div className="flex-1 text-left">
              <h4 className="text-white group-hover:text-blue-400 transition-colors">{game.title}</h4>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
