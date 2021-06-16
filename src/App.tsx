import { ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { AboutUs } from "./features/landing/about/AboutUs";
import { Home } from "./features/landing/home/Home";
import { GetTax } from "./features/questions/GetTax";

export const App = () => (
  <Router>
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Switch>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/get-your-tax">
            <GetTax />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ChakraProvider>
    </RecoilRoot>
  </Router>
);
