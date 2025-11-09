import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Game } from "./library-data";

interface GameGridProps {
  games: Game[];
  onGameClick?: (gameId: number) => void;
}

export function GameGrid({ games, onGameClick }: GameGridProps) {
  if (games.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-20 h-20 mb-4 rounded-full bg-[#1a1f2e] flex items-center justify-center">
          <svg
            className="w-10 h-10 text-muted-foreground"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
        </div>
        <h3 className="text-xl mb-2 text-white">No hay juegos en esta lista</h3>
        <p className="text-muted-foreground">
          Los juegos que agregues aparecerán aquí
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {games.map((game) => (
        <button
          key={game.id}
          onClick={() => onGameClick?.(game.id)}
          className="group relative overflow-hidden rounded-lg bg-[#1a1f2e] border border-[#1e293b] hover:border-blue-500 transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-900/20"
        >
          {/* Game Cover Image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <ImageWithFallback
              src={game.image}
              alt={game.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Game Title */}
          <div className="p-3">
            <h4 className="text-sm text-white group-hover:text-blue-400 transition-colors line-clamp-2">
              {game.title}
            </h4>
          </div>
        </button>
      ))}
    </div>
  );
}
