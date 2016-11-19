var assert = require('assert');
describe('Array', function() {
  describe('#length', function() {
    it('should return true', function() {
        var b = [0,1,2,3]
      assert.equal(4, b.length);
    });
  });
})