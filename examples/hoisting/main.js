let a = 1;
const b = 2;
var c = 3;

function foo(a, b, c) {
  let d = 4;
  const e = 5;
  var f = 6;
  return a + b + c + d + e + f;
}

foo(a, b, c);
