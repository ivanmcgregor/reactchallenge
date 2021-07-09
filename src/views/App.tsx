import React, {useState} from 'react';
import PlayerSelect from '../components/PlayerSelect';
import PlayerDetails from '../components/PlayerDetails'
import Header from '../components/Header';
import {IPlayer} from '../utils/api';
import './App.scss';

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState<undefined | IPlayer>(undefined);
  return (
    <div className="App">
      <Header />
      <main className="container">
        <div className="app-split-view">
          <PlayerSelect selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} />
          <PlayerDetails player={selectedPlayer} />
        </div>
      </main>
    </div>
  );
}

export default App;
