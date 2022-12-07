FROM node:18-alpine3.16 AS builder
COPY package*.json ./
RUN npm install

FROM node:18-alpine3.16
ENV PORT 80
WORKDIR /app
COPY --from=builder node_modules node_modules
EXPOSE 80
COPY main.js main.js
CMD [ "node", "main.js" ]
