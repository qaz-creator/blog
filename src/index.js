import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import Components
import Header from "./components/header";
import Welcome from "./components/welcome";
import Footer from "./components/footer";

ReactDOM.render(
  <Router>
    <div>
      <Header />
      <Welcome />
      <Footer />
    </div>
  </Router>,
  document.getElementById("root")
);
