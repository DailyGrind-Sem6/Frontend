FROM node:21-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

ENV VITE_GATEWAY_BASEURL=http://api-gateway:8080

CMD [ "npm", "run", "preview", "--", "--host", "0.0.0.0" ]