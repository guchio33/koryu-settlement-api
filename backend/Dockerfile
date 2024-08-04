FROM node:20.10.0

WORKDIR /app

RUN apt-get update && \
    apt-get install -y default-mysql-client

COPY package*.json ./

RUN npm i -g @nestjs/cli

RUN yarn install


COPY . .

CMD ["yarn", "run", "start:dev"]