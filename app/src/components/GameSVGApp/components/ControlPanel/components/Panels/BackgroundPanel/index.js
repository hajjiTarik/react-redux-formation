import React, { Component } from "react";
import Gradient from "./components/Gradient";

export default class BackgroundPanel extends Component {

  render (){
    return (
      <div className="background-panel">
        <h4>Background</h4>
        <Gradient />
      </div>
    );
  }
}

