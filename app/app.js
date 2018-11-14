import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./redux/store";
import App from './src';

const ConnectedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<ConnectedApp />, document.getElementById('app'));
