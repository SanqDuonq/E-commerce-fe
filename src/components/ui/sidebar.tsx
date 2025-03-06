// Interface IOrderStatus {
//   id: string;
//   label: string;
//   icon: ReactNode;
// }
// const Sidebar = () => {

//   return (
//     <>
//       <div className="border border-gray-300 pl-5 py-3 mt-6 sm:block ">
//         <p>Trạng thái đơn hàng</p>
//         <div className="flex flex-col justify-center ">
//           <button className="hover: bg-slate-500"> Order</button>
//           <button className="hover: bg-slate-500"> Processing Order</button>
//           <button className="hover: bg-slate-500"> Completed Order</button>
//           <button className="hover: bg-slate-500"> Cancelled Order</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

import { useState } from "react";
import { FaBox, FaSpinner, FaCheck, FaTimes, FaClock } from "react-icons/fa";

const orderStatuses = [
  { id: "all", label: "Tất cả", icon: <FaBox /> },
  { id: "processing", label: "Đang xử lý", icon: <FaSpinner /> },
  { id: "completed", label: "Hoàn thành", icon: <FaCheck /> },
  { id: "cancelled", label: "Đã hủy", icon: <FaTimes /> },
  { id: "pending", label: "Chờ xác nhận", icon: <FaClock /> },
];

export default function SidebarOrderList({ onStatusChange }) {
  const [selectedStatus, setSelectedStatus] = useState("all");

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
    onStatusChange(status);
  };

  return (
    <div className="w-64 h-screen bg-white border-r shadow-md p-5">
      <h2 className="text-xl font-semibold mb-4">Order Status</h2>
      <ul className="space-y-2">
        {orderStatuses.map((status) => (
          <li key={status.id}>
            <button
              className={`flex items-center w-full px-4 py-2 rounded-lg transition 
                ${
                  selectedStatus === status.id
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              onClick={() => handleStatusClick(status.id)}
            >
              <span className="mr-3">{status.icon}</span>
              {status.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
