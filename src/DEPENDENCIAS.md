# Dependencias del Proyecto - Catálogo de Videojuegos

## 📦 Resumen Ejecutivo

Tu aplicación de catálogo de videojuegos **NO requiere instalación de npm** cuando la ejecutas en Figma Make, ya que el entorno maneja las dependencias automáticamente.

Sin embargo, si deseas ejecutar el proyecto localmente, aquí están todas las dependencias necesarias.

---

## 🎯 Versión React/TypeScript (Carpeta raíz)

### Dependencias Principales

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "^0.487.0",
    "embla-carousel-react": "^8.6.0",
    "@radix-ui/react-select": "^2.1.6",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.5"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "typescript": "^5.6.3",
    "vite": "^6.0.1",
    "tailwindcss": "^4.0.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49"
  }
}
```

### Comandos de Instalación (Local)

```bash
# Inicializar proyecto
npm create vite@latest game-catalog -- --template react-ts

# Navegar a la carpeta del proyecto
cd game-catalog

# Instalar dependencias principales
npm install react react-dom
npm install lucide-react@0.487.0
npm install embla-carousel-react@8.6.0
npm install @radix-ui/react-select@2.1.6
npm install class-variance-authority clsx tailwind-merge

# Instalar dependencias de desarrollo
npm install -D @types/react @types/react-dom
npm install -D typescript @vitejs/plugin-react vite
npm install -D tailwindcss autoprefixer postcss

# Iniciar servidor de desarrollo
npm run dev
```

---

## 🌐 Versión Vanilla (HTML/CSS/JavaScript)

La versión vanilla en `/vanilla-version` **NO requiere ninguna dependencia externa**.

### Archivos Necesarios

```
vanilla-version/
├── index.html       # Página principal
├── styles.css       # Estilos completos
├── data.js          # Datos de juegos
└── app.js           # Lógica de la aplicación
```

### Cómo Ejecutar

1. **Opción 1: Doble clic en `index.html`**
   - Simplemente abre el archivo en tu navegador favorito

2. **Opción 2: Live Server en VS Code**
   ```bash
   # Instalar extensión Live Server en VS Code
   # Luego: Click derecho en index.html → "Open with Live Server"
   ```

3. **Opción 3: Servidor HTTP Simple**
   ```bash
   # Con Python 3
   cd vanilla-version
   python -m http.server 8000
   
   # Con Node.js (requiere http-server global)
   npx http-server vanilla-version -p 8000
   ```

---

## 📚 Librerías y Componentes Utilizados

### 1. **Lucide React** (Iconos)
- **Versión**: 0.487.0
- **Uso**: Iconos para UI (Search, Box, User, Star, etc.)
- **Importación**:
  ```tsx
  import { Search, Box, User } from "lucide-react";
  ```

### 2. **Embla Carousel**
- **Versión**: 8.6.0
- **Uso**: Carrusel de juegos destacados
- **Importación**:
  ```tsx
  import useEmblaCarousel from "embla-carousel-react@8.6.0";
  ```

### 3. **Shadcn/UI Components**
Componentes de UI utilizados (ya incluidos en `/components/ui`):
- `button.tsx` - Botones
- `input.tsx` - Campos de texto
- `select.tsx` - Selectores desplegables (filtros de género, plataforma, idioma)
- `dialog.tsx` - Modales
- `label.tsx` - Etiquetas de formulario
- `carousel.tsx` - Componente de carrusel
- `tabs.tsx` - Sistema de pestañas
- `scroll-area.tsx` - Áreas desplazables
- `badge.tsx` - Insignias

**Nota**: El componente `select.tsx` depende de `@radix-ui/react-select@2.1.6` que está incluido en las dependencias principales.

### 4. **Tailwind CSS**
- **Versión**: 4.0.0
- **Configuración**: En `styles/globals.css`
- **Modo**: Utility-first CSS framework

### 5. **Utilidades**
- **class-variance-authority**: Para variantes de componentes
- **clsx**: Para composición de clases condicionales
- **tailwind-merge**: Para fusionar clases de Tailwind sin conflictos

---

## 🚀 Instrucciones Según tu Entorno

### En Figma Make (Actual)
✅ **No necesitas hacer nada**. El código funciona directamente.

### Para Desarrollo Local con React

1. **Crear `package.json`** en la raíz:
```json
{
  "name": "game-catalog",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "^0.487.0",
    "embla-carousel-react": "^8.6.0",
    "@radix-ui/react-select": "^2.1.6",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.5"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "typescript": "^5.6.3",
    "vite": "^6.0.1",
    "tailwindcss": "^4.0.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49"
  }
}
```

2. **Crear `vite.config.ts`**:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
})
```

3. **Crear `tsconfig.json`**:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["**/*.ts", "**/*.tsx"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

4. **Crear `index.html`** en la raíz:
```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CrossGame - Catálogo de Videojuegos</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/main.tsx"></script>
  </body>
</html>
```

5. **Crear `main.tsx`** en la raíz:
```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

6. **Instalar y ejecutar**:
```bash
npm install
npm run dev
```

---

## 🛠️ Herramientas Recomendadas

### Para Desarrollo
- **Node.js**: v18.0.0 o superior
- **npm**: v9.0.0 o superior (incluido con Node.js)
- **Editor**: Visual Studio Code

### Extensiones de VS Code Recomendadas
```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "dsznajder.es7-react-js-snippets",
    "ritwickdey.LiveServer"
  ]
}
```

---

## ❓ Preguntas Frecuentes

### ¿Necesito instalar algo para usar el código en Figma Make?
**No**. Figma Make maneja todas las dependencias automáticamente.

### ¿La versión vanilla necesita Node.js?
**No**. Los archivos HTML/CSS/JS funcionan directamente en cualquier navegador.

### ¿Puedo usar npm con la versión vanilla?
No es necesario, pero si quieres usar un bundler, podrías migrar a la versión React.

### ¿Qué versión de Node.js necesito?
Para desarrollo local, Node.js 18.x o superior es recomendado.

### ¿Cómo actualizo las dependencias?
```bash
# Ver versiones disponibles
npm outdated

# Actualizar todas (con precaución)
npm update

# Actualizar una específica
npm install lucide-react@latest
```

---

## 📝 Notas Importantes

1. **Versiones específicas**: Algunas librerías como `lucide-react@0.487.0` y `embla-carousel-react@8.6.0` tienen versiones específicas en el código.

2. **Importaciones con versión**: En Figma Make, algunos imports incluyen la versión:
   ```tsx
   import { ArrowLeft } from "lucide-react@0.487.0";
   ```
   En desarrollo local, usa imports estándar:
   ```tsx
   import { ArrowLeft } from "lucide-react";
   ```

3. **Shadcn Components**: Los componentes UI están pre-instalados en `/components/ui` y no necesitan instalación adicional.

4. **Imágenes**: La aplicación usa imágenes de Unsplash que se cargan dinámicamente desde URLs.

---

## 🎮 Resumen Final

**Para Figma Make**: 
- ✅ Todo funciona sin configuración

**Para versión Vanilla**:
- ✅ Abre `index.html` en el navegador
- ✅ Cero dependencias

**Para desarrollo local React**:
- 📦 Instala las 13 dependencias listadas (8 principales + 5 de desarrollo)
- 🚀 Ejecuta `npm run dev`

¡Tu aplicación está lista para usar! 🎉