import React, { Component } from "react";
import {connect} from "react-redux";
import ColorPicker from "../../../../ColorPicker";
import {setBackgroundColor} from "../../../../../../../redux/actions";

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
      return <div>
        <span>From</span><ColorPicker handleColor={this.props.handleBackgroundColorFrom}/>
        <span>To</span><ColorPicker handleColor={this.props.handleBackgroundColorTo}/>
      </div>
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
      <div className="gradient-container">
        <select onChange={this.change}>
          <option value="plain">plain</option>
          <option value="radial">radial</option>
        </select>
        {this.renderGradient()}
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  setBackgroundColor : (color) => {
    dispatch(setBackgroundColor(color));
  }
});

export default connect(null, mapDispatchToProps)(Gradient);

