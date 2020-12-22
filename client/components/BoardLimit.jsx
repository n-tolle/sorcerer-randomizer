import React from 'react';

let BoardLimit = function(props) {
  if (props.step !== 7) {
    return null;
  }
  return (
    <div>
      <p>You must select at least 3 boards (4 for a 4 player game).</p>
      <button type="button" onClick={() => props.reset()}>Reset</button>
    </div>
  );
}

export default BoardLimit;