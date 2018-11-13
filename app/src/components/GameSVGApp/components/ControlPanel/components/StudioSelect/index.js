import React, { Component } from "react";

export default class extends Component {
  state = {
    options: [
      "Background",
      "Foreground",
      "Text",
      "Size"
    ]
  };
  renderSelect (){
    return this.state.options.map((option, index) => {
      return <option key={index} value={option}>{option}</option>
    })
  }

  change = ({ target }) => {
    const { value } = target;
    this.props.handleCurrentPanel(value);
  };

  render (){
    return (
      <div className="studio-select">
        <label>Studio</label>
        <select onChange={this.change}>
          <option>none</option>
          {this.renderSelect()}
        </select>
      </div>
    )
  }
}
