import React from 'react';
import Players from "./components/Players";
import './App.css';
import axios from "axios";

class App extends React.Component {
  state = {
    players: []
  }
  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res.data);
        this.setState({ players: res.data })
      })
      .catch(err => console.log('players not found'))
  }
  render() {
    return (
      <div className="App">

        <Players key={this.state.players.id} players={this.state.players} />


      </div>
    )
  }
}



export default App;
