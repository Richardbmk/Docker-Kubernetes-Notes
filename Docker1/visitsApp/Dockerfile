# Specify a base image
FROM node:alpine

# Setup a working directory
WORKDIR '/app'

COPY package.json . 
RUN npm install 
COPY . .

# Starting the server
CMD ["npm", "start"]