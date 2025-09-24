/*Random number*/
function random(min, max) {
    if (max === 0) {
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(random(10, 20))

/* Random key */
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const length = 10;

function generateKey(length, characters) {
    let key = '';
    for(let i = 0; i<length; i++) {
        const index = Math.floor(Math.random() * characters.length);
        key += characters[index];
    }
    return key;
}
