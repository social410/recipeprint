FROM node:16-alpine as builder

#add curl

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm i

COPY . ./

# Bundle static assets with nginx
FROM nginx:1.23.2-alpine as production

ENV NODE_ENV production
# Copy built assets from `builder` image
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
# Expose port
EXPOSE 80:3000

CMD ["nginx", "-g", "daemon off;"]


