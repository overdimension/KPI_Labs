let incNumber = function incNumber(n) {
  return n + 1;
}

let incObject = function incObject(num) {
  num.n = num.n + 1;
}

const a = 5;
const b = incNumber(a);
console.dir({ a, b }); 

const obj = { n: 5 };
incObject(obj);
console.dir(obj); 