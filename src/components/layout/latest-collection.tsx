import ProductItem from "./product-item";
import Title from "./title";
import { useQuery } from "@tanstack/react-query";
import { LatestCollectionAPI } from "@/api/home.api";
import { IProduct } from "@/interface/product.interface";

const LatestCollection = () => {
    const { data, isLoading, isError} = useQuery({
        queryKey: ['get-latest-collection'],
        queryFn: () => LatestCollectionAPI('New')
    })

    console.log('Data', data);
    if (isLoading) return 'isLoading...'
    if (isError) return 'Fetching data error';

    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <Title text1={"LATEST "} text2={"COLLECTIONS"} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Discover the latest collections with modern and sophisticated styles. We bring you unique designs that align with current fashion trends.
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

export default LatestCollection;
