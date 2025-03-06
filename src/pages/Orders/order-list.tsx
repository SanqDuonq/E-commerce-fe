import { assets } from "@/assets/assets";
import ButtonComponent from "@/components/button";
import OrderItems from "@/components/layout/order-item";
import Sidebar from "@/components/ui/sidebar";

const ListOrder = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-center gap-6">
        <div className="left-0">
          <Sidebar></Sidebar>
        </div>
        <OrderItems />
      </div>
    </div>
  );
};

export default ListOrder;
