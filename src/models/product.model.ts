import mongoose from "mongoose";
import { customAlphabet } from "nanoid";
import { UserDocument } from "./user.model";
import { CategoryDocument} from "./category.model";

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10)
export interface ProductInput {
  user: UserDocument["_id"];
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  discount?: number;
  category: CategoryDocument["_id"];
}
export interface ProductDocument extends ProductInput, mongoose.Document {
  isDiscountActive: Boolean;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
      unique: true,
      default: () => `product_${nanoid}`,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    discount: { type: Number },
    image: { type: String, required: true },
    userAgent: { type: String },
    isDiscountActive: {type: Boolean, default: false}
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model<ProductDocument>("Product", productSchema);

export default ProductModel;
