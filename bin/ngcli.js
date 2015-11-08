#!/usr/bin/env node

// @shojib

'use strict';

process.title = 'ngcli';

var findup = require('findup-sync');
var resolve = require('resolve').sync;


var options = require('../lib/cli').options;
var info = require('../lib/info');
var path = require('path');


var basedir = process.cwd();
var ngcliPath;

if (options.version) {
  info.version();
} else if (options.gruntfile) { 
  basedir = path.resolve(path.dirname(options.gruntfile));
} else if (options.base) {
  basedir = path.resolve(options.base);
}

try {
  ngcliPath = resolve('ngcli', {basedir: basedir});
} catch (ex) {
  ngcliPath = findup('lib/ngcli.js');
  if (!ngcliPath) {
    if (options.version) { process.exit(); }
    if (options.help) { info.help(); }
    info.fatal('Unable to find local ngcli.', 99);
  }
}

require(ngcliPath).cli();