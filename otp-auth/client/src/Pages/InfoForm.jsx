import React from "react";
import Background from "../Components/UI/Background";
import Input from "../Components/UI/Input";

const InfoForm = () => {
  return (
    <div className="w-full p-10 relative">
      <Background />
      <form className="space-y-12 w-3/5 m-auto shadow-lg rounded-xl border-2 bg-white px-16 py-10 ">
        <div className="border-b border-gray-900/10 pb-6">
          <h2 className="font-semibold text-3xl leading-10 text-gray-900">
            Applicant form
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <Input type="email" id="email" label="Email" />
            <Input type="text" id="position" label="Position" />
            <Input
              type="text"
              id="about"
              label="Profile Description"
              el="textarea"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default InfoForm;
