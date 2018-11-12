import React, {Component} from 'react';
import ToolsSelector from './components/ToolsSelector';
import ToolsPanel from './components/ToolsPanel';

import './style.scss';
import SvgSelector from "./components/SvgSelector";

export default class Studio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPanel: null,
      svg: null
    };
  }

  getSelectedValueHandler = (value) => {
    this.setState({
      selectedPanel: value
    });
  };

  render() {
    return (
      <div className="Studio">
        <SvgSelector getSelectedSvgHandler={this.props.getSelectedSvgHandler} />

        <ToolsSelector getSelectedValueHandler={this.getSelectedValueHandler}/>

        <ToolsPanel selected={this.state.selectedPanel}
                    getBackgroundColorHandler={this.props.getBackgroundColorHandler}
                    getShapeMorphHandler={this.props.getShapeMorphHandler}
                    transformationsHandler={this.props.transformationsHandler}
                    getTextColorHandler={this.props.getTextColorHandler}
                    getTextContentHandler={this.props.getTextContentHandler}
                    getFontStyleHandler={this.props.getFontStyleHandler}
                    getFontSizeHandler={this.props.getFontSizeHandler}
        />
      </div>
    );
  }
}
