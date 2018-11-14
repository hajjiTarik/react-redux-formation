import React, { Component } from "react";
import RotateNegative from "./"

export default class ForegroundPanel extends Component {

  render (){
    return <div>
      <h3>ForegroundPanel</h3>

      <RotateNegative negativeDegreHandler={this.props.handleRotate} />
      <RotatePositive positiveDegreHandler={this.props.handleRotate} />
    </div>
  }
}
