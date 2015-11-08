// @shojib

'use strict';

var pkg = require("../package.json");

exports.version = function() {
  console.log('ngcli v' + pkg.version);
};

exports.fatal = function(msg, code) {
  exports.helpHeader();
  console.log('Fatal error: ' + msg);
  console.log('');
  exports.helpFooter();
  process.exit(code);
};

exports.help = function() {
  exports.helpHeader();
  exports.helpFooter();
  process.exit();
};

exports.helpHeader = function() {
  console.log('ngcli: ' + pkg.description + ' (v' + pkg.version + ')');
  console.log('');
};

exports.helpFooter = function() {
  [
    'If you\'re seeing this message, either a ngcli wasn\'t found or ngcli',
    'hasn\'t been installed locally to your project.'
  ].forEach(function(str) { console.log(str); });
};