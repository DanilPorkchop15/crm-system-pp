# Author: Danil Kostin 
FROM node:alpine AS build-stage

WORKDIR /app

# Copy package files
COPY package*.json ./

RUN npm install -g pnpm

RUN pnpm install

# Copy all files
COPY . .

# Build app
RUN pnpm build && pnpm generate

# nginx stage for serving content
FROM nginx:1.21.6-alpine AS production-stage

# Remove default nginx config
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy static files from build stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]