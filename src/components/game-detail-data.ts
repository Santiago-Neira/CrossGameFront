export interface Review {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface StorePrice {
  id: number;
  storeName: string;
  price: number;
  url: string;
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

export const gameDetailsData: Record<number, GameDetail> = {
  1: {
    id: 1,
    title: "Cyber Revolution 2077",
    developer: "NeoTech Studios",
    shortDescription: "Sumérgete en un mundo cyberpunk donde la tecnología y la humanidad chocan en una metrópolis del futuro.",
    description: "Cyber Revolution 2077 es un RPG de acción de mundo abierto ambientado en Night City, una megalópolis obsesionada con el poder, el glamur y la modificación corporal. Jugarás como V, un mercenario en busca de un implante único que es la clave para la inmortalidad. Personaliza el ciberware, las habilidades y el estilo de juego de tu personaje, y explora una vasta ciudad donde las decisiones que tomes moldean la historia y el mundo que te rodea. Con gráficos impresionantes, combate visceral y narrativa profunda, experimentarás una aventura inolvidable en el año 2077.",
    mainImage: "https://images.unsplash.com/photo-1625768539005-5c3fb9011cbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBnYW1lJTIwYXJ0fGVufDF8fHx8MTc2MTc2NzM3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    averageRating: 4.7,
    totalRatings: 15420,
    savedByUsers: 28543,
    estimatedHours: 80,
    genres: ["Acción", "RPG", "Aventura", "Mundo Abierto"],
    platforms: ["PC", "PlayStation 5", "Xbox Series X|S", "PlayStation 4", "Xbox One"],
    onlineMultiplayer: false,
    localMultiplayer: false,
    requiresInternet: false,
    releaseDate: "2020-12-10",
    prices: [
      {
        id: 1,
        storeName: "Steam",
        price: 59.99,
        url: "https://store.steampowered.com"
      },
      {
        id: 2,
        storeName: "Epic Games",
        price: 54.99,
        url: "https://www.epicgames.com"
      },
      {
        id: 3,
        storeName: "GOG",
        price: 59.99,
        url: "https://www.gog.com"
      },
      {
        id: 4,
        storeName: "PlayStation Store",
        price: 59.99,
        url: "https://store.playstation.com"
      }
    ],
    reviews: [
      {
        id: 1,
        userName: "CyberGamer92",
        rating: 5,
        comment: "Una obra maestra del género cyberpunk. La narrativa es increíble y los gráficos son impresionantes. El mundo es inmersivo y cada decisión importa.",
        date: "2024-01-15"
      },
      {
        id: 2,
        userName: "TechNinja",
        rating: 4,
        comment: "Gran juego con algunas fallas técnicas. La historia principal es excelente, pero los bugs pueden ser frustrantes. Aún así, muy recomendado.",
        date: "2024-02-20"
      },
      {
        id: 3,
        userName: "RPGFanatic",
        rating: 5,
        comment: "El mejor RPG que he jugado en años. La personalización de personajes es profunda y las misiones secundarias son tan buenas como la historia principal.",
        date: "2024-03-10"
      }
    ]
  },
  2: {
    id: 2,
    title: "Mystic Realms",
    developer: "Fantasy Forge Games",
    shortDescription: "Embárcate en una épica aventura de fantasía en un mundo lleno de magia, criaturas míticas y secretos antiguos.",
    description: "Mystic Realms te transporta a un vasto mundo de fantasía medieval donde la magia fluye libremente y las leyendas cobran vida. Como el Elegido, deberás reunir a héroes de todas las tierras para enfrentar una amenaza ancestral que amenaza con sumir el mundo en la oscuridad eterna. Explora bosques encantados, mazmorras peligrosas y ciudades prósperas mientras forjas alianzas y desbloqueas poderes místicos. Con un sistema de combate táctico por turnos y una narrativa ramificada, cada decisión moldea tu destino.",
    mainImage: "https://images.unsplash.com/photo-1698450998458-0bc1045788a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwZ2FtZSUyMGFydHdvcmt8ZW58MXx8fHwxNzYxNTE4NjU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    averageRating: 4.8,
    totalRatings: 12850,
    savedByUsers: 24120,
    estimatedHours: 120,
    genres: ["Fantasía", "RPG", "Aventura", "Estrategia"],
    platforms: ["PC", "PlayStation 5", "Xbox Series X|S", "Nintendo Switch"],
    onlineMultiplayer: true,
    localMultiplayer: false,
    requiresInternet: true,
    releaseDate: "2023-03-15",
    prices: [
      {
        id: 1,
        storeName: "Steam",
        price: 49.99,
        url: "https://store.steampowered.com"
      },
      {
        id: 2,
        storeName: "Epic Games",
        price: 49.99,
        url: "https://www.epicgames.com"
      },
      {
        id: 3,
        storeName: "Nintendo eShop",
        price: 49.99,
        url: "https://www.nintendo.com"
      }
    ],
    reviews: [
      {
        id: 1,
        userName: "FantasyLord",
        rating: 5,
        comment: "El mejor juego de fantasía desde Skyrim. El mundo es enorme y está lleno de contenido. Las 120 horas pasan volando.",
        date: "2023-04-20"
      },
      {
        id: 2,
        userName: "MageGamer",
        rating: 5,
        comment: "El sistema de magia es increíblemente profundo. Me encanta cómo cada hechizo tiene sus propias sinergias y estrategias.",
        date: "2023-05-15"
      },
      {
        id: 3,
        userName: "AdventureSeeker",
        rating: 4,
        comment: "Excelente juego con una historia cautivadora. Algunas misiones pueden ser repetitivas, pero en general es fantástico.",
        date: "2023-06-10"
      }
    ]
  },
  3: {
    id: 3,
    title: "Night Racers",
    developer: "Speed Demon Studios",
    shortDescription: "Domina las calles nocturnas en carreras ilegales de alta velocidad con personalización extrema de vehículos.",
    description: "Night Racers te pone al volante en el mundo underground de las carreras callejeras nocturnas. Compite en carreras ilegales por las calles de ciudades neón, personaliza tu vehículo hasta el último detalle y construye tu reputación como el corredor más rápido de la noche. Con física realista de conducción, un modo historia inmersivo y multijugador competitivo online, cada carrera es una batalla por la gloria y el efectivo.",
    mainImage: "https://images.unsplash.com/photo-1753480865924-e79a938b6fd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBnYW1lJTIwbmlnaHR8ZW58MXx8fHwxNzYxNTE4NjU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    averageRating: 4.5,
    totalRatings: 18920,
    savedByUsers: 32450,
    estimatedHours: 40,
    genres: ["Carreras", "Acción", "Arcade"],
    platforms: ["PC", "PlayStation 5", "Xbox Series X|S"],
    onlineMultiplayer: true,
    localMultiplayer: true,
    requiresInternet: false,
    releaseDate: "2023-09-22",
    prices: [
      {
        id: 1,
        storeName: "Steam",
        price: 39.99,
        url: "https://store.steampowered.com"
      },
      {
        id: 2,
        storeName: "Epic Games",
        price: 34.99,
        url: "https://www.epicgames.com"
      },
      {
        id: 3,
        storeName: "PlayStation Store",
        price: 39.99,
        url: "https://store.playstation.com"
      }
    ],
    reviews: [
      {
        id: 1,
        userName: "SpeedDemon",
        rating: 5,
        comment: "La mejor experiencia de carreras arcade que he tenido. La sensación de velocidad es increíble.",
        date: "2023-10-05"
      },
      {
        id: 2,
        userName: "CarEnthusiast",
        rating: 4,
        comment: "Gran juego de carreras. La personalización de coches es muy detallada. Me gustaría más variedad de pistas.",
        date: "2023-11-12"
      }
    ]
  }
};

// Default game detail for games without specific data
export const getGameDetail = (gameId: number): GameDetail => {
  return gameDetailsData[gameId] || {
    id: gameId,
    title: "Juego sin datos",
    developer: "Desarrollador Desconocido",
    shortDescription: "Descripción no disponible.",
    description: "Descripción detallada no disponible.",
    mainImage: "https://images.unsplash.com/photo-1660180445373-a4f28b7cf19c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwc2NyZWVuc2hvdCUyMGFjdGlvbnxlbnwxfHx8fDE3NjE3ODM0NTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    averageRating: 0,
    totalRatings: 0,
    savedByUsers: 0,
    estimatedHours: 0,
    genres: [],
    platforms: [],
    onlineMultiplayer: false,
    localMultiplayer: false,
    requiresInternet: false,
    releaseDate: "2023-01-01",
    prices: [],
    reviews: []
  };
};
