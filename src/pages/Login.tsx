import ButtonComponent from "@/components/button";
import InputComponent from "@/components/input";
import { useState } from "react";

const Login = () => {
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <form
        action=""
        className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 border border-gray-700 p-8"
      >
        <div className="inline-flex items-center gap-2 mb-2">
          <p className="prata-regular text-3xl">Log in</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>
        <InputComponent
          placeholder="Email"
          type="text"
          value={signIn.email}
          onChange={(text) =>
            setSignIn({ ...signIn, email: text.target.value })
          }
        />
        <InputComponent
          placeholder="Password"
          type="password"
          value={signIn.password}
          onChange={(password) =>
            setSignIn({ ...signIn, password: password.target.value })
          }
        />
        <div className="w-full flex justify-between text-sm">
          <p className=" cursor-pointer underline">Forgot your password?</p>
          <p className=" cursor-pointer">Sign Up</p>
        </div>
        <ButtonComponent name="Log In" />
      </form>
    </>
  );
};

export default Login;
