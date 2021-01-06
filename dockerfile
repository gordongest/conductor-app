FROM node:13.12.0-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm install --save @material-ui/core
RUN npm install --save @material-ui/icons
RUN npm install react-scripts@3.4.1 -g

COPY . ./

EXPOSE 3000

CMD ["npm", "run", "deploy"]