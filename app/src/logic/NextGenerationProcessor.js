const newGridGenerator = (grid) => {
  let newGrid = new Array(grid.length);

  for (let i = 0; i < grid.length; i++) {
    newGrid[i] = new Array(grid.length);
  }

  return newGrid;
}

const cellStateProcessor = (aliveNeighbourCount, value) => {
  let presentStatus = value;

  if (presentStatus === 0 && aliveNeighbourCount === 3) {
    return 1;
  }

  switch (aliveNeighbourCount) {
    case 0:
    case 1:
      presentStatus = 0;
      break;
    case 2:
    case 3:
      break;
    default:
      presentStatus = 0;
  }

  return presentStatus;
}

const generator = (grid) => {
  let newGrid = newGridGenerator(grid);

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid.length; y++) {
      let aliveNeighbourCount = 0;

      for (let deltaX = -1; deltaX < 2; deltaX++) {
        for (let deltaY = -1; deltaY < 2; deltaY++) {

          if (deltaX === 0 && deltaY === 0) {
            //do nothing
          } else if (grid[x + deltaX] !== undefined
            && grid[x + deltaX][y + deltaY] !== undefined
            && grid[x + deltaX][y + deltaY]) {
              aliveNeighbourCount++;
            }
        }

      }

      newGrid[x][y] = cellStateProcessor(aliveNeighbourCount, grid[x][y]);
    }
  }

  return newGrid;
}

export default generator;
