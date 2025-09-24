//Example 1
const array = [
  true, 'hello', 5, 12, -200, false, false, 'word',
  3.14, 'JavaScript', true, 0, 'GPT', 42, 'bye', false, 51
];

const countingTypes = {string: 0, boolean: 0, number: 0};

for (const item of array) {
    const type = typeof item;
    countingTypes[type]++;
}

console.log(countingTypes);