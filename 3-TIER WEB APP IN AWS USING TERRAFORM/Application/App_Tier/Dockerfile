FROM --platform=linux/amd64 node:17-alpine
RUN mkdir -p /usr/SRC/App_Tier
WORKDIR /usr/SRC/App_Tier

# Install app dependencies
COPY package.json /usr/SRC/App_Tier

RUN npm install

# Bundle app source
COPY . /usr/SRC/App_Tier

# Expose publc port and run npm command
EXPOSE 3000
CMD ["npm", "start"]
