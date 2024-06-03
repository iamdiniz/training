FROM node:20
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g @angular/cli@16
EXPOSE 4200
CMD ["npm", "run", "start"]
