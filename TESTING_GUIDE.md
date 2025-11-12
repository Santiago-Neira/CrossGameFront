# 🧪 Guía de Testing - Integración de API

## 📋 Requisitos Previos

1. ✅ Backend corriendo en `http://localhost:8000`
2. ✅ Endpoints disponibles:
   - `GET /frontend/game` - Lista de juegos
   - `GET /frontend/games/{id}` - Juego específico
   - `GET /frontend/games/{id}/detail` - Detalles de juego

## 🧪 Test 1: Verificar Servicio de API

### Pasos:
1. Abre la consola del navegador (F12)
2. En la pestaña "Network", haz una recarga de página
3. Busca las siguientes peticiones:
   - `http://localhost:8000/frontend/game`
   - `http://localhost:8000/frontend/games/[id]/detail`

### Resultado Esperado:
```
✅ Status 200 (OK)
✅ Respuesta con `"success": true`
✅ Contiene array de juegos en `data`
```

### Si hay error:
```
❌ Status 404/500 → Verificar que backend está corriendo
❌ "success": false → Revisar estructura de respuesta de API
❌ Connection refused → Backend no accesible en localhost:8000
```

---

## 🧪 Test 2: Verificar FilteredGamesView

### Pasos:
1. Navega a la página principal
2. Espera a que cargue la sección "Resultados de Búsqueda"
3. Observa:
   - ¿Aparece spinner mientras carga?
   - ¿Se muestran juegos después de cargar?
   - ¿Los filtros funcionan?

### Resultado Esperado:
```
✅ Spinner visible 2-3 segundos
✅ Lista de juegos se muestra sin spinner
✅ Filtros de género, plataforma y idioma funcionan
✅ Contador dice "N juegos encontrados"
```

### Si hay error:
```
❌ Spinner nunca desaparece → Error en API, ver consola
❌ No se muestran juegos → Respuesta vacía, revisar API
❌ Filtros no funcionan → Revisar estructura de datos
```

---

## 🧪 Test 3: Verificar GameDetailView

### Pasos:
1. Haz clic en cualquier juego para ver detalles
2. Observa:
   - ¿Aparece spinner mientras carga?
   - ¿Se cargan todos los detalles?
   - ¿Las imágenes se muestran?
   - ¿Los precios están disponibles?

### Resultado Esperado:
```
✅ Spinner mientras carga
✅ Título, descripción y desarrollador visibles
✅ Imagen principal se muestra correctamente
✅ Rating y estadísticas (guardados, horas, etc.)
✅ Lista de precios disponibles
✅ Reseñas de usuarios visibles
```

### Si hay error:
```
❌ Spinner nunca desaparece → Error en API
❌ Detalles parciales → Campo faltante en respuesta API
❌ Imágenes no cargan → URL inválida en imagen
```

---

## 🧪 Test 4: Verificar Caché

### Pasos:
1. Abre detalles de un juego (por ejemplo, ID 10035)
2. Vuelve atrás
3. Abre el mismo juego nuevamente
4. Abre Network tab y observa

### Resultado Esperado:
```
✅ Primera vez: Se realiza petición a API
✅ Segunda vez: NO se realiza petición nueva
✅ Los datos se cargan instantáneamente
```

### Cómo verificar:
- En Network tab, filtra por "games/10035/detail"
- Debería mostrar solo UNA petición (la primera)
- La segunda visualización no hace petición (usa caché)

---

## 🧪 Test 5: Verificar Manejo de Errores

### Pasos:
1. Detén el servidor backend (Ctrl+C en terminal)
2. Recarga la página del juego
3. Observa qué pasa

### Resultado Esperado:
```
✅ Spinner desaparece
✅ Mensaje de error amigable al usuario
✅ Consola muestra error detallado
✅ App no se congela ni rompe
```

### Consola Esperada:
```
Error fetching game detail: Error: Failed to fetch
```

---

## 🧪 Test 6: Verificar Formato de Datos

### En la Consola del Navegador:

```javascript
// Test 1: Verificar estructura de un juego
async function testGamesStructure() {
  const response = await fetch('http://localhost:8000/frontend/game');
  const data = await response.json();
  console.log('First Game:', data.data[0]);
  // Debería mostrar: { id, title, genres, platforms, languages, image, price, rating, description }
}

// Test 2: Verificar estructura de detalles
async function testDetailStructure() {
  const response = await fetch('http://localhost:8000/frontend/games/10035/detail');
  const data = await response.json();
  console.log('Game Detail:', data);
  // Debería mostrar: { id, title, developer, description, shortDescription, mainImage, averageRating, ... }
}

// Ejecutar tests
testGamesStructure();
testDetailStructure();
```

---

## 📊 Checklist de Validación

```
Frontend:
  □ npm install (o yarn install)
  □ npm run dev (o yarn dev)
  □ Aplicación corre en http://localhost:5173 (u otro puerto)

Backend:
  □ Servidor Python/Node corriendo
  □ Corriendo en http://localhost:8000
  □ Endpoints disponibles y respondiendo

API Endpoints:
  □ GET /frontend/game → { success: true, data: [...] }
  □ GET /frontend/games/{id} → { id, title, genres, ... }
  □ GET /frontend/games/{id}/detail → { id, title, developer, ... }

Componentes:
  □ FilteredGamesView muestra juegos
  □ GameDetailView carga detalles
  □ Loading states funcionan
  □ Manejo de errores funciona
  □ Caché funciona

Performance:
  □ Primera carga: ~500-2000ms
  □ Segunda carga: ~50-200ms (caché)
  □ Sin errores en consola
  □ Sin memory leaks
```

---

## 🔍 Debugging

### Si algo no funciona:

1. **Abre Consola del Navegador (F12)**
   ```
   Busca líneas rojas (errores)
   Copia el error completo
   ```

2. **Verifica Network Tab**
   ```
   ✅ ¿La petición se realiza?
   ✅ ¿Qué status code retorna? (200, 404, 500, etc.)
   ✅ ¿La respuesta es válido JSON?
   ```

3. **Verifica Backend**
   ```
   ✅ ¿El servidor está corriendo?
   ✅ ¿En qué puerto?
   ✅ ¿Los logs del servidor muestran errores?
   ```

4. **Verifica URL de API**
   ```
   src/services/api-service.ts
   const API_BASE_URL = "http://localhost:8000/frontend"; // ← Debe coincidir
   ```

---

## 💡 Consejos

- Usa Redux DevTools si tienes instalado (opcional)
- Chrome DevTools → Performance para medir rendimiento
- React DevTools para ver state y props
- Network tab para ver todas las peticiones

---

## 📝 Ejemplos de Respuestas Esperadas

### ✅ GET /frontend/game

```json
{
  "success": true,
  "count": 90,
  "data": [
    {
      "id": 10035,
      "title": "Hitman",
      "genres": ["Action", "Shooter", "Simulation"],
      "platforms": ["PlayStation 4", "PC", "Xbox One"],
      "languages": ["Español", "Inglés", "Francés"],
      "image": "https://media.rawg.io/media/games/...",
      "price": null,
      "rating": 3.93,
      "description": "Hitman is a six episodes game..."
    }
  ]
}
```

### ✅ GET /frontend/games/10035/detail

```json
{
  "id": 10035,
  "title": "Hitman",
  "developer": "Feral Interactive",
  "description": "Hitman is a six episodes game...",
  "shortDescription": "Hitman is a six episodes game...",
  "mainImage": "https://media.rawg.io/media/games/...",
  "averageRating": 3.93,
  "totalRatings": 2015,
  "savedByUsers": 47905,
  "estimatedHours": 7,
  "genres": ["Action", "Shooter", "Simulation"],
  "platforms": ["PlayStation 4", "PC", "Xbox One"],
  "onlineMultiplayer": false,
  "localMultiplayer": false,
  "requiresInternet": false,
  "releaseDate": "",
  "prices": [
    {
      "storeName": "Steam",
      "price": 29.99,
      "url": "https://steampowered.com"
    }
  ],
  "reviews": [
    {
      "id": 1,
      "userName": "Player123",
      "rating": 5,
      "comment": "Great game!",
      "date": "2024-01-15"
    }
  ]
}
```

---

**Última actualización:** Noviembre 12, 2025
