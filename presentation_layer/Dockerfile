FROM node:20.2.0-alpine3.18
WORKDIR /app
COPY ./public /app/public
COPY ./src /app/src
COPY package.json /app/package.json
RUN npm install
EXPOSE 80
CMD npm start
