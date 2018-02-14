'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

var express = require("express");

var app = express();


app.get("/api/users", function (req, res) {
    res.send({
        name: "Preston",
        IsValid: true,
        group: "Admin"
    })
});

var server = http.createServer(app);


server.listen(port);


//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);
