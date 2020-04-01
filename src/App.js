import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Watchlist from './components/Watchlist';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" render={() => <Watchlist />} />
      </Switch>
    </div>
  );
}

export default App;
