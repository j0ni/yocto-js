"use scrict";

/* global require, describe, it, beforeEach */

var assert = require('should');
var request = require('supertest');

describe('app routing', function () {
  var app = require('../app');

  describe('GET /', function () {
    it('succeeds', function (done) {
      request(app)
        .get('/')
        .expect(200, done);

    });
  });
});