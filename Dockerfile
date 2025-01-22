# Stage 1: Build API and UI
FROM node:lts AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the entire project to the container
COPY . .

RUN npm install

RUN npm run build

# Stage 2: Setup the final image
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the entire project from the builder stage
COPY --from=builder /app /app

# Copy the built UI to Nginx's html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy the nginx configuration file
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
