import React, {useContext} from "react";
import {AuthContext} from "../context/AuthContextProvider";
import {useAxios} from "../hooks/use-axios";
import {useUpdateUser} from "../hooks/use-axios";
const InfoForm = () => {
  const ctx = useContext(AuthContext);
  const {updateUser} = useUpdateUser();
  const formHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const details = {
      position: formData.get("position"),
      profileDescription: formData.get("profileDescription"),
    };
    console.log();
    updateUser(details);
  };
  return (
    <div className="w-full p-10 relative">
      <div
        className="absolute inset-x-10  -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/3 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <form
        className="space-y-12 w-3/5 m-auto shadow-lg rounded-xl border-2 bg-white px-16 py-10 "
        onSubmit={formHandler}
      >
        <div className="border-b border-gray-900/10 pb-6">
          <h2 className="font-semibold text-3xl leading-10 text-gray-900">
            Applicant form
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <div className="flex bg-gray-200 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="email"
                    name="email"
                    placeholder={ctx.email}
                    disabled
                    className="block  flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="position"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Position
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="position"
                    id="position"
                    autoComplete="position"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="profileDescription"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Profile Description
              </label>
              <div className="mt-2">
                <textarea
                  id="profileDescription"
                  name="profileDescription"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
              <p className="mt-1 text-xs leading-6 text-gray-600">
                Tell me something about yourself.
              </p>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default InfoForm;
