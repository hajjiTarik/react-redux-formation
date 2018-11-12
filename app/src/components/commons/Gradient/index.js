import React, {Component} from 'react';

export default class Gradient extends Component {
  constructor(props) {
    super(props);
  }

  change = event => {
    const value = event.target.value;
    this.props.getGradientTypeHandler(value);
  };

  render() {
    return (
        <div className="gradient-type">
          <label>Type :</label>
          <select onChange={this.change}>
            <option selected value="plain">plain</option>
            <option value="radial">radial</option>
          </select>
        </div>
    );
  }
}
