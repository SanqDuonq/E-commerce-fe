import ButtonComponent from "../button";
import { assets } from "@/assets/assets";

const OrderItems = () => {
  return (
    <div className="w-1/2 flex flex-row items-center justify-center border border-gray-300 text-center rounded-lg shadow-md p-4 ">
      <div className="flex flex-row items-center gap-10 ">
        <img
          className=" w-24 h-36 object-cover rounded-md"
          src={assets.contact_img}
          alt="Hình ảnh"
        />
        <div className="text-gray-800 w-1/2 text-left ">
          <p className="font-semibold">Mã đơn hàng: #123456</p>
          <p className="text-sm">Tên sản phẩm đầu tiên</p>
          <p className="text-sm">Ngày giao hàng dự kiến: 25/03/2025</p>
          <p className="font-light text-blue-700">Tổng số tiền: 100 $</p>
        </div>
        <div className="">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderItems;
