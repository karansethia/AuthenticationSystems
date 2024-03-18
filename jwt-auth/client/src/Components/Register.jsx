import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "sonner";
import {useAuth} from "../hooks/use-axios";

const Register = () => {
  const navigate = useNavigate();
  const registerHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const details = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const response = await useAuth("/register", details);
    console.log(response);
    if (response.status === 201) {
      toast.success("Registered successfully");
      navigate("/signin?type=login");
    }
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-3 py-12 lg:px-8">
      <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Create a new Account
      </h2>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-5" onSubmit={registerHandler}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                required
                className="input-text"
              />
            </div>
          </div>
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
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-5 text-center text-sm text-gray-500">
          Already have an Account?{" "}
          <Link
            to={{pathname: "/signin", search: "?type=login"}}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
