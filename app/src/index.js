import React, { Component } from 'react';

import GameSVGHeader from "./components/GameSVGHeader";
import GameSVGApp from "./components/GameSVGApp";
import GameSVGFooter from "./components/GameSVGFooter";

import './style.scss';

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <GameSVGHeader />
        <GameSVGApp />
        <GameSVGFooter />
      </div>
    );
  }
}
