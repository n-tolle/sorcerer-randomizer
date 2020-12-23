import React from 'react';
import boardList from './lists/boardList.js';

let Boards = function(props) {
  if (props.step !== 3) {
    return null;
  }
  return (
    <div>
      <form>
        <fieldset>
          <legend>Boards to include (if 4 players please select at least 4)</legend>
          <div>
            <input type="checkbox" id="all-boards" name="boards" onChange={e => props.selectAll(e)}></input>
            <label htmlFor="all-boards">Select All</label>
          </div>
          {boardList.map(board => (
            <div key={board.lower}>
              <input type="checkbox" id={board.lower} name="boards" value={board.upper} onChange={e => props.handleChange(e)}></input>
              <label htmlFor={board.lower}>{board.upper}</label>
            </div>
          ))}
        </fieldset>
        <button type="button" onClick={() => props.previous()}>← Domains</button>
        <button type="button" onClick={() => props.next()}>Game Info →</button>
      </form>
    </div>
  )
}

export default Boards;