import React from "react";

const Input = ({type, id, label, el}) => {
  return (
    <div className="sm:col-span-full">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        {el === "textarea" ? (
          <textarea
            id="about"
            name="about"
            rows={3}
            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={""}
          />
        ) : (
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input
              type={type}
              name={id}
              id={id}
              autoComplete={id}
              className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus:rounded-md"
            />
          </div>
        )}
      </div>
      {el === "textarea" && (
        <p className="mt-1 text-xs leading-6 text-gray-600">
          Tell me something about yourself.
        </p>
      )}
    </div>
  );
};

export default Input;
