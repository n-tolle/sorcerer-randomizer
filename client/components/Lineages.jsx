import React from 'react';
import lineageList from './lists/lineageList.js';

let Lineages = function(props) {
  if (props.step !== 1) {
    return null;
  }
  return (
    <div>
      <form>
        <fieldset>
          <legend>Lineages to include</legend>
          <div>
            <input type="checkbox" id="all-lineages" name="lineages" onChange={e => props.selectAll(e)}></input>
            <label htmlFor="all-lineages">Select All</label>
          </div>
          {lineageList.map(lineage => (
            <div key={lineage.lower}>
              <input type="checkbox" id={lineage.lower} name="lineages" value={lineage.upper} onChange={e => props.handleChange(e)}></input>
              <label htmlFor={lineage.lower}>{lineage.upper}</label>
            </div>
          ))}
        </fieldset>
        <button type="button" onClick={() => props.previous()}>← Characters</button>
        <button type="button" onClick={() => props.next()}>Domains →</button>
      </form>
    </div>
  )
}

export default Lineages;