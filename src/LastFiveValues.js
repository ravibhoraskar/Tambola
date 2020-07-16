import React from 'react';

const LastFiveValues = props => {
  const last = props.value[props.value.length - 1];
  const history = props.value.slice(0, props.value.length - 1);
  return (
    <div className="HistoryContainer">
      {history.map((e, idx) => (
        <div className="PreviousSelectedValue" key={idx}>
          {e}
        </div>
      ))}
      <div className="NextSelectedValue">{last || 'Click Button'}</div>
    </div>
  );
};

export default LastFiveValues;
