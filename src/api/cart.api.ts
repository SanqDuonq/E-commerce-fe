import { ICart } from "@/interface/cart.interface";
import APIConfig from "./api.config";
export const addCartAPI = async (data: ICart) => {
  const res = await APIConfig.post("/api/cart/add-cart", data);
  return res;
};
export const getCartAPI = async (data: ICart) => {
  const res = await APIConfig.get("/api/cart/get-cart/:id", data);
  return res;
};
export const updateCartAPI = async (data: ICart) => {
  const res = await APIConfig.put("/api/cart/update-cart", data);
  return res;
};
export const deleteCartAPI = async (data: ICart)=>{
  const res = await APIConfig.delete("/api/cart/remove-cart/:id", data);
  return res;
}
export const clearCartAPI = async (data: ICart)=>{
  const res = await APIConfig.delete("/api/cart/clear-cart", data);
  return res;
}
