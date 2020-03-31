import React from 'react';
import './styles/App.css';
import { Switch, Route } from 'react-router-dom';

import Watchlist from './components/Watchlist';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Switch>
        <Route path="/" render={() => <Watchlist />} />
      </Switch>
    </div>
  );
}

export default App;
