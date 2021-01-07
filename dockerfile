FROM node:13.12.0-alpine

WORKDIR /conductor-app

COPY . .

RUN npm install @material-ui/core
RUN npm install --production

EXPOSE 3000

CMD ["npm", "run", "build"]