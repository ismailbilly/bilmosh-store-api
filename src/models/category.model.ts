import mongoose from "mongoose";
import { customAlphabet } from "nanoid";
import { UserDocument } from "./user.model";

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10)
export interface CategoryInput {
  name: string;
  description: string;

}
export interface CategoryDocument extends CategoryInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const categorySchema = new mongoose.Schema(
  {
   
    name: { type: String, required: true },
    description: { type: String},
   
  },
  {
    timestamps: true,
  }
);

const CategoryModel = mongoose.model<CategoryDocument>(
  "Category",
  categorySchema
);

export default CategoryModel;
