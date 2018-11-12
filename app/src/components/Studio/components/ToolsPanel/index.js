import React, {Component} from 'react';
import './style.scss';
import SizeTools from './components/SizeTools';
import TextTools from './components/TextTools';
import BackgroundTools from './components/BackgroundTools';
import Transformations from "./components/Transformations";

export default class ToolsPanel extends Component {
  constructor(props) {
    super(props);
  }

  renderTools() {
    switch (this.props.selected) {
      case 'Background' :
        return <BackgroundTools
          getBackgroundColorHandler={this.props.getBackgroundColorHandler}
          getShapeMorphHandler={this.props.getShapeMorphHandler}
        />;
      case 'Transformations' :
        return <Transformations
          transformationsHandler={this.props.transformationsHandler}
        />;
      case 'Text' :
        return <TextTools
          getTextColorHandler={this.props.getTextColorHandler}
          getTextContentHandler={this.props.getTextContentHandler}
          getFontStyleHandler={this.props.getFontStyleHandler}
          getFontSizeHandler={this.props.getFontSizeHandler}
        />;
      case 'Size & preset' :
        return <SizeTools/>;
      default :
        return null;
    }
  }

  render() {
    return (
      <div className="tools-panel">
        {this.renderTools()}
      </div>
    );
  }
}
