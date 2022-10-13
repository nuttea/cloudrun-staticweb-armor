# build environment
FROM node:16-alpine as react-build
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build

# server environment
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/configfile.template
ENV PORT 8080
RUN sh -c "envsubst '\${PORT}' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf"
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]