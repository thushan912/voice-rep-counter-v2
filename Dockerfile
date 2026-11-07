# Multi-stage production build for the static Astro site.
FROM node:24-alpine AS build
WORKDIR /app

# Install dependencies first for better layer caching.
COPY package*.json ./
RUN npm ci

# Copy source and build the static output.
COPY . .
RUN npm run build

# Runtime: static Nginx, no Node.js process in production.
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/ /usr/share/nginx/html/

EXPOSE 80
