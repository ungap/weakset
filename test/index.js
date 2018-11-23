

var WeakSet = require('../cjs');
var $WeakSet = WeakSet;
test();

delete require.cache[require.resolve('../cjs')];
global.WeakSet = void 0;

if (typeof process !== 'undefined') {
  var i = 0;
  Object.defineProperty(global, 'WeakSet', {
    configurable: true,
    get: function () {
      if (0 === i++)
        throw WeakSet;
      return $WeakSet;
    },
    set: function (WeakSet) {
      delete global.WeakSet;
      global.WeakSet = WeakSet;
    }
  });
}

WeakSet = require('../cjs');
test();

function test() {
  var a = {};
  var b = {};
  var c = {};

  var ws1 = new WeakSet;
  var ws2 = new WeakSet([a, b, c]);

  console.assert(ws1.has(a) === false);
  console.assert(ws1.add(a) === ws1);
  console.assert(ws1.has(a) === true);
  console.assert(ws1['delete'](a) === true);
  console.assert(ws1.has(a) === false);

  console.assert(ws2.has(a) === true);
  console.assert(ws2.has(b) === true);
  console.assert(ws2.has(c) === true);
  console.assert(ws2['delete'](b) === true);
  console.assert(ws2.has(a) === true);
  console.assert(ws2.has(b) === false);
  console.assert(ws2.has(c) === true);
}
