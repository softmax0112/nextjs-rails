FROM node:14.6.0

ENV PORT 3000

# Create app directory
RUN mkdir ./frontend
WORKDIR /frontend

# Installing dependencies
COPY ./package*.json ./frontend
RUN yarn install

# Copying source files
COPY ./yarn.lock ./frontend

EXPOSE 3000

# Running the app
CMD ["yarn" "run" "dev"]