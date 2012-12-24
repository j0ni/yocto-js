"use strict";

/* global exports, module, process */

var config = exports = module.exports = {};

config.port = process.env.PORT || '3000';
config.mongoUrl = process.env.MONGOHQ_URL || 'mongodb://127.0.0.1/yocto-js-dev';