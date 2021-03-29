# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN rm -rf node_modules/ package-lock.json 
RUN yarn
RUN npm install
RUN npm install react-scripts

# add app
COPY . ./

# start app
CMD ["npm", "start"]