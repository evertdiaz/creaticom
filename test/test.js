/* eslint-env mocha */
var assert = require('assert')
describe('Array', function () {
  describe('#indexOf()', function () {
    it('Debería retornar -1 cuando no se encuentre el valor', function () {
      assert.equal(-1, [1, 2, 3].indexOf(4), 'Ya pasamos')
    })
  })
})

describe('Cadenas', function () {
  describe('subcadenas', function () {
    it('Debería retornar una subcadena', function () {
      assert.equal('chain', 'test chain and other word for test'.substring(5, 10))
    })
  })
})

var first = require('../utils/demo')
describe('first', function () {
  it('returns the first element of an array', function () {
    var result = first([1, 2, 3])
    assert.equal(result, 1, 'first([1, 2, 3]) is 1')
  })
})
