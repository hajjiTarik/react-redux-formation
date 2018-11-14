import React, { Component } from "react";
import { connect } from "react-redux";
import Gradient from "./components/Gradient";
import { setBackgroundColor } from "../../../../../redux/actions"

class BackgroundPanel extends Component {

  render (){
    return (
      <div className="background-panel">
        <h4>Background</h4>
        <div>
          <Gradient
            handleBackgroundColor={this.props.setBackgroundColor}
            handleBackgroundColorFrom={this.props.handleBackgroundColorFrom}
            handleBackgroundColorTo={this.props.handleBackgroundColorTo}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setBackgroundColor : (color) => {
    dispatch(setBackgroundColor(color));
  }
});

export default connect(null, mapDispatchToProps)(BackgroundPanel);
