import React from "react";

interface Voucher {
  _id: string;
  code: string;
  name: string;
  description: string;
  discountType: string;
  discountValue: number;
  minOrderValue: number;
  maxDiscountValue: number;
}

interface SelectedVoucherProps {
  voucher: Voucher;
}

const SelectedVoucher: React.FC<SelectedVoucherProps> = ({ voucher }) => {
  return (
    <div className="w-full text-[#ea714e] px-3 border border-[#ea714e] rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#ea714e]/50border border-[ea714e]">
      <div>
        {voucher.name} ({voucher.code})
      </div>
      <div>
        {voucher.discountType === "percentage"
          ? `Giảm ${
              voucher.discountValue
            }% (Tối đa ${voucher.maxDiscountValue.toLocaleString()}đ)`
          : `Giảm ${voucher.discountValue.toLocaleString()}đ`}
      </div>
    </div>
  );
};

export default SelectedVoucher;
