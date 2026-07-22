FROM node:20-bookworm AS build
WORKDIR /app

COPY certs/ /tmp/certs/

COPY package.json package-lock.json ./
RUN if [ -f /tmp/certs/zscaler.pem ]; then \
      NODE_EXTRA_CA_CERTS=/tmp/certs/zscaler.pem npm ci --include=dev; \
    else \
      npm ci --include=dev; \
    fi

COPY . .

RUN if [ -f /tmp/certs/zscaler.pem ]; then \
      NODE_EXTRA_CA_CERTS=/tmp/certs/zscaler.pem npm run build; \
    else \
      npm run build; \
    fi

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]