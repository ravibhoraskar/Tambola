import React from 'react';

let Cell = (props) => {
    return (
      <div className={props.selected ? "SelectedCell" : "UnselectedCell"}>
        {props.value}
      </div>
    )
}

export default Cell;
