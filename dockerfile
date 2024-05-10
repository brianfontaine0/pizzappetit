FROM node:20.5-slim

LABEL maintainer="Brian Fontaine <brian.fontaine0@gmail.com>"

WORKDIR /app

COPY package.json yarn.lock ./
COPY tailwind.config.js ecosystem.config.js postcss.config.js ./

RUN yarn 

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]