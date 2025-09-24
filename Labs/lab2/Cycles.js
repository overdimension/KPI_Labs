/*Example 1*/
function range(start, end) {
    const array = [];
    for (let item = start; item <= end; item++) {
        array.push(item);
    }
    return array;
}

console.log(range(15, 30));

/*Example 2*/
function rangeOdd(start, end) {
    const arrayOdd = [];
    for (let item = start; item <= end; item++) {
        if (item % 2 !== 0) {
            arrayOdd.push(item);
        }
    }
    return arrayOdd;
}

console.log(rangeOdd(15, 30));