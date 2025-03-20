export interface Voucher {
  _id: string;
  code: string;
  name: string;
  description: string;
  discountType: string; // "percentage" hoặc "fixed"
  discountValue: number;
  minOrderValue: number;
  maxDiscountValue: number;
}