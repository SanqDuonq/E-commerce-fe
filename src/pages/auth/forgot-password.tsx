import { assets } from "@/assets/assets";
import ButtonComponent from "@/components/button";
import InputComponent from "@/components/input";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  return (
    <div className=" w-50 sm:grid grid-cols-[1fr_1fr]">
      {/* left reset password */}
      <div className="flex flex-col justify-center items-center py-3 px-4 mt-5 border m-1">
        <div className="max-w-sm w-full">
          <h2 className="text-2xl font-semibold">Forgot password?</h2>
          <p className="text-gray-500 text-sm mb-4">
            No worries, we'll send you reset instructions.
          </p>
          <InputComponent
            type="text"
            placeholder="Enter your email"
            value=""
            onChange={() => {}}
          />
          <div className="mb-4">
            <ButtonComponent name="Reset password" isLoading={false} />
          </div>
          <div className="flex flex-row justify-center items-center">
            <img className=" w-5 " src={assets.dropdown_icon} alt="" />
            <Link to="/" className="">
              Back to log in
            </Link>
          </div>
        </div>
      </div>
      {/* right reset password */}
      <div className="items-center w-2/4">
        <img src={assets.forgot_password} alt="" />
      </div>
    </div>
  );
};

export default ForgotPassword;
