## Multi-stage Dockerfile for building and serving the Vite React app with nginx

# Stage 1: build
FROM node:18-alpine AS build
WORKDIR /app

# Install deps (use npm ci if package-lock.json exists)
COPY package*.json ./
# Prefer npm ci when a lockfile exists for reproducible builds, fallback to npm install
RUN sh -c 'if [ -f package-lock.json ]; then npm ci --prefer-offline --no-audit --progress=false; else npm install --production=false; fi'

# Copy source and build
COPY . .
RUN npm run build

# Stage 2: serve with nginx
FROM nginx:stable-alpine AS production
COPY --from=build /app/build /usr/share/nginx/html

# Remove default conf and provide a simple config to serve index.html for SPA
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
