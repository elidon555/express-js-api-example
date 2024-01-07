# Step 1: Choose the base image with Node 18
FROM node:18

# Step 2: Set the working directory in the Docker container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of your application's code
COPY . .

# Copy .env file
COPY .env ./

# Step 6: Your application binds to port 3000 by default, expose this port
EXPOSE 3000

# Step 7: Define the command to run your app (npm start)
CMD ["npm", "start"]
