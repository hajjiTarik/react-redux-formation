import React, {Component} from 'react';

export default class TextContent extends Component {

  change = event => {
    this.props.getTextContentHandler(event.target.value);
  };

  render() {
    return (
      <div className="text-content">
        <h3>Content</h3>
        <textarea onChange={this.change}></textarea>
      </div>
    );
  }
}
