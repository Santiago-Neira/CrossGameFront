import { Search, Box, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface HeaderProps {
  onLoginClick?: () => void;
  onLibraryClick?: () => void;
  onLogoClick?: () => void;
}

export function Header({ onLoginClick, onLibraryClick, onLogoClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e17]/95 backdrop-blur-sm border-b border-[#1e293b]">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <button 
          onClick={onLogoClick}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded flex items-center justify-center">
            <Box className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl text-white">CrossGame</span>
        </button>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar juegos..."
            className="w-full pl-12 pr-4 h-11 bg-[#1e293b] border-[#334155] text-white placeholder:text-muted-foreground rounded-lg focus-visible:ring-blue-500"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Button
            onClick={onLibraryClick}
            variant="ghost"
            className="flex items-center gap-2 text-white hover:bg-[#1e293b] hover:text-blue-400 transition-colors"
          >
            <Box className="w-5 h-5" />
            <span>Mi Biblioteca</span>
          </Button>
          
          <button 
            onClick={onLoginClick}
            className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            <User className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </header>
  );
}
