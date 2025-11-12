import { Star, Loader } from "lucide-react";
import { getGamesDatabase, type Game } from "./games-data";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { useEffect, useState } from "react";

interface FilteredGamesViewProps {
  selectedGenre: string;
  selectedPlatform: string;
  selectedLanguage: string;
  onGameClick?: (gameId: number) => void;
}

export function FilteredGamesView({
  selectedGenre,
  selectedPlatform,
  selectedLanguage,
  onGameClick
}: FilteredGamesViewProps) {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGames = async () => {
      try {
        setLoading(true);
        const allGames = await getGamesDatabase();
        setGames(allGames);
      } catch (error) {
        console.error("Error loading games:", error);
        setGames([]);
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, [selectedGenre, selectedPlatform, selectedLanguage]);

  // Filtrar juegos según los criterios seleccionados
  const filteredGames = games.filter((game) => {
    const genreMatch = selectedGenre === "all" || game.genres.includes(selectedGenre);
    const platformMatch = selectedPlatform === "all" || game.platforms.includes(selectedPlatform);
    const languageMatch = selectedLanguage === "all" || game.languages.includes(selectedLanguage);
    
    return genreMatch && platformMatch && languageMatch;
  });

  // Obtener etiquetas legibles
  const getGenreLabel = (genre: string) => {
    const labels: Record<string, string> = {
      "all": "Todos los géneros",
      "action": "Acción",
      "adventure": "Aventura",
      "rpg": "RPG",
      "strategy": "Estrategia",
      "sports": "Deportes",
      "racing": "Carreras",
      "shooter": "Disparos",
      "horror": "Terror"
    };
    return labels[genre] || genre;
  };

  const getPlatformLabel = (platform: string) => {
    const labels: Record<string, string> = {
      "all": "Todas las plataformas",
      "pc": "PC",
      "ps5": "PlayStation 5",
      "ps4": "PlayStation 4",
      "xbox-series": "Xbox Series X|S",
      "xbox-one": "Xbox One",
      "switch": "Nintendo Switch"
    };
    return labels[platform] || platform;
  };

  const getLanguageLabel = (language: string) => {
    const labels: Record<string, string> = {
      "all": "Todos los idiomas",
      "es": "Español",
      "en": "Inglés",
      "fr": "Francés",
      "de": "Alemán",
      "it": "Italiano",
      "pt": "Portugués",
      "ja": "Japonés"
    };
    return labels[language] || language;
  };

  return (
    <div className="pt-20 px-6 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader className="w-8 h-8 text-blue-500 animate-spin mb-3" />
            <p className="text-muted-foreground">Cargando juegos...</p>
          </div>
        )}

        {/* Content */}
        {!loading && (
          <>
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-4xl text-white mb-4">Resultados de Búsqueda</h1>
              
              {/* Active Filters */}
              <div className="flex flex-wrap gap-3 mb-4">
                {selectedGenre !== "all" && (
                  <Badge className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2">
                    {getGenreLabel(selectedGenre)}
                  </Badge>
                )}
                {selectedPlatform !== "all" && (
                  <Badge className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2">
                    {getPlatformLabel(selectedPlatform)}
                  </Badge>
                )}
                {selectedLanguage !== "all" && (
                  <Badge className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2">
                    {getLanguageLabel(selectedLanguage)}
                  </Badge>
                )}
              </div>

              <p className="text-gray-400">
                {filteredGames.length} {filteredGames.length === 1 ? 'juego encontrado' : 'juegos encontrados'}
              </p>
            </div>

            {/* Games Grid */}
            {filteredGames.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-12">
            {filteredGames.map((game) => (
              <button
                key={game.id}
                onClick={() => onGameClick?.(game.id)}
                className="group bg-[#1e293b] rounded-lg overflow-hidden hover:ring-2 hover:ring-blue-500 transition-all"
              >
                {/* Game Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <ImageWithFallback
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Price Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                      {game.price === 0 ? 'Gratis' : `$${game.price}`}
                    </span>
                  </div>
                </div>

                {/* Game Info */}
                <div className="p-4">
                  <h3 className="text-white mb-2 text-left group-hover:text-blue-400 transition-colors">
                    {game.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-3 text-left line-clamp-2">
                    {game.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-white">{game.rating}</span>
                  </div>
                </div>
              </button>
            ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#1e293b] rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Star className="w-10 h-10 text-gray-600" />
                  </div>
                  <h2 className="text-2xl text-white mb-3">No se encontraron juegos</h2>
                  <p className="text-gray-400 max-w-md">
                    No hay juegos que coincidan con los filtros seleccionados. 
                    Intenta cambiar los criterios de búsqueda.
                  </p>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
