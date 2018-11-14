import React from 'react';

import GameSVGHeader from "./components/GameSVGHeader";
import GameSVGApp from "./components/GameSVGApp";
import GameSVGFooter from "./components/GameSVGFooter";

export default () =>
  <div className="container">
    <GameSVGHeader/>
    <GameSVGApp/>
    <GameSVGFooter/>
  </div>;
