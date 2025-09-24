/*Scalar(1)*/
function incNumber(n) {
  return n + 1;
}

const a = 5;
const b = incNumber(a);
console.dir({ a, b }); 

/*Scalar(2)*/
function incObject(num) {
  num.n = num.n + 1;
}

const obj = { n: 5 };
incObject(obj);
console.dir(obj); 