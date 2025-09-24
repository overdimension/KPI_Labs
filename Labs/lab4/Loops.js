function sumFor() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

function sumForOf() {
    let total = 0;
    for(const number of arguments) {
        total += number;
    }
    return total;
}

function sumWhile() {
    let total = 0;
    let i = 0;
    while(i <arguments.length) {
        total += arguments[i];
        i++;
    }
    return total;
}

function sumDoWhile() {
    let total = 0;
    let i = 0;
    if(arguments[i] != undefined){
        do {
        total += arguments[i];
        i++
    } while(i < arguments.length);
    }
    return total;
}

function sumReduce () {
    return Array.from(arguments).reduce((sum, num) => sum + num, 0); 
}

console.log(sumFor(1, 2, 3));
console.log(sumForOf(0));
console.log(sumWhile());
console.log(sumDoWhile(1, -1, 1));
console.log(sumReduce(10, -1, -1, -1));
