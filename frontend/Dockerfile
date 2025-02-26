FROM node:20 AS base

WORKDIR /app

COPY package*.json ./
RUN npm install

FROM base AS development
COPY . .
EXPOSE 3000
CMD ["npm", "start"]