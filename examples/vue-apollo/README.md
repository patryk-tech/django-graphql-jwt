# vue-apollo + django-graphql-jwt example implementation

## Preamble

This is an example implementation of django-graphql-jwt with the vue-apollo client. You can browse the source code to see how `django-graphql-jwt` is implemented in a real, working example, and can use it as a quick test-lab to make modifications to the library and see changes reflected right away.

It uses [django](https://www.djangoproject.com/), [graphene-django](https://docs.graphene-python.org/projects/django/en/latest/), and [django-graphql-jwt](https://github.com/flavors/django-graphql-jwt) on the back-end, and [vue.js](https://vuejs.org/) with the [Quasar framework](https://quasar.dev/) on the front-end.

## Caveat

This is more suitable for tests than a production environment. The instructions in the [Django deployment checklist](https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/) are a good start.

## Requirements

This requires `docker` with *Docker Engine* 18.06.0 or greater, and `docker-compose`.

This application has been tested and developed in a Linux environment, and while usage under other OSs should be possible, YMMV.

## Usage

### Installation

Just clone the repository.

    git clone https://github.com/flavors/django-graphql-jwt # if the changes were merged upstream, otherwise
    git clone https://github.com/patryk-tech/django-graphql-jwt

### Running

Open the example 
Run `docker-compose up`.

The project should then be available on [http://localhost:10232](http://localhost:10232). You may change the port in the `docker-compose.yml` file, but in that case, you should also change it in `vue/quasar.conf.js`, under `devServer.public`.

Be sure to apply Django migrations (`python manage.py migrate`) inside the Django container.
