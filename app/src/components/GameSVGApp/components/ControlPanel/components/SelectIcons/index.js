import React, { Component } from "react";
import { connect } from "react-redux";
import {setSelectedSVG} from "./redux/actions";

class SvgSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons : [
        {
          label: "Speaker",
          source: "https://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg"
        },
        {
          label: "Rocket",
          source: "http://simpleicon.com/wp-content/uploads/rocket.svg"
        },
        {
          label: "Map",
          source: "http://simpleicon.com/wp-content/uploads/map-7.svg"
        },
        {
          label: "Key",
          source: "http://www.iconninja.com/files/314/108/916/key-icon.svg"
        }
      ]
    }
  }

  change = event => {
    this.props.setSelectedSVG(this.state.icons[event.target.value]);
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

const mapDispatchToProps = dispatch => ({
  setSelectedSVG: svg => {
    dispatch(setSelectedSVG(svg));
  }
});

export default connect(null,mapDispatchToProps)(SvgSelect);
