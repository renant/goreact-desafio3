import React, { Fragment } from "react";

import Map from "../../components/Map";
import ModalAddUser from "../../components/ModalAddUser";
import LeftBar from "../../components/LeftBar";

const Main = () => (
  <Fragment>
    <Map />
    <ModalAddUser />
    <LeftBar />
  </Fragment>
);

export default Main;
