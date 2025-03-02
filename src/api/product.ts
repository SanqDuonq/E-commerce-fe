import { IProduct } from "@/interface/product.interface";
import APIConfig from "./api.config";
export const addProductAPI = async (data: IProduct) => {
  const res = await APIConfig.post("/api/prod/add-product", data);
  return res.data;
};
export const getProductAPI = async (data: IProduct) => {
  const res = await APIConfig.post("/api/prod/:id", data);
  return res;
};
export const deleteProductAPI = async (data: IProduct) => {
  const res = await APIConfig.post("/api/auth/sign-up", data);
  return res;
};
