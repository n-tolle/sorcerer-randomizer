import React from 'react';

let Lineages = function(props) {
  if (props.step !== 1) {
    return null;
  }
  let notSelected = props.lineages.filter(lineage => !lineage.selected);
  return (
    <div>
      <form>
        <fieldset>
          <legend>Lineages to include</legend>
          <div>
            <input type="checkbox" id="all-lineages" name="lineages" checked={notSelected.length === 0 ? true : false} onChange={e => props.selectAll(e)}></input>
            <label htmlFor="all-lineages">Select All</label>
          </div>
          {props.lineages.map(lineage => (
            <div key={lineage.name.split(' ').join('-')}>
              <input type="checkbox" id={lineage.name.split(' ').join('-')} name="lineages" value={lineage.name} checked={lineage.selected} onChange={e => props.handleChange(e)}></input>
              <label htmlFor={lineage.name.split(' ').join('-')}>{lineage.name}</label>
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