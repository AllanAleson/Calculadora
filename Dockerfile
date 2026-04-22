FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 19000

CMD ["npx", "expo", "start", "--non-interactive"]
