// import { ShopContext } from "@/context/ShopContext";
// import Title from "./Title";
// import React, { useContext, useEffect, useState } from "react";
// import ProductItem from "./ProductItem";
// const BestSeller = () => {
//   const { products } = useContext(ShopContext)!;
//   // Gọi `useState` đúng cách với giá trị khởi tạo là một mảng rỗng
//   const [bestSeller, setBestseller] = useState([]);
//   useEffect(() => {
//     if (products) {
//       // Kiểm tra xem `products` có giá trị trước khi sử dụng
//       const bestProduct = products.filter((item) => item.bestSeller); // Lọc các sản phẩm bán chạy
//       setBestseller(bestProduct.slice(0, 5)); // Lấy tối đa 5 sản phẩm
//     }
//   }, [products]);
//   return (
//     <div className="my-10">
//       <div className="text-center text-3xl py-8">
//         <Title text1={"BEST"} text2={"SELLERS"} />
//         <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Ipsum is simply dummy text of the{" "}
//         </p>
//       </div>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
//         {bestSeller.map((item, index) => (
//           <ProductItem
//             key={index}
//             id={item._id}
//             name={item.name}
//             image={item.image}
//             price={item.price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BestSeller;
import { ShopContext } from "@/context/ShopContext";
import React, { useContext, useEffect, useState } from "react";
import ProductItem from "./ProductItem"; // Đảm bảo import component
import Title from "./Title";

const BestSeller = () => {
  const { products } = useContext(ShopContext)!; // Dùng '!' để chắc chắn không null
  const [bestSeller, setBestseller] = useState<typeof products>([]);

  useEffect(() => {
    if (products?.length) {
      const bestProduct = products.filter((item) => item.bestSeller);
      setBestseller(bestProduct.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1="BEST" text2="SELLERS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
