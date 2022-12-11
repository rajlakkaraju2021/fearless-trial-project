FROM node:14

# create app directory
WORKDIR /usr/src/app

# install app dependencies
COPY package*.json ./
RUN npm install

# copy app source code
COPY . .

# expose the app port
EXPOSE 3000

# create a database directory
RUN mkdir -p /usr/src/app/database

# start the app
CMD ["node", "app.js"]
