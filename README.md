# docker-test

> Sample docker image to test various scenarios with Docker.

[![CircleCI](https://circleci.com/gh/stefanwalther/docker-test.svg?style=svg)](https://circleci.com/gh/stefanwalther/docker-test)

---

## Motivation

Just another "Hello World" docker image to be used in various experiments ...

## Usage

```sh
$ docker pull stefanwalther/hello-world
```

```sh
$ docker run -it stefanwalther/hello-world
```

### With docker-compose

```sh
version: '3.3`
services:
  hello-world:
    image: stefanwalther/hello-world
    ports:
      - 3004:3004
    environment:
      - PORT=3004
        
```

## Configuration

- `PORT` - Port of the web service, defaults to 3000.

fcab

