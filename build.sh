#!/usr/bin/sh

podman build -f Containerfile -t quay.io/andrewazores/loggerserver:latest
podman image prune -f
