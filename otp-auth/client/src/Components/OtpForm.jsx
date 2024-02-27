import React from "react";
import {useState, useRef, useEffect} from "react";

const OtpForm = ({onOtpSubmit, mobile}) => {
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
    <div className="relative flex flex-col justify-center overflow-hidden  py-4">
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>OTP Verification</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>We have sent a code to your mobile {mobile}</p>
            </div>
          </div>

          <div>
            <form action="" method="post">
              <div className="flex flex-col space-y-16">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                  {otp.map((value, index) => {
                    return (
                      <div className="w-16 h-16 " key={index}>
                        <input
                          className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                          ref={(input) => {
                            inputRef.current[index] = input;
                          }}
                          type="text"
                          value={value}
                          onChange={(e) => otpDigitHandler(index, e)}
                          onKeyDown={(e) => keyDownHandler(index, e)}
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-col space-y-5">
                  <div>
                    <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-indigo-600 border-none text-white text-sm shadow-sm">
                      Verify Account
                    </button>
                  </div>

                  <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                    <p>Didn't recieve code?</p>{" "}
                    <a
                      className="flex flex-row items-center text-indigo-600"
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resend
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpForm;
