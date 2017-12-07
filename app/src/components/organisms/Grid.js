import React, { Component } from 'react';

import GridRow from '../molecules/GridRow';

class Grid extends Component {

  render() {
    const grid = this.props.grid;
    const gridRows = this.rowGenerator(grid);

    return (
      <div>
        <table>
          <tbody>
            {gridRows}
          </tbody>
        </table>
      </div>
    );
  }

  rowGenerator(grid) {
    const gridLength = grid.length;
    const rows = [];

    for (var row = 0; row < gridLength; row++) {
      rows.push(
        <GridRow
          rowData={grid[row]}
          index={row}
          key={row}
        />
      );
    }

    return rows;
  }

}

export default Grid;
