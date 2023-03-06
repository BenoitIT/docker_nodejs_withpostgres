FROM node:18.13.0

WORKDIR /usr/myproject/app

COPY package*.json ./
 
RUN npm install

COPY . .

EXPOSE 8070

CMD ["node","index.js"]