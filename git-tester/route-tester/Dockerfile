FROM node:latest
RUN mkdir -p /usr/src/route-tester
WORKDIR /usr/src/route-tester
COPY package.json /usr/src/route-tester/
RUN npm install
COPY . /usr/src/route-tester
RUN echo "alias ll='ls -laF'" >> ~/.bashrc
EXPOSE 30029
RUN node_modules/.bin/webpack
CMD [ "npm", "start" ]
