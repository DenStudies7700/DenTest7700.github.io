const http = require('http');
const https = require('https');
const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();

http.globalAgent.maxSockets = Infinity;
https.globalAgent.maxSockets = Infinity;
app.use(compression())
app.use(express.json());
app.use(express.static('public'));

app.use('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

const server = http.createServer(app);

server.listen(process.env.PORT);
console.debug('Server listening on port ' + process.env.PORT);
