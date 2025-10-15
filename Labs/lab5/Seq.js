function seq(fn){
    const func = (x) => fn(x);

    const chain = (next) => {
        if(typeof next === 'function'){
            return seq((x) => func(next(x)));
        }
        if(typeof next === 'number'){
            return func(next);  
        }
    };
    return chain;
}

console.log(seq(x => x + 7)(x => x * 2)(5)); 
console.log(seq(x => x * 2)(x => x + 7)(5)); 
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7)); 