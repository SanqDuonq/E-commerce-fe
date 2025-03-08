export interface ISignUp {
  fullName: string;
  email: string;
  password: string;
}
export interface ISignIn {
  email: string;
  password: string;
}
export interface IInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
}
export interface IVerify {
  email: string;
  OTP: string;
}
export interface IForgotPassword {
  email: string;
}
export interface IReset {
  OTP: string;
  newPassword: string;
}
