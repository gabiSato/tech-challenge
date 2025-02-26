FROM node:22.13.1-alpine

WORKDIR .

COPY package.json .
COPY yarn.lock .

RUN yarn install --pure-lockfile

COPY . .

RUN cp .env.sample .env

EXPOSE 3000

CMD ["sh", "-c", "yarn db:deploy && yarn seed && yarn dev"]
