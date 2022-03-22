import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { AboutUs } from "./features/landing/about/AboutUs";
import { ContactUs } from "./features/landing/contact-us/ContactUs";
import { Error } from "./features/landing/error/Error";
import { Home } from "./features/landing/home/Home";
import { GetTax } from "./features/questions/GetTax";
import { Purchase } from "./features/service/Purchase";
import { useAnalytics } from "./hooks/useAnalytics";

export const Main = () => {
  useAnalytics();

  return (
    <Switch>
      <Route path="/about-us">
        <AboutUs />
      </Route>
      <Route path="/contact-us">
        <ContactUs />
      </Route>
      <Route path="/error">
        <Error />
      </Route>
      <Route path="/purchase">
        <Purchase />
      </Route>
      <Route path="/get-your-tax">
        <GetTax />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};
