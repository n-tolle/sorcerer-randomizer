import React from 'react';

let Setup = function(props) {
  if (props.step !== 5) {
    return null;
  }
  if (props.endbringer) {
    return (
      <div>
        <p>Endbringer Coming Soon</p>
        <button type="button" onClick={() => props.reset()}>Reset</button>
      </div>
    );
  }
  if (props.players === 1) {
    return (
      <div>
        <p>Solo is only available with the Endbringer scenarios.</p>
        <button type="button" onClick={() => props.reset()}>Reset</button>
      </div>
    );
  }
  return (
    <div>
      <h1>Players</h1>
      <ul>
        {props.playerSetup.map(player => (
          <li key={`player${player.player}`}>Player {player.player}: {player.character} the {player.lineage} of the {player.domain}</li>
        ))}
      </ul>
      <h1>Boards</h1>
      <p>If playing 4 player teams, ignore the last board listed.</p>
      <ul>
        {props.boardSetup.map(board => (
          <li key={board}>{board}</li>
        ))}
      </ul>
      <button type="button" onClick={() => props.reset()}>Reset</button>
    </div>
  )
}

export default Setup;