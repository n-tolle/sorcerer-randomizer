import React from 'react';

let Domains = function(props) {
  if (props.step !== 2) {
    return null;
  }
  let notSelected = props.domains.filter(domain => !domain.selected);
  return (
    <div>
      <form>
        <fieldset>
          <legend>Domains to include</legend>
          <div>
            <input type="checkbox" id="all-domains" name="domains" checked={notSelected.length === 0 ? true : false} onChange={e => props.selectAll(e)}></input>
            <label htmlFor="all-domains">Select All</label>
          </div>
          {props.domains.map(domain => (
            <div key={domain.name.split(' ').join('-')}>
              <input type="checkbox" id={domain.name.split(' ').join('-')} name="domains" value={domain.name} checked={domain.selected} onChange={e => props.handleChange(e)}></input>
              <label htmlFor={domain.name.split(' ').join('-')}>{domain.name}</label>
            </div>
          ))}
        </fieldset>
        <button type="button" onClick={() => props.previous()}>← Lineages</button>
        <button type="button" onClick={() => props.next()}>Boards →</button>
      </form>
    </div>
  )
}

export default Domains;