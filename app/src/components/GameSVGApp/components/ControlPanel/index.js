import React, { Component } from "react";
import SelectIcons from "./components/SelectIcons";
import StudioSelect from "./components/StudioSelect";
import BackgroundPanel from "./components/Panels/BackgroundPanel";
import ForegroundPanel from "./components/Panels/ForegroundPanel";
import TextPanel from "./components/Panels/TextPanel";
import SizePanel from "./components/Panels/SizePanel";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPanel: null
    }
  }

  renderPanels () {
    if(!this.state.currentPanel) return;

    switch (this.state.currentPanel) {
      case "Background":
        return <BackgroundPanel
          handleBackgroundColor={this.props.handleBackgroundColor}
          handleBackgroundColorFrom={this.props.handleBackgroundColorFrom}
          handleBackgroundColorTo={this.props.handleBackgroundColorTo}
        />;
      case "Foreground":
        return <ForegroundPanel/>;
      case "Text":
        return <TextPanel/>;
      case "Size":
        return <SizePanel/>;
      default:
        return null
    }
  }

  handleCurrentPanel = (currentPanel) =>{
    this.setState({
      currentPanel
    });
  }

  render(){
    return (
      <div className="control-panel">
        <SelectIcons handleSVG={this.props.handleSVG} />
        <StudioSelect handleCurrentPanel={this.handleCurrentPanel} />
        {this.renderPanels()}
      </div>
    );
  }
}
