async function loadModuleA() {
  const { a } = await import("./module.js");
  return a;
}

console.log("首次加载");
const a1 = await loadModuleA();
console.log(a1);

console.log("再次加载");
const a2 = await loadModuleA();
console.log(a2);

console.log("a1 === a2", Object.is(a1, a2));

// 只有第一次加载的时候会执行模块内的代码，打印 "你好"。
// 两次加载的结果是相同的，因为模块内的代码只执行一次。
