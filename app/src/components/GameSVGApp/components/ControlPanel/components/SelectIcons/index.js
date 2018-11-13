import React, { Component } from "react";
import instance from "../../../../../../API/instance";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons : [],
      selectedIcon: {}
    }
  }

  componentDidMount () {
    instance.get("5beb04a12f00002435da3d96").then(({data}) => {
      const derivedData = data.map(async icon => {
        return {
          ...icon,
          source: icon.source
        }
      });

      console.log(derivedData);

      this.setState(()=>({
        icons: derivedData
      }));
    });
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
