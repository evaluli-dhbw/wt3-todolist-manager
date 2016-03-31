// import express
const express = require('express');
const http = require('http');

// create a app
const app = express();

// define the routes
app.get('/', function(req, res) {
  res.send('hallo');
});

app.get('/api', function(req, res) {
  res.send('api');
});

// create server
const server = http.createServer(app);

// start server on port 3000
server.listen(3000);
console.log('Server running at port 3000');
