var globalVar = "var 变量";
let globalLet = "let 变量";
const globalConst = "const 常量";

function foo() {
  let fooLocalLet = "函数 foo 局部 let 变量";
  console.log(fooLocalLet);
}

function bar() {
  var barLocalVar = "函数 bar 局部 var 变量";
  const barLocalConst = "函数 bar 局部 const 常量";
}

foo();
