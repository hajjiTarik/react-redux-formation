import React from 'react';

export default props => (
  <div className="font-style">
    <input step={10} type="number" onClick={(event) => {
      props.getFontSizeHandler(event.target.value)
    }}/>
    <button onClick={() => {
      props.getFontStyleHandler("italic")
    }}>italic
    </button>
    <button onClick={() => {
      props.getFontStyleHandler("bold")
    }}>bold
    </button>
  </div>
);
