# ─── Stage 1 : build ───────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ─── Stage 2 : serve ───────────────────────────────────────────────────────────
FROM nginx:1.27-alpine AS runner

# Copie le build Vite dans le dossier servi par nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Config nginx minimale pour une SPA React (redirige tout vers index.html)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
