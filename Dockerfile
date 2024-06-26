# Use Node.js 21 Alpine as the build stage
FROM node:21-alpine AS build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# Copy the .env file to the /app directory
COPY .env /app/

RUN npm run build

# Use Nginx as the production server
FROM nginx:alpine
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

# Copy the built React app to Nginx's web server directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 3000

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]