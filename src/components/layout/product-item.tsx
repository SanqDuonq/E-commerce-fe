import { ShopContext } from "@/context/ShopContext";
import { IProduct } from "@/interface/product.interface";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const ProductItem: React.FC<IProduct> = ({ IP}) => {
  const { currency } = useContext(ShopContext)!;
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image[0]}
          alt=""
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price.toFixed(2)} {/* Hiển thị giá với 2 chữ số thập phân */}
      </p>
    </Link>
  );
};

export default ProductItem;
