async function loadModuleA() {
  const module = await import("./module.js");
  console.log(module.value);
}

console.log("首次加载 module");
await loadModuleA();

console.log("再次加载 module");
await loadModuleA();
