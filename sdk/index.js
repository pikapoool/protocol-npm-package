var _ = require('lodash');

function isProtocol(string) {
  return _.toLower(string) === 'protocol';
}

module.exports = isProtocol;
