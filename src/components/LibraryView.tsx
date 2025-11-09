import { useState, useMemo } from "react";
import { LibrarySidebar } from "./LibrarySidebar";
import { GameGrid } from "./GameGrid";
import { allGames, defaultLists, GameList } from "./library-data";

interface LibraryViewProps {
  onGameClick?: (gameId: number) => void;
}

export function LibraryView({ onGameClick }: LibraryViewProps) {
  const [lists, setLists] = useState<GameList[]>([
    ...defaultLists,
    {
      id: "favorites",
      name: "Favoritos",
      isDefault: false,
      gameIds: [1, 2, 5, 8]
    },
    {
      id: "wishlist",
      name: "Lista de Deseos",
      isDefault: false,
      gameIds: [3, 6, 9]
    }
  ]);
  
  const [selectedListId, setSelectedListId] = useState("library");

  const selectedList = useMemo(
    () => lists.find((list) => list.id === selectedListId),
    [lists, selectedListId]
  );

  const gamesInSelectedList = useMemo(() => {
    if (!selectedList) return [];
    return allGames.filter((game) => selectedList.gameIds.includes(game.id));
  }, [selectedList]);

  const handleCreateList = (name: string) => {
    const newList: GameList = {
      id: `list-${Date.now()}`,
      name,
      isDefault: false,
      gameIds: []
    };
    setLists([...lists, newList]);
    setSelectedListId(newList.id);
  };

  const handleRenameList = (listId: string, newName: string) => {
    setLists(lists.map((list) =>
      list.id === listId ? { ...list, name: newName } : list
    ));
  };

  const handleDeleteList = (listId: string) => {
    setLists(lists.filter((list) => list.id !== listId));
    
    // If the deleted list was selected, select the default library
    if (selectedListId === listId) {
      setSelectedListId("library");
    }
  };

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <LibrarySidebar
        lists={lists}
        selectedListId={selectedListId}
        onSelectList={setSelectedListId}
        onCreateList={handleCreateList}
        onRenameList={handleRenameList}
        onDeleteList={handleDeleteList}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-8 py-8 max-w-[1600px]">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl text-white mb-2">
              {selectedList?.name || "Mi Biblioteca"}
            </h1>
            <p className="text-muted-foreground">
              {gamesInSelectedList.length} {gamesInSelectedList.length === 1 ? "juego" : "juegos"}
            </p>
          </div>

          {/* Game Grid */}
          <GameGrid games={gamesInSelectedList} onGameClick={onGameClick} />
        </div>
      </main>
    </div>
  );
}
