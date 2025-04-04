import ProductItem from "./product-item";
import Title from "./title";
import { useQuery } from "@tanstack/react-query";
import { BestSellerCollectionAPI } from "@/api/home.api";
import { IProduct } from "@/interface/product.interface";

const BestSeller = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-Best-Seller-collection"],
    queryFn: () => BestSellerCollectionAPI("Best Seller"),
  });

  console.log("Data", data);
  if (isLoading) return "isLoading...";
  if (isError) return "Fetching data error";

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1="BEST " text2="SELLERS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {data?.data?.map((item: IProduct, index: number) => (
          <ProductItem
            key={index}
            name={item.name}
            price={item.price}
            thumbnail={item.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
