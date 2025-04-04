import { IProduct } from "@/interface/product.interface";
import APIConfig from "./api.config";
import { IQuery } from "@/interface/query.interface";
export const addProductAPI = async (data: IProduct) => {
  const res = await APIConfig.post("/api/prod/add-product", data);
  return res.data;
};
export const editProductAPI = async (data: IProduct) => {
  const res = await APIConfig.post("/api/prod/edit-product/:id", data);
  return res;
};
export const getProductAPI = async (query: Partial<IQuery>) => {
  const res = await APIConfig.get("/api/prod/get-all-product", {
    params: query,
  });
  console.log(res.data);
  return res.data;
};
export const deleteProductAPI = async (data: IProduct) => {
  const res = await APIConfig.post("/api/auth/sign-up", data);
  return res;
};
