# Stage 1
FROM node:lts AS builder
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY . .

# Stage 2
FROM node:lts
WORKDIR /app
COPY --from=builder /app/ ./
EXPOSE 3000
CMD ["node", "src/app.js"]