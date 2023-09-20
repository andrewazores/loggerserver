#!/usr/bin/sh

podman run \
    --name loggerserver \
    --rm -it quay.io/andrewazores/loggerserver:latest
