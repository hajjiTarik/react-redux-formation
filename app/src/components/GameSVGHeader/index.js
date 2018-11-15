import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from 'react-router';
import App from "../GameSVGApp";
import About from "../About";
import Faq from "../FAQ";

export default () => (
    <Router>
      <div>
        <ul style={{listStyle: "none"}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
          <Route path="/faq" component={Faq} />
        </Switch>

      </div>
    </Router>
);
