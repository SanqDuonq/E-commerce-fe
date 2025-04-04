import { IProduct } from "@/interface/product.interface";
import { formatCurrency } from '../../../util/format-currency';

const ProductItem: React.FC<Partial<IProduct>> = ({
    name,
    thumbnail,
    price,
}) => {
  return (
    <div className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={thumbnail}
          alt='Image'
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {formatCurrency(price!)}
      </p>
    </div>
  );
};

export default ProductItem;
