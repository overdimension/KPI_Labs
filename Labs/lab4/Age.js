const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

function age(persons) {
  const result = {}; 
  for (const person in persons) {
    const born = persons[person].born;
    const died = persons[person].died;
    result[person] = died - born;
  }
  return result;
}

console.log(age(persons));