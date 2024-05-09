const songbinghui = 1;
let b = 2;

function first() {
  const c = 3;
  let songbinghui = 4;

  console.log("first", songbinghui);
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
