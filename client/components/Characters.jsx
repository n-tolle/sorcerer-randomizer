import React from 'react';
// import characterList from './lists/characterList.js';

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
          {props.characters.map(character => (
            <div key={character.name.split(' ').join('-')}>
              <input type="checkbox" id={character.name.split(' ').join('-')} name="characters" value={character.name} checked={character.selected} onChange={e => props.handleChange(e)}></input>
              <label htmlFor={character.name.split(' ').join('-')}>{character.name}</label>
            </div>
          ))}
        </fieldset>
        <button type="button" onClick={() => props.next()}>Lineages →</button>
      </form>
    </div>
  )
}

export default Characters;