FROM node:18-buster-slim as builder

WORKDIR /build

COPY package*.json ./
RUN npm ci

COPY . ./
RUN npm run build

# -----------------------------
FROM node:18-buster-slim

COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.7.1 /lambda-adapter /opt/extensions/lambda-adapter
ENV PORT=3000

WORKDIR /app

COPY --from=builder /build/next.config.js ./
COPY --from=builder /build/public ./public
COPY --from=builder /build/.next/static ./.next/static
COPY --from=builder /build/.next/standalone ./

EXPOSE 3000
CMD [ "node", "server.js" ]
