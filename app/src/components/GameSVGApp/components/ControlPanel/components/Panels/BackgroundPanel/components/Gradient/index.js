import React, { Component } from "react";
import ColorPicker from "../../../../ColorPicker";

export default class extends Component {
  constructor(props){
    super(props);
    this.state = {
      gradientType: "plain"
    }
  }

  renderGradient = () =>{
    if(this.state.gradientType === "plain") {
      return <ColorPicker handleColor={this.props.handleBackgroundColor}/>;
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
