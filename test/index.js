var expect = require('chai').expect;
var clonefn = require('../');

describe('clone-fn', function() {
  it('should work', function() {
    function test() { return 'a' }
    var clone = clonefn(test);
    expect(clone).to.not.equal(test);
    expect(clone()).to.equal(test());
  });
  
  it('should support closures', function() {
    var a = 1;
    function test() { return a; }
    var clone = clonefn(test);
    expect(clone).to.not.equal(test);
    expect(clone()).to.equal(test());
  });
});