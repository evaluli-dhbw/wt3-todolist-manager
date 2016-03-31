// import express
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');

const router = require('./routes');

mongoose.connect('mongodb://localhost/todolist-manager');

// create a app
const app = express();

// static files (=client code) are in the client directory
app.use(express.static(__dirname + '/../client'));

// define the routes
router(app);

// create server
const server = http.createServer(app);

// start server on port 3000
server.listen(3000);
console.log('Server running at port 3000');
