import React from "react";
import {useState, useRef, useEffect} from "react";

const OtpForm = ({onOtpSubmit}) => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const inputRef = useRef([]);

  // for putting focus on the first input
  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);

  const otpDigitHandler = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) {
      return;
    }
    const newOtp = [...otp];

    //getting the last value that the user entered
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    //since state update is an async function we will use the current value of the OTP which is "newOtp"
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === 4) {
      onOtpSubmit(combinedOtp);

      //move to next input
    }
    if (value && index < 3 && inputRef.current[index + 1]) {
      inputRef.current[index + 1].focus();
    }
  };
  const keyDownHandler = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRef.current[index - 1]
    ) {
      inputRef.current[index - 1].focus();
    }
  };
  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            ref={(input) => {
              inputRef.current[index] = input;
            }}
            key={index}
            type="text"
            value={value}
            onChange={(e) => otpDigitHandler(index, e)}
            onKeyDown={(e) => keyDownHandler(index, e)}
          />
        );
      })}
    </div>
  );
};

export default OtpForm;
