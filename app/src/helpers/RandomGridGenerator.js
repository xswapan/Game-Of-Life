/**
* Generates initial game state configuration
*
* @param length Length of square grid
* @return Random 2d grid with randomize 0 an 1 value
*/
const generator = (length) => {
  const grid = [];

  for (let i = 0; i < length; i++) {
    const row = [];

    for (let j = 0; j < length; j++) {
      row[j] = Math.round(Math.random());
    }

    grid.push(row);
  }

  return grid;
}

export default generator;
