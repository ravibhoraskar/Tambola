import React from 'react';

const LastFiveValues = props => (
  <p className="LastFiveSelectedValues" onClick={props.onClick}>
    {props.value ? props.value : 'Click button'}
  </p>
);

export default LastFiveValues;
