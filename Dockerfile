FROM node

WORKDIR /goit-node-temp-backend

COPY . .

RUN npm install 

EXPOSE 3030

CMD ["cross-env", "NODE_ENV=production", "node", "./server.js"]
