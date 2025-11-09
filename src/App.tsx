import { useState } from "react";
import { Header } from "./components/Header";
import { FeaturedCarousel } from "./components/FeaturedCarousel";
import { PopularGames } from "./components/PopularGames";
import { LoginModal } from "./components/LoginModal";
import { LibraryView } from "./components/LibraryView";
import { GameDetailView } from "./components/GameDetailView";

type View = "home" | "library" | "gameDetail";

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [currentView, setCurrentView] = useState<View>("home");
  const [selectedGameId, setSelectedGameId] = useState<number | null>(null);

  const handleGameClick = (gameId: number) => {
    setSelectedGameId(gameId);
    setCurrentView("gameDetail");
  };

  return (
    <div className="min-h-screen bg-[#0a0e17]">
      {/* Header */}
      <Header 
        onLoginClick={() => setIsLoginOpen(true)}
        onLibraryClick={() => setCurrentView("library")}
        onLogoClick={() => setCurrentView("home")}
      />
      
      {/* Main Content */}
      {currentView === "home" && (
        <main className="pt-20 px-6">
          <div className="container mx-auto max-w-7xl">
            {/* Featured Games Carousel */}
            <div className="mt-8">
              <FeaturedCarousel onGameClick={handleGameClick} />
            </div>
            
            {/* Popular Games Section */}
            <PopularGames onGameClick={handleGameClick} />
          </div>
        </main>
      )}

      {currentView === "library" && (
        <div className="pt-16">
          <LibraryView onGameClick={handleGameClick} />
        </div>
      )}

      {currentView === "gameDetail" && selectedGameId && (
        <GameDetailView gameId={selectedGameId} />
      )}

      {/* Login Modal */}
      <LoginModal open={isLoginOpen} onOpenChange={setIsLoginOpen} />
    </div>
  );
}
