FROM node:16.13.2-alpine
WORKDIR /app
COPY package*.json .
RUN yarn
COPY . .
EXPOSE 3000
CMD ["yarn", "dev"]