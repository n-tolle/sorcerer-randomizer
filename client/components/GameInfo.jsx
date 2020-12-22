import React from 'react';

let GameInfo = function(props) {
  if (props.step !== 4) {
    return null;
  }
  return (
    <div>
      <form>
        <input type="checkbox" id="endbringer" name="endbringer" onChange={e => props.handleChange(e)}></input>
        <label htmlFor="endbringer">Use Endbringer Scenario</label>
        <div>
          <br></br>
          <label>
            Number of Players
            <select name="players" value={props.players} onChange={e => props.handleChange(e)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </label>
        </div>
        <br></br>
        <button type="button" onClick={() => props.previous()}>Boards</button>
        <button type="button" onClick={() => props.submit()}>Submit</button>
      </form>
    </div>
  );
}

export default GameInfo;