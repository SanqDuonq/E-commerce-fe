// import { useState } from "react";
// import {
//   InputOTP,
//   InputOTPGroup,
//   InputOTPSlot,
// } from "@/components/ui/input-otp";
// import { Link, useNavigate } from "react-router-dom";
// import InputComponent from "@/components/input";
// import ButtonComponent from "@/components/button";
// import { useMutation } from "@tanstack/react-query";
// import { toast } from "react-toastify";
// import { useToast } from "@/hooks/use-toast";
// import { title } from "process";
// import { set } from "mongoose";
// const ResetPassword = () => {
//   const [value, setValue] = useState("");
//   const { toast } = useToast();
//   const navigate = useNavigate();
//   const [reset, setReset] = useState({
//     OPT: "",
//     newPassword: "",
//   });
//   console.log(reset);
//   const mutation = useMutation({
//     mutationKey: ["reset-password"],
//     mutationFn: () =>
//       resetPasswordAPI({ OPT: reset.OPT, newPassword: reset.newPassword }),
//     onSuccess: () => {
//       toast({
//         title: "Reset password success",
//         description: "Your password has been reset",
//       });
//       navigate("/login");
//     },
//   });
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen px-3">
//       <div className="bg-white shadow-lg rounded-xl p-6 max-w-md w-full">
//         <h2 className="text-2xl font-semibold text-center">Enter your code</h2>
//         <p className="text-gray-600 text-center mb-6">
//           We send a code to test@gmail.com
//         </p>
//         <div className="space-y-4 ">
//           {/* Ma OTP */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Enter code:
//             </label>
//             <InputOTP
//               maxLength={6}
//               value={reset.OPT}
//               onChange={(value) => setReset({ ...reset, OPT: value })}
//             >
//               <InputOTPGroup>
//                 <InputOTPSlot index={0} />
//                 <InputOTPSlot index={1} />
//                 <InputOTPSlot index={2} />
//                 <InputOTPSlot index={3} />
//                 <InputOTPSlot index={4} />
//                 <InputOTPSlot index={5} />
//               </InputOTPGroup>
//             </InputOTP>
//           </div>
//           {/* Mat khau moi */}
//           <div>
//             <p className="block text-sm font-medium text-gray-700 mb-2">
//               New password
//             </p>
//             <InputComponent
//               placeholder="Enter your new password"
//               type="password"
//               value={value}
//               onChange={(e) => setValue(e.target.value)}
//             />
//           </div>
//           {/* Xac nhan mat khau */}
//           <div>
//             <p className="block text-sm font-medium text-gray-700 mb-2">
//               Confirm password
//             </p>
//             <InputComponent
//               placeholder="Confirm your password"
//               type="password"
//               value={value}
//               onChange={(e) => setValue(e.target.value)}
//             />
//             {/* Nut xac nhan */}
//             <ButtonComponent
//               name="Reset password"
//               isLoading={mutation.isPending}
//             />
//           </div>
//           <div className="text-center mt-4 text-sm">
//             <p className="text-gray-600">
//               Didn't receive the email{""}
//               <Link to="/" className="ext-blue-600 font-medium hover:underline">
//                 Click to resend
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;
