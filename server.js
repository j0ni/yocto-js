"use strict";

/* global require, process, console */

var app = require('./app');
var http = require('http');

http.createServer(app).listen(app.get('port'), function () {
  console.log("Express server listening on port %d in %s mode", app.get('port'), app.settings.env);
});