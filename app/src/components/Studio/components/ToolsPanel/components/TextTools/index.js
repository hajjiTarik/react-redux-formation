import React, {Component} from 'react';
import TextContent from "./components/TextContent";
import FontStyle from "./components/FontStyle";
import ColorPicker from "../../../../../commons/ColorPicker";

export default class TextTools extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="foreground-tools">
                <ColorPicker getBackgroundColorHandler={this.props.getTextColorHandler} />
                <TextContent getTextContentHandler={this.props.getTextContentHandler} />
                <FontStyle
                  getFontStyleHandler={this.props.getFontStyleHandler}
                  getFontSizeHandler={this.props.getFontSizeHandler}
                />
            </div>
        );
    }
}
