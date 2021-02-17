import React from 'react';
import Boards from './Boards.jsx';
import Characters from './Characters.jsx';
import Domains from './Domains.jsx';
import GameInfo from './GameInfo.jsx';
import Lineages from './Lineages.jsx';
import Setup from './Setup.jsx';
import PlayerLimit from './PlayerLimit.jsx';
import BoardLimit from './BoardLimit.jsx';
import boardList from './lists/boardList.js';
import characterList from './lists/characterList.js';
import domainList from './lists/domainList.js';
import lineageList from './lists/lineageList.js';
const axios = require('axios');

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
      playerSetup: [],
      boardSetup: [],
      endbringerSetup: {nemesis: '', archetype: '', scenario: ''}
    }

    this.handleChange = this.handleChange.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.submit = this.submit.bind(this);
    this.reset = this.reset.bind(this);
    this.selectAll = this.selectAll.bind(this);
  }

  selectAll(e) {
    let name = e.target.name;
    let checked = e.target.checked;
    axios.put('/updateAll', null, {
      params: {
        type: name,
        value: checked
      }
    })
    .then(response => {
      console.log('RESPONSE: ', response);
      console.log('NAME: ', name);
      this.setState({[name]: response.data});
    })
    .catch(err => {
      console.log(err);
    })
  }

  handleChange(e) {
    const name = e.target.name;
    if (name === 'endbringer') {
      this.setState({
        endbringer: e.target.checked
      });
    } else if (name === 'players') {
      this.setState({
        players: Number(e.target.value)
      });
    } else {
      axios.put('/updateOne', {
        params: {
          name: e.target.value,
          value: e.target.checked
        }
      })
      .then(response => {
        let copy = this.state[name].slice(0);
        for (let i = 0; i < copy.length; i++) {
          if (copy[i].name === response.data.name) {
            copy[i].selected = response.data.selected;
          }
        }
        this.setState({[name]: copy});
      })
      .catch(err => {
        console.log(err);
      });
      // if (e.target.checked) {
      //   copy.push(e.target.value);
      // } else {
      //   copy = copy.filter(selection => selection !== e.target.value);
      // }
      // this.setState({
      //   [name]: copy
      // });
    }
  }

  next() {
    let step = ++this.state.step;
    this.setState({
      step: step
    })
  }

  previous() {
    let step = --this.state.step;
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

  submit() {
    let players = this.state.players;
    let pSetupCopy = this.state.playerSetup.slice(0);
    let bSetupCopy = this.state.boardSetup.slice(0);
    let eSetupCopy = {nemesis: '', archetype: '', scenario: ''};
    let characters = this.state.characters.slice(0);
    let lineages = this.state.lineages.slice(0);
    let domains = this.state.domains.slice(0);
    let boards = this.state.boards.slice(0);
    if (characters.length < players || lineages.length < players || domains.length < players) {
      this.setState({step: 6});
    } else if (boards.length < 3 || (players > 3 && boards < 4)) {
      this.setState({step: 7});
    } else {
      for (let i = 1; i <= players; i++) {
        let player = {player: i};
        let cIndex = Math.floor(Math.random() * characters.length);
        let lIndex = Math.floor(Math.random() * lineages.length);
        let dIndex = Math.floor(Math.random() * domains.length);
        player.character = characters[cIndex];
        player.lineage = lineages[lIndex];
        player.domain = domains[dIndex];
        characters.splice(cIndex, 1);
        lineages.splice(lIndex, 1);
        domains.splice(dIndex, 1);
        pSetupCopy.push(player);
      }
      let boardQuantity = players === 4 ? 4 : 3;
      for (let b = 0; b < boardQuantity; b++) {
        let bIndex = Math.floor(Math.random() * boards.length);
        bSetupCopy.push(boards[bIndex]);
        boards.splice(bIndex, 1);
      }
      this.setState({
        playerSetup: pSetupCopy,
        boardSetup: bSetupCopy,
        endbringerSetup: eSetupCopy,
        step: 5
      })
    }
  }

  reset() {
    this.setState({
      characters: [],
      lineages: [],
      domains: [],
      boards: [],
      endbringer: false,
      players: 2,
      step: 0,
      playerSetup: [],
      boardSetup: [],
      endbringerSetup: {nemesis: '', archetype: '', scenario: ''}
    })
  }

  componentDidMount() {
    axios.get('/options', {
      params: {
        options: {type: 'all'}
      }
    })
    .then(response => {
      this.setState({
        characters: response.data.characters,
        lineages: response.data.lineages,
        domains: response.data.domains,
        boards: response.data.boards
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <Characters step={this.state.step} characters={this.state.characters} handleChange={this.handleChange} next={this.next} selectAll={this.selectAll} />
        <Lineages step={this.state.step} handleChange={this.handleChange} next={this.next} previous={this.previous} selectAll={this.selectAll} />
        <Domains step={this.state.step} handleChange={this.handleChange} next={this.next} previous={this.previous} selectAll={this.selectAll} />
        <Boards step={this.state.step} handleChange={this.handleChange} next={this.next} previous={this.previous} selectAll={this.selectAll} />
        <GameInfo step={this.state.step} players={this.state.players} handleChange={this.handleChange} submit={this.submit} previous={this.previous} />
        <Setup step={this.state.step} players={this.state.players} playerSetup={this.state.playerSetup} boardSetup={this.state.boardSetup} endbringerSetup={this.state.endbringerSetup} endbringer={this.state.endbringer} reset={this.reset} />
        <PlayerLimit step={this.state.step} reset={this.reset} />
        <BoardLimit step={this.state.step} reset={this.reset} />
      </div>
    );
  }
}

export default App;