#Install dependencies:

npm install --save-dev express
npm install --save-dev nodemon
npm install --save-dev body-parser
npm install --save-dev underscore

#Run Nodemon:
nodemon server.js

#Test json req. with postman (body-json)

{
    "first_name": "Mehmetcan",
    "last_name": "Budak",
    "number": 123456,
    "title": "developer"
}

#Postman Workspaces

Create an environment

VARIABLE = apiURL
CURRENT VALUE = http:localhost:3000

later you can use

{{apiURL}}/something/4
instead of 
http:localhost:3000/something/4