FROM node:alpine

RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/backend

WORKDIR /usr/src/app/backend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install pm2 -g

CMD ["pm2-runtime", "node index.js"]
