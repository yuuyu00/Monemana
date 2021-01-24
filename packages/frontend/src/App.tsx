import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./utils/apolloClient";
import { Top } from "./containers";

export const App = () => (
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Top />
        </Route>
      </Switch>
    </BrowserRouter>
  </ApolloProvider>
);
