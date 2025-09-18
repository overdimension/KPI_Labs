//Example 2
const arrayDynamic = [
  true, 'hello', 5, 12, -200, false, false, 'word',
  3.14, 'JavaScript', true, 0, 'GPT', 42, 'bye', false, 51
];

const countingTypesDynamic = {};

for (const item of arrayDynamic) {
    const type = typeof item;
    countingTypesDynamic[type] = (countingTypesDynamic[type] || 0) + 1;
}

console.log(countingTypesDynamic);