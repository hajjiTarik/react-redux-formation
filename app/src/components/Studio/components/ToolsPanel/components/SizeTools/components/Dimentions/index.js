import React, {Component} from 'react';

export default class Dimentions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dimentions-tools">
        <input type="text"/><span>px</span>
      </div>
    );
  }
}
