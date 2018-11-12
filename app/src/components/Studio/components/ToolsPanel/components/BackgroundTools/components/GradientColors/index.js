import React, {Component} from 'react';
import Gradient from "../../../../../../../commons/Gradient";
import ColorPicker from "../../../../../../../commons/ColorPicker";

export default class GradientColors extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="gradient-block">
        <h3>Background Color :</h3>
        <ColorPicker getBackgroundColorHandler={this.props.getBackgroundColorHandler} />
      </div>
    );
  }
}
