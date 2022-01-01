#01 Build Client
FROM node:16-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY ./client ./client
COPY ./angular.json .
RUN npm run build

#Run Client
FROM nginx:1.21.5-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/client /usr/share/nginx/html
