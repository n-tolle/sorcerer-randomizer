import React from 'react';
import characterList from './lists/characterList.js';

let Characters = function(props) {
  if (props.step !== 0) {
    return null;
  }
  return (
    <div>
      <form>
        <fieldset>
          <legend>Characters to include</legend>
          <div>
            <input type="checkbox" id="all-characters" name="characters" onChange={e => props.selectAll(e)}></input>
            <label htmlFor="all-characters">Select All</label>
          </div>
          {characterList.map(character => (
            <div key={character.lower}>
              <input type="checkbox" id={character.lower} name="characters" value={character.upper} onChange={e => props.handleChange(e)}></input>
              <label htmlFor={character.lower}>{character.upper}</label>
            </div>
          ))}
        </fieldset>
        <button type="button" onClick={() => props.next()}>Lineages →</button>
      </form>
    </div>
  )
}

export default Characters;