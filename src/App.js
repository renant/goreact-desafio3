import React, { Fragment } from "react";

import Routes from "./routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <Fragment>
    <Routes />
    <ToastContainer autoClose={5000} />
  </Fragment>
);

export default App;
