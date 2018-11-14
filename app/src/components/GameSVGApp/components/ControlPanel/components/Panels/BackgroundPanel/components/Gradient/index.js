import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import ColorPicker from "../../../../../../Commons/ColorPicker/index";
import {
  setBackgroundColor,
  setBackgroundFrom,
  setBackgroundTo,
} from "../../../redux/actions/index";

class Gradient extends Component {

  constructor(props){
    super(props);
    this.state = {
      gradientType: "plain"
    }
  }

  renderGradient = () =>{
    if(this.state.gradientType === "plain") {
      return <ColorPicker handleColor={this.props.setBackgroundColor}/>;
    }else {
      return <Fragment>
        <span>From</span><ColorPicker handleColor={this.props.setBackgroundFrom}/>
        <span>To</span><ColorPicker handleColor={this.props.setBackgroundTo}/>
      </Fragment>
    }
  };

  change = ({target}) => {
    const { value } = target;
    this.setState({
      gradientType: value
    })
  };

  render(){
    return (
      <Fragment>
        <select onChange={this.change}>
          <option value="plain">plain</option>
          <option value="radial">radial</option>
        </select>
        {this.renderGradient()}
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setBackgroundColor : (color) => {
    dispatch(setBackgroundColor(color));
  },
  setBackgroundFrom : (color) => {
    dispatch(setBackgroundFrom(color));
  },
  setBackgroundTo : (color) => {
    dispatch(setBackgroundTo(color));
  }
});

export default connect(null, mapDispatchToProps)(Gradient);

