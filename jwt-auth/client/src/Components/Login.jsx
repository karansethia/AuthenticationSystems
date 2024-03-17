import React, {useContext} from "react";
import {AuthContext} from "../context/AuthContextProvider";
import {Link} from "react-router-dom";
import {useAxios} from "../hooks/use-axios";

const Login = () => {
  const ctx = useContext(AuthContext);
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const details = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const {data, status} = await useAxios("AUTH", "/login", details);
    console.log(data, status);
    if (status === 201) {
      console.log(data.email, data.accessToken);
      ctx.onLogin(data.email, data.accessToken);
    }
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-3 py-12 lg:px-8">
      <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-5" onSubmit={submitHandler}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="input-text"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                className="input-text"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Log in
            </button>
          </div>
        </form>
        <p className="mt-5 text-center text-sm text-gray-500">
          Not registered?{" "}
          <Link
            to={{pathname: "/signin", search: "?type=register"}}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
