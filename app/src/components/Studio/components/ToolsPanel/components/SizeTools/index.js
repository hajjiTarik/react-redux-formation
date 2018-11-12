import React, {Component} from 'react';
import Dimentions from "./components/Dimentions";
import CanvasColor from "./components/CanvasColor";

export default class SizeTools extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="foreground-tools">
        <Dimentions/>
        <CanvasColor/>
      </div>
    );
  }
}
