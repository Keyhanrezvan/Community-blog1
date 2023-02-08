import React from "react";
import {Route, Switch, Link, useRouteMatch} from "react-router-dom";
export const Header = () => (
  <div className="jumbotron jumbotron-fluid bg-warning">
    <div className="container">
      <h1 className="display-4">Community Blog</h1>
      <p className="lead">Check out the posts of our community members.</p>
    </div>
  </div>
);

export default Header;
