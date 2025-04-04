import mongoose from "mongoose";

export interface ICart {
    userId: mongoose.Types.ObjectId,
    items: {
        productId: mongoose.Types.ObjectId,
        quantity: number
    }[]
}