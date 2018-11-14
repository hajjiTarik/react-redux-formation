import React from "react";
import {connect} from "react-redux";

import "./style.scss";

const Preview = props => (
  <div className="preview-container" style={{
    backgroundColor: props.backgroundColor,
    backgroundImage: `linear-gradient(${props.fromColor}, ${props.toColor})`}}>
    <img style={{
      transform: `rotate(${props.rotate}deg)`
    }} src={props.svg.source} alt="error"/>
  </div>
);

Preview.defaultProps = {
  svg: {},
  fromColor: "transparent",
  toColor: "transparent",
  backgroundColor: "transparent",
  rotate: 0
};


const mapStateToProps = ({app}) => ({
  backgroundColor: app.transformationReducer.backgroundColor,
  rotate: app.transformationReducer.rotate,
  svg: app.svgReducer.svg,
  fromColor: app.transformationReducer.fromColor,
  toColor: app.transformationReducer.toColor
});

export default connect(mapStateToProps)(Preview);
