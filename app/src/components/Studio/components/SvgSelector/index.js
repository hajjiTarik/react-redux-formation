import React, {Component} from 'react';

export default class SvgSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: [
        {
          label: "Beer",
          source: require("../../../../svg/001-beer.svg")
        },
        {
          label: "invitation",
          source: require("../../../../svg/002-invitation.svg")
        },
        {
          label: "balloons",
          source: require("../../../../svg/003-balloons.svg")
        },
        {
          label: "avocado",
          source: require("../../../../svg/005-avocado.svg")
        },
        {
          label: "hat",
          source: require("../../../../svg/004-hat.svg")
        }
      ]
    }
  }

  change = (event) => {
    const value = event.target.value;
    this.props.getSelectedSvgHandler(this.state.icons[value]);
  };

  render() {
    return (
      <div className="svg-selector">
        <label>Select Icon :</label>
        <select onChange={this.change}>
          <option>none</option>
          {this.state.icons.map((icon, index) =>
            <option value={index} key={index}>{icon.label}</option>
          )}
        </select>
      </div>
    );
  }
}
