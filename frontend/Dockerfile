# Use an official Node runtime as a parent image
FROM node:18.4 AS builder

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN #npm run build

#FROM nginx:alpine
#
#RUN apk update && apk add bash
#
#COPY --from=builder /app/build /usr/share/nginx/html
#
#COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port the app runs on
EXPOSE 3000

# Start the app
#CMD ["npx", "serve", "-s", "build"]
ENTRYPOINT ["npm", "start"]
#ENTRYPOINT ["nginx", "-g", "daemon off;"]