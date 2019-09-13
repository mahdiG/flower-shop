# base image
FROM node:lts-alpine

# set working directory
WORKDIR /app

COPY . .

# install polymer-cli
RUN npm install -g polymer-cli

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN polymer build --bundle

EXPOSE 8080
CMD [ "polymer", "serve", "build" ]