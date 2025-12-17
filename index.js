const hasSelfEquality = require('has-self-equality')

module.exports = function hasNoSelfEquality(value) {
  return !hasSelfEquality(value)
}