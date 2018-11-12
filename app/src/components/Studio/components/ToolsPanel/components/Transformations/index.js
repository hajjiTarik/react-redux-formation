import React, {Component} from 'react';

export default class Transformations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotate: 0,
      width: 512
    }
  }

  inverseRotate = () => {
    this.setState({
      rotate: this.state.rotate - 15
    });
    this.props.transformationsHandler(this.state);
  };

  rotate = () => {
    this.setState({
      rotate: this.state.rotate + 15
    });
    this.props.transformationsHandler(this.state);
  };

  shrink = () => {
    this.setState({
      width: this.state.width - 5
    });
    this.props.transformationsHandler(this.state);
  };

  expand = () => {
    this.setState({
      width: this.state.width + 5
    });
    this.props.transformationsHandler(this.state);
  };

  render() {
    return (
      <div className="foreground-gradient">
        <button onClick={this.inverseRotate}>rotate -15°</button>
        <button onClick={this.rotate}>rotate +15°</button>
        <button onClick={this.shrink}>shrink</button>
        <button onClick={this.expand}>expand</button>
      </div>
    );
  }
}
