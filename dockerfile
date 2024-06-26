FROM node:20.5-slim

LABEL maintainer="Brian Fontaine <brian.fontaine0@gmail.com>"

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn 

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]