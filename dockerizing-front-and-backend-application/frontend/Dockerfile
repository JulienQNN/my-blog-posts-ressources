FROM node:alpine


RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/frontend

WORKDIR /usr/src/app/frontend

COPY package*.json ./
RUN npm install

COPY . .

RUN npm install pm2 -g

RUN npm run build

FROM nginx:latest
COPY --from=0 /usr/src/app/frontend/dist /usr/share/nginx/html
