import React from "react";

const Login = ({mobile, onPhoneChange, onPhoneSubmit}) => {
  // return (
  //   <form onSubmit={onPhoneSubmit}>
  //     <input
  //       type="text"
  //       defaultValue={mobile}
  //       onChange={onPhoneChange}
  //       placeholder="Enter Mobile Number"
  //     />
  //     <button type="submit">Submit</button>
  //   </form>
  // );
  return (
    <div className="flex flex-col mt-6 justify-center px-3 py-12 lg:px-8 border-2 w-2/5 shadow-lg rounded-xl m-auto bg-white">
      <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-5" onSubmit={onPhoneSubmit}>
          <div>
            <label
              for="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                className="input-text"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                for="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
            </div>
            <div className="mt-2">
              <input
                id="phone"
                name="phone"
                type="number"
                defaultValue={mobile}
                onChange={onPhoneChange}
                required
                className="input-text"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 mt-8 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
