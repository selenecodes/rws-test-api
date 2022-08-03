# stage 1
FROM node:16.16.0 as builder
ENV NODE_ENV=production

WORKDIR /app
COPY ["package*.json", "./"]

RUN npm install

COPY . .

RUN npm run build

# stage 2
FROM node:16.16.0

WORKDIR /usr/app
COPY package*.json ./

RUN npm install --production

COPY --from=builder /usr/app/dist ./dist
COPY .env .

CMD [ "node", "dist/server" ]
