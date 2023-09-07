import React from "react";
import { Route, Switch } from "react-router";

export default (
  <Switch>
    <Route path={"/"} />
    <Route path={"/intro"} />
    <Route path={"/news"} />
    <Route path={"/songs"} />
  </Switch>
);
