import React from 'react';
import Cell from './Cell.js';

let Grid = (props) => {
    return (
      [...Array(9).keys()].map(
        rowIndex => (
          <tr key = {rowIndex}>
            {
              [...Array(10).keys()].map(
                columnIndex => {
                  let currentIndex = rowIndex * 10 + columnIndex + 1;
                  return(
                  <td key={columnIndex}>
                    <Cell
                      key={currentIndex}
                      selected={props.selectedValues[currentIndex]}
                      value={currentIndex}
                    />
                    </td>
                  )
                }
              )
            }
          </tr>
        )
      )
    )
}

export default Grid;
