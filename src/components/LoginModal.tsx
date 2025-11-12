import { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSwitchToRegister?: () => void;
}

export function LoginModal({ open, onOpenChange, onSwitchToRegister }: LoginModalProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { username, password });
  };

  // Array of gaming background images
  const backgroundImages = [
    "https://images.unsplash.com/photo-1689443111070-2c1a1110fe82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjeWJlcnB1bmslMjBmdXR1cmlzdGljfGVufDF8fHx8MTc2MTUxOTcyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1700300325884-10715799da7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGdhbWUlMjBmYW50YXN5JTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2MTUxOTczMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1558744059-a9e737085db7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwZ2FtaW5nJTIwbmVvbnxlbnwxfHx8fDE3NjE1MTk3MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1739377761244-f9bcab1b8b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBnYW1lJTIwc2hvb3RlcnxlbnwxfHx8fDE3NjE0NTI3MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[450px] p-0 border-0 bg-transparent overflow-hidden gap-0">
        {/* Blurred Background Gallery */}
        <div className="absolute inset-0 -z-10 grid grid-cols-2 grid-rows-2">
          {backgroundImages.map((img, index) => (
            <div key={index} className="relative w-full h-full overflow-hidden">
              <ImageWithFallback
                src={img}
                alt={`Gaming background ${index + 1}`}
                className="w-full h-full object-cover"
                style={{ filter: "blur(20px) brightness(0.4)", transform: "scale(1.2)" }}
              />
            </div>
          ))}
        </div>

        {/* Login Form Card */}
        <div className="relative bg-[#1a1d24]/95 backdrop-blur-xl rounded-lg p-8 shadow-2xl border border-[#2A2D34]">
          <div className="space-y-6">
            {/* Header */}
            <div className="text-center space-y-2">
              <h2 className="text-2xl text-white tracking-tight">Bienvenido de vuelta</h2>
              <p className="text-sm text-muted-foreground">
                Inicia sesión para acceder a tu biblioteca
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Username/Email Field */}
              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm text-foreground">
                  Nombre de Usuario o Email
                </Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-[#2A2D34] border-[#2A2D34] text-white h-11 rounded-md focus-visible:ring-2 focus-visible:ring-[#007BFF] focus-visible:ring-offset-0 focus-visible:border-[#007BFF] transition-all duration-200"
                  placeholder="Ingresa tu usuario o email"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm text-foreground">
                  Contraseña
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#2A2D34] border-[#2A2D34] text-white h-11 rounded-md focus-visible:ring-2 focus-visible:ring-[#007BFF] focus-visible:ring-offset-0 focus-visible:border-[#007BFF] transition-all duration-200"
                  placeholder="Ingresa tu contraseña"
                  required
                />
              </div>

              {/* Forgot Password Link */}
              <div className="text-right">
                <button
                  type="button"
                  className="text-sm text-[#007BFF] hover:text-[#0066CC] transition-colors"
                  onClick={() => console.log("Forgot password clicked")}
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-[#007BFF] hover:bg-[#0066CC] text-white h-12 rounded-md transition-all duration-200 shadow-lg shadow-blue-900/30"
              >
                INICIAR SESIÓN
              </Button>
            </form>

            {/* Sign Up Link */}
            <div className="text-center pt-2">
              <p className="text-sm text-muted-foreground">
                ¿No tienes una cuenta?{" "}
                <button
                  type="button"
                  className="text-[#007BFF] hover:text-[#0066CC] transition-colors"
                  onClick={onSwitchToRegister}
                >
                  Regístrate
                </button>
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}