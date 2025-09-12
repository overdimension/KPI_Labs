const array = [
  true, 'hello', 5, 12, -200, false, false, 'word',
  3.14, 'JavaScript', true, 0, 'GPT', 42, null, undefined, {}, [], Symbol('sym')
];

const countingTypes = {string: 0, boolean: 0, number: 0};

for (const i of array) {
  let type = typeof i;

  if (!countingTypes[type]) {
    countingTypes[type] = 1;
  } else {
    countingTypes[type] += 1;
  }
}

console.log(countingTypes);