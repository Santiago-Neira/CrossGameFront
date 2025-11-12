import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { FeaturedCarousel } from "./components/FeaturedCarousel";
import { PopularGames } from "./components/PopularGames";
import { LoginModal } from "./components/LoginModal";
import { RegisterModal } from "./components/RegisterModal";
import { LibraryView } from "./components/LibraryView";
import { GameDetailView } from "./components/GameDetailView";
import { FilteredGamesView } from "./components/FilteredGamesView";
import { getGamesDatabase } from "./components/games-data";

type View = "home" | "library" | "gameDetail" | "filtered";

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [currentView, setCurrentView] = useState<View>("home");
  const [selectedGameId, setSelectedGameId] = useState<number | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<string>("all");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("all");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");

  // Prefetch de datos al montar la aplicación para desarrollo/debug
  useEffect(() => {
    const prefetch = async () => {
      try {
        console.log("🔍 Prefetching games from API (if available)...");
        await getGamesDatabase();
        console.log("✅ Prefetch complete");
      } catch (err) {
        console.warn("⚠️ Prefetch failed (using fallback if available):", err);
      }
    };

    prefetch();
  }, []);

  const handleGameClick = (gameId: number) => {
    setSelectedGameId(gameId);
    setCurrentView("gameDetail");
  };

  const handleGenreChange = (genre: string) => {
    setSelectedGenre(genre);
    setCurrentView("filtered");
  };

  const handlePlatformChange = (platform: string) => {
    setSelectedPlatform(platform);
    setCurrentView("filtered");
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setCurrentView("filtered");
  };

  const handleSwitchToRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0e17]">
      {/* Header */}
      <Header 
        onLoginClick={() => setIsLoginOpen(true)}
        onLibraryClick={() => setCurrentView("library")}
        onLogoClick={() => setCurrentView("home")}
        onGenreChange={handleGenreChange}
        onPlatformChange={handlePlatformChange}
        onLanguageChange={handleLanguageChange}
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

      {currentView === "filtered" && (
        <FilteredGamesView 
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
          selectedLanguage={selectedLanguage}
          onGameClick={handleGameClick}
        />
      )}

      {currentView === "gameDetail" && selectedGameId && (
        <GameDetailView gameId={selectedGameId} />
      )}

      {/* Login Modal */}
      <LoginModal 
        open={isLoginOpen} 
        onOpenChange={setIsLoginOpen}
        onSwitchToRegister={handleSwitchToRegister}
      />

      {/* Register Modal */}
      <RegisterModal 
        open={isRegisterOpen} 
        onOpenChange={setIsRegisterOpen}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </div>
  );
}