FROM node:16 as build-stage
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install 

ARG REACT_APP_OPENAI_API_KEY
ARG REACT_APP_OPEN_NA_KEY
ENV REACT_APP_OPENAI_API_KEY=${REACT_APP_OPENAI_API_KEY}
ENV REACT_APP_OPEN_NA_KEY=${REACT_APP_OPEN_NA_KEY}

COPY . ./
RUN npm run build

FROM nginx:latest as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]