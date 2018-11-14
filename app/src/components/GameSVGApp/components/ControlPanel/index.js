import React, {Component, Fragment} from "react";
import {connect} from "react-redux";

import SelectIcons from "./components/SelectIcons";
import StudioSelect from "./components/StudioSelect";
import BackgroundPanel from "./components/Panels/BackgroundPanel";
import ForegroundPanel from "./components/Panels/ForegroundPanel";

import "./style.scss";

class ControlPanel extends Component {
  renderPanels() {
    if (!this.props.currentPanel) return null;
    return this.props.currentPanel === "Background" ? <BackgroundPanel/> : <ForegroundPanel/>;
  }

  render() {
    return (
      <div className="control-panel">
        <div className="control-panel-content">
          <SelectIcons/>
          <StudioSelect/>
        </div>
        <div className="panel">
          {this.renderPanels()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  currentPanel: app.panelReducer.currentPanel
});

export default connect(mapStateToProps)(ControlPanel);
