

var WeakSet = require('../cjs');
test();

delete require.cache[require.resolve('../cjs')];
global.WeakSet = void 0;

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
