// @shojib

'use strict';

var nopt = require('nopt');

exports.known = {help: Boolean, version: Boolean};
exports.aliases = {h: '--help', V: '--version'};

Object.defineProperty(exports, 'options', {
  get: function() {
    return nopt(exports.known, exports.aliases, process.argv, 2);
  }
});