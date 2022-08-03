# stage 1
FROM node:16.16.0 as builder
# ENV NODE_ENV=production

WORKDIR /app
COPY ["package*.json", "./"]

RUN npm install

COPY . .

RUN npm run build

CMD [ "node", "dist/server" ]
