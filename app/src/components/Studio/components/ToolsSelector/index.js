import React, {Component} from 'react';
import './style.scss';

export default class ToolsSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      selectedValue: 'Background',
      select: [
        'Background',
        'Transformations',
        'Text',
        'Size & preset'
      ]
    };
  }

  change = (event) => {
    this.setState({value: event.target.value});
    this.props.getSelectedValueHandler(event.target.value);
  };

  render() {
    return (
      <div>
        <label className="tool-selector-label" htmlFor="tools-selector-select">Studio</label>
        <select
          id="tools-selector-select"
          className="tools-selector"
          onChange={this.change}
          value={this.state.value}
        >
          <option>none</option>
          {this.state.select.map((label, index) =>
            <option
              key={index}
              value={label}>
              {label}
            </option>
          )}
        </select>
      </div>
    );
  }
}
