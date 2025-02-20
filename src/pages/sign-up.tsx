// import ButtonComponent from "@/components/button";
// import InputComponent from "@/components/input";
// import SignInGoogle from "@/components/sign-in-google";
// import { useState } from "react";
// import { motion } from "motion/react";
// import ButtonBack from "@/components/button-back";
// import { signUpInput, signUpSchema } from "../schema/auth.schema";
// import { useMutation } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";
// import { useToast } from "@/hooks/use-toast";
// import { IApiError } from "../interface/api-error.interface";
// const SignUp = () => {
//   const navigate = useNavigate();
//   const { toast } = useToast();
//   const [step, setStep] = useState(1);
//   const [signUp, setSignUp] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [error, setError] = useState<Partial<signUpInput>>();
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const result = signUpSchema.safeParse({
//       data: signUp,
//     });
//     if (!result.success) {
//       const error = result.error.format();
//       setError({
//         email: error.data?.email?._errors[0],
//         password: error.data?.password?._errors[0],
//         confirmPassword: error.data?.confirmPassword?._errors[0],
//       });
//       return;
//     }
//     signUpAPI.mutate();
//   };
//   const signUpAPI = useMutation({
//     mutationKey: ["sign-up"],
//     mutationFn: () =>
//       signUp({
//         email: signUp.email,
//         password: signUp.password,
//       }),
//     onSuccess: () => {
//       toast({
//         title: "Sign up successful",
//         description: "Your account has been created.",
//         duration: 2000,
//       });
//       navigate("/verify-email");
//     },
//     onError: (error: IApiError) => {
//       toast({
//         title: "Sign up failed",
//         description: error.data.message,
//         variant: "destructive",
//       });
//     },
//   });
//   const handleNextStep = () => {
//     const result = signUpSchema.safeParse({
//       data: signUp.email.trim(),
//     });
//     console.log(result);
//     if (!result.success) {
//       const error = result.error.format();
//       setError({
//         email: error.data?.email?._errors[0],
//       });
//       return;
//     }
//     setStep((step) => step + 1);
//   };
//   const handleBackStep = () => {
//     setStep((step) => step - 1);
//   };
//   return (
//     <>
//       <div className="flex flex-col items-center justify-center h-screen ">
//         {step === 1 && (
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.4, delay: 0.5 }}
//             className="border-[1px] w-[400px] p-[30px] rounded-[16px] shadow-md"
//           >
//             <div className="space-y-4">
//               <div className="text-center space-y-2">
//                 <p className="font-medium text-3xl font-sans">Sign Up</p>
//                 <p className="text-gray-400 text-[15px] font-sans">
//                   Welcome to Furniture - Let's create an account{" "}
//                 </p>
//               </div>
//               <InputComponent
//                 label="Email"
//                 placeholder="Email"
//                 type="text"
//                 value={signUp.email}
//                 onChange={(e) =>
//                   setSignUp({ ...signUp, email: e.target.value })
//                 }
//                 error={error?.email}
//               />
//               <div className="space-y-4">
//                 <ButtonComponent name="Confirm" onClick={handleNextStep} />
//                 <SignInGoogle />
//               </div>
//             </div>
//           </motion.div>
//         )}
//         {step === 2 && (
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.4, delay: 0.5 }}
//             className="border-[1px] w-[400px] p-[30px] rounded-[16px] shadow-md"
//           >
//             <div className="space-y-4">
//               <div className="text-center space-y-2">
//                 <p className="absolute">
//                   <ButtonBack onBack={handleBackStep} />
//                 </p>
//                 <p className="font-medium text-3xl font-sans">Sign Up</p>
//                 <p className="text-gray-400 text-[15px] font-sans">
//                   Welcome to Furniture - Let's create an account{" "}
//                 </p>
//               </div>
//               <InputComponent
//                 label="Password"
//                 placeholder="Password"
//                 type="text"
//                 value={signUp.password}
//                 onChange={(e) =>
//                   setSignUp({ ...signUp, password: e.target.value })
//                 }
//                 error={error?.password}
//               />
//               <InputComponent
//                 label="Confirm password"
//                 placeholder="Confirm password"
//                 type="text"
//                 value={signUp.confirmPassword}
//                 onChange={(e) =>
//                   setSignUp({ ...signUp, confirmPassword: e.target.value })
//                 }
//                 error={error?.confirmPassword}
//               />
//               <ButtonComponent
//                 name="Submit"
//                 onClick={() => handleSubmit}
//                 isLoading={signUpAPI.isPending}
//               />
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </>
//   );
// };

// export default SignUp;
import { signUpAPI } from "@/api/auth.api";
import ButtonComponent from "@/components/button";
import InputComponent from "@/components/input";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [signUp, setSignUp] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  console.log(signUp);
  const mutation = useMutation({
    mutationKey: ["sign-up"],
    mutationFn: () => signUpAPI(signUp),
    onSuccess: () => {
      navigate("/");
    },
  });
  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 border border-gray-700 p-8"
    >
      <div className="inline-flex items-center gap-2 mb-2">
        <p className="prata-regular text-3xl">Sign Up</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      <InputComponent
        placeholder="FullName"
        type="text"
        value={signUp.fullName}
        onChange={(text) =>
          setSignUp({ ...signUp, fullName: text.target.value })
        }
      />
      <InputComponent
        placeholder="Email"
        type="text"
        value={signUp.email}
        onChange={(text) => setSignUp({ ...signUp, email: text.target.value })}
      />
      <InputComponent
        placeholder="Password"
        type="password"
        value={signUp.password}
        onChange={(password) =>
          setSignUp({ ...signUp, password: password.target.value })
        }
      />
      <ButtonComponent name="Sign Up" isLoading={mutation.isPending} />
      <p className="gap-x-2">
        Do you have account?{" "}
        <Link to="/login" className="text-blue-500 underline">
          Login
        </Link>
      </p>
    </form>
  );
};

export default SignUp;
