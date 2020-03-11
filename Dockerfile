FROM alpine
WORKDIR /app
COPY . .

RUN apk add nodejs npm
RUN npm install

CMD [ "npm", "start" ]

# Run with:
# docker run -it -p 3000:3000 -rm suplastorefront:latest