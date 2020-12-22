import React from 'react';
import domainList from './lists/domainList.js';

let Domains = function(props) {
  if (props.step !== 2) {
    return null;
  }
  return (
    <div>
      <form>
        <fieldset>
          <legend>Domains to include</legend>
          {domainList.map(domain => (
            <div key={domain.lower}>
              <input type="checkbox" id={domain.lower} name="domains" value={domain.upper} onChange={e => props.handleChange(e)}></input>
              <label htmlFor={domain.lower}>{domain.upper}</label>
            </div>
          ))}
        </fieldset>
        <button type="button" onClick={() => props.previous()}>Lineages</button>
        <button type="button" onClick={() => props.next()}>Boards</button>
      </form>
    </div>
  )
}

export default Domains;