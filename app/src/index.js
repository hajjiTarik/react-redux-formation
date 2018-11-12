import React, {Component} from 'react';
import Studio from './components/Studio';
import Canvas from './components/Canvas';

import './style.scss';

export default class App extends Component {
  state = {
    svg: null,
    backgroundColor: "#fff",
    shape: null,
    width: 512,
    rotate: 0,
    foregroundColor: "#fff"
  };

  getSelectedSvgHandler = svg => {
    this.setState({
      svg
    });
  };

  getGradientTypeHandler = value => {
    this.setState({
      gradientType: value
    })
  };

  getBackgroundColorHandler = backgroundColor => {
    this.setState({
      backgroundColor
    });
  };

  getShapeMorphHandler = shape => {
    this.setState({
      shape
    });
  };

  transformationsHandler= values => {
    this.setState({
      ...values
    })
  };

  getTextColorHandler = color => {
    this.setState({
      textColor: color
    });
  };

  getTextContentHandler = textContent => {
    this.setState({
      textContent
    });
  };

  getFontStyleHandler = fontStyle => {
    this.setState({
      fontStyle
    });
  };

  getFontSizeHandler = fontSize => {
    this.setState({
      fontSize
    });
  };

  render() {
    return (
      <div className="container">
        <Studio
          getSelectedSvgHandler={this.getSelectedSvgHandler}
          getBackgroundColorHandler={this.getBackgroundColorHandler}
          getShapeMorphHandler={this.getShapeMorphHandler}
          transformationsHandler={this.transformationsHandler}
          getTextColorHandler={this.getTextColorHandler}
          getTextContentHandler={this.getTextContentHandler}
          getFontStyleHandler={this.getFontStyleHandler}
          getFontSizeHandler={this.getFontSizeHandler}
        />
        <Canvas
          {...this.state}
        />
      </div>
    );
  }
}
