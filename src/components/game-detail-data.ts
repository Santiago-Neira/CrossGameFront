import { fetchGameDetail, GameDetailApiResponse } from "../services/api-service";

export interface Review {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface StorePrice {
  id?: number;
  storeName: string;
  price: number;
  url?: string;
  logo?: string;
}

export interface GameDetail {
  id: number;
  title: string;
  developer: string;
  description: string;
  shortDescription: string;
  mainImage: string;
  averageRating: number;
  totalRatings: number;
  savedByUsers: number;
  estimatedHours: number;
  genres: string[];
  platforms: string[];
  onlineMultiplayer: boolean;
  localMultiplayer: boolean;
  requiresInternet: boolean;
  releaseDate: string;
  prices: StorePrice[];
  reviews: Review[];
}

// Cache para almacenar detalles de juegos ya cargados
const gameDetailCache: Record<number, GameDetail> = {};

/**
 * Obtiene los detalles de un juego desde la API
 * Los resultados se cachean para evitar llamadas repetidas
 */
export const getGameDetail = async (gameId: number): Promise<GameDetail> => {
  // Verificar si el detalle ya está en caché
  if (gameDetailCache[gameId]) {
    return gameDetailCache[gameId];
  }

  try {
    const apiDetail = await fetchGameDetail(gameId);
    
    // Mapear datos de la API al formato local (defensas contra campos faltantes)
    const pricesFromApi = (apiDetail as any).prices ?? [];
    const reviewsFromApi = (apiDetail as any).reviews ?? [];

    const gameDetail: GameDetail = {
      id: apiDetail.id ?? gameId,
      title: apiDetail.title ?? `Juego #${gameId}`,
      developer: apiDetail.developer ?? "Desarrollador Desconocido",
      description: apiDetail.description ?? "",
      shortDescription: apiDetail.shortDescription ?? "",
      mainImage: apiDetail.mainImage ?? "",
      averageRating: apiDetail.averageRating ?? 0,
      totalRatings: apiDetail.totalRatings ?? 0,
      savedByUsers: apiDetail.savedByUsers ?? 0,
      estimatedHours: apiDetail.estimatedHours ?? 0,
      genres: Array.isArray(apiDetail.genres) ? apiDetail.genres : [],
      platforms: Array.isArray(apiDetail.platforms) ? apiDetail.platforms : [],
      onlineMultiplayer: Boolean(apiDetail.onlineMultiplayer),
      localMultiplayer: Boolean(apiDetail.localMultiplayer),
      requiresInternet: Boolean(apiDetail.requiresInternet),
      releaseDate: apiDetail.releaseDate ?? "",
      prices: Array.isArray(pricesFromApi)
        ? pricesFromApi.map((price: any, index: number) => ({
            id: index,
            storeName: price.storeName ?? "Tienda",
            price: typeof price.price === "number" ? price.price : 0,
            url: price.url,
          }))
        : [],
      reviews: Array.isArray(reviewsFromApi) ? reviewsFromApi : [],
    };

    // Guardar en caché
    gameDetailCache[gameId] = gameDetail;
    return gameDetail;
  } catch (error) {
    console.error(`Error fetching game detail ${gameId}:`, error);
    // Retornar un objeto por defecto si hay error
    return getDefaultGameDetail(gameId);
  }
};

/**
 * Retorna un objeto GameDetail por defecto cuando no hay datos disponibles
 * Intenta devolver datos de prueba si el ID coincide con uno conocido
 */
const getDefaultGameDetail = (gameId: number): GameDetail => {
  // Datos de prueba para algunos IDs comunes
  const mockDetails: Record<number, GameDetail> = {
    1: {
      id: 1,
      title: "Cyber Revolution 2077",
      developer: "NeoTech Studios",
      shortDescription: "Sumérgete en un mundo cyberpunk donde la tecnología y la humanidad chocan en una metrópolis del futuro.",
      description: "Cyber Revolution 2077 es un RPG de acción de mundo abierto ambientado en Night City, una megalópolis obsesionada con el poder, el glamur y la modificación corporal. Jugarás como V, un mercenario en busca de un implante único que es la clave para la inmortalidad. Personaliza el ciberware, las habilidades y el estilo de juego de tu personaje, y explora una vasta ciudad donde las decisiones que tomes moldean la historia y el mundo que te rodea.",
      mainImage: "https://images.unsplash.com/photo-1664092815283-19c6196f5319?w=1000",
      averageRating: 4.8,
      totalRatings: 15420,
      savedByUsers: 28543,
      estimatedHours: 80,
      genres: ["Acción", "RPG", "Aventura"],
      platforms: ["PC", "PlayStation 5", "Xbox Series X|S"],
      onlineMultiplayer: false,
      localMultiplayer: false,
      requiresInternet: false,
      releaseDate: "2020-12-10",
      prices: [
        { id: 1, storeName: "Steam", price: 59.99, url: "https://store.steampowered.com" },
        { id: 2, storeName: "Epic Games", price: 54.99, url: "https://www.epicgames.com" }
      ],
      reviews: [
        {
          id: 1,
          userName: "CyberGamer92",
          rating: 5,
          comment: "Una obra maestra del género cyberpunk. La narrativa es increíble.",
          date: "2024-01-15"
        }
      ]
    },
    2: {
      id: 2,
      title: "Mystic Realms",
      developer: "Fantasy Forge Games",
      shortDescription: "Embárcate en una épica aventura de fantasía en un mundo lleno de magia.",
      description: "Mystic Realms te transporta a un vasto mundo de fantasía medieval donde la magia fluye libremente. Como el Elegido, deberás reunir a héroes de todas las tierras para enfrentar una amenaza ancestral.",
      mainImage: "https://images.unsplash.com/photo-1698450998458-0bc1045788a1?w=1000",
      averageRating: 4.6,
      totalRatings: 12850,
      savedByUsers: 24120,
      estimatedHours: 120,
      genres: ["Fantasía", "RPG", "Aventura"],
      platforms: ["PC", "PlayStation 5", "Nintendo Switch"],
      onlineMultiplayer: true,
      localMultiplayer: false,
      requiresInternet: true,
      releaseDate: "2023-03-15",
      prices: [
        { id: 1, storeName: "Steam", price: 49.99, url: "https://store.steampowered.com" }
      ],
      reviews: [
        {
          id: 1,
          userName: "FantasyLord",
          rating: 5,
          comment: "El mejor juego de fantasía desde hace años.",
          date: "2023-04-20"
        }
      ]
    }
  };

  return mockDetails[gameId] || {
    id: gameId,
    title: `Juego #${gameId}`,
    developer: "Desarrollador Desconocido",
    shortDescription: "Descripción no disponible en este momento.",
    description: "Para ver detalles completos, asegúrate de que tu API backend esté corriendo en http://localhost:8000",
    mainImage: "https://images.unsplash.com/photo-1660180445373-a4f28b7cf19c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwc2NyZWVuc2hvdCUyMGFjdGlvbnxlbnwxfHx8fDE3NjE3ODM0NTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    averageRating: 4.5,
    totalRatings: 1000,
    savedByUsers: 5000,
    estimatedHours: 50,
    genres: ["Acción"],
    platforms: ["PC"],
    onlineMultiplayer: false,
    localMultiplayer: false,
    requiresInternet: false,
    releaseDate: "2023-01-01",
    prices: [
      { id: 1, storeName: "Steam", price: 39.99, url: "https://store.steampowered.com" }
    ],
    reviews: [
      {
        id: 1,
        userName: "Jugador",
        rating: 4,
        comment: "Buen juego, recomendado.",
        date: "2024-01-01"
      }
    ]
  };
};
