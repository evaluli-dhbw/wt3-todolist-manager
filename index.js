// import express
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todolist-manager');

// create a app
const app = express();

// static files (=client code) are in the client directory
app.use(express.static(__dirname + '/client'));

// define the routes
app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.get('/api', function(req, res) {
  res.send('server');
});

// create server
const server = http.createServer(app);

// start server on port 3000
server.listen(3000);
console.log('Server running at port 3000');
