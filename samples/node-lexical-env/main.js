var a = 1;
let b = 2;
const c = 3;
function foo() {
  console.log(4);
}
// Node 环境，没有标识符的变量会被当作全局变量。
d = 5;

require("./module.js");
