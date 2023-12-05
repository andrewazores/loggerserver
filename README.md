# loggerserver

Simple NodeJS server that listens for any HTTP request method on any path, logs details about the request, and responds with an HTTP 200 OK.

HTTPS is not currently handled.

## Local Run

Requirements:
- `node` and `npm` on `$PATH`

```bash
$ npm ci
$ node .
```

should be all that is required to get loggerserver running as a local process. It will listen on port 4000 by default. Use the environment variable `PORT` to override.

## Container Build & Run

Requirements:
- `podman` on `$PATH`

```bash
$ sh build.sh
$ sh run.sh
```

will build a container image containing loggerserver and its dependencies, then run it. The same `PORT` environment variable can be used to control the port it binds to.
