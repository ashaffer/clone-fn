/*
  Clone a function
  
  Copied mostly from this stackoverflow thread:
  http://stackoverflow.com/questions/1833588/javascript-clone-a-function
 */

module.exports = function(fn) {
  var toClone = fn.__isClone
    ? fn.__clonedFrom
    : fn;

  var tmp = function() { return toClone.apply(this, arguments); };
  
  tmp.__isClone = true;
  tmp.__clonedFrom = toClone;

  return tmp;
};