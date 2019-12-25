ARG PYTHON_IMAGE=python:3.8-buster

FROM ${PYTHON_IMAGE} as django
# If we want to enable translations
RUN apt-get update && apt-get install -y --no-install-recommends gettext

COPY requirements-dev.txt /tmp/requirements.txt
RUN pip3 install -r /tmp/requirements.txt

RUN mkdir -p /app && useradd -d /app -u 1000 python && chown -R python /app

USER python

WORKDIR /app
