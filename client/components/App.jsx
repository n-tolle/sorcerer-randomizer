import React from 'react';
// import Board from './Boards.jsx';
import Characters from './Characters.jsx';
// import Domains from './Domains.jsx';
// import GameInfo from './GameInfo.jsx';
// import Lineages from './Lineages.jsx';
// import Setup from './Setup.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      lineages: [],
      domains: [],
      boards: [],
      endbringer: false,
      players: 2,
      step: 0,
      setup: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.submit = this.submit.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleChange(e) {}

  next() {
    let step = ++this.state.step;
    this.setState({
      step: step
    })
  }

  previous() {
    let step = -- this.state.step;
    if (step === 0) {
      this.setState({
        characters: [],
        lineages: [],
        step: step
      })
    } else if (step === 1) {
      this.setState({
        lineages: [],
        domains: [],
        step: step
      })
    } else if (step === 2) {
      this.setState({
        domains: [],
        boards: [],
        step: step
      })
    } else {
      this.setState({
        boards: [],
        endbringer: false,
        players: 2,
        step: step
      })
    }
  }

  submit() {}

  reset() {
    this.setState({
      characters: [],
      lineages: [],
      domains: [],
      boards: [],
      endbringer: false,
      players: 2,
      step: 0,
      setup: []
    })
  }

  render() {
    return (
      <div>
        <Characters step={this.state.step} handleChange={this.handleChange} next={this.next} />
        {/* <Lineages step={this.state.step} handleChange={this.handleChange} next={this.next} previous={this.previous} />
        <Domains step={this.state.step} handleChange={this.handleChange} next={this.next} previous={this.previous} />
        <Boards step={this.state.step} handleChange={this.handleChange} next={this.next} previous={this.previous} />
        <GameInfo step={this.state.step} handleChange={this.handleChange} submit={this.submit} previous={this.previous} />
        <Setup step={this.state.step} setup={this.state.setup} /> */}
      </div>
    );
  }
}

export default App;