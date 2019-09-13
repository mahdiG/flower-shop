# build stage
FROM node:lts-alpine as build-stage

# install polymer-cli
# RUN npm install -g polymer-cli
RUN yarn global add polymer-cli

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN yarn install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN polymer build --bundle

# production stage
FROM nginx:stable-alpine as production-stage

# Use custom nginx config to load index.html for all routes.
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/build/default /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]