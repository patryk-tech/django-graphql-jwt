# vue-apollo + django-graphql-jwt example implementation

## Preamble

This is an example implementation of django-graphql-jwt with the vue-apollo client. You can browse the source code to see how `django-graphql-jwt` is implemented in a real, working example, and can use it as a quick test-lab to make modifications to the library and see changes reflected right away.

It uses [django](https://www.djangoproject.com/), [graphene-django](https://docs.graphene-python.org/projects/django/en/latest/), and [django-graphql-jwt](https://github.com/flavors/django-graphql-jwt) on the back-end, and [vue.js](https://vuejs.org/) with the [Quasar framework](https://quasar.dev/) on the front-end.

## Caveat

This is more suitable for tests than a production environment. The instructions in the [Django deployment checklist](https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/) are a good start.

It also disables the CSRF protection for simplicity.

## Requirements

This requires `docker` with *Docker Engine* 18.06.0 or greater, and `docker-compose`.

This application has been tested and developed in a Linux environment, and while usage under other OSs should be possible, YMMV.

## Usage

### Installation

Just clone the repository.

    git clone https://github.com/flavors/django-graphql-jwt # if the changes were merged upstream, otherwise
    git clone https://github.com/patryk-tech/django-graphql-jwt

### Running

Run `docker-compose up`.

Be sure to apply Django migrations (`python manage.py migrate`) inside the Django container, and to install NPM packages (`yarn install`) inside the Vue container.


The project should then be available on [http://localhost:10232](http://localhost:10232), and the GraphiQL interface should be available on [http://localhost:10233/graphql/](http://localhost:10233/graphql/).

You may change the ports in the `docker-compose.yml` file, but in that case, you should also change it in `vue/quasar.conf.js`, under `devServer.public`, and in `django/apolloex/settings.py`, under `CORS_ORIGIN_WHITELIST`.

### Querying with cURL

You can use the `curl` client, assuming it is installed, to query GraphQL.

    curl -d '{"query": "query { hello }"}' -H 'Content-Type: application/json' http://localhost:10233/graphql/
