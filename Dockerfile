FROM node:16.13.2-alpine
RUN npm install --global yarn
WORKDIR /app
COPY package*.json .
RUN yarn
COPY . .
EXPOSE 3000
CMD ["yarn", "dev"]