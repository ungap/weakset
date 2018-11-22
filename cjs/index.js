/*! (c) Andrea Giammarchi - ISC */
try { new WeakSet; }
catch (o_O) {
  // requires a global WeakMap (IE11+)
  (function (WeakMap) {
    var all = new WeakMap;
    var proto = (WeakSet = function WeakSet(iterable) {
      'use strict';
      all.set(this, new WeakMap);
      if (iterable)
        iterable.forEach(this.add, this);
    }).prototype;
    proto.add = function (value) {
      return all.get(this).set(value, 1), this;
    };
    proto.delete = function (value) {
      return all.get(this).delete(value);
    };
    proto.has = function (value) {
      return all.get(this).has(value);
    };
  }(WeakMap));
}
module.exports = WeakSet;
