import React from 'react';

let NextValue = (props) => {
  return (
    <p className="NextSelectedValue" onClick={props.onClick}>
      {props.value ? props.value : 'Click button'}
    </p>
  );
}

export default NextValue;
