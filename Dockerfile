FROM node:18-alpine
WORKDIR /app

RUN npm install -g npm@9

COPY package*.json .
COPY packages ./packages
COPY translations ./translations
COPY seed ./seed

RUN mkdir -p config && echo '{ \
  "shop": { \
    "language": "en", \
    "timezone": "UTC", \
    "currency": "USD", \
    "weightUnit": "kg", \
    "homeUrl": "http://localhost:3000" \
  }, \
  "system": { \
    "session": { \
      "maxAge": 86400000, \
      "resave": false, \
      "saveUninitialized": false, \
      "cookieSecret": "cartflow-secret-change-in-production", \
      "cookieName": "sid", \
      "adminCookieName": "admin-sid" \
    } \
  } \
}' > config/default.json

RUN npm install
RUN npm run compile
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]
