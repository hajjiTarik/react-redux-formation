import React, { Component } from "react";
export default class extends Component {
  constructor(props){
    super(props);
  }

  calculateStyle = () => {

    return {
      width: "512px", height: "512px",
      backgroundColor: this.props.backgroundColor,
      backgroundImage: `linear-gradient(${this.props.fromColor}, ${this.props.toColor})`,
    }
  };

  render () {
    return (
      <div className="preview-container" style={this.calculateStyle()}>
        <img src={this.props.svg.source} alt="error"/>
      </div>
    )
  }
}
