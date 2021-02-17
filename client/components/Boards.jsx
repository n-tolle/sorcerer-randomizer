import React from 'react';
import boardList from './lists/boardList.js';

let Boards = function(props) {
  if (props.step !== 3) {
    return null;
  }
  let notSelected = props.boards.filter(board => !board.selected);
  return (
    <div>
      <form>
        <fieldset>
          <legend>Boards to include (if 4 players please select at least 4)</legend>
          <div>
            <input type="checkbox" id="all-boards" name="boards" checked={notSelected.length === 0 ? true : false} onChange={e => props.selectAll(e)}></input>
            <label htmlFor="all-boards">Select All</label>
          </div>
          {props.boards.map(board => (
            <div key={board.name.split(' ').join('-')}>
              <input type="checkbox" id={board.name.split(' ').join('-')} name="boards" value={board.name} checked={board.selected} onChange={e => props.handleChange(e)}></input>
              <label htmlFor={board.name.split(' ').join('-')}>{board.name}</label>
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