import { ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { AboutUs } from "./features/landing/about/AboutUs";
import { Error } from "./features/landing/error/Error";
import { ContactUs } from "./features/landing/contact-us/ContactUs";
import { Home } from "./features/landing/home/Home";
import { GetTax } from "./features/questions/GetTax";
import { Purchase } from "./features/service/Purchase";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZd_ZqixAenVkpx0cyV7AMVY34IacXhg4",
  authDomain: "my-tax-1.firebaseapp.com",
  projectId: "my-tax-1",
  storageBucket: "my-tax-1.appspot.com",
  messagingSenderId: "743050312066",
  appId: "1:743050312066:web:23e68204408f7e97de779b",
  measurementId: "G-2SDEG2C81T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();

export const App = () => (
  <Router>
    <RecoilRoot>
      <ChakraProvider theme={theme}>
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
      </ChakraProvider>
    </RecoilRoot>
  </Router>
);
