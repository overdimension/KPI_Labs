const array = [
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: 'Volodymyr Zelenskiy', phone: '+380226698127' },
    { name: 'Donald Trump', phone: '+380725925019' }
];

function findPhoneByName(name) {
    for(let i = 0; i < array.length; i++) {
        if(array[i].name === name) {
            return array[i].phone;
        }
    }

    return 0;
} 

console.log(findPhoneByName('Marcus Aurelius'));
console.log(findPhoneByName('Volodymyr Zelenskiy'));
console.log(findPhoneByName('Donald Trump'));