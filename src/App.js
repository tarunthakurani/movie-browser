import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SearchResult from './components/SearchResult';
import WatchedMoviesGrid from './components/WatchedMoviesGrid';

class App extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Header />
        <div className="content">
          <SearchResult />
          <WatchedMoviesGrid />
        </div>
      </div>
    );
  }
}

export default App;
