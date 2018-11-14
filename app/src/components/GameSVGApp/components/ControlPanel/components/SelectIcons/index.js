import React, { Component } from "react";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons : [
        {
          label: "Beer",
          source: require("../../../../../../svg/001-beer.svg")
        },
        {
          label: "Invitation",
          source: require("../../../../../../svg/002-invitation.svg")
        },
        {
          label: "balloons",
          source: require("../../../../../../svg/003-balloons.svg")
        },
        {
          label: "hat",
          source: require("../../../../../../svg/004-hat.svg")
        },
        {
          label: "avocado",
          source: require("../../../../../../svg/005-avocado.svg")
        },
        {
          label: "gift",
          source: require("../../../../../../svg/006-gift-box.svg")
        },
        {
          label: "fireworks",
          source: require("../../../../../../svg/007-fireworks.svg")
        },
      ],
      selectedIcon: {}
    }
  }

  change = event => {
    if(!event.target.value) return;

    this.setState({
      selectedIcon :this.state.icons[event.target.value]
    },()=> {
      this.props.handleSVG(this.state.selectedIcon);
    });
  };

  renderSelect = () =>
    <select onChange={this.change}>
      <option selected value="">none</option>
      {this.state.icons.map((icon, index)=>
        <option key={index} value={index}>{icon.label}</option>
      )}
    </select>;

  render(){
    return (<div className="select-svg">
      <label htmlFor="select">Select Icon :</label>
      {this.renderSelect()}
    </div>);
  }
}
