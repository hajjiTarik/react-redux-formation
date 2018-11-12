import React, {Component} from 'react';
import GradientColors from "./components/GradientColors";
import Shape from "./components/Shape";


export default class BackgroundTools extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="background-tools">
        <GradientColors
          getBackgroundColorHandler={this.props.getBackgroundColorHandler}/>
        <Shape
          getShapeMorphHandler={this.props.getShapeMorphHandler}
        />
      </div>
    );
  }
}
