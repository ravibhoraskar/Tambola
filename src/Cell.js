import React from 'react';

const Cell = props => (
  <div className={props.selected ? 'SelectedCell' : 'UnselectedCell'}>
    {props.value}
  </div>
);

export default Cell;
