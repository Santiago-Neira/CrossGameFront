import { Box, User, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface HeaderProps {
  onLoginClick?: () => void;
  onLibraryClick?: () => void;
  onLogoClick?: () => void;
  onGenreChange?: (genre: string) => void;
  onPlatformChange?: (platform: string) => void;
  onLanguageChange?: (language: string) => void;
}

export function Header({
  onLoginClick,
  onLibraryClick,
  onLogoClick,
  onGenreChange,
  onPlatformChange,
  onLanguageChange,
}: HeaderProps) {
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

        {/* Filters */}
        <div className="flex-1 max-w-3xl flex items-center gap-4">
          {/* Géneros */}
          <Select onValueChange={onGenreChange}>
            <SelectTrigger className="h-11 bg-[#1e293b] border-[#334155] text-white hover:bg-[#2d3b52] focus:ring-blue-500">
              <SelectValue placeholder="Género" />
            </SelectTrigger>
            <SelectContent className="bg-[#1e293b] border-[#334155]">
              <SelectItem value="all" className="text-white hover:bg-[#334155]">
                Todos los géneros
              </SelectItem>
              <SelectItem value="action" className="text-white hover:bg-[#334155]">
                Acción
              </SelectItem>
              <SelectItem value="adventure" className="text-white hover:bg-[#334155]">
                Aventura
              </SelectItem>
              <SelectItem value="rpg" className="text-white hover:bg-[#334155]">
                RPG
              </SelectItem>
              <SelectItem value="strategy" className="text-white hover:bg-[#334155]">
                Estrategia
              </SelectItem>
              <SelectItem value="sports" className="text-white hover:bg-[#334155]">
                Deportes
              </SelectItem>
              <SelectItem value="racing" className="text-white hover:bg-[#334155]">
                Carreras
              </SelectItem>
              <SelectItem value="shooter" className="text-white hover:bg-[#334155]">
                Disparos
              </SelectItem>
              <SelectItem value="horror" className="text-white hover:bg-[#334155]">
                Terror
              </SelectItem>
            </SelectContent>
          </Select>

          {/* Plataformas */}
          <Select onValueChange={onPlatformChange}>
            <SelectTrigger className="h-11 bg-[#1e293b] border-[#334155] text-white hover:bg-[#2d3b52] focus:ring-blue-500">
              <SelectValue placeholder="Plataforma" />
            </SelectTrigger>
            <SelectContent className="bg-[#1e293b] border-[#334155]">
              <SelectItem value="all" className="text-white hover:bg-[#334155]">
                Todas las plataformas
              </SelectItem>
              <SelectItem value="pc" className="text-white hover:bg-[#334155]">
                PC
              </SelectItem>
              <SelectItem value="ps5" className="text-white hover:bg-[#334155]">
                PlayStation 5
              </SelectItem>
              <SelectItem value="ps4" className="text-white hover:bg-[#334155]">
                PlayStation 4
              </SelectItem>
              <SelectItem value="xbox-series" className="text-white hover:bg-[#334155]">
                Xbox Series X|S
              </SelectItem>
              <SelectItem value="xbox-one" className="text-white hover:bg-[#334155]">
                Xbox One
              </SelectItem>
              <SelectItem value="switch" className="text-white hover:bg-[#334155]">
                Nintendo Switch
              </SelectItem>
            </SelectContent>
          </Select>

          {/* Idioma */}
          <Select onValueChange={onLanguageChange}>
            <SelectTrigger className="h-11 bg-[#1e293b] border-[#334155] text-white hover:bg-[#2d3b52] focus:ring-blue-500">
              <SelectValue placeholder="Idioma" />
            </SelectTrigger>
            <SelectContent className="bg-[#1e293b] border-[#334155]">
              <SelectItem value="all" className="text-white hover:bg-[#334155]">
                Todos los idiomas
              </SelectItem>
              <SelectItem value="es" className="text-white hover:bg-[#334155]">
                Español
              </SelectItem>
              <SelectItem value="en" className="text-white hover:bg-[#334155]">
                Inglés
              </SelectItem>
              <SelectItem value="fr" className="text-white hover:bg-[#334155]">
                Francés
              </SelectItem>
              <SelectItem value="de" className="text-white hover:bg-[#334155]">
                Alemán
              </SelectItem>
              <SelectItem value="it" className="text-white hover:bg-[#334155]">
                Italiano
              </SelectItem>
              <SelectItem value="pt" className="text-white hover:bg-[#334155]">
                Portugués
              </SelectItem>
              <SelectItem value="ja" className="text-white hover:bg-[#334155]">
                Japonés
              </SelectItem>
            </SelectContent>
          </Select>
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