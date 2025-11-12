import { fetchGames } from "../services/api-service";

export interface Game {
  id: number;
  title: string;
  genres: string[];
  platforms: string[];
  languages: string[];
  image: string;
  price: number | null;
  rating: number;
  description: string;
}

let cachedGames: Game[] | null = null;

// Datos de prueba/fallback
const fallbackGames: Game[] = [
  {
    id: 1,
    title: "Cyber Revolution 2077",
    genres: ["action", "rpg", "adventure"],
    platforms: ["pc", "ps5", "xbox-series"],
    languages: ["es", "en", "fr", "de", "it", "pt", "ja"],
    image: "https://images.unsplash.com/photo-1664092815283-19c6196f5319?w=500",
    price: 59.99,
    rating: 4.8,
    description: "Una épica aventura cyberpunk en un mundo futurista"
  },
  {
    id: 2,
    title: "Mystic Realms",
    genres: ["adventure", "rpg"],
    platforms: ["pc", "ps5", "ps4", "xbox-series", "xbox-one", "switch"],
    languages: ["es", "en", "fr", "de"],
    image: "https://images.unsplash.com/photo-1698450998458-0bc1045788a1?w=500",
    price: 49.99,
    rating: 4.6,
    description: "Explora un mundo mágico lleno de misterios y aventuras"
  },
  {
    id: 3,
    title: "Night Racers",
    genres: ["racing", "action"],
    platforms: ["pc", "ps5", "xbox-series"],
    languages: ["es", "en", "fr", "de", "it", "pt"],
    image: "https://images.unsplash.com/photo-1753480865924-e79a938b6fd0?w=500",
    price: 39.99,
    rating: 4.4,
    description: "Carreras intensas en las calles nocturnas de la ciudad"
  },
  {
    id: 4,
    title: "Shadow Operations",
    genres: ["shooter", "action"],
    platforms: ["pc", "ps5", "ps4", "xbox-series", "xbox-one"],
    languages: ["es", "en", "fr", "de", "it"],
    image: "https://images.unsplash.com/photo-1759491978401-1dc6f38b6780?w=500",
    price: 54.99,
    rating: 4.7,
    description: "Operaciones tácticas en entornos peligrosos"
  },
  {
    id: 5,
    title: "Fantasy Quest Online",
    genres: ["rpg", "adventure"],
    platforms: ["pc", "ps5", "xbox-series"],
    languages: ["es", "en", "ja"],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500",
    price: 29.99,
    rating: 4.5,
    description: "MMORPG en un mundo de fantasía épico"
  },
  {
    id: 6,
    title: "Battle Royale Legends",
    genres: ["shooter", "action"],
    platforms: ["pc", "ps5", "ps4", "xbox-series", "xbox-one", "switch"],
    languages: ["es", "en", "fr", "de", "it", "pt", "ja"],
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500",
    price: 0,
    rating: 4.3,
    description: "Battle Royale gratuito con acción trepidante"
  },
  {
    id: 7,
    title: "Sports Champions 2024",
    genres: ["sports"],
    platforms: ["pc", "ps5", "xbox-series", "switch"],
    languages: ["es", "en", "fr", "de", "it"],
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500",
    price: 69.99,
    rating: 4.2,
    description: "La simulación deportiva más realista del año"
  },
  {
    id: 8,
    title: "Zombie Survival",
    genres: ["horror", "action", "adventure"],
    platforms: ["pc", "ps5", "ps4", "xbox-series", "xbox-one"],
    languages: ["es", "en", "fr", "de"],
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500",
    price: 44.99,
    rating: 4.6,
    description: "Sobrevive al apocalipsis zombie"
  },
  {
    id: 9,
    title: "Strategy Empire",
    genres: ["strategy"],
    platforms: ["pc", "switch"],
    languages: ["es", "en", "fr", "de", "it", "ja"],
    image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=500",
    price: 34.99,
    rating: 4.7,
    description: "Construye y gestiona tu propio imperio"
  },
  {
    id: 10,
    title: "Racing Thunder",
    genres: ["racing"],
    platforms: ["pc", "ps5", "xbox-series"],
    languages: ["es", "en", "it", "pt"],
    image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=500",
    price: 49.99,
    rating: 4.5,
    description: "Carreras extremas a toda velocidad"
  },
  {
    id: 11,
    title: "Horror Mansion",
    genres: ["horror", "adventure"],
    platforms: ["pc", "ps5", "ps4", "xbox-series"],
    languages: ["es", "en", "ja"],
    image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=500",
    price: 29.99,
    rating: 4.4,
    description: "Explora una mansión llena de secretos oscuros"
  },
  {
    id: 12,
    title: "Tactical Warfare",
    genres: ["strategy", "shooter"],
    platforms: ["pc", "ps5", "xbox-series"],
    languages: ["es", "en", "fr", "de", "it"],
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=500",
    price: 39.99,
    rating: 4.6,
    description: "Estrategia y acción en el campo de batalla"
  }
];

/**
 * Obtiene la lista de juegos desde la API
 * Los datos se cachean después de la primera llamada
 * Si la API no está disponible, usa datos de prueba
 */
export const getGamesDatabase = async (): Promise<Game[]> => {
  if (cachedGames) {
    console.log("📦 Devolviendo juegos del caché");
    return cachedGames;
  }

  try {
    console.log("🔄 Intentando obtener juegos de la API...");
    const apiGames = await fetchGames();
    console.log("✅ Juegos obtenidos de la API:", apiGames.length);
    
    cachedGames = apiGames.map((game) => ({
      id: game.id,
      title: game.title,
      genres: game.genres,
      platforms: game.platforms,
      languages: game.languages,
      image: game.image,
      price: game.price,
      rating: game.rating,
      description: game.description,
    }));
    return cachedGames;
  } catch (error) {
    console.error("❌ Error loading games from API:", error);
    console.log("📚 Usando datos de prueba/fallback en su lugar");
    // Si hay error, retornar datos de prueba
    cachedGames = fallbackGames;
    return fallbackGames;
  }
};

/**
 * Datos por defecto (será reemplazado cuando la API esté disponible)
 */
export const gamesDatabase: Game[] = [];
