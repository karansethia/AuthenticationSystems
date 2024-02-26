import React from "react";
import {NavLink, Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 z-50 relative"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <Link to=".." className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </Link>
      </div>
      <div className="w-[60%] flex justify-evenly">
        <NavLink
          to="/signin?type=register"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Sign in
        </NavLink>
        <NavLink
          to="/account"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Account
        </NavLink>
        <NavLink
          to="/settings"
          className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
        >
          Settings
        </NavLink>
      </div>

      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <NavLink
          to="/signin?type=login"
          className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
        >
          Log in <span aria-hidden="true">&rarr;</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
