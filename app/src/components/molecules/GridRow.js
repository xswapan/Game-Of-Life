import React, { Component } from 'react';

class GridRow extends Component {

  render() {
    const rowData = this.props.rowData;

    return (
      <tr>
        {
          rowData.map((value, index) => {
            const tdClassName = value ? "Alive-cell" : "Dead-cell";

            return (
              <td index={index} key={index} className={tdClassName}>
                {""}
              </td>
            )
          })
        }
      </tr>
    );
  }

}

export default GridRow;
