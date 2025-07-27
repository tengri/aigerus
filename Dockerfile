FROM node:20-alpine

WORKDIR /opt/aigerus-frontend

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

# Set the environment variable for the build
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

RUN npm run build

EXPOSE 80
CMD ["npm", "run", "start"]