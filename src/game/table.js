const tableColors = ['red', 'blue', 'purple', 'pink', 'yellow', 'brown', 'green', 'black', 'gray', 'orange',
  'tan', 'cyan', 'darkkhaki', 'dimgray', 'honeydew', 'lightcoral', 'wheat', 'turquoise']


const createRandomTable = (nr) => {

  const el = [];
  const elRandom = [];
  let x = 0
  for (let i = 0; i < nr; i++) {
    el[x] = i;
    el[x + 1] = i;
    x += 2;
  }
  //unsorted Table
  do {
    const number = Math.floor(Math.random() * (el.length));
    elRandom.push(el[number]);
    el.splice(number, 1)
  }
  while (el.length !== 0)
  return elRandom;
}

export { tableColors, createRandomTable }