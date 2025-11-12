# Integración de API de Juegos - Guía de Implementación

## Descripción General

Se ha implementado un sistema de obtención de datos desde una API remota para reemplazar la data estática que estaba por defecto en el proyecto. El sistema obtiene información de juegos desde los siguientes endpoints:

- `GET http://localhost:8000/frontend/game` - Lista de todos los juegos
- `GET http://localhost:8000/frontend/games/{game_id}` - Información básica de un juego
- `GET http://localhost:8000/frontend/games/{game_id}/detail` - Detalles completos de un juego

## Archivos Creados/Modificados

### 1. **`src/services/api-service.ts`** (NUEVO)
Servicio centralizado para todas las llamadas a la API. Contiene:
- Interfaces TypeScript para las respuestas de la API
- Función `fetchGames()` - obtiene lista de juegos
- Función `fetchGameById(gameId)` - obtiene información de un juego
- Función `fetchGameDetail(gameId)` - obtiene detalles completos de un juego

**Uso:**
```typescript
import { fetchGames, fetchGameById, fetchGameDetail } from '../services/api-service';

// Obtener todos los juegos
const games = await fetchGames();

// Obtener detalles de un juego específico
const detail = await fetchGameDetail(10035);
```

### 2. **`src/components/games-data.ts`** (MODIFICADO)
Cambios principales:
- Función `getGamesDatabase()` - obtiene juegos de la API de forma asíncrona
- Sistema de caché para evitar llamadas repetidas
- Manejo de errores con fallback a array vacío
- La variable `gamesDatabase` ahora está vacía (era solo para datos estáticos)

**Uso:**
```typescript
import { getGamesDatabase } from './games-data';

const games = await getGamesDatabase();
```

### 3. **`src/components/game-detail-data.ts`** (MODIFICADO)
Cambios principales:
- Función `getGameDetail(gameId)` - ahora es asíncrona y obtiene datos de la API
- Sistema de caché para detalles de juegos ya cargados
- Función auxiliar `getDefaultGameDetail()` para valores por defecto
- Manejo de errores

**Uso:**
```typescript
import { getGameDetail } from './game-detail-data';

const detail = await getGameDetail(10035);
```

### 4. **`src/hooks/useGames.ts`** (NUEVO)
Hooks personalizados de React para simplificar el uso de datos en componentes:

**`useGames()`** - Hook para obtener lista de juegos
```typescript
import { useGames } from '../hooks/useGames';

export function MyComponent() {
  const { games, loading, error } = useGames();
  
  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return <div>{games.map(game => ...)}</div>;
}
```

**`useGameDetail(gameId)`** - Hook para obtener detalles de un juego
```typescript
import { useGameDetail } from '../hooks/useGames';

export function GameDetailComponent({ gameId }) {
  const { game, loading, error } = useGameDetail(gameId);
  
  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return <div>{game?.title}</div>;
}
```

### 5. **`src/components/FilteredGamesView.tsx`** (MODIFICADO)
Cambios:
- Ahora usa `useEffect` y `useState` para cargar datos de forma asíncrona
- Implementa loading state mientras se obtienen los datos
- Usa `getGamesDatabase()` en lugar de `gamesDatabase` directo

### 6. **`src/components/GameDetailView.tsx`** (MODIFICADO)
Cambios:
- Ahora usa `useEffect` y `useState` para cargar detalles del juego
- Implementa loading state con spinner
- Manejo de errores con mensaje al usuario
- Usa `getGameDetail()` como función asíncrona

## Flujo de Datos

```
API (http://localhost:8000/frontend)
    ↓
api-service.ts (fetchGames, fetchGameById, fetchGameDetail)
    ↓
games-data.ts / game-detail-data.ts (obtienen y cachean datos)
    ↓
useGames.ts / useGameDetail.ts (hooks de React)
    ↓
Componentes (FilteredGamesView, GameDetailView, etc.)
```

## Características Principales

### 🔄 **Caching Inteligente**
- Los datos se cachean después de la primera llamada
- Evita llamadas repetidas a la API
- Mejora rendimiento y reduce carga de la red

### 🛡️ **Manejo de Errores**
- Si la API no responde, se retornan valores por defecto
- Mensajes de error claros en consola
- Estados de loading para mejorar UX

### ⚡ **Rendimiento**
- Datos obtenidos bajo demanda (lazy loading)
- Componentes muestran loading state mientras se cargan datos
- Caché previene solicitudes innecesarias

### 🎯 **TypeScript**
- Interfaces completamente tipadas
- Seguridad de tipos en toda la cadena
- Autocompletado en IDE

## Cómo Actualizar Componentes Existentes

Si tienes componentes que usan `gamesDatabase` de forma síncrona, sigue estos pasos:

### Opción 1: Usar Hooks (Recomendado)
```tsx
// ANTES
import { gamesDatabase } from './games-data';

export function MyComponent() {
  const games = gamesDatabase.filter(...);
  return <div>{games.map(...)}</div>;
}

// DESPUÉS
import { useGames } from '../hooks/useGames';

export function MyComponent() {
  const { games, loading } = useGames();
  if (loading) return <div>Cargando...</div>;
  
  const filtered = games.filter(...);
  return <div>{filtered.map(...)}</div>;
}
```

### Opción 2: Usar Funciones Asíncronas
```tsx
// ANTES
import { gamesDatabase } from './games-data';

export function MyComponent() {
  const games = gamesDatabase;
  return <div>{games.map(...)}</div>;
}

// DESPUÉS
import { getGamesDatabase } from './games-data';
import { useEffect, useState } from 'react';

export function MyComponent() {
  const [games, setGames] = useState([]);
  
  useEffect(() => {
    getGamesDatabase().then(setGames);
  }, []);
  
  return <div>{games.map(...)}</div>;
}
```

## Configuración de la API

Asegúrate de que tu backend esté corriendo en `http://localhost:8000` con los endpoints:

```
GET /frontend/game
GET /frontend/games/{id}
GET /frontend/games/{id}/detail
```

Si el servidor está en otra URL, edita en `src/services/api-service.ts`:
```typescript
const API_BASE_URL = "http://localhost:8000/frontend"; // Cambiar aquí
```

## Próximos Pasos

1. ✅ Sistema de API integrado
2. ⏳ `library-data.ts` - aún usa datos por defecto (según solicitud)
3. ⏳ Considerar integración de `PopularGames` y `FeaturedCarousel` con API si es necesario

## Notas Importantes

- **`library-data.ts` NO ha sido modificado** - mantiene su estructura original tal como fue solicitado
- El caché es en memoria - se reinicia al recargar la página
- Para implementar persistencia, considera usar localStorage o una base de datos local
- Los endpoints esperan respuestas en el formato documentado

## Ejemplo Completo

```tsx
import { useGameDetail } from '../hooks/useGames';
import { Loader } from 'lucide-react';

export function GameDetailPage({ gameId }: { gameId: number }) {
  const { game, loading, error } = useGameDetail(gameId);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error: {error.message}
      </div>
    );
  }

  if (!game) {
    return <div>No se encontró el juego</div>;
  }

  return (
    <div>
      <h1>{game.title}</h1>
      <p>{game.description}</p>
      <p>Desarrollador: {game.developer}</p>
      <p>Rating: {game.averageRating}/5</p>
    </div>
  );
}
```

---

**Última actualización:** Noviembre 12, 2025
