# build environment
FROM node:12.15 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
RUN npm install --silent
RUN npm install react-scripts -g --silent
COPY . /app
RUN npm run build

# production environment
# FROM nginxinc/nginx-unprivileged:1.16.1-alpine
# COPY --from=build /app/build /usr/share/nginx/html
# COPY nginx/nginx.conf /etc/nginx/
# EXPOSE 8081
# CMD ["nginx", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]