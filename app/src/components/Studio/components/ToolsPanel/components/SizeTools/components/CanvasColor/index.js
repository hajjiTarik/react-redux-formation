import React, {Component} from 'react';
import {SketchPicker} from "react-color";
import ColorPicker from "../../../../../../../commons/ColorPicker";

export default class CanvasColor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="canvas-color">
        <span>color</span>
        <ColorPicker />
      </div>
    );
  }
}
