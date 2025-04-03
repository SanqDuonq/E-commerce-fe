import ForgotPassword from "@/pages/auth/forgot-password";
import Login from "@/pages/auth/login";
import ResetPassword from "@/pages/auth/reset-password";
import SignUp from "@/pages/auth/sign-up";
import VerifyEmail from "@/pages/auth/verify-email";
import { Route } from "react-router-dom";

const PublicRoute = () => (
  <>
    <Route path="/login" element={<Login />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/verify-email" element={<VerifyEmail />} />
    <Route path="forgot-password" element={<ForgotPassword />} />
    <Route path="reset-password" element={<ResetPassword />} />
  </>
);

export default PublicRoute;
