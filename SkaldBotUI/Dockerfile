FROM node:latest as build-stage

WORKDIR /SkaldbotUI
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx as production-stage
RUN mkdir /SkaldbotUI
COPY --from=build-stage /SkaldbotUI/dist /SkaldbotUI
COPY nginx.conf /etc/nginx/nginx.conf
