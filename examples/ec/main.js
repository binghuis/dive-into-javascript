const a = 1;
let b = 2;

function first() {
  const c = 3;
  let d = 4;
  console.log("first");
  second();
}

function second() {
  console.log("second");
  third();
}

function third() {
  console.log("third");
}

first();
