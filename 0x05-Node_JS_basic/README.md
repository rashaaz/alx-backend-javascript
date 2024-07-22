# 0x05. NodeJS Basics

## Description

This project focuses on learning the basics of NodeJS, ExpressJS, and other associated technologies. You will gain hands-on experience in creating simple HTTP servers, reading files, and handling asynchronous operations. By the end of this project, you should be able to confidently build and manage back-end services using NodeJS and ExpressJS.

## Learning Objectives

At the end of this project, you will be able to:

- Run JavaScript using NodeJS
- Use NodeJS modules
- Read files using specific NodeJS modules
- Access command line arguments and the environment using `process`
- Create a small HTTP server using NodeJS
- Create a small HTTP server using ExpressJS
- Create advanced routes with ExpressJS
- Use ES6 with NodeJS using Babel-node
- Use Nodemon for faster development

## Requirements

- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node (version 12.x.x)
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `.js` extension
- Your code will be tested using Jest and the command `npm run test`
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project by running `npm run full-test`
- All of your functions/classes must be exported by using this format: `module.exports = myFunction;`

## Provided Files

- `database.csv`
    ```
    firstname,lastname,age,field
    Johann,Kerbrou,30,CS
    Guillaume,Salou,30,SWE
    Arielle,Salou,20,CS
    Jonathan,Benou,30,CS
    Emmanuel,Turlou,40,CS
    Guillaume,Plessous,35,CS
    Joseph,Crisou,34,SWE
    Paul,Schneider,60,SWE
    Tommy,Schoul,32,SWE
    Katie,Shirou,21,CS
    ```
- `package.json`
- `babel.config.js`
- `.eslintrc.js`

Don't forget to run `$ npm install` when you have the `package.json`.

## Tasks

### 0. Executing basic javascript with NodeJS
Create a function named `displayMessage` that prints in STDOUT the string argument.
- File: `0-console.js`

### 1. Using Process stdin
Create a program named `1-stdin.js` that will be executed through the command line.
- File: `1-stdin.js`

### 2. Reading a file synchronously with NodeJS
Create a function named `countStudents` that reads the database file synchronously.
- File: `2-read_file.js`

### 3. Reading a file asynchronously with NodeJS
Create a function named `countStudents` that reads the database file asynchronously.
- File: `3-read_file_async.js`

### 4. Create a small HTTP server using Node's HTTP module
Create a small HTTP server using the `http` module.
- File: `4-http.js`

### 5. Create a more complex HTTP server using Node's HTTP module
Create a small HTTP server using the `http` module with specific routing.
- File: `5-http.js`

### 6. Create a small HTTP server using Express
Create a small HTTP server using the Express module.
- File: `6-http_express.js`

### 7. Create a more complex HTTP server using Express
Create a small HTTP server using the Express module with specific routing.
- File: `7-http_express.js`

### 8. Organize a complex HTTP server using Express
Organize the server into multiple files and directories, using ES6 features.
- Directory: `full_server`
- Files: `full_server/utils.js`, `full_server/controllers/AppController.js`, `full_server/controllers/StudentsController.js`, `full_server/routes/index.js`, `full_server/server.js`

## Tips

- Using asynchronous callbacks is the preferred way to write code in NodeJS to avoid blocking threads.
- Ensure to export your Express app at the end of `server.js` (export default app).

## Running the Server

To start the server, run the following command:

```bash
npm run dev

