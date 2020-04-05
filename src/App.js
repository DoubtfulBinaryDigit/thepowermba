import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Watchlist from './components/WatchList/WatchList';

function App() {
  return (
    <Switch>
      <Route path="/genre=:g" render={({ match }) => <Watchlist match={match} />} />
      <Route path="/" exact render={() => <Watchlist />} />
    </Switch>
  );
}

export default App;
