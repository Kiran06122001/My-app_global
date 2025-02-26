FROM nginx:latest AS base

ARG ENVIRONMENT
ENV ENVIRONMENT=${ENVIRONMENT}

FROM base AS development
COPY nginx.${ENVIRONMENT}.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]