"use scrict";

/* global require, exports, module */

var express = require('express'),
    mongoose = require('mongoose'),
    config = require('./config');

var app = exports = module.exports = express();

app.configure('development', function() {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  app.use(express.logger({ format: ':method :url :status :remote-addr :response-time'}));
});

app.configure('production', function() {
  app.use(express.errorHandler());
  app.use(express.logger());
});

app.configure(function () {
  app.set('port', config.port);
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

mongoose.connect(config.mongoUrl);

app.get('/', function (request, response) {
  response.send('They Live!');
});