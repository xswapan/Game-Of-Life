import React, { Component } from 'react';

/**
* Molecule for table row which consists more than one of table columns
*/
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
