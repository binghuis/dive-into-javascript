import { increment, count } from "./module.js";

increment();
console.log(count);

function m1() {
  import("./module.js").then((module) => {
    module.increment();
    console.log(module.count);
  });
}

function m2() {
  import("./module.js").then((module) => {
    module.increment();
    console.log(module.count);
  });
}

m1();
m2();
