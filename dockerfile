FROM node:20.5-slim

LABEL maintainer="Brian Fontaine <brian.fontaine0@gmail.com>"

COPY . /app
WORKDIR /app

RUN yarn 

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]