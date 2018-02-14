'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

var express = require("express");

var app = express();

var controllers = require("./controllers");

controllers.init(app);

app.get("/", function (req, res) {
    req.params

})

var server = http.createServer(app);

server.listen(port);