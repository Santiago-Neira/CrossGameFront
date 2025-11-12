# CrossGameFront

Proyecto frontend para CrossGame. Contiene una UI en React + Vite que muestra una biblioteca de juegos.

Resumen rápido:
- Framework: React + Vite
- Lenguaje: TypeScript
- Dependencias principales: ver `package.json`

Cómo arrancar:

1. Instalar dependencias

```powershell
npm install
```

2. Definir variables de entorno (si usas Firebase u otras integraciones)

Ejemplo: crear un archivo `.env` en la raíz con variables `VITE_...`.

3. Ejecutar en modo desarrollo

```powershell
npm run dev
```

Notas:
- Este repositorio fue inicializado y vinculado al remote: https://github.com/Santiago-Neira/CrossGameFront.git

Docker
------

Se incluye un `Dockerfile` multi-stage y un `docker-compose.yml` para construir y servir la aplicación con nginx.

Construir la imagen (sin docker-compose):

```powershell
docker build -t crossgamefront:latest .
```

Ejecutar la imagen:

```powershell
docker run --rm -p 8080:80 crossgamefront:latest
```

Con docker-compose (construye y arranca el servicio):

```powershell
docker-compose up --build
```

La aplicación quedará accesible en http://localhost:8080

Archivos añadidos para Docker:

- `Dockerfile` - multi-stage build (node -> nginx)
- `nginx.conf` - configuración para SPA (fallback a index.html)
- `.dockerignore` - evita copiar artefactos innecesarios
- `docker-compose.yml` - conveniencia para desarrollo/ejecución local
  