function removeElements(array, ...items) {
  for (const item of items) {
    let i = 0;
    while (i < array.length) {
      if (array[i] === item) {
        array.splice(i, 1); 
      } else {
        i++;
      }
    }
  }
}

const array1 = [1, 2, 3, 4, 5, 6, 7];
removeElements(array1, 5, 1, 6);
console.log(array1); 

const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array2, 'Lima', 'Berlin', 'Kiev');
console.log(array2); 