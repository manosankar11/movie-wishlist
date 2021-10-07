import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/User/Header/Header'
import Watchlist from './components/User/Watchlist/Watchlist'
import Watched from './components/User/Watched/Watched'
import Add from './components/User/Add/Add'
import "./lib/font-awesome/css/all.min.css"
import { GlobalProvider } from './context/GlobalState';



function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Watchlist />
          </Route>
          <Route path="/watched">
            <Watched />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
