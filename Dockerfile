FROM node:20-alpine
WORKDIR /opt/aigerus-frontend
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 80
CMD ["npm", "run", "start"]