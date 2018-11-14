import React, {Component} from "react";
import {connect} from "react-redux";
import {setCurrentPanel} from "./redux/actions";

class StudioSelect extends Component {
  change = ({target}) => {
    this.props.setCurrentPanel(target.value);
  };

  render() {
    return (
      <div className="studio-select">
        <label>Studio</label>

        <select onChange={this.change}>
          <option>none</option>
          <option value="Background">Background</option>
          <option value="Foreground">Foreground</option>
        </select>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentPanel: svg => {
    dispatch(setCurrentPanel(svg));
  }
});

export default connect(null, mapDispatchToProps)(StudioSelect);
