nodejs-mongodb-api

is a example api with mongodb.

Prerequisites:
- nodejs 10.16
- mongodb 4.4


=====================================
Development Environment
=====================================

Run application:
- On any terminal move to the "nodejs-api" folder and execute these commands:

npm run start:dev


=====================================
Some Curl command examples
=====================================

curl -i -H "Content-Type: application/json" -X POST -d "{'bookId':'1', 'name':'dev ops'}" http://localhost:3001/book
curl -i -H "Content-Type: application/json" -X GET http://localhost:1234/books