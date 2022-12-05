FROM ubuntu:20.04

WORKDIR /var/www

RUN useradd -ms /bin/bash pruthvi &&chown -R pruthvi:pruthvi /var/www && chmod -R 777 /var/www

RUN apt-get update && apt-get -y install software-properties-common && add-apt-repository ppa:ondrej/php

RUN apt-get -y install php7.4 && apt-get install -y php7.4-cli php7.4-json php7.4-fpm php7.4-common php7.4-mysql php7.4-zip php7.4-gd php7.4-mbstring php7.4-curl php7.4-xml php7.4-bcmath
COPY . .
COPY --chown=pruthvi:pruthvi . .

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

USER pruthvi

CMD php artisan serve --host=0.0.0.0 --port=8000

EXPOSE 8000
