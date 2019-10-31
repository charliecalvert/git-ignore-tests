FROM node:latest
RUN mkdir -p /usr/src/elf-main
WORKDIR /usr/src/elf-main
COPY package.json /usr/src/elf-main/
RUN npm install
COPY . /usr/src/elf-main
EXPOSE 30025
RUN node_modules/.bin/webpack
CMD [ "npm", "start" ]