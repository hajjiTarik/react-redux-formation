import React, {Component} from 'react';

export default class Shape extends Component {
  constructor(props) {
    super(props);
  }

  change = event => {
    this.props.getShapeMorphHandler(event.target.value);
  };

  render() {
    return (
      <div className="gradient-block">
        <h3>Shape</h3>
        <select onChange={this.change}>
          <option selected value="">none</option>
          <option value="Circle">Circle</option>
          <option value="Square">Square</option>
          <option value="SquareAlt">Square-alt</option>
        </select>
      </div>
    );
  }
}
