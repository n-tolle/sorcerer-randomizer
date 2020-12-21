import React from 'react';

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
            <input type="checkbox" id="ariapses" name="characters" value="Ariapses" onChange={e => props.handleChange(e)}></input>
            <label htmlFor="ariapses">Ariapses</label>
          </div>
          <div>
            <input type="checkbox" id="tegu" name="characters" value="Tegu" onChange={e => props.handleChange(e)}></input>
            <label htmlFor="tegu">Tegu</label>
          </div>
          <div>
            <input type="checkbox" id="miselda" name="characters" value="Miselda" onChange={e => props.handleChange(e)}></input>
            <label htmlFor="miselda">Miselda</label>
          </div>
          <div>
            <input type="checkbox" id="zevrane" name="characters" value="Zevrane" onChange={e => props.handleChange(e)}></input>
            <label htmlFor="zevrane">Zevrane</label>
          </div>
          <div>
            <input type="checkbox" id="virgiliu" name="characters" value="Virgiliu" onChange={e => props.handleChange(e)}></input>
            <label htmlFor="virgiliu">Virgiliu</label>
          </div>
          <div>
            <input type="checkbox" id="seth" name="characters" value="Seth" onChange={e => props.handleChange(e)}></input>
            <label htmlFor="seth">Seth</label>
          </div>
          <div>
            <input type="checkbox" id="jaleesa" name="characters" value="Jaleesa" onChange={e => props.handleChange(e)}></input>
            <label htmlFor="jaleesa">Jaleesa</label>
          </div>
          <div>
            <input type="checkbox" id="raganhar" name="characters" value="Raganhar" onChange={e => props.handleChange(e)}></input>
            <label htmlFor="raganhar">Raganhar</label>
          </div>
          <div>
            <input type="checkbox" id="thenoch" name="characters" value="Thenoch" onChange={e => props.handleChange(e)}></input>
            <label htmlFor="thenoch">Thenoch</label>
          </div>
          <div>
            <input type="checkbox" id="wachiwi" name="characters" value="Wachiwi" onChange={e => props.handleChange(e)}></input>
            <label htmlFor="wachiwi">Wachiwi</label>
          </div>
          <div>
            <input type="checkbox" id="sigismund" name="characters" value="Sigismund" onChange={e => props.handleChange(e)}></input>
            <label htmlFor="sigismund">Sigismund</label>
          </div>
          <div>
            <input type="checkbox" id="tatsu" name="characters" value="Tatsu" onChange={e => props.handleChange(e)}></input>
            <label htmlFor="tatsu">Tatsu</label>
          </div>
          <div>
            <input type="checkbox" id="merlin" name="characters" value="Merlin" onChange={e => props.handleChange(e)}></input>
            <label htmlFor="merlin">Merlin</label>
          </div>
          <div>
            <input type="checkbox" id="nicodemus" name="characters" value="Nicodemus" onChange={e => props.handleChange(e)}></input>
            <label htmlFor="nicodemus">Nicodemus</label>
          </div>
        </fieldset>
        <button type="button" onClick={() => props.next()}>Lineages</button>
      </form>
    </div>
  )
}

export default Characters;