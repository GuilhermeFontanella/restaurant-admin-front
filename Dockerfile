FROM node:24-alpine AS build
WORKDIR /app
ARG VITE_API_URL
ARG VITE_ORDER_MANAGER_URL
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_ORDER_MANAGER_URL=$VITE_ORDER_MANAGER_URL
COPY package.json package-lock.json* ./
RUN npm ci || npm install
COPY . .
RUN npm run build

FROM pierrezemb/gostatic
COPY --from=build /app/dist /srv/http/
CMD ["-port","8080","-https-promote","-enable-logging","-fallback","index.html"]