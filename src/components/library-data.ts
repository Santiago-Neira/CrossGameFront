export interface Game {
  id: number;
  title: string;
  image: string;
}

export interface GameList {
  id: string;
  name: string;
  isDefault: boolean;
  gameIds: number[];
}

export const allGames: Game[] = [
  {
    id: 1,
    title: "Cyber Revolution 2077",
    image: "https://images.unsplash.com/photo-1664092815283-19c6196f5319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGdhbWUlMjBjeWJlcnB1bmt8ZW58MXx8fHwxNzYxNDkzNjkwfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    title: "Mystic Realms",
    image: "https://images.unsplash.com/photo-1698450998458-0bc1045788a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwZ2FtZSUyMGFydHdvcmt8ZW58MXx8fHwxNzYxNTE4NjU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    title: "Night Racers",
    image: "https://images.unsplash.com/photo-1753480865924-e79a938b6fd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBnYW1lJTIwbmlnaHR8ZW58MXx8fHwxNzYxNTE4NjU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 4,
    title: "Shadow Operations",
    image: "https://images.unsplash.com/photo-1759491978401-1dc6f38b6780?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9vdGVyJTIwZ2FtZXxlbnwxfHx8fDE3NjE1MTg2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 5,
    title: "Extreme Warriors",
    image: "https://images.unsplash.com/photo-1528723624453-3e53a413b392?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBnYW1lfGVufDF8fHx8MTc2MTUxODY1OXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 6,
    title: "Uncharted Horizons",
    image: "https://images.unsplash.com/photo-1736347837458-7cc3697ba57a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBnYW1lJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2MTUxODY1OXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 7,
    title: "Arena Fighters",
    image: "https://images.unsplash.com/photo-1759171053096-e7dbe7c36eb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWdodGluZyUyMGdhbWUlMjBhcmNhZGV8ZW58MXx8fHwxNzYxNzgyMjU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 8,
    title: "The Haunting",
    image: "https://images.unsplash.com/photo-1604052261789-17b9a95175a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBnYW1lJTIwZGFya3xlbnwxfHx8fDE3NjE3MTkxODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 9,
    title: "Football Championship",
    image: "https://images.unsplash.com/photo-1521258602057-9a3fbcb96df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBnYW1lJTIwc29jY2VyfGVufDF8fHx8MTc2MTc4MjI1OXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 10,
    title: "Tactical Command",
    image: "https://images.unsplash.com/photo-1677816156435-e844da620fa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhdGVneSUyMGdhbWUlMjBib2FyZHxlbnwxfHx8fDE3NjE3ODIyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 11,
    title: "Journey Beyond",
    image: "https://images.unsplash.com/photo-1744723066876-2bba74215ce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBnYW1lJTIwZXhwbG9yYXRpb258ZW58MXx8fHwxNzYxNzgyMjU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 12,
    title: "Dragon's Quest",
    image: "https://images.unsplash.com/photo-1698450998458-0bc1045788a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwZ2FtZSUyMGFydHdvcmt8ZW58MXx8fHwxNzYxNTE4NjU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export const defaultLists: GameList[] = [
  {
    id: "library",
    name: "Mi Biblioteca",
    isDefault: true,
    gameIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  }
];
