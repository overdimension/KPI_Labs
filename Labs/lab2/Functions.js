function average(a, b) {
    return (a+b)/2;
}

function square(x) {
    return Math.pow(x, 2);
}

function cube(x) {
    return Math.pow(x, 3);
}

function calculate() {
    const array = [];
    for(let i=0; i <=9; i++) {
        const sqr = square(i);
        const cub = cube(i);
        const avg = average(sqr, cub);  
        array.push(avg);
    }
    return array;
}



console.log(average(5, 10));
console.log(square(5));
console.log(cube(5));
console.log(calculate());