package.json setup:
npm init -y

Express setup:
npm install express

creating an entry point:
index.js

nodemon for auto-reload:
npm install nodemon
npx nodemon index.js

for typescript:
npm install --save-dev typescript nodemon @types/node @types/express

for deploying in server, we dont have fixed port number, so we will be changing, for that we are using dotenv:
npm i dotenv

We need to customize the scripts file in the package.json as per the dist we build!

WE CAN DEPLOY OUR API:
Render: A platform for deploying a simple Node.js API
Railway: A platform for hosting full-stack applications, backend APIs, or websites
Cyclic: A platform for hosting full-stack applications, backend APIs, or websites
