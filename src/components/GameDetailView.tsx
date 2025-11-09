import { Star, Heart, Clock, Users, Wifi, Monitor, User } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { getGameDetail } from "./game-detail-data";
import { Separator } from "./ui/separator";

interface GameDetailViewProps {
  gameId: number;
}

export function GameDetailView({ gameId }: GameDetailViewProps) {
  const game = getGameDetail(gameId);

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= Math.round(rating)
                ? "fill-yellow-500 text-yellow-500"
                : "text-gray-600"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0e17] pt-16">
      <div className="container mx-auto px-8 py-8 max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Panel - Visual & Key Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Image */}
            <div className="relative aspect-video overflow-hidden rounded-lg border border-[#1e293b]">
              <ImageWithFallback
                src={game.mainImage}
                alt={game.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Key Stats */}
            <div className="bg-[#1a1f2e] rounded-lg p-6 border border-[#1e293b] space-y-4">
              {/* Rating */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {renderStars(game.averageRating)}
                  <span className="text-2xl text-white">{game.averageRating}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {game.totalRatings.toLocaleString()} valoraciones
                </span>
              </div>

              <Separator className="bg-[#1e293b]" />

              {/* Saved by Users */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Heart className="w-5 h-5" />
                  <span>Guardado por usuarios</span>
                </div>
                <span className="text-white">
                  {game.savedByUsers.toLocaleString()}
                </span>
              </div>

              {/* Estimated Hours */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-5 h-5" />
                  <span>Duración estimada</span>
                </div>
                <span className="text-white">{game.estimatedHours} horas</span>
              </div>
            </div>

            {/* Price Comparison Table */}
            {game.prices.length > 0 && (
              <div className="bg-[#1a1f2e] rounded-lg p-6 border border-[#1e293b]">
                <h3 className="text-xl mb-4 text-white">Disponible en</h3>
                <div className="space-y-2">
                  {game.prices.map((store) => (
                    <button
                      key={store.id}
                      onClick={() => window.open(store.url, "_blank")}
                      className="w-full flex items-center justify-between p-3 rounded-lg bg-[#0f1218] hover:bg-[#1e293b] border border-[#1e293b] hover:border-blue-500 transition-all group"
                    >
                      <span className="text-white group-hover:text-blue-400 transition-colors">
                        {store.storeName}
                      </span>
                      <span className="text-blue-400">${store.price.toFixed(2)}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Action Button */}
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12">
              <Heart className="w-5 h-5 mr-2" />
              Añadir a Mi Biblioteca
            </Button>
          </div>

          {/* Right Panel - Details & Reviews */}
          <div className="lg:col-span-3 space-y-8">
            {/* Title and Developer */}
            <div>
              <h1 className="text-4xl mb-2 text-white">{game.title}</h1>
              <p className="text-lg text-blue-400">por {game.developer}</p>
            </div>

            {/* Short Description */}
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {game.shortDescription}
              </p>
            </div>

            {/* Full Description */}
            <div className="bg-[#1a1f2e] rounded-lg p-6 border border-[#1e293b]">
              <h3 className="text-xl mb-4 text-white">Descripción</h3>
              <p className="text-foreground leading-relaxed">{game.description}</p>
            </div>

            {/* Technical Details */}
            <div className="bg-[#1a1f2e] rounded-lg p-6 border border-[#1e293b] space-y-6">
              <h3 className="text-xl text-white">Detalles</h3>

              {/* Genres */}
              <div>
                <h4 className="text-sm text-muted-foreground mb-3">Géneros</h4>
                <div className="flex flex-wrap gap-2">
                  {game.genres.map((genre, index) => (
                    <Badge
                      key={index}
                      className="bg-blue-600/20 text-blue-400 border-blue-600/50 hover:bg-blue-600/30"
                    >
                      {genre}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator className="bg-[#1e293b]" />

              {/* Platforms */}
              <div>
                <h4 className="text-sm text-muted-foreground mb-3">Plataformas</h4>
                <div className="flex flex-wrap gap-2">
                  {game.platforms.map((platform, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-[#0f1218] text-foreground border-[#2a2d34]"
                    >
                      <Monitor className="w-3 h-3 mr-1" />
                      {platform}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator className="bg-[#1e293b]" />

              {/* Multiplayer Features */}
              <div className="space-y-3">
                <h4 className="text-sm text-muted-foreground mb-3">Características</h4>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-foreground">
                    <Wifi className="w-4 h-4" />
                    <span>Multijugador Online</span>
                  </div>
                  <Badge
                    variant={game.onlineMultiplayer ? "default" : "outline"}
                    className={
                      game.onlineMultiplayer
                        ? "bg-green-600/20 text-green-400 border-green-600/50"
                        : "bg-gray-600/20 text-gray-400 border-gray-600/50"
                    }
                  >
                    {game.onlineMultiplayer ? "Sí" : "No"}
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-foreground">
                    <Users className="w-4 h-4" />
                    <span>Multijugador Local</span>
                  </div>
                  <Badge
                    variant={game.localMultiplayer ? "default" : "outline"}
                    className={
                      game.localMultiplayer
                        ? "bg-green-600/20 text-green-400 border-green-600/50"
                        : "bg-gray-600/20 text-gray-400 border-gray-600/50"
                    }
                  >
                    {game.localMultiplayer ? "Sí" : "No"}
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-foreground">
                    <Wifi className="w-4 h-4" />
                    <span>Requiere Internet</span>
                  </div>
                  <Badge
                    variant={game.requiresInternet ? "default" : "outline"}
                    className={
                      game.requiresInternet
                        ? "bg-yellow-600/20 text-yellow-400 border-yellow-600/50"
                        : "bg-gray-600/20 text-gray-400 border-gray-600/50"
                    }
                  >
                    {game.requiresInternet ? "Sí" : "No"}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            {game.reviews.length > 0 && (
              <div className="bg-[#1a1f2e] rounded-lg p-6 border border-[#1e293b] space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl text-white">Reseñas de Usuarios</h3>
                  <Button variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-[#1e293b]">
                    Ver todas
                  </Button>
                </div>

                <div className="space-y-4">
                  {game.reviews.slice(0, 3).map((review) => (
                    <div
                      key={review.id}
                      className="p-4 rounded-lg bg-[#0f1218] border border-[#1e293b]"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                            <User className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-white">{review.userName}</p>
                            <p className="text-xs text-muted-foreground">
                              {new Date(review.date).toLocaleDateString('es-ES', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </p>
                          </div>
                        </div>
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-foreground leading-relaxed">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
