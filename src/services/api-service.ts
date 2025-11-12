const API_BASE_URL = "http://localhost:8000/frontend";

export interface ApiResponse<T> {
  success: boolean;
  count?: number;
  data: T;
}

export interface GameApiResponse {
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

export interface GameDetailApiResponse {
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
  prices: Array<{
    storeName: string;
    price: number;
    url?: string;
  }>;
  reviews: Array<{
    id: number;
    userName: string;
    rating: number;
    comment: string;
    date: string;
  }>;
}

/**
 * Obtiene la lista de todos los juegos desde el endpoint general
 */
export const fetchGames = async (): Promise<GameApiResponse[]> => {
  try {
  const url = `${API_BASE_URL}/games`;
    console.log("🔗 Intentando conectar a:", url);
    const response = await fetch(url);
    
    console.log("📊 Respuesta del servidor - Status:", response.status);
    
    if (!response.ok) {
      throw new Error(`Error en la API: ${response.status}`);
    }
    const data: ApiResponse<GameApiResponse[]> = await response.json();
    if (!data.success) {
      throw new Error("La API retornó success: false");
    }
    return data.data;
  } catch (error) {
    console.error("Error fetching games:", error);
    throw error;
  }
};

/**
 * Obtiene la información básica de un juego específico
 */
export const fetchGameById = async (gameId: number): Promise<GameApiResponse> => {
  try {
    const url = `${API_BASE_URL}/games/${gameId}`;
    console.log("🔗 fetchGameById ->", url);
    if (isNaN(Number(gameId))) {
      console.warn(`⚠️ fetchGameById received non-numeric id: ${gameId}`);
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error en la API: ${response.status}`);
    }
    const data: GameApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching game ${gameId}:`, error);
    throw error;
  }
};

/**
 * Obtiene los detalles completos de un juego
 */
export const fetchGameDetail = async (gameId: number): Promise<GameDetailApiResponse> => {
  try {
    const url = `${API_BASE_URL}/games/${gameId}/detail`;
    console.log("🔗 fetchGameDetail ->", url);
    if (isNaN(Number(gameId))) {
      console.warn(`⚠️ fetchGameDetail received non-numeric id: ${gameId}`);
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error en la API: ${response.status}`);
    }
      const data: GameDetailApiResponse = await response.json();
      // Loguear una vista previa para debugging cuando algo no coincide con lo esperado
      try {
        console.log(`📦 Game detail from API (id=${gameId}):`, {
          id: data.id,
          title: data.title,
          prices: Array.isArray((data as any).prices) ? (data as any).prices.length : (data as any).prices,
          reviews: Array.isArray((data as any).reviews) ? (data as any).reviews.length : (data as any).reviews,
        });
      } catch (e) {
        // ignore logging errors
      }
    return data;
  } catch (error) {
    console.error(`Error fetching game detail ${gameId}:`, error);
    throw error;
  }
};
