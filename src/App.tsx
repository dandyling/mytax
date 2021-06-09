import { ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Home } from "./Home";

export const App = () => (
  <Router>
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ChakraProvider>
    </RecoilRoot>
  </Router>
);
