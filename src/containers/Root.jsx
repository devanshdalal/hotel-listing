import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Layout from "./layouts/Layout";
import Home from "./Home";

export default props => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />

        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};
