import NavbarCollection from "@/components/layout/navbar-colection";
import ProductItem from "@/components/layout/product-item";
import Title from "@/components/layout/title";
import Filter from "@/components/ui/filter";
import TitleFilter from "@/components/ui/titleFilter";
import { useState } from "react";
const DecorMirrors = () => {
  const [setType] = useState([]);
  const [filterProducts, setFilterProducts] = useState<ProductType[]>([]);
  return (
    <div>
      <NavbarCollection />
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        {/* Filter option */}
        <div className="min-w-60">
          <TitleFilter title="Filter" />
          {/* Furniture by type */}
          <Filter
            titleFilter="Filter by type"
            value="type"
            onChange={() => setType}
            filterDetail_01="Living Room Furniture"
            filterDetail_02="Kitchen Furniture"
            filterDetail_03="BedRoom Furniture"
            filterDetail_04="Office Furniture"
          />
          {/* Furniture by color */}
          <Filter
            titleFilter="Furniture by color"
            value="type"
            onChange={() => setType}
            filterDetail_01="Black"
            filterDetail_02="Brown"
            filterDetail_03="White"
            filterDetail_04="NAtural"
          />
          {/* Furniture by Material */}
          <Filter
            titleFilter="Furniture by Material"
            value="type"
            onChange={() => setType}
            filterDetail_01="Wood"
            filterDetail_02="Fabric"
            filterDetail_03="Metal"
            filterDetail_04="Leather"
          />
          {/* Furniture by Price */}
          <Filter
            titleFilter="Furniture by Price"
            value="type"
            onChange={() => setType}
            filterDetail_01="$100 to $500"
            filterDetail_02="$500 to $1000"
            filterDetail_03="$1000 to $1500"
            filterDetail_04="$1500 to $2000"
          />
        </div>
        {/* Collection Furniture */}
        <div className="flex-1">
          <Title text1="All" text2="Furniture" />
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
  );
};

export default DecorMirrors;
