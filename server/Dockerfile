FROM node:alpine

ARG PORT

WORKDIR /app

# COPY package.json and package-lock.json files
COPY package*.json ./

# generated prisma files
COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./

# COPY tsconfig.json file
COPY tsconfig.json ./

# COPY
COPY . .

RUN npm install -g nodemon
RUN npm install
RUN npx prisma generate

EXPOSE ${PORT}

CMD npm run dev
