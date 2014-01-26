(function (root, factory) {
  var moduleName = 'cssSafe';
  if (typeof define === 'function' && define.amd) {
    define([], function () {
        return (root[moduleName] = factory(b));
    });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root[moduleName] = factory();
  }
}(this, function () {

  /**
   * @see http://stackoverflow.com/a/7627603
   * 
   * @param  {[String]} value
   * @return {[String]}       CSS safe string
   */
  var cssSafe = function (value) {
    value = typeof value === 'string' ? value : '';
    return value.replace(/[^a-z0-9]/g, function(s) {
      var c = s.charCodeAt(0);
      if (c == 32) return '-';
      if (c >= 65 && c <= 90) return s.toLowerCase();
      return '__' + ('000' + c.toString(16)).slice(-4);
    });
  };

  return cssSafe;

}));
