#!/usr/bin/sh

PORT=${PORT:-4000}

podman run \
    --name loggerserver \
    --publish "${PORT}:${PORT}" \
    --env "PORT=${PORT}" \
    --rm -it quay.io/andrewazores/loggerserver:latest
