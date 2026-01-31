# Stage 1: Build the app
FROM oven/bun:1 AS build
WORKDIR /app

# Copy package files and install
COPY package.json bun.lock ./
RUN bun install

# Copy everything else and build
COPY . .
RUN bun run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
# Note: Check if your build folder is 'dist' (Vite) or 'build' (CRA)
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
