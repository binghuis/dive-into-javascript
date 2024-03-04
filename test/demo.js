
var a_var = 'a'
let b_let = 'b'
const c_const = 'c'


function foo() {
  let b_foo = 'b_foo'
  console.log(b_foo);
}

function bar() {
  a_var = 'a_bar'
  b_let = 'b_bar'
}

foo()