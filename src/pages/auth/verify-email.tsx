import ButtonComponent from "@/components/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";
const VerifyEmail = () => {
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 border border-gray-700 p-8">
      <div className="flex flex-col items-center justify-center h-40 space-y-2">
        <div className="inline-flex items-center gap-2 mb-2">
          <p className="prata-regular text-3xl">Verify OTP</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>
        <InputOTP
          maxLength={6}
          value={value}
          onChange={(value) => setValue(value)}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <div className="text-center text-sm">
          {value === "" ? (
            <>Enter your one-time password.</>
          ) : (
            <>You entered: {value}</>
          )}
        </div>
        <ButtonComponent name="Resend" />
      </div>
    </div>
  );
};

export default VerifyEmail;
