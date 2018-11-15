import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "./redux/store";
import App from './src';
import {BrowserRouter} from 'react-router-dom'

const ConnectedApp = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<ConnectedApp/>, document.getElementById('app'));
