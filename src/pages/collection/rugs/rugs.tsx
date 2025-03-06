import { assets } from "@/assets/assets";
import ProductItem from "@/components/layout/product-item";
import Title from "@/components/layout/title";
import Filter from "@/components/ui/filter";
import TitleFilter from "@/components/ui/titleFilter";
import { useState } from "react";

const Rugs = () => {
  // const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState<ProductType[]>([]);
  const rugsType = ["A", "B", "C", "D"];

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        {/* Filter Option */}
        <div className="min-w-60">
          <TitleFilter title="FILTERS" />
          {/* Rugs by Type */}
          <Filter
            titleFilter="Rugs by Type"
            filterDetail_01="Area Rugs"
            filterDetail_02="Runner Rugs"
            filterDetail_03="Doormats"
            filterDetail_04="Outdoor Rugs"
          />
          {/* Rugs by Size */}
          <Filter
            titleFilter="Rugs by Size"
            filterDetail_01="2.5' x 8' Rugs"
            filterDetail_02="5' x 8' Rugs"
            filterDetail_03="6' x 9' Rugs"
            filterDetail_04="8' x 10' Rugs"
          />

          {/* Rugs by Material */}
          <Filter
            titleFilter="Rugs by Material"
            filterDetail_01="Wool & Wool Blend Rugs"
            filterDetail_02="Viscose Rugs"
            filterDetail_03="Performance Rugs"
            filterDetail_04="TENCEL™ Lyocell Rugs"
          />
        </div>
        {/* Collection Rugs */}
        <div className="flex-1">
          {/* Title & Sort */}
          <div className="flex justify-between text-base">
            <Title text1="All" text2="Rugs" />
            {/* Product sort */}
            <select className="border border-gray-300 text-sm px-2">
              <option value="default">Default</option>
              <option value="price">Price</option>
              <option value="new">New</option>
            </select>
          </div>
          {/* Map product */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Rugs;
