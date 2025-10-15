function array() {
  const arr = [];

  function access(i) {
    return arr[i];
  }

  access.push = function(value) {
    arr.push(value);
  };

   access.pop = function() {
    return arr.pop();
  };

  return access;
}

const a = array();

a.push('first');
a.push('second');
a.push('third');

console.log(a(0)); 
console.log(a(1)); 
console.log(a(2)); 

console.log(a.pop()); 
console.log(a.pop()); 
console.log(a.pop()); 
console.log(a.pop()); 