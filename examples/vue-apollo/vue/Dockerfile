ARG NODE_IMAGE=node:12-buster

FROM ${NODE_IMAGE} AS quasar-base
RUN npm install -g @quasar/cli
RUN mkdir /vue && chown -R node /vue/
USER node
WORKDIR /vue/
