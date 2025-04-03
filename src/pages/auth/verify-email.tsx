import ButtonComponent from "@/components/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { verifyEmailAPI } from "@/api/auth.api";
import { useToast } from "@/hooks/use-toast";
const VerifyEmail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [verify, setVerify] = useState({
    email: location.state?.email,
    otp: "",
  });
  console.log(verify);
  const mutation = useMutation({
    mutationKey: ["verify-email"],
    mutationFn: () => verifyEmailAPI({ email: verify.email, otp: verify.otp }),
    onSuccess: () => {
      toast({
        title: "Verify Email Success",
        description: `Hi ${verify.email}, your email has been verified.`,
      });
      navigate("/");
    },
  });
  return (
    <div className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 border border-gray-700 p-8">
      <div className="flex flex-col items-center justify-center h-40 space-y-2">
        <div className="inline-flex items-center gap-2 mb-2">
          <p className="prata-regular text-3xl">Verify OTP</p>

          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>
        <p>{verify.email}</p>
        <InputOTP
          maxLength={6}
          value={verify.otp}
          onChange={(value) => setVerify({ ...verify, otp: value })}
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
          {verify.otp === "" ? (
            <>Enter your one-time password.</>
          ) : (
            <>You entered: {verify.otp}</>
          )}
        </div>
        <ButtonComponent
          name="Submit"
          isLoading={mutation.isPending}
          onClick={() => mutation.mutate()}
        />
      </div>
    </div>
  );
};

export default VerifyEmail;
