FROM registry.access.redhat.com/ubi8/nodejs-18:latest

ENV LANG='en_US.UTF-8' LANGUAGE='en_US:en'

ENTRYPOINT ["/usr/bin/node"]

CMD ["."]

COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY srv.js .
