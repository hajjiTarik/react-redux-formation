import React, { Component } from "react";
export default class extends Component {
  constructor(props){
    super(props);
    this.state = {
      backgroundColor: "#fff",
      fromColor: "#fff",
      toColor: "#fff"
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.backgroundColor !== state.backgroundColor) {
      console.log(props.backgroundColor);
      return {
        backgroundColor: props.backgroundColor
      }
    }
    return null;
  }

  calculateStyle = () => {

    return {
      width: "512px", height: "512px",
      backgroundColor: `${this.props.backgroundColor}`,
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
