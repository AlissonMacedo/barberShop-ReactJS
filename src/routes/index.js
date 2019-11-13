import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import signIn from "../pages/signIn";
import signUp from "../pages/signUp";
import Dashboard from "../pages/Dashboard";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={signIn} />
      <Route path="/signUp" exact component={signUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
