import React, {Component} from "react";
import {connect} from "react-redux";
import {
  setRotate
} from "../redux/actions/index";

class ForegroundPanel extends Component {

  rotate = (sense, value) => {
    console.log(this.props.rotateCurrentValue, value, sense);
    this.props.setRotate(this.props.rotateCurrentValue + value * sense);
  };

  render() {
    return <div>
      <h3>Foreground Panel</h3>
      <button onClick={() => {
        this.rotate(1, 15)
      }}>
        Rotate +15
      </button>
      <button onClick={() => {
        this.rotate(-1, 15)
      }}>
        Rotate -15
      </button>
    </div>
  }
}


const mapDispatchToProps = dispatch => ({
  setRotate: (deg) => {
    dispatch(setRotate(deg));
  }
});

const mapStateToProps = (state) => ({
  rotateCurrentValue: state.app.transformationReducer.rotate
});

export default connect(mapStateToProps, mapDispatchToProps)(ForegroundPanel);
