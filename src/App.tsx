import { ChakraProvider, theme } from "@chakra-ui/react";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Main } from "./Main";

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
export const analytics = getAnalytics(app);

export const db = getFirestore();

export const App = () => (
  <Router>
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Main />
      </ChakraProvider>
    </RecoilRoot>
  </Router>
);
