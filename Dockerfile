FROM pirhdpsr01.cathaybk.intra.uwccb/apps/node:16.19.0 as build-stage
ENV NODE_OPTIONS=--max_old_space_size=8192
ARG BUILD_ENV

WORKDIR /app
COPY package*.json /app/
RUN npm install --reg http://88.8.70.216:8081/repository/npm-all/ --force
COPY ./ /app/
RUN npm run build

FROM pirhdpsr01.cathaybk.intra.uwccb/apps/cub-nginx-alpine:20210611
COPY --from=build-stage /app/dist/official-web/ /usr/share/nginx/html
RUN ls -alhR /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/
EXPOSE 8080