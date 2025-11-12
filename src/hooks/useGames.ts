import { useState, useEffect } from "react";
import { getGamesDatabase, type Game } from "../components/games-data";
import { getGameDetail, type GameDetail } from "../components/game-detail-data";

/**
 * Hook para obtener la lista de todos los juegos
 */
export function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadGames = async () => {
      try {
        setLoading(true);
        setError(null);
        const allGames = await getGamesDatabase();
        setGames(allGames);
      } catch (err) {
        const error = err instanceof Error ? err : new Error("Error desconocido");
        setError(error);
        console.error("Error loading games:", error);
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  return { games, loading, error };
}

/**
 * Hook para obtener los detalles de un juego específico
 */
export function useGameDetail(gameId: number) {
  const [game, setGame] = useState<GameDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadGameDetail = async () => {
      try {
        setLoading(true);
        setError(null);
        const gameData = await getGameDetail(gameId);
        setGame(gameData);
      } catch (err) {
        const error = err instanceof Error ? err : new Error("Error desconocido");
        setError(error);
        console.error("Error loading game detail:", error);
      } finally {
        setLoading(false);
      }
    };

    loadGameDetail();
  }, [gameId]);

  return { game, loading, error };
}
