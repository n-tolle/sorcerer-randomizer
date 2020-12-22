import React from 'react';

let PlayerLimit = function(props) {
  if (props.step !== 6) {
    return null;
  }
  return (
    <div>
      <p>You must select a number of characters, lineages, and domains equal to at least the number of players.</p>
      <button type="button" onClick={() => props.reset()}>Reset</button>
    </div>
  );
}

export default PlayerLimit;