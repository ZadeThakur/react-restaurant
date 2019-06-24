import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import PlaceOrder from "./components/PlaceOrder";
import AboutUs from "./components/AboutUs";

export default () =>(
  <Router basename={process.env.PUBLIC_URL}>
    <Route path = "/" exact component={Homepage} />
    <Route path = "/placeOrder" exact component={PlaceOrder} />
    <Route path = "/aboutUs" exact component={AboutUs} />
  </Router>
);
