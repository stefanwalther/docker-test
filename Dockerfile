FROM node:8.5.0-alpine as BASE

ARG PORT=3000
ENV PORT=$PORT

ENV HOME=/app
RUN mkdir -p $HOME
WORKDIR $HOME

COPY ./package.json ./index.js ./

RUN npm install --production

COPY /src ./src/

FROM BASE as RELEASE

EXPOSE $PORT

CMD ["npm", "run", "start"]

