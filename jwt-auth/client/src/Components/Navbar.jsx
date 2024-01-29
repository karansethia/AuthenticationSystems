import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="w-[60%] flex justify-evenly">
          <NavLink
            to="/sigin"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Sigin
          </NavLink>
          <NavLink
            to="/dashboard"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Marketplace
          </NavLink>
          <NavLink
            to="/settings"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Company
          </NavLink>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
