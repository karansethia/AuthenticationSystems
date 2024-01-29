import React, {useState} from "react";
import OtpForm from "./OtpForm";

const Login = () => {
  const [mobile, setMobile] = useState();
  const [showOtpField, setShowOtpField] = useState(false);
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
        <form onSubmit={handlePhoneSubmit}>
          <input
            type="text"
            defaultValue={mobile}
            onChange={handlePhoneNumber}
            placeholder="Enter Mobile Number"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>OTP sent to {mobile} </p>
          <OtpForm onOtpSubmit={OtpHandler} />
        </div>
      )}
    </div>
  );
};

export default Login;
