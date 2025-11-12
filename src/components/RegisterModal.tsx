import { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Checkbox } from "./ui/checkbox";

interface RegisterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSwitchToLogin?: () => void;
}

export function RegisterModal({ open, onOpenChange, onSwitchToLogin }: RegisterModalProps) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación de contraseñas
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    if (!acceptTerms) {
      alert("Debes aceptar los términos y condiciones");
      return;
    }

    // Handle register logic here
    console.log("Register attempt:", formData);
    alert("¡Cuenta creada exitosamente!");
    onOpenChange(false);
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
      <DialogContent className="max-w-[500px] p-0 border-0 bg-transparent overflow-hidden gap-0">
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

        {/* Register Form Card */}
        <div className="relative bg-[#1a1d24]/95 backdrop-blur-xl rounded-lg p-8 shadow-2xl border border-[#2A2D34]">
          <div className="space-y-6">
            {/* Header */}
            <div className="text-center space-y-2">
              <h2 className="text-2xl text-white tracking-tight">Crear Cuenta</h2>
              <p className="text-sm text-muted-foreground">
                Únete a la comunidad de CrossGame
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Username Field */}
              <div className="space-y-2">
                <Label htmlFor="register-username" className="text-sm text-foreground">
                  Nombre de Usuario
                </Label>
                <Input
                  id="register-username"
                  type="text"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="w-full bg-[#2A2D34] border-[#2A2D34] text-white h-11 rounded-md focus-visible:ring-2 focus-visible:ring-[#007BFF] focus-visible:ring-offset-0 focus-visible:border-[#007BFF] transition-all duration-200"
                  placeholder="Elige un nombre de usuario"
                  required
                  minLength={3}
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="register-email" className="text-sm text-foreground">
                  Email
                </Label>
                <Input
                  id="register-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#2A2D34] border-[#2A2D34] text-white h-11 rounded-md focus-visible:ring-2 focus-visible:ring-[#007BFF] focus-visible:ring-offset-0 focus-visible:border-[#007BFF] transition-all duration-200"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="register-password" className="text-sm text-foreground">
                  Contraseña
                </Label>
                <Input
                  id="register-password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-[#2A2D34] border-[#2A2D34] text-white h-11 rounded-md focus-visible:ring-2 focus-visible:ring-[#007BFF] focus-visible:ring-offset-0 focus-visible:border-[#007BFF] transition-all duration-200"
                  placeholder="Mínimo 8 caracteres"
                  required
                  minLength={8}
                />
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-2">
                <Label htmlFor="register-confirm-password" className="text-sm text-foreground">
                  Confirmar Contraseña
                </Label>
                <Input
                  id="register-confirm-password"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full bg-[#2A2D34] border-[#2A2D34] text-white h-11 rounded-md focus-visible:ring-2 focus-visible:ring-[#007BFF] focus-visible:ring-offset-0 focus-visible:border-[#007BFF] transition-all duration-200"
                  placeholder="Repite tu contraseña"
                  required
                  minLength={8}
                />
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start gap-3 pt-2">
                <Checkbox
                  id="terms"
                  checked={acceptTerms}
                  onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                  className="mt-0.5 border-[#2A2D34] data-[state=checked]:bg-[#007BFF] data-[state=checked]:border-[#007BFF]"
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-muted-foreground leading-tight cursor-pointer"
                >
                  Acepto los{" "}
                  <button
                    type="button"
                    className="text-[#007BFF] hover:text-[#0066CC] transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("Terms clicked");
                    }}
                  >
                    términos y condiciones
                  </button>{" "}
                  y la{" "}
                  <button
                    type="button"
                    className="text-[#007BFF] hover:text-[#0066CC] transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("Privacy clicked");
                    }}
                  >
                    política de privacidad
                  </button>
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-[#007BFF] hover:bg-[#0066CC] text-white h-12 rounded-md transition-all duration-200 shadow-lg shadow-blue-900/30"
              >
                CREAR CUENTA
              </Button>
            </form>

            {/* Login Link */}
            <div className="text-center pt-2">
              <p className="text-sm text-muted-foreground">
                ¿Ya tienes una cuenta?{" "}
                <button
                  type="button"
                  className="text-[#007BFF] hover:text-[#0066CC] transition-colors"
                  onClick={onSwitchToLogin}
                >
                  Inicia sesión
                </button>
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}