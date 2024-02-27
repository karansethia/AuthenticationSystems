import React, {useState} from "react";
import Login from "../Components/Login";
import OtpForm from "../Components/OtpForm";

const SignIn = () => {
  const [showOtpField, setShowOtpField] = useState(false);
  const [mobile, setMobile] = useState();

  const handlePhoneNumber = (e) => {
    setMobile(e.target.value);
  };
  const regex = /[^0-9]/g;
  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (mobile.length < 10 || mobile.length > 10 || regex.test(mobile)) {
      alert("Invalid mobile number");
      return;
    }
    // req to api
    setShowOtpField(true);
  };

  const OtpHandler = (otp) => {
    console.log(otp);
  };
  return (
    <div>
      {!showOtpField ? (
        <Login
          mobile={mobile}
          onPhoneChange={handlePhoneNumber}
          onPhoneSubmit={handlePhoneSubmit}
        />
      ) : (
        <div>
          <OtpForm onOtpSubmit={OtpHandler} mobile={mobile} />
        </div>
      )}
    </div>
  );
};

export default SignIn;
