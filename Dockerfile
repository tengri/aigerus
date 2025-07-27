FROM node:20-alpine

# Accept build argument
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

WORKDIR /opt/aigerus-frontend
COPY package.json .

RUN yarn install
COPY . .
RUN yarn build
EXPOSE 80
CMD ["npm", "run", "start"]