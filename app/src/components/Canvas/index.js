import React, {Component} from 'react';
import './style.scss';

export default class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shape: {
        Circle: {
          borderRadius: "50%"
        },
        SquareAlt: {
          transform: "rotate(45deg)"
        }
      }
    };
  }

  renderSVG() {
    if (!this.props.svg) return;

    return (
      <img style={{
        transform: "rotate(" + this.props.rotate + "deg)",
        width: this.props.width,
        fill: this.props.foregroundColor
      }} src={this.props.svg.source}/>
    )
  }

  renderText() {
    console.log("totot", this.props.fontStyle);
    if (!this.props.textContent) return null;
    return (
      <p style={{
        fontStyle: this.props.fontStyle,
        fontWeight: this.props.fontStyle,
        color: this.props.textColor,
        fontSize: this.props.fontSize+"px"
      }}>
        {this.props.textContent}
      </p>
    );
  }

  render() {
    return (
      <div className="canvas">
        <div className="scene" style={{
          background: this.props.backgroundColor,
          ...this.state.shape[this.props.shape],
        }}>
        </div>
        {this.renderSVG()}
        {this.renderText()}
      </div>
    );
  }
}
