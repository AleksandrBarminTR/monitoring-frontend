FROM node:8

COPY docker/entrypoint.sh /opt/entrypoint.sh

WORKDIR /opt/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
# If you are building your code for production
# RUN npm install --only=production
# Bundle app source
COPY . .
EXPOSE 3000

ENV NODE_ENV development

ENTRYPOINT [ "/opt/entrypoint.sh" ]