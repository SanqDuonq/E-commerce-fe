// import { createContext } from "react";
// import { products } from "../assets/assets"; // Đổi từ "prodcuts" thành "products"
// // Định nghĩa kiểu dữ liệu cho context
// interface ShopContextProviderProps {
//   children: React.ReactNode;
// }

// export const ShopContext = createContext(null);
// const ShopContextProvider = (props) => {
//   const currency = `$`;
//   const delivery_fee = 10;
//   const contextvalue = { products, currency, delivery_fee };
//   return (
//     <ShopContext.Provider value={contextvalue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };
// export default ShopContextProvider;
import { createContext, useEffect, useState } from "react";
import { products, Product } from "../assets/assets"; // Import đúng kiểu dữ liệu
import { toast } from "react-toastify";
import { it } from "node:test";
import { useNavigate } from "react-router-dom";

// Định nghĩa kiểu dữ liệu cho context
interface ShopContextType {
  products: Product[]; // Sử dụng kiểu dữ liệu "Product[]" thay vì "products[]"
  currency: string;
  delivery_fee: number;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: Record<string, number>;
  setCartItems: React.Dispatch<React.SetStateAction<Record<string, number>>>;
  addToCart: (itemID: string, quantity?: number) => void;
  getCartCount: () => number;
}

// Khởi tạo context với kiểu dữ liệu phù hợp
export const ShopContext = createContext<ShopContextType | null>(null);

// Định nghĩa kiểu dữ liệu cho props của Provider
interface ShopContextProviderProps {
  children: React.ReactNode;
}

const ShopContextProvider: React.FC<ShopContextProviderProps> = ({
  children,
}) => {
  const currency = `$`;
  const delivery_fee = 10;
  const [search, setSearch] = useState(``);
  const [showSearch, setShowSearch] = useState(true);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();
  const addToCart = async (itemId: string, size: string) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((products) => products._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo?.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };
  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);
  const contextValue: ShopContextType = {
    products, // Không còn lỗi
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;