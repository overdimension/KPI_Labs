function unique(array) {
  return array.filter((item, index) => array.indexOf(item) === index);
}

console.log(unique([2, 1, 1, 3, 2]));
console.log(unique(['top', 'bottom', 'top', 'left']));