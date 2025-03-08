import {
  IForgotPassword,
  IReset,
  ISignIn,
  ISignUp,
  IVerify,
} from "../interface/auth.interface";
import APIConfig from "./api.config";

export const signInAPI = async (data: ISignIn) => {
  const res = await APIConfig.post("/api/auth/sign-in", data);
  return res.data;
};
export const signUpAPI = async (data: ISignUp) => {
  const res = await APIConfig.post("/api/auth/sign-up", data);
  return res;
};
export const verifyEmailAPI = async (data: IVerify) => {
  const res = await APIConfig.post("/api/auth/verify-email", data);
  return res;
};
export const forgotPasswordAPI = async (data: IForgotPassword) => {
  const res = await APIConfig.post("/api/auth/forgot-password", data);
  return res;
};
export const resetPasswordAPI = async (data: IReset) => {
  const res = await APIConfig.post("api/auth/reset-password", data);
  return res;
};
