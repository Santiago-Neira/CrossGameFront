import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useGames } from "../hooks/useGames";

interface PopularGamesProps {
  onGameClick?: (gameId: number) => void;
}

export function PopularGames({ onGameClick }: PopularGamesProps) {
  const { games, loading } = useGames();

  // Mostrar los primeros 6 juegos como populares
  const popular = games && games.length > 0 ? games.slice(0, 6) : [];

  return (
    <section className="mt-12">
      <h3 className="text-2xl mb-6 text-white">Juegos Populares</h3>

      {loading && (
        <p className="text-gray-400">Cargando populares...</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {(popular.length > 0 ? popular : []).map((game) => (
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
