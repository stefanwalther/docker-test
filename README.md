# docker-test

> Sample docker image to test various scenarios with Docker.

[![CircleCI](https://img.shields.io/circleci/project/github/stefanwalther/docker-test.svg)](https://circleci.com/gh/stefanwalther/docker-test/tree/master)
[![Greenkeeper badge](https://badges.greenkeeper.io/stefanwalther/docker-test.svg)](https://greenkeeper.io/)
[![XO code style](https://img.shields.io/badge/code_style-XO--space-5ed9c7.svg)](https://github.com/sindresorhus/eslint-config-xo-space)

---

## Motivation

Just another "Hello World" docker image to be used in various experiments ...

Note: This Docker image is definitely not designed to be used in a production environment as it could result into serious security issues. But it's nice to be added to your toolbox when playing with Docker/Docker Swarm/Kubernetes, etc.

## Usage

```sh
$ docker pull stefanwalther/docker-test
```

```sh
$ docker run -it -p 3000:3000 stefanwalther/docker-test
```

### With docker-compose

```sh
version: '3.3`
services:
  hello-world:
    image: stefanwalther/docker-test
    ports:
      - 3000:3000
    environment:
      - PORT=3000
        
```

## Configuration

- `PORT` - Port of the web service, defaults to 3000.

## Endpoints

### `/`
Just returns a "Hello World":

```json
{
  "text": "Hello World"
}
```

### `/health-check`
Returns a typical health-check, useful to test health-checks in a microservice environment.

```json
{
  "ts": "2017-12-07T22:25:34.489Z",
  "version": "0.3.1",
  "name": "docker-test",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/stefanwalther/docker-test.git"
  }
}
```

### `/cmd`
Execute any command on the machine and get the result.

Parameters:
- `def` - The command to execute.

Usage:
```sh
# Process ls -la
$ curl http://localhost:3000/cmd/?def=ls%20-la
```

Examples:
  - `ls -la` - list the directory
  - `curl -o -I -L -s -w "%{http_code}\n" http://localhost:3000/health-check` - Get the Http status code of the health-check

### `/cmd-cron`
Create a cron job, executing a command.

Parameters:

- `def` - The command to execute.
- `cron` - The cron definition (see [https://crontab-generator.org/](https://crontab-generator.org/))

Usage:

```sh
# Process "echo foo" with the following cron def: "* * * * *" (every minute)
$ curl http://localhost:3000/cmd-cron?def=echo%20foo&cron=*%20*%20*%20*%20*
```

## Experiments

### Multistage Builds

**References:**
- https://capgemini.github.io/development/multi-stage-builds-in-docker/
- https://codefresh.io/blog/node_docker_multistage/
- Using multi-stage builds to reduce Go images: https://blog.alexellis.io/mutli-stage-docker-builds/
- https://github.com/yamalight/node-docker-pkg-demo

## About

### Author

**Stefan Walther**

* [stefanwalther.io](http://stefanwalther.io)
* [qliksite.io](http://qliksite.io)
* [qlikblog.at](http://qlikblog.at)
* [github/stefanwalther](https://github.com/stefanwalther)
* [twitter/waltherstefan](http://twitter.com/waltherstefan)
* [LinkedIn](https://www.linkedin.com/in/stefanwalther/)

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/stefanwalther/docker-test/issues). The process for contributing is outlined below:

1. Create a fork of the project
2. Work on whatever bug or feature you wish
3. Create a pull request (PR)

I cannot guarantee that I will merge all PRs but I will evaluate them all.

### License
Copyright © 2017, [Stefan Walther](http://qliksite.io).
 
MIT

