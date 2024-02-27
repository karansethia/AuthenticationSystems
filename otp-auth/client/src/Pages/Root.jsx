import {Outlet} from "react-router-dom";
import React from "react";
import Navbar from "../Components/Navbar";

const Root = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
};

export default Root;
