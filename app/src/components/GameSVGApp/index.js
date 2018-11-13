import React, { Component } from "react";
import ControlPanel from "./components/ControlPanel"
import Preview from "./components/Preview"

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      svg: {},
      color: "#fff"
    }
  }

  handleSVG = svg => {
    this.setState({
      svg
    });
  };

  handleBackgroundColor = color => {
    this.setState({
      backgroundColor: color,
      fromColor: "transparent",
      toColor: "transparent",

    });
  };

  handleBackgroundColorFrom = from => {
    this.setState({
      fromColor: from,
    });
  };

  handleBackgroundColorTo = to => {
    this.setState({
      toColor: to,
    });
  };

  render() {
    return (
      <div className="app-container">
        <ControlPanel
          handleSVG={this.handleSVG}
          handleBackgroundColor={this.handleBackgroundColor}
          handleBackgroundColorFrom={this.handleBackgroundColorFrom}
          handleBackgroundColorTo={this.handleBackgroundColorTo}
        />
        <Preview {...this.state} />
      </div>
    )
  }
}
