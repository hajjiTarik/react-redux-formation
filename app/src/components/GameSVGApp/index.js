import React, { Component } from "react";
import ControlPanel from "./components/ControlPanel"
import Preview from "./components/Preview"

console.log(Preview);

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

  handleRotate = rotate => {
    this.setState({
      rotate
    })
  };

  render() {
    return (
      <div className="app-container">
        <ControlPanel
          handleSVG={this.handleSVG}
          handleBackgroundColorFrom={this.handleBackgroundColorFrom}
          handleBackgroundColorTo={this.handleBackgroundColorTo}
          handleRotate={this.handleRotate}
        />
        <Preview {...this.state} />
      </div>
    )
  }
}
