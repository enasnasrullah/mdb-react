import React from "react";
import { Router, Switch, Redirect, Route } from "react-router-dom";

import history from "./History";
import Home from "../pages/Home";
import Details from "../pages/viewDetails";
import { ROUTE_PATHS } from "./RoutesPaths";

const Routes = (
  <Router history={history}>
    <Switch>
      <Route path={ROUTE_PATHS.viewDetails} component={Details} />
      <Route path={ROUTE_PATHS.home} component={Home} />
      <Redirect from="**" to={ROUTE_PATHS.home} />
    </Switch>
  </Router>
);

export default Routes;
