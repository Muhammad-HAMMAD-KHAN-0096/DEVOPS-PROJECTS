FROM --platform=linux/amd64 node:17-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/SRC/App_Tier

RUN npm install

# Bundle app source
COPY . /usr/src/app

# Expose publc port and run npm command
EXPOSE 3000
CMD ["npm", "start"]
